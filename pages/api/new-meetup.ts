/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-01 13:25:04
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 13:38:06
 * @FilePath: \next-learn\pages\api\new-meetup.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body as {
            title: string
            image: string
            address: string
            description: string
        }
        const { title, image, address, description } = data
        const client = await MongoClient.connect(
            'mongodb+srv://liuhaoqi:zogIwBiFxalnNsB1@next-course.sq1r8eb.mongodb.net/meetups?retryWrites=true&w=majority'
        )
        const db = client.db()
        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)
        
        client.close()
        res.status(201).json({ message: '新增成功' })
    } else {
        res.status(405).json({ message: '不支持的请求方法' })
    }
}
