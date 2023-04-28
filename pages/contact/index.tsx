/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 14:58:13
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 16:04:17
 * @FilePath: \next-learn\pages\contact\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import ContactForm from '@/components/contact/ContactForm'
import Head from 'next/head'
export default function ContactPage() {
    return (
        <>
            <Head>
                <title>反馈</title>
                <meta name="description" content="给我留言" />
            </Head>
            <ContactForm />
        </>
    )
}
