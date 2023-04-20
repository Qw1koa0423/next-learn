/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-18 09:14:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 14:48:50
 * @FilePath: \next-learn\components\event-detail\EventLogistics.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Image from 'next/image'

import LogisticsItem from './LogisticsItem'
import { IconCalendarEvent } from '@tabler/icons-react'
import { IconMapPin } from '@tabler/icons-react'
interface EventLogisticsProps {
    date: string
    address: string
    image: string
    imageAlt: string
}

function EventLogistics(props: EventLogisticsProps) {
    const { date, address, image, imageAlt } = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const addressText = address.replace(', ', '\n')

    return (
        <section className="shadow-logistics rounded-md bg-[#2b2b2b] p-8 max-w-[50rem] w-4/5 -my-12 mx-auto text-[#d5eeeb] flex justify-between gap-8 flex-col items-center md:p-8 md:-my-20 md:mx-auto md:flex-row md:items-stretch">
            <div className="w-40 h-40 rounded-[50%] overflow-hidden border-[5px] border-solid border-white md:w-80 md:h-80">
                <Image
                    src={'/' + image}
                    alt={imageAlt}
                    width={800}
                    height={800}
                    className=" object-cover w-40 h-40 md:h-80 md:w-80"
                />
            </div>
            <ul className="flex-[3] flex gap-8 justify-center items-center flex-col md:items-start">
                <LogisticsItem icon={IconCalendarEvent}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={IconMapPin}>
                    <address className=" whitespace-pre">{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    )
}

export default EventLogistics
