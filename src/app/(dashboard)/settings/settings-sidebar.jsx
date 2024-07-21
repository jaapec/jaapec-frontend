'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SettingsSidebar() {
    const pathname = usePathname()

    return (
        <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700/60 min-w-[15rem] md:space-y-3">
            {/* Group 1 */}
            <div>
                <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">
                    Business settings
                </div>
                <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
                    <li className="mr-0.5 md:mr-0 md:mb-0.5">
                        <Link
                            href="/settings/company"
                            className={`flex items-center px-2.5 py-2 rounded-lg whitespace-nowrap ${pathname.includes('/settings/company') && 'bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                        >
                            <svg
                                className={`shrink-0 fill-current mr-2 ${pathname.includes('/settings/company') ? 'text-violet-500 dark:text-violet-400' : 'text-gray-400 dark:text-gray-500'}`}
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5.143 7.91a1 1 0 1 1-1.714-1.033A7.996 7.996 0 0 1 8 10a7.996 7.996 0 0 1 6.857 3.877 1 1 0 1 1-1.714 1.032A5.996 5.996 0 0 0 8 12a5.996 5.996 0 0 0-5.143 2.91Z" />
                            </svg>
                            <span
                                className={`text-sm font-medium ${pathname.includes('/settings/company') ? 'text-violet-500 dark:text-violet-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'}`}
                            >
                                Datos de la empresa
                            </span>
                        </Link>
                    </li>
                    <li className="mr-0.5 md:mr-0 md:mb-0.5">
                        <Link
                            href="/settings/billing"
                            className={`flex items-center px-2.5 py-2 rounded-lg whitespace-nowrap ${pathname.includes('/settings/billing') && 'bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                        >
                            <svg
                                className={`shrink-0 fill-current mr-2 ${pathname.includes('/settings/billing') ? 'text-violet-500 dark:text-violet-400' : 'text-gray-400 dark:text-gray-500'}`}
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                            >
                                <path d="m9 12.614 4.806 1.374a.15.15 0 0 0 .174-.21L8.133 2.082a.15.15 0 0 0-.268 0L2.02 13.777a.149.149 0 0 0 .174.21L7 12.614V9a1 1 0 1 1 2 0v3.614Zm-1 1.794-5.257 1.503c-1.798.514-3.35-1.355-2.513-3.028L6.076 1.188c.791-1.584 3.052-1.584 3.845 0l5.848 11.695c.836 1.672-.714 3.54-2.512 3.028L8 14.408Z" />
                            </svg>
                            <span
                                className={`text-sm font-medium ${pathname.includes('/settings/billing') ? 'text-violet-500 dark:text-violet-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'}`}
                            >
                                Facturación Electrónica
                            </span>
                        </Link>
                    </li>
                    <li className="mr-0.5 md:mr-0 md:mb-0.5">
                        <Link
                            href="/settings/smtp"
                            className={`flex items-center px-2.5 py-2 rounded-lg whitespace-nowrap ${pathname.includes('/settings/apps') && 'bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                        >
                            <svg
                                className={`shrink-0 fill-current mr-2 ${pathname.includes('/settings/smtp') ? 'text-violet-500 dark:text-violet-400' : 'text-gray-400 dark:text-gray-500'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    />
                                    <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </g>
                            </svg>
                            <span
                                className={`text-sm font-medium ${pathname.includes('/settings/smtp') ? 'text-violet-500 dark:text-violet-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'}`}
                            >
                                Email SMTP principal
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
