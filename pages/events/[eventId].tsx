/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:18:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 14:06:16
 * @FilePath: \next-learn\pages\events\[eventId].tsx
 * @Description: 事件详细信息页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useRouter } from 'next/router'
import { getEventById } from '@/data/dummy-data'
import EventSummary from '@/components/event-detail/EventSummary'
import EventLogistics from '@/components/event-detail/EventLogistics'
import EventContent from '@/components/event-detail/EventContent'
import ErrorAlert from '@/components/ui/ErrorAlert'
export default function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId as string)
    if (!event) {
        return (
            <ErrorAlert>
                <p>暂无结果！</p>
            </ErrorAlert>
        )
    }
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}
