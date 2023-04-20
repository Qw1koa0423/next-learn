/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-20 16:42:01
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-20 16:54:32
 * @FilePath: \next-learn\components\input\CommentList.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */

function CommentList() {
    return (
        <ul className="flex flex-col gap-4">
            {/* Render list of comments - fetched from API */}
            <li className=" text-left py-2 px-0  border-b-2 border-solid border-[#ccc]">
                <p className=" m-0">我的评论太棒了！</p>
                <div className=" text-right italic">
                    通过 <address className=" inline">Maximilian</address>
                </div>
            </li>
            <li className=" text-left py-2 px-0  border-b-2 border-solid border-[#ccc]">
                <p className=" m-0">我的评论太棒了！</p>
                <div className=" text-right italic">
                    通过 <address className=" inline">Maximilian</address>
                </div>
            </li>
        </ul>
    )
}

export default CommentList
