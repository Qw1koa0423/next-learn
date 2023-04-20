/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:22:31
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 17:28:38
 * @FilePath: \next-learn\components\events\EventItem.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Button from '../ui/Button'
import { IconCalendarEvent } from '@tabler/icons-react'
import { IconMapPin } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Image from 'next/image'
interface EventItemProps {
    event: {
        id: string
        title: string
        image: string
        date: string
        location: string
    }
}

export default function EventItem(props: EventItemProps) {
    const { title, image, date, location, id } = props.event
    const humanReadableDate = new Date(date).toLocaleDateString('zh-CN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const formatedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    return (
        <li className="shadow-event-item rounded-lg overflow-hidden bg-white m-4 flex flex-col gap-4 md:flex-row">
            <Image
                src={'/' + image}
                alt={title}
                width={250}
                height={160}
                className="w-full object-cover h-40 md:w-2/5  md:h-56"
            />
            <div className="w-full px-4 py-0 text-center md:w-3/5 p-0 md:text-left">
                <div>
                    <h2 className="my-2 mx-0 md:my-2 md:mx-0">{title}</h2>
                    <div className="flex gap-2 items-center">
                        <IconCalendarEvent className=" text-[#666] w-5 h-5" />
                        <time className="text-[#666] font-bold">
                            {humanReadableDate}
                        </time>
                    </div>
                    <div className="flex gap-2 items-center">
                        <IconMapPin className=" text-[#666] w-5 h-5" />
                        <address className=" mx-0 my-2 text-[#666] whitespace-pre">
                            {formatedAddress}
                        </address>
                    </div>
                </div>
                <div className=" flex flex-col p-4 md:flex-row md:justify-end">
                    <Button link={exploreLink}>
                        <span>查看事件</span>
                        <span className="ml-1  inline-flex justify-center items-center">
                            <IconArrowNarrowRight className="w-5 h-5" />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
