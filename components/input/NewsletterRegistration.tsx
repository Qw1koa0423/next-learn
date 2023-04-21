/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 16:42:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-21 16:16:15
 * @FilePath: \next-learn\components\input\NewsletterRegistration.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

import { useRef, useContext } from 'react'
import NotificationContext from '@/store/NotificationContext'
function NewsletterRegistration() {
    const emailInputRef = useRef<HTMLInputElement>(null)
    const notificationsCtx = useContext(NotificationContext)
    function registrationHandler(event: any) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current!.value
        notificationsCtx.showNotification({
            title: '注册中...',
            message: '正在注册时事通讯.',
            status: 'pending',
        })
        // fetch user input (state or refs)
        // optional: validate input
        // send valid data to API
        fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({ email: enteredEmail }),
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
                    title: '注册成功!',
                    message: '感谢您的注册.',
                    status: 'success',
                })
            })
            .catch((error) => {
                notificationsCtx.showNotification({
                    title: '注册失败!',
                    message: error.message || '注册失败.',
                    status: 'error',
                })
            })
    }

    return (
        <section className="my-12 mx-auto w-[90%] max-w-xs">
            <h2 className=" text-center">注册以保持更新！</h2>
            <form onSubmit={registrationHandler}>
                <div className="flex">
                    <input
                        type="email"
                        id="email"
                        placeholder="你的邮箱"
                        aria-label="Your email"
                        ref={emailInputRef}
                        className="inherit-font p-1 rounded-[4px]  rounded-tr-none rounded-br-none border-[1px] border-solid border-[#ccc] flex-1 "
                    />
                    <button className=" bg-[#03be9f] border-[1px] border-solid border-[#03be9f] rounded-md text-[#dafff7] rounded-tl-none rounded-bl-none  inherit-font cursor-pointer hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1] ">
                        注册
                    </button>
                </div>
            </form>
        </section>
    )
}

export default NewsletterRegistration
