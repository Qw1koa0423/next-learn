/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 17:43:00
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 10:06:57
 * @FilePath: \next-learn\components\meetups\MeetupDetail.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Image from 'next/image'
function MeetupDetail(props: {
    image: string
    title: string
    address: string
    description: string
}) {
    const { image, title, address, description } = props
    return (
        <section className="text-center">
            <Image
                src={image}
                alt={title}
                width={800}
                height={600}
                className=" w-full"
            />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </section>
    )
}

export default MeetupDetail
