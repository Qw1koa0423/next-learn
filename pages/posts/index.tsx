/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 16:05:03
 * @FilePath: \next-learn\pages\posts\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import AllPosts from '@/components/posts/AllPosts'
import { getAllPosts } from '@/helpers/posts-util'
import { Post } from '@/types'
import Head from 'next/head'
export default function AllPostsPage({ posts }: { posts: Post[] }) {
    return (
        <>
            <Head>
                <title>全部帖子</title>
                <meta name="description" content="全部帖子" />
            </Head>
            <AllPosts posts={posts} />
        </>
    )
}
export function getStaticProps() {
    const allPosts = getAllPosts()
    return {
        props: {
            posts: allPosts,
        },
    }
}
