import { BottomNav } from './BottomNav'

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="mx-auto min-h-svh max-w-lg bg-page">
      <main id="main-content" className="px-4 pb-32 pt-5 sm:px-5">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
