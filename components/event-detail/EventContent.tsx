/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-18 09:14:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 09:35:05
 * @FilePath: \next-learn\components\event-detail\EventContent.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
interface EventContentProps {
    children: React.ReactNode
}

function EventContent(props: EventContentProps) {
    const { children } = props
    return (
        <section className="text-2xl text-[#3a3a3a] w-[90%] max-w-[40rem] m-auto mt-32 text-center">
            {children}
        </section>
    )
}

export default EventContent
