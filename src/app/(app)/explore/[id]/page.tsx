import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ActivityDetail } from '@/components/explore/ActivityDetail'
import { getExploreActivityById } from '@/lib/mockData'

interface ActivityDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ActivityDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const activity = getExploreActivityById(id)
  return {
    title: activity
      ? `${activity.title}｜社區換物carousell`
      : '活動詳情｜社區換物carousell',
  }
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { id } = await params
  const activity = getExploreActivityById(id)

  if (!activity) {
    notFound()
  }

  return <ActivityDetail activity={activity} />
}
