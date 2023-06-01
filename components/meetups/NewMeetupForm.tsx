import { useRef } from 'react'

import Card from '../ui/Card'

function NewMeetupForm(props: {
    onAddMeetup: (meetupData: {
        title: string
        image: string
        address: string
        description: string
    }) => void
}) {
    const titleInputRef = useRef<HTMLInputElement>(null)
    const imageInputRef = useRef<HTMLInputElement>(null)
    const addressInputRef = useRef<HTMLInputElement>(null)
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null)

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const enteredTitle = titleInputRef.current!.value
        const enteredImage = imageInputRef.current!.value
        const enteredAddress = addressInputRef.current!.value
        const enteredDescription = descriptionInputRef.current!.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className="p-4" onSubmit={submitHandler}>
                <div className="mb-2">
                    <label className="block font-bold mb-2" htmlFor="title">
                        聚会标题
                    </label>
                    <input
                        className="block rounded-[4px] border border-solid border-[#ccc] p-1 w-full"
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className="mb-2">
                    <label className="block font-bold mb-2" htmlFor="image">
                        聚会图片
                    </label>
                    <input
                        className="block rounded-[4px] border border-solid border-[#ccc] p-1 w-full"
                        type="url"
                        required
                        id="image"
                        ref={imageInputRef}
                    />
                </div>
                <div className="mb-2">
                    <label className="block font-bold mb-2" htmlFor="address">
                        地点
                    </label>
                    <input
                        className="block rounded-[4px] border border-solid border-[#ccc] p-1 w-full"
                        type="text"
                        required
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block font-bold mb-2"
                        htmlFor="description"
                    >
                        描述
                    </label>
                    <textarea
                        className="block rounded-[4px] border border-solid border-[#ccc] p-1 w-full"
                        id="description"
                        required
                        rows={5}
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className="mt-4 text-right">
                    <button className=" cursor-pointer bg-[#77003e] text-white py-2 px-6 border border-solid border-[#77002e] rounded-[4px] font-bold hover:bg-[#a50e48] hover:border-[#a50e48] active:bg-[#a50e48] active:border-[#a50e48]">
                        新增聚会
                    </button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
