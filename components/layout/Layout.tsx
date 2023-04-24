/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-24 15:51:14
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-24 16:07:36
 * @FilePath: \next-learn\components\layout\Layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import MainNavigation from './MainNavigation'
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <MainNavigation />
            <main>{children}</main>
        </div>
    )
}
