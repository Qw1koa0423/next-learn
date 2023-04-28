import PostContent from '@/components/posts/post-detail/PostContent'
import { getPostData, getPostsFiles } from '@/helpers/posts-util'
import { Post } from '@/types'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
export default function PostDetailPage({ post }: { post: Post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </>
    )
}
export function getStaticProps(context: GetServerSidePropsContext) {
    const { params } = context
    const { slug } = params as { slug: string }
    const posrData = getPostData(slug)
    return {
        props: {
            post: posrData,
        },
        revalidate: 600,
    }
}
export async function getStaticPaths() {
    const postFilenames = getPostsFiles()
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    }
}
