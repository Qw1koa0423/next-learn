/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:04:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 15:05:01
 * @FilePath: \next-learn\pages\blog\[...slug].tsx
 * @Description: 博客文章页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useRouter } from 'next/router'
export default function BlogPostsPage() {
    const router = useRouter()
    console.log('router.query', router.query)

    return (
        <div>
            <h1>博客文章页面</h1>
        </div>
    )
}
