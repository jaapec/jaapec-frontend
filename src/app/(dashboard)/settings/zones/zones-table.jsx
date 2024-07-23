'use client'

import { useItemSelection } from '@/components/utils/use-item-selection'
import ZonesTableItem from './zones-table-item'

export default function ZonesTable({ orders }) {
    const {
        selectedItems,
        isAllSelected,
        handleCheckboxChange,
        handleSelectAllChange,
    } = useItemSelection(orders)

    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
            <header className="px-5 py-4">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    Todas las Zonas{' '}
                    <span className="text-gray-400 dark:text-gray-500 font-medium">
                        2
                    </span>
                </h2>
            </header>
            <div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700/60">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-700/60">
                            <tr>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                    <div className="flex items-center">
                                        <label className="inline-flex">
                                            <span className="sr-only">
                                                Select all
                                            </span>
                                            <input
                                                className="form-checkbox"
                                                type="checkbox"
                                                onChange={handleSelectAllChange}
                                                checked={isAllSelected}
                                            />
                                        </label>
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Id
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Nombre
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Descripción
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Zona Padre
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Acciones
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm">
                            {orders.map((order) => (
                                <ZonesTableItem
                                    key={order.id}
                                    order={order}
                                    onCheckboxChange={handleCheckboxChange}
                                    isSelected={selectedItems.includes(
                                        order.id
                                    )}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
