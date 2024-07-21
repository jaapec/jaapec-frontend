'use client'

import { createContext, useContext, useState } from 'react'

const SelectedItemsContext = createContext(undefined)

export const SelectedItemsProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([])
    return (
        <SelectedItemsContext.Provider
            value={{ selectedItems, setSelectedItems }}
        >
            {children}
        </SelectedItemsContext.Provider>
    )
}

export const useSelectedItems = () => {
    const context = useContext(SelectedItemsContext)
    if (!context) {
        throw new Error(
            'useSelectedItems must be used within a SelectedItemsProvider'
        )
    }
    return context
}
