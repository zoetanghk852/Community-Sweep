import type { MarketplaceItem } from '@/lib/landingData'

/** 義工依此表核定積分；物主不可自訂。表外物品走例外評分。 */
export const categoryPointTable: Record<MarketplaceItem['category'], number> = {
  衣物: 2,
  玩具: 3,
  餐具: 2,
  書報: 1,
  家電: 4,
  其他: 1,
}

export const uploadCategories = Object.keys(categoryPointTable) as MarketplaceItem['category'][]

export const uploadConditions: MarketplaceItem['condition'][] = ['良好', '待修繕', '可升級改造']
