import type { Lang } from '.';

const zh = {
  siteTitle: "Guildmages' Forum 魔風集會所",
  siteDescription:
    "Guildmages' Forum 魔風集會所是台灣的魔法風雲會（MTG）繁體中文部落格，提供標準、先驅、近代與現開賽制的套牌攻略、輪抽分析、規則解說、新手入門與選手專訪。",
  siteSubtitle: '魔風集會所',

  navHome: 'Home',
  navCategories: 'Categories',
  navAbout: 'About Us',
  navCalendar: 'Calendar',
  navContact: 'Contact Us',
  navSponsor: 'Sponsor Us',
  navFriends: 'Friends',
  search: '搜尋',
  menu: '選單',
  closeMenu: '關閉選單',
  searchPlaceholder: '搜尋文章…',
  searchHintStart: '輸入關鍵字開始搜尋',
  searchHintNoIndex: '請先執行 npm run build 以建立搜尋索引',
  searchNoResults: '找不到相關文章',
  /** Label on the language toggle: names the language it switches TO. */
  langSwitch: 'EN',
  langSwitchAria: 'Switch to English',

  footerCopyright:
    '本網站所提供之魔法風雲會 (Magic the Gathering) 文字和圖形資訊版權均為威世智 (Wizards of the Coast) 所有。',

  homeTitle: '魔法風雲會 MTG 中文攻略與賽事部落格',
  homeHeroLines: [
    '各路旅法師的集散地',
    '讓玩家額外有個 +1/+1 指示物',
    '釋放各路玩家的限制',
    '盡情享受遊戲',
    '不瘋魔不成活',
  ],
  noPosts: '目前還沒有文章。',
  prev: '← Prev',
  next: 'Next →',
  page: (n: number) => `Page ${n}`,
  postCount: (n: number) => `${n} 篇文章`,

  relatedPosts: '相關文章',
  views: '次閱讀',

  categoriesTitle: 'Categories',
  categoriesDescription:
    "Guildmages' Forum 魔風集會所全部文章分類：構築（標準、先驅、近代）、限制賽各系列、新手入門、規則解說、賽事與人物專訪。",
  allCategories: '← All Categories',

  aboutTitle: 'About Us',
  aboutIntro: [
    "<strong>Guildmages' Forum 魔風集會所</strong>，這其實是一張在2018年烽會拉尼卡系列中的一張地牌，中文翻譯為「公會法師集會地」。有玩MTG的人都知道拉尼卡時空最為人所知的就是十會盟，它是由十組雙色公會所建構成的時空共管聯盟；而MTG中白藍黑紅綠五色則是一切牌張的根本，透過不同的組合與搭配而有不同的變化。而這就好比每一位玩家都是代表著自己的公會追尋個人目標而來，而我們可以聚集在此地彼此相互交流，來創造出更多有趣的遊戲體驗與MTG的社群連結！",
    '下面是我們常駐工作人員和文章作者的介紹：',
  ],
  currentMembers: '現任成員',
  hallOfFame: '榮譽殿堂',
  honorary: '榮譽',

  contactTitle: 'Contact Us / 聯絡我們',
  contactHeading: '聯絡方式',
  facebookPage: 'Facebook 粉絲專頁',
  reportForm: '問題回報表單',
  submissionHeading: '文章投稿',
  submissionBody:
    '歡迎所有熱愛魔法風雲會的玩家投稿！無論是套牌分享、賽事心得、卡牌分析或是對局技巧，只要是與 MTG 相關的優質內容，我們都非常歡迎。',
  submissionSendTo: '投稿請寄至：',
  submissionSubject: '主旨格式：',
  submissionSubjectExample: '文章投稿_文章標題',
  disclaimerHeading: '免責聲明',
  disclaimer: [
    '本站為非官方同好內容，依據 Wizards of the Coast 粉絲內容政策運營。',
    'MTG 卡牌圖像及翻譯版權歸 Wizards of the Coast 所有。',
    '本站由社群愛好者自發創作，與官方無關。',
  ],

  calendarTitle: '活動日曆',
  calendarSource: '資料來自 Google 日曆，每次部署自動同步。',
  calendarSynced: '上次同步：',
  calendarEmpty: '目前無活動資料。',
  calendarUpcoming: '即將到來',
  calendarPast: '過去活動',
  calendarUntitled: '(無標題)',
  calendarClose: '關閉',
  calendarViewLink: '查看活動連結 →',
  calendarSpanDays: (n: number) => `共 ${n} 天`,
};

type Dict = typeof zh;

const en: Dict = {
  siteTitle: "Guildmages' Forum",
  siteDescription:
    "Guildmages' Forum is a Taiwanese Magic: The Gathering blog with deck guides, draft analysis, rules explanations, beginner guides and player interviews for Standard, Pioneer, Modern and Limited.",
  siteSubtitle: 'A Magic: The Gathering community from Taiwan',

  navHome: 'Home',
  navCategories: 'Categories',
  navAbout: 'About Us',
  navCalendar: 'Calendar',
  navContact: 'Contact Us',
  navSponsor: 'Sponsor Us',
  navFriends: 'Friends',
  search: 'Search',
  menu: 'Menu',
  closeMenu: 'Close menu',
  searchPlaceholder: 'Search articles…',
  searchHintStart: 'Type a keyword to search',
  searchHintNoIndex: 'Run npm run build first to create the search index',
  searchNoResults: 'No matching articles',
  langSwitch: '中文',
  langSwitchAria: '切換至中文',

  footerCopyright:
    'All Magic: The Gathering text and imagery on this site are copyright Wizards of the Coast.',

  homeTitle: 'Magic: The Gathering Guides and Tournament Blog',
  homeHeroLines: [
    'A gathering place for planeswalkers',
    'Giving every player an extra +1/+1 counter',
    'Breaking the limits of every player',
    'Enjoy the game to the fullest',
    'No madness, no Magic',
  ],
  noPosts: 'No English articles yet.',
  prev: '← Prev',
  next: 'Next →',
  page: (n: number) => `Page ${n}`,
  postCount: (n: number) => `${n} ${n === 1 ? 'article' : 'articles'}`,

  relatedPosts: 'Related Articles',
  views: 'views',

  categoriesTitle: 'Categories',
  categoriesDescription:
    "All article categories on Guildmages' Forum: constructed (Standard, Pioneer, Modern), Limited by set, beginner guides, rules, tournaments and interviews.",
  allCategories: '← All Categories',

  aboutTitle: 'About Us',
  aboutIntro: [
    "<strong>Guildmages' Forum</strong> is actually a land card from the 2018 set Guilds of Ravnica. Anyone who plays MTG knows that Ravnica is best known for its Guildpact: a plane governed jointly by ten two-colour guilds. In MTG, the five colours white, blue, black, red and green are the root of every card, and combining them in different ways creates endless variety. Just like that, every player arrives representing their own guild in pursuit of their own goals, and here we can gather, share with one another, and create more fun gameplay experiences and connections within the MTG community!",
    'Below are our regular staff and authors:',
  ],
  currentMembers: 'Current Members',
  hallOfFame: 'Hall of Fame',
  honorary: 'Honorary',

  contactTitle: 'Contact Us',
  contactHeading: 'Get in Touch',
  facebookPage: 'Facebook Page',
  reportForm: 'Issue Report Form',
  submissionHeading: 'Article Submissions',
  submissionBody:
    'We welcome submissions from every player who loves Magic: The Gathering! Deck techs, tournament reports, card analysis, gameplay tips — any quality MTG content is very welcome.',
  submissionSendTo: 'Send submissions to:',
  submissionSubject: 'Subject format:',
  submissionSubjectExample: 'Article Submission_Article Title',
  disclaimerHeading: 'Disclaimer',
  disclaimer: [
    'This is unofficial fan content operated under the Wizards of the Coast Fan Content Policy.',
    'MTG card images and translations are copyright Wizards of the Coast.',
    'This site is created voluntarily by community enthusiasts and is not affiliated with Wizards of the Coast.',
  ],

  calendarTitle: 'Event Calendar',
  calendarSource: 'Data comes from Google Calendar and syncs on every deploy.',
  calendarSynced: 'Last synced: ',
  calendarEmpty: 'No events at the moment.',
  calendarUpcoming: 'Upcoming',
  calendarPast: 'Past Events',
  calendarUntitled: '(Untitled)',
  calendarClose: 'Close',
  calendarViewLink: 'View event link →',
  calendarSpanDays: (n: number) => `${n} days`,
};

const UI: Record<Lang, Dict> = { 'zh-tw': zh, en };

/** UI strings for `lang`. Both dictionaries share one shape, so a missing key is a type error. */
export function useTranslations(lang: Lang): Dict {
  return UI[lang];
}
