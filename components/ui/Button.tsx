import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    link: string
}

export default function Button(props: ButtonProps) {
    const { children, link } = props
    return (
        <Link
            className=" no-underline cursor-pointer inherit-font bg-[#03be9f] rounded-lg border-[1px]  border-solid border-[#03be9f] text-[#dafff7] py-1 px-6 text-center whitespace-nowrap  shadow-button hover:bg-[#02afa1] active:bg-[#02afa1]  flex items-center"
            href={link}
        >
            {children}
        </Link>
    )
}
