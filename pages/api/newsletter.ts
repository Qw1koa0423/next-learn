import { NextApiRequest, NextApiResponse } from 'next'
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
        console.log(userEmail)
        res.status(201).json({ message: '注册成功' })
    }
}
