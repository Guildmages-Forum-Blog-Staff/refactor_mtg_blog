export interface CategoryNode {
  name: string;
  children?: string[];
}

export const CATEGORY_TREE: CategoryNode[] = [
  { name: 'Beginner', children: ['Level One'] },
  { name: 'Construct', children: ['Standard', 'Modern', 'Pioneer', 'Legacy'] },
  { name: 'Deep Dive' },
  {
    name: 'Limited',
    children: ['BLB', 'Cube', 'DFT', 'DSK', 'ECL', 'EOE', 'FDN', 'FIN', 'LCI', 'MKM', 'OTJ', 'SOS', 'SPM', 'TDM', 'TLA', 'WOE'],
  },
  { name: 'MTG Rules' },
  { name: 'Others', children: ['Card Lore', 'Interview', 'MTG Anecdote', 'Playing Skills'] },
  { name: 'Tournaments', children: ['MIT', 'Overseas'] },
];
