/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-30 17:25:07
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-31 11:37:50
 * @FilePath: \next-learn\pages\api\user\changePassword.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { hashPassword, verifyPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import Nextauth from '../auth/[...nextauth]'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'PATCH') {
        const session = (await getServerSession(req, res, Nextauth)) as {
            user: { email: string }
        }
        if (!session) {
            res.status(401).json({ message: '未登录' })
            return
        }
        const userEmail = session.user.email
        const { oldPassword, newPassword } = req.body
        const client = await connectToDatabase()
        const usersCollection = client.db().collection('users')
        const user = await usersCollection.findOne({ email: userEmail })
        if (!user) {
            res.status(404).json({ message: '用户不存在' })
            client.close()
            return
        }
        const currentPassword = user.password
        const passwordsAreEqual = await verifyPassword(
            oldPassword,
            currentPassword
        )
        if (!passwordsAreEqual) {
            res.status(403).json({ message: '旧密码错误' })
            client.close()
            return
        }
        const hashedPassword = await hashPassword(newPassword)
        const result = await usersCollection.updateOne(
            { email: userEmail },
            { $set: { password: hashedPassword } }
        )
        client.close()
        res.status(200).json({ message: '修改成功', data: result })
    } else {
        res.status(405).json({ message: '不支持的请求方法' })
    }
}
