/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 14:36:32
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 17:26:35
 * @FilePath: \next-learn\pages\_app.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Layout from '@/components/layout/Layout'
import { NotificationContextProvider } from '@/store/NotificationContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NotificationContextProvider>
            <Layout>
                <Head>
                    <title>下一个事件</title>
                    <meta name="description" content="NextJS Events" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </NotificationContextProvider>
    )
}
