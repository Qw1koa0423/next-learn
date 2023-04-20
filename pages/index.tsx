/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 16:42:53
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 17:27:03
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:10:42
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 17:20:20
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import EventList from '@/components/events/EventList'
import { EnventProps } from '@/types'
import NewsletterRegistration from '@/components/input/NewsletterRegistration'
import { getFeaturedEvents } from '@/helpers/api-utils'
import Head from 'next/head'
interface HomePageProps {
    events: EnventProps[]
}
export default function HomePage(props: HomePageProps) {
    const { events } = props
    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta
                    name="description"
                    content="找到很多让你不断发展的伟大事件。。。"
                />
            </Head>
            <NewsletterRegistration />
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
