import { GetServerSidePropsContext } from 'next'
interface UserIdPageProps {
    id: string
}

export default function UserIdPage(props: UserIdPageProps) {
    const { id } = props
    return <h1>{id}</h1>
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context
    const userId = params?.uid
    return {
        props: {
            id: 'userid-' + userId,
        },
    }
}
