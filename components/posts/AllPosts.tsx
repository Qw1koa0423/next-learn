/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 16:20:02
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 15:58:10
 * @FilePath: \next-learn\components\posts\AllPosts.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import PostsGrid from './PostsGrid'
import { Post } from '@/types'
export default function AllPosts({ posts }: { posts: Post[] }) {
    return (
        <section className=" w-[90%] max-w-[60rem] my-8 mx-auto ">
            <h1 className=" text-[2rem] text-[#343036] text-center md:text-[4rem]">
                全部帖子
            </h1>
            <PostsGrid posts={posts} />
        </section>
    )
}
