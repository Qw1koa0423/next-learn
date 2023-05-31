/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-30 14:24:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-30 15:20:07
 * @FilePath: \next-learn\pages\api\auth\signup.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { hashPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body
        const { email, password } = data
        if (
            !email ||
            !email.includes('@') ||
            !password ||
            password.trim().length < 7
        ) {
            res.status(422).json({ message: '请输入正确格式的邮箱或密码' })
        }
        const client = await connectToDatabase()
        const db = client.db()
        const existingUser = await db.collection('users').findOne({ email })
        if (existingUser) {
            res.status(422).json({ message: '用户已存在' })
            client.close()
            return
        }
        const hashedPassword = await hashPassword(password)
        db.collection('users').insertOne({
            email,
            password: hashedPassword,
        })
        res.status(201).json({ message: '创建成功' })
        client.close()
    } else {
        res.status(405).json({ message: '不支持的请求方法' })
    }
}
