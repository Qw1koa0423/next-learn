/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:10:42
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 16:19:48
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import EventList from '@/components/EventList'
import { getFeaturedEvents } from '@/data/dummy-data'
export default function HomePage() {
    const featuredEvents = getFeaturedEvents()

    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}
