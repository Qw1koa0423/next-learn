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
    console.log('Re-Generating...')
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(jsonData)
    if (!data) {
        return {
            /** 重定向 */
            redirect: {
                destination: '/no-data',
            },
        }
    }
    if (data.products.length === 0) {
        return {
            /** 返回404页面 */
            notFound: true,
        }
    }
    return {
        props: {
            products: data.products,
        },
        /** 重新渲染的时间10s,每10s重新渲染一次,低于这个时间不会打印出来 Re-Generating...*/
        revalidate: 10,
    }
}
