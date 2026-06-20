import type { Metadata } from 'next'
import Link from 'next/link'
import { SubPageIntro } from '@/components/landing/SubPageIntro'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: '使用條款（示範）',
  description: '社區換物 carousell 示範網站的使用條款說明。',
  alternates: { canonical: `${SITE_URL}/terms` },
}

export default function TermsPage() {
  return (
    <>
      <SubPageIntro
        title="使用條款（示範）"
        description="此為規劃示範文件，說明使用本示範網站與 App 時的基本原則。"
      />
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6 text-base leading-relaxed text-ink-muted">
            <p>
              本網站及示範 App 僅供社區換物計畫的概念展示與流程體驗，所呈現的積分、物品與付款流程均為模擬資料。
            </p>
            <p>
              使用者不得將示範介面誤認為已上線的正式服務，亦不得嘗試透過示範表單提交真實的敏感個人資料以外的用途。
            </p>
            <p>
              正式試點條款將於服務啟動時另行公布。欲了解參與方式，請前往
              <Link href="/#join" className="interactive mx-1 font-medium text-sage-dark hover:underline">
                活動登記
              </Link>
              。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
