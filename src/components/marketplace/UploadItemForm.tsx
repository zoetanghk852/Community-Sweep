'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, Upload } from 'lucide-react'
import { categoryPointTable, uploadCategories, uploadConditions } from '@/lib/categoryPoints'
import type { MarketplaceItem } from '@/lib/landingData'
import { LargeButton } from '@/components/ui/LargeButton'

interface UploadDraft {
  title: string
  category: MarketplaceItem['category']
  condition: MarketplaceItem['condition']
  story: string
  submittedAt: string
}

const STORAGE_KEY = 'community-sweep-pending-uploads'

export function UploadItemForm() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<MarketplaceItem['category']>('衣物')
  const [condition, setCondition] = useState<MarketplaceItem['condition']>('良好')
  const [story, setStory] = useState('')
  const [submitted, setSubmitted] = useState<UploadDraft | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const draft: UploadDraft = {
      title: title.trim(),
      category,
      condition,
      story: story.trim(),
      submittedAt: new Date().toISOString(),
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as UploadDraft[]
      localStorage.setItem(STORAGE_KEY, JSON.stringify([draft, ...existing]))
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([draft]))
    }

    setSubmitted(draft)
  }

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-sage/30 bg-sage-light p-6">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-sage-dark" aria-hidden />
            <div>
              <h2 className="text-xl font-bold text-foreground">已提交，等候義工審核</h2>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">
                「{submitted.title}」已送交義工審核。審核通過後會依類別分值表核定積分並上架；你會在 App
                收到通知（示範版）。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-page p-5 text-sm text-ink-muted">
          <p>
            <span className="font-medium text-foreground">類別：</span>
            {submitted.category}
          </p>
          <p className="mt-2">
            <span className="font-medium text-foreground">狀況：</span>
            {submitted.condition}
          </p>
          <p className="mt-2">
            <span className="font-medium text-foreground">參考分值：</span>
            {categoryPointTable[submitted.category]} 積分（義工核定後為準）
          </p>
          <p className="mt-2">
            <span className="font-medium text-foreground">故事：</span>
            {submitted.story}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <LargeButton href="/marketplace" variant="primary" ariaLabel="返回線上換物">
            返回線上換物
          </LargeButton>
          <LargeButton
            variant="secondary"
            ariaLabel="再上傳一件物品"
            onClick={() => {
              setSubmitted(null)
              setTitle('')
              setStory('')
              setCategory('衣物')
              setCondition('良好')
            }}
          >
            再上傳一件
          </LargeButton>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-border-warm bg-sage-light/50 p-4 text-sm leading-relaxed text-sage-dark">
        上傳後由義工審核並依類別分值表核定積分；審核通過才會公開予街坊預約。實物於下次換物市集現場交收。
      </div>

      <div className="space-y-4 rounded-2xl bg-page p-5">
        <div>
          <label htmlFor="upload-title" className="mb-1.5 block text-sm font-medium text-foreground">
            物品名稱
          </label>
          <input
            id="upload-title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="例如：藍色棉質外套"
            className="interactive w-full rounded-xl border border-border-warm bg-card px-4 py-3 text-base focus-visible:border-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          />
        </div>

        <div>
          <label htmlFor="upload-category" className="mb-1.5 block text-sm font-medium text-foreground">
            類別
          </label>
          <select
            id="upload-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as MarketplaceItem['category'])}
            className="interactive w-full rounded-xl border border-border-warm bg-card px-4 py-3 text-base focus-visible:border-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          >
            {uploadCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}（參考 {categoryPointTable[cat]} 積分）
              </option>
            ))}
          </select>
        </div>

        <div role="group" aria-labelledby="upload-condition-label">
          <p id="upload-condition-label" className="mb-2 text-sm font-medium text-foreground">
            狀況
          </p>
          <div className="flex flex-wrap gap-2">
            {uploadConditions.map((cond) => {
              const selected = condition === cond
              return (
                <button
                  key={cond}
                  type="button"
                  onClick={() => setCondition(cond)}
                  aria-pressed={selected}
                  className={[
                    'interactive rounded-lg px-3.5 py-2 text-sm font-medium',
                    selected
                      ? 'bg-sage font-bold text-white shadow-warm ring-2 ring-sage-dark ring-offset-1'
                      : 'bg-card text-ink-muted hover:bg-sage-light',
                  ].join(' ')}
                >
                  {cond}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <label htmlFor="upload-story" className="mb-1.5 block text-sm font-medium text-foreground">
            物品故事（選填）
          </label>
          <textarea
            id="upload-story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            rows={4}
            placeholder="簡單講下件物品嘅來歷，方便街坊了解…"
            className="interactive w-full rounded-xl border border-border-warm bg-card px-4 py-3 text-base focus-visible:border-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-border-warm bg-card p-5 text-center">
        <Upload className="mx-auto h-8 w-8 text-muted" aria-hidden />
        <p className="mt-2 text-sm text-muted">示範版暫不支援照片上傳</p>
      </div>

      <LargeButton type="submit" variant="primary" icon={Upload} ariaLabel="提交物品等候義工審核">
        提交等候義工審核
      </LargeButton>
    </form>
  )
}

export function UploadItemPageHeader() {
  return (
    <header className="space-y-3">
      <Link
        href="/marketplace"
        className="interactive inline-flex items-center gap-2 text-sm font-medium text-sage-dark hover:text-sage"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        返回線上換物
      </Link>
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">上傳閒置物品</h1>
        <p className="mt-1 text-base text-muted">義工審核通過後才會顯示積分並公開予街坊預約</p>
      </div>
    </header>
  )
}
