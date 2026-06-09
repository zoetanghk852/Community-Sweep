/** Stable number formatting for SSR + client (avoids locale hydration mismatches). */
export function formatPoints(value: number) {
  return value.toLocaleString('zh-HK')
}

export function formatRegistrationTime(iso: string) {
  const date = new Date(iso)
  return date.toLocaleString('zh-HK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
