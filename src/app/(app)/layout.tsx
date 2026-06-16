import { AppShell } from '@/components/layout/AppShell'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <a href="#main-content" className="skip-link">
        跳至主要內容
      </a>
      <AppShell>{children}</AppShell>
    </>
  )
}
