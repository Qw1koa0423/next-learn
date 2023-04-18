interface HomePageProps {
    products: {
        id: string
        title: string
    }[]
}

export default function HomePage(props: HomePageProps) {
    const { products } = props
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    )
}
export async function getStaticProps() {
    return {
        props: {
            products: [
                {
                    id: 'p1',
                    title: '结果 1',
                },
                {
                    id: 'p2',
                    title: '结果 2',
                },
                {
                    id: 'p3',
                    title: '结果 3',
                },
            ],
        },
    }
}
