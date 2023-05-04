/*
 * @Author: 刘浩奇 liuhaoqw1ko@gmail.com
 * @Date: 2023-05-04 23:15:17
 * @LastEditors: 刘浩奇 liuhaoqw1ko@gmail.com
 * @LastEditTime: 2023-05-05 00:38:15
 * @FilePath: \next-learn\components\profile\UserProfile.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import ProfileForm from './ProfileForm'

function UserProfile() {
    // Redirect away if NOT auth

    return (
        <section className="my-12 mx-auto text-center">
            <h1 className=" text-[5rem]">用户信息</h1>
            <ProfileForm />
        </section>
    )
}

export default UserProfile
