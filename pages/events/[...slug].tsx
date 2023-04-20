import { useRouter } from 'next/router'
import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/ResultsTitle'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/ErrorAlert'
import { EnventProps } from '@/types'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Head from 'next/head'
/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:18:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 14:14:45
 * @FilePath: \next-learn\pages\events\[...slug].tsx
 * @Description: 筛选的事件页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

export default function FilteredEventsPage() {
    const router = useRouter()
    const filterData = router.query.slug as string[]
    const [loadEvents, setLoadEvents] = useState<EnventProps[]>()
    const { data, error } = useSWR(
        'https://nextjs-course-234b1-default-rtdb.firebaseio.com/events.json',
        (url) => fetch(url).then((res) => res.json())
    )
    useEffect(() => {
        if (data) {
            const events: EnventProps[] = []
            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key],
                })
            }
            setLoadEvents(events)
        }
    }, [data])
    let pageHeadData = (
        <Head>
            <title>筛选的事件</title>
            <meta
                name="description"
                content={`筛选所有事件列表`}
                key="description"
            />
        </Head>
    )
    if (!loadEvents) {
        return (
            <>
                {pageHeadData}
                <p className="center">加载中...</p>
            </>
        )
    }
    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth
    const filteredEvents = loadEvents.filter((event) => {
        const eventDate = new Date(event.date)
        return (
            eventDate.getFullYear() === numYear &&
            eventDate.getMonth() === numMonth - 1
        )
    })

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12 ||
        error
    ) {
        return (
            <>
                {pageHeadData}
                <ErrorAlert>
                    <p>无效的筛选条件</p>
                </ErrorAlert>
                <div className="center">
                    <Button className=" max-w-max mx-auto" link="/events">
                        显示所有事件
                    </Button>
                </div>
            </>
        )
    }
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                {pageHeadData}
                <ErrorAlert>
                    <p>没有找到相关的事件</p>
                </ErrorAlert>
                <Button className=" max-w-max mx-auto" link="/events">
                    显示所有事件
                </Button>
            </>
        )
    }
    const date = new Date(numYear, numMonth - 1)
    pageHeadData = (
        <Head>
            <title>筛选的事件</title>
            <meta
                name="description"
                content={`所有的事件 ${numMonth}/${numYear}`}
            />
        </Head>
    )
    return (
        <>
            {pageHeadData}
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}
