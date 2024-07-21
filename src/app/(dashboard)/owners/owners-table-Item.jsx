const OwnersTableItem = ({ owner }) => {
    return (
        <>
            <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>{owner.id}</div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.identification_type}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.identification}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.name}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.lastname}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.email}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.cellphone}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.address}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                        {owner.reference}
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                    <div className="space-x-1">
                        <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 rounded-full">
                            <span className="sr-only">Editar</span>
                            <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                            >
                                <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                            </svg>
                        </button>
                        <button className="text-red-500 hover:text-red-600 rounded-full">
                            <span className="sr-only">Eliminar</span>
                            <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                            >
                                <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                                <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default OwnersTableItem
