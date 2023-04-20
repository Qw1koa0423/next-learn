import { NextApiRequest, NextApiResponse } from 'next'
import { buildFeedbackPath, extractFeedback } from './index'
import { FeedbackItem } from '@/types'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const feedbackId = req.query.feedbackId as string
    const filePath = buildFeedbackPath()
    const feedbackData = (await extractFeedback(filePath)) as FeedbackItem[]

    if (req.method === 'GET') {
        const selectedFeedback = feedbackData.find(
            (item) => item.id === feedbackId
        )
        res.status(200).json({ feedback: selectedFeedback })
    } else {
        res.status(200).json({ feedback: feedbackData })
    }
}
