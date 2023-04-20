import { useRef, useState } from 'react'
interface NewCommentProps {
    onAddComment: (commentData: any) => void
}
function NewComment(props: NewCommentProps) {
    const [isInvalid, setIsInvalid] = useState(false)

    const emailInputRef = useRef<HTMLInputElement>(null)
    const nameInputRef = useRef<HTMLInputElement>(null)
    const commentInputRef = useRef<HTMLTextAreaElement>(null)

    function sendCommentHandler(event: any) {
        event.preventDefault()

        const enteredEmail = emailInputRef.current!.value
        const enteredName = nameInputRef.current!.value
        const enteredComment = commentInputRef.current!.value

        if (
            !enteredEmail ||
            enteredEmail.trim() === '' ||
            !enteredEmail.includes('@') ||
            !enteredName ||
            enteredName.trim() === '' ||
            !enteredComment ||
            enteredComment.trim() === ''
        ) {
            setIsInvalid(true)
            return
        }

        props.onAddComment({
            email: enteredEmail,
            name: enteredName,
            text: enteredComment,
        })
    }

    return (
        <form className=" my-8 mx-auto w-full rounded-md bg-[#03be9f] shadow-form p-4">
            <div className=" flex gap-4 flex-wrap">
                <div className="mb-2 flex-1 min-w-[10rem]">
                    <label
                        className=" block font-bold mb-2 text-white text-left"
                        htmlFor="email"
                    >
                        邮箱
                    </label>
                    <input
                        className="inherit-font p-1 rounded-[4px] border-[1px] border-solid border-[#ccc] w-full bg-[#dcfff9]"
                        type="email"
                        id="email"
                        ref={emailInputRef}
                    />
                </div>
                <div className="mb-2 flex-1 min-w-[10rem]">
                    <label
                        className=" block font-bold mb-2 text-white text-left"
                        htmlFor="name"
                    >
                        名称
                    </label>
                    <input
                        className="inherit-font p-1 rounded-[4px] border-[1px] border-solid border-[#ccc] w-full bg-[#dcfff9]"
                        type="text"
                        id="name"
                        ref={nameInputRef}
                    />
                </div>
            </div>
            <div className="mb-2 flex-1 min-w-[10rem]">
                <label
                    className=" block font-bold mb-2 text-white text-left"
                    htmlFor="comment"
                >
                    评论
                </label>
                <textarea
                    id="comment"
                    className="inherit-font p-1 rounded-[4px] border-[1px] border-solid border-[#ccc] w-full bg-[#dcfff9]"
                    rows={5}
                    ref={commentInputRef}
                ></textarea>
            </div>
            {isInvalid && <p>请输入有效的电子邮件地址和评论!</p>}
            <button className=" bg-white">提交</button>
        </form>
    )
}

export default NewComment
