'use client'

import { PointsWalletCard } from '@/components/home/PointsWalletCard'
import { usePoints } from '@/context/PointsContext'
import type { UserWallet } from '@/lib/mockData'

interface HomeBalanceProps {
  fallbackWallet: UserWallet
}

export function HomeBalance({ fallbackWallet }: HomeBalanceProps) {
  const { balance } = usePoints()
  const wallet = { ...fallbackWallet, balance }
  return <PointsWalletCard wallet={wallet} />
}
