/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-05 09:09:21
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-30 17:39:51
 * @FilePath: \next-learn\components\profile\ProfileForm.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useRef } from 'react'
function ProfileForm(props: {
    onChangePassword: (data: {
        oldPassword: string | undefined
        newPassword: string | undefined
    }) => void
}) {
    const oldPasswordRef = useRef<HTMLInputElement>(null)
    const newPasswordRef = useRef<HTMLInputElement>(null)
    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const enteredOldPassword = oldPasswordRef.current?.value
        const enteredNewPassword = newPasswordRef.current?.value
        props.onChangePassword({
            oldPassword: enteredOldPassword,
            newPassword: enteredNewPassword,
        })
    }
    return (
        <form
            className=" w-[95%] max-w-[25rem] my-12 mx-auto"
            onSubmit={submitHandler}
        >
            <div className="mb-2">
                <label
                    htmlFor="new-password"
                    className=" font-bold mb-2 text-[#353336] block"
                >
                    新密码
                </label>
                <input
                    ref={newPasswordRef}
                    type="password"
                    id="new-password"
                    className=" block inherit-font w-full rounded-[4px] border border-solid border-[#38015c] p-1 bg-[#f7f0fa]"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="old-password"
                    className=" font-bold mb-2 text-[#353336] block"
                >
                    旧密码
                </label>
                <input
                    ref={oldPasswordRef}
                    type="password"
                    id="old-password"
                    className=" block inherit-font w-full rounded-[4px] border border-solid border-[#38015c] p-1 bg-[#f7f0fa]"
                />
            </div>
            <div className="mt-6">
                <button className="inherit-font cursor-pointer py-2 px-6 rounded-[4px] bg-[#38015c] text-white border border-solid border-[#38015c] hover:bg-[#540d83] hover:border-[#540d83]">
                    修改密码
                </button>
            </div>
        </form>
    )
}

export default ProfileForm
