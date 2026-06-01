import { notFound } from 'next/navigation'
import { ActivityDetail } from '@/components/explore/ActivityDetail'
import { getExploreActivityById } from '@/lib/mockData'

interface ActivityDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { id } = await params
  const activity = getExploreActivityById(id)

  if (!activity) {
    notFound()
  }

  return <ActivityDetail activity={activity} />
}
