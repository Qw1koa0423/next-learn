import MainHeader from './MainHeader'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const { children } = props
    return (
        <>
            <MainHeader />
            <main>{children}</main>
        </>
    )
}
