import RatesTableItem from '@/app/(dashboard)/rates/rates-table-Item'

const RatesTable = ({ rates }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
            <header className="px-5 py-4">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    Todas las Tarifas{' '}
                    <span className="text-gray-400 dark:text-gray-500 font-medium">
                        2
                    </span>
                </h2>
            </header>
            <div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700/60">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-700/60">
                            <tr>
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
                                        Precio Base
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Acciones
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {rates.map((rate) => (
                                <RatesTableItem key={rate.id} rate={rate} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default RatesTable