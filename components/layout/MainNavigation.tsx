import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
function MainNavigation() {
    const { data, status } = useSession()
    function loginoutHandler() {
        signOut()
    }
    return (
        <header className="w-full h-20 bg-[#38015c] shadow-auth flex justify-between items-center py-0 px-[10%]">
            <Link
                className="no-underline text-white font-bold hover:text-[#c291e2]"
                href="/"
            >
                <div className="font-['Lato','sans-serif'] text-[2rem] text-white m-0">
                    Next Auth
                </div>
            </Link>
            <nav>
                <ul className="list-none m-0 p-0 flex items-baseline">
                    {!data && status !== 'loading' && (
                        <li className="my-0 mx-4">
                            <Link
                                className="no-underline text-white font-bold hover:text-[#c291e2]"
                                href="/auth"
                            >
                                登录
                            </Link>
                        </li>
                    )}

                    {data && (
                        <li className="my-0 mx-4">
                            <Link
                                className="no-underline text-white font-bold hover:text-[#c291e2]"
                                href="/profile"
                            >
                                个人中心
                            </Link>
                        </li>
                    )}
                    {data && (
                        <li className="my-0 mx-4">
                            <button
                                className="font-inherit bg-transparent border border-solid border-white text-white font-bold py-2 px-6 rounded-md cursor-pointer hover:bg-[#c291e2] hover:text-[#38015c]"
                                onClick={loginoutHandler}
                            >
                                退出登录
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
