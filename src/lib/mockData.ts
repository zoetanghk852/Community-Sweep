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
    title: '4月衣物換物日',
    date: '2026-04-12',
    time: '10:00 至 14:00',
    location: '屯門東邨社區會堂',
    category: '主題交換',
    spotsLeft: 18,
    emoji: '👕',
  },
  {
    id: 'ev-002',
    exploreActivityId: 'ex-2',
    title: '5月修繕開放日',
    date: '2026-05-18',
    time: '11:00 至 16:00',
    location: '屯門東邨社區會堂',
    category: '修繕服務',
    spotsLeft: 8,
    emoji: '🔧',
  },
  {
    id: 'ev-003',
    exploreActivityId: 'ex-3',
    title: '6月玩具換物日',
    date: '2026-06-08',
    time: '12:00 至 15:00',
    location: '屯門東邨',
    category: '主題交換',
    spotsLeft: 24,
    emoji: '🧸',
  },
  {
    id: 'ev-004',
    exploreActivityId: 'ex-3',
    title: '4月社區衣物換物加場',
    date: '2026-06-12',
    time: '10:00 至 14:00',
    location: '屯門東邨社區會堂',
    category: '主題交換',
    spotsLeft: 20,
    emoji: '👕',
  },
  {
    id: 'ev-005',
    exploreActivityId: 'ex-5',
    title: 'CE005 長者數碼義診日',
    date: '2026-06-11',
    time: '14:00 至 16:00',
    location: '屯門東邨活動室',
    category: '數碼支援',
    spotsLeft: 15,
    emoji: '📱',
  },
  {
    id: 'ev-006',
    exploreActivityId: 'ex-6',
    title: 'CE006 藝術重組工作坊',
    date: '2026-06-15',
    time: '10:00 至 12:30',
    location: '屯門東邨會堂',
    category: '工作坊',
    spotsLeft: 20,
    emoji: '🎨',
  },
  {
    id: 'ev-007',
    exploreActivityId: 'ex-4',
    title: 'CE004 社區循環嘉年華',
    date: '2026-06-20',
    time: '09:00 至 17:00',
    location: '屯門東邨露天廣場',
    category: '社區嘉年華',
    spotsLeft: 8,
    emoji: '🎪',
  },
]

export const mockEarnMethods: EarnMethod[] = [
  {
    id: 'earn-1',
    title: '現場掃碼報到',
    description: '到交換日現場，請義工協助掃描活動海報 QR 碼',
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
    description: '首次參觀換物日、不換物品亦可獲歡迎積分',
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
    description: '實用環保袋一套，換物日現場領取',
    pointsCost: 30,
    category: '禮物',
    emoji: '🛍️',
  },
]

export const mockPointsHistory: PointsHistoryItem[] = [
  { id: 'h1', date: '28/05/2026', title: '衣物交換日，捐出 2 件', amount: 12 },
  { id: 'h2', date: '20/05/2026', title: '兌換環保袋套裝', amount: -30 },
  { id: 'h4', date: '08/05/2026', title: '試水溫參觀積分', amount: 3 },
]

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: 'cal-1',
    exploreActivityId: 'ex-2',
    date: '2026-05-18',
    title: '5月修繕開放日',
    location: '屯門東邨社區會堂',
    time: '11:00 至 16:00',
    type: 'repair',
  },
  {
    id: 'cal-2',
    exploreActivityId: 'ex-5',
    date: '2026-05-25',
    title: '家居小修繕工作坊',
    location: '屯門東邨活動室',
    time: '14:00 至 16:00',
    type: 'workshop',
  },
  {
    id: 'cal-3',
    exploreActivityId: 'ex-3',
    date: '2026-06-08',
    title: '6月玩具換物日',
    location: '屯門東邨',
    time: '12:00 至 15:00',
    type: 'exchange',
  },
  {
    id: 'cal-4',
    exploreActivityId: 'ex-3',
    date: '2026-06-12',
    title: '4月社區衣物換物加場',
    location: '屯門東邨社區會堂',
    time: '10:00 至 14:00',
    type: 'exchange',
  },
]

export const mockExploreActivities: ExploreActivity[] = [
  {
    id: 'ex-1',
    code: 'CE001',
    title: 'CE001 四月衣物換物專場',
    organization: '屯門區社區換物計劃 | 承辦機構',
    location: '屯門',
    venue: '屯門東邨社區會堂',
    dateLabel: '2026年4月12日（日）',
    time: '10:00 至 14:00',
    monthBadge: '2026/04',
    registrationLabel: '3月20日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=800&q=80',
    description:
      '每月主題換物日，歡迎帶 1 至 3 件衣物參加。無需估價，義工協助登記，試水溫參觀亦可獲積分。',
    spotsLeft: 18,
    eligibility: '屯門區居民優先，長者及街坊歡迎參加',
  },
  {
    id: 'ex-2',
    code: 'CE002',
    title: 'CE002 五月修繕開放日',
    organization: '社區換物carousell | 修繕夥伴',
    location: '屯門',
    venue: '屯門東邨社區會堂',
    dateLabel: '2026年5月18日（一）',
    time: '11:00 至 16:00',
    monthBadge: '2026/05',
    registrationLabel: '5月1日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    description:
      '社區師傅駐場，協助檢查小型家居用品及舊物，可先修後換。現場設義工代登記，無需使用智慧手機。',
    spotsLeft: 12,
    eligibility: '每次可登記 1 件待修物品',
  },
  {
    id: 'ex-3',
    code: 'CE003',
    title: 'CE003 六月兒童玩具換物日',
    organization: '社區換物carousell | 街坊網絡',
    location: '屯門',
    venue: '屯門東邨',
    dateLabel: '2026年6月8日（一）',
    time: '12:00 至 15:00',
    monthBadge: '2026/06',
    registrationLabel: '6月1日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    description:
      '歡迎帶兒童玩具、繪本或文娛用品參加交換。鼓勵長者與孫輩一同參與，義工協助搬運及登記。',
    spotsLeft: 24,
    eligibility: '玩具狀況良好或可修繕均可',
  },
  {
    id: 'ex-4',
    code: 'CE004',
    title: 'CE004 社區循環嘉年華',
    organization: '社區換物carousell | 多單位協辦',
    location: '屯門東邨',
    venue: '屯門東邨露天廣場',
    dateLabel: '2026年6月20日（六）',
    time: '09:00 至 17:00',
    monthBadge: '2026/06',
    registrationLabel: '6月10日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1504149926908-079175555ed7?w=800&q=80',
    description:
      '一日式社區嘉年華，設換物攤、修繕示範、藝術重組及數碼義診服務。歡迎全家參與，參觀亦可獲歡迎積分。',
    spotsLeft: 8,
    eligibility: '開放予屯門區居民及街坊',
  },
  {
    id: 'ex-5',
    code: 'CE005',
    title: 'CE005 長者數碼義診日',
    organization: '社區數碼共融計劃 | 青年義工隊',
    location: '屯門',
    venue: '屯門東邨活動室',
    dateLabel: '2026年6月11日（四）',
    time: '14:00 至 16:00',
    monthBadge: '2026/06',
    registrationLabel: '6月1日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    description:
      '協助長者設定手機、連接 Wi-Fi、使用通訊軟體。全程義工一對一陪同，無需自備 App 帳戶。',
    spotsLeft: 15,
    eligibility: '長者優先，歡迎家人陪同',
  },
  {
    id: 'ex-6',
    code: 'CE006',
    title: 'CE006 舊物藝術重組坊',
    organization: '社區藝術 | 承辦機構',
    location: '屯門',
    venue: '屯門東邨會堂',
    dateLabel: '2026年6月15日（一）',
    time: '10:00 至 12:30',
    monthBadge: '2026/06',
    registrationLabel: '6月5日起接受報名',
    imageUrl:
      'https://images.unsplash.com/photo-1452860606245-08befbf0d145?w=800&q=80',
    description:
      '在社區導師帶領下，將殘缺舊物重新組合成裝飾或實用品。材料由中心提供，完成作品可留作社區展示或帶回家。',
    spotsLeft: 20,
    eligibility: '無需藝術背景，歡迎長者參加',
  },
]

export function getExploreActivityById(id: string): ExploreActivity | undefined {
  return mockExploreActivities.find((activity) => activity.id === id)
}
