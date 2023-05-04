import { useState } from 'react'

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true)

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState)
    }

    return (
        <section className=" my-12 mx-auto w-[95%] max-w-[25rem] rounded-md bg-[#38015c] shadow-auth p-4 text-center ">
            <h1 className="text-center text-white">
                {isLogin ? '登录' : '注册'}
            </h1>
            <form>
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
