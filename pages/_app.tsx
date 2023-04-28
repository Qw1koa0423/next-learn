/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-21 17:04:17
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 16:01:55
 * @FilePath: \next-learn\pages\_app.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
