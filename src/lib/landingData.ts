export const landingNavLinks = [
  { href: '#features', label: '核心功能' },
  { href: '#app-preview', label: 'App 預覽' },
  { href: '#marketplace', label: '社區物品篩選' },
  { href: '#join', label: '加入我們' },
  { href: '#payment-session', label: '模擬付款' },
] as const

export const coreFeatures = [
  {
    emoji: '🔄',
    title: '主題換物日',
    description:
      '每月定期舉辦換物市集，設於屋邨社區會堂，無障礙動線，長者無需遠行即可參與。',
  },
  {
    emoji: '📖',
    title: '數碼義診',
    description:
      '協助長者或對資訊科技感到陌生的市民，解決日常使用智慧型手機、平板電腦或相關電子設備時遇到的困難',
  },
  {
    emoji: '🔧',
    title: '維修技能工作坊與藝術重組',
    description:
      '聯繫社區維修達人傳授舊物翻新技巧，修復殘缺舊物並以藝術美學重新組合，發掘閒置資源的隱藏價值。',
  },
] as const

export const ideaPillars = [
  {
    icon: 'gem' as const,
    title: '發掘囤積物的價值',
    description: '每件舊物都承載回憶與故事，透過修繕與升級改造，讓「總有一天會用到」變成「現在就能造福他人」。',
  },
  {
    icon: 'users' as const,
    title: '與人交流',
    description: '鼓勵長者帶著物品走入人群，透過交換與分享結識新街坊，生活重心從「囤積物品」自然轉移至「人際連結」。',
  },
  {
    icon: 'palette' as const,
    title: '藝術美學',
    description: '引入社區公共藝術與美學視角，填補心理上的空虛，以創意方式改變囤積物品的生活習慣。',
  },
] as const

export const comparisonRows = [
  {
    name: '社區換物carousell',
    audience: '長者為主，輻射至同區街坊',
    mode: '主題換物日、數碼義診、維修技能工作坊',
    focus: '解決長者囤積與出行不便，將舊物轉化為社區公共藝術',
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
    title: '線下為主、數碼為輔',
    description: '義工代登記為預設，電話／上門提示優先於 App 通知。',
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
    title: '先修後換',
    description: '尊重惜物，優先維修延長使用，交換作為後續安排。',
  },
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
  },
  {
    id: 'm3',
    title: '藍色棉質外套',
    category: '衣物',
    condition: '良好',
    story: '只穿過幾次，尺碼不合但質地很好。',
    owner: '王姨',
    emoji: '🧥',
  },
  {
    id: 'm4',
    title: '舊式電風扇',
    category: '家電',
    condition: '可升級改造',
    story: '風力仍勁，但外殼有點舊，適合藝術重組。',
    owner: '張叔',
    emoji: '🌀',
  },
  {
    id: 'm5',
    title: '花鳥圖案碟',
    category: '餐具',
    condition: '良好',
    story: '一套六隻，剩三隻，圖案好靚。',
    owner: '黃婆婆',
    emoji: '🍽️',
  },
  {
    id: 'm6',
    title: '舊報紙與雜誌',
    category: '書報',
    condition: '良好',
    story: '收藏了八十年代嘅報紙，想搵同年代嘅街坊一齊睇。',
    owner: '何伯',
    emoji: '📰',
  },
  {
    id: 'm7',
    title: '格仔羊毛冷衫',
    category: '衣物',
    condition: '良好',
    story: '女兒結婚買嚟出席，之後少著，一直掛喺衣櫃。',
    owner: '周叔',
    emoji: '👔',
  },
  {
    id: 'm8',
    title: '木製象棋',
    category: '玩具',
    condition: '良好',
    story: '祖父留低嘅棋，棋子齊全，想搵同屋邨棋友一齊玩。',
    owner: '林伯',
    emoji: '♟️',
  },
  {
    id: 'm9',
    title: '紫砂茶壺',
    category: '餐具',
    condition: '待修繕',
    story: '壺嘴有小裂紋，社區師傅話可以修復再用。',
    owner: '吳姨',
    emoji: '🫖',
  },
  {
    id: 'm10',
    title: '老香港明信片冊',
    category: '書報',
    condition: '良好',
    story: '年青時旅行收集，想同街坊分享舊日風景回憶。',
    owner: '鄭婆婆',
    emoji: '📮',
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
    title: '舊物藝術重組工作坊',
    price: 0,
    description: '材料由社區提供',
    emoji: '🎨',
  },
  {
    id: 'w2',
    title: '基礎家居修繕體驗',
    price: 50,
    description: '象徵性材料費，師傅現場指導',
    emoji: '🔩',
  },
  {
    id: 'w3',
    title: '舊物故事分享會',
    price: 0,
    description: '附茶點',
    emoji: '☕',
  },
]

export const initialComments = [
  {
    id: 'c1',
    name: '陳美玲',
    message: '上次帶咗兩件舊衫去換物日，識咗隔離座嘅李婆婆，而家成日一齊飲茶！',
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
