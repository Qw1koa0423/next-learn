/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 15:00:08
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 15:04:34
 * @FilePath: \next-learn\pages\clients\index.tsx
 * @Description: 客户端页面
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Link from 'next/link'
export default function ClientsPage() {
    const clients = [
        { id: 'max', name: 'Maximilian' },
        { id: 'menu', name: 'Menuel' },
    ]
    return (
        <div>
            <h1>客户端页面</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: '/clients/[id]',
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
