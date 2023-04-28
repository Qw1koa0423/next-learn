import Image from 'next/image'
export default function Hero() {
    return (
        <section className=" text-center bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-0">
            <div className=" w-[300px] h-[300px] shadow-image rounded-[50%] overflow-hidden bg-gray-700 mx-auto ">
                <Image
                    className=" object-cover origin-top w-full h-full"
                    src="/images/site/max.png"
                    alt="An image showing Max"
                    width={300}
                    height={300}
                />
            </div>

            <h1 className=" text-[4rem] my-4 mx-0 text-[#a6a3ae]">
                你好这是一个测试页面
            </h1>
            <p className=" text-2xl text-[#b2adb8] w-[90%] max-w-[40rem] m-auto ">
                这是一个测试页面，用于测试页面的组件化，以及页面的组件化。
            </p>
        </section>
    )
}
