/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 17:44:37
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 16:55:05
 * @FilePath: \next-learn\pages\[meetupId]\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import MeetupDetail from '@/components/meetups/MeetupDetail'
import { GetStaticPropsContext } from 'next'
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'
const MeetupDetailsPage = (props: {
    meetupData: {
        id: string
        image: string
        title: string
        address: string
        description: string
    }
}) => {
    const { meetupData } = props
    return (
        <>
            <Head>
                <title>{meetupData.title}</title>
                <meta name="description" content={meetupData.description} />
            </Head>
            <MeetupDetail {...meetupData} />
        </>
    )
}

export default MeetupDetailsPage
export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://liuhaoqi:zogIwBiFxalnNsB1@next-course.sq1r8eb.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    // console.log(meetups)
    client.close()
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString(),
            },
        })),
    }
}
export async function getStaticProps(context: GetStaticPropsContext) {
    // fetch data from an API
    const meetupId = context.params?.meetupId as string
    const client = await MongoClient.connect(
        'mongodb+srv://liuhaoqi:zogIwBiFxalnNsB1@next-course.sq1r8eb.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    })

    client.close()
    return {
        props: {
            meetupData: {
                id: selectedMeetup?._id.toString(),
                title: selectedMeetup?.title,
                address: selectedMeetup?.address,
                image: selectedMeetup?.image,
                description: selectedMeetup?.description,
            },
        },
        revalidate: 10,
    }
}
