/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-30 14:27:59
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-30 14:41:32
 * @FilePath: \next-learn\lib\db.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { MongoClient } from 'mongodb'
export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://liuhaoqi:gtPZXMoDCGOzjAh3@next-course.sq1r8eb.mongodb.net/auth-demo?retryWrites=true&w=majority'
    )
    return client
}
