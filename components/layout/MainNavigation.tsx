import Logo from './Logo'
import Link from 'next/link'
export default function MainNavigation() {
    return (
        <header className=" w-full h-24 bg-gray-900 flex justify-between items-center py-0 px-[10%]">
            <Link
                className=" text-[#dfdbe6] text-base hover:text-[#b2adb8] active:text-[#b2adb8] md:text-xl  no-underline"
                href="/"
            >
                <Logo />
            </Link>
            <nav>
                <ul className=" list-none flex items-baseline m-0 p-0 md:gap-2">
                    <li className=" my-0 mx-4">
                        <Link
                            className=" text-[#dfdbe6] text-base hover:text-[#b2adb8] active:text-[#b2adb8] md:text-xl no-underline"
                            href="/posts"
                        >
                            帖子
                        </Link>
                    </li>
                    <li className=" my-0 mx-4">
                        <Link
                            className=" text-[#dfdbe6] text-base hover:text-[#b2adb8] active:text-[#b2adb8] md:text-xl no-underline"
                            href="/contact"
                        >
                            反馈
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
