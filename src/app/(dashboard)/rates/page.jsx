import PaginationClassic from '@/components/pagination-classic'
import { SelectedItemsProvider } from '@/app/selected-items-context'
import RatesTable from '@/app/(dashboard)/rates/rates-table'

export const metadata = {
    title: 'Orders - Mosaic',
    description: 'Page description',
}

function ZonesContent() {
    // Some dummy orders data
    const rates = [
        {
            id: 0,
            name: 'Tarifa Normal',
            description: 'Tarifa para usuarios residenciales normales',
            price_base: '0',
        },
        {
            id: 1,
            name: 'Tarifa Negocios',
            description: 'Tarifa para negocios',

            price_base: '4.00',
        },
        {
            id: 2,
            name: 'Tarifa Fija',
            description: 'Tarifa fija para usuarios exclusivos',
            price_base: '3.00',
        },
    ]

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                        Tarifas
                    </h1>
                </div>

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                        <svg
                            className="fill-current shrink-0 xs:hidden"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="max-xs:sr-only">Agregar Tarifa</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <RatesTable rates={rates} />

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
