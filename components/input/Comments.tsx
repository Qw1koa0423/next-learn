/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 16:42:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-21 16:55:38
 * @FilePath: \next-learn\components\input\Comments.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useEffect, useState, useContext } from 'react'
import CommentList from './CommentList'
import NewComment from './NewComment'
import { CommentProps } from '@/types'
import NotificationContext from '@/store/NotificationContext'

interface CommentsProps {
    eventId: string
}
function Comments(props: CommentsProps) {
    const { eventId } = props
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState<CommentProps[]>()
    const notificationsCtx = useContext(NotificationContext)

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

    function addCommentHandler(
        commentData: Omit<CommentProps, '_id' | 'eventId'>
    ) {
        // send data to API
        notificationsCtx.showNotification({
            title: '提交中...',
            message: '正在提交评论.',
            status: 'pending',
        })
        fetch('/api/comments/' + eventId, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return response.json().then((data) => {
                    throw new Error(data.message || '出错了!')
                })
            })
            .then((data) => {
                notificationsCtx.showNotification({
                    title: '评论成功!',
                    message: '感谢您的评论.',
                    status: 'success',
                })
            })
            .catch((error) => {
                notificationsCtx.showNotification({
                    title: '评论失败!',
                    message: error.message || '评论失败.',
                    status: 'error',
                })
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
            {showComments && comments && <CommentList comments={comments} />}
        </section>
    )
}

export default Comments
