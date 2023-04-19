import { useEffect, useState } from 'react'

interface ISale {
    id: string
    username: string
    volume: number
}

export default function LastSalesPage() {
    const [sales, setSales] = useState<ISale[]>([])
    const [isloading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://nextjs-course-234b1-default-rtdb.firebaseio.com/sales.json'
        )
            .then((response) => response.json())
            .then((data) => {
                const transformedSales: ISale[] = []
                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume,
                    })
                }
                setSales(transformedSales)
                setIsLoading(false)
            })
    }, [])
    if (isloading) {
        return <p>加载中...</p>
    }
    if (!sales) {
        return <p>没有数据</p>
    }
    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - {sale.volume}
                </li>
            ))}
        </ul>
    )
}
