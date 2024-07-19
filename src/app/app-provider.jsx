'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

const AppContext = createContext({
    sidebarOpen: false,
    setSidebarOpen: () => false
})

export default function AppProvider({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppProvider = () => useContext(AppContext)
