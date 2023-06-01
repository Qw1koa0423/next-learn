/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 17:43:00
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 09:49:46
 * @FilePath: \next-learn\components\meetups\MeetupItem.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useRouter } from 'next/router'

import Card from '@/components/ui/Card'
import Image from 'next/image'

function MeetupItem(props: {
    id: string
    image: string
    title: string
    address: string
}) {
    const { id, image, title, address } = props
    const router = useRouter()

    function showDetailsHandler() {
        router.push('/' + id)
    }

    return (
        <li className="my-4 mx-0 rounded-tr-md rounded-tl-md">
            <Card>
                <div className="w-full h-80 overflow-hidden ">
                    <Image
                        className=" w-full object-cover"
                        src={image}
                        alt={title}
                        width={640}
                        height={480}
                    />
                </div>
                <div className="text-center p-4">
                    <h3 className="text-xl text-[#2c292b]">{title}</h3>
                    <address>{address}</address>
                </div>
                <div className="p-6 text-center">
                    <button
                        className=" cursor-pointer text-[#77002e] border border-solid border-[#77002e] bg-transparent pt-2 px-6 rounded-r-[4px] hover:bg-[#ffe2ed] active:bg-[#ffe2ed]"
                        onClick={showDetailsHandler}
                    >
                        显示详情
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
