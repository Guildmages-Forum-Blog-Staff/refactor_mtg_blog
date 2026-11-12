---
title: "Bloomburrow Mechanics Breakdown"
date: "2024-07-11 16:08:36"
categories:
  - "Limited"
  - "BLB"
authors:
  - "JruMTG"
cover: "https://images.guildmagesforum.tw/posts/BLB-mechanism/ade660052933-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/BLB-mechanism/ade660052933-cover.jpg"
excerpt: "Let's see what mechanics appear in Bloomburrow!"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../BLB-mechanism/).

## Offspring

![Offspring](https://images.guildmagesforum.tw/posts/BLB-mechanism/b41094c8e2f6.webp)

Offspring is an optional additional cost when casting a creature spell. If you choose to pay the offspring cost when casting this creature, a triggered ability goes off when the creature enters, creating a token copy of itself, but with base power and toughness of 1/1. (PS: A token creature made this way also copies the original's mana cost.)

Of course, because it creates an enters-the-battlefield triggered ability, cards like [Torpor Orb](https://scryfall.com/card/big/27/torpor-orb) and [Tishana's Tidebinder](https://scryfall.com/card/lci/81/tishanas-tidebinder) have room to interfere.

## Gift

![Gift](https://images.guildmagesforum.tw/posts/BLB-mechanism/9d29c0f18939.webp)

Gift is also an optional additional cost when casting a spell. If you choose to pay the gift cost when casting the spell, you choose an opponent, and when the spell resolves, the chosen opponent receives the corresponding benefit, and the spell also changes accordingly because you paid the gift cost. Take [Wear Down](https://scryfall.com/card/blb/203/wear-down) as an example: cast normally, it destroys one target artifact or enchantment, but if you paid the gift cost, you can destroy two target artifacts or enchantments, and your opponent draws a card because you chose to promise a gift.

Note that although you decide whether to pay the gift cost when casting, the cost is really just a promise, and that promise is only redeemed as an actual gift after the spell resolves. Suppose you announce you are paying the gift cost when casting [Wear Down](https://scryfall.com/card/blb/203/wear-down); at that moment it is only lip service, and your opponent doesn't draw a card because of it. If the spell ends up being countered, your opponent doesn't draw a card either.

Finally, let's go into detail on how gift actually delivers the gift to your opponent. Spells can be split into two groups: nonpermanent spells (that is, instants and sorceries) and permanent spells. For gift instants and sorceries, the gift is included in the spell's effect, and when the spell's effect is processed, the gift effect is performed first, then the spell's own abilities. For permanent spells, a triggered ability is created when the permanent enters, and the content of that triggered ability is the gift specified by gift.

## Valiant

![Valiant](https://images.guildmagesforum.tw/posts/BLB-mechanism/6bbfd144aa4f.webp)

Whenever a creature with valiant becomes the target of a spell or ability you control for the first time each turn, a triggered ability is created, and what that ability does depends on each card's own effect.

## Forage

![Forage](https://images.guildmagesforum.tw/posts/BLB-mechanism/f8241132bdff.webp)

Forage is a keyword action that means to exile three cards from your graveyard **or** sacrifice a Food.

## Expend

![Expend](https://images.guildmagesforum.tw/posts/BLB-mechanism/c167dc9150fa.webp)

Expend is always followed by a number N. Expend abilities track <font color="#FF0000">the cumulative total of mana spent to cast spells this turn</font>, and when the total cost you've paid to cast spells this turn reaches N, the condition for expend N is met.

Here are some details about expend:

- Expend N only triggers when you spend your Nth total mana, so expend N on a single permanent only triggers once per turn.
- A permanent with an expend ability must be on the battlefield to see you spend mana.
- Expend checks the record of all mana spent this turn, rather than counting from 0 after that permanent entered the battlefield.
- Expend only cares whether your mana was spent on casting a spell, not whether that spell has resolved or been countered.
- Any mana spent to cast a spell counts toward expend, including alternative costs, additional costs, and cost increase or reduction effects.

Take the expend 4 of [Junkblade Bruiser](https://scryfall.com/card/blb/220/junkblade-bruiser) as an example: since it is a five-mana card itself, if you spend five mana to cast it, you will already have passed the expend 4 checkpoint by the time it enters, so it can't possibly trigger its expend 4 ability this turn.

## Pawprints Season

![Pawprint](https://images.guildmagesforum.tw/posts/BLB-mechanism/ed39f38be7c6.webp)

This is a kind of modal spell where the same mode can be chosen multiple times, and each mode has a corresponding pawprint value (like an animal footprint 🐾, abbreviated P in English). You can choose any mode any number of times, but the total P value of the chosen modes must be less than or equal to 5. You can choose 1+1+3, 2+3, 1+1+1+2, and so on, flexibly adjusting the spell's abilities to the situation and finding the best play for the board.

PS: Multi-mode spells are always executed from top to bottom.

## Threshold

![Threshold](https://images.guildmagesforum.tw/posts/BLB-mechanism/fa081177ef4c.webp)

Threshold is a returning ability word. As long as you have seven or more cards in your graveyard, you meet the threshold condition.

## Class

![Class](https://images.guildmagesforum.tw/posts/BLB-mechanism/271201c8b714.webp)

Class is an enchantment subtype and also a returning mechanic, first appearing in [Adventures in the Forgotten Realms (AFR)](https://scryfall.com/sets/afr?as=grid&order=set).

Each Class has three tiers of class abilities, that is, Level 1, Level 2, and Level 3. Whatever your current class level is, the permanent has the class abilities of that level plus those of the lower levels before it. For example, if it is currently Level 1, it only has Level 1's abilities, and when the Class becomes Level 2, it has both Level 1 and Level 2's abilities. A Class always enters at Level 1, and to raise its class level you need to use the class level-up ability, which is the activated ability on the top row of each level.

There are a few more points to note about Classes:

- Class level-up abilities can only be activated at sorcery speed.
- A class level-up ability can only activate the option for the next level up: if it is currently Level 1 you can only go to Level 2, and if it is currently Level 3 you can no longer activate any class level-up abilities.
- Players usually like to use dice to mark the current class level, but the class level is a designation a permanent gains, not a counter, so unlike Sagas it can't interact with effects that add or remove counters.

## Get Ready for Bloomburrow

Bloomburrow's Prerelease sealed events begin on July 26, 2024, so head to a nearby store to experience the new set!

![Final](https://images.guildmagesforum.tw/posts/BLB-mechanism/bcdec90b0228.webp)

July 26 to August 1: Prerelease sealed events
August 2: Bloomburrow release day
August 2 to September 19: Standard Showdown
August 16 to August 22: Commander Celebration
August 24 to September 15: Store Championships
September 6 to September 12: Commander Celebration
September 13 to September 15: Open House
