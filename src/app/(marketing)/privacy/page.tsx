import type { Metadata } from 'next'
import Link from 'next/link'
import { SubPageIntro } from '@/components/landing/SubPageIntro'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: '私隱政策（示範）',
  description: '社區換物 carousell 示範網站的個人資料處理說明。',
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <>
      <SubPageIntro
        title="私隱政策（示範）"
        description="此為規劃示範文件，說明正式試點時將如何依《個人資料（私隱）條例》處理登記資料。"
      />
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6 text-base leading-relaxed text-ink-muted">
            <p>
              示範網站所收集的姓名、聯絡電話與居住區域，僅用於說明報名流程，不會傳送至任何伺服器或第三方。
            </p>
            <p>
              正式試點啟動後，將另行公布完整的資料收集目的、保存期限、查閱與更正方式，以及聯絡資料保護主任的渠道。
            </p>
            <p>
              如有疑問，請透過
              <Link href="/#join" className="interactive mx-1 font-medium text-sage-dark hover:underline">
                活動登記表
              </Link>
              留下聯絡方式，我們會於 3 個工作天內回覆。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
