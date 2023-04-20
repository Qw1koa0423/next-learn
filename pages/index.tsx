/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:10:42
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-19 10:54:59
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import EventList from '@/components/events/EventList'
import { EnventProps } from '@/types'

import { getFeaturedEvents } from '@/helpers/api-utils'
interface HomePageProps {
    events: EnventProps[]
}
export default function HomePage(props: HomePageProps) {
    const { events } = props
    return (
        <div>
            <EventList items={events} />
        </div>
    )
}
export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800,
    }
}
