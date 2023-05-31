/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-30 14:48:24
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-30 14:49:49
 * @FilePath: \next-learn\lib\auth.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { hash, compare } from 'bcryptjs'
export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}
export async function verifyPassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword)
    return isValid
}
