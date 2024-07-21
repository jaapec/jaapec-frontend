'use client'

import { useState } from 'react'

export default function BillingPanel() {
    const [active, setActive] = useState(true)

    return (
        <div className="grow">
            {/* Panel body */}
            <div className="p-6 space-y-6">
                <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-5">
                    Datos servidor SMTP
                </h2>

                {/* General */}
                <section>
                    <ul>
                        <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700/60">
                            {/* Left */}
                            <div>
                                <div className="text-gray-800 dark:text-gray-100 font-semibold">
                                    Activar servidor SMTP.
                                </div>
                                <div className="text-sm">
                                    Activa esta opción para comenzar a enviar
                                    los correos desde tu servidor smtp.
                                </div>
                            </div>
                            {/* Right */}
                            <div className="flex items-center ml-4">
                                <div className="text-sm text-gray-400 dark:text-gray-500 italic mr-2">
                                    {active ? 'On' : 'Off'}
                                </div>
                                <div className="form-switch">
                                    <input
                                        type="checkbox"
                                        id="comments"
                                        className="sr-only"
                                        checked={active}
                                        onChange={() => setActive(!active)}
                                    />

                                    <label
                                        className="bg-gray-400 dark:bg-gray-700"
                                        htmlFor="comments"
                                    >
                                        <span
                                            className="bg-white shadow-sm"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="sr-only">
                                            Enable smart sync
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {active ? (
                        <>
                            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                                <div className="sm:w-1/3">
                                    <label
                                        className="text-gray-800 dark:text-gray-100 font-semibold"
                                        htmlFor="name"
                                    >
                                        Host SMTP
                                    </label>
                                    <input
                                        id="name"
                                        className="form-input w-full"
                                        type="text"
                                        defaultValue="smtp.gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                                <div className="sm:w-1/3">
                                    <label
                                        className="text-gray-800 dark:text-gray-100 font-semibold"
                                        htmlFor="name"
                                    >
                                        Puerto SMTP
                                    </label>
                                    <input
                                        id="name"
                                        className="form-input w-full"
                                        type="text"
                                        defaultValue="465"
                                    />
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                                <div className="sm:w-1/3">
                                    <label
                                        className="text-gray-800 dark:text-gray-100 font-semibold"
                                        htmlFor="name"
                                    >
                                        Usuario SMTP
                                    </label>
                                    <input
                                        id="name"
                                        className="form-input w-full"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                                <div className="sm:w-1/3">
                                    <label
                                        className="text-gray-800 dark:text-gray-100 font-semibold"
                                        htmlFor="name"
                                    >
                                        Contraseña SMTP
                                    </label>
                                    <input
                                        id="name"
                                        className="form-input w-full"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                                <div className="sm:w-1/3">
                                    <label
                                        className="text-gray-800 dark:text-gray-100 font-semibold"
                                        htmlFor="name"
                                    >
                                        SMTP Email desde
                                    </label>
                                    <input
                                        id="name"
                                        className="form-input w-full"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                                <div className="sm:w-1/3">
                                    <label
                                        className="text-gray-800 dark:text-gray-100 font-semibold"
                                        htmlFor="name"
                                    >
                                        Protocolo SMTP
                                    </label>
                                    <input
                                        id="name"
                                        className="form-input w-full"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </>
                    ) : null}
                </section>
            </div>

            {/* Panel footer */}
            {active ? (
                <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-gray-200 dark:border-gray-700/60">
                        <div className="flex self-end">
                            <button className="btn dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300">
                                Cancelar
                            </button>
                            <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-3">
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                </footer>
            ) : null}
        </div>
    )
}
