---
title: "When Do Triggered Abilities Check Their Conditions?"
date: "2023-11-27 12:13:39"
cover: "https://images.guildmagesforum.tw/posts/Trigger-Check/63c79b4b6302-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Trigger-Check/63c79b4b6302-cover.jpg"
excerpt: "Under what conditions can a triggered ability go on the stack or resolve successfully?"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Trigger-Check/).

## Before We Start

Triggered abilities, one of the three major categories of abilities in MTG, are used in almost every game, but have you ever had these questions while playing:

Does this ability only go on the stack if its condition is met?
Or does it go on the stack regardless and check the condition on resolution??
Or does it stop caring whether its source is alive once it is on the stack???

In fact, all of the cases above exist, and what decides the difference is sometimes just a single English word. In this issue, let's look at how to read the condition text of triggered abilities!

![Cover](https://images.guildmagesforum.tw/posts/Trigger-Check/840fb96579f8.webp)

---

## Principles for Checking Triggered Ability Conditions

First, we can boil the problem down to the following two questions:

- What condition must this triggered ability meet to go on the stack?
- Must this triggered ability meet a condition to resolve successfully?

Some may think: what a silly question! The condition rules are written right on the card, how could you not understand them? True, but if you do not know that certain words are not natural language but terms specially defined for rules text, you really cannot see the difference between two different wordings.

This kind of problem most often arises in the following two situations:

- Triggered abilities worded with **"if."**
- The source of a triggered ability moves between zones between going on the stack and resolving (for example, it gets hit by a removal spell in response).

Let's first lay out the rules that serve as the tools for solving these problems:

- 113.7
  The source of an ability is the object that generated it. The source of an activated ability on the stack is the object that activated it. The source of a triggered ability (other than a delayed triggered ability) on the stack, or one that has triggered and is waiting to be put on the stack, is the object whose ability triggered.

- 113.7a
  Once activated or triggered, an ability exists on the stack independently of its source. Destroying or removing the source after that time won't affect the ability.
  Note that some abilities cause a source to do something, rather than the ability doing it directly. In these cases, any activated or triggered ability that references information about the source for use while announcing an activated ability or putting a triggered ability on the stack checks that information when the ability is put onto the stack. Otherwise, it will check that information when it resolves. In both instances, if the source is no longer in the zone it's expected to be in, its last known information is used. The source can still perform the action even though it no longer exists.

- 603.4
  A triggered ability may read "When/Whenever/At [trigger event], if [condition], [effect]." When the trigger event occurs, the ability checks whether the stated condition is true. The ability triggers only if it is; otherwise it does nothing. If the ability triggers, it checks the stated condition again as it resolves. If the condition isn't true at that time, the ability is removed from the stack and does nothing. Note that this mirrors the check for legal targets. This rule is referred to as the "intervening 'if' clause" rule. (The word "if" has only its normal English meaning anywhere else in a card's rules text; this rule only applies to an "if" that immediately follows a trigger condition.)

With these tools we can answer our questions. Naturally this rulebook, which reads like some mix of plain speech and classical writing, is not that easy to read, so next let's go through examples to see how the game handles triggered abilities.

## Triggered Ability Examples

![Ferocious](https://images.guildmagesforum.tw/posts/Trigger-Check/2aacdcc4dd94.webp)

> [Ruby, Daring Tracker](https://scryfall.com/card/woe/212/ruby-daring-tracker): Whenever Ruby attacks while you control a creature with power 4 or greater, Ruby gets +2/+2 until end of turn.
> [Heir of the Wilds](https://scryfall.com/card/ktk/134/heir-of-the-wilds): Ferocious — Whenever Heir of the Wilds attacks, **if** you control a creature with power 4 or greater, Heir of the Wilds gets +1/+1 until end of turn.

Ruby and Heir of the Wilds both have a triggered ability on attack that gives an extra stat boost if you control a creature with power 4 or greater. What they share is that you must already control a creature with power 4 or greater when attacking for the ability to go on the stack, and what differs is: when the ability resolves, do you still control a creature with power 4 or greater?

Suppose when the ability triggers you control only one creature with power 4 or greater, and that creature is destroyed before the ability resolves. Ruby's ability only cares whether the trigger condition was met to go on the stack, and once it is on the stack, under rule 113.7a it does not matter if the source disappears afterward. Heir of the Wilds is different. Its ability text uses **"if,"** which is the situation governed by rule 603.4, so when the ability resolves it checks again whether you meet the condition, and if the condition is not met at that point, the ability is removed from the stack and does not resolve successfully.

![Coven](https://images.guildmagesforum.tw/posts/Trigger-Check/1afdf6d1bebc.webp)

> [Halana and Alena, Partners](https://scryfall.com/card/vow/239/halana-and-alena-partners): At the beginning of combat on your turn, put X +1/+1 counters on another target creature you control, where X is Halana and Alena's power.
> [Dawnhart Wardens](https://scryfall.com/card/mid/216/dawnhart-wardens): Coven — At the beginning of combat on your turn, if you control three or more creatures with different powers, creatures you control get +1/+0 until end of turn.

Suppose at the beginning of combat you control Halana and Alena + Dawnhart Wardens + a creature with power 3. Can you order the stack yourself so that you first use Halana and Alena's ability to grow another creature, and then have Dawnhart Wardens see that you have three creatures with different powers, so that the Coven ability triggers?

The answer is no, because rule 603.4 specifies that the condition must be met first for the ability to go on the stack. That means at the beginning of combat, the only ability that goes on the stack is Halana and Alena's, and Dawnhart Wardens does not trigger any ability at that time.

![Jace](https://images.guildmagesforum.tw/posts/Trigger-Check/902a7088e698.webp)

> [Jace, Mirror Mage](https://scryfall.com/card/cmm/852/jace-mirror-mage): When Jace, Mirror Mage enters, if he was kicked, create a token that's a copy of him, except it's not legendary and its starting loyalty is 1.
> [Eliminate](https://scryfall.com/card/m21/97/eliminate): Destroy target creature or planeswalker with mana value 3 or less.

When my opponent's Jace, Mirror Mage enters, do I have a chance, while the triggered ability that makes the copy is on the stack and priority passes, to destroy the original Jace with Eliminate before the ability resolves?

That depends on whether the opponent kicked it. If the opponent kicked it when casting, then yes, it is possible, but if the opponent did not kick it, this Jace is just like an ordinary planeswalker: it triggers no ability when it enters, and there is no priority passing.

![Test of Endurance](https://images.guildmagesforum.tw/posts/Trigger-Check/e907370d8ea0.webp)
[Test of Endurance](https://scryfall.com/card/dmr/32/test-of-endurance): At the beginning of your upkeep, **if** you have 50 or more life, you win the game.
[Renewed Faith](https://scryfall.com/card/dmr/23/renewed-faith): You gain 6 life.

If you want to use Test of Endurance's special win ability, you must already have at least 50 life at the beginning of your upkeep, and only then does Test of Endurance's ability go on the stack. If you have only 45 life at the beginning of your upkeep and plan to use Renewed Faith to instantly gain life past 50 to meet the special win condition, that is useless this turn, because Test of Endurance's ability never went on the stack. Even if you have 51 life at the beginning of your upkeep, so that Test of Endurance's ability goes on the stack successfully, if your opponent responds before it resolves by burning you down to 48 life with [Lightning Bolt](https://scryfall.com/card/clb/187/lightning-bolt), then during the check when it tries to resolve, the ability will find that you do not meet the condition, and will likewise be removed and not resolve successfully. In practice, though, the one doing the resolution condition check is Test of Endurance's ability, not the Test of Endurance enchantment itself, so suppose you successfully get the ability on the stack: even if your opponent responds by destroying Test of Endurance with [Disenchant](https://scryfall.com/card/m20/14/disenchant), your ability can still resolve and make you win the game directly.

![Throwing Knife](https://images.guildmagesforum.tw/posts/Trigger-Check/383a9bea4518.webp)

> [Throwing Knife](https://scryfall.com/card/ori/241/throwing-knife): Whenever equipped creature attacks, you may sacrifice Throwing Knife. If you do, Throwing Knife deals 2 damage to any target.
> [Dismiss into Dream](https://scryfall.com/card/m14/50/dismiss-into-dream): Each creature your opponents control is an Illusion in addition to its other types and has "When this creature becomes the target of a spell or ability, sacrifice it."

When your creature equipped with Throwing Knife attacks and triggers Throwing Knife's ability, the game asks you to choose a target, but the ability on the stack at that point is "you may sacrifice Throwing Knife." Only when the ability resolves do you choose whether to sacrifice Throwing Knife. If you choose not to sacrifice it, nothing happens, and if you choose to sacrifice it, it immediately deals 2 damage to that target, with no window in between to respond.

However, whether or not you choose to sacrifice Throwing Knife, the ability requires you to choose a target when it triggers. Suppose you have Dismiss into Dream: the moment you choose an opponent's creature as the target, that creature triggers the ability granted by Dismiss into Dream and sacrifices itself, so you can get rid of that creature without ever throwing the knife. The combination of [Lorthos, the Tidemaker](https://scryfall.com/card/cmm/103/lorthos-the-tidemaker) + [Willbreaker](https://scryfall.com/card/ori/84/willbreaker) works on the same principle as Throwing Knife + Dismiss into Dream.

![Dinosaurs](https://images.guildmagesforum.tw/posts/Trigger-Check/c7a69224fd78.webp)

> [Ghalta, Stampede Tyrant](https://scryfall.com/card/lci/185/ghalta-stampede-tyrant): When Ghalta enters, put any number of creature cards from your hand onto the battlefield.
> [Palani's Hatcher](https://scryfall.com/card/lci/237/palanis-hatcher): When Palani's Hatcher enters, create two 0/1 green Dinosaur Egg creature tokens.
> [Earthshaker Dreadmaw](https://scryfall.com/card/lci/183/earthshaker-dreadmaw): When Earthshaker Dreadmaw enters, draw a card for each other Dinosaur you control.

Suppose I start with an empty board, and now Ghalta, Stampede Tyrant enters and triggers its ability, putting Palani's Hatcher and Earthshaker Dreadmaw from my hand onto the battlefield together. How many cards can I draw with Earthshaker Dreadmaw's ability? Can I change the number of cards drawn by ordering the stack myself?

If you are still looking for where the **"if"** is in this question, congratulations, you do not have to look: this is just an ordinary triggered ability seen everywhere, with no connection to rule 603.4. The only trigger condition of Earthshaker Dreadmaw's ability is that it enters, and how many cards are drawn is not defined at that moment. The number of other Dinosaurs you control is only checked when the ability resolves, and Palani's Hatcher's enter-the-battlefield Dinosaur token ability triggers at exactly the same time as Earthshaker Dreadmaw's, so you can order them on the stack yourself, and if you want to draw more cards you put Hatcher's token-making ability to resolve first. Of course, your opponent can also respond to your draw ability by instantly removing a few other Dinosaurs so you draw fewer cards when it resolves.

![Archangel of Wrath](https://images.guildmagesforum.tw/posts/Trigger-Check/6850741e00d2.webp)

> [Archangel of Wrath](https://scryfall.com/card/dmu/3/archangel-of-wrath): Flying, lifelink
> When Archangel of Wrath enters, if it was kicked, it deals 2 damage to any target.
> When Archangel of Wrath enters, if it was kicked twice, it deals 2 damage to any target.
> [Go for the Throat](https://scryfall.com/card/bro/102/go-for-the-throat): Destroy target nonartifact creature.

Suppose I cast my Archangel of Wrath with kicker paid once, and when it enters I choose a target to deal 2 damage to. Because Archangel of Wrath has lifelink, when this damage is dealt I also gain 2 life, but suppose my opponent responds to this ability by destroying my Archangel of Wrath with Go for the Throat. Does that mean I cannot gain the life?

First, even if Archangel of Wrath is destroyed in response, the ability that deals 2 damage does not disappear. I think everyone is fine with this, commonly known as the hand grenade effect. The key point is that my Archangel of Wrath with lifelink is no longer on the battlefield, so can I still gain life from this damage? Let's revisit the rules:

- 113.7a
  Once activated or triggered, an ability exists on the stack independently of its source. Destroying or removing the source after that time won't affect the ability.
  Note that some abilities cause a source to do something, rather than the ability doing it directly. In these cases, any activated or triggered ability that references information about the source for use while announcing an activated ability or putting a triggered ability on the stack checks that information when the ability is put onto the stack. Otherwise, it will check that information when it resolves. In both instances, **if the source is no longer in the zone it's expected to be in, its last known information is used.** The source can still perform the action even though it no longer exists.

If Archangel of Wrath is still on the battlefield when the kicker ability resolves, then of course you can gain life through lifelink, but suppose Archangel of Wrath is already dead when the kicker ability resolves: the game tracks Archangel of Wrath's **last known information** on the battlefield, and that last known information includes the lifelink characteristic. That is, even if the opponent destroys it in response to your enter-the-battlefield ability, you can still gain life.

---

## Conclusion: Watch the Timing of the Check

Triggered abilities are mostly quite intuitive in how they handle condition checks, and normally cause no trouble in a game. The only special case is the "intervening 'if' clause," buried among countless triggered abilities with a difference of just one English word. A slight lapse in attention can make you get the conditions for going on the stack and resolving wrong. From now on when you look at a triggered ability, take a moment to notice: does this ability have a different condition because of "if"? Sometimes one more window to respond can change the course of the game through play.
