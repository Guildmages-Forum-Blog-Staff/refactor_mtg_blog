---

title: "What Are State-Based Actions (SBA)?"
date: "2025-07-01 09:48:17"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/What-is-SBA/803681e17a86-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/What-is-SBA/803681e17a86-cover.jpg"
excerpt: "Using Lightning Bolt or Fatal Push to kill Dauthi Voidwalker: why does Lightning Bolt get exiled while Fatal Push doesn't?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../What-is-SBA/).

## Introduction

The topic this time is SBA, short for [State-Based Actions](https://mtg.fandom.com/wiki/State-based_action).

SBA can be called MTG's background program: it constantly checks the current game state, and when certain events occur, it carries out the corresponding result. A simple example is a creature with toughness ≤0 dying.

SBA is one of the foundations that lets MTG's rules run rigorously, and its descriptions are almost indistinguishable from real programming logic. SBA also affects every format, and many fine details of play can only be executed with an understanding of SBA. A classic case is the difference when [Dauthi Voidwalker](https://scryfall.com/card/mh2/81/dauthi-voidwalker) meets [Lightning Bolt](https://scryfall.com/card/2x2/117/lightning-bolt) versus [Fatal Push](https://scryfall.com/card/2xm/93/fatal-push); a correct understanding of SBA is an unavoidable part of improving your skill.

![封面](https://images.guildmagesforum.tw/posts/What-is-SBA/25039d8ecc51.webp)

---

## Definition of the State-Based Action Rules

As said above, SBA is like a background program, and SBA does not use the stack to operate.

- 704.1 State-based actions are game actions that happen automatically whenever certain conditions (listed below) are met. State-based actions don't use the stack.
- 704.2 State-based actions are checked throughout the game and are not controlled by any player.

Although SBA is checked throughout the game, it isn't checked at every moment; the SBA check happens at specified times:

- 704.3 Whenever a player would receive priority, the game checks for any of the listed conditions for state-based actions, then performs all applicable state-based actions simultaneously as a single event. If any state-based actions are performed as a result of a check, the check is repeated; otherwise all triggered abilities that are waiting to be put on the stack are put on the stack, then the check is repeated. Once no more state-based actions are performed as the result of a check and no triggered abilities are waiting to be put on the stack, the appropriate player gets priority. This process also happens during the cleanup step, except that if the first check of the cleanup step performs no state-based actions and no triggered abilities are waiting to be put on the stack, then no player gets priority and the step ends.

This rule is a mouthful. Setting aside a few special cases, the simplified version is: before a player would receive priority, SBA is checked first, then triggered abilities are put on the stack, and only after that does the player get priority.

- 704.4 Unlike triggered abilities, state-based actions pay no attention to what happens during the resolution of a spell or ability.

Questions about SBA are most often born from this rule. What does it mean that nothing is checked during the resolution of a spell or ability? Let's look at the simplest example:

![SBA](https://images.guildmagesforum.tw/posts/What-is-SBA/1902d977bdeb.webp)
> - [Biomathematician](https://scryfall.com/card/stx/164/biomathematician):
> When Biomathematician enters the battlefield, create a 0/0 green and blue Fractal creature token. Put a +1/+1 counter on each Fractal you control.

- 704.5f If a creature has toughness 0 or less, it's put into its owner's graveyard. Regeneration can't replace this event.

When the Fractal token is created, it isn't a 0/0 creature that enters with a +1/+1 counter on it; it really is created as a 0/0 first, and only then does the +1/+1 counter get put on it. If SBA were checked at every moment, this Fractal would evaporate the instant it entered; it's precisely because SBA isn't checked in the middle of a spell or ability's resolution that Biomathematician's ability works.

Putting the above rules together, we get a flow, which is an extremely important underlying rule of how MTG operates. I strongly recommend memorizing it!

**<font color="#FF0000">Spell or ability resolves → check SBA → triggered abilities go on the stack → player gets priority</font>**

---

## State-Based Action Rule Entries

This section excerpts some of the more commonly used SBA entries and sorts them a bit; for the complete SBA rules, please refer to the [original rules text](https://mtg.fandom.com/wiki/State-based_action).




{% notel blue Losing the Game %}

- 704.5a If a player has 0 or less life, that player loses the game.
- 704.5b If a player attempted to draw a card from a library with no cards in it since the last time state-based actions were checked, that player loses the game.
- 704.5c If a player has ten or more poison counters, that player loses the game. (PS: Two-Headed Giant or other special formats may modify this rule)

{% endnotel %}




{% notel blue Tokens and Copies %}

- 704.5d If a token is in a zone other than the battlefield, it ceases to exist.
- 111.8. A token that has left the battlefield can't move to another zone or come back onto the battlefield. If such a token would change zones, it remains in its current zone instead. It ceases to exist the next time state-based actions are checked.
- 704.5e If a copy of a spell is in a zone other than the stack, it ceases to exist. If a copy of a card is in any zone other than the stack or the battlefield, it ceases to exist.
 
{% endnotel %}




{% notel blue Permanents Going to the Graveyard %}

- 704.5f If a creature has toughness 0 or less, it's put into its owner's graveyard. Regeneration can't replace this event.
- 704.5g If a creature has toughness greater than 0, it has damage marked on it, and the total damage marked on it is greater than or equal to its toughness, that creature has been dealt lethal damage and is destroyed. Regeneration can replace this event.
- 704.5h If a creature has toughness greater than 0, and it's been dealt damage by a source with deathtouch since the last time state-based actions were checked, that creature is destroyed. Regeneration can replace this event.
- 704.5i If a planeswalker has loyalty 0, it's put into its owner's graveyard.
- 704.5v If a battle has defense 0 and it isn't the source of an ability that has triggered but not yet left the stack, it's put into its owner's graveyard.
- 704.5s If the number of lore counters on a Saga permanent with one or more chapter abilities is greater than or equal to the greatest chapter number among its chapter abilities, and it isn't the source of a chapter ability that has triggered but not yet left the stack, that Saga's controller sacrifices it.
- 704.5j If two or more legendary permanents with the same name are controlled by the same player, that player chooses one of them, and the rest are put into their owners' graveyards. This is called the "legend rule."

{% endnotel %}




{% notel blue Attachment %}

- 704.5m If an Aura is attached to an illegal object or player, or is not attached to an object or player, that Aura is put into its owner's graveyard.
- 704.5n If an Equipment or Fortification is attached to an illegal permanent or to a player, it becomes unattached from that permanent or player. It remains on the battlefield.
- 704.5p If a battle or creature is attached to an object or player, it becomes unattached and remains on the battlefield. Similarly, if a permanent that's neither an Aura, an Equipment, nor a Fortification is attached to an object or player, it becomes unattached and remains on the battlefield.
> PS: [Fortification](https://scryfall.com/card/fut/167/darksteel-garrison) is an extremely obscure subtype and can basically be ignored.

{% endnotel %}




{% notel blue Commander %}

- 704.6c In a Commander game, a player who's been dealt 21 or more combat damage by the same commander over the course of the game loses the game.
- 704.6d In a Commander game, if a commander is in a graveyard or in exile and that object was put into that zone since the last time state-based actions were checked, its owner may put it into the command zone.

{% endnotel %}




{% notel blue Other %}

- 704.5q If a permanent has both a +1/+1 counter and a -1/-1 counter on it, N +1/+1 counters and N -1/-1 counters are removed from it, where N is the smaller of the number of +1/+1 counters and -1/-1 counters on it.
- 704.8 If a state-based action results in a permanent leaving the battlefield at the same time other state-based actions were performed, that permanent's last known information is determined by the game state before any of those state-based actions were performed.

{% endnotel %}



---

## State-Based Action Rule Examples


![1](https://images.guildmagesforum.tw/posts/What-is-SBA/5869a2c1e0ab.webp)
> ● [Psychosis Crawler](https://scryfall.com/card/mkc/234/psychosis-crawler):
> Psychosis Crawler's power and toughness are each equal to the number of cards in your hand.
> ● [Wheel of Fate](https://scryfall.com/card/tsr/198/wheel-of-fate):
> Each player discards their hand, then draws seven cards.

Although Wheel of Fate leaves players with zero cards in hand for a moment, which means Psychosis Crawler is a 0/0 at that point, this happens in the middle of the spell's resolution, so SBA doesn't see that Psychosis Crawler's toughness is 0. When Wheel of Fate finishes resolving, you have 7 cards in hand, and then the SBA check begins; at that point Psychosis Crawler is a 7/7 and doesn't die.





![2](https://images.guildmagesforum.tw/posts/What-is-SBA/25039d8ecc51.webp)
> ● [Lightning Bolt](https://scryfall.com/card/2x2/117/lightning-bolt):
> Lightning Bolt deals 3 damage to any target.
> ● [Fatal Push](https://scryfall.com/card/2xm/93/fatal-push):
> Destroy target creature if it has mana value 2 or less.
> ● [Dauthi Voidwalker](https://scryfall.com/card/mh2/81/dauthi-voidwalker):
> If a card would be put into an opponent's graveyard from anywhere, instead exile it with a void counter on it.

Suppose the opponent controls Dauthi Voidwalker and I use Lightning Bolt or Fatal Push on it. Dauthi Voidwalker is obviously doomed, but the question is: does my removal spell go to the graveyard or get exiled?

When an instant or sorcery spell resolves, it handles all its effects first and only then goes to the graveyard, so the full order is:
Instant/sorcery effect resolves → instant/sorcery card goes to the graveyard → check SBA → triggered abilities go on the stack → player gets priority

If I use Fatal Push, Dauthi Voidwalker is already destroyed while the effect is being processed, so by the time Fatal Push goes to the graveyard it doesn't see Dauthi Voidwalker's ability. Lightning Bolt, on the other hand, makes Dauthi Voidwalker take lethal damage, but SBA isn't checked during a spell's resolution; that means that when Lightning Bolt's effect finishes and it's about to go to the graveyard, Dauthi Voidwalker is still standing on the battlefield, so my Lightning Bolt is exiled instead of going to the graveyard, and only after that does Dauthi Voidwalker die to SBA.





![3](https://images.guildmagesforum.tw/posts/What-is-SBA/01d317a8c9e4.webp)
> ● [Cunning Strike](https://scryfall.com/card/frf/150/cunning-strike):
> Cunning Strike deals 2 damage to target creature and 2 damage to target player. Draw a card.
> ● [Annihilate](https://scryfall.com/card/ema/79/annihilate):
> Destroy target nonblack creature. It can't be regenerated. Draw a card.
> ● [Spirit of the Labyrinth](https://scryfall.com/card/bng/27/spirit-of-the-labyrinth):
> Each player can't draw more than one card each turn.

This turn I've already drawn a card, and the opponent controls Spirit of the Labyrinth. After I use Cunning Strike or Annihilate to remove Spirit of the Labyrinth, can I draw a card?

This is actually much the same as the previous example, just expanded to a situation during the spell's resolution.

When using Annihilate, Spirit of the Labyrinth is already dead by the time the effect processes the destruction, so the following draw isn't prevented. But with Cunning Strike, after damage is dealt it is merely marked on Spirit of the Labyrinth, and at that moment Spirit of the Labyrinth is still alive, so you can't draw; only after the spell finishes resolving does Spirit of the Labyrinth die to the SBA check.





{% mtgpick "kld" 114 %}
> ● [Fateful Showdown](https://scryfall.com/card/kld/114/fateful-showdown):
> Fateful Showdown deals damage to any target equal to the number of cards in your hand. Discard all the cards in your hand, then draw that many cards.

Suppose my library and my opponent's life total are both 3, and I currently have 5 cards in hand. I cast Fateful Showdown targeting the opponent; how is the winner determined on resolution? Since the damage to the opponent happens first, does the opponent lose before I draw?

- 704.5a If a player has 0 or less life, that player loses the game.
- 704.5b If a player attempted to draw a card from a library with no cards in it since the last time state-based actions were checked, that player loses the game.

Whether it's life ≤0 or losing from drawing from an empty library, both are handled by SBA, and SBA doesn't operate during a spell's resolution. After Fateful Showdown resolves, SBA checks the current game state and finds that both players lose the game at the same time, so the game is a draw.

- 104.4a If all remaining players lose the game simultaneously, the game is a draw.





![4](https://images.guildmagesforum.tw/posts/What-is-SBA/26623d059b7b.webp)
> ● [Death's Shadow](https://scryfall.com/card/2xm/82/deaths-shadow):
> Death's Shadow gets -X/-X, where X is your life total.

This is also a classic Death's Shadow question. Suppose my life is currently 12 and I control a Death's Shadow (with size 1/1). The opponent attacks me with two vanilla 3/3 creatures, and I have Death's Shadow block one of the 3/3s. After damage is dealt, is Death's Shadow still alive?

The [Combat Damage Step](https://guildmagesforum.tw/en/Round-Process/#combat-damage-step) works as follows:

Damage is dealt → check SBA → triggered abilities go on the stack → player gets priority

When damage is dealt, Death's Shadow takes 3 damage and my life drops to 9. Because Death's Shadow's static ability is checked at all times, it instantly becomes a 4/4 creature. Then the SBA check comes: at this point Death's Shadow is a 4-toughness creature with 3 damage marked on it, so it doesn't die.

However, at the moment damage was dealt, Death's Shadow was still a 1/1 creature, so it only deals 1 damage to the opponent's creature.



![5](https://images.guildmagesforum.tw/posts/What-is-SBA/4432c99bfb34.webp)
> ● [The Cruelty of Gix](https://scryfall.com/card/dmu/87/the-cruelty-of-gix):
> A Saga
> ● [Sunpearl Kirin](https://scryfall.com/card/tdm/29/sunpearl-kirin):
> Flash
When this creature enters, return up to one other target nonland permanent you control to its owner's hand. If it was a token, draw a card.
> ● [Defabricate](https://scryfall.com/card/bro/45/defabricate):
> Counter target activated or triggered ability.

A Saga dying is also handled by SBA. Because the Saga is only sacrificed after the final chapter ability on the stack resolves, you can respond to the final chapter ability with some instant-speed way to bounce a permanent and get a free ride out of the Saga once; this little trick has been common since Sagas were first introduced.

- 704.5s If the number of lore counters on a Saga permanent with one or more chapter abilities is greater than or equal to the greatest chapter number among its chapter abilities, and it isn't the source of a chapter ability that has triggered but not yet left the stack, that Saga's controller sacrifices it.

Suppose the opponent's The Cruelty of Gix has triggered its final chapter ability, the ability has chosen its targets and gone on the stack, and then they respond to their own ability by flashing in Sunpearl Kirin, choosing the Saga to bounce with its enter ability. You have a counterspell in hand that can counter a triggered ability; what should you do to maximize your gain?

Directly countering Sunpearl Kirin's ETB can certainly stop the Saga from returning to hand, but the final chapter ability still resolves successfully. The smarter play here is to counter the Saga's chapter triggered ability.

Let's recap: there are two conditions for a Saga to be sacrificed. The first is lore counters ≥ the final chapter number, which is already satisfied; the one not yet satisfied is the other condition, **"it isn't the source of a chapter ability that has triggered but not yet left the stack"**. As long as you counter that ability and make it disappear from the stack, the Saga is immediately sacrificed by SBA, and Sunpearl Kirin's target is left with nothing.





![6](https://images.guildmagesforum.tw/posts/What-is-SBA/b37368057c84.webp)
> ● [Necromantic Selection](https://scryfall.com/card/tdc/189/necromantic-selection):
> Destroy all creatures, then return a creature card put into a graveyard this way to the battlefield under your control. It's a black Zombie in addition to its other colors and types. Exile Necromantic Selection.
> ● [Yuriko, the Tiger's Shadow](https://scryfall.com/card/cmm/364/yuriko-the-tigers-shadow):
> An opponent's commander.

Yuriko, the Tiger's Shadow is the opponent's commander and is currently on the battlefield. Now I sweep the board with Necromantic Selection and plan to grab Yuriko. Can the opponent choose to return Yuriko to the command zone when she goes to the graveyard to dodge this?

Although when we normally play EDH it feels like a commander returning to the command zone is a top-priority option that can't be stopped, a commander returning to the command zone from the graveyard/exile is actually implemented by SBA:

- 704.6d In a Commander game, if a commander is in a graveyard or in exile and that object was put into that zone since the last time state-based actions were checked, its owner may put it into the command zone.

However, Necromantic Selection grabs Yuriko from the graveyard onto its controller's battlefield during its own effect processing, and the SBA check only comes after the spell finishes resolving. At that point the commander is still on the battlefield, and SBA can't send it back to the command zone.

> A small EDH rules supplement:
Although a commander returning home from the graveyard/exile works through SBA, returning from hand/library relies on a replacement effect, which acts the instant the zone-change event happens, modifying where the commander goes.
> - 903.9b If a commander would be put into its owner's hand or library from anywhere, its owner may put it into the command zone instead.





![7](https://images.guildmagesforum.tw/posts/What-is-SBA/e01cdee1cae7.webp)
> ● [Young Wolf](https://scryfall.com/card/inr/227/young-wolf):
> Undying (When this creature dies, if it had no +1/+1 counters on it, return it to the battlefield under its owner's control with a +1/+1 counter on it.)
> ● [Skinrender](https://scryfall.com/card/2x2/91/skinrender):
> When Skinrender enters the battlefield, put three -1/-1 counters on target creature.

Suppose Young Wolf currently has a +1/+1 counter on it, and now Skinrender enters, putting three -1/-1 counters on Young Wolf and causing it to die. Does undying trigger?

You're surely familiar with +1/+1 and -1/-1 counters canceling each other out, but this too is implemented by SBA. Also, a creature with toughness ≤0 dying is likewise operated by SBA, which means Skinrender's ETB now causes two SBA actions at once, and this affects whether Young Wolf meets undying's trigger condition.

- 704.5f If a creature has toughness 0 or less, it's put into its owner's graveyard. Regeneration can't replace this event.
- 704.5q If a permanent has both a +1/+1 counter and a -1/-1 counter on it, N +1/+1 counters and N -1/-1 counters are removed from it, where N is the smaller of the number of +1/+1 counters and -1/-1 counters on it.

Some may think of the replacement-effect rule where the affected object's controller chooses the order of effects, but SBA is not a replacement effect, and it has its own operating rule:

- 704.8 If a state-based action results in a permanent leaving the battlefield at the same time other state-based actions were performed, that permanent's last known information is determined by the game state before any of those state-based actions were performed.

According to 704.8, Young Wolf leaves the battlefield because of 704.5f (toughness ≤0) while 704.5q (the +/- counters canceling) is being performed at the same time, so Young Wolf's last known information is the state before the -1/-1 counters were put on it. That is, undying judges that Young Wolf died with a +1/+1 counter on it, so undying doesn't trigger.



---

## Conclusion

SBA looks unremarkable, or perhaps entirely a matter of course, but the rules questions that derive from it are, I'd say, the cases I see most often. Precisely because it's so fundamental, explaining quite a few questions requires coming back to SBA, or more specifically, to the entire flow from a spell/ability resolving to a player getting priority.

**<font color="#FF0000">Spell or ability resolves → check SBA → triggered abilities go on the stack → player gets priority</font>**

I'm currently sitting on several half-finished rules articles, and quite a few of them involve the concept of this flow. Without exaggeration, it's because so many articles need to cite the concept of SBA that I prioritized writing this one. So once more, I strongly recommend engraving this flow deeply in your mind.
