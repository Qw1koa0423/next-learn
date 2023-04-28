/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 15:19:14
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-24 17:12:54
 * @FilePath: \next-learn\components\home-page\FeaturedPosts.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { Post } from '@/types'
import PostsGrid from '../posts/PostsGrid'

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
    return (
        <section className=" w-[90%] max-w-7xl my-8 mx-auto ">
            <h2 className=" text-[2rem] text-[#343036] text-center md:text-[4rem] ">
                精选帖子
            </h2>
            <PostsGrid posts={posts} />
        </section>
    )
}
