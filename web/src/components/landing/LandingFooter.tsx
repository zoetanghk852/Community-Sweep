import Link from 'next/link'
import { Leaf } from 'lucide-react'

export function LandingFooter() {
  return (
    <footer className="border-t border-border-warm bg-sage-dark py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6" strokeWidth={2} />
              <span className="text-lg font-bold">社區循環經濟與升級改造平台</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              以換物市集、修繕工作坊與藝術重組，協助有囤積習慣的長者發掘舊物價值，
              重建社區連結。
            </p>
          </div>

          <div>
            <h3 className="font-semibold">快速連結</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href="#features" className="hover:text-white hover:underline">
                  核心功能
                </a>
              </li>
              <li>
                <a href="#app-preview" className="hover:text-white hover:underline">
                  App 預覽
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-white hover:underline">
                  社區物品篩選
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-white hover:underline">
                  加入我們
                </a>
              </li>
              <li>
                <a href="#payment-session" className="hover:text-white hover:underline">
                  模擬付款閘道
                </a>
              </li>
              <li>
                <Link href="/hall" className="hover:text-white hover:underline">
                  體驗示範 App
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>社區循環經濟與升級改造平台 · 香港 · 規劃示範</p>
          <p className="mt-1">資料符合《個人資料（私隱）條例》（PDPO）設計原則</p>
        </div>
      </div>
    </footer>
  )
}
