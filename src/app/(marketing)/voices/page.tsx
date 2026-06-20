import type { Metadata } from 'next'
import { CommentBoard } from '@/components/landing/CommentBoard'
import { SubPageIntro } from '@/components/landing/SubPageIntro'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: '街坊心聲',
  description: '閱讀街坊對換物市集與修繕服務的分享，或留下你的想法。',
  alternates: { canonical: `${SITE_URL}/voices` },
}

export default function VoicesPage() {
  return (
    <>
      <SubPageIntro
        title="街坊心聲"
        description="分享你對社區換物與修繕服務的想法，或閱讀其他街坊的參與經驗。"
      />
      <CommentBoard />
    </>
  )
}
