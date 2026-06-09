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

/** Demo "today" — keep in sync with schedule calendar */
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
  category: '修繕' | '交換' | '茶點' | '實用品'
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

export const EXPLORE_ACTIVITY_TOTAL = 134

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
    title: '4月童玩與衣物交換市集',
    date: '2026-04-12',
    time: '10:00 – 14:00',
    location: '屯門東邨社區會堂',
    category: '主題交換日',
    spotsLeft: 18,
    emoji: '🧸',
  },
  {
    id: 'ev-002',
    exploreActivityId: 'ex-2',
    title: '5月家電與小工具修繕日',
    date: '2026-05-18',
    time: '11:00 – 16:00',
    location: '仁愛堂社區中心',
    category: '修繕工作坊',
    spotsLeft: 8,
    emoji: '🔧',
  },
  {
    id: 'ev-003',
    exploreActivityId: 'ex-3',
    title: '6月廚房用品交換午間場',
    date: '2026-06-08',
    time: '12:00 – 15:00',
    location: '蝴蝶邨平台',
    category: '主題交換日',
    spotsLeft: 24,
    emoji: '🍳',
  },
  {
    id: 'ev-004',
    exploreActivityId: 'ex-3',
    title: '4月童玩與衣物交換市集（加場）',
    date: '2026-06-12',
    time: '10:00 – 14:00',
    location: '屯門東邨社區會堂',
    category: '主題交換日',
    spotsLeft: 20,
    emoji: '🧸',
  },
  {
    id: 'ev-005',
    exploreActivityId: 'ex-5',
    title: 'CE005 長者數碼支援班',
    date: '2026-06-11',
    time: '14:00 – 16:00',
    location: '屯門北社區中心',
    category: '支援班',
    spotsLeft: 15,
    emoji: '📱',
  },
  {
    id: 'ev-006',
    exploreActivityId: 'ex-6',
    title: 'CE006 舊物改造體驗班',
    date: '2026-06-15',
    time: '10:00 – 12:30',
    location: '大埔社區會堂',
    category: '工作坊',
    spotsLeft: 20,
    emoji: '🎨',
  },
  {
    id: 'ev-007',
    exploreActivityId: 'ex-4',
    title: 'CE004 上門修繕配對日',
    date: '2026-06-20',
    time: '09:00 – 17:00',
    location: '屯門各屋邨（上門）',
    category: '修繕服務',
    spotsLeft: 8,
    emoji: '🔧',
  },
]

export const mockEarnMethods: EarnMethod[] = [
  {
    id: 'earn-1',
    title: '掃碼報到賺分',
    description: '參加交換日或工作坊，現場掃描海報 QR 碼',
    points: '+3 至 +15',
    icon: 'scan',
  },
  {
    id: 'earn-2',
    title: '捐出閒置物品',
    description: '帶 1～3 件物品參加交換，由義工代登記',
    points: '+6 每件',
    icon: 'exchange',
  },
  {
    id: 'earn-3',
    title: '完成修繕',
    description: '物品修好后由師傅確認，自動發放感謝積分',
    points: '+15',
    icon: 'repair',
  },
  {
    id: 'earn-4',
    title: '首次參觀（試水溫）',
    description: '只嚟睇、唔使換嘢，仍有歡迎積分',
    points: '+3',
    icon: 'visit',
  },
]

export const mockRedeemedRecords: RedeemedRecord[] = [
  {
    id: 'rx-1',
    optionId: 'rd-4',
    title: '環保袋套裝',
    emoji: '♻️',
    pointsCost: 30,
    category: '實用品',
    redeemedAt: '2026-05-20T14:30:00.000Z',
  },
]

export const mockRedeemOptions: RedeemOption[] = [
  {
    id: 'rd-3',
    title: '社區茶敘券',
    description: '交換日茶點一份',
    pointsCost: 20,
    category: '茶點',
    emoji: '🍵',
  },
  {
    id: 'rd-4',
    title: '環保袋套裝',
    description: '可重複使用購物袋 2 個',
    pointsCost: 30,
    category: '實用品',
    emoji: '♻️',
  },
]

export const mockPointsHistory: PointsHistoryItem[] = [
  { id: 'h1', date: '28/05/2026', title: '衣物交換日 — 捐出 2 件', amount: 12 },
  { id: 'h2', date: '20/05/2026', title: '換領環保袋套裝', amount: -30 },
  { id: 'h4', date: '08/05/2026', title: '首次參觀歡迎積分', amount: 3 },
]

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: 'cal-1',
    exploreActivityId: 'ex-2',
    date: '2026-05-18',
    title: '5月家電與小工具修繕日',
    location: '仁愛堂社區中心',
    time: '11:00 – 16:00',
    type: 'repair',
  },
  {
    id: 'cal-2',
    exploreActivityId: 'ex-5',
    date: '2026-05-25',
    title: '屯門東邨義工培訓',
    location: '屯門東邨社區會堂',
    time: '14:00 – 16:00',
    type: 'workshop',
  },
  {
    id: 'cal-3',
    exploreActivityId: 'ex-3',
    date: '2026-06-08',
    title: '6月廚房用品交換午間場',
    location: '蝴蝶邨平台',
    time: '12:00 – 15:00',
    type: 'exchange',
  },
  {
    id: 'cal-4',
    exploreActivityId: 'ex-3',
    date: '2026-06-12',
    title: '4月童玩與衣物交換市集（加場）',
    location: '屯門東邨社區會堂',
    time: '10:00 – 14:00',
    type: 'exchange',
  },
]

export const mockExploreActivities: ExploreActivity[] = [
  {
    id: 'ex-1',
    code: 'CE001',
    title: 'CE001 童玩與衣物交換市集',
    organization: '屯門東邨社區中心 | 仁愛堂',
    location: '屯門',
    venue: '屯門東邨社區會堂',
    dateLabel: '2026年4月12日（六）',
    time: '10:00 – 14:00',
    monthBadge: '2026/04',
    registrationLabel: '3月20日起開始報名',
    imageUrl:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=800&q=80',
    description:
      '每月主題換物日，鼓勵長者帶同 1～3 件閒置童玩或衣物參與。現場設義工代登記、無障礙動線及茶點區，方便長者輕鬆交流。',
    spotsLeft: 18,
    eligibility: '屯門區居民優先，長者及照顧者歡迎參加',
  },
  {
    id: 'ex-2',
    code: 'CE002',
    title: 'CE002 家電修繕工作坊',
    organization: '仁愛堂社區中心 | 復修辦館',
    location: '屯門',
    venue: '仁愛堂社區中心',
    dateLabel: '2026年5月18日（日）',
    time: '11:00 – 16:00',
    monthBadge: '2026/05',
    registrationLabel: '5月1日起開始報名',
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    description:
      '社區師傅即場示範小型家電檢查與簡易維修。參加者可帶一件待修繕家電，名額有限，先到先得。',
    spotsLeft: 12,
    eligibility: '每人限帶 1 件待修繕家電',
  },
  {
    id: 'ex-3',
    code: 'CE003',
    title: 'CE003 廚房用品交換午間場',
    organization: '蝴蝶邨鄰舍中心 | 地區團體',
    location: '屯門',
    venue: '蝴蝶邨平台',
    dateLabel: '2026年6月8日（一）',
    time: '12:00 – 15:00',
    monthBadge: '2026/06',
    registrationLabel: '6月1日起開始報名',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    description:
      '午間輕鬆換物場，專注餐具及廚房小工具。設物品登記站，義工可協助長者描述物品故事。',
    spotsLeft: 24,
    eligibility: '歡迎所有街坊，長者優先登記',
  },
  {
    id: 'ex-4',
    code: 'CE004',
    title: 'CE004 上門修繕配對日',
    organization: '社區換物carousell | 義工隊',
    location: '屯門各屋邨',
    venue: '上門服務（屯門區）',
    dateLabel: '2026年6月20日（六）',
    time: '09:00 – 17:00',
    monthBadge: '2026/06',
    registrationLabel: '6月10日起開始報名',
    imageUrl:
      'https://images.unsplash.com/photo-1504149926908-079175555ed7?w=800&q=80',
    description:
      '為行動不便長者提供上門檢查及簡易家居修繕配對。需提前登記地址及維修項目，由義工師傅安排探訪時段。',
    spotsLeft: 8,
    eligibility: '行動不便或難以外出之長者優先',
  },
  {
    id: 'ex-5',
    code: 'CE005',
    title: 'CE005 長者數碼支援班',
    organization: '賽馬會屯門北青少年綜合服務中心 | 鄰舍輔導會',
    location: '屯門',
    venue: '屯門北社區中心',
    dateLabel: '2026年6月11日（周四）',
    time: '14:00 – 16:00',
    monthBadge: '2026/06',
    registrationLabel: '6月1日起開始報名',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    description:
      '青年義工一對一協助長者學習使用手機及平台 App，包括查閱積分、活動報名及社區廣播。',
    spotsLeft: 15,
    eligibility: '建議自備手機，中心可提供少量借用機',
  },
  {
    id: 'ex-6',
    code: 'CE006',
    title: 'CE006 舊物改造體驗班',
    organization: '復修辦館 | 地區團體',
    location: '大埔',
    venue: '大埔社區會堂',
    dateLabel: '2026年6月15日（一）',
    time: '10:00 – 12:30',
    monthBadge: '2026/06',
    registrationLabel: '6月5日起開始報名',
    imageUrl:
      'https://images.unsplash.com/photo-1452860606245-08befbf0d145?w=800&q=80',
    description:
      '在導師帶領下將舊物重新組合，體驗藝術改造樂趣。材料由中心提供，成品可帶回家或留作社區展覽。',
    spotsLeft: 20,
    eligibility: '無需經驗，適合初次參加者',
  },
]

export function getExploreActivityById(id: string): ExploreActivity | undefined {
  return mockExploreActivities.find((activity) => activity.id === id)
}
