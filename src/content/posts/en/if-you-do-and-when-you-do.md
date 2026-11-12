---
title: "If you do vs. When you do"
date: 2023-09-12 19:31:13
cover: "https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/0855b4c08d88-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/66f3f24e8bf2-cover.jpg"
excerpt: "Let's talk about the rules difference created by a single word: If you do versus When you do"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../if-you-do-and-when-you-do/).

This time let's talk about a rather tricky wording topic: what exactly is the difference between "If you do" and "When you do"?

This kind of wording shows up on spells, activated abilities, and triggered abilities, and it is most common on triggered abilities.

These effects first ask whether you perform some action, or simply have you perform it, and if you did, a follow-up effect happens. However, there are two ways the rules text can phrase the follow-up effect:

- **If** you do
- **When** you do

Today we'll analyze the difference between the two, and what exactly these effects look like on the stack. Since triggered abilities are the most common case and the most likely to cause rules questions in actual play, the rest of this article uses triggered abilities for its explanations.

![Mentor of the Meek](https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/bdb66f6f581a.webp)

![Cemetery Desecrator](https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/78b2bafa64f0.webp)

---

## If you do

- Wording: 1. You may perform action A. **If** you do, effect B happens. 2. Perform action A. **If** you do, effect B happens.

- Result: 1. **The option to perform A** goes on the stack. When that ability resolves on the stack, you choose whether to perform A, and **if** you choose to perform A, effect B happens immediately, with no window for anyone to respond in between. 2. **Performing A** goes on the stack. If A can be performed, it must be, and **if** you performed A, effect B happens immediately, with no window for anyone to respond in between.

- Examples:
  [Mentor of the Meek](https://scryfall.com/card/m19/27/zht/%E9%A6%B4%E8%89%AF%E6%98%8E%E5%B8%AB): You may pay {1}. **If** you do, draw a card.
  [Kozilek's Return](https://scryfall.com/card/ogw/98/zht/%E5%AF%87%E5%9F%BA%E9%9B%B7%E5%86%8D%E8%87%A8): You may exile Kozilek's Return from your graveyard. **If** you do, Kozilek's Return deals 5 damage to each creature.
  [Dreadfeast Demon](https://scryfall.com/card/m19/27/zht/%E9%A6%B4%E8%89%AF%E6%98%8E%E5%B8%AB): At the beginning of your end step, sacrifice a non-Demon creature. **If** you do, create a token that's a copy of Dreadfeast Demon.

![If you do](https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/f52520543ede.webp)

For the "If you do" wording, let's look at a concrete scenario.

Suppose you have [Selfless Spirit](https://scryfall.com/card/clb/706/zht/%E7%84%A1%E7%A7%81%E7%B2%BE%E9%9D%88) and other creatures on your side of the battlefield, and the opponent has [Kozilek's Return](https://scryfall.com/card/ogw/98/zht/%E5%AF%87%E5%9F%BA%E9%9B%B7%E5%86%8D%E8%87%A8) in their graveyard. Now the opponent casts [Void Winnower](https://scryfall.com/card/bfz/17/zht/%E8%99%9B%E7%A9%BA%E7%AF%A9%E9%99%A4%E9%AB%94) from hand, which triggers the ability of [Kozilek's Return](https://scryfall.com/card/ogw/98/zht/%E5%AF%87%E5%9F%BA%E9%9B%B7%E5%86%8D%E8%87%A8) in the graveyard **(You may exile Kozilek's Return from your graveyard. If you do, Kozilek's Return deals 5 damage to each creature)**.

The ability now on the stack is **"You may exile Kozilek's Return from your graveyard"**. The opponent only needs to wait until this ability resolves to choose whether to exile the card. But if you want to use [Selfless Spirit](https://scryfall.com/card/clb/706/zht/%E7%84%A1%E7%A7%81%E7%B2%BE%E9%9D%88)'s ability to give all your creatures indestructible, you need to respond to the **"whether to exile this card"** ability by activating [Selfless Spirit](https://scryfall.com/card/clb/706/zht/%E7%84%A1%E7%A7%81%E7%B2%BE%E9%9D%88) first. If you don't make your creatures indestructible at this point, then when the [Kozilek's Return](https://scryfall.com/card/ogw/98/zht/%E5%AF%87%E5%9F%BA%E9%9B%B7%E5%86%8D%E8%87%A8) ability resolves, if the opponent chooses to exile it from the graveyard, the 5 damage is dealt to all creatures immediately, and you have no chance to activate [Selfless Spirit](https://scryfall.com/card/clb/706/zht/%E7%84%A1%E7%A7%81%E7%B2%BE%E9%9D%88)'s ability. Conversely, if you respond by first activating [Selfless Spirit](https://scryfall.com/card/clb/706/zht/%E7%84%A1%E7%A7%81%E7%B2%BE%E9%9D%88)'s team-wide indestructible ability, the opponent can choose not to exile the card from the graveyard when the [Kozilek's Return](https://scryfall.com/card/ogw/98/zht/%E5%AF%87%E5%9F%BA%E9%9B%B7%E5%86%8D%E8%87%A8) ability resolves. That way the opponent has freeloaded off one of your [Selfless Spirit](https://scryfall.com/card/clb/706/zht/%E7%84%A1%E7%A7%81%E7%B2%BE%E9%9D%88)s and still keeps the option of sweeping with [Kozilek's Return](https://scryfall.com/card/ogw/98/zht/%E5%AF%87%E5%9F%BA%E9%9B%B7%E5%86%8D%E8%87%A8) for 5 damage, just waiting until the next time the trigger condition is met.

![Kozilek's Return example](https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/c4f232a25233.webp)

---

## When you do

- Wording: 1. You may perform action A. **When** you do, effect B happens. 2. Perform action A. **When** you do, effect B happens.

- Result: 1. **The option to perform A** goes on the stack. When that ability resolves on the stack, you choose whether to perform A, and **when** you choose to perform A, a new ability B is created and put on the stack, and ability B can be responded to. 2. **Performing A** goes on the stack. If A can be performed, it must be, and **when** you performed A, a new ability B is created and put on the stack, and ability B can be responded to.

- Examples:
  [Halo Forager](https://scryfall.com/card/mom/227/halo-forager): You may pay {X}. **When** you do, you may cast target instant or sorcery card with mana value X from a graveyard without paying its mana cost.
  [The Restoration of Eiganjo (Chapter II)](https://scryfall.com/card/neo/34/the-restoration-of-eiganjo-architect-of-restoration): You may discard a card. **When** you do, return target permanent card with mana value 2 or less from your graveyard to the battlefield tapped.
  [Cemetery Desecrator](https://scryfall.com/card/vow/100/cemetery-desecrator): When this enters or dies, exile another card from a graveyard. **When** you do, choose one (the rest omitted).

![When you do](https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/77ea19f940d9.webp)

The main difference between "When you do" and "If you do" is whether the follow-up effect B creates a new stack object that can be responded to. If you think this is just a word game that's easy to mix up, remember that in MTG, whenever you see "When", it is often accompanied by a triggered ability that goes on the stack.

This isn't just a memory trick, though; it's how the game actually works. These effects really do create a new triggered ability, or, more precisely, a [reflexive triggered ability](https://mtg.fandom.com/wiki/Triggered_ability). For the rule on it, see [rule 603.12](https://mtg.fandom.com/wiki/Triggered_ability).

Let's look at another scenario to cement the idea.

Suppose the opponent has [The Restoration of Eiganjo](https://scryfall.com/card/neo/34/the-restoration-of-eiganjo-architect-of-restoration) on their side and you have [Unlicensed Hearse](https://scryfall.com/card/snc/246/unlicensed-hearse) on yours. The opponent's [The Restoration of Eiganjo](https://scryfall.com/card/neo/34/the-restoration-of-eiganjo-architect-of-restoration) triggers its Chapter II ability **(You may discard a card. When you do, return target permanent card with mana value 2 or less from your graveyard to the battlefield tapped)**.

The ability now on the stack is **"You may discard a card"**. At this point the opponent doesn't need to decide whether to discard yet, and no card in a graveyard is being targeted. You can of course still respond by activating [Unlicensed Hearse](https://scryfall.com/card/snc/246/unlicensed-hearse)'s ability or doing anything else you can do at instant speed, but it probably doesn't mean much, because the opponent only chooses whether to discard when **"You may discard a card"** resolves.

If the opponent chooses not to discard, this chapter ability ends there and there is no follow-up effect. If the opponent chooses to discard, a new triggered ability is created: **"Return target permanent card with mana value 2 or less from your graveyard to the battlefield tapped"**. That ability chooses a legal target and then goes on the stack, and you can respond by activating [Unlicensed Hearse](https://scryfall.com/card/snc/246/unlicensed-hearse)'s ability to exile the targeted card in the graveyard, precisely disrupting the opponent's graveyard recursion plan.

This two-part ability wording is also the reason [The Restoration of Eiganjo](https://scryfall.com/card/neo/34/the-restoration-of-eiganjo-architect-of-restoration) can recover the very card it discarded: the card is discarded before the first part has chosen any target, and by the time the second part asks you to choose a target, the card is already in the graveyard. [Victimize](https://scryfall.com/card/cmr/157/victimize), on the other hand, can't do this, because the graveyard target has already been chosen before you sacrifice a creature, so the creature you sacrifice isn't a selectable target in the graveyard.

![The Restoration of Eiganjo example](https://images.guildmagesforum.tw/posts/if-you-do-and-when-you-do/515e45eb8acc.webp)

---

## Stay Sensitive to Rules Wording

This rules analysis stems from just a one-word difference, yet the outcomes are completely different. These subtle differences in rules understanding can become the deciding factor in whether you win or lose a match.

When reading a card's effect, it's worth thinking a little harder: can you fully state everything the card says? What are the choices made before it goes on the stack? What are the choices made on resolution? What is on the stack? Are there follow-up effects and new stack objects after it resolves? Admittedly these details aren't easy to chew through, but once you work them out, you'll see a boundless world open up.

Many situations where you used to just stare helplessly while your opponent acted will now look to you like windows where you can step in; conversely, you might also lose a game you could have won because of insufficient understanding of such a small rules detail. Both scenarios above are like this: they are problems I personally saw players call a judge over to resolve while taking part in competitive-level events, and in both stories it was precisely the player with the advantage who, unfamiliar with the rules, responded incorrectly and was then turned around and beaten by the opponent.
