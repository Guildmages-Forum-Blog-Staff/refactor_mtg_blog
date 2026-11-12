---

title: "Friendship Vaporizer: Modern Boros Ponza"
date: "2025-10-14 23:51:38"
authors:
  - "JruMTG"
categories:
  - "Construct"
  - "Modern"
cover: "https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/be90f3aa058c-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/31500b256453-cover.jpg"
excerpt: "The little boat of friendship blows up whenever it feels like it"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Modern-Boros-Ponza/).

## Introduction

The original motivation for building this deck was that, in the metagame at the time, Landless Belcher held the top usage share, and Eldrazi sat around 3rd to 4th place. That made me want to build a deck that plays a full four-of [White Orchid Phantom](https://scryfall.com/card/mh3/47/white-orchid-phantom) in the main deck. A more normal person would have built Esper Cloudshift, but I don't know whether my brain had been blown up by [Goblin Charbelcher](https://scryfall.com/card/ema/222/goblin-charbelcher) at the time, because I suddenly wanted to play a proper land destruction deck.

The base I chose is Boros land destruction, which has a long history. Actually, at around the same time, another [mono-white land destruction](https://76vezffd.blogspot.com/2025/09/mono-white-control.html) deck also rose on MTGO for a while. I originally figured this old Boros archetype probably couldn't survive in the new era, and that after trying it for a week or two I could switch to mono-white. But in actual testing it felt surprisingly not bad, ~~and now it feels like I should worry more about its popularity than its win rate~~.

![White Orchid Phantom](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/f78e1d7a907f.webp)



---

## Deck Introduction

### [Decklist link](https://www.mtggoldfish.com/deck/7392950#paper)
![DeckListPicture](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/9b1a609b4baf.webp)



### The Land Destruction Core

The land destruction in Modern that has no drawbacks and no range limitations all starts at three mana (for example: [Stone Rain](https://scryfall.com/card/chk/191/stone-rain), [Molten Rain](https://scryfall.com/card/mm3/103/molten-rain)). But at Modern's pace, if you don't start destroying lands until turn three, it's basically "let's go to the shooting range, and I'll be the target." You have to do something by turn two to provide even the minimum amount of disruption. In the red-green builds, you can rely on mana dorks to boost the efficiency of three-mana land destruction, but red-white builds have no such means, so the key instead lies in those two-mana land destruction spells that don't destroy quite so cleanly:

![2-mana LD](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/2b893232337b.webp)

- **[White Orchid Phantom](https://scryfall.com/card/mh3/47/white-orchid-phantom) (4) & [Cleansing Wildfire](https://scryfall.com/card/znr/137/cleansing-wildfire) (4) & [Boom // Bust](https://scryfall.com/card/tsr/156/boom-bust) (4):**

These three are the core of our two-mana land destruction, and without question all of them are four-ofs. But you can't just look at these three as individual cards. They only work fully in conjunction with their supporting lands:

![Indestructible lands](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/a5f04c33efdd.webp)

- **[Cascading Cataracts](https://scryfall.com/card/m3c/326/cascading-cataracts) (3) & [Rustvale Bridge](https://scryfall.com/card/eoc/175/rustvale-bridge) (4) & [Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair) (4):**

These lands are either indestructible, or bring a land back after being destroyed. That's right, they exist to be blown up by ourselves. Considering the deck's color requirements, [Cascading Cataracts](https://scryfall.com/card/m3c/326/cascading-cataracts) isn't a full four-of, and the other two colored-mana lands are without a doubt full four-ofs. If you're worried about color problems, you can also consider swapping some of the [Cascading Cataracts](https://scryfall.com/card/m3c/326/cascading-cataracts) for other [colored indestructible lands](https://scryfall.com/search?as=grid&order=name&q=oracle%3AIndestructible+%28type%3AArtifact+type%3ALand%29+%28game%3Apaper%29+set%3Amh2). However, after that change there's a risk of too many tapped lands clogging your tempo, so weigh it appropriately. Based on current test results, the present configuration is stable enough in a two-color build. In any case, I recommend not cutting the total number of indestructible lands any further. If the number of indestructible lands drops any more, you easily get stuck on your own main game plan.

As long as the ability of [White Orchid Phantom](https://scryfall.com/card/mh3/47/white-orchid-phantom) & [Cleansing Wildfire](https://scryfall.com/card/znr/137/cleansing-wildfire) successfully resolves on the target land, that land's controller can search their library for a basic land to put in. But this effect doesn't check whether the land was actually destroyed, so if you use it on an indestructible land, it becomes a Ramp spell. With [Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair), once it's blown up you can fetch a Plains (note it's not limited to basic lands, but any land with the Plains type), and the conclusion is also Ramp. One of the most common countermeasures against land destruction decks is to leave the fetch lands uncracked and only fetch when you're about to do something. The self-destruction Ramp ability is precisely the answer to that style of play: since the opponent slows down and does nothing, we proactively Ramp, so the tempo isn't completely dictated by the opponent. Going from 2 mana to 4 also lets us speed out [Karn, the Great Creator](https://scryfall.com/card/rvr/1/karn-the-great-creator).


{% folding blue :: Resolution flow when blowing up Flagstones of Trokair with Cleansing Wildfire %}

![](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/58506ffb8818.webp)
> ● **[Cleansing Wildfire](https://scryfall.com/card/znr/137/cleansing-wildfire):**
> Destroy target land. Its controller may search their library for a basic land card, put it onto the battlefield tapped, then shuffle.
> Draw a card.
> ● **[Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair):**
> When Flagstones of Trokair dies, you may search your library for a Plains card, put it onto the battlefield tapped, then shuffle.

Cleansing Wildfire's **destroy the land → search the library for a basic land and put it onto the battlefield → shuffle → draw a card** is one complete action. Until this whole sequence finishes during the spell's resolution, no abilities go on the stack and no player gets priority. So when you use Cleansing Wildfire on your own Flagstones of Trokair, you have to wait until Cleansing Wildfire's draw a card has been carried out before Flagstones of Trokair's ability to search for a Plains goes on the stack.

{% endfolding %}

Since the number of basic lands in Modern decks today usually doesn't exceed 4, and many decks only run 2 to 3, [White Orchid Phantom](https://scryfall.com/card/mh3/47/white-orchid-phantom) & [Cleansing Wildfire](https://scryfall.com/card/znr/137/cleansing-wildfire) don't have to wait long to blow the opponent out of lands to find. However, this doesn't change the problem that we can't reduce the opponent's total number of lands in the early game (Landless Belcher is the exception), so we still need a fair amount of removal to fill the early-game gap on the board.

The Boom on the left of [Boom // Bust](https://scryfall.com/card/tsr/156/boom-bust) is a true two-mana land destruction spell, but it destroys one land for each player. Paired with these lands we use to blow up our own, it becomes a simple two-mana one-sided land destruction. The Bust on the right is also an option that actually gets used. Although 6 mana is a bit heavy, since this deck easily plays into prison-like games, slowly grinding to 6 mana and casting one decisive blow is actually not rare.

> There is also a small trick with [Boom](https://scryfall.com/card/tsr/156/boom-bust). A spell is countered by the rules only if all of its targets are illegal. If one of Boom's two target lands leaves the battlefield before the spell resolves, the other land can still be destroyed. So if you target your own fetch land and respond by cracking it first, you can also achieve one-sided land destruction. However, this combination demands too much from your draw order, and the earliest it can destroy lands is turn three, so I don't design the deck on the premise of this combination.



![Other land destruction](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/a912613921be.webp)

- **[Stone Rain](https://scryfall.com/card/chk/191/stone-rain) (4):**

[Stone Rain](https://scryfall.com/card/chk/191/stone-rain) is, after all, the signature land destruction spell, so I respect it with a full four-of, and provided the turn-two tempo keeps up, a turn-three [Stone Rain](https://scryfall.com/card/chk/191/stone-rain) is still quite lethal. As for why the stronger [Molten Rain](https://scryfall.com/card/mm3/103/molten-rain) isn't included at all? The reason lies in the color requirements. The full four-of [Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair) with its supporting Plains, plus [Cascading Cataracts](https://scryfall.com/card/m3c/326/cascading-cataracts), take up far too many of the dual-land slots, and on turn three you really might not be able to put together two red mana, so I went with the safer [Stone Rain](https://scryfall.com/card/chk/191/stone-rain).

- **[Sundering Eruption // Volcanic Fissure](https://scryfall.com/card/mh3/248/sundering-eruption-volcanic-fissure) (1):**

In terms of effect it's a super-weakened version of [Cleansing Wildfire](https://scryfall.com/card/znr/137/cleansing-wildfire), but it actually counts as a land slot. It's just that in the mid-to-late game, when you're no longer short on lands yourself, you can start trying to blow up all of the opponent's lands.


- **[Blood Sun](https://scryfall.com/card/rix/92/blood-sun) (1):**

This isn't strictly a **destroy-land** card, but its function is actually very close. Its biggest use is turning fetch lands into useless junk. Speaking of which, you may notice that our deck itself doesn't run any fetch lands, so we won't lock our own mana abilities. It still affects the indestructible lands & [Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair), so it isn't entirely free of side effects, just relatively small ones.

The reason I put it in instead of [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) is that many of our land destruction spells give the opponent basic lands back. Until we've blown up all of the opponent's basics, it's hard to say who [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) hurts more, and in many cases locking down fetch lands is just as destructive as [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon). Also, [Blood Sun](https://scryfall.com/card/rix/92/blood-sun) replacing itself with a card upon entering is a big plus.

This card is basically a free slot. Swapping it directly for a removal spell with better range or some card advantage is also fine. If you plan to put in card advantage, you can consider [Cori Mountain Monastery](https://scryfall.com/card/tdm/252/cori-mountain-monastery).



### Other Lands

![Lands](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/efc74e074c5b.webp)

- **[Sacred Foundry](https://scryfall.com/card/eoe/256/sacred-foundry) (4) & [Elegant Parlor](https://scryfall.com/card/mkm/260/elegant-parlor) (1) & Plains (4) & Mountain (1):**

As mentioned above, we have no fetch lands. Although this is somewhat a concession to the pairing with [Blood Sun](https://scryfall.com/card/rix/92/blood-sun), to be honest even without [Blood Sun](https://scryfall.com/card/rix/92/blood-sun) there's little room to squeeze in fetch lands, because the pile of utility lands above already ties up a lot of slots. To give [Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair) Plains to find, and to give basic lands to find when blowing up our own lands with [White Orchid Phantom](https://scryfall.com/card/mh3/47/white-orchid-phantom) and [Cleansing Wildfire](https://scryfall.com/card/znr/137/cleansing-wildfire), the requirement for the number of basic Plains & multicolor lands with the Plains type is very high. Even without [Blood Sun](https://scryfall.com/card/rix/92/blood-sun), at the very most you could only squeeze out 3 fetch land slots.



### Removal

![Removal](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/86246e2d54ff.webp)

- **[Galvanic Discharge](https://scryfall.com/card/mh3/122/galvanic-discharge) (4) & [Static Prison](https://scryfall.com/card/mh3/44/static-prison) (3) & [Wrath of the Skies](https://scryfall.com/card/mh3/49/wrath-of-the-skies) (3):**

~~Being able to hold up a removal structure with just one energy package, this is the unreasonable part of the new Modern sets.~~

MH3's energy-package removal is good enough that even control would call it good, and I especially want to commend [Wrath of the Skies](https://scryfall.com/card/mh3/49/wrath-of-the-skies). This one card solves a great many problems, and with excellent energy removal, it substantially raises the deck's resistance to fast board-flooding decks. However, although mindlessly plugging in the energy-package removal lets this deck's defense take shape quickly, what determines a deck's ceiling is also often the removal structure. If you want to adjust this deck, the removal slots will be the most critical entry point, which will be explained in later sections.



### Creatures

![Creatures](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/a8eb15110e47.webp)

- **[Phlage, Titan of Fire's Fury](https://scryfall.com/card/mh3/197/phlage-titan-of-fires-fury) (3) & [Solitude](https://scryfall.com/card/mh2/32/solitude) (3):**

Although Phlage, Titan of Fire's Fury has a long proper name in Chinese, almost no one calls it by that, so we'll keep calling it the Boros Titan.

Both of these are top-tier singles that you can just use once your colors are right. Rather than explaining why to include them, it's when you don't include them that you need a reason. Especially since the land destruction package takes up a great many slots, it's very important for them to combine the attributes of removal and win conditions. [Phlage, Titan of Fire's Fury](https://scryfall.com/card/mh3/197/phlage-titan-of-fires-fury)'s super ability to take on aggro decks head-on is also the key that lets this deck, whose early board tempo is badly behind, come back from behind.


- **[Witch Enchanter // Witch-Blessed Meadow](https://scryfall.com/card/mh3/239/witch-enchanter-witch-blessed-meadow) (1):**

It's essentially placed in a land slot, but its front face is also quite useful in the current environment, since there are too many weird artifacts and enchantments out there right now.



### The Almighty Karn-Doraemon

{% mtgpick "rvr" 1 %}

- **[Karn, the Great Creator](https://scryfall.com/card/rvr/1/karn-the-great-creator) (4):**

The Karn toolbox is the final piece of the puzzle that completes this deck. From the composition above you can see that, apart from [Phlage, Titan of Fire's Fury](https://scryfall.com/card/mh3/197/phlage-titan-of-fires-fury), there are almost no real threats as win conditions, and very little proactive card advantage, so this slot has to provide both resources and a way to win. Also, land destruction decks have an awkward problem: the land destruction package takes up so many slots that it greatly narrows the deck's flexibility in answering things, and land destruction is the kind of strategy that needs enough copies thrown out one after another to suppress the opponent, so the cards you can bring in for sideboard games are often very limited.

After reading that whole string above, you'll find that [Karn, the Great Creator](https://scryfall.com/card/rvr/1/karn-the-great-creator) is almost the only card that can make up for these problems. Its classic pairing with [Liquimetal Coating](https://scryfall.com/card/cm2/197/liquimetal-coating) also fits the land destruction theme while providing super flexible answers. Since the sideboard is mostly a toolbox for [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator) to find, sideboarding is also somewhat easier.

### Sideboard

{% mtgpick "cm2" 197 %}

- **[Liquimetal Coating](https://scryfall.com/card/cm2/197/liquimetal-coating) (1):**

The classic must-have land destruction special weapon for the [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator) toolbox. Sometimes, even when it can't be paired with [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator)'s +1, simply activating it on the opponent's turn can lock down one of their permanents' activated abilities for a turn.



![Sideboard 1](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/bea508ba3757.webp)

- **[Defense Grid](https://scryfall.com/card/9ed/293%E2%98%85/defense-grid) (2) & [Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) (1):**

Two key defensive pieces. Since this deck has very few instant-speed plays, it easily shows weaknesses against decks with strong instant-speed abilities. With [Defense Grid](https://scryfall.com/card/9ed/293%E2%98%85/defense-grid) escorting, it's easier to steer the game toward a pace comfortable for us. [Defense Grid](https://scryfall.com/card/9ed/293%E2%98%85/defense-grid) is also the answer card most often brought into the main deck during sideboarding.

[Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) is the strongest defense against creatures. After all, we actually refill our hand very little, and most of the time our hand can easily be spent down to the point where there are no creatures able to attack. What the first [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator) most often does is actually find [Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) and then get beaten to death (helping me absorb a bit of damage in the process). After pinning down [Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) and setting up a line of defense, we complete the lock step by step.



{% mtgpick "2xm" 306 %}

- **[Walking Ballista](https://scryfall.com/card/2xm/306/walking-ballista) (1):**

[Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge)'s defense is strong, but it also locks down our own creatures, so we need a Plan B that doesn't rely on attacking. [Walking Ballista](https://scryfall.com/card/2xm/306/walking-ballista) fits the requirement perfectly, and can also be used to clear the board when necessary.

Since [Walking Ballista](https://scryfall.com/card/2xm/306/walking-ballista) itself is a creature that's very easy to kill, if you've already set down [Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) and can't shoot someone dead in one turn, don't rush to bring it out. First lock the opponent down until they can't do anything, and once the board is safe, let [Walking Ballista](https://scryfall.com/card/2xm/306/walking-ballista) slowly collect heads.



{% mtgpick "2xm" 252 %}

- **[Engineered Explosives](https://scryfall.com/card/2xm/252/engineered-explosives) (1):**

Flexible and handy removal, very powerful against decks that can go wide at low mana cost. Against Landless Belcher, because it can blow up a freshly suspended [Lotus Bloom](https://scryfall.com/card/tsr/270/lotus-bloom), keeping the opponent from bypassing lands and squeezing out mana to combo anyway, it's also often brought into the main deck from the sideboard.



![Sideboard 2](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/28296d5ba64d.webp)

- **[Tormod's Crypt](https://scryfall.com/card/dmr/235/tormods-crypt) (1) & [Ghost Vacuum](https://scryfall.com/card/dsk/248/ghost-vacuum) (1) & [Grafdigger's Cage](https://scryfall.com/card/m20/227/grafdiggers-cage) (1):**

Basically all kinds of graveyard hate, and the three each have their own functional advantages.

There are some applications of [Ghost Vacuum](https://scryfall.com/card/dsk/248/ghost-vacuum) worth mentioning separately. With [Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) holding down the board, if the creatures in the opponent's graveyard happen to have abilities that bypass attacking to win, then [Ghost Vacuum](https://scryfall.com/card/dsk/248/ghost-vacuum) can also become a winning Plan B. In addition, [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator)'s -2 can take artifact cards from exile, so when necessary you can use [Ghost Vacuum](https://scryfall.com/card/dsk/248/ghost-vacuum) to exile artifact cards from your own graveyard, so that [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator) can recover and reuse them.




{% mtgpick "mh3" 212 %}

- **[Vexing Bauble](https://scryfall.com/card/mh3/212/vexing-bauble) (1):**

It can stop zero-mana spells and alternative-cost spells, and is key against Affinity and Prowess. Against opponents with lots of alternative-cost plays, the defense [Vexing Bauble](https://scryfall.com/card/mh3/212/vexing-bauble) provides is also very reassuring. As long as we've finished blowing up the opponent's lands, nothing unexpected will happen.



![Sideboard 3](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/7c9cfda2bfb4.webp)

- **[Disruptor Flute](https://scryfall.com/card/mh3/209/disruptor-flute) (1) & [The Stone Brain](https://scryfall.com/card/bro/247/the-stone-brain) (1):**

Both are name-a-card hate pieces, each with its own pros and cons. [The Stone Brain](https://scryfall.com/card/bro/247/the-stone-brain) can cut off the opponent's key card very cleanly, but it's costly and can't do anything about that thing if it's already on the battlefield. [Disruptor Flute](https://scryfall.com/card/mh3/209/disruptor-flute) wins on flexibility, and against decks with multiple key activated abilities, you can also hold the choice back for later.

Since [The Stone Brain](https://scryfall.com/card/bro/247/the-stone-brain) exiles itself after use, it can be recovered and reused by [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator)'s -2.




![Sideboard 4](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/1512efc2513f.webp)

- **[Damping Sphere](https://scryfall.com/card/dmr/219/damping-sphere) (1) & [High Noon](https://scryfall.com/card/otj/15/high-noon) (2):**

Both are basically hate pieces against Storm, Prowess, and Affinity. [Damping Sphere](https://scryfall.com/card/dmr/219/damping-sphere)'s effect of taxing lands' mana production is less useful for us, since any problem lands will probably just be blown up by us directly. Purely in terms of the ability to stop consecutive spell casting, [High Noon](https://scryfall.com/card/otj/15/high-noon) is far stronger, but considering that [Damping Sphere](https://scryfall.com/card/dmr/219/damping-sphere) is an artifact that [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator) can find, I still put one in the sideboard toolbox.


---

## Matchups and Adjustment Directions

As I said at the start, this deck was built at the peak of Landless Belcher's metagame share. Against Belcher, the large number of free land destruction spells in the main deck, plus [Karn](https://scryfall.com/card/rvr/1/karn-the-great-creator)'s artifact lock, make it almost a free win. Tron and control are also very uncomfortable facing so much land destruction. In addition, the energy-package removal and [Phlage, Titan of Fire's Fury](https://scryfall.com/card/mh3/197/phlage-titan-of-fires-fury)'s anti-aggro ability can actually keep up with Boros Energy's offense, and the opponent's [Phlage, Titan of Fire's Fury](https://scryfall.com/card/mh3/197/phlage-titan-of-fires-fury) and [Seasoned Pyromancer](https://scryfall.com/card/2x2/123/seasoned-pyromancer) often can't be reused after going to the graveyard because they lack lands, so it performs decently against Energy too.

![](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/3095bae80c8b.webp)

However, our removal structure also dooms us to being very strained, or even helpless, in quite a few matchups. For example, this deck's removal includes quite a lot of burn, and against low-cost, high-toughness creatures that can be brought out with a small number of lands, it's easy to exceed our range limit, such as [Psychic Frog](https://scryfall.com/card/mh3/199/psychic-frog), which furiously discards cards from hand, [Murktide Regent](https://scryfall.com/card/mh2/52/murktide-regent), and the big creatures conjured with tricks by Cloudshift decks. Among these, the high-cost creatures can't even be saved by [Wrath of the Skies](https://scryfall.com/card/mh3/49/wrath-of-the-skies). Since we don't really replenish energy, [Static Prison](https://scryfall.com/card/mh3/44/static-prison) has to be returned sooner or later, so it can only be called a very strong way to buy time, and in many cases the problem isn't cured at the root. As for [Solitude](https://scryfall.com/card/mh2/32/solitude), strong as it is, it's a card-disadvantage play until you have 5 mana, so you can't expect it to handle every problem. Also, although we're a land destruction deck, when we actually face the land-focused [Primeval Titan](https://scryfall.com/card/ima/183/primeval-titan) [Amulet of Vigor](https://scryfall.com/card/sld/167/amulet-of-vigor), it's not easy to play against either. Its explosiveness easily spins the board out of control, and now with [Icetill Explorer](https://scryfall.com/card/eoe/192/icetill-explorer) added, we can't even blow up all its lands (and this thing also easily exceeds the range of burn).

![](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/78286304a5d4.webp)

In addition, against some decks that can create a lethal board from an empty board using only a small number of lands, this deck's tempo often can't keep up either. The worst is none other than [Goryo's Vengeance](https://scryfall.com/card/uma/99/goryos-vengeance), which is entirely capable of holding its fetch land and then, as soon as my turn ends, pulling off the whole combo. Prowess and Affinity can also go off with very few lands: Prowess is a hasty instant-speed kill, and with Affinity, once [Kappa Cannoneer](https://scryfall.com/card/eoc/74/kappa-cannoneer) is made and the opponent is holding a card that can deal with [Ensnaring Bridge](https://scryfall.com/card/2xm/253/ensnaring-bridge) (such as a counterspell or bounce), it's no different from being dead.

![](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/23ee120e3e74.webp)

Some of the problems above truly can't be solved by removal, and it's hard to include many hate cards either. These are this deck's natural predators, and all I can say is there's nothing to be done. But for cards that can be handled by removal and just happen to hit blind spots in the existing removal structure, that is the deck's adjustment direction. For example, [Prismatic Ending](https://scryfall.com/card/mh2/25/prismatic-ending), [March of Otherworldly Light](https://scryfall.com/card/neo/28/march-of-otherworldly-light), [Path to Exile](https://scryfall.com/card/blc/147/path-to-exile), and so on each have their own advantageous situations, and I've even considered [Oust](https://scryfall.com/card/clu/67/oust) and [Condemn](https://scryfall.com/card/rvr/14/condemn).

>One thing about [Path to Exile](https://scryfall.com/card/blc/147/path-to-exile) needs to be singled out, though. The [mono-white land destruction](https://76vezffd.blogspot.com/2025/09/mono-white-control.html) deck, because its construction logic is relentless board clearing, only starts using repeatable land destruction methods in the mid-to-late game to blow people out of lands, so giving the opponent an extra land in the early game doesn't matter much. But this Boros land destruction deck has a plan to restrict the opponent's mana base from the very beginning, so an early-game [Path to Exile](https://scryfall.com/card/blc/147/path-to-exile) may well seriously conflict with its own game plan.

When choosing [Prismatic Ending](https://scryfall.com/card/mh2/25/prismatic-ending), some of the lands with the Plains type can be changed to Triomes or white-X shock lands, to increase converge range. There's also a more radical change: mixing in some black lands and changing [Stone Rain](https://scryfall.com/card/chk/191/stone-rain) into [Vindicate](https://scryfall.com/card/mh2/294/vindicate). That way it still takes a three-mana land destruction slot, but the removal becomes much more versatile. Of course, after such a change, [Cascading Cataracts](https://scryfall.com/card/m3c/326/cascading-cataracts) would certainly have to be replaced with [colored indestructible lands](https://scryfall.com/search?as=grid&order=name&q=oracle%3AIndestructible+%28type%3AArtifact+type%3ALand%29+%28game%3Apaper%29+set%3Amh2), and [Blood Sun](https://scryfall.com/card/rix/92/blood-sun) couldn't be played either. You'd need to invest in fetch lands again to support the mana base. However, the mana for this version is very hard to build. Although it clearly raises the ceiling, the risk of color problems and tempo problems also rises sharply, and I still haven't been able to tune a balance I'm satisfied with.

>Speaking of which, with both black-white land destruction and [Flagstones of Trokair](https://scryfall.com/card/tsr/278/flagstones-of-trokair), if I keep changing it, maybe even [Smallpox](https://scryfall.com/card/tsr/139/smallpox) will pop out?

![](https://images.guildmagesforum.tw/posts/Modern-Boros-Ponza/59955d9a2d18.webp)

Also, the Karn toolbox in the sideboard actually has a huge amount of room for adjustment, even more than the main deck has. You don't necessarily have to stick to artifacts either. Like [High Noon](https://scryfall.com/card/otj/15/high-noon), if you find a hate card that fits the current Meta, you can also put it in aggressively. Since the details of the recent Meta have been changing a bit too quickly, almost day by day, no matter how I revise this article it will certainly never keep up with the most up-to-date changes, so this part still relies on individual flexible adjustment.


---

## Conclusion

Overall, this deck is still a Fun Deck. Its matchups are extremely polarized. It really does have very good matchups against some Meta decks, but conversely it also has quite a few natural predators. Land destruction also dooms this to be a deck that depends heavily on being on the play or draw <font color="#A6A6A6">(although with Modern's pace sped up to where it is now, it seems no deck doesn't depend on play or draw)</font>, and we have very little card filtering, which means situations where you have to rely on topdecks are not rare. All of these doom this to not be a stable deck.

The biggest strength of this deck is probably that it's cheap. The deck's cost is at the level of a Standard deck <font color="#A6A6A6">(and not even a top-tier one)</font>, and 40% of that cost comes from [Phlage, Titan of Fire's Fury](https://scryfall.com/card/mh3/197/phlage-titan-of-fires-fury) & [Solitude](https://scryfall.com/card/mh2/32/solitude), both top-tier cards of the highest versatility. As long as you still play Modern, you'll never lack a place to use them. When your local environment is full of Landless Belcher or Tron, this will be a fairly good value choice.

However, there's a magical thing about this deck. Because most Modern decks today push efficiency to the limit and run only the minimum number of lands needed to function, once lands are attacked the tempo isn't just slowed by a turn, it's dead for a good three turns. The result is that the opponent could do all sorts of things to leave me completely behind with just one more land, yet that starting land can only be prayed for, and the sight of them topdecking is even more devastating than for me, who has hardly any card filtering. While you're still agonizing over how to answer the follow-up attacks, you suddenly realize the opponent is actually already stuck. That is also why the win rate after testing turned out much better than I originally expected.
