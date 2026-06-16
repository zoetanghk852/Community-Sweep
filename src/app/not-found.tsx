import Link from 'next/link'
import { ArrowLeft, Home, Leaf } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-page px-4 py-16">
      <div className="grain-overlay" aria-hidden />
      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-light">
          <Leaf className="h-8 w-8 text-sage-dark" strokeWidth={2} aria-hidden />
        </div>
        <p className="section-label mt-8">404</p>
        <h1 className="section-title mt-2 text-3xl text-foreground">找不到此頁面</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          連結可能已失效，或網址輸入有誤。你可以返回主頁繼續瀏覽社區服務。
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="interactive inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-terracotta px-6 py-3 text-lg font-semibold text-white shadow-warm hover:bg-terracotta-dark"
          >
            <Home className="h-5 w-5" aria-hidden />
            平台首頁
          </Link>
          <Link
            href="/hall"
            className="interactive inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl border-2 border-border-warm bg-card px-6 py-3 text-lg font-semibold text-foreground hover:border-sage hover:text-sage-dark"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            示範 App
          </Link>
        </div>
      </div>
    </div>
  )
}
