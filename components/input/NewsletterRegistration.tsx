/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 16:42:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 17:17:27
 * @FilePath: \next-learn\components\input\NewsletterRegistration.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

function NewsletterRegistration() {
    function registrationHandler(event: any) {
        event.preventDefault()

        // fetch user input (state or refs)
        // optional: validate input
        // send valid data to API
    }

    return (
        <section className="my-12 mx-auto w-[90%] max-w-xs">
            <h2 className=" text-center">注册以保持更新！</h2>
            <form onSubmit={registrationHandler}>
                <div className="flex">
                    <input
                        type="email"
                        id="email"
                        placeholder="你的邮箱"
                        aria-label="Your email"
                        className="inherit-font p-1 rounded-[4px]  rounded-tr-none rounded-br-none border-[1px] border-solid border-[#ccc] flex-1 "
                    />
                    <button className=" bg-[#03be9f] border-[1px] border-solid border-[#03be9f] rounded-md text-[#dafff7] rounded-tl-none rounded-bl-none  inherit-font cursor-pointer hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1] ">
                        注册
                    </button>
                </div>
            </form>
        </section>
    )
}

export default NewsletterRegistration
