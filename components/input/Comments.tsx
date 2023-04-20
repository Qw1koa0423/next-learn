import { useState } from 'react'
import CommentList from './CommentList'
import NewComment from './NewComment'
interface CommentsProps {
    eventId: string
}
function Comments(props: CommentsProps) {
    const { eventId } = props

    const [showComments, setShowComments] = useState(false)

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus)
    }

    function addCommentHandler(commentData: any) {
        // send data to API
    }

    return (
        <section className="my-12 mx-auto w-[90%] max-w-[40rem] text-center">
            <button
                className="inherit-font rounded-md py-2 px-4 bg-transparent text-[#03be9f] border-[1px] border-solid border-[#03be9f] cursor-pointer hover:bg-[#dcfff9] active:bg-[#dcfff9] "
                onClick={toggleCommentsHandler}
            >
                {showComments ? '隐藏' : '显示'} 评论
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList />}
        </section>
    )
}

export default Comments
