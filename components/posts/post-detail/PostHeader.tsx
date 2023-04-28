import Image from 'next/image'

export default function PostHeader({ title, image }: { title: string; image: string }) {
    return (
        <header className=" pb-8 border-b-8 border-solid border-[#a07aaa] my-4 mx-0 flex flex-col-reverse justify-between items-center gap-4 md:my-8 md:mx-0 md:flex-row md:items-end">
            <h1 className=" text-[2rem] text-[#5a097a] m-0 leading-initial text-center md:text-[4rem] md:text-left">
                {title}
            </h1>
            <Image
                className=" object-cover w-[200px] h-[120px]"
                src={image}
                alt={title}
                width={200}
                height={150}
            />
        </header>
    )
}

