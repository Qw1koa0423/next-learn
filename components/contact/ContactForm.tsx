/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-25 11:53:18
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 15:56:20
 * @FilePath: \next-learn\components\contact\ContactForm.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useState, useEffect, FormEvent } from 'react'
import Notification from '@/components/ui/Notification'
async function senContactData(contactDetails: {
    email: string
    name: string
    message: string
}) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message || '发生错误!')
    }
}
export default function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredName, setEnteredName] = useState<string>('')
    const [enteredMessage, setEnteredMessage] = useState<string>('')
    const [requestStatus, setRequestStatus] = useState<
        'pending' | 'success' | 'error' | undefined
    >()
    const [requestError, setRequestError] = useState<string>('')
    const [notification, setNotification] = useState<{
        title: string
        message: string
        status: 'success' | 'error' | 'pending'
    }>()
    useEffect(() => {
        switch (requestStatus) {
            case 'success':
                setNotification({
                    title: '成功',
                    message: '您的消息已成功发送!',
                    status: 'success',
                })
                break
            case 'error':
                setNotification({
                    title: '错误',
                    message: requestError || '发生错误!',
                    status: 'error',
                })
                break
            case 'pending':
                setNotification({
                    title: '发送中',
                    message: '您的消息正在发送中!',
                    status: 'pending',
                })
            default:
                break
        }
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestError('')
                setNotification(undefined)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [requestStatus, requestError])
    async function sendMessageHandler(event: FormEvent) {
        event.preventDefault()
        setRequestStatus('pending')
        try {
            await senContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            })
            setRequestStatus('success')
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
        } catch (error: any) {
            setRequestError(error.message)
            setRequestStatus('error')
        }
    }
    return (
        <section className="my-8 mx-auto rounded-md  bg-gray-100 w-[90%] max-w-[50rem] p-4 shadow-li text-2xl ">
            <h1 className="text-[2rem] my-4 mx-0 text-left md:text-[4rem] md:text-center">
                我怎么帮助你?
            </h1>
            <form onSubmit={sendMessageHandler}>
                <div className=" flex gap-x-4 flex-wrap">
                    <div className="flex-1 min-w-[10rem]">
                        <label
                            className="block text-['Oswald',sans-serif] font-bold mt-2 mx-0 mb-1 "
                            htmlFor="email"
                        >
                            邮箱
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="inherit-font p-1 rounded-[4px] w-full  border border-solid border-gray-400 bg-gray-50 resize-none"
                            required
                            value={enteredEmail}
                            onChange={(event) =>
                                setEnteredEmail(event.target.value)
                            }
                        />
                    </div>
                    <div className="flex-1 min-w-[10rem]">
                        <label
                            className="block text-['Oswald',sans-serif] font-bold mt-2 mx-0 mb-1 "
                            htmlFor="name"
                        >
                            姓名
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="inherit-font p-1 rounded-[4px] w-full  border border-solid border-gray-400 bg-gray-50 resize-none"
                            required
                            value={enteredName}
                            onChange={(event) =>
                                setEnteredName(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="flex-1 min-w-[10rem]">
                    <label
                        className="block text-['Oswald',sans-serif] font-bold mt-2 mx-0 mb-1 "
                        htmlFor="message"
                    >
                        消息
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        className="inherit-font p-1 rounded-[4px] w-full  border border-solid border-gray-400 bg-gray-50 resize-none"
                        required
                        value={enteredMessage}
                        onChange={(event) =>
                            setEnteredMessage(event.target.value)
                        }
                    ></textarea>
                </div>
                <div className="mt-4 text-right">
                    <button className="inherit-font cursor-pointer bg-[#3d0264] border border-solid border-[#3d0264] rounded-[4px] text-[#c8b3ce]  shadow-li hover:bg-[#5a097a] hover:border-[#5a097a]">
                        发送消息
                    </button>
                </div>
            </form>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </section>
    )
}
