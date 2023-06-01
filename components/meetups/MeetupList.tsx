/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 17:43:00
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 09:17:04
 * @FilePath: \next-learn\components\meetups\MeetupList.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import MeetupItem from './MeetupItem'

function MeetupList(props: {
    meetups: {
        id: string
        title: string
        address: string
        image: string
    }[]
}) {
    const { meetups } = props
    return (
        <ul className="list-none m-0 p-0">
            {meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    )
}

export default MeetupList
