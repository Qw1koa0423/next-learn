import UserProfile from '@/components/profile/UserProfile'
import { getServerSession } from 'next-auth/next'
import { GetServerSidePropsContext } from 'next'
import Nextauth from './api/auth/[...nextauth]'
function ProfilePage() {
    return <UserProfile />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, Nextauth)
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        }
    }
    return {
        props: {
            session,
        },
    }
}

export default ProfilePage
