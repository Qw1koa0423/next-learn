/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:18:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 17:24:00
 * @FilePath: \next-learn\pages\events\[eventId].tsx
 * @Description: 事件详细信息页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import {
    getEventById,
    getAllEvents,
    getFeaturedEvents,
} from '@/helpers/api-utils'
import EventSummary from '@/components/event-detail/EventSummary'
import EventLogistics from '@/components/event-detail/EventLogistics'
import EventContent from '@/components/event-detail/EventContent'
import { GetStaticPropsContext } from 'next'

import { EnventProps } from '@/types'
import Head from 'next/head'
import Comments from '@/components/input/Comments'

interface EventDetailPageProps {
    selectedEvent: EnventProps
}

export default function EventDetailPage(props: EventDetailPageProps) {
    const { selectedEvent } = props

    const event = selectedEvent
    if (!event) {
        return (
            <div className="center">
                <p>加载中...</p>
            </div>
        )
    }
    return (
        <>
        <Head>
        <title>{event.title}</title>
        <meta
          name='description'
          content={event.description}
        />
      </Head>
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
            <Comments eventId={event.id}/>
        </>
    )
}
export async function getStaticProps(context: GetStaticPropsContext) {
    const eventId = context.params?.eventId
    const event = await getEventById(eventId as string)

    return {
        props: {
            selectedEvent: event,
        },
        revalidate: 30,
    }
}
export async function getStaticPaths() {
    const event = await getFeaturedEvents()
    const paths = event.map((event) => {
        return {
            params: {
                eventId: event.id,
            },
        }
    })
    return {
        paths: paths,
        fallback: true,
    }
}
