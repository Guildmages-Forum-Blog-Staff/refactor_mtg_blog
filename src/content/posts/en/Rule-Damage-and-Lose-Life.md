---
title: "Damage and Life"
date: "2023-11-06 18:07:26"
cover: "https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/c89c6b760695-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/c89c6b760695-cover.jpg"
excerpt: "What happens between being dealt damage and the final result? And what is the difference between preventing damage and being unable to lose life?"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Rule-Damage-and-Lose-Life/).

## Before We Start

If you're dealt damage, you lose life. That sounds perfectly normal, right?

But being dealt damage and losing life are not completely equivalent. The reason you lose life isn't necessarily damage, and being dealt damage doesn't necessarily make you lose life. So how do the damage rules actually work, and how do they turn into the results we end up seeing? Let's find out!

![Cover](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/89854cab275a.webp)

---

## Basic Damage Rules

First, let's quickly go over a summary of the damage rules. For more detail, see: [Full damage rules](https://mtg.fandom.com/wiki/Damage).

What can be dealt damage?

- Damage can be dealt to players, creatures, planeswalkers, and battles. The object that deals the damage is the source of that damage.

The possible **results** of damage:

- Damage dealt to a player by a source without infect causes that player to lose that much life.
- Damage dealt to a player by a source with infect causes the source's controller to give that player that many poison counters.
- Combat damage dealt to a player by a source with toxic, in addition to the damage's other effects, causes that player to get a number of poison counters equal to the number specified by the ability.
- Damage dealt to a planeswalker causes that planeswalker to remove that many loyalty counters.
- Damage dealt to a battle causes that battle to remove that many defense counters.
- Damage dealt to a creature by a source without infect or wither causes that much damage to be marked on the creature.
- Damage dealt to a creature by a source with infect or wither causes the source's controller to put that many -1/-1 counters on that creature.
- Damage dealt by a source with lifelink, in addition to the damage's other effects, causes that source's controller to gain that much life.

The four steps of damage processing:

- 1.**Calculate excess damage**: If an effect says that excess damage dealt to a permanent is instead dealt to another permanent or a player, the damage event is modified in the following way depending on the conditions:
  ⭐ If the permanent is a creature, excess damage is the amount of damage beyond lethal damage, taking into account the damage already marked on that creature and damage that other sources are about to deal to it at the same time.
  ⭐ If the source dealing damage to the creature has deathtouch, any damage beyond 1 is excess damage.
  ⭐ If the permanent is a planeswalker, excess damage is the amount of damage beyond the number of loyalty counters on that planeswalker, taking into account damage that other sources are about to deal to it at the same time.
  ⭐ If the permanent is a battle, excess damage is the amount of damage beyond the number of defense counters on that battle, taking into account damage that other sources are about to deal to it at the same time.
  ⭐ If the permanent has multiple card types, excess damage is the greatest value among the excess damage defined for each type.
- 2.**Damage is dealt**, and replacement and prevention effects related to damage affect that damage. Abilities that trigger when damage is dealt trigger at this time and wait to be put on the stack.
- 3.The damage dealt is **turned into its results**, and replacement and prevention effects related to the results affect them (for example, gaining life or counters).
- 4.The damage event happens.

Those four steps are the complete damage processing procedure. Step **1** defines how excess damage is handled and step **4** just wraps up the whole process, so to discuss how damage really works, we need to focus on steps **2 & 3**.

At step **2**, the damage has already been dealt, and abilities that prevent damage from being dealt also take effect at step **2**. However, the result of the damage hasn't been settled yet. In step **3**, the damage is converted into the corresponding result. For a player, the most common result is losing life, but if the attacking creature has infect, the result of that damage is poison counters instead of life loss.

Normally, the result of damage dealt to a creature is damage being marked on that creature. This is what we mean in casual speech when we say a creature has accumulated some amount of damage. The specific rules for marked damage are:

- Damage marked on a creature stays on that permanent until the cleanup step of the current turn, even if it stops being a creature. If the total damage marked on a creature is greater than its toughness, that creature has been dealt lethal damage and is destroyed as a state-based action. All damage marked on a permanent is removed when it regenerates and during the cleanup step.

---

## Damage Events in Practice

Now let's go through detailed explanations with concrete examples. Beneath each example image there is a short translation of the effects. We won't translate every effect in full, only the text relevant to the rules in this article.

### Being Dealt Damage vs. Losing Life

![Damage vs. life](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/ab47d7a63573.webp)

> [The Wanderer](https://scryfall.com/card/war/37/the-wanderer): Prevent all noncombat damage that would be dealt to you and other permanents you control.
> [Lightning Bolt](https://scryfall.com/card/2x2/117/lightning-bolt): Lightning Bolt deals 3 damage to any target.
> [Sovereign's Bite](https://scryfall.com/card/m19/120/sovereigns-bite): Target player loses 3 life and you gain 3 life.

Normally, damage dealt to a player makes that player lose that much life.
The Wanderer prevents all noncombat damage dealt to you, so if you control The Wanderer, the damage from Lightning Bolt to you is prevented, and naturally you won't lose life if the damage is prevented. Sovereign's Bite, on the other hand, makes you lose life directly. It has nothing to do with damage, so even with The Wanderer you can't stop it.

![Kingpin](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/fdb4b7c4da9f.webp)

> [Ob Nixilis, Captive Kingpin](https://scryfall.com/card/mat/41/ob-nixilis-captive-kingpin): Whenever one or more opponents each lose exactly 1 life, this ability triggers.
> [Okiba Reckoner Raid](https://scryfall.com/card/neo/117/okiba-reckoner-raid-nezumi-road-captain) (Chapters I & II): Each opponent loses 1 life and you gain 1 life.
> [Kumano Faces Kakkazan](https://scryfall.com/card/neo/152/kumano-faces-kakkazan-etching-of-kumano) (Chapter I): Deals 1 damage to each opponent and each planeswalker they control.

Ob Nixilis's ability only cares whether an opponent lost exactly 1 life. It doesn't care how that 1 life was lost, so for the two Sagas above, Chapter I of either Okiba Reckoner Raid (lose 1 life) or Kumano Faces Kakkazan (deal 1 damage) satisfies the condition.

### Preventing Damage vs. Being Unable to Lose Life

![The Ring](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/516e125552eb.webp)

> [Questing Beast](https://scryfall.com/card/eld/171/questing-beast): Combat damage that would be dealt by creatures you control can't be prevented.
> [The One Ring](https://scryfall.com/card/ltr/246/the-one-ring): When The One Ring enters, if you cast it, you gain protection from everything until your next turn.
> [Platinum Emperion](https://scryfall.com/card/uma/233/platinum-emperion): Your life total can't change. (You can't gain or lose life. You can't pay any amount of life except 0.)

Protection from XX includes preventing damage from XX sources, so The One Ring's protection from everything includes preventing all damage.

Besides preventing damage, there is another, more direct way to stop you from losing life: simply writing "you can't lose life." Platinum Emperion's "your life total can't change" contains both "can't gain life" and "can't lose life."

Now suppose an opponent attacks you with Questing Beast, and you have either The One Ring (which came into play last turn and gave you protection from everything) or Platinum Emperion. Will you lose life? Although protection from everything prevents all damage that would be dealt to you, Questing Beast makes combat damage unpreventable, so the protection is useless here, and you still take combat damage and thus lose life. Platinum Emperion is a bit more impressive. Its ability doesn't prevent any damage. Questing Beast really does deal combat damage to you, but when that damage is about to turn into the result of life loss, Platinum Emperion's "you can't lose life" stops it, so you don't lose life.

By the way, besides regular life loss, "can't lose life" also covers the following situations:
⭐You can't exchange life totals with a player whose life total is **lower** than yours.
⭐You can't set your life total to a number **lower** than your current life total.
⭐You can't **pay** more than 0 life.

"Can't gain life" works as the opposite of the conditions above:
⭐You can't exchange life totals with a player whose life total is **higher** than yours.
⭐You can't set your life total to a number **higher** than your current life total.
⭐You can't **gain** more than 0 life.

![Cover](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/89854cab275a.webp)

> [Questing Beast](https://scryfall.com/card/eld/171/questing-beast): Combat damage that would be dealt by creatures you control can't be prevented.
> [Teferi's Protection](https://scryfall.com/card/2x2/32/teferis-protection): Until your next turn, your life total can't change and you gain protection from everything.

Teferi's Protection could be said to be a fusion of the damage-related abilities of The One Ring and Platinum Emperion above. EDH players surely know this card well, so for once let's use an EDH scenario as the example.

- A player who has been dealt 21 or more combat damage by the same commander over the course of the game loses the game.

Suppose Questing Beast is my commander and has already accumulated 20 commander damage on an opponent. I attack him with my commander Questing Beast, and in response, before damage is dealt, the opponent casts Teferi's Protection. As explained in the example above, "protection from everything" is meaningless in the face of "combat damage can't be prevented," so we can simply ignore it. And "your life total can't change" does ensure that my damage can't make him lose life, but this only changes the **result** of the damage. The damage was still dealt, which means this opponent will awkwardly find that his life total hasn't changed, yet he loses because the commander damage has reached 21.

![Life unchanged](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/f07310028cb7.webp)

So from now on, when you see an effect that stops you from losing life, don't assume it's an invincible lifesaver. Even if damage can't make you lose life, it may still have other negative effects on you.

### Damage Dealt by Lifelink

![Lifelink](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/093df4ee2c52.webp)

- Damage dealt by a source with lifelink, in addition to the damage's other effects, causes that source's controller to gain that much life.

Some abilities can change the **result** of damage, and lifelink is the most common representative. Among the four steps of damage processing, damage is dealt in step 2 and turned into results in step 3. Lifelink works right here, adding "gain that much life" to the damage's result. Once you understand this, other abilities that modify damage results are easy to understand too.

![Rain of Gore](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/e42d702962bd.webp)

> [Revitalize](https://scryfall.com/card/m21/31/revitalize): You gain 3 life. Draw a card.
> [Baneslayer Angel](https://scryfall.com/card/m21/6/baneslayer-angel): Lifelink.
> [Rain of Gore](https://scryfall.com/card/dis/126/rain-of-gore): If a spell or ability would cause its controller to gain life, that player loses that much life instead.

Also, abilities that work by changing the result of damage can sometimes produce very peculiar rules interactions. Take Rain of Gore as an example. Its condition is "a spell or ability would cause its controller to gain life." If a player casts Revitalize, it undoubtedly changes gaining 3 life into losing 3 life, because it's a spell that makes them gain life, but this doesn't affect drawing a card.

But if the life gain comes from combat damage dealt by a creature with lifelink, things get a bit special. Although lifelink is a static ability, it isn't an ability that directly makes a player gain life. Instead, it rewrites the rules about damage, and what actually makes you gain life is the result of combat damage. Combat damage happens because of a **turn-based action in the combat phase**, which is neither a spell nor an ability, so Rain of Gore can't interfere with life gain from a lifelink creature's combat damage.

That doesn't mean Rain of Gore has no answer to lifelink creatures, though. If that lifelink creature fights, or uses an ability to deal damage to another object, then the **source of damage that makes you gain life** is a spell or ability, which satisfies Rain of Gore's condition.

Of course, with a rules text like Rain of Gore's, Wizards probably realized it was just making work for judges. Later cards with similar effects, such as [Tainted Remedy](https://scryfall.com/card/ori/120/tainted-remedy), simply changed the condition to "if an opponent would gain life," no longer caring about how the life gain happens.

### Damage Dealt by Infect & Wither

- Damage dealt to a player by a source with infect causes the source's controller to give that player that many poison counters.
- Damage dealt to a creature by a source with infect or wither causes the source's controller to put that many -1/-1 counters on that creature.

Infect and wither are the oddballs among abilities that change the result of damage, and wither's effect can be considered a subset of infect's.

Lifelink adds an extra result on top of the original damage result. Infect and wither are different: whether or not a source has infect or wither, the results of its damage diverge from the very start. Take infect as an example. Damage dealt by a source with infect to both players and creatures is expressed as counters, but it's still damage. It's just that the result of that damage isn't the one we're used to. For planeswalkers and battles, on the other hand, infect doesn't matter. When they're dealt damage, the result doesn't differ depending on whether there's infect.

![Skithiryx](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/f254e9827c7a.webp)

> [Skithiryx, the Blight Dragon](https://scryfall.com/card/2xm/107/skithiryx-the-blight-dragon): Infect.
> [Everybody Lives!](https://scryfall.com/card/who/18/everybody-lives!): Until end of turn, players can't lose life, and players can't win or lose the game.
> [Fog](https://scryfall.com/card/ema/167/fog): Prevent all combat damage that would be dealt this turn.

Suppose I attack my opponent with Skithiryx, the Blight Dragon, and before damage is dealt the opponent casts Everybody Lives! Everybody Lives! only stops players from losing life, but the damage is still dealt, and the result of damage dealt by Skithiryx with infect is gaining that many poison counters, which Everybody Lives! can't guard against.

Even if the opponent gets 10 poison counters from this hit, they won't lose right away, and they still have a chance to do something at instant speed, because Everybody Lives! stops all players from losing until end of turn, and the exact moment such "until end of turn" effects end is in the **cleanup step of the end phase**. Only when the turn reaches this step will this opponent really lose the game.

For a detailed introduction to the turn structure, see this article: [Turn structure explained](https://guildmagesforum.tw/en/Round-Process/#cleanup-step).

![Infect and lifelink](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/3b87ab0b2341.webp)

> [Flensermite](https://scryfall.com/card/mbs/41/flensermite): Infect, lifelink.
> [Ripjaw Raptor](https://scryfall.com/card/xln/203/ripjaw-raptor): (Enrage) Whenever this creature is dealt damage, draw a card.
> [Titanic Growth](https://scryfall.com/card/m19/205/titanic-growth): Target creature gets +4/+4 until end of turn.
> [Healing Grace](https://scryfall.com/card/dom/20/healing-grace): Choose a source. Prevent the next 3 damage that source would deal to any target this turn. You gain 3 life.

Suppose I control a Flensermite that has been pumped with Titanic Growth, and the opponent blocks with Ripjaw Raptor, then uses Healing Grace to prevent 3 of the damage Flensermite would deal to Ripjaw Raptor.

Flensermite's current state: 5/5, infect, lifelink, with the next 3 damage it would deal prevented.

Now let's process the damage event. In step 2, Ripjaw Raptor dealing 4 damage to Flensermite is not in doubt, while Flensermite would have dealt 5 damage to Ripjaw Raptor, but 3 of it is prevented by Healing Grace, so Flensermite actually deals 2 damage. Ripjaw Raptor's enrage has already triggered at this point, but it's still waiting to be put on the stack.

Next, step 3 turns the damage into results. Flensermite gets 4 damage marked on it. The result of Ripjaw Raptor being dealt 2 infect damage by Flensermite is putting 2 -1/-1 counters on it, and the result of the lifelink damage is that I gain 2 life.

Finally the damage event happens. Although Ripjaw Raptor has no damage marked on it, it was indeed just dealt damage, so the enrage draw effect triggers.

From the design of [Flensermite](https://scryfall.com/card/mbs/41/flensermite), you can see that Wizards deliberately hinted to players that infect does deal damage. Otherwise this lifelink would be meaningless. As long as you understand the flow of this example, then when facing infect or wither in the future, you'll understand how they deal damage and how they turn it into results different from ordinary damage.

### Combat Damage Dealt by Toxic

![Toxic](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/1d203bafe938.webp)

- Combat damage dealt to a player by a source with toxic, in addition to the damage's other effects, causes that player to get a number of poison counters equal to the number specified by the ability.

Toxic is a very new ability whose mechanism is identical to lifelink's: both add on to the original damage result. However, toxic only works when combat damage is dealt to a player.

Also, toxic stacks. If a creature gains both toxic 1 and toxic 4, then when it deals combat damage to a player, that player additionally gets 5 poison counters. If a 2/2 creature with infect gains toxic 1, the result of it dealing combat damage to a player is giving that player 3 poison counters.

### Replacement Effects on Damage

![Replacement effects](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/e271b2ba1e45.webp)

> [Soul-Scar Mage](https://scryfall.com/card/akh/148/soul-scar-mage): If a source you control would deal noncombat damage to a creature an opponent controls, put that many -1/-1 counters on that creature instead.
> [Wild Slash](https://scryfall.com/card/q06/8/wild-slash): (Ferocious) If you control a creature with power 4 or greater, damage can't be prevented this turn. Deals 2 damage to any target.
> [Ripjaw Raptor](https://scryfall.com/card/xln/203/ripjaw-raptor): (Enrage) Whenever this creature is dealt damage, draw a card.

Some effects don't change the result of damage dealt but actually change the damage itself. For example, say the opponent controls Ripjaw Raptor, and I control Soul-Scar Mage and cast Wild Slash on Ripjaw Raptor with ferocious active.

In step 2 of the damage event, replacement effects related to damage take effect, and Soul-Scar Mage's ability belongs to this category. It directly turns noncombat damage into the same number of -1/-1 counters, rather than changing the result after damage is dealt. That means Ripjaw Raptor is never dealt damage and won't trigger enrage. And although Wild Slash with ferocious makes damage unpreventable, Soul-Scar Mage never prevented any damage. It replaced the damage with something else directly.

### Handling Lethal Damage

As mentioned earlier, the result of damage dealt to a creature is usually **marked damage**, and the relevant rule is:

- Damage marked on a creature stays on that permanent until the cleanup step, even if it stops being a creature. If the total damage marked on a creature is greater than its toughness, that creature has been dealt lethal damage and is destroyed as a state-based action. All damage marked on a permanent is removed when it regenerates and during the cleanup step.

However, this rule can be broken down further. What exactly is a "state-based action"? State-Based Actions are, simply put, like the game's background process, constantly checking the current game state. Let's look at some basic definitions of state-based actions:

- State-based actions are game actions that happen automatically whenever certain conditions are met. State-based actions don't use the stack.
- State-based actions are checked continuously throughout the whole game, and are not controlled by any player.
- Whenever a player would receive priority, the game checks for the conditions listed below, then performs all applicable state-based actions simultaneously as a single event:
  ⭐If a check results in new state-based actions being performed, the check is repeated. Otherwise, all triggered abilities waiting to be put on the stack are put on the stack, and then the check is repeated.
  ⭐Once no new state-based actions are performed and no triggered abilities are waiting to be put on the stack, the appropriate player receives priority.
  ⭐This process also happens during the cleanup step, except that if the first check in the cleanup step results in no state-based actions being performed and no triggered abilities waiting to be put on the stack, no player receives priority and the step ends.

There are many state-based action checks. Here we only excerpt the entries related to this section's topic:

- If a creature has toughness 0 or less, it's put into its owner's graveyard. Regeneration can't replace this event.
- If a creature has toughness greater than 0, it has damage marked on it, and the total damage marked on it is greater than or equal to its toughness, that creature has been dealt lethal damage and is destroyed. Regeneration can replace this event.
- If a creature has been dealt damage by a source with deathtouch since the last time state-based actions were checked, and it has toughness greater than 0, that creature is destroyed. Regeneration can replace this event.

In fact, when a creature is dealt lethal damage, the damage doesn't directly cause the creature to die. What really kills the creature is the state-based action check after it has been dealt lethal damage. But it dies either way, so does it matter whether it dies because of a state-based action? It actually does matter a little, and it comes from an important rule about state-based actions:

- Unlike triggered abilities, state-based actions don't notice things that happen during the resolution of a spell or ability.

![Lethal damage](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/d6cfed5ea95e.webp)

> [Lightning Bolt](https://scryfall.com/card/2x2/117/lightning-bolt): Lightning Bolt deals 3 damage to any target.
> [Fatal Push](https://scryfall.com/card/2xm/93/fatal-push): Destroy target creature if it has mana value 2 or less.
> [Dauthi Voidwalker](https://scryfall.com/card/mh2/81/dauthi-voidwalker): If a card would be put into an opponent's graveyard from anywhere, instead exile it with a void counter on it.

Suppose the opponent controls Dauthi Voidwalker and I use Lightning Bolt or Fatal Push on it. Dauthi Voidwalker is obviously dead, but the question is: does my removal spell go to the graveyard or get exiled?

When an instant or sorcery spell resolves, it finishes all its effects before going to the graveyard. If I use Fatal Push, Dauthi Voidwalker is already destroyed while the effect is being processed, so by the time Fatal Push is about to go to the graveyard, it won't see Dauthi Voidwalker's ability.

Lightning Bolt, on the other hand, makes Dauthi Voidwalker be dealt lethal damage, but state-based actions aren't checked during the resolution of spells and abilities. That means that when Lightning Bolt has finished its effect and is about to go to the graveyard, Dauthi Voidwalker is still on the battlefield, so my Lightning Bolt is exiled instead of going to the graveyard, and only after that does Dauthi Voidwalker die to state-based actions. Since checking for lethal damage and checking for toughness greater than 0 are both handled by state-based actions, replacing Lightning Bolt with [Dismember](https://scryfall.com/card/mm2/79/dismember) here would give the same result.

For the complete rules on state-based actions, see: [State-Based Actions rules link](https://mtg.fandom.com/wiki/State-based_action).

### What Is Regeneration?

When explaining lethal damage and damage marking above, the ability "regenerate" was mentioned several times. Some readers have probably heard the term many times without knowing what it means. Regenerate used to be a veteran evergreen keyword, the kind you could see in at least three out of four sets a year. It's an ability that protects creatures, working like giving a creature a one-time shield. Its definition is:

- If an effect regenerates a permanent, it creates a replacement effect that happens the next time that permanent would be destroyed. To regenerate a permanent means: "The next time this permanent would be destroyed this turn, instead remove all damage marked on it and tap it. If it's an attacking or blocking creature, remove it from combat."

However, the regenerate keyword was too complicated and people often got how it works wrong, so in 2016 Wizards decided to stop designing new cards in Standard sets with regenerate, using the following effects to take over its role instead:
⭐Until end of turn, that creature gains indestructible.
⭐Until end of turn, that creature gains "When this creature dies, return it to the battlefield tapped under its owner's control."

Let's see how regeneration actually works and where its limits are.

![Regenerate](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/9063d97fc1bd.webp)

> [Skithiryx, the Blight Dragon](https://scryfall.com/card/2xm/107/skithiryx-the-blight-dragon): BB: Regenerate this creature.
> [Flame Slash](https://scryfall.com/card/cn2/157/flame-slash): Flame Slash deals 4 damage to target creature.
> [Grasp of Darkness](https://scryfall.com/card/m21/102/grasp-of-darkness): Target creature gets -4/-4 until end of turn.

Now I control a Skithiryx, the Blight Dragon, which has an ability at instant speed to regenerate itself. Suppose the opponent casts Flame Slash on my Skithiryx. To save Skithiryx, I must activate the ability to regenerate it before Flame Slash resolves. After Flame Slash resolves, state-based actions are checked and find that Skithiryx has been dealt lethal damage. Skithiryx would die at this point, but regeneration takes effect:

- If a creature has toughness greater than 0, it has damage marked on it, and the total damage marked on it is greater than or equal to its toughness, that creature has been dealt lethal damage and is destroyed. Regeneration can replace this event.

So Skithiryx's death is rewritten as "remove all damage marked on it and tap it. If it's an attacking or blocking creature, remove it from combat."

However, if the opponent used Grasp of Darkness instead, regeneration can't save Skithiryx, because regeneration can't handle the case of toughness 0 or less:

- If a creature has toughness 0 or less, it's put into its owner's graveyard. Regeneration can't replace this event.

This case shows that regeneration protects a fairly limited range, and the keyword also contains quite a few actions, making it very easy to get the rules confused. Also, although the ability Regenerate is translated as "重生" (literally "rebirth") in Chinese, in practice it is conceptually closer to "再生" (regrowth). That can't be called an inaccurate Chinese translation, though, because the damage processing steps in Magic's early days were different from today's, and under the early rules Regenerate really did work more like rebirth. It was only at Sixth Edition, when Magic went through a major rules overhaul, that regeneration could no longer work under its original rules, and after being fitted into the new rules framework, its name and ability became mismatched.

![Manga](https://images.guildmagesforum.tw/posts/Rule-Damage-and-Lose-Life/7f1c11922ef8.webp)

> Incidentally, the ongoing MTG manga **"Destroy All Humans. They Can't Regenerate. (すべての人類を破壊する。それらは再生できない。)"** takes its title from the effect of the famous sweeper [Wrath of God](https://scryfall.com/card/dmr/37/wrath-of-god) ("Destroy all creatures. They can't be regenerated").

---

## Conclusion: Damage Is Dealt First, Then Life Is Lost

The core idea of the damage event is to clearly separate the two steps of **damage being dealt** and **damage being turned into results**. Once you've got this idea down, questions about whether damage is dealt and whether life is lost can basically all be solved with ease.
