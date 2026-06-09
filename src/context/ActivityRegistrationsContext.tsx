'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import type { ExploreActivity } from '@/lib/mockData'

export interface ActivityRegistration {
  id: string
  activityId: string
  title: string
  dateLabel: string
  time: string
  venue: string
  registeredAt: string
}

interface ActivityRegistrationsContextValue {
  registrations: ActivityRegistration[]
  isRegistered: (activityId: string) => boolean
  register: (activity: ExploreActivity) => boolean
}

const ActivityRegistrationsContext = createContext<ActivityRegistrationsContextValue | null>(
  null,
)

export function ActivityRegistrationsProvider({ children }: { children: ReactNode }) {
  const [registrations, setRegistrations] = useState<ActivityRegistration[]>([])

  const isRegistered = useCallback(
    (activityId: string) => registrations.some((r) => r.activityId === activityId),
    [registrations],
  )

  const register = useCallback((activity: ExploreActivity) => {
    let added = false
    setRegistrations((prev) => {
      if (prev.some((r) => r.activityId === activity.id)) {
        return prev
      }
      added = true
      const entry: ActivityRegistration = {
        id: `reg-${activity.id}-${Date.now()}`,
        activityId: activity.id,
        title: activity.title,
        dateLabel: activity.dateLabel,
        time: activity.time,
        venue: activity.venue,
        registeredAt: new Date().toISOString(),
      }
      return [entry, ...prev]
    })
    return added
  }, [])

  return (
    <ActivityRegistrationsContext.Provider value={{ registrations, isRegistered, register }}>
      {children}
    </ActivityRegistrationsContext.Provider>
  )
}

export function useActivityRegistrations() {
  const ctx = useContext(ActivityRegistrationsContext)
  if (!ctx) {
    throw new Error('useActivityRegistrations must be used within ActivityRegistrationsProvider')
  }
  return ctx
}
