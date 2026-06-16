import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ActivityCard } from '@/components/explore/ActivityCard'
import { ExploreFilterButton } from '@/components/explore/ExploreFilterButton'
import { EXPLORE_ACTIVITY_TOTAL, mockExploreActivities } from '@/lib/mockData'

export default function ExplorePage() {
  return (
    <div className="space-y-5">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <Link
            href="/hall"
            className="icon-btn mt-0.5"
            aria-label="返回主頁"
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={2.25} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">探索活動</h1>
            <p className="mt-1 text-base text-muted">
              探索全部 {EXPLORE_ACTIVITY_TOTAL} 個活動
            </p>
          </div>
        </div>
        <ExploreFilterButton />
      </header>

      <ul className="space-y-6">
        {mockExploreActivities.map((activity) => (
          <li key={activity.id}>
            <ActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </div>
  )
}
