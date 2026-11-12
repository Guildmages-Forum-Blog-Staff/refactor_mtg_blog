---
title: "Pioneer Mono-Black Processor Midrange"
date: "2024-05-13 20:52:06"
categories:
  - "Construct"
  - "Pioneer"
authors:
  - "JruMTG"
cover: "https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/eabf8454b014-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/eabf8454b014-cover.jpg"
excerpt: "2024/5/11 卡士多 Pioneer MITQ#1"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Pioneer-Mono-Black-Processor/).

## Before We Start

This is the deck I used to win a qualification at the Season 7 Pioneer MITQ, and it is my answer to the current environment.

First, the main matchups to prepare for in the current Pioneer environment are: [Rakdos Vampires](https://scryfall.com/card/mkm/110/vein-ripper), [Izzet Phoenix](https://scryfall.com/card/rvr/100/arclight-phoenix), [Amalia Combo](https://scryfall.com/card/lci/221/amalia-benavides-aguirre), [Waste Not](https://scryfall.com/card/c16/117/waste-not), [Bring to Light](https://scryfall.com/card/2x2/188/bring-to-light) [Niv-Mizzet](https://scryfall.com/card/war/208/niv-mizzet-reborn), [Lotus Field Combo](https://scryfall.com/card/m20/249/lotus-field), [Azorius Control](https://scryfall.com/card/dom/207/teferi-hero-of-dominaria), and [aggro decks using Slickshot Show-Off](https://scryfall.com/card/otj/146/slickshot-show-off). The first three deserve the most attention. I also like reactive decks that focus on answers and disruption, so when building I did not think about how to race these decks with a proactive plan of my own, but about how to have enough interaction against them.

After analyzing how those decks operate, I reached one conclusion: the current environment is highly combo-oriented. Game plans often require assembling specific pieces, or have strict requirements on the opponent's hand size, and they also make heavy use of the graveyard. So my starting point was to build a black base deck with strong hand disruption and graveyard interference, with [Go Blank](https://scryfall.com/card/stx/72/go-blank) in the main deck.

The most intuitive option is to build a [Waste Not](https://scryfall.com/card/c16/117/waste-not) deck, which has already proven itself in the current environment. Although I have no doubt about the power of Waste Not, the way that deck plays doesn't suit me. First, I like reactive decks with more flexibility in play, while Waste Not is relatively proactive and a bit linear. Second, the deck's floor and ceiling vary hugely depending on whether you draw Waste Not. If you can't get resources from Waste Not early, you are just discarding cards, and a single topdeck from the opponent can beat you back. I still wanted a deck that runs more stably, so in the end I chose a midrange build that emphasizes disruption and earning card advantage.

![Cover](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/cb4f2ab9d757.webp)

## Deck Introduction

**[Decklist link](https://www.mtggoldfish.com/deck/6376958#paper)**

![deck](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/dd4912c081cb.webp)

### Starting Point of the Build

After trying some off-beat ideas at first, I thought of the small combination of [Deep-Cavern Bat](https://scryfall.com/card/lci/102/deep-cavern-bat) + [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler). <font color="#AAAAAA">(Modern players from before the MH era are surely familiar with this pairing; back then the Bat's slot was filled by [Tidehollow Sculler](https://scryfall.com/card/mma/184/tidehollow-sculler).)</font>

![Bat and Strangler](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/d3ddd0b1eb09.webp)

> [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler): When Wasteland Strangler enters the battlefield, you may put a card an opponent owns from exile into its owner's graveyard. If you do, target creature gets -3/-3 until end of turn.

When Deep-Cavern Bat enters, it temporarily holds one card from the opponent's hand. That card is a "card an opponent owns in exile," so Wasteland Strangler can move it to the opponent's graveyard and give -3/-3. Once the Strangler moves that card, it is disconnected from the Bat, and if the Bat leaves later the card won't be returned. After this back-and-forth, I have two creatures on board while the opponent has lost two resources (a card in hand plus a creature). That gives a heavy disruption effect and a +2 card advantage, and I also have board presence.

This little combo has a good ceiling but is easily interrupted: just kill the Bat with one removal spell. But the Bat is already strong enough, and you can't ask anything more of it. So the key to polishing this idea is ensuring Wasteland Strangler has fodder, so that it can reliably remove something when it enters. A three-mana 3/2 creature that comes with a removal effect is very usable in Pioneer in terms of efficiency, card advantage, and tempo. Also, don't forget it is a 3-power creature, which means it is a qualified [Reckoner Bankbuster](https://scryfall.com/card/neo/255/reckoner-bankbuster) crew member, which contributes significantly to the deck's flexibility.

Luckily, black is the color that lacks exile effects least, so [Deep-Cavern Bat](https://scryfall.com/card/lci/102/deep-cavern-bat) and [Go Blank](https://scryfall.com/card/stx/72/go-blank), the starting points of the build, naturally qualify. The next job was how to reasonably increase the number of exile effects.

### Exile Fodder Providers (Creatures)

![Creatures](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/bc19ad7af56d.webp)

When choosing creatures I set one requirement: every creature other than [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler) must provide exile fodder, and preferably, apart from [Deep-Cavern Bat](https://scryfall.com/card/lci/102/deep-cavern-bat), also be able to crew [Reckoner Bankbuster](https://scryfall.com/card/neo/255/reckoner-bankbuster) alone.

[Graveyard Trespasser](https://scryfall.com/card/mid/104/graveyard-trespasser-graveyard-glutton) (4): The key to the deck's structure coming together. Most of the time it reliably provides exile fodder, and the life gain lets me survive the deadline against some life-race decks. In a build that emphasizes hand disruption, the "discard a card" ward is also more troublesome for the opponent.

[Callous Bloodmage](https://scryfall.com/card/stx/66/callous-bloodmage) (1): The biggest dark horse. I added this at the last minute on the morning of the MITQ, and I was very satisfied with the results in actual play. I even wanted to move a slot over for a second copy. This slot was originally the fourth Wasteland Strangler, but when analyzing the odds of operation I found that a full playset of Strangler too often runs into a lack of fodder or a lack of removal targets, so cutting Strangler to three and adding one more fodder provider was safer. After thinking it over, Callous Bloodmage fit my requirements perfectly. It creates exile fodder, but when fodder isn't needed it can just act as a creature that draws a card on entering, so it doesn't force exile for exile's sake and break the resource chain. Its Pest-making ability looks useless, but it can be a lifesaver against some life-race decks. Besides, the Pest has 1 power and Bloodmage has 2, which barely makes it a card that can crew Reckoner Bankbuster alone. In short, its three ETB modes each look weak, but as a choose-one effect it is still very versatile, which fits the main deck's requirement of broad applicability.

[Kalitas, Traitor of Ghet](https://scryfall.com/card/ogw/86/kalitas-traitor-of-ghet) (1): Normally this slot should go to [Sheoldred, the Apocalypse](https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse), but I wanted a richer supply chain of exile fodder, so I chose Kalitas. It isn't entirely a downgrade, though. Its lifelink, plus the ability to exile the opponent's dying creatures and make a board, can create board control no less than Sheoldred's in many games, and it has a chance to go wide and become a problem that removal can't fully clean up, which Sheoldred can't do. One thing to remind you: Kalitas exiling the opponent's dying creatures is a replacement effect, so the opponent's creatures won't trigger their death triggers, such as the life-drain ability of [Vein Ripper](https://scryfall.com/card/mkm/110/vein-ripper).

### Exile Fodder Providers (Spells)

![Spells](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/d7c6b722705b.webp)

[Cling to Dust](https://scryfall.com/card/thb/87/cling-to-dust) (2): If I had to list the ten Standard cards that influenced me most since getting into MTG, this one would undoubtedly be on the list. Cling to Dust has always been an excellent card in my eyes, combining instant-speed graveyard hate and card filtering in one. Thanks to escape, it is even a card advantage spell <font color="#AAAAAA">(for just instant-speed graveyard hate + filtering + life gain, MKM's [Cease // Desist](https://scryfall.com/card/mkm/246/cease-desist) can also do it, but it can't repeatedly draw cards)</font>. When it hits [Arclight Phoenix](https://scryfall.com/card/rvr/100/arclight-phoenix), it can't draw a card, but considering how badly the opponent is hurt by losing the Phoenix, it effectively earns card advantage anyway. In non-blue builds I often play three Cling to Dust, but since this deck has far more graveyard hate than usual and also uses some card advantage sources I rarely play, I felt two was the balance point.

[Anoint with Affliction](https://scryfall.com/card/one/81/anoint-with-affliction) (1): An extra piece of removal. Its range is limited, but most creatures in Pioneer cost three mana or less, and it is rarely a dead card when I truly need removal. The exile nature also occasionally works wonders, for example against [Old-Growth Troll](https://scryfall.com/card/khm/185/old-growth-troll) in Mono-Green Devotion, or [Darksteel Citadel](https://scryfall.com/card/2xm/315/darksteel-citadel) becoming a creature in the Scissors deck. But since its maximum range is no greater than [Fatal Push](https://scryfall.com/card/2xm/93/fatal-push), one copy is enough.

[Blot Out](https://scryfall.com/card/mat/12/blot-out) (2): This card is more commonly seen in sideboards, but I am very satisfied with the gains from moving it into the main deck. First, an exile removal spell is exactly what I want. I also always want removal with greater range to handle problems outside the range of [Fatal Push](https://scryfall.com/card/2xm/93/fatal-push) and [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler), and this card handles [Vein Ripper](https://scryfall.com/card/mkm/110/vein-ripper) from Rakdos Vampires and [Arclight Phoenix](https://scryfall.com/card/rvr/100/arclight-phoenix) from Izzet Phoenix effectively. These two decks are exactly the mainstream decks that define the current Pioneer environment, so the return on investment is undoubtedly high enough. The card more commonly used in this slot in the meta is [Bitter Triumph](https://scryfall.com/card/lci/91/bitter-triumph), but Bitter Triumph doesn't suit me, because my default game plan is still more passive and defensive. With that premise, the cost of Bitter Triumph is truly too bitter; only a more proactive deck can tolerate that cost.

[Go Blank](https://scryfall.com/card/stx/72/go-blank) (2): As I introduced at the start, I think that to play a black-based deck in the current environment, even if it isn't [Waste Not](https://scryfall.com/card/c16/117/waste-not), you should put it in the main deck. It performs really well in the current environment. Izzet Phoenix, Lotus Field, and control decks look dead-eyed when they see Go Blank, and most of the other mainstream archetypes, except Bring to Light Niv-Mizzet, are not good at refilling their hands. What is more common is the pursuit of quickly building a board, but we are a removal-oriented build with a better ability to answer boards. After accounting for the normal resource consumption above, and the disruption from [Deep-Cavern Bat](https://scryfall.com/card/lci/102/deep-cavern-bat) and [Thoughtseize](https://scryfall.com/card/2xm/109/thoughtseize), one Go Blank can easily leave the opponent with nothing. Of course, if it isn't a Waste Not deck you don't necessarily need a full playset in the main deck, and the number can be adjusted. Considering how crowded the three-mana slot is and the number of hand-disruption cards, I felt two in the main deck was enough; more would easily become dead cards because the opponent has no hand.

### Exile Fodder Providers (Lands)

![Lands](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/c03302b49a66.webp)

[Hive of the Eye Tyrant](https://scryfall.com/card/afr/258/hive-of-the-eye-tyrant) (4): A mono-black deck would play it anyway, and it just happens to have a graveyard-exiling ability. But considering the cost to animate it and the restrictions on board state, normally I wouldn't expect it to supply [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler)'s fodder.

[Scavenger Grounds](https://scryfall.com/card/hou/182/scavenger-grounds) (1) & [Ifnir Deadlands](https://scryfall.com/card/hou/179/ifnir-deadlands) (2): This is the part I really want to highlight. This desert set is only a small adjustment to utility lands, but at basically no cost it really did raise my deck's ceiling noticeably. Scavenger Grounds gives me more natural graveyard answers in the main deck <font color="#AAAAAA">(Phoenix takes another stray hit)</font>, and Ifnir Deadlands gives me two more -2/-2 answers. Don't think that paying such a clunky cost for -2/-2 is terribly inefficient; sometimes one extra small removal that kills [Reflection of Kiki-Jiki](https://scryfall.com/card/neo/141/fable-of-the-mirror-breaker-reflection-of-kiki-jiki?back) can be the dividing line between winning and losing. Most critically, they are lands that just sit there, costing the build essentially nothing, so it is free extra play space. Since my build leans heavily on [Invoke Despair](https://scryfall.com/card/neo/101/invoke-despair), I don't dare play many colorless lands in the end, and [Ifnir Deadlands](https://scryfall.com/card/hou/179/ifnir-deadlands) squeezes the room for basic Swamps, which can make [Castle Locthwain](https://scryfall.com/card/clb/884/castle-locthwain) more likely to enter tapped. So the current configuration is 1 Scavenger Grounds and 2 Ifnir Deadlands, but after recalculating later, Ifnir Deadlands should really go up by one, with Castle Locthwain down by one. Finally, a reminder: the activation cost of both of these deserts is to **sacrifice a Desert**, not to sacrifice itself.

### Other Nonland Cards

![Spells 1](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/92f083f45769.webp)

[Thoughtseize](https://scryfall.com/card/2xm/109/thoughtseize) (3) & [Fatal Push](https://scryfall.com/card/2xm/93/fatal-push) (4): Both are star cards that define Pioneer black decks and need little introduction, but the details of the counts are worth mentioning. The reasons Thoughtseize is only at three rather than a full playset are: 1. I already have enough hand disruption, and more would easily become dead cards. 2. Paying 2 life really hurts; my deck is essentially defensive and can't afford too much life loss. 3. My threat count isn't high and my offensive tempo isn't strong, so after a one-for-one discard I can't necessarily capitalize on the tempo of the opponent being down a card.

![Spells 2](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/03e8a309b8a9.webp)

[Go for the Throat](https://scryfall.com/card/moc/250/go-for-the-throat) (1) & [Heartless Act](https://scryfall.com/card/cmm/166/heartless-act) (1): Both are extra supplements for removal blind spots; basically one of each conditional removal spell is enough to stagger the blind spots. I also considered playing OTJ's new [Shoot the Sheriff](https://scryfall.com/card/otj/106/shoot-the-sheriff), but in the [Waste Not](https://scryfall.com/card/c16/117/waste-not) matchup, where my hand is most easily disrupted, one of the opponent's key creatures, [Kaervek the Punisher](https://scryfall.com/card/otj/92/kaervek-the-punisher), happens to be an Outlaw, so I gave up on that card.

![Spells 3](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/b075fa5c9a64.webp)

[Reckoner Bankbuster](https://scryfall.com/card/neo/255/reckoner-bankbuster) (3) & [Invoke Despair](https://scryfall.com/card/neo/101/invoke-despair) (3): Although I spent a lot of ink above praising the exile package, Reckoner Bankbuster and Invoke Despair are the original motivation for building a black deck. The reason is simple: I am a huge fan of these two cards, and the massive resources they bring are my capital to operate. By my usual building habits I would play full playsets of both without hesitation, but because I mixed in [Deep-Cavern Bat](https://scryfall.com/card/lci/102/deep-cavern-bat) + [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler) and the exile-package cards that come with them, the original room for counts was squeezed. After adjustments, I think three of each is the more balanced setup.

### Other Lands

![Lands](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/aa2256ddcc19.webp)

[Field of Ruin](https://scryfall.com/card/thb/242/field-of-ruin) (3): In a normal mono-colored deck I would want a full playset, even going beyond a full playset with equivalent effects like [Field of Ruin](https://scryfall.com/card/thb/242/field-of-ruin). But considering this Invoke Despair build's demand for specific colors, I only dared play three. Although it can blow up a land and turn itself into a Swamp, so in theory there are no color problems, it still costs mana. Sometimes spending mana just to fix colors by destroying a completely unimportant land feels really stupid, or having to delay Invoke Despair a turn for color fixing can occasionally become a real flaw.

[Castle Locthwain](https://scryfall.com/card/clb/884/castle-locthwain) (3): One of the sources of continued resources, but after many tests I felt it could go down to two, moving a slot to other lands. Since my build is a more passive, resource-oriented one, my hand is often held for a long time, and my tolerance for bleeding life to draw cards isn't that high. In actual play I often have two Castle Locthwains on the battlefield, but activating one once a turn is about the limit. Besides the Ifnir Deadlands mentioned above, [Sunken Citadel](https://scryfall.com/card/lci/285/sunken-citadel) is also a good option to swap in.

[Urborg, Tomb of Yawgmoth](https://scryfall.com/card/tsr/287/urborg-tomb-of-yawgmoth) (1) & [Takenuma, Abandoned Mire](https://scryfall.com/card/neo/278/takenuma-abandoned-mire) (1): No suspense about painlessly playing one of each in a black deck.

### Sideboard

[Grafdigger's Cage](https://scryfall.com/card/m20/227/grafdiggers-cage) (1): An answer to some graveyard decks or decks that drop creatures from the library. However, graveyard answers are already very plentiful against this deck, so mostly I'm eyeing the library side, for example [Collected Company](https://scryfall.com/card/pw21/2/collected-company) and [Chord of Calling](https://scryfall.com/card/rvr/134/chord-of-calling) in Amalia Combo.

[Ashiok, Dream Render](https://scryfall.com/card/war/228/ashiok-dream-render) (2): A library-tutor hoser that doubles as graveyard hate. Against control, besides stopping [Memory Deluge](https://scryfall.com/card/mid/62/memory-deluge) from drawing more cards, it can itself become a finisher <font color="#AAAAAA">(sometimes a control deck's library is more like its HP than its HP is)</font>. Against Bring to Light Niv-Mizzet, it is one of the few answers to [Bring to Light](https://scryfall.com/card/2x2/188/bring-to-light) besides discard <font color="#AAAAAA">(though the help is better than nothing at best)</font>, and it can also mess with the creature-tutor cards in Amalia Combo.

[Liliana of the Veil](https://scryfall.com/card/dmu/97/liliana-of-the-veil) (2): The standard black sideboard card, very good against control, or decks with few creatures and protection spells, like prowess or heroic decks.

[Go Blank](https://scryfall.com/card/stx/72/go-blank) (1): It was originally two in the sideboard, making a full playset with the main deck, but I later found I already had an excess of hand-disruption and graveyard-hate cards, so I moved a slot to a card for other needs.

[Duress](https://scryfall.com/card/dmr/81/duress) (2): The standard black sideboard card.

[Languish](https://scryfall.com/card/jmp/246/languish) (1): Looking at the current environment, most opponents who need a sweeper are fine with -4/-4 range, and it can also get around Amalia Combo's [Selfless Savior](https://scryfall.com/card/m21/36/selfless-savior) and indestructible-style protection spells.

[Path of Peril](https://scryfall.com/card/vow/124/path-of-peril) (1): A standard sweeper against aggro, and it does well against Amalia Combo most of the time. In hindsight I think Ashiok, Dream Render should go down one and Path of Peril up one, mainly because too many cards in the Ashiok slot do similar things. Against the Amalia Combo crowd that sacrifices any creature after the ETB, I can't necessarily protect my planeswalker anyway, so adding one Path of Peril should improve overall matchups better.

[Cry of the Carnarium](https://scryfall.com/card/rna/70/cry-of-the-carnarium) (1): A card with a similar role to Path of Peril but a different function. Its -2/-2 exile sweep can take [Arclight Phoenix](https://scryfall.com/card/rvr/100/arclight-phoenix) + [Young Pyromancer](https://scryfall.com/card/otc/185/young-pyromancer) and its tokens away all at once, with the Phoenix unable to come back. Against Amalia Combo it may not clean everything up, but it can still save a lot of trouble.

[Necromentia](https://scryfall.com/card/m21/116/necromentia) (1): For respecting combo decks or decks that have special needs for specific single cards.

[Sheoldred's Edict](https://scryfall.com/card/one/108/sheoldreds-edict) (1): Most of the main-deck removal is for early tempo, with limited range, and much of it isn't good at killing planeswalkers. In some matchups the opponent has few threats but each is deadly, and many of the main-deck removal spells are dead or awkward against them (for example control, Bring to Light Niv-Mizzet, Waste Not). In those cases Sheoldred's Edict is much better, and heroic decks take a stray hit too.

[The End](https://scryfall.com/card/woe/87/the-end) (1): Likewise useful for respecting Phoenix and Amalia Combo, painful for control to eat, and it can also switch which removal-target matchups you cover, for the same reason as Sheoldred's Edict.

[Invoke Despair](https://scryfall.com/card/neo/101/invoke-despair) (1): Used in matchups that put more emphasis on long-game resource battles, especially important against Bring to Light Niv-Mizzet and [Fable of the Mirror-Breaker](https://scryfall.com/card/neo/141/fable-of-the-mirror-breaker-reflection-of-kiki-jiki).

## Matchups

### Rakdos Vampires

![Rakdos Vampires](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/df10d555726a.webp)

> Sideboard plan
> Out: Deep-Cavern Bat -4, Callous Bloodmage -1
> In: Duress +2, Sheoldred's Edict +1, Languish +1, Invoke Despair +1

Deep-Cavern Bat usually doesn't survive against black-based decks; it just looks at the opponent's hand. Invoke Despair will be the MVP of this matchup, as both for dealing with planeswalkers and [Fable of the Mirror-Breaker](https://scryfall.com/card/neo/141/fable-of-the-mirror-breaker-reflection-of-kiki-jiki) it is the most important card-advantage removal. When you have room to choose, remember to hold on to a way to handle [Vein Ripper](https://scryfall.com/card/mkm/110/vein-ripper); Blot Out is usually the simplest answer.

Although the heading says Rakdos Vampires, against traditional Rakdos midrange the sideboard plan is roughly the same, with the difference that the main-deck Callous Bloodmage doesn't need to come out, and the sideboard's Sheoldred's Edict doesn't need to come in.

### Izzet Phoenix

![Izzet Phoenix](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/99f38beaa62b.webp)

> Sideboard plan
> Out: Deep-Cavern Bat -4, Wasteland Strangler -3, Heartless Act -1
> In: Ashiok, Dream Render +2, Go Blank +1, Duress +2, Necromentia +1, Cry of the Carnarium +1, Path of Peril +1

Since both the main deck and sideboard show too much respect for Phoenix, in principle it is hard to lose unless you suffer a land accident. But watch what the opponent's Plan B is in the sideboarded games. Generally the common threat that is easy to turn lethal is [Young Pyromancer](https://scryfall.com/card/otc/185/young-pyromancer); other threats that spot removal can clean up are not worth worrying about.

### Bring to Light Niv-Mizzet

![Bring to Light Niv-Mizzet](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/4f9a10d90262.webp)

> Sideboard plan
> Out: Fatal Push -4, Deep-Cavern Bat -2, Wasteland Strangler -3, Kalitas, Traitor of Ghet -1
> In: Ashiok, Dream Render +2, Liliana of the Veil +2, Duress +2, Sheoldred's Edict +1, Necromentia +1, The End +1, Invoke Despair +1

A game where the sky falls, and barring accidents, still a bladder-holding game. This deck is designed to give up racing and fight the late game, but we also can't win a late-game resource battle against Bring to Light Niv-Mizzet, so we can only hope to use discard and removal to leave the opponent with no win condition, then look for a chance to mill them out. Reckoner Bankbuster and Invoke Despair will be the most important cards in this matchup; if they come online without incident, we still have a fight.

There are ways to improve this matchup, but at best they move it from unfavorable to even, and it would take too many slots devoted solely to it, so overall it isn't worth the cost. It is more realistic to hope the opponent draws poorly after being hit by a wave of discard.

### Waste Not

![Waste Not](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/defed97b5b25.webp)

> Sideboard plan
> Out: Deep-Cavern Bat -4, Wasteland Strangler -3
> In: Go Blank +1, Duress +2, Sheoldred's Edict +1, Necromentia +1, The End +1, Invoke Despair +1

Without [Leyline of Sanctity](https://scryfall.com/card/m20/26/leyline-of-sanctity), the biggest enemy and ally in this matchup are each other's right hands. Both sides have discard to take the opponent's key card and can topdeck one to turn things around, but since the opponent's key card is the two-mana Waste Not and ours is the five-mana Invoke Despair, we are the underdog on probability.

### Amalia Combo

![Amalia Combo](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/7a16e3991664.webp)

> Sideboard plan
> Out: Cling to Dust -1, Heartless Act -1, Blot Out -2, Invoke Despair -3
> In: Grafdigger's Cage +1, Ashiok, Dream Render +1, Languish +1, Cry of the Carnarium +1, Path of Peril +1, Necromentia +1, The End +1

Sacrifice-based removal is laughably bad in this matchup, but if you feel that some of the targeted sideboard cards aren't necessary, there is nothing wrong with putting Invoke Despair back in as a card-draw spell. Because we have a lot of hand disruption plus answers, creature-based combos should in theory have trouble getting past us. But Amalia Combo has strong burst; sometimes a single [Collected Company](https://scryfall.com/card/pw21/2/collected-company) is an instant free win, and [Chord of Calling](https://scryfall.com/card/rvr/134/chord-of-calling) can also suddenly assemble the pieces at instant speed. So don't be too anxious when playing, and always think about how to hold back a follow-up to respond.

### Lotus Field Combo

![Lotus Field Combo](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/c16447880dd2.webp)

> Sideboard plan
> Out: Deep-Cavern Bat -4 (if they have [Strict Proctor](https://scryfall.com/card/stx/33/strict-proctor)) or Fatal Push -4 (if they don't have [Strict Proctor](https://scryfall.com/card/stx/33/strict-proctor)), Anoint with Affliction -1, Heartless Act -1, Wasteland Strangler -3, Kalitas, Traitor of Ghet -1
> In: Ashiok, Dream Render +2, Liliana of the Veil +2, Go Blank +1, Duress +2, Necromentia +1, Sheoldred's Edict +1, Invoke Despair +1

As long as you don't have a land accident the opponent should be dead-eyed, with their combo pieces vanishing every now and then, and the graveyard might not even have cards for [Lier, Disciple of the Drowned](https://scryfall.com/card/mid/59/lier-disciple-of-the-drowned) to flash back.

### Azorius Control

![Azorius Control](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/caad9d8e3799.webp)

> Sideboard plan
> Out: Fatal Push -4, Go for the Throat -1, Heartless Act -1, Deep-Cavern Bat -2, Wasteland Strangler -3
> In: Ashiok, Dream Render +2, Liliana of the Veil +2, Go Blank +1, Duress +2, Necromentia +1, Sheoldred's Edict +1, The End +1, Invoke Despair +1

If the opponent has [Leyline of Sanctity](https://scryfall.com/card/m20/26/leyline-of-sanctity) in their sideboard and draws it in their opening hand, it will be hard for us; without Leyline of Sanctity, they are basically cooked.

### Izzet Scissors

![Izzet Scissors](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/fca19a849cec.webp)

> Sideboard plan
> Out: Deep-Cavern Bat -1, Callous Bloodmage -1, Thoughtseize -3, Go for the Throat -1
> In: Duress +2, Liliana of the Veil +2, Cry of the Carnarium +1, Path of Peril +1

In principle a hugely favorable matchup. But in this matchup you can easily bleed out in an instant, and the life cost of Thoughtseize is truly unaffordable, so looking at the key cards with Duress is enough.

Watch out for [Darksteel Citadel](https://scryfall.com/card/2xm/315/darksteel-citadel) turning into a creature, and for [Shrapnel Blast](https://scryfall.com/card/ddu/48/shrapnel-blast) going to the face. For Shrapnel Blast, just factor in the potential 5 damage when counting the deadline; this deck has plenty of life gain sources, so there is a good chance to survive the deadline. The best lifegain source, Graveyard Trespasser, is also painful for them to deal with, because the Scissors deck already burns through lots of cards from its hand, and paying for that discard ward really hurts.

As for the animated Darksteel Citadel, Anoint with Affliction is the best answer. Besides that we have a whole pile of sacrifice-based answers, so indestructible itself isn't hard to get around. But the opponent will have plenty of low-cost creatures suited to being sacrificed, so when planning the removal allocation earlier, you still have to kill the little scrubs that need killing.

### Mono-Red Aggro

![Mono-Red Aggro](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/fae7b903c199.webp)

> Sideboard plan
> Out: Thoughtseize -3, Go Blank -1, Blot Out -2
> In: Liliana of the Veil +2, Duress +2, Sheoldred's Edict +1, Path of Peril +1

Just clear the board all-out and gain life all-out. Graveyard Trespasser performs well here too, and don't be greedy for cards with Cling to Dust: exile the creature and gain the life when you should. In this matchup, gaining 3 is the same as countering a burn spell.

### Gruul Prowess & Boros Heroic

![Gruul Prowess](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/616db5813468.webp)
![Boros Heroic](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/ed4bb5f90fbd.webp)

> Sideboard plan
> Out: Callous Bloodmage -1, Thoughtseize -3, Go Blank -2, Heartless Act -1
> In: Liliana of the Veil +2, Duress +2, Sheoldred's Edict +1, Languish +1, Path of Peril +1

Although these are two different decks, they are very similar in essence and the answers are the same, so I'm covering them together. The difference between these two matchups and the mono-red one above is that the opponent has protection spells, and a large share of the burn is swapped for pump spells. Fortunately we have many sacrifice-based answers, so even with protection spells it is hard to get around our removal, and in actual play we can usually keep the opponent locked down steadily until they stall out.

### Quintorius Combo

![Quintorius Combo](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/cc96f25d502f.webp)

> Sideboard plan
> Out: Fatal Push -4, Wasteland Strangler -3
> In: Go Blank +1, Duress +2, Sheoldred's Edict +1, Necromentia +1, The End +1, Invoke Despair +1

Honestly I have never had the chance to test this matchup, so I'm not sure what to say. In any case, we can't win by racing. When [Quintorius Kand](https://scryfall.com/card/lci/238/quintorius-kand) discovers, don't rush to respond; wait until it flips the copy creature and they announce casting it, then kill Quintorius with an instant-speed removal spell, so that the copy creature can't enter as a copy of Quintorius.

### Mono-Green Devotion

![Mono-Green Devotion](https://images.guildmagesforum.tw/posts/Pioneer-Mono-Black-Processor/462a612ccac6.webp)

> Sideboard plan
> Out: Wasteland Strangler -3, Callous Bloodmage -1
> In: Grafdigger's Cage +1, Languish +1, The End +1, Invoke Despair +1

Saved by Invoke Despair once again. Note that Grafdigger's Cage can stop the death trigger of [Old-Growth Troll](https://scryfall.com/card/khm/185/old-growth-troll) and can also stop [Storm the Festival](https://scryfall.com/card/mid/200/storm-the-festival) from flashing back, but it can't stop Storm the Festival from dropping nonland permanents.

## Conclusion

In fact, when Pioneer was born I built a Wasteland Strangler deck with a similar concept. That one was white-black, with white mainly for [Eldrazi Displacer](https://scryfall.com/card/ogw/13/eldrazi-displacer) and the Deep-Cavern Bat slot given to [Brain Maggot](https://scryfall.com/card/jou/62/brain-maggot), and it also carried the Scavenger Grounds desert set. Overall it was an ETB-focused disruptive creature deck. Likewise thanks to the main deck's strong hand disruption and graveyard hate, it performed quite well in the THB environment where combos were everywhere. But after entering IKO, led by [Winota, Joiner of Forces](https://scryfall.com/card/iko/216/winota-joiner-of-forces), the game environment became filled with unfair, violently explosive aggressive decks, and the white-black Eldrazi game plan was completely beaten down at the time, so I took that deck apart.

Back to this MITQ season, this deck went through many evolutions. At the start I also conceived it around Waste Not, and even bought cards for it, but after buying them I changed my mind to a regular midrange deck with full playsets of Reckoner Bankbuster and Invoke Despair, and I thought through all kinds of different detail configurations. Later it took a wild turn into [Mono-Black Eldrazi](https://www.mtggoldfish.com/deck/6370032#paper), and it was then that I realized Wasteland Strangler's performance was not weak at all; I just hadn't found a reasonable build before. As for why I scrapped this Mono-Black Eldrazi list too? In later testing I found that [Thought-Knot Seer](https://scryfall.com/card/ogw/9/thought-knot-seer), one of the highlights of the deck, turned out to be its fatal weakness. With so much hand disruption already, it may not be able to take any card from the opponent's hand when it enters, making it just a 4/4 vanilla creature, with the risk of the opponent drawing a card when it dies. Since Thought-Knot Seer was gone, I no longer needed to stick to colorless lands, so Invoke Despair came back.

Although I did take quite a few detours along the way, I enjoyed the process of constantly analyzing the environment and adjusting the deck, and even more the sense of breakthrough in finding a new building theory on top of an existing framework. At the MITQ, at least three opponents called a judge to explain what Wasteland Strangler actually was when they saw it, and that feeling was really fun. So if you have building ideas different from the current environment, try them boldly and analyze them carefully. Nobody guarantees 100% success, and becoming one of many scrapped drafts is routine, but as long as you find the right building theory, you might create a deck that feels refreshing.
