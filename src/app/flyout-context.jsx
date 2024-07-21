'use client'

import { createContext, useContext, useState } from 'react'

const FlyoutContext = createContext(undefined)

export const FlyoutProvider = ({ children, initialState = false }) => {
    const [flyoutOpen, setFlyoutOpen] = useState(initialState)
    return (
        <FlyoutContext.Provider value={{ flyoutOpen, setFlyoutOpen }}>
            {children}
        </FlyoutContext.Provider>
    )
}

export const useFlyoutContext = () => {
    const context = useContext(FlyoutContext)
    if (!context) {
        throw new Error('useFlyout must be used within a FlyoutProvider')
    }
    return context
}
