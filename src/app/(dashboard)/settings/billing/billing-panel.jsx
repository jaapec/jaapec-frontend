'use client'

import { useState } from 'react'

export default function BillingPanel() {
    const [active, setActive] = useState(true)
    const [environment, setEnvironment] = useState(false)
    const [automaticBilling, setAutomaticBilling] = useState(false)

    return (
        <div className="grow">
            {/* Panel body */}
            <div className="p-6 space-y-6">
                <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-5">
                    Datos Facturación Electrónica
                </h2>

                {/* General */}
                <section>
                    <h3 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">
                        General
                    </h3>
                    <ul>
                        <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700/60">
                            {/* Left */}
                            <div>
                                <div className="text-gray-800 dark:text-gray-100 font-semibold">
                                    Activar facturación electronica.
                                </div>
                                <div className="text-sm">
                                    Activa esta opción para comenzar a emitir
                                    facturas electrónicas de manera sencilla y
                                    segura.
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
                        {active ? (
                            <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700/60">
                                {/* Left */}
                                <div>
                                    <div className="text-gray-800 dark:text-gray-100 font-semibold">
                                        Ambiente
                                    </div>
                                    <div className="text-sm">
                                        Selecciona el entorno donde se utilizará
                                        la aplicación, como pruebas o
                                        producción.
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="flex items-center ml-4">
                                    <div className="text-sm text-gray-400 dark:text-gray-500 italic mr-2">
                                        {environment ? 'Producción' : 'Pruebas'}
                                    </div>
                                    <div className="form-switch">
                                        <input
                                            type="checkbox"
                                            id="messages"
                                            className="sr-only"
                                            checked={environment}
                                            onChange={() =>
                                                setEnvironment(!environment)
                                            }
                                        />
                                        <label
                                            className="bg-gray-400 dark:bg-gray-700"
                                            htmlFor="messages"
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
                        ) : null}
                    </ul>

                    {active ? (
                        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                            <div className="sm:w-1/3">
                                <label
                                    className="text-gray-800 dark:text-gray-100 font-semibold"
                                    htmlFor="name"
                                >
                                    No. Punto de Emisión
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full"
                                    type="text"
                                    defaultValue="001"
                                />
                            </div>
                            <div className="sm:w-1/3">
                                <label
                                    className="text-gray-800 dark:text-gray-100 font-semibold"
                                    htmlFor="name"
                                >
                                    Secuencia
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full"
                                    type="text"
                                    defaultValue="0"
                                />
                            </div>
                            <div className="sm:w-1/3">
                                <label
                                    className="text-gray-800 dark:text-gray-100 font-semibold"
                                    htmlFor="name"
                                >
                                    Tiempo máximo de pago en días
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full"
                                    type="text"
                                    defaultValue="5"
                                />
                            </div>
                        </div>
                    ) : null}
                    {active ? (
                        <ul>
                            <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700/60">
                                {/* Left */}
                                <div>
                                    <div className="text-gray-800 dark:text-gray-100 font-semibold">
                                        Facturación Automática
                                    </div>
                                    <div className="text-sm">
                                        La facturación automática es un proceso
                                        que genera y envía facturas de manera
                                        automática, simplificando la gestión y
                                        reduciendo errores.
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="flex items-center ml-4">
                                    <div className="text-sm text-gray-400 dark:text-gray-500 italic mr-2">
                                        {automaticBilling ? 'On' : 'Off'}
                                    </div>
                                    <div className="form-switch">
                                        <input
                                            type="checkbox"
                                            id="automaticBilling"
                                            className="sr-only"
                                            checked={automaticBilling}
                                            onChange={() =>
                                                setAutomaticBilling(
                                                    !automaticBilling
                                                )
                                            }
                                        />
                                        <label
                                            className="bg-gray-400 dark:bg-gray-700"
                                            htmlFor="automaticBilling"
                                        >
                                            <span
                                                className="bg-white shadow-sm"
                                                aria-hidden="false"
                                            ></span>
                                            <span className="sr-only">
                                                Enable smart sync
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            {automaticBilling ? (
                                <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700/60">
                                    <div className="sm:w-1/3">
                                        <label
                                            className="text-gray-800 dark:text-gray-100 font-semibold"
                                            htmlFor="name"
                                        >
                                            Día de Corte
                                        </label>
                                        <div className="text-sm">
                                            Dia entre 1 y 30 en la que el
                                            sistema generara automáticamente las
                                            facturas a los clientes.
                                        </div>
                                        <input
                                            id="name"
                                            className="form-input w-full"
                                            type="text"
                                        />
                                    </div>
                                </li>
                            ) : null}
                        </ul>
                    ) : null}
                </section>
                {active ? (
                    <section>
                        <h3 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">
                            Firma
                        </h3>
                        <div className="text-sm">
                            Firma electronica del representante legal de la
                            Institución.
                        </div>
                        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                            <div className="sm:w-1/3">
                                <label
                                    className="text-gray-800 dark:text-gray-100 font-semibold"
                                    htmlFor="name"
                                >
                                    Archivo .p12
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full"
                                    type="file"
                                />
                            </div>
                            <div className="sm:w-1/3">
                                <label
                                    className="text-gray-800 dark:text-gray-100 font-semibold"
                                    htmlFor="name"
                                >
                                    Contraseña
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full"
                                    type="password"
                                />
                            </div>
                            <div className="sm:w-1/3">
                                <label
                                    className="text-gray-800 dark:text-gray-100 font-semibold"
                                    htmlFor="name"
                                >
                                    Fecha de Caducidad
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full"
                                    type="date"
                                />
                            </div>
                        </div>
                    </section>
                ) : null}
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
