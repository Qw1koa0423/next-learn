import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-25 11:54:45
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 16:13:47
 * @FilePath: \next-learn\components\ui\Notification.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
interface NotificationProps {
    title: string
    message: string
    status: 'success' | 'error' | 'pending'
}

function Notification(props: NotificationProps) {
    const { title, message, status } = props
    const [statusClass, setStatusClass] = useState<string>(' bg-gray-800')
    useEffect(() => {
        switch (status) {
            case 'success':
                setStatusClass('bg-[#12bd4b] text-[#343036]')
                break
            case 'error':
                setStatusClass('bg-[#a10c4a] text-[#dfdbe6]')
                break
            case 'pending':
                setStatusClass('bg-[#177cbe] text-[#dfdbe6]')
                break
            default:
                break
        }
    }, [status])
    return ReactDOM.createPortal(
        <div
            className={`fixed bottom-0 left-0 h-20 w-full  flex  justify-between items-center  py-0 px-8 rounded-tr-none rounded-tl-none shadow-notification md:w-[40rem] md:left-[calc(50%-20rem)] md:rounded-tr-md md:rounded-tl-md  ${statusClass}`}
        >
            <h2 className=" m-0 text-xl ">{title}</h2>
            <p className=" m-0">{message}</p>
        </div>,
        document.getElementById('notifications')!
    )
}

export default Notification
