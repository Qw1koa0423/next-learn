import Link from 'next/link'
import Image from 'next/legacy/image'
import { Post } from '@/types'

export default function PostItem({ post }: { post: Post }) {
    const { title, image, excerpt, date, slug } = post

    const formattedDate = new Date(date).toLocaleDateString('zh-CN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <li className=" shadow-li bg-gray-800 text-center ">
            <Link href={linkPath} className="text-[#dfdbe6]">
                <div className=" w-full max-h-80 overflow-hidden">
                    <Image
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                        layout="responsive"
                        className="object-cover"
                    />
                </div>
                <div className=" p-4">
                    <h3 className=" my-2 mx-0 text-xl">{title}</h3>
                    <time className=" italic text-[#a8a3ae]">
                        {formattedDate}
                    </time>
                    <p className=" leading-6">{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

