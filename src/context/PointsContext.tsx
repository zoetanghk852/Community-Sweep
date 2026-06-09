'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import {
  mockRedeemedRecords,
  mockWallet,
  type RedeemOption,
  type RedeemedRecord,
} from '@/lib/mockData'

interface PointsContextValue {
  balance: number
  adjustBalance: (delta: number) => void
  redeemedRecords: RedeemedRecord[]
  redeem: (option: RedeemOption) => boolean
}

const PointsContext = createContext<PointsContextValue | null>(null)

export function PointsProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(mockWallet.balance)
  const [redeemedRecords, setRedeemedRecords] = useState<RedeemedRecord[]>(mockRedeemedRecords)

  const adjustBalance = (delta: number) => {
    setBalance((prev) => Math.max(0, prev + delta))
  }

  const redeem = useCallback((option: RedeemOption) => {
    let success = false
    setBalance((prev) => {
      if (prev < option.pointsCost) {
        return prev
      }
      success = true
      return prev - option.pointsCost
    })
    if (success) {
      setRedeemedRecords((prev) => [
        {
          id: `rx-${option.id}-${Date.now()}`,
          optionId: option.id,
          title: option.title,
          emoji: option.emoji,
          pointsCost: option.pointsCost,
          category: option.category,
          redeemedAt: new Date().toISOString(),
        },
        ...prev,
      ])
    }
    return success
  }, [])

  return (
    <PointsContext.Provider value={{ balance, adjustBalance, redeemedRecords, redeem }}>
      {children}
    </PointsContext.Provider>
  )
}

export function usePoints() {
  const ctx = useContext(PointsContext)
  if (!ctx) throw new Error('usePoints must be used within PointsProvider')
  return ctx
}
