/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-30 15:24:42
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-31 11:33:53
 * @FilePath: \next-learn\pages\api\auth\[...nextauth].ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { verifyPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: '邮箱',
                    type: 'email',
                    placeholder: '请输入邮箱',
                },
                password: {
                    label: '密码',
                    type: 'password',
                    placeholder: '请输入密码',
                },
            },
            async authorize(credentials) {
                const client = await connectToDatabase()
                const usersCollection = client.db().collection('users')
                const user = await usersCollection.findOne({
                    email: credentials?.email,
                })
                if (!user) {
                    client.close()
                    throw new Error('用户不存在')
                }
                const isValid = await verifyPassword(
                    credentials?.password!,
                    user.password
                )
                if (!isValid) {
                    client.close()
                    throw new Error('密码错误')
                }
                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name || null,
                    image: user.image || null,
                }
            },
        }),
    ],
})
