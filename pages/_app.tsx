/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 14:25:55
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 09:57:48
 * @FilePath: \next-learn\pages\_app.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
