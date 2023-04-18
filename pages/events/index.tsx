/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 16:46:37
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 11:21:57
 * @FilePath: \next-learn\pages\events\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import EventList from '@/components/events/EventList'
import { getAllEvents } from '@/data/dummy-data'

export default function AllEventsPage() {
    const events = getAllEvents()
    return <EventList items={events} />
}
