/*
 * @Author: 刘浩奇 liuhaoqw1ko@gmail.com
 * @Date: 2023-05-04 23:15:17
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-30 17:44:44
 * @FilePath: \next-learn\components\profile\UserProfile.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import ProfileForm from './ProfileForm'

function UserProfile() {
    async function changePasswordHandler(passwordData: {
        oldPassword: string | undefined
        newPassword: string | undefined
    }) {
        const response = await fetch('/api/user/changePassword', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <section className="my-12 mx-auto text-center">
            <h1 className=" text-[5rem]">用户信息</h1>
            <ProfileForm onChangePassword={changePasswordHandler} />
        </section>
    )
}

export default UserProfile
