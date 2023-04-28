/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-21 17:04:17
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-28 16:09:27
 * @FilePath: \next-learn\pages\_document.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="zh-CN">
            <Head />
            <body>
                <Main />
                <NextScript />
                <div id="notifications"></div>
            </body>
        </Html>
    )
}
