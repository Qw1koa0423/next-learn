/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-31 17:43:00
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-01 09:34:20
 * @FilePath: \next-learn\components\ui\Card.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

function Card(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <div className="bg-white rounded-md  shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
            {children}
        </div>
    )
}

export default Card
