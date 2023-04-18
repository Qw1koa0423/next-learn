import Button from '@/components/ui/Button'
interface ResultsTitleProps {
    date: Date
}
function ResultsTitle(props: ResultsTitleProps) {
    const { date } = props

    const humanReadableDate = new Date(date).toLocaleDateString('zh-CN', {
        month: 'long',
        year: 'numeric',
    })

    return (
        <section className=" my-8 mx-auto w-[90%] max-w-[40rem] text-center">
            <h1>{humanReadableDate}</h1>
            <Button link="/events">显示所有事件</Button>
        </section>
    )
}

export default ResultsTitle
