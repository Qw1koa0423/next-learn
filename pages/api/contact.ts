import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body as {
            name: string
            email: string
            message: string
        }
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: '无效输入.' })
            return
        }

        const newMessage = {
            email,
            name,
            message,
        } as {
            _id?: any
            email: string
            name: string
            message: string
        }
        let client: MongoClient
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.sq1r8eb.mongodb.net/?retryWrites=true&w=majority`
        try {
            client = await MongoClient.connect(connectionString)
        } catch (error) {
            res.status(500).json({ message: '连接数据库失败!' })
            return
        }
        try {
            const db = client.db(process.env.mongodb_database)

            const result = await db.collection('messages').insertOne(newMessage)
            newMessage._id = result.insertedId
        } catch (e) {
            client.close()
            res.status(500).json({ message: '存储数据失败!' })
            return
        }
        client.close()
        res.status(201).json({ message: '成功发送消息!', Message: newMessage })
    }
}
