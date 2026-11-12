---
title: "What Does \"End the Turn\" Mean?"
date: "2025-07-07 12:06:58"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/9f29d942bd73-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/9f29d942bd73-cover.jpg"
excerpt: "Why doesn't Heartfire Hero, destroyed by Ultima, deal damage to the opponent?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../What-does-End-this-Turn-Mean/).

## Introduction

Recent Standard sets have introduced one after another single cards with an **End the turn** effect, which has left many newcomers seeing this mechanic for the first time with plenty of questions. In this issue, let's look at how an End the turn effect is actually carried out.

![Introduction](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/ad10f15fb20f.webp)



---

## The "End the Turn" Rules Entry

Ending the turn is actually a procedure, and the specific rules entries are as follows:

- 722.1. Some cards instruct a player to end the turn. When an effect ends the turn, because this differs from the ordinary process of resolving spells and activated abilities, the following steps must be performed in order.
- 722.1a Any triggered abilities that have triggered but haven't yet been put on the stack before this process begins cease to exist. They won't be put on the stack. This rule doesn't apply to abilities that trigger during this process (see rule 722.1f).
- 722.1b Exile all objects on the stack, including the resolving object. All objects not on the battlefield or in the command zone and not represented by a card will cease to exist the next time state-based actions are checked (see rule 704, "[State-Based Actions](https://guildmagesforum.tw/en/What-is-SBA/)").
- 722.1c Check [state-based actions](https://guildmagesforum.tw/en/What-is-SBA/). No player gets priority, and no triggered abilities are put onto the stack.
- 722.1d The current phase or step ends. If this happens during the combat phase, remove all creatures and planeswalkers from combat. The game skips straight to the cleanup step. All phases and steps between the current phase or step and the cleanup step are skipped. If an effect ends the turn during the cleanup step, a new cleanup step begins.
- 722.1e Even though the turn ends, triggered abilities that trigger "at the beginning of the end step" won't trigger, because the end step has been skipped.
- 722.1f No player gets priority during the above process, so triggered abilities won't be put onto the stack. If any triggered abilities trigger after this process begins, they will be put onto the stack during the cleanup step, after which the active player will get priority and players have the chance to cast spells and activate abilities. Then, before the turn truly ends, another cleanup step is performed. If no triggered abilities trigger during this process, players won't get priority during the cleanup step. (See rule 514, "[Cleanup Step](https://guildmagesforum.tw/en/Round-Process/#cleanup-step)").

{% mtgpick "m21" 48 %}

In more intuitive terms, it exiles all spells and abilities on the stack and then skips the game ahead to that turn's [cleanup step](https://guildmagesforum.tw/en/Round-Process/#cleanup-step). So cards that can end the turn at instant speed are often used as a makeshift counterspell, because it exiles the entire stack. Even if the spell can't be countered, or has been copied 20 times on the stack by [Storm](https://guildmagesforum.tw/en/How-does-Storm-Work/), it can all be handled perfectly. Or you can end the turn during the opponent's upkeep step, so they don't even get the chance to draw a card before skipping that turn.

Of course, real cases are not always that simple, so let's go through specific situations to see how to handle the rules questions around End the turn effects.

> PS: These things are performed during the [cleanup step](https://guildmagesforum.tw/en/Round-Process/#cleanup-step):
●Discard cards in hand exceeding the maximum hand size
●Remove damage from creatures
●"Until end of turn" effects end



---

## "End the Turn" Rules Examples

![1](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/25b7cdea4ecc.webp)
> ● **[Sundial of the Infinite](https://scryfall.com/card/m12/218/sundial-of-the-infinite)**:
> {1}, {T}: End the turn. Activate only during your turn. 
> ● **[Kiki-Jiki, Mirror Breaker](https://scryfall.com/card/j22/79/kiki-jiki-mirror-breaker)**:
> {T}: Create a token that's a copy of target nonlegendary creature you control, except it has haste. Sacrifice it at the beginning of the next end step.

The token copied by Kiki must be sacrificed at the end step. This is a delayed triggered ability, and it does go on the stack. As mentioned above, an End the turn effect can be treated as a makeshift counterspell: when the ability to sacrifice this token triggers, you can respond to that ability by using Sundial of the Infinite to end the turn immediately, and so the token is successfully kept permanently.

>If you like to experience this play in Commander, [Obeka, Brute Chronologist](https://scryfall.com/card/cmr/289/obeka-brute-chronologist) is a good choice.





![2](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/ce9d6b68cad4.webp)
> ● **[Sundial of the Infinite](https://scryfall.com/card/m12/218/sundial-of-the-infinite)**:
> {1}, {T}: End the turn. Activate only during your turn. 
> ● **[Act of Treason](https://scryfall.com/card/m20/124/act-of-treason)**:
> Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn.

Since in the previous case an End the turn effect could be used to keep Kiki's token from being sacrificed, is there a chance to use the same trick to Act of Treason an opponent's creature and not have to return it to the opponent?

Unfortunately no. The two work on completely different logic. Kiki's token is sacrificed because of a triggered ability that triggers at the beginning of the end step; but Act of Treason returning the creature does not use the stack. Act of Treason sets the end time of the effect from the moment the effect takes hold, with the effect's duration being **"until end of turn"**, and one of the things performed in the [cleanup step](https://guildmagesforum.tw/en/Round-Process/#cleanup-step) is exactly **"until end of turn effects end"**. Ending the turn just skips the game's progress to the cleanup step, and since the cleanup step is not skipped, Act of Treason's effect is still terminated.





![3](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/3d4eb45eed1d.webp)
> ● **[Ultima](https://scryfall.com/card/fin/38/ultima)**:
> Destroy all artifacts and creatures. End the turn.
> ● **[Overlord of the Mistmoors](https://scryfall.com/card/dsk/23/overlord-of-the-mistmoors)**:
> Impending 4—{2}<font color="#FFC000">{W}{W}</font> (If you cast this spell for its impending cost, it enters with four time counters and isn't a creature until the last is removed. At the beginning of your end step, remove a time counter from it.)

I have an Overlord of the Mistmoors cast with impending on my battlefield, and it hasn't finished removing its time counters yet, so it is a noncreature enchantment. After I use Ultima to sweep the board and end the turn, can the impending Overlord remove a time counter?

If, on your own turn, you cast a card with an End the turn effect, the game goes straight to the cleanup step without passing through the end step, and abilities that trigger at the beginning of the end step won't trigger this turn. So when you play DSK's Overlord and also play Ultima, you have to weigh carefully whether you can accept the Overlord becoming a creature one turn later.

- 722.1e Even though the turn ends, triggered abilities that trigger "at the beginning of the end step" won't trigger, because the end step has been skipped.





![4](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/d8f70af517b9.webp)
> ● **[Ultima](https://scryfall.com/card/fin/38/ultima)**:
> Destroy all artifacts and creatures. End the turn.
> ● **[Enduring Curiosity](https://scryfall.com/card/dsk/51/enduring-curiosity)**:
> When Enduring Curiosity dies, if it was a creature, return it to the battlefield under its owner's control. It's an enchantment. (It's no longer a creature.)

After Ultima sweeps the board, can triggered abilities that trigger when creatures die resolve normally? This is probably the question most likely to be asked in the recent Standard environment.

Here we first need to add a concept, namely how triggered abilities work. A triggered ability's **"triggering"** and **"going on the stack"** are actually two separate things. The game constantly checks for any event that meets a triggered ability's trigger condition, and after that event happens, the triggered ability is **"triggered"**, but at this point it does not yet go on the stack, instead waiting in line outside the stack. When the game reaches a point where triggered abilities are allowed onto the stack (when a player would receive priority), these queued abilities are then all **"put on the stack"** together.

- 603.2. Whenever a game event or game state matches a triggered ability's trigger event, that ability automatically triggers. The ability doesn't do anything at this point.
- 603.3. Once an ability has triggered, its controller puts it on the stack as an object that's not a card the next time a player would receive priority. The ability becomes the topmost object on the stack. It has the text of the ability that created it, and no other characteristics. It remains on the stack until it's countered, it resolves, or an effect moves it elsewhere.

**<font color="#FF0000">Spell or ability resolves → check SBA → triggered abilities go on the stack → players get priority</font>**

Suppose that what destroys Enduring Curiosity is an ordinary creature removal spell, for example [Murder](https://scryfall.com/card/j25/467/murder). Then the flow would go like this:
Murder's effect is processed (Enduring Curiosity is destroyed) → the dies ability triggers and waits to go on the stack → Murder finishes resolving, and the card goes to the graveyard → check SBA → the triggered ability goes on the stack

Back to the original example, Ultima's spell resolution flow would be like this:
Destroy all artifacts and creatures (Enduring Curiosity is destroyed) → the dies ability triggers and waits to go on the stack → **End the turn**

Notice it? Enduring Curiosity's dies ability never even had time to go on the stack before the **"End the turn"** procedure cut in line and was processed, and that procedure contains this entry:

- 722.1a Any triggered abilities that have triggered but haven't yet been put on the stack before this process begins cease to exist. They won't be put on the stack.

The conclusion: Enduring Curiosity's dies ability evaporated into thin air. It hadn't gone on the stack, and it never will.

Finally, one more question: during resolution, will Ultima be exiled by its own End the turn procedure? An instant or sorcery's resolution can be understood as first performing all the effects in the spell in order, and once all are done the spell leaves the stack and goes to the graveyard. But Ultima performed the End the turn procedure partway through resolving its effects, and one of that procedure's steps is **"exile all objects on the stack"**, which includes itself, which hasn't yet left the stack. So any spell that ends the turn will exile itself.

- 608.2n As the final part of an instant or sorcery spell's resolution, the spell is put into its owner's graveyard. As the final part of an ability's resolution, the ability is removed from the stack and ceases to exist.
- 608.2m If an instant spell, sorcery spell, or ability is able to resolve fully, it will do so even if it leaves the stack partway through resolution.





![5](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/549ce87f3194.webp)
> ● **[Day's Undoing](https://scryfall.com/card/cmm/85/days-undoing)**:
> Each player shuffles their hand and graveyard into their library, then draws seven cards. If it's your turn, end the turn.
> ● **[Sheoldred, the Apocalypse](https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse)**:
> Whenever you draw a card, you gain 2 life.
Whenever an opponent draws a card, they lose 2 life.

When Sheoldred, the Apocalypse (Sheoldred for short) is on the battlefield and a player casts Day's Undoing, does that trigger Sheoldred's ability?

This question is actually no different from the previous one. After all players draw seven cards, the End the turn procedure is performed, and Sheoldred's ability disappears before it can go on the stack, after which Day's Undoing is exiled.





![6](https://images.guildmagesforum.tw/posts/What-does-End-this-Turn-Mean/cd2bd01120b9.webp)
> ● **[Day's Undoing](https://scryfall.com/card/cmm/85/days-undoing)**:
> Each player shuffles their hand and graveyard into their library, then draws seven cards. If it's your turn, end the turn.
> ● **[Grim Strider](https://scryfall.com/card/akh/94/grim-strider)**:
> Grim Strider gets -1/-1 for each card in your hand.
> ● **[The Meathook Massacre](https://scryfall.com/card/inr/122/the-meathook-massacre)**:
> Whenever a creature you control dies, each opponent loses 1 life.

In the End the turn procedure above, I believe the red-text portion is the one most people can't make sense of:

- 722.1a Any triggered abilities that have triggered but haven't yet been put on the stack before this process begins cease to exist. They won't be put on the stack. <font color="#FF0000">This rule doesn't apply to abilities that trigger during this process (see rule 722.1f)</font>

The "this process" defined in 722.1a refers to the entire "End the turn procedure". In other words, abilities may be triggered during the End the turn procedure, and what can cause this is this step:

- 722.1c Check [state-based actions (SBA)](https://guildmagesforum.tw/en/What-is-SBA/). No player gets priority, and no triggered abilities are put onto the stack.

Because an SBA check is performed, it may cause triggered abilities to meet their trigger conditions, and after triggering they wait to go onto the stack. In this example, after Day's Undoing makes every player's hand seven cards, Grim Strider becomes a 0/0 creature. Then, when the End the turn procedure reaches 722.1c, an SBA check is performed, and Grim Strider dies because its toughness is 0, which satisfies the trigger condition of The Meathook Massacre's ability. That ability triggers and waits to go onto the stack, but 722.1c also stresses that at this point no player gets priority and no triggered abilities are put onto the stack. Only when the End the turn procedure reaches the last step, 722.1f, does it say how this triggered ability should be handled:

- 722.1f No player gets priority during the above process, so triggered abilities won't be put onto the stack. If any triggered abilities trigger after this process begins, they will <font color="#FF0000">be put onto the stack during the cleanup step, after which the active player will get priority</font>, and players have the chance to cast spells and activate abilities. Then, before the turn truly ends, another cleanup step is performed. If no triggered abilities trigger during this process, players won't get priority during the cleanup step. (See rule 514, "[Cleanup Step](https://guildmagesforum.tw/en/Round-Process/#cleanup-step)").

Abilities triggered during the End the turn procedure are put on the stack in the cleanup step, and players get priority because of this, which is a very rare case of players getting priority in the cleanup step. After this cleanup step ends, the game enters a new cleanup step.



---

## Conclusion

"Directly exile what is on the stack, and what hasn't gone on the stack never will." Just remember this big idea, and questions about End the turn effects can mostly be handled.

This article was undoubtedly born because of [Ultima](https://scryfall.com/card/fin/38/ultima). It is my favorite card of this set, because in recent years the resistance of Standard creatures to destruction is mostly not designed as indestructible but as various leave-the-battlefield effects, such as DSK's various Enduring cards, [Unstoppable Slasher](https://scryfall.com/card/dsk/119/unstoppable-slasher), [Mosswood Dreadknight](https://scryfall.com/card/woe/231/mosswood-dreadknight-dread-whispers), [Heartfire Hero](https://scryfall.com/card/blb/138/heartfire-hero), and so on. From that angle, [Ultima](https://scryfall.com/card/fin/38/ultima)'s practical situations are not far from an exile sweeper, and most importantly, against Dimir, it won't be that after the sweep the opponent immediately flashes in a new threat and beats you down seamlessly.
<font color="#909090">(Another reason is that I'm a sweeper maniac to begin with)</font>

The [June 30, 2025 banned list update](https://magic.wizards.com/en/news/announcements/banned-and-restricted-june-30-2025) cut down almost every Unfair deck in the meta, and with this shake-up of the environment, midrange decks should return to the public eye, and the value of traditional main-deck sweepers is also expected to return to its former status. Being able to stare down death-trigger abilities, denying Dimir the chance to flash in new attackers to keep up its pace, and incidentally hitting artifacts: these advantages are expected to let [Ultima](https://scryfall.com/card/fin/38/ultima) find a unique competitiveness different from [Day of Judgment](https://scryfall.com/card/fdn/140/day-of-judgment) and [Sunfall](https://scryfall.com/card/mom/40/sunfall).

>Actually, when [Ultima](https://scryfall.com/card/fin/38/ultima) was first previewed, I considered pairing it with [Teferi, Time Raveler](https://scryfall.com/card/rvr/232/teferi-time-raveler) and playing Modern, but then FIN's [Saga rules change](https://guildmagesforum.tw/en/How-does-Urzas-Saga-Become-Blood-Moons-Friend/) happened, so if I want to play a sweeper I should obediently use [Wrath of the Skies](https://scryfall.com/card/mh3/49/wrath-of-the-skies) to guard against [Urza's Saga](https://scryfall.com/card/mh2/259/urzas-saga)...

{% mtgpick "fin" 38 %}
