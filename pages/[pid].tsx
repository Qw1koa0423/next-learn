/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-18 15:17:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 16:13:40
 * @FilePath: \next-learn\pages\[pid].tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import fs from 'fs'
import type { GetStaticPropsContext } from 'next'
import path from 'path'
interface ProductsType {
    id: string
    title: string
    description: string
}
interface ProductDetailPageProps {
    loadedProduct: ProductsType
}
export default function ProductDetailPage(props: ProductDetailPageProps) {
    const { loadedProduct } = props
    // if (!loadedProduct) {
    //     return <p>加载中...</p>
    // }
    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}
export async function getStaticProps(context: GetStaticPropsContext) {
    const { params } = context
    const productId = params?.pid
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(jsonData) as {
        products: ProductsType[]
    }
    const product = data.products.find((item) => item.id === productId)
    return {
        props: {
            loadedProduct: product,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    pid: 'p1',
                },
            },
            // {
            //     params: {
            //         pid: 'p2',
            //     },
            // },
            // {
            //     params: {
            //         pid: 'p3',
            //     },
            // },
        ],
        //当fallback为true时，如果在paths中没有匹配到的路径，会自动渲染一个空白页面，然后再次请求数据，渲染页面
        //当fallback为false时，如果在paths中没有匹配到的路径，会返回404页面
        //当fallback为blocking时，如果在paths中没有匹配到的路径，会自动渲染一个空白页面，然后再次请求数据，渲染页面，但是会等待数据请求完成后再渲染页面,这样可以避免页面闪烁
        fallback: 'blocking',
    }
}
