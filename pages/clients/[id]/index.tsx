/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:01:30
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 15:03:12
 * @FilePath: \next-learn\pages\clients\[id]\index.tsx
 * @Description: 客户端项目页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useRouter } from 'next/router'

export default function ClientProjectsPage() {
    const router = useRouter()
    console.log('router.query', router.query)

    function loadProjectHandler() {
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' },
        })
    }

    return (
        <div>
            <h1>客户端项目页面</h1>
            <button onClick={loadProjectHandler}>加载项目A</button>
        </div>
    )
}
