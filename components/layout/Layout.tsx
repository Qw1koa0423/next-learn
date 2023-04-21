import MainHeader from './MainHeader'
import { useContext } from 'react'
import Notification from '../ui/Notification'
import NotificationContext from '@/store/NotificationContext'
interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const { children } = props
    const notificationsCtx = useContext(NotificationContext)
    const activeNotification = notificationsCtx.notification
    return (
        <>
            <MainHeader />
            <main>{children}</main>
            {activeNotification && (
                <Notification
                    title={activeNotification.title}
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            )}
        </>
    )
}
