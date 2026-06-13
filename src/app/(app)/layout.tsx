import { AppShell } from '@/components/layout/AppShell'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        跳至主要內容
      </a>
      <AppShell>{children}</AppShell>
    </>
  )
}
