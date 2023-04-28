/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 16:21:27
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-25 11:51:22
 * @FilePath: \next-learn\components\posts\post-detail\PostContent.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { Post } from '@/types'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
export default function PostContent({ post }: { post: Post }) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className="w-[95%] max-w-[60rem] my-8 mx-auto text-xl leading-8 bg-gray-100 rounded-r-md p-4 md:p-8">
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown
                components={{
                    img: (image) => {
                        return (
                            <div className=" my-4 mx-auto w-full max-w-[600px]">
                                <Image
                                    alt={image.alt || ''}
                                    src={
                                        '/images/posts/' +
                                        post.slug +
                                        '/' +
                                        image.src
                                    }
                                    width={600}
                                    height={300}
                                />
                            </div>
                        )
                    },
                    code: ({ inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                style={atomDark}
                                language={match[1]}
                                PreTag="div"
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        )
                    },
                }}
            >
                {post.content}
            </ReactMarkdown>
        </article>
    )
}
