'use client'

import { useItemSelection } from '@/components/utils/use-item-selection'
import TransactionsTableItem from '@/app/(dashboard)/transactions/transactions-table-item'

export default function TransactionsTable({ transactions }) {
    const {
        selectedItems,
        isAllSelected,
        handleCheckboxChange,
        handleSelectAllChange,
    } = useItemSelection(transactions)

    return (
        <div className="bg-white dark:bg-gray-900">
            <div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full dark:text-gray-300">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-gray-500 border-t border-b border-gray-200 dark:border-gray-700/60">
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
                                        ID
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Ambiente
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Número de factura
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Fecha de Emisión
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Identificación del Propietario
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Nombre del Propietario
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Correo del Propietario
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Célular del Propietario
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Total
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Fecha de Pago
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">
                                        Estado
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60 border-b border-gray-200 dark:border-gray-700/60">
                            {transactions.map((transaction) => (
                                <TransactionsTableItem
                                    key={transaction.id}
                                    transaction={transaction}
                                    onCheckboxChange={handleCheckboxChange}
                                    isSelected={selectedItems.includes(
                                        transaction.id
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
