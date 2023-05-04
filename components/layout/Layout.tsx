/*
 * @Author: 刘浩奇 liuhaoqw1ko@gmail.com
 * @Date: 2023-05-04 23:15:17
 * @LastEditors: 刘浩奇 liuhaoqw1ko@gmail.com
 * @LastEditTime: 2023-05-04 23:52:26
 * @FilePath: \next-learn\components\layout\Layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

import MainNavigation from './MainNavigation'
interface LayoutProps {
    children: React.ReactNode
}
function Layout(props: LayoutProps) {
    const { children } = props
    return (
        <>
            <MainNavigation />
            <main>{children}</main>
        </>
    )
}

export default Layout
