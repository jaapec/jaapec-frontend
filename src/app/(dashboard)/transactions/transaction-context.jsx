'use client'

import { createContext, useContext, useState } from 'react'

const TransactionDetailContext = createContext(undefined)

export const TransactionDetailProvider = ({ children }) => {
    const [transaction, setTransaction] = useState(null)
    return (
        <TransactionDetailContext.Provider
            value={{ transaction, setTransaction }}
        >
            {children}
        </TransactionDetailContext.Provider>
    )
}

export const useTransactionDetail = () => {
    const context = useContext(TransactionDetailContext)
    if (!context) {
        throw new Error(
            'useTransaction must be used within a TransactionProvider'
        )
    }
    return context
}
