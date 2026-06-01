'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { mockWallet } from '@/lib/mockData'

interface PointsContextValue {
  balance: number
  adjustBalance: (delta: number) => void
}

const PointsContext = createContext<PointsContextValue | null>(null)

export function PointsProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(mockWallet.balance)

  const adjustBalance = (delta: number) => {
    setBalance((prev) => Math.max(0, prev + delta))
  }

  return (
    <PointsContext.Provider value={{ balance, adjustBalance }}>
      {children}
    </PointsContext.Provider>
  )
}

export function usePoints() {
  const ctx = useContext(PointsContext)
  if (!ctx) throw new Error('usePoints must be used within PointsProvider')
  return ctx
}
