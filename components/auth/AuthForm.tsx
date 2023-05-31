/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-05-05 09:09:21
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-05-31 10:07:42
 * @FilePath: \next-learn\components\auth\AuthForm.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { useState, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
async function createUser(email: string, password: string) {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json())
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message || '创建用户失败')
    }
    return data
}
function AuthForm() {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(true)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState)
    }
    async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const email = emailInputRef.current?.value || ''
        const password = passwordInputRef.current?.value || ''
        if (isLogin) {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            })
            if (!result?.error) {
                router.replace('/profile')
            }
        } else {
            try {
                const result = await createUser(email, password)
                console.log(result)
            } catch (err) {
                console.error(err)
            }
        }
    }
    return (
        <section className=" my-12 mx-auto w-[95%] max-w-[25rem] rounded-md bg-[#38015c] shadow-auth p-4 text-center ">
            <h1 className="text-center text-white">
                {isLogin ? '登录' : '注册'}
            </h1>
            <form onSubmit={submitHandler}>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className=" block text-white font-bold mb-2"
                    >
                        邮箱
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="inherit-font bg-[#f1e1fc] text-[#38015c] rounded-[4px] border border-solid border-white w-full text-left p-1"
                        required
                        ref={emailInputRef}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className=" block text-white font-bold mb-2"
                    >
                        密码
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="inherit-font bg-[#f1e1fc] text-[#38015c] rounded-[4px] border border-solid border-white w-full text-left p-1"
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className="mt-6 flex flex-col items-center">
                    <button className=" cursor-pointer inherit-font text-white bg-[#9f5ccc] border border-solid border-[#9f5ccc] rounded-[4px] py-2 px-10 hover:bg-[#873abb] hover:border-[#873abb]">
                        {isLogin ? '登录' : '创建账号'}
                    </button>
                    <button
                        type="button"
                        className=" cursor-pointer inherit-font   rounded-[4px]  py-[0.15rem] px-6   mt-4 bg-transparent border-none text-[#ae82cc]"
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? '创建新账号' : '已有账号？点击登录'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AuthForm
