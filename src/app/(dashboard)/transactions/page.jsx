import { SelectedItemsProvider } from '@/app/selected-items-context'
import { FlyoutProvider } from '@/app/flyout-context'
import { TransactionDetailProvider } from './transaction-context'
import SearchForm from '@/components/search-form'
import PaginationClassic from '@/components/pagination-classic'
import TransactionPanel from './transaction-panel'
import DeleteButton from '@/components/deleteButton'
import TransactionsTable from './transactions-table'

export const metadata = {
    title: 'Transactions - Mosaic',
    description: 'Page description',
}

function Transactions() {
    // Some dummy transactions data
    const transactions = [
        {
            id: 0,
            environment: 2,
            access_key: '0107202401179129015100120010020062654387846333310',
            cod_doc: '02',
            establishment: '001',
            emission_point: '002',
            sequential: '006265438',
            date_of_issue: '01/07/2024',
            buyer_id_type: '05',
            buyer_name: 'Johana Elizabeth Gonzalez Pazmiño',
            buyer_identification: '1723622112',
            buyer_email: 'johgonzalez@mailes.ueb.edu.ec',
            buyer_phone: '0987654321',
            way_to_pay: '19',
            amount: '0.00',
            term_in_days: '5',
            status: 'payment',
            payment_date: '06/07/2024',
        },
    ]

    return (
        <div className="relative bg-white dark:bg-gray-900 h-full">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
                {/* Page header */}
                <div className="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2">
                    {/* Left: Title */}
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                            $47,347.09
                        </h1>
                    </div>

                    {/* Right: Actions */}
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                        {/* Delete button */}
                        <DeleteButton />

                        {/* Search form */}
                        <div className="hidden sm:block">
                            <SearchForm />
                        </div>

                        {/* Export button */}
                        <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                            Export Transactions
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-5">
                    <ul className="flex flex-wrap -m-1">
                        <li className="m-1">
                            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">
                                View All
                            </button>
                        </li>
                        <li className="m-1">
                            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                                Completed
                            </button>
                        </li>
                        <li className="m-1">
                            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                                Pending
                            </button>
                        </li>
                        <li className="m-1">
                            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                                Canceled
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Table */}
                <TransactionsTable transactions={transactions} />

                {/* Pagination */}
                <div className="mt-8">
                    <PaginationClassic />
                </div>
            </div>

            <TransactionPanel />
        </div>
    )
}

export default function Orders() {
    return (
        <SelectedItemsProvider>
            <FlyoutProvider>
                <TransactionDetailProvider>
                    <Transactions />
                </TransactionDetailProvider>
            </FlyoutProvider>
        </SelectedItemsProvider>
    )
}
