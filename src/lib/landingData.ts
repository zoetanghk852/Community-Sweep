export const landingNavLinks = [
  { href: '#features', label: '核心功能' },
  { href: '#app-preview', label: 'App 預覽' },
  { href: '#marketplace', label: '線上換物' },
  { href: '#join', label: '加入我們' },
  { href: '#payment-session', label: '模擬付款' },
] as const

export const coreFeatures = [
  {
    icon: 'repeat' as const,
    title: '換物市集',
    description:
      '每月定期舉辦，同場設換物攤、維修攤、數碼義診攤；設於屋邨社區會堂，無障礙動線，長者無需遠行即可參與。',
  },
  {
    icon: 'book' as const,
    title: '數碼義診攤',
    description:
      '協助長者或對資訊科技感到陌生的街坊，解決日常使用智慧型手機、平板電腦或相關電子設備時遇到的困難。',
  },
  {
    icon: 'wrench' as const,
    title: '維修攤',
    description:
      '社區師傅或義工即場修繕長者帶來的舊物；當場修不好可留件追蹤，待下次換物市集完成修繕。',
  },
] as const

export const ideaPillars = [
  {
    icon: 'gem' as const,
    title: '賦予舊物第二次生命',
    description: '透過「舊物變寶」的過程，讓長者重新審視物品的價值——將看似廢棄的資源，轉化為具備實用性或紀念意義的資源',
  },
  {
    icon: 'users' as const,
    title: '與人交流',
    description: '鼓勵長者帶著物品走入人群，透過交換與分享結識新街坊，生活重心從「囤積物品」自然轉移至「人際連結」。',
  },
  {
    icon: 'palette' as const,
    title: '換物市集互動',
    description: '透過每月換物市集的交換與修繕體驗，讓長者在社區場合中逐步處理閒置物品，將整理過程轉化為可預期的社區儀式。',
  },
] as const

export const comparisonRows = [
  {
    name: '社區換物carousell',
    audience: '以長者優先，並照顧同區廣大街坊',
    mode: '每月換物市集（換物攤、維修攤、數碼義診攤）、線上換物',
    focus: '結合線下社交與舊物翻新',
    highlight: true,
  },
  {
    name: '屯門拍檔・舊物漂流',
    audience: '一般地區街坊（屯門區）',
    mode: '舊物「漂流」（無條件分享與接收）',
    focus: '減少浪費，推廣純粹的資源共享與惜物文化',
    highlight: false,
  },
  {
    name: '「哈爾移動椅子」',
    audience: '地區街坊、隱世生活達人',
    mode: '收集並翻新特定舊物（椅子），記錄達人故事',
    focus: '以「一椅一達人」發掘社區人情味與工匠精神',
    highlight: false,
  },
  {
    name: '復修辦館',
    audience: '一般大眾、基層家庭',
    mode: '維修工作坊、義工上門維修服務',
    focus: '推動維修文化，實質支援基層的家居修繕需要',
    highlight: false,
  },
  {
    name: '家居維修學院',
    audience: '有意學習家居維修的大眾',
    mode: '提供系統化的水電及維修技能培訓課程',
    focus: '技能傳授，鼓勵大眾掌握手藝以助人自助',
    highlight: false,
  },
] as const

export const uxHighlights = [
  {
    title: '長者友善設計',
    description: '大字體、高對比、大按鈕，符合長者視力與操作需要。',
  },
  {
    title: '線上換物、現場交收',
    description: '可先於 App 上架或預約物品；義工審核定分，實物於換物市集現場交收。',
  },
  {
    title: '低壓力漸進釋出',
    description: '單次 1～3 件即可參與，不設「清完才能參加」門檻。',
  },
  {
    title: '修繕先行、交換為後',
    description: '尊重惜物心態，先修復再用，交換為後續選項。',
  },
] as const

export const appPreviewHighlights = [
  {
    title: '線下為主、數碼為輔',
    description: '義工代登記為預設',
  },
] as const

export interface MarketplaceItem {
  id: string
  title: string
  category: '衣物' | '玩具' | '餐具' | '書報' | '家電' | '其他'
  condition: '良好' | '待修繕' | '可升級改造'
  story: string
  owner: string
  emoji: string
  points: number
  status: '可預約' | '已預約'
}

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'm2',
    title: '孫仔舊玩具車',
    category: '玩具',
    condition: '良好',
    story: '孫仔長大了，想送給鄰家小朋友繼續玩。',
    owner: '李婆婆',
    emoji: '🚗',
    points: 3,
    status: '可預約',
  },
  {
    id: 'm3',
    title: '藍色棉質外套',
    category: '衣物',
    condition: '良好',
    story: '只穿過幾次，尺碼不合但質地很好。',
    owner: '王姨',
    emoji: '🧥',
    points: 2,
    status: '可預約',
  },
  {
    id: 'm4',
    title: '舊式電風扇',
    category: '家電',
    condition: '待修繕',
    story: '風力仍勁，外殼有啲舊；可帶去換物市集維修攤檢查。',
    owner: '張叔',
    emoji: '🌀',
    points: 4,
    status: '已預約',
  },
  {
    id: 'm5',
    title: '花鳥圖案碟',
    category: '餐具',
    condition: '良好',
    story: '一套六隻，剩三隻，圖案好靚。',
    owner: '黃婆婆',
    emoji: '🍽️',
    points: 2,
    status: '可預約',
  },
  {
    id: 'm6',
    title: '舊報紙與雜誌',
    category: '書報',
    condition: '良好',
    story: '收藏了八十年代嘅報紙，想搵同年代嘅街坊一齊睇。',
    owner: '何伯',
    emoji: '📰',
    points: 1,
    status: '可預約',
  },
  {
    id: 'm7',
    title: '格仔羊毛冷衫',
    category: '衣物',
    condition: '良好',
    story: '女兒結婚買嚟出席，之後少著，一直掛喺衣櫃。',
    owner: '周叔',
    emoji: '👔',
    points: 2,
    status: '可預約',
  },
  {
    id: 'm8',
    title: '木製象棋',
    category: '玩具',
    condition: '良好',
    story: '祖父留低嘅棋，棋子齊全，想搵同屋邨棋友一齊玩。',
    owner: '林伯',
    emoji: '♟️',
    points: 3,
    status: '可預約',
  },
  {
    id: 'm9',
    title: '紫砂茶壺',
    category: '餐具',
    condition: '待修繕',
    story: '壺嘴有小裂紋，社區師傅話可以修復再用。',
    owner: '吳姨',
    emoji: '🫖',
    points: 3,
    status: '可預約',
  },
  {
    id: 'm10',
    title: '老香港明信片冊',
    category: '書報',
    condition: '良好',
    story: '年青時旅行收集，想同街坊分享舊日風景回憶。',
    owner: '鄭婆婆',
    emoji: '📮',
    points: 2,
    status: '可預約',
  },
]

export interface WorkshopOption {
  id: string
  title: string
  price: number
  description: string
  emoji: string
}

export const workshopOptions: WorkshopOption[] = [
  {
    id: 'w1',
    title: '基礎家居修繕體驗',
    price: 50,
    description: '換物市集維修攤象徵性材料費，師傅即場檢查',
    emoji: '🔩',
  },
  {
    id: 'w3',
    title: '舊物故事分享會',
    price: 0,
    description: '換物市集配套茶敘交流',
    emoji: '☕',
  },
]

export const initialComments = [
  {
    id: 'c1',
    name: '陳美玲',
    message: '上次帶咗兩件舊衫去換物市集，識咗隔離座嘅李婆婆，而家成日一齊飲茶！',
    time: '3 天前',
  },
  {
    id: 'c2',
    name: '社區義工阿 May',
    message: '幫長者上門代登記好方便，佢哋唔使驚用唔識電話。',
    time: '1 週前',
  },
  {
    id: 'c3',
    name: '修繕師傅明哥',
    message: '修好咗陳伯個花灑，佢話好似返到以前，好有成就感。',
    time: '2 週前',
  },
]

export const itemCategories = ['全部', '衣物', '玩具', '餐具', '書報', '家電', '其他'] as const
export const itemConditions = ['全部', '良好', '待修繕', '可升級改造'] as const
