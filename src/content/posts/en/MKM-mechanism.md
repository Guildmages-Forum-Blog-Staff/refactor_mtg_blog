---
title: "Murders at Karlov Manor Mechanics Breakdown"
date: "2024-01-22 23:06:22"
cover: "https://images.guildmagesforum.tw/posts/MKM-mechanism/212fd054e2ae-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/MKM-mechanism/212fd054e2ae-cover.jpg"
excerpt: "Let's see which mechanics appear in Murders at Karlov Manor!"
categories:
  - "Limited"
  - "MKM"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../MKM-mechanism/).

## Split Cards

![Split Cards](https://images.guildmagesforum.tw/posts/MKM-mechanism/3a3b53b5a1e8.webp)

How could Ravnica go without split cards?

Split cards are also nicknamed "cookie cards"; as the name suggests, they connect two cards on one card. The split cards in this set are two instants or sorceries joined side by side. When you cast this card, you choose one half to cast, and while on the stack it only has the characteristics of the half you cast; at all other times, the card's characteristics are the combination of both halves.

Let's take the new card [Cease//Desist](https://scryfall.com/card/mkm/246/cease-desist) as an example:

- When you cast it, if you cast the left half, Cease, it is a 2-mana black-green spell; if you cast the right half, Desist, it is a 6-mana white-green spell. If the opponent wants to counter it with [Disdainful Stroke](https://scryfall.com/card/woe/47/disdainful-stroke), they can only counter the 6-mana Desist.
- In zones other than the stack, it is a black-white-green card with a total mana value of 8. If it is flipped up by [Trumpeting Carnosaur](https://scryfall.com/card/lci/171/trumpeting-carnosaur)'s Discover 5, it will be judged as not meeting the condition because the card's mana value is greater than 5.
- In zones other than the stack, this card is both an instant and a sorcery. For the enters ability of [Atraxa, Grand Unifier](https://scryfall.com/card/one/196/atraxa-grand-unifier), you can treat it as either an instant or a sorcery card and use that type's allotment to take it into hand.
- Each half of a split card has its own card name. When you want to use [Anointed Peacekeeper](https://scryfall.com/card/dmu/2/anointed-peacekeeper) to name a card, you can only name the name of one half. Suppose you use Anointed Peacekeeper's ability to name the left half, Cease; then only the casting cost of Cease increases by 2, and the opponent's casting cost for the right half, Desist, is unaffected.

## Clue & Investigate

![Clue](https://images.guildmagesforum.tw/posts/MKM-mechanism/ffef09bb2e14.webp)

Clue is an artifact subtype with the activated ability "{2}, Sacrifice this artifact: Draw a card."

The most common source of Clues is an effect that creates Clue tokens, and such effects usually use the keyword Investigate. Investigate means creating one Clue token (for example the new card [Deduce](https://scryfall.com/card/mkm/52/deduce) in this set). If an effect says to investigate N times, it means to create N Clue tokens (for example, the enters ability of [Ezrim, Agency Chief](https://scryfall.com/card/mkm/202/ezrim-agency-chief) is to investigate twice, which means creating two Clue tokens).

## Suspect

![Suspect](https://images.guildmagesforum.tw/posts/MKM-mechanism/5fab6847a6ff.webp)

Suspect is a new keyword ability in this set. Some effects can suspect a target creature, and a suspected creature becomes Suspected: a Suspected creature gains menace and can't block. Being suspected is a permanent, continuous effect; the creature stays Suspected until it leaves the battlefield or some effect ends the Suspected state (for example [Airtight Alibi](https://scryfall.com/card/mkm/149/airtight-alibi)).

One more reminder: suspect only encourages a creature to attack; it doesn't force it to. Even if your creature can't block because it became Suspected, you can hold it back depending on tactical needs; it doesn't have to be thrown out as a suicide squad.

## Case

![Case](https://images.guildmagesforum.tw/posts/MKM-mechanism/a14cc85991a9.webp)

Case is a new enchantment subtype. Every Case consists of three parts: a standard ability, a to solve condition, and a solved ability.

When a Case first enters the battlefield it is unsolved and only has the first part, the standard ability, which works just like a regular enchantment.

The second part, To solve, is a triggered ability: if at the beginning of your end step the Case is unsolved and the condition specified by To solve is met, this ability triggers, and once it resolves successfully, the Case becomes solved. Also note that the To solve ability only goes on the stack if the condition is met, and the condition is checked again on resolution; if the condition isn't met when the ability resolves, the Case can't be solved that time.

The third part is the additional ability the Case gains once it has been successfully solved through To solve. Even if the Case later changes control, it is still solved and still has the solved ability.

Take the new card in this set [Case of the Filched Falcon](https://scryfall.com/card/mkm/44/case-of-the-filched-falcon) as an example. The first part, the standard ability, is to investigate on entering, that is, create a Clue token. The second part, To solve, requires you to control at least 3 artifacts at the beginning of your end step. If you control fewer than three artifacts, To solve doesn't go on the stack at all; and even if it did, if an artifact is removed in response so that you have fewer than 3 artifacts on resolution, the Case likewise can't be solved. Once you successfully solve it, the Case gains the third part's ability.

One last reminder: when indicating a Case's state, players may be used to using a die value or placement to show current progress, but a Case doesn't rely on any external counters to function. These are only memory aids, so be careful not to confuse them with objects that actually have counters.

## Collect Evidence

![Evidence](https://images.guildmagesforum.tw/posts/MKM-mechanism/d0f76fb9c044.webp)

Collect evidence is a new way of paying costs. It is most often seen as an optional additional cost when casting a spell, similar to Kicker & Bargain, or as an activation cost of an ability. It can also be designed as the cost to pay for ward, for example [Axebane Ferox](https://scryfall.com/card/mkm/153/axebane-ferox).

Collect evidence is always followed by a number N. Collect evidence N means exiling any number of cards from your graveyard whose total mana value is greater than or equal to N.

## Disguise

![Disguise](https://images.guildmagesforum.tw/posts/MKM-mechanism/f5de977996e3.webp)

Welcome to the most complex mechanic of this set: Disguise.

Disguise can roughly be seen as an upgraded version of Morph. It is a rare mechanic that uses the "face-down/face-up" rules, and it was also introduced in the article [What is Copiable Value](https://guildmagesforum.tw/What-is-Copiable-Value/#Before-We-Start).

Disguise includes the following rules:

- You may pay {3} and cast a card with a disguise ability face down. This is a kind of alternative cost. The spell goes on the stack face down, and other players won't know what it is.
- After being cast face down and resolving successfully, it is a 2/2 creature with ward 2, with no name, mana cost, color or creature type, and its mana value is treated as 0.
- Any time you have priority, you may reveal the front of the disguise card and pay its disguise cost to turn it face up. This is a special action that doesn't use the stack and can't be responded to. Only face-down permanents can be turned face up this way; face-down instant or sorcery cards can't be turned face up this way.
- If a face-down creature loses its abilities, it can't be turned face up by paying the disguise cost, because it no longer has the disguise ability and disguise cost.
- Because the permanent was already on the battlefield and hasn't changed zones, turning a face-down creature face up doesn't trigger any enters-the-battlefield abilities; likewise, Auras, Equipment, counters or other continuous effects on the creature remain unchanged.
- A face-down card must be revealed face up to your opponents when it leaves the battlefield or the game ends. In addition, you must make sure the order in which multiple face-down cards entered the battlefield can be clearly identified (arranging them in order is recommended).

Take this set's [Defenestrated Phantom](https://scryfall.com/card/mkm/11/defenestrated-phantom) as an example. You can cast it normally for 6 mana, and it is a 4/3 flier. Or you can use the disguise ability and cast it face down for 3 mana, and the opponent won't know who it is. If it gets countered at that point, the card goes to the graveyard face up, and that is public information. After it is cast and resolves successfully, it is a 2/2 ward 2 creature as described in the rules above. Now at any time you have priority, you can pay 4W to turn it face up. This is a special action that doesn't use the stack, and as soon as you pay the cost and announce the flip, it is immediately face up. If the opponent wants to deal with this spirit using [Shock](https://scryfall.com/card/mkm/144/shock), they have to catch the moment when you don't have the mana.

Of course, it's not only creatures that can disguise: a land can also disguise itself as a creature, for example [Branch of Vitu-Ghazi](https://scryfall.com/card/mkm/258/branch-of-vitu-ghazi).

## Cloak

![Cloak](https://images.guildmagesforum.tw/posts/MKM-mechanism/500b3e2506d4.webp)

If disguise corresponds to Morph, then cloak corresponds to Manifest.

With disguise, a card turns itself face down through its own ability, whereas cloak forces other cards face down, and a cloaked face-down card has the same characteristics as disguise: a 2/2 creature with ward 2, with no name, mana cost, color or creature type, and its mana value is treated as 0.

There is a lot of design space in the source of cloaking a card. A relatively common design is to cloak the top card of your own library (put the top card of your library onto the battlefield face down, and it becomes the 2/2 ward 2 creature above).

If the cloaked card is a creature card, its controller may, when they have priority, pay that creature's mana cost to turn it face up. If the card happens to have a disguise/morph ability, you can also pay the disguise cost/morph cost to turn it face up (of course, you won't see Morph in this set). The remaining rules of cloak are basically the same as disguise; you can refer to the disguise rules explanation.

Finally, here is a rule that is especially easy to confuse: what happens when you cloak a transforming double-faced card?
Face up/face down has nothing to do with the front and back faces of a transforming double-faced card. You can understand a transforming double-faced card as two cards with card backs used alternately, but they still have card backs and can be turned face down. When a transforming double-faced card becomes face down due to cloak or other reasons, it is no different from an ordinary card, and there is no rule that face down = transformed.

---

## Getting Ready for Murders at Karlov Manor

Murders at Karlov Manor prerelease sealed events start on February 2, 2024. Head to a nearby store to experience the new set!

![Final](https://images.guildmagesforum.tw/posts/MKM-mechanism/b706cdab331b.webp)

> Murders at Karlov Manor calendar:
> Feb 2 to 8 - Prerelease sealed events
> Feb 9 to 11 - Launch Party
> Feb 10 to Mar 31 - Lunar New Year Celebration events and Standard Showdown
> Feb 16 to 18 - Commander Party: Rogue's Passage
> Feb 9 - Murders at Karlov Manor release date
> Feb 23 to 25 - Ravnica: Clue Edition release celebration events
> Feb 24 - Ravnica: Clue Edition release
> Mar 3 to 10 - Store Championships
