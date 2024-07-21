'use client'
import Image from 'next/image'
import AccountImage from '@/images/user-avatar-80.png'

export default function AccountPanel() {
    return (
        <div className="grow">
            {/* Panel body */}
            <div className="p-6 space-y-6">
                <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-5">
                    Datos de la empresa
                </h2>
                {/* Picture */}
                <section>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <Image
                                className="w-20 h-20 rounded-full"
                                src={AccountImage}
                                width={80}
                                height={80}
                                alt="User upload"
                            />
                        </div>
                        <button className="btn-sm dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300">
                            Cambiar
                        </button>
                    </div>
                </section>
                {/* Business Profile */}
                <section>
                    <h2 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">
                        Perfil del negocio
                    </h2>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Razón social
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="business-id"
                            >
                                Registro único de contribuyente (RUC)
                            </label>
                            <input
                                id="business-id"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="location"
                            >
                                Tipo contribuyente
                            </label>
                            <input
                                id="location"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Régimen
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Obligado a llevar contabilidad
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Agente de retención
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
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Contribuyente especial N°
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                                defaultValue={0}
                            />
                        </div>
                    </div>
                </section>
                {/* Establecimiento */}
                <section>
                    <h2 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">
                        Establecimiento
                    </h2>
                    <div className="text-sm">
                        Datos del establecimiento registrados en el SRI.
                    </div>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                No. establecimiento
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
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Nombre comercial
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Ubicación de establecimiento
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">
                        Contacto
                    </h2>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Correo Electrónico
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="email"
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div className="sm:w-1/3">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Whatsapp
                            </label>
                            <input
                                id="name"
                                className="form-input w-full"
                                type="text"
                            />
                        </div>
                    </div>
                </section>
            </div>
            {/* Panel footer */}
            <footer>
                <div className="flex flex-col px-6 py-5 border-t border-gray-200 dark:border-gray-700/60">
                    <div className="flex self-end">
                        <button className="btn dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300">
                            Cancel
                        </button>
                        <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-3">
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
