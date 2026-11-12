---

title: "FINAL FANTASY Mechanics Breakdown"
date: "2025-05-15 14:10:44"
authors:
  - "JruMTG"
categories:
  - "Limited"
  - "FIN"
cover: "https://images.guildmagesforum.tw/posts/FIN-mechanism/4c240b4e1bb6-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/FIN-mechanism/4c240b4e1bb6-cover.jpg"
excerpt: "Let's see what mechanics appear in Final Fantasy!"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../FIN-mechanism/).

## Transform Double-Faced Cards (TDFC)

![Double Faced Cards](https://images.guildmagesforum.tw/posts/FIN-mechanism/a08b3dc63e17.webp)

Transform double-faced cards (TDFCs) have two faces: the front has an upward-pointing arrow symbol in the top left corner, and the back has a downward-pointing arrow symbol in the top right corner.

A TDFC has only its front-face characteristics in any zone other than the battlefield and the stack. On the battlefield or the stack, if it is face up, it has only its front-face characteristics; if it is face down, it has only its back-face characteristics. However, since a TDFC's back face has no mana cost, there are two special cases:
- A TDFC on its back face calculates its mana value (Mana Value) based on the front face's mana cost.
- A TDFC on its back face determines its color characteristics from the leftmost color indicator in the back face's type line.
> Take the example card [Cecil](https://scryfall.com/card/fin/91/cecil-dark-knight-cecil-redeemed-paladin): the front is a black creature with mana value 1, named Cecil, Dark Knight. The back is a white creature with mana value 1, named Cecil, Redeemed Paladin.

Normally, when you cast a TDFC spell, you cast its front face (other sets have special mechanics that let you cast the back face, but there are no such cards in this set). When you put a TDFC permanent onto the battlefield from any zone, it enters front face up by default, unless an effect specifically says to put the card onto the battlefield **"transformed"**, in which case it enters back face up.

Most TDFCs come with an ability that lets them transform (Transform), flipping the card to the other face. A permanent that transforms does not leave the battlefield, and any counters on it, any Auras/Equipment attached to it, and any effects affecting it are all retained.




## Saga Creatures

![Saga Creature](https://images.guildmagesforum.tw/posts/FIN-mechanism/c4dbf5a2a125.webp)

Sagas are a subtype of enchantment with their own special rules. Although Sagas have become a semi-evergreen mechanic that shows up every year in recent years, this set brings a rather groundbreaking innovation in Saga design: all Sagas in this set are also creatures, which means they must follow the rules for both Sagas and creatures.

On the left side of a Saga are chapters marked with Roman numerals (I, II, III, IV ...), and each chapter has a corresponding triggered ability (chapter ability). When a Saga enters the battlefield, or at the beginning of your precombat main phase (First Main Phase), a lore counter (Lore Counter) is put on that Saga. Whenever a lore counter is put on a Saga, the chapter ability of the chapter equal to the number of lore counters triggers.

If the number of lore counters on a Saga is greater than or equal to the number of its final chapter, and there are no triggered abilities on the stack from that Saga as the source, that Saga is sacrificed.
(In plain words, the Saga is sacrificed when its final chapter ability resolves.)

> From this you can derive a few tricks. Suppose you have a way to return your own permanent at instant speed, like [Sunpearl Kirin](https://scryfall.com/card/tdm/29/sunpearl-kirin) or [This Town Ain't Big Enough](https://scryfall.com/card/otj/74/this-town-aint-big-enough). You can respond to your own Saga's final chapter ability by bouncing that Saga to your hand first; the chapter ability still resolves normally, but you have bypassed the event of the Saga being sacrificed.

In some special situations, you may put multiple lore counters on a Saga at once. In that case, not only the chapter the Saga finally reaches triggers, but the chapters it passes along the way also trigger together, and you can freely order those chapter abilities on the stack.
>For example: you have a [Doubling Season](https://scryfall.com/card/fdn/216/doubling-season) on the battlefield, and then you have a Saga enter. It will enter with two lore counters, and the chapter I & II abilities trigger together, and you order them on the stack yourself.


{% folding blue :: FIN Saga Rules Change %}

Previously, if a Saga lost all abilities for some reason, it was treated as a Saga with a final chapter of 0 and was sacrificed in the [SBA (state-based actions)](https://mtg.fandom.com/wiki/State-based_action) check. A classic example is [Urza's Saga](https://scryfall.com/card/mh2/259/urzas-saga) + [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon), but this rules interaction is very unintuitive, and with the arrival of Saga creatures in this set, situations where a Saga loses all abilities will come up more often.

Starting with this set, the official rules for Sagas losing abilities have changed. The new rule is as follows:
If a Saga loses its chapter abilities, it will not be sacrificed by state-based actions (lore counters >= final chapter number), nor will it receive lore counters from the turn-based action (at the beginning of the precombat main phase), until it has chapter abilities again.

![Rule Cgamge](https://images.guildmagesforum.tw/posts/FIN-mechanism/a34509ce2dfa.webp)

{% endfolding %}


## Adventure

![Adventure](https://images.guildmagesforum.tw/posts/FIN-mechanism/dde748f7c682.webp)

Adventure is also a returning mechanic. The permanent types of the Adventure cards in this set are all lands, with the Town subtype.

An Adventure card consists of two parts: the permanent part that is the card itself, and the Adventure (instant/sorcery) part at the lower left.

When you use an Adventure card, you can choose to use it normally as a permanent, or cast the Adventure's instant/sorcery spell. When you choose to use it as a permanent, you can completely ignore the Adventure half's characteristics, as if you were using a normal permanent card.

You can also choose to cast the Adventure spell. It goes on the stack as an instant/sorcery spell and has the characteristics specified by the Adventure (name, cost, etc.). When that Adventure spell resolves, it doesn't go to the graveyard but to exile, and afterwards, as long as the card remains exiled, you can use the permanent part of this card from exile. Whether you use the permanent side or the Adventure side, you must follow the timing restrictions for that kind of card.

In addition, an Adventure card in any zone other than the stack has only the characteristics of its permanent side. If an effect lets you search your library for an instant/sorcery card, you can't find an Adventure card.

>Adventure and the [Omen](https://guildmagesforum.tw/en/TDM-mechanism/#omen) mechanic from **Tarkir: Dragonstorm** have card frames with the exact same art style, but the rules of the two are not the same, so you need to check the type line carefully.



## Job Select

![Job Select](https://images.guildmagesforum.tw/posts/FIN-mechanism/ed3982bc528a.webp)

Job select is a triggered ability unique to Equipment in this set. When an Equipment with job select enters the battlefield, create a 1/1 colorless Hero creature token, then attach that Equipment to it.

If the job select ability is responded to and the Equipment leaves the battlefield before this ability resolves, you still create a 1/1 token.




## Tiered

![Tiered](https://images.guildmagesforum.tw/posts/FIN-mechanism/3b67650304ac.webp)

A tiered spell has three options, each with a corresponding additional cost. When you cast a tiered spell, you must choose one of them and pay the specified additional cost, and then the spell has the effect you chose.

Take [Fire Magic](https://scryfall.com/card/fin/136/fire-magic) as an example. Its base cost is {R}, which you must pay no matter what, and then you choose which additional cost to use, with these three options:

- *Fire* — {0} — Deals 1 damage to each creature.
- *Fira* — {2} — Deals 2 damage to each creature.
- *Firaga* — {5} — Deals 3 damage to each creature.

If you choose *Fire*, the additional cost required is {0}, so you only need to pay {R} total to cast this spell; if you choose *Firaga*, you need to pay {5}{R} to cast it. But no matter which you choose, this spell's mana value (Mana Value) is determined by the spell's base characteristics, that is, **1**; additional costs paid to cast a spell don't change its mana value. In addition, this spell's name is always **[Fire Magic](https://scryfall.com/card/fin/136/fire-magic)**, and the option prefixes *Fire*, *Fira*, and *Firaga* are just flavor text with no rules meaning.




---

## Set Symbols

![Expansion Symbol](https://images.guildmagesforum.tw/posts/FIN-mechanism/e28ab3c4a162.webp)

- **FIN:** This Final Fantasy standard set.

- **FIC:** The Commander set, which does not affect the card pool available in Standard, Pioneer, or Modern.

- **FCA:** All are alternate-art reprints of old cards that can be opened in regular booster packs and are usable in Limited. FCA reprints do not change a card's legality in any format.




---

## Final Fantasy Calendar

The Final Fantasy prerelease sealed events begin on June 6, 2025. Head to a nearby store to experience the new set!

May 30: Full card reveal
June 6 - June 12: FINAL FANTASY prerelease
June 13: FINAL FANTASY release day
June 13 - July 24: Magic: The Gathering Academy
June 13 - July 24: Standard Showdown
June 13 - July 24: Magic Presents: Chocobo Racing
June 20 - June 22: MagicCon - Las Vegas
June 20 - June 26: Commander Celebration
June 27: FINAL FANTASY Gift Bundle release day
June 27 - June 29: Magic: The Gathering Spotlight - FINAL FANTASY
June 28 - July 20: Magic: The Gathering Store Championship - FINAL FANTASY
July 18 - July 24: Commander Celebration




![END](https://images.guildmagesforum.tw/posts/FIN-mechanism/9997c25814da.webp)
