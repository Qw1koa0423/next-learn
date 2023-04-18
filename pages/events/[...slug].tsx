import { getFilteredEvents } from '@/data/dummy-data'
import { useRouter } from 'next/router'
import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/ResultsTitle'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/ErrorAlert'
/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:18:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 14:01:14
 * @FilePath: \next-learn\pages\events\[...slug].tsx
 * @Description: 筛选的事件页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
export default function FilteredEventsPage() {
    const router = useRouter()
    const filterData = router.query.slug
    if (!filterData) {
        return <p className="center">加载中...</p>
    }
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
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })
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
    const date = new Date(numYear, numMonth - 1)
    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}
