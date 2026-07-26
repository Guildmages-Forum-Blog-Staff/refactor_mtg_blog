# About Us: Current Members / Hall of Fame Split Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the About Us page roster into two JSON-driven sections — Current Members and Hall of Fame — replacing the hardcoded `authorOrder` array.

**Architecture:** A new plain-JSON data file (`src/data/team.json`) holds two ordered ID arrays. `about.astro` resolves each array against the existing `authors` content collection (same lookup logic it already has, now run twice) and renders two headed sections. The repeated per-author card markup is extracted into a new `TeamMemberCard.astro` component so it isn't duplicated between sections.

**Tech Stack:** Astro 6 (`.astro` components, content collections), TypeScript, Tailwind CSS.

## Global Constraints

- `team.json` is plain JSON — no Astro content-collection schema, no zod validation (spec: "Out of scope").
- No new automated tests — no other `.astro` page has test coverage; verification is `npm run check` (Astro type-check) plus a manual `npm run dev` visual check (spec: "Out of scope").
- No changes to `src/content/authors/*.yml` or the `authors` collection schema in `src/content/config.ts`.
- `gmf-staff`, `charlieyen1114`, `SamuelChang` stay excluded from both lists.
- Missing/unknown IDs in `team.json` are silently filtered out (same as current `.filter((a) => a.data !== undefined)` behavior).
- Section headings: 現任成員 (Current Members), 榮譽殿堂 (Hall of Fame).

---

### Task 1: Add `team.json` data file

**Files:**
- Create: `src/data/team.json`

**Interfaces:**
- Produces: a JSON module with shape `{ currentMembers: string[]; hallOfFame: string[] }`, importable via `import team from '../data/team.json'` (Astro/Vite supports default JSON imports out of the box — no config needed).

- [ ] **Step 1: Create the data directory and file**

```bash
mkdir -p src/data
```

Write `src/data/team.json`:

```json
{
  "currentMembers": [
    "MiohitoKiri5474",
    "cephille",
    "JruMTG",
    "JerobaMTG",
    "Enki",
    "T1BloodMoon",
    "Kappa",
    "ClarkShih",
    "jeffchen",
    "bruce1235566",
    "GY_Player",
    "Egavas",
    "layukipedia",
    "faintmama",
    "ZHAN",
    "mm",
    "dalance",
    "XSBeeble",
    "Chennel",
    "Terryrr"
  ],
  "hallOfFame": [
    "david-yeh",
    "yu-chen",
    "zhi-mao",
    "JerryYang",
    "classiccool",
    "MarkWen",
    "Patrick",
    "Weihow",
    "CIXS",
    "Chiyou",
    "sertyple",
    "Requiem_Black",
    "Ace",
    "ZengZengZeng",
    "Suken",
    "manamagic"
  ]
}
```

- [ ] **Step 2: Verify the file is valid JSON with the expected counts**

Run:

```bash
node -e "const t = require('./src/data/team.json'); console.log(t.currentMembers.length, t.hallOfFame.length, new Set([...t.currentMembers, ...t.hallOfFame]).size)"
```

Expected output: `20 16 36` (20 current members, 16 hall-of-fame, 36 unique IDs total, no overlap/duplicates).

- [ ] **Step 3: Verify every ID resolves to an existing author file**

Run:

```bash
node -e "
const t = require('./src/data/team.json');
const fs = require('fs');
const files = new Set(fs.readdirSync('src/content/authors').map(f => f.replace(/\.ya?ml$/, '')));
const missing = [...t.currentMembers, ...t.hallOfFame].filter(id => !files.has(id));
console.log('missing:', missing);
"
```

Expected output: `missing: []`

- [ ] **Step 4: Commit**

```bash
git add src/data/team.json
git commit -m "feat: add team.json roster data for about-us split"
```

---

### Task 2: Extract `TeamMemberCard` component and rewire `about.astro`

**Files:**
- Create: `src/components/TeamMemberCard.astro`
- Modify: `src/pages/about.astro` (full replacement of the script frontmatter and body below the intro prose — currently `src/pages/about.astro:1-103`)

**Interfaces:**
- Consumes: `team.json` shape from Task 1 (`{ currentMembers: string[]; hallOfFame: string[] }`).
- Produces: `TeamMemberCard` Astro component with `Props = { id: string; data: { name: string; avatar: string; url?: string; intro: string[] }; base: string }`, rendered as `<TeamMemberCard id={id} data={data} base={base} />`.

- [ ] **Step 1: Create `src/components/TeamMemberCard.astro`**

```astro
---
interface Props {
  id: string;
  data: {
    name: string;
    avatar: string;
    url?: string;
    intro: string[];
  };
  base: string;
}

const { id, data, base } = Astro.props;
const href = data.url || `${base}/authors/${id}`;
const avatarSrc = data.avatar.startsWith('/') ? `${base}${data.avatar}` : data.avatar;
---

<div class="flex items-start gap-6">
  <a href={href} class="shrink-0">
    <img
      src={avatarSrc}
      alt={data.name}
      class="h-40 w-40 rounded-full border-2 border-gray-200 object-cover dark:border-gray-700"
    />
  </a>
  <div class="flex min-w-0 flex-col gap-1 pt-1">
    <a
      href={href}
      class="hover:text-primary text-3xl font-bold text-gray-900 transition-colors dark:text-gray-100"
    >
      {data.name}
    </a>
    {
      data.intro.map((line: string) => (
        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400" set:html={line} />
      ))
    }
  </div>
</div>
```

- [ ] **Step 2: Replace `src/pages/about.astro` in full**

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import Navbar from '../components/Navbar.astro';
import TeamMemberCard from '../components/TeamMemberCard.astro';
import team from '../data/team.json';

const allAuthors = await getCollection('authors');
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const authorMap = new Map(allAuthors.map((a) => [a.id.replace(/\.ya?ml$/, ''), a.data]));

function resolveAuthors(ids: string[]) {
  return ids
    .map((id) => ({ id, data: authorMap.get(id) }))
    .filter((a) => a.data !== undefined) as {
    id: string;
    data: NonNullable<ReturnType<typeof authorMap.get>>;
  }[];
}

const currentMembers = resolveAuthors(team.currentMembers);
const hallOfFame = resolveAuthors(team.hallOfFame);
---

<BaseLayout title="About Us">
  <Navbar />
  <main class="mx-auto max-w-4xl px-4 py-10">
    <div class="dark:bg-dark-bg/80 rounded-2xl bg-white/80 p-6 backdrop-blur-sm">
      <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">About Us</h1>

      <div class="prose dark:prose-invert mb-12 max-w-none">
        <p>
          <strong>Guildmages' Forum 魔風集會所</strong
          >，這其實是一張在2018年烽會拉尼卡系列中的一張地牌，中文翻譯為「公會法師集會地」。有玩MTG的人都知道拉尼卡時空最為人所知的就是十會盟，它是由十組雙色公會所建構成的時空共管聯盟；而MTG中白藍黑紅綠五色則是一切牌張的根本，透過不同的組合與搭配而有不同的變化。而這就好比每一位玩家都是代表著自己的公會追尋個人目標而來，而我們可以聚集在此地彼此相互交流，來創造出更多有趣的遊戲體驗與MTG的社群連結！
        </p>
        <p>下面是我們常駐工作人員和文章作者的介紹：</p>
      </div>

      <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">現任成員</h2>
      <div class="mb-12 flex flex-col gap-10">
        {currentMembers.map(({ id, data }) => <TeamMemberCard id={id} data={data} base={base} />)}
      </div>

      <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">榮譽殿堂</h2>
      <div class="flex flex-col gap-10">
        {hallOfFame.map(({ id, data }) => <TeamMemberCard id={id} data={data} base={base} />)}
      </div>
    </div>
  </main>
</BaseLayout>
```

- [ ] **Step 3: Type-check**

Run: `npm run check`
Expected: no errors (0 errors, 0 warnings related to `about.astro` or `TeamMemberCard.astro`).

- [ ] **Step 4: Visual check**

Run: `npm run dev`, open `http://localhost:4321/about` (adjust path/base as configured).
Expected: page shows intro prose, then "現任成員" heading with 20 cards, then "榮譽殿堂" heading with 16 cards, all avatars/names/intros rendering as before (same card styling, just now in two labeled groups).

- [ ] **Step 5: Commit**

```bash
git add src/components/TeamMemberCard.astro src/pages/about.astro
git commit -m "feat: split about-us page into current members and hall of fame sections"
```
