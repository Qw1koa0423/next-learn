/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:22:31
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 16:48:30
 * @FilePath: \next-learn\components\events\EventList.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import EventItem from './EventItem'

interface EventListProps {
    items: {
        id: string
        title: string
        image: string
        date: string
        location: string
    }[]
}

export default function EventList(props: EventListProps) {
    const { items } = props
    return (
        <ul className=" w-[90%] max-w-[40rem] my-10 mx-auto">
            {items.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </ul>
    )
}
