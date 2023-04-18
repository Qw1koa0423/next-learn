interface LogisticsItemProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    children: React.ReactNode
}

function LogisticsItem(props: LogisticsItemProps) {
    const { icon: Icon, children } = props

    return (
        <li className="flex text-2xl items-center flex-col text-center text-[#aefff8] md:items-start md:text-left">
            <span className="block mr-4 text-[#18e0d0]">
                <Icon className="w-8 h-8" />
            </span>
            <span className="block">{children}</span>
        </li>
    )
}

export default LogisticsItem
