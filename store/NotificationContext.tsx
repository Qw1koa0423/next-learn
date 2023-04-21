import { createContext, useState, useEffect } from 'react'

const NotificationContext = createContext({
    notification: {} || undefined, // { title, message, status }
    showNotification: function (notificationData: any) {},
    hideNotification: function () {},
})

export function NotificationContextProvider(props: {
    children: React.ReactNode
}) {
    const [activeNotification, setActiveNotification] = useState<{
        status: 'success' | 'error' | 'pending'
    }>()
    const { children } = props
    useEffect(() => {
        if (
            activeNotification &&
            (activeNotification.status === 'success' ||
                activeNotification.status === 'error')
        ) {
            const timer = setTimeout(() => {
                setActiveNotification(undefined)
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [activeNotification])

    function showNotificationHandler(notificationData: any) {
        setActiveNotification(notificationData)
    }

    function hideNotificationHandler() {
        setActiveNotification(undefined)
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    }

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext
