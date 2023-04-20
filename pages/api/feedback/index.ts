/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 15:04:50
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 16:30:13
 * @FilePath: \next-learn\pages\api\feedback\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs/promises'
import path from 'path'
export function buildFeedbackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json')
}
export async function extractFeedback(filePath: string) {
    const fileData = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileData)
    return data
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email, text } = req.body as { email: string; text: string }

        if (!email || !email.includes('@') || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }

        // Store it in a database or in a file
        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text,
        }
        const filePath = buildFeedbackPath()
        const data = await extractFeedback(filePath)
        data.push(newFeedback)
        fs.writeFile(filePath, JSON.stringify(data), 'utf-8')
        res.status(201).json({ message: 'Success!', feedback: newFeedback })
    } else {
        const filePath = buildFeedbackPath()
        const data = await extractFeedback(filePath)
        res.status(200).json({ feedback: data })
    }
}
