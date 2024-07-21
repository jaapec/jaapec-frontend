import { TransactionsProperties } from './transactions-properties'
import { useFlyoutContext } from '@/app/flyout-context'
import { useTransactionDetail } from './transaction-context'

export default function TransactionsTableItem({
    transaction,
    onCheckboxChange,
    isSelected,
}) {
    const { setFlyoutOpen } = useFlyoutContext()

    const { setTransaction } = useTransactionDetail()

    const { statusColor, amountColor } = TransactionsProperties()

    const handleCheckboxChange = (e) => {
        onCheckboxChange(transaction.id, e.target.checked)
    }

    const handleTransactionClick = (e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
        setFlyoutOpen(true)
        setTransaction(transaction)
    }

    return (
        <tr>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div className="flex items-center">
                    <label className="inline-flex">
                        <span className="sr-only">Select</span>
                        <input
                            className="form-checkbox"
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={isSelected}
                        />
                    </label>
                </div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.id}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">
                    {transaction.environment === 1 ? 'Pruebas' : 'Producción'}
                </div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">
                    <div
                        onClick={handleTransactionClick}
                        className={`text-xs cursor-pointer inline-flex font-medium rounded-full text-center px-2.5 py-1 ${statusColor(transaction.status)}`}
                    >
                        {`${transaction.establishment + '-' + transaction.emission_point + '-' + transaction.sequential}`}
                    </div>
                </div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.date_of_issue}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">
                    {transaction.buyer_identification}
                </div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.buyer_name}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.buyer_email}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.buyer_phone}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div
                    className={`text-right font-medium ${amountColor(transaction.amount)}`}
                >
                    {transaction.amount}
                </div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.payment_date}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{transaction.status}</div>
            </td>
        </tr>
    )
}
