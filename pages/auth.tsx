import AuthForm from '@/components/auth/AuthForm'
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
function AuthPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.replace('/profile')
            } else {
                setLoading(false)
            }
        })
    }, [router])
    if (loading) {
        return <p className="text-center">正在加载...</p>
    }
    return <AuthForm />
}

export default AuthPage
