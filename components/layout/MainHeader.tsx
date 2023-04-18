import Link from 'next/link'

export default function MainHeader() {
    return (
        <header className=" w-full flex justify-between items-baseline py-4 px-[10%] h-20 bg-[#202020]">
            <div className=" text-2xl  font-[Fira,sans-serif] h-full flex justify-center items-center text-[#94fdfd] md:text-[2.5rem]">
                <Link className=" no-underline text-[#94fdfd]" href="/">
                    下一个事件
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link
                            className=" no-underline text-[#74dacc] text-base md:text-2xl"
                            href="/events"
                        >
                            浏览所有事件
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
