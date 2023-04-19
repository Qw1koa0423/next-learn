import { useEffect, useState } from 'react'
import useSWR from 'swr'

interface ISale {
    id: string
    username: string
    volume: number
}
interface LastSalesPageProps {
    sales: ISale[]
}

export default function LastSalesPage(props: LastSalesPageProps) {
    const { sales: isales } = props
    const [sales, setSales] = useState<ISale[]>(isales)
    // const [isloading, setIsLoading] = useState(false)
    // useEffect(() => {
    //     setIsLoading(true)

    //     }, [])

    const { data, error } = useSWR(
        'https://nextjs-course-234b1-default-rtdb.firebaseio.com/sales.json',
        (url) => fetch(url).then((res) => res.json())
    )
    useEffect(() => {
        if (data) {
            const transformedSales: ISale[] = []
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                })
            }
            setSales(transformedSales)
        }
    }, [data])
    if (error) {
        return <p>获取数据失败</p>
    }
    if (!data && !sales) {
        return <p>加载中...</p>
    }
    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - {sale.volume}
                </li>
            ))}
        </ul>
    )
}
export async function getStaticProps() {
    /** 第一种写法 */
    // return fetch(
    //     'https://nextjs-course-234b1-default-rtdb.firebaseio.com/sales.json'
    // )
    //     .then((response) => response.json())
    //     .then((data) => {
    //         const transformedSales: ISale[] = []
    //         for (const key in data) {
    //             transformedSales.push({
    //                 id: key,
    //                 username: data[key].username,
    //                 volume: data[key].volume,
    //             })
    //         }
    //         return {
    //             props: {
    //                 sales: transformedSales,
    //                 revalidate: 10,
    //             },
    //         }
    //     })
    /** 第二种(推荐) */
    const response = await fetch(
        'https://nextjs-course-234b1-default-rtdb.firebaseio.com/sales.json'
    )
    const data = await response.json()
    const transformedSales: ISale[] = []
    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        })
    }
    return {
        props: {
            sales: transformedSales,
            revalidate: 10,
        },
    }
}
