/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 16:49:21
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 09:00:53
 * @FilePath: \next-learn\components\ui\Button.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    link: string
}

export default function Button(props: ButtonProps) {
    const { children, link } = props
    return (
        <Link
            className=" no-underline cursor-pointer inherit-font bg-[#03be9f] rounded-lg border-[1px]  border-solid border-[#03be9f] text-[#dafff7] py-1 px-6 text-center whitespace-nowrap  shadow-button hover:bg-[#02afa1] active:bg-[#02afa1]  flex items-center justify-center"
            href={link}
        >
            {children}
        </Link>
    )
}