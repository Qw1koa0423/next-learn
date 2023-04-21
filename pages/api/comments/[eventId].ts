import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const eventId = req.query.eventId as string
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
            return
        }
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text,
        }
        res.status(201).json({ message: '评论成功', comment: newComment })
    }
    if (req.method === 'GET') {
        const dummyList = [
            {
                id: 'c1',
                name: 'Max',
                text: 'A first comment!',
            },
            {
                id: 'c2',
                name: 'Manuel',
                text: 'A second comment!',
            },
        ]
        res.status(200).json({ comments: dummyList })
    }
}
