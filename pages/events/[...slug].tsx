import { getFilteredEvents } from '@/helpers/api-utils'
import { useRouter } from 'next/router'
import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/ResultsTitle'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/ErrorAlert'
import { GetServerSidePropsContext } from 'next'
import { EnventProps } from '@/types'
/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:18:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 13:23:17
 * @FilePath: \next-learn\pages\events\[...slug].tsx
 * @Description: 筛选的事件页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
interface FilteredEventsPageProps {
    hasError?: boolean
    events?: EnventProps[]
    date?: {
        year: number
        month: number
    }
}

export default function FilteredEventsPage(props: FilteredEventsPageProps) {
    const { hasError, events, date } = props

    if (hasError) {
        return (
            <>
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
    const filteredEvents = events
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>没有找到相关的事件</p>
                </ErrorAlert>
                <Button className=" max-w-max mx-auto" link="/events">
                    显示所有事件
                </Button>
            </>
        )
    }
    const dateObj = new Date(date!.year, date!.month - 1)
    return (
        <>
            <ResultsTitle date={dateObj} />
            <EventList items={filteredEvents} />
        </>
    )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context
    const filterData = params?.slug as string[]

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth
    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            props: {
                hasError: true,
            },
            /** 返回404 */
            // notFound: true,
        }
    }
    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    })
    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth,
            },
        },
    }
}
