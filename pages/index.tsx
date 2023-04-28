/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-21 17:04:17
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 16:02:57
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import FeaturedPosts from '@/components/home-page/FeaturedPosts'
import Hero from '@/components/home-page/Hero'
import { getFeaturedPosts } from '@/helpers/posts-util'
import { Post } from '@/types'
import Head from 'next/head'
export default function HomePage({ posts }: { posts: Post[] }) {
    return (
        <>
            <Head>
                <title>博客</title>
                <meta name="description" content="我是博客" />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    )
}
export function getStaticProps() {
    const FeaturedPosts = getFeaturedPosts()
    return {
        props: {
            posts: FeaturedPosts,
        },
    }
}
