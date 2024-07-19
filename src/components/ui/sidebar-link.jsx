import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppProvider } from '@/app/app-provider'

export default function SidebarLink({ children, href }) {
    const pathname = usePathname()
    const { setSidebarOpen } = useAppProvider()

    return (
        <Link
            className={`block text-gray-800 dark:text-gray-100 transition truncate ${pathname === href ? 'group-[.is-link-group]:text-violet-500' : 'hover:text-gray-900 dark:hover:text-white group-[.is-link-group]:text-gray-500/90 dark:group-[.is-link-group]:text-gray-400 group-[.is-link-group]:hover:text-gray-700 dark:group-[.is-link-group]:hover:text-gray-200'}`}
            href={href}
            onClick={() => setSidebarOpen(false)}
        >
            {children}
        </Link>
    )
}
