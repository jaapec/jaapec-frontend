import DateSelect from '@/components/date-select'
import FilterButton from '@/components/dropdown-filter'
import OrdersTable from './orders-table'
import PaginationClassic from '@/components/pagination-classic'
import { SelectedItemsProvider } from '@/app/selected-items-context'
import DeleteButton from '@/components/deleteButton'

export const metadata = {
    title: 'Orders - Mosaic',
    description: 'Page description',
}

function ZonesContent() {
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

                    {/* Add order button */}
                    <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                        <svg
                            className="fill-current shrink-0 xs:hidden"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="max-xs:sr-only">Agregar Zona</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <OrdersTable orders={orders} />

            {/* Pagination */}
            <div className="mt-8">
                <PaginationClassic />
            </div>
        </div>
    )
}

export default function Orders() {
    return (
        <SelectedItemsProvider>
            <ZonesContent />
        </SelectedItemsProvider>
    )
}
