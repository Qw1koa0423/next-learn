/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 16:46:37
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 13:01:37
 * @FilePath: \next-learn\pages\events\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import EventList from '@/components/events/EventList'
import EventsSearch from '@/components/events/EventsSearch'
import { getAllEvents } from '@/data/dummy-data'
import { useRouter } from 'next/router'
import { EnventProps } from '@/types'
interface AllEventsPageProps {
    events: EnventProps[]
}

export default function AllEventsPage(props: AllEventsPageProps) {
    const { events } = props
    const router = useRouter()
    function findEventsHandler(year: string, month: string) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    )
}
export async function getStaticProps() {
    const events = getAllEvents()
    return {
        props: {
            events,
        },
        revalidate: 60,
    }
}
