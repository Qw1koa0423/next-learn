/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:01:00
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 15:02:21
 * @FilePath: \next-learn\pages\portfolio\[porjectid].tsx
 * @Description: 投资组合项目页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

import { useRouter } from 'next/router'
export default function PortfolioProjectPage() {
    const router = useRouter()
    console.log('router.pathname', router.pathname)
    console.log('router.query', router.query)
    return (
        <div>
            <h1>投资组合项目页面</h1>
        </div>
    )
}
