import { GetServerSidePropsContext } from 'next'

/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-18 16:30:49
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 16:50:34
 * @FilePath: \next-learn\pages\userprofile.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
interface UserProfilePageProps {
    username: string
}
export default function UserProfilePage(props: UserProfilePageProps) {
    const { username } = props
    return (
        <>
            <h1>{username}</h1>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params, req, res } = context
    console.log('服务端运行')

    return {
        props: {
            username: 'Max',
        },
    }
}
