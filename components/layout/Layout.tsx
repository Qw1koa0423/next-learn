import MainNavigation from './MainNavigation'

function Layout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <div>
            <MainNavigation />
            <main className=" my-12 mx-auto w-[90%] max-w-[40rem]">
                {children}
            </main>
        </div>
    )
}

export default Layout
