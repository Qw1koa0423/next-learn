import { NextApiRequest, NextApiResponse } from 'next'
import { connectDatabase, insertDocument } from '@/helpers/db-utils'
import { MongoClient } from 'mongodb'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const userEmail = req.body.email as string
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: '无效的邮箱地址' })
            return
        }
        let client: MongoClient
        try {
            client = await connectDatabase()
        } catch (error) {
            res.status(500).json({ message: '连接数据库失败' })
            return
        }
        try {
            await insertDocument(client, 'newsletter', { email: userEmail })
            client.close()
        } catch (error) {
            res.status(500).json({ message: '插入数据库失败' })
            return
        }
        res.status(201).json({ message: '注册成功' })
    }
}
