import Button from '../ui/Button'

/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-18 11:30:13
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-18 11:52:53
 * @FilePath: \next-learn\components\events\EventsSearch.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
interface EventsSearchProps {
    onSearch: (year: string, month: string) => void
}

export default function EventsSearch(props: EventsSearchProps) {
    return (
        <form className=" my-8 mx-auto shadow-form p-4 bg-white rounded-md w-[90%] max-w-[40rem] flex justify-between flex-col gap-4 md:flex-row">
            <div className=" w-full flex gap-4 flex-col md:w-4/5 md:flex-row">
                <div className=" flex-1 flex gap-4 items-center justify-between">
                    <select
                        className="inherit-font bg-white rounded-md w-[70%] p-1 md:w-full"
                        id="year"
                    >
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                    <label className="font-bold" htmlFor="year">
                        年
                    </label>
                </div>
                <div className=" flex-1 flex gap-4 items-center justify-between">
                    <select
                        className="inherit-font bg-white rounded-md w-[70%] p-1 md:w-full"
                        id="month"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label className=" font-bold" htmlFor="month">
                        月
                    </label>
                </div>
            </div>
            <Button className=" w-full inherit-font py-1 px-2 bg-[#03be9f] border-[1px] border-solid border-[#03be9f] text-[#dafff7] rounded-[4px] md:w-1/5">
                搜索
            </Button>
        </form>
    )
}
