// Per-category <meta description> and intro text for /categories/<cat>/.
// Set names follow the ones used in this site's own post titles.
import type { Lang } from '../i18n';

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

/** Set code → official English set name. */
const SET_NAMES_EN: Record<string, string> = {
  BLB: 'Bloomburrow',
  DFT: 'Aetherdrift',
  DSK: 'Duskmourn: House of Horror',
  ECL: 'Lorwyn Eclipsed',
  EOE: 'Edge of Eternities',
  FDN: 'Foundations',
  FIN: 'Final Fantasy',
  FRA: 'Reality Fracture',
  HOB: 'The Hobbit',
  LCI: 'The Lost Caverns of Ixalan',
  MKM: 'Murders at Karlov Manor',
  MSH: 'Marvel Super Heroes',
  OTJ: 'Outlaws of Thunder Junction',
  SOS: 'Secrets of Strixhaven',
  SPM: "Marvel's Spider-Man",
  TDM: 'Tarkir: Dragonstorm',
  TLA: 'Avatar: The Last Airbender',
  TMT: 'Teenage Mutant Ninja Turtles',
  TRK: 'Star Trek',
  WOE: 'Wilds of Eldraine',
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

const DESCRIPTIONS_EN: Record<string, string> = {
  Limited:
    'Magic: The Gathering Limited (Draft and Sealed) guides: colour-by-colour card reviews, mechanics breakdowns and draft/sealed notes for every new set.',
  Construct:
    'Magic: The Gathering constructed articles: deck techs, deckbuilding ideas, metagame analysis and tournament notes for Standard, Pioneer, Modern and Legacy.',
  Standard:
    'Magic: The Gathering Standard guides: top decks, deckbuilding ideas, sideboard guides and metagame analysis for every set.',
  Pioneer:
    'Magic: The Gathering Pioneer guides: deck techs, deckbuilding ideas, metagame analysis and tournament decklists.',
  Modern:
    'Magic: The Gathering Modern guides: deck techs, deckbuilding ideas, metagame analysis and tournament decklists.',
  Legacy: 'Magic: The Gathering Legacy decks and gameplay articles.',
  Beginner:
    'Magic: The Gathering (MTG) beginner guides: getting started, deckbuilding basics and how to improve at Limited.',
  'Level One':
    "Reid Duke's Level One series: foundational lessons on aggro, midrange, control and other archetypes, plus a glossary of terms.",
  'MTG Rules':
    'Magic: The Gathering rules explained: card interactions, ability rulings and common rules questions, with clear examples.',
  Tournaments:
    "Magic: The Gathering tournament articles: event records, recaps and reports from Taiwan's MIT series and major events abroad.",
  MIT: "MIT, Taiwan's Magic: The Gathering tournament series: past event records, recaps and champion interviews.",
  Overseas:
    'Taiwanese players at Magic: The Gathering events abroad: MagicCon, the World Championship and other major tournaments.',
  Interview:
    'Magic: The Gathering interviews with Taiwanese players, World Championship competitors and community figures.',
  Others:
    'Magic: The Gathering articles beyond rules and competition: interviews, card stories, player essays and casual play.',
  'Card Lore':
    'Magic: The Gathering cards and lore: yearly retrospectives, the evolution of planeswalkers and changes in card design.',
  'MTG Anecdote':
    'Magic: The Gathering musings: thoughts on product and rules changes, community event records and player essays.',
  'Deep Dive':
    'Magic: The Gathering deep dives: deck strategy breakdowns and quantitative looks at game mechanics.',
  'Playing Skills': 'Magic: The Gathering gameplay tips: the small details that decide games.',
  Casual: 'Magic: The Gathering casual formats and fun decks.',
  Cube: 'Magic: The Gathering Cube: what a Cube is, and how to design and maintain your own.',
  'GMF Staff': "Guildmages' Forum announcements and anniversary reports.",
};

/** Heading text: set codes get their name, e.g. "暮悲邸（DSK）" / "Duskmourn: House of Horror (DSK)". */
export function categoryLabel(cat: string, lang: Lang = 'zh-tw'): string {
  if (lang === 'en') {
    const name = SET_NAMES_EN[cat];
    return name ? `${name} (${cat})` : cat;
  }
  const name = SET_NAMES[cat];
  return name ? `${name}（${cat}）` : cat;
}

export function categoryDescription(cat: string, lang: Lang = 'zh-tw'): string {
  if (lang === 'en') {
    if (DESCRIPTIONS_EN[cat]) return DESCRIPTIONS_EN[cat];
    const name = SET_NAMES_EN[cat];
    if (name)
      return `${name} (${cat}) articles: Limited colour-by-colour card reviews, mechanics breakdowns and draft/sealed notes.`;
    return `Magic: The Gathering articles in the "${cat}" category on Guildmages' Forum.`;
  }
  if (DESCRIPTIONS[cat]) return DESCRIPTIONS[cat];
  const name = SET_NAMES[cat];
  if (name) return `${name}（${cat}）系列文章：限制賽分色卡牌介紹、機制解析與輪抽／現開心得。`;
  return `Guildmages' Forum 魔風集會所「${cat}」分類下的魔法風雲會文章。`;
}
