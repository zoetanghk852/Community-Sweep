'use client'

import { SlidersHorizontal } from 'lucide-react'

export function ExploreFilterButton() {
  return (
    <button
      type="button"
      disabled
      title="活動篩選將於正式版推出"
      aria-label="篩選活動（示範版開發中）"
      className="rounded-lg border border-border-light bg-card p-2.5 text-muted opacity-60 shadow-sm"
    >
      <SlidersHorizontal className="h-5 w-5" aria-hidden />
    </button>
  )
}
