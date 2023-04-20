/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 15:01:45
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 15:54:45
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useRef, useState } from 'react'
import { FeedbackItem } from '@/types'
export default function HomePage() {
    const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([])
    const emailInputRef = useRef<HTMLInputElement>(null)
    const feedbackInputRef = useRef<HTMLTextAreaElement>(null)
    function submitFormHandler(event: React.FormEvent) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current!.value
        const enteredFeedback = feedbackInputRef.current!.value
        const reqBody = { email: enteredEmail, text: enteredFeedback }
        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    function loadFeedbackHandler() {
        fetch('/api/feedback')
            .then((response) => response.json())
            .then((data) => setFeedbackItems(data.feedback))
    }
    return (
        <div>
            <h1>主页</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">邮箱</label>
                    <input type="email" id="email" ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="feedback">反馈</label>
                    <textarea
                        id="feedback"
                        rows={5}
                        ref={feedbackInputRef}
                    ></textarea>
                </div>
                <button>提交反馈</button>
            </form>
            <hr />
            <button onClick={loadFeedbackHandler}>加载反馈列表</button>
            <ul>
                {feedbackItems.map((item) => (
                    <li key={item.id}>
                        {item.text} - {item.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
