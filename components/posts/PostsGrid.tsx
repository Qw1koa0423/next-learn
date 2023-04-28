/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 16:18:52
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-24 16:48:36
 * @FilePath: \next-learn\components\posts\PostsGrid.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import PostItem from './PostItem'
import { Post } from '@/types'
export default function PostsGrid({ posts }: { posts: Post[] }) {
    return (
        <ul className=" list-none m-0 p-0 grid grid-cols-auto-fill gap-6 content-center">
            {posts.map((post) => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    )
}
