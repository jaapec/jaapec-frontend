'use client'
import DeleteButton from '@/components/deleteButton'
import ZonesTable from '@/app/(dashboard)/settings/zones/zones-table'
import PaginationClassic from '@/components/pagination-classic'
import { useState } from 'react'
import ModalBasic from '@/components/modal-basic'

function ZonesContent() {
    const [zoneAddModalOpen, setZoneAddModalOpen] = useState(false)
    // Some dummy orders data
    const orders = [
        {
            id: 0,
            name: 'Guanujo',
            description: 'Zona principal, Guanujo',
            zone_father: null,
        },
        {
            id: 1,
            name: 'Sector A',
            description: 'Zector A de Guanujo',
            zone_father: 'Guanujo',
        },
    ]

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                        Zonas
                    </h1>
                </div>

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    {/* Delete button */}
                    <DeleteButton />
                    <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="feedback-modal"
                        onClick={() => {
                            setZoneAddModalOpen(true)
                        }}
                    >
                        Agregar Zona
                    </button>
                </div>
            </div>
            <ModalBasic
                isOpen={zoneAddModalOpen}
                setIsOpen={setZoneAddModalOpen}
                title="Agregar Zona"
            >
                {/* Modal content */}
                <div className="px-5 py-4">
                    <div className="space-y-3">
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Nombre <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                className="form-input w-full px-2 py-1"
                                type="text"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="description"
                            >
                                Descripción{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="description"
                                className="form-input w-full px-2 py-1"
                                type="text"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="zone_father"
                            >
                                Zone Padre
                            </label>
                            <select id="zone_father" className="form-select">
                                <option>Guanujo</option>
                                <option>Sector A</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Modal footer */}
                <div className="px-5 py-4 border-t border-gray-200 dark:border-gray-700/60">
                    <div className="flex flex-wrap justify-end space-x-2">
                        <button
                            className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                            onClick={() => {
                                setZoneAddModalOpen(false)
                            }}
                        >
                            Cancelar
                        </button>
                        <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                            Guardar
                        </button>
                    </div>
                </div>
            </ModalBasic>

            {/* Table */}
            <ZonesTable orders={orders} />

            {/* Pagination */}
            <div className="mt-8">
                <PaginationClassic />
            </div>
        </div>
    )
}
export default ZonesContent
