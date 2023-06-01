import Link from 'next/link'

function MainNavigation() {
    return (
        <header className="w-full h-20 flex items-center justify-between bg-[#77002e] py-0 px-[10%]">
            <div className="text-[2rem] text-white font-bold">
                React Meetups
            </div>
            <nav>
                <ul className=" list-none m-0 p-0 flex items-baseline">
                    <li className=" ml-12">
                        <Link
                            className="no-underline text-2xl text-[#fcb8d2] active:text-white hover:text-white"
                            href="/"
                        >
                            全部聚会
                        </Link>
                    </li>
                    <li className=" ml-12">
                        <Link
                            className="no-underline text-2xl text-[#fcb8d2] active:text-white hover:text-white"
                            href="/new-meetup"
                        >
                            新增聚会
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
