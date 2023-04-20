import { FeedbackItem } from '@/types'
import { buildFeedbackPath, extractFeedback } from '../api/feedback'
import { useState } from 'react'
interface FeedbackPageProps {
    feedbackItems: FeedbackItem[]
}
export default function FeedbackPage(props: FeedbackPageProps) {
    const { feedbackItems } = props
    const [feedbackData, setFeedbackData] = useState<FeedbackItem>()
    function loadFeedbackHandler(id: string) {
        fetch('/api/feedback/' + id)
            .then((response) => response.json())
            .then((data) => setFeedbackData(data.feedback))
    }
    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {feedbackItems.map((item) => (
                    <li key={item.id}>
                        {item.text} -
                        <button
                            onClick={() => {
                                loadFeedbackHandler(item.id)
                            }}
                        >
                            显示详情
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export async function getStaticProps() {
    const filePath = buildFeedbackPath()
    const data = await extractFeedback(filePath)
    return {
        props: {
            feedbackItems: data,
        },
    }
}
