// Per-category <meta description> and intro text for /categories/<cat>/.
// Set names follow the ones used in this site's own post titles.

/** Set code → set name as written on this site. */
export const SET_NAMES: Record<string, string> = {
  BLB: '斑隆洛',
  DFT: '乙太飄移',
  DSK: '暮悲邸',
  ECL: '洛溫：闇影籠罩',
  EOE: '虛空邊域',
  FDN: '基石構築',
  FIN: '最終幻想',
  FRA: '現實碎片',
  HOB: '哈比人',
  LCI: '依夏蘭迷窟',
  MKM: '卡洛夫莊園謀殺案',
  MSH: '漫威超級英雄',
  OTJ: '光雷驛鏢客',
  SOS: '斯翠海文的祕密',
  SPM: '漫威蜘蛛人',
  TDM: '韃契：龍襲風暴',
  TLA: '降世神通：最後的氣宗',
  TMT: '忍者龜',
  TRK: '星艦迷航',
  WOE: '艾卓荒野',
};

const DESCRIPTIONS: Record<string, string> = {
  Limited:
    '魔法風雲會限制賽（輪抽 Draft、現開 Sealed）攻略：每個新系列的分色卡牌介紹、機制解析與輪抽／現開心得。',
  Construct:
    '魔法風雲會構築賽制文章總覽：標準、先驅、近代與薪傳的套牌介紹、構築思路、環境分析與賽事心得。',
  Standard:
    '魔法風雲會標準賽制（Standard）攻略：主流套牌介紹、構築思路、備牌指南與每個系列的環境分析。',
  Pioneer: '魔法風雲會先驅賽制（Pioneer）攻略：套牌介紹、構築思路、環境分析與賽事牌表整理。',
  Modern: '魔法風雲會近代賽制（Modern）攻略：套牌介紹、構築思路、環境分析與賽事牌表整理。',
  Legacy: '魔法風雲會薪傳賽制（Legacy）相關的套牌與玩法文章。',
  Beginner: '魔法風雲會（MTG）新手入門：入坑指南、套牌構築基礎、限制賽進步方法，給剛開始玩的玩家。',
  'Level One':
    'Reid Duke「等級一」（Level One）系列中文翻譯：快攻、中速、控制等套牌原型的基礎課程與術語表。',
  'MTG Rules': '魔法風雲會規則解說：卡牌互動、異能判定與常見規則疑問，用實例講清楚。',
  Tournaments: '魔法風雲會賽事文章：台灣 MIT 系列與海外大賽的參賽紀錄、賽事回顧與賽報。',
  MIT: 'MIT 台灣魔法風雲會賽事系列：歷屆參賽紀錄、賽事回顧與冠軍專訪。',
  Overseas: '台灣玩家出國參加魔法風雲會賽事與活動的紀行：MagicCon、世界冠軍賽與海外大賽。',
  Interview: '魔法風雲會人物專訪：台灣玩家、世界賽選手與社群人物的訪談。',
  Others: '規則、競技之外的魔法風雲會文章：人物專訪、卡牌故事、玩家雜談與休閒玩法。',
  'Card Lore': '魔法風雲會卡牌與背景故事：年度回顧、旅法師演進史與卡牌設計的變遷。',
  'MTG Anecdote': '魔法風雲會雜談：產品與規則變動的心得、社群活動紀錄與玩家隨筆。',
  'Deep Dive': '魔法風雲會深度分析：套牌策略拆解與遊戲機制的量化探討。',
  'Playing Skills': '魔法風雲會實戰技巧：那些影響對局勝負的小細節。',
  Casual: '魔法風雲會休閒玩法與趣味套牌。',
  Cube: '魔法風雲會 Cube（方體）介紹：什麼是 Cube、如何設計與管理自己的 Cube。',
  'GMF Staff': "Guildmages' Forum 魔風集會所營運公告與週年報告。",
};

/** Heading text: set codes get their name, e.g. "暮悲邸（DSK）". */
export function categoryLabel(cat: string): string {
  const name = SET_NAMES[cat];
  return name ? `${name}（${cat}）` : cat;
}

export function categoryDescription(cat: string): string {
  if (DESCRIPTIONS[cat]) return DESCRIPTIONS[cat];
  const name = SET_NAMES[cat];
  if (name) return `${name}（${cat}）系列文章：限制賽分色卡牌介紹、機制解析與輪抽／現開心得。`;
  return `Guildmages' Forum 魔風集會所「${cat}」分類下的魔法風雲會文章。`;
}
