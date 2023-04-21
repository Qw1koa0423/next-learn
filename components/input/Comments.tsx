/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 16:42:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-21 09:36:18
 * @FilePath: \next-learn\components\input\Comments.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import NewComment from './NewComment'
import { CommentProps } from '@/types'
interface CommentsProps {
    eventId: string
}
function Comments(props: CommentsProps) {
    const { eventId } = props
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState<CommentProps[]>([])
    useEffect(() => {
        if (showComments) {
            fetch('/api/comments/' + eventId)
                .then((response) => response.json())
                .then((data) => {
                    setComments(data.comments)
                })
        }
    }, [showComments, eventId])
    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus)
    }

    function addCommentHandler(commentData: Omit<CommentProps, 'id'>) {
        // send data to API
        fetch('/api/comments/' + eventId, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <section className="my-12 mx-auto w-[90%] max-w-[40rem] text-center">
            <button
                className="inherit-font rounded-md py-2 px-4 bg-transparent text-[#03be9f] border-[1px] border-solid border-[#03be9f] cursor-pointer hover:bg-[#dcfff9] active:bg-[#dcfff9] "
                onClick={toggleCommentsHandler}
            >
                {showComments ? '隐藏' : '显示'} 评论
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList comments={comments} />}
        </section>
    )
}

export default Comments
