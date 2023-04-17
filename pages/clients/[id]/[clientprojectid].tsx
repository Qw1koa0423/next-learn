import { useRouter } from 'next/router'
export default function SelectedClientProjectPage() {
    const router = useRouter()
    console.log('router.query', router.query)

    return (
        <div>
            <h1>选定的客户端项目页面</h1>
        </div>
    )
}
