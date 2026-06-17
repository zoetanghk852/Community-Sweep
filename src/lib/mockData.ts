export interface UserWallet {
  balance: number
  paperCardNo: string
  memberName: string
}

export interface MemberProfile {
  memberName: string
  communityId: string
  phone: string
  paperCardNo: string
  district: string
  estate: string
  email: string
  largeTextMode: boolean
  activityNotifications: boolean
  phoneReminders: boolean
}

export interface QuickEvent {
  id: string
  exploreActivityId: string
  title: string
  date: string
  time: string
  location: string
  category: string
  spotsLeft: number
  emoji: string
}

/** Demo "today" - keep in sync with schedule calendar */
export const DEMO_TODAY = new Date(2026, 4, 30)

function parseQuickEventDate(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function getUpcomingHallEvents(): QuickEvent[] {
  return mockUpcomingEvents
    .filter((ev) => parseQuickEventDate(ev.date) >= DEMO_TODAY)
    .sort((a, b) => a.date.localeCompare(b.date))
}

export interface EarnMethod {
  id: string
  title: string
  description: string
  points: string
  icon: 'scan' | 'exchange' | 'repair' | 'visit'
}

export interface RedeemOption {
  id: string
  title: string
  description: string
  pointsCost: number
  category: '服務' | '禮物' | '修繕' | '日用品'
  emoji: string
}

export interface RedeemedRecord {
  id: string
  optionId: string
  title: string
  emoji: string
  pointsCost: number
  category: RedeemOption['category']
  redeemedAt: string
}

export interface PointsHistoryItem {
  id: string
  date: string
  title: string
  amount: number
}

export interface CalendarEvent {
  id: string
  exploreActivityId: string
  date: string
  title: string
  location: string
  time: string
  type: 'exchange' | 'repair' | 'workshop'
}

export interface ExploreActivity {
  id: string
  code: string
  title: string
  organization: string
  location: string
  venue: string
  dateLabel: string
  time: string
  monthBadge: string
  registrationLabel: string
  imageUrl: string
  description: string
  spotsLeft: number
  eligibility: string
}

export const EXPLORE_ACTIVITY_TOTAL = 48

export const mockWallet: UserWallet = {
  balance: 248,
  paperCardNo: 'PC-2026-0842',
  memberName: '陳美玲',
}

export const mockMemberProfile: MemberProfile = {
  memberName: mockWallet.memberName,
  communityId: 'TM-EST-01',
  phone: '+852 9123 4567',
  paperCardNo: mockWallet.paperCardNo,
  district: '屯門',
  estate: '屯門東邨',
  email: 'meiling.chan@example.com',
  largeTextMode: true,
  activityNotifications: true,
  phoneReminders: true,
}

export const mockUpcomingEvents: QuickEvent[] = [
  {
    id: 'ev-001',
    exploreActivityId: 'ex-1',
    title: '5月換物市集',
    date: '2026-05-18',
    time: '10:00 至 16:00',
    location: '屯門東邨社區會堂',
    category: '換物市集',
    spotsLeft: 18,
    emoji: '🔄',
  },
  {
    id: 'ev-002',
    exploreActivityId: 'ex-2',
    title: '6月換物市集',
    date: '2026-06-08',
    time: '10:00 至 16:00',
    location: '屯門東邨社區會堂',
    category: '換物市集',
    spotsLeft: 24,
    emoji: '🔄',
  },
  {
    id: 'ev-003',
    exploreActivityId: 'ex-3',
    title: '7月換物市集',
    date: '2026-07-12',
    time: '10:00 至 16:00',
    location: '屯門東邨社區會堂',
    category: '換物市集',
    spotsLeft: 20,
    emoji: '🔄',
  },
]

export const mockEarnMethods: EarnMethod[] = [
  {
    id: 'earn-1',
    title: '現場掃碼報到',
    description: '到換物市集現場，請義工協助掃描活動海報 QR 碼',
    points: '+3 至 +15',
    icon: 'scan',
  },
  {
    id: 'earn-2',
    title: '釋出物品交換',
    description: '單次 1 至 3 件即可參與，由義工代為登記',
    points: '+6 起',
    icon: 'exchange',
  },
  {
    id: 'earn-3',
    title: '完成修繕',
    description: '家居小修繕或舊物翻新完成後，由中心職員確認發分',
    points: '+15',
    icon: 'repair',
  },
  {
    id: 'earn-4',
    title: '試水溫參觀',
    description: '首次參觀換物市集、不換物品亦可獲歡迎積分',
    points: '+3',
    icon: 'visit',
  },
]

export const mockRedeemedRecords: RedeemedRecord[] = [
  {
    id: 'rx-1',
    optionId: 'rd-4',
    title: '環保袋套裝',
    emoji: '🛍️',
    pointsCost: 30,
    category: '禮物',
    redeemedAt: '2026-05-20T14:30:00.000Z',
  },
]

export const mockRedeemOptions: RedeemOption[] = [
  {
    id: 'rd-3',
    title: '社區茶敘券',
    description: '與街坊共飲一杯，中心茶敘時段使用',
    pointsCost: 20,
    category: '服務',
    emoji: '☕',
  },
  {
    id: 'rd-4',
    title: '環保袋套裝',
    description: '實用環保袋一套，換物市集現場領取',
    pointsCost: 30,
    category: '禮物',
    emoji: '🛍️',
  },
]

export const mockPointsHistory: PointsHistoryItem[] = [
  { id: 'h1', date: '28/05/2026', title: '5月換物市集，捐出 2 件', amount: 12 },
  { id: 'h2', date: '20/05/2026', title: '兌換環保袋套裝', amount: -30 },
  { id: 'h4', date: '08/05/2026', title: '試水溫參觀積分', amount: 3 },
]

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: 'cal-1',
    exploreActivityId: 'ex-1',
    date: '2026-05-18',
    title: '5月換物市集',
    location: '屯門東邨社區會堂',
    time: '10:00 至 16:00',
    type: 'exchange',
  },
  {
    id: 'cal-2',
    exploreActivityId: 'ex-2',
    date: '2026-06-08',
    title: '6月換物市集',
    location: '屯門東邨社區會堂',
    time: '10:00 至 16:00',
    type: 'exchange',
  },
  {
    id: 'cal-3',
    exploreActivityId: 'ex-3',
    date: '2026-07-12',
    title: '7月換物市集',
    location: '屯門東邨社區會堂',
    time: '10:00 至 16:00',
    type: 'exchange',
  },
]

export const mockExploreActivities: ExploreActivity[] = [
  {
    id: 'ex-1',
    code: 'CE001',
    title: 'CE001 五月換物市集',
    organization: '社區換物carousell | 承辦機構',
    location: '屯門',
    venue: '屯門東邨社區會堂',
    dateLabel: '2026年5月18日（一）',
    time: '10:00 至 16:00',
    monthBadge: '2026/05',
    registrationLabel: '5月1日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=800&q=80',
    description:
      '每月換物市集，同場設換物攤、維修攤、數碼義診攤。歡迎帶 1 至 3 件物品參加；義工依類別分值表核定積分，試水溫參觀亦可獲歡迎積分。',
    spotsLeft: 18,
    eligibility: '開放予屯門區街坊；長者動線優先',
  },
  {
    id: 'ex-2',
    code: 'CE002',
    title: 'CE002 六月換物市集',
    organization: '社區換物carousell | 街坊網絡',
    location: '屯門',
    venue: '屯門東邨社區會堂',
    dateLabel: '2026年6月8日（一）',
    time: '10:00 至 16:00',
    monthBadge: '2026/06',
    registrationLabel: '6月1日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    description:
      '本月換物市集設換物攤、維修攤、數碼義診攤。可先於 App 上傳閒置物品，義工審核後供街坊以積分預約；實物於現場交收。',
    spotsLeft: 24,
    eligibility: '開放予屯門區街坊；長者動線優先',
  },
  {
    id: 'ex-3',
    code: 'CE003',
    title: 'CE003 七月換物市集',
    organization: '社區換物carousell | 多單位協辦',
    location: '屯門',
    venue: '屯門東邨社區會堂',
    dateLabel: '2026年7月12日（日）',
    time: '10:00 至 16:00',
    monthBadge: '2026/07',
    registrationLabel: '7月1日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1504149926908-079175555ed7?w=800&q=80',
    description:
      '每月換物市集，同場設換物攤、維修攤、數碼義診攤。維修攤支援即場修繕；修不好可留件追蹤，於合作暫存點保管至下次市集。',
    spotsLeft: 20,
    eligibility: '開放予屯門區街坊；建議事先 App 報名',
  },
]

export function getExploreActivityById(id: string): ExploreActivity | undefined {
  return mockExploreActivities.find((activity) => activity.id === id)
}
