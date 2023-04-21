import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import {
    connectDatabase,
    insertDocument,
    getAllDocuments,
} from '@/helpers/db-utils'

import { CommentProps } from '@/types'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const eventId = req.query.eventId as string
    let client: MongoClient
    try {
        client = await connectDatabase()
    } catch (error) {
        res.status(500).json({ message: '连接数据库失败' })
        return
    }

    if (req.method === 'POST') {
        const { email, name, text } = req.body
        if (
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: '无效的输入' })
            client.close()

            return
        }
        let newComment = {
            email,
            name,
            text,
            eventId,
        } as CommentProps
        let result
        try {
            result = await insertDocument(client, 'comments', newComment)
            newComment._id = result.insertedId
            res.status(201).json({ message: '评论成功', comment: newComment })
        } catch (error) {
            res.status(500).json({ message: '插入数据库失败' })
        }
    }
    if (req.method === 'GET') {
        try {
            const documents = await getAllDocuments(client, 'comments', {
                _id: -1,
            })
            res.status(200).json({ comments: documents })
        } catch (error) {
            res.status(500).json({ message: '获取评论失败' })
        }
        client.close()
    }
}
