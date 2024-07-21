'use client'

import { useEffect, useRef, useState } from 'react'
import { useAppProvider } from '@/app/app-provider'
import { useSelectedLayoutSegments } from 'next/navigation'
import { Transition } from '@headlessui/react'
import { getBreakpoint } from '../utils/utils'
import SidebarLinkGroup from './sidebar-link-group'
import SidebarLink from './sidebar-link'
import Logo from './logo'

export default function Sidebar({ variant = 'default' }) {
    const sidebar = useRef(null)
    const { sidebarOpen, setSidebarOpen } = useAppProvider()
    const [sidebarExpanded, setSidebarExpanded] = useState(false)
    const segments = useSelectedLayoutSegments()
    const [breakpoint, setBreakpoint] = useState(getBreakpoint())
    const expandOnly =
        !sidebarExpanded && (breakpoint === 'lg' || breakpoint === 'xl')

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current) return
            if (!sidebarOpen || sidebar.current.contains(target)) return
            setSidebarOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    const handleBreakpoint = () => {
        setBreakpoint(getBreakpoint())
    }

    useEffect(() => {
        window.addEventListener('resize', handleBreakpoint)
        return () => {
            window.removeEventListener('resize', handleBreakpoint)
        }
    }, [breakpoint])

    return (
        <div
            className={`min-w-fit ${sidebarExpanded ? 'sidebar-expanded' : ''}`}
        >
            {/* Sidebar backdrop (mobile only) */}
            <Transition
                as="div"
                className="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto"
                show={sidebarOpen}
                enter="transition-opacity ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                aria-hidden="true"
            />

            {/* Sidebar */}
            <Transition
                show={sidebarOpen}
                unmount={false}
                as="div"
                id="sidebar"
                ref={sidebar}
                className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${variant === 'v2' ? 'border-r border-gray-200 dark:border-gray-700/60' : 'rounded-r-2xl shadow-sm'}`}
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                {/* Sidebar header */}
                <div className="flex justify-between mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    <button
                        className="lg:hidden text-gray-500 hover:text-gray-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <Logo />
                    <span>JAAP EC</span>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
                            <span
                                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                                aria-hidden="true"
                            >
                                •••
                            </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                Pages
                            </span>
                        </h3>
                        <ul className="mt-3">
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${segments.includes('dashboard') && 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                            >
                                <SidebarLink href="/dashboard">
                                    <div className="flex items-center">
                                        <svg
                                            className={`shrink-0 fill-current ${segments.includes('dashboard') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}
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
                                                <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                                                <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                                            </g>
                                        </svg>
                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Inicio
                                        </span>
                                    </div>
                                </SidebarLink>
                            </li>
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${segments.includes('transactions') && 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                            >
                                <SidebarLink href="/transactions">
                                    <div className="flex items-center">
                                        <svg
                                            className={`shrink-0 fill-current ${segments.includes('transactions') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M4 20V7.1L2.05 2.85L3.85 2L6.2 7.05h11.6L20.15 2l1.8.85L20 7.1V20zm6-7h4q.425 0 .713-.288T15 12t-.288-.712T14 11h-4q-.425 0-.712.288T9 12t.288.713T10 13m-4 5h12V9.05H6zm0 0V9.05z"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Transacciones
                                        </span>
                                    </div>
                                </SidebarLink>
                            </li>
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${segments.includes('owners') && 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                            >
                                <SidebarLink href="/owners">
                                    <div className="flex items-center">
                                        <svg
                                            className={`shrink-0 fill-current ${segments.includes('owners') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Propietarios
                                        </span>
                                    </div>
                                </SidebarLink>
                            </li>
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${segments.includes('connections') && 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                            >
                                <SidebarLink href="/connections">
                                    <div className="flex items-center">
                                        <svg
                                            className={`shrink-0 fill-current ${segments.includes('connections') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm128 0h-32v-32h32Z"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Acometidas
                                        </span>
                                    </div>
                                </SidebarLink>
                            </li>
                            {/* Campaigns */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${segments.includes('rates') && 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}
                            >
                                <SidebarLink href="/rates">
                                    <div className="flex items-center">
                                        <svg
                                            className={`shrink-0 fill-current ${segments.includes('rates') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <circle
                                                    cx="16"
                                                    cy="16"
                                                    r="10"
                                                />
                                                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6" />
                                            </g>
                                        </svg>
                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Tarifas
                                        </span>
                                    </div>
                                </SidebarLink>
                            </li>
                            {/* Settings */}
                            <SidebarLinkGroup
                                open={segments.includes('settings')}
                            >
                                {(handleClick, open) => {
                                    return (
                                        <>
                                            <a
                                                href="#0"
                                                className={`block text-gray-800 dark:text-gray-100 truncate transition ${
                                                    segments.includes(
                                                        'settings'
                                                    )
                                                        ? ''
                                                        : 'hover:text-gray-900 dark:hover:text-white'
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    expandOnly
                                                        ? setSidebarExpanded(
                                                              true
                                                          )
                                                        : handleClick()
                                                }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className={`shrink-0 fill-current ${segments.includes('settings') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
                                                                fillRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                            Configuración
                                                        </span>
                                                    </div>
                                                    {/* Icon */}
                                                    <div className="flex shrink-0 ml-2">
                                                        <svg
                                                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${open && 'rotate-180'}`}
                                                            viewBox="0 0 12 12"
                                                        >
                                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                                <ul
                                                    className={`pl-8 mt-1 ${!open && 'hidden'}`}
                                                >
                                                    <li className="mb-1 last:mb-0">
                                                        <SidebarLink href="/settings/company">
                                                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                                Empresa
                                                            </span>
                                                        </SidebarLink>
                                                    </li>
                                                    <li className="mb-1 last:mb-0">
                                                        <SidebarLink href="/settings/zones">
                                                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                                Zonas
                                                            </span>
                                                        </SidebarLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    )
                                }}
                            </SidebarLinkGroup>
                        </ul>
                    </div>
                </div>

                {/* Expand / collapse button */}
                <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                    <div className="w-12 pl-4 pr-3 py-2">
                        <button
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                            onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        >
                            <span className="sr-only">
                                Expand / collapse sidebar
                            </span>
                            <svg
                                className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
    )
}
