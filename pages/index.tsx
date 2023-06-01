/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 14:25:55
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 15:43:13
 * @FilePath: \next-learn\pages\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import MeetupList from '@/components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

const HomePage = (props: {
    meetups: {
        id: string
        title: string
        address: string
        image: string
    }[]
}) => {
    const { meetups } = props
    return (
        <>
            <Head>
                <title>NextJS Meetups</title>

                <meta
                    name="description"
                    content="Browse a huge list of highly active NextJS meetups!"
                ></meta>
            </Head>
            <MeetupList meetups={meetups} />
        </>
    )
}
export default HomePage

export async function getStaticProps() {
    const client = await MongoClient.connect(
        'mongodb+srv://liuhaoqi:zogIwBiFxalnNsB1@next-course.sq1r8eb.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()
    // fetch data from an API
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 10,
    }
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const req = context.req
//     const res = context.res
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     }
// }
