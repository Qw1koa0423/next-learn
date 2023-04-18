/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-18 09:14:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 10:52:25
 * @FilePath: \next-learn\components\event-detail\EventSummary.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

interface EventSummaryProps {
    title: string
}

function EventSummary(props: EventSummaryProps) {
    const { title } = props

    return (
        <section className="w-full h-[30vh] bg-gradient-to-bl from-[#008b79] to-[#1180a1]">
            <h1 className=" m-0 pt-12 text-[2rem] text-center text-shadow-h1 text-white md:text-[5rem]">
                {title}
            </h1>
        </section>
    )
}

export default EventSummary
