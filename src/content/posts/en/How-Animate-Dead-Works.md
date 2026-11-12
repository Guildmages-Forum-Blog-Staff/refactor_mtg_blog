---
title: "How Does Animate Dead Work?"
date: "2023-12-04 13:40:18"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/48a58e0e11a3-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/48a58e0e11a3-cover.jpg"
excerpt: "Everyone knows the Animate Dead + Worldgorger Dragon combo, but ask how Animate Dead actually works and it may be a different story."
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-Animate-Dead-Works/).

## Before We Start

The combo of [Animate Dead](https://scryfall.com/card/ema/78/animate-dead) + [Worldgorger Dragon](https://scryfall.com/card/ema/154/worldgorger-dragon) is familiar to anyone who plays EDH, and it isn't hard to answer what Animate Dead ends up producing. But if you ask how the card actually works, and what happens during the reanimation process, quite a few people probably can't answer.

As a reanimation effect, Animate Dead's text is undoubtedly one of the longest. Such a long text indirectly reflects how complicated a procedure this card needs to guarantee rules rigor in order to achieve a seemingly simple result. In this issue, we'll look at the full working principle of Animate Dead, and at which points in it can be exploited or interfered with.

![Cover](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/48a58e0e11a3.webp)

---

## Reading the Rules of Animate Dead

First, let's see how the card face of [Animate Dead](https://scryfall.com/card/ema/78/animate-dead) describes its effect:

![Animate Dead](https://cards.scryfall.io/large/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.jpg?1580014163)

> Enchantment — Aura
>
> Enchant creature card in a graveyard
>
> When Animate Dead enters the battlefield, if it's on the battlefield, it loses "enchant creature card in a graveyard" and gains "enchant creature put onto the battlefield with Animate Dead." Return enchanted creature card to the battlefield under your control and attach Animate Dead to it. When Animate Dead leaves the battlefield, that creature's controller sacrifices it.
>
> Enchanted creature gets -1/-0.

The focus of this article is the reanimation effect, so we won't discuss the -1/-0 effect any further.

First, Animate Dead is very unique from its very first sentence: it attaches to a "creature card in a graveyard." Although this seems counterintuitive, it fully complies with the rules definition of Auras. When describing what an Aura can attach to, the rules say:

- 303.4 Some Enchantments have the Aura subtype. An Aura enters the battlefield attached to an object or player. What the Aura can be attached to is defined by its enchant keyword ability. Other effects can limit what a permanent can be enchanted by.
- 303.4a An Aura spell requires a target, which is defined by its enchant ability.

An "object" is not limited to permanents on the battlefield; cards in any other zone are objects too, and under the rules there is no problem with an Aura attaching to them. As for Auras that attach to players, the various Curses are the most common example.

![Curse](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/e6f5e6aac12d.webp)

An Aura needs a target when cast. Animate Dead's target when cast is a creature card in a graveyard. Now it has been cast successfully and Animate Dead has entered. Although Animate Dead is on the battlefield at this point, what it is attached to is still that creature card in the graveyard. Then Animate Dead begins to process its enters-the-battlefield ability.

> When Animate Dead enters the battlefield, if it's on the battlefield, it loses "enchant creature card in a graveyard" and gains "enchant creature put onto the battlefield with Animate Dead." Return enchanted creature card to the battlefield under your control and attach Animate Dead to it. When Animate Dead leaves the battlefield, that creature's controller sacrifices it.

The first thing Animate Dead does is "redefine what it can attach to," because once you've reanimated the creature onto the battlefield, it no longer fits the rule "creature card in a graveyard." When state-based actions find that an Aura isn't attached to a specified object, it is put into the graveyard. The specific rule is as follows:

- 704.5m If an Aura is attached to an illegal object or player, or is not attached to an object or player, that Aura is put into its owner's graveyard.

Only after changing its own attachment requirement does it formally pull the creature onto the battlefield, and re-attach Animate Dead to that creature that is now on the battlefield. At this point some readers might wonder: when Animate Dead redefines what it attaches to, that creature is still in the graveyard, so wouldn't the Aura be attached to an illegal object for a moment and destroy itself? This relates to one of the basic definitions of state-based actions:

- 704.4 Unlike triggered abilities, state-based actions pay no attention to what happens during the resolution of a spell or ability.

That is, while Animate Dead's enters-the-battlefield ability is resolving, state-based actions do no checks at all. Even if the attachment was illegal for a moment in the process, it doesn't matter, as long as the state after the ability resolves is legal.

The last step of Animate Dead's enters-the-battlefield ability is to create a delayed triggered ability: "When Animate Dead leaves the battlefield, that creature's controller sacrifices it." It is exactly this ability that gave rise to several infinite combos involving Animate Dead.

---

## Clearing Up Animate Dead's Rules

![Destroy](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/8d33f95fdef2.webp)

> [Return to Nature](https://scryfall.com/card/war/175/return-to-nature): Choose one —
> • Destroy target artifact.
> • Destroy target enchantment.
> • Exile target card from a graveyard.

Return to Nature alone covers four ways of interacting with Animate Dead:

1. After Animate Dead finishes reanimating, destroy Animate Dead:
This triggers "When Animate Dead leaves the battlefield, that creature's controller sacrifices it," which is effectively the same as removing that creature.

2. In response to Animate Dead being cast, exile the targeted creature card in the graveyard:
Without a doubt, Animate Dead loses its spell target and is countered by the rules, so it can't resolve successfully.

3. In response to Animate Dead's enters-the-battlefield ability, destroy Animate Dead:
If you remove Animate Dead before the creature has been reanimated, nothing happens afterward, and that creature card does not return to the battlefield.

4. In response to Animate Dead's enters-the-battlefield ability, exile the targeted creature card in the graveyard:
This is practically the same as 3: both stop that creature from returning to the battlefield, and when Animate Dead's enters-the-battlefield ability resolves, it destroys itself because it has no legal object to attach to.

Suppose the creature card Animate Dead targets is one you'll also be able to bring back from the graveyard later, and you don't want it to leave the graveyard, but you also don't want it to enter the opponent's battlefield even briefly (perhaps because it has a powerful enters-the-battlefield ability like [Atraxa, Grand Unifier](https://scryfall.com/card/one/196/atraxa-grand-unifier)). Then you can consider option 3.

![Animate Dead Shroud](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/0e8547c227d2.webp)

> [Simic Sky Swallower](https://scryfall.com/card/cmr/452/simic-sky-swallower): Shroud (This card can't be the target of spells or abilities.)

Although shroud means the card can't be the target of spells or abilities, this ability only works while it's on the battlefield. When Animate Dead is cast targeting Simic Sky Swallower, Simic Sky Swallower is still in the graveyard, so the cast is perfectly legal. Also, shroud only stops "becoming a target"; if an Aura is attached to it directly by other means, shroud has no say, and the second half of Animate Dead's enters-the-battlefield ability is exactly of this kind.

![Animate Dead Protection from Black](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/0babecaa3588.webp)

> [Apostle of Purifying Light](https://scryfall.com/card/m20/6/apostle-of-purifying-light): Protection from black (This card can't be blocked, targeted, dealt damage, or enchanted by anything black.)

Protection from black is a little more complicated than shroud above. First, as for becoming a target, protection from black likewise only works while the card is on the battlefield, so casting Animate Dead targeting Apostle of Purifying Light in the graveyard is legal. But once Apostle of Purifying Light enters the battlefield, protection from black takes effect: Animate Dead is put into the graveyard by state-based actions because its attachment is illegal, and triggers Animate Dead's delayed triggered ability, "When Animate Dead leaves the battlefield, that creature's controller sacrifices it." When this ability resolves, Apostle of Purifying Light is sacrificed.

![Animate Dead ETB](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/288dd4c7aa6d.webp)

> [Elesh Norn, Mother of Machines](https://scryfall.com/card/one/10/elesh-norn-mother-of-machines): Permanents entering the battlefield don't cause abilities of permanents your opponents control to trigger.

Animate Dead's ability is an enters-the-battlefield ability, so naturally there is room to tamper with it. For example, if your opponent controls Elesh Norn, Mother of Machines and you cast Animate Dead targeting a creature in your graveyard, Animate Dead's enters-the-battlefield ability won't trigger. Your creature can't return to the battlefield, but Animate Dead won't leave either. Since its rules were never rewritten by the enters-the-battlefield ability, Animate Dead keeps its original ability: an Aura that stays on the battlefield, attached to that creature in the graveyard.

![Animate Dead Counter](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/acfbac5df50c.webp)

> [Tale's End](https://scryfall.com/card/m20/77/tales-end): Counter target activated ability, triggered ability, or legendary spell.

Of course, countering Animate Dead's enters-the-battlefield triggered ability achieves the same result as the Elesh Norn example above.

---

## Animate Dead Combos

![Animate Dead Worldgorger Dragon](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/12b397e0d5e7.webp)

> [Worldgorger Dragon](https://scryfall.com/card/ema/154/worldgorger-dragon):
> When Worldgorger Dragon enters the battlefield, exile all other permanents you control.
> When Worldgorger Dragon leaves the battlefield, return the exiled cards to the battlefield under their owners' control.

Animate Dead + Worldgorger Dragon is Animate Dead's most iconic combo. Cast Animate Dead targeting the Worldgorger Dragon in the graveyard; after the Dragon enters, it exiles your other permanents, including Animate Dead. When Animate Dead leaves, it triggers its own leave-the-battlefield ability, sacrificing the Dragon, and when the Dragon leaves the battlefield it returns all the permanents it exiled to the battlefield, including Animate Dead. An Aura that enters the battlefield directly without being cast with a chosen target is attached to a legal object according to rule 303.4f. The object chosen at this point is the Dragon already sacrificed into the graveyard, and from here a new round of the cycle begins. This forms a loop that can be an infinite controllable loop.

In each loop, besides infinitely triggering enters-the-battlefield and leaves-the-battlefield abilities, every permanent returned to the battlefield by the Dragon enters in its natural state. For lands that don't enter tapped, you can first produce mana and then let the land be exiled, and when it returns you can produce mana again, forming infinite mana. When you want to stop the loop, just switch Animate Dead's attachment to a creature card in the graveyard other than the Dragon.

- 303.4f If an Aura is entering the battlefield under a player's control by any means other than by resolving as an Aura spell, and the effect putting it onto the battlefield doesn't specify the object or player the Aura will enchant, that player chooses what it will enchant as the Aura enters the battlefield. The player must choose a legal object or player according to the Aura's enchant ability and any other applicable effects.

Note, though, that the Dragon's enter and leave abilities are two independent triggered abilities. If your Dragon is removed in response while its enters-the-battlefield ability hasn't yet resolved, the leaves-the-battlefield ability resolves first, but at that point none of your cards have been exiled by the Dragon, so naturally nothing enters. Then the enters-the-battlefield ability resolves and exiles all your other permanents, and those permanents (including lands) are stuck in exile from then on.

![Animate Dead Cat](https://images.guildmagesforum.tw/posts/How-Animate-Dead-Works/f6b86f49d844.webp)

> [Leonin Relic-Warder](https://scryfall.com/card/c17/65/leonin-relic-warder):
> When Leonin Relic-Warder enters the battlefield, you may exile target artifact or enchantment.
> When Leonin Relic-Warder leaves the battlefield, return the exiled card to the battlefield under its owner's control.

Leonin Relic-Warder is essentially similar to the Dragon: both repeatedly exile Animate Dead and put it back onto the battlefield. But unlike the Dragon, which gorgeously drags all your permanents into the show every time, Leonin Relic-Warder and Animate Dead are just two cards bouncing back and forth. This process triggers infinite permanent enters-the-battlefield and leaves-the-battlefield abilities. To turn it into a win condition you need a third card, for example pairing with [Altar of the Brood](https://scryfall.com/card/ugin/216/altar-of-the-brood) for an infinite mill.

---

## Conclusion

Animate Dead is a veteran card that has been around since Alpha. Magic's early rules differed considerably from today's, and weren't as rigorous as they are now. To satisfy today's rules framework without betraying the original design intent, Animate Dead's rules text has become as unusually long as a reading comprehension test. Yet precisely because of this, many interesting applications were born, and after understanding the details of how Animate Dead works you will also discover points of interference you never imagined before. This is the fun behind studying card rules in depth.
