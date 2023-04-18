import fs from 'fs'
import path from 'path'
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
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(jsonData)
    return {
        props: {
            products: data.products,
        },
    }
}
