/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-21 14:15:08
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-21 14:22:33
 * @FilePath: \next-learn\components\ui\Notification.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useContext } from 'react'

import NotificationContext from '@/store/NotificationContext'
interface NotificationProps {
    title: string
    message: string
    status: 'success' | 'error' | 'pending'
}
function Notification(props: NotificationProps) {
    const notificationCtx = useContext(NotificationContext)

    const { title, message, status } = props

    let statusClasses = ''

    if (status === 'success') {
        statusClasses = 'bg-[#10be58]'
    }

    if (status === 'error') {
        statusClasses = 'bg-[#e65035]'
    }

    if (status === 'pending') {
        statusClasses = 'bg-[#177cbe]'
    }

    const activeClasses = `fixed  bottom-0 left-0 h-20 w-full bg-[#1b1b1b] flex  justify-between items-center text-white py-2 px-[10%] shadow-notification ${statusClasses}`

    return (
        <div
            className={activeClasses}
            onClick={notificationCtx.hideNotification}
        >
            <h2 className=" m-0 text-xl text-white">{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Notification
