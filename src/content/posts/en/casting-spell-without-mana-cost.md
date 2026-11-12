---
title: "How to Cast a Spell Without a Mana Cost"
date: 2023-09-05 17:13:27
cover: "https://images.guildmagesforum.tw/posts/casting-spell-without-mana-cost/c0f0cacb60b8-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/casting-spell-without-mana-cost/c0f0cacb60b8-cover.jpg"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../casting-spell-without-mana-cost/).

Among MTG spells there is a special breed of oddity: they have no normal casting cost and can't be cast directly from your hand like ordinary spells. The only way to cast them is through certain special means.

Players who often play Modern will surely be familiar with these spells, and are presumably well aware of which methods let you cast them and which do not.

But if you ask what underlying rules are at work behind the scenes, things may be less clear. If you are curious enough to dig to the bottom of these rules, read on.

![Suspend Spell](https://images.guildmagesforum.tw/posts/casting-spell-without-mana-cost/8d2fd0de24ae.webp)

[Crashing Footfalls](https://scryfall.com/card/mh1/160/zht/%E5%A3%9E%E6%BB%85%E8%B6%B3%E8%B7%A1) & [Living End](https://scryfall.com/card/tsr/121/zht/%E8%B5%B0%E9%AA%A8%E8%A1%8C%E5%B1%8D), the most common representatives of spells without a mana cost in Modern

---

## How Spells Are Cast

Before discussing the special cases, let's first look at what the most basic rules for [casting spells](https://mtg.fandom.com/wiki/Casting_spells) say.
(To avoid being overly long, only the commonly used rules and the rules needed for the topics discussed in this article are excerpted, and some rules are explained in simplified form. For the full rules, please consult the link above yourself.)

- 601.2
  Governs the steps of casting a spell. **If the player cannot satisfy the requirements in a step when announcing the spell, it is an illegal action, and the game rewinds to the state before the spell was announced.** For details see [Rule 728. Illegal action](https://mtg.fandom.com/wiki/Illegal_action).
- 601.2a
  The player announces casting the spell and moves that card (or copy) to the top of the stack, where it stays until the spell resolves, is countered, or moves elsewhere.
- 601.2b
  If the spell has a choice of modes, announce the choices.
  **If the spell has an alternative cost or additional costs, the player announces the costs they intend to pay.**
  If the spell has a variable (an X cost, etc.), announce its value.
  If the spell has hybrid mana, Phyrexian mana, and so on, announce how it will be paid.
- 601.2c
  The player announces the spell's targets; if the number of targets is variable, announce the number of targets first.
- 601.2d
  If the spell requires dividing an effect among multiple targets, announce how it is divided, and each target must be assigned an amount other than 0.
- 601.2e
  Check whether the spell being announced can legally be cast; if the spell is illegal, the game rewinds to the state before the spell was announced.
- 601.2f
  Determine the spell's total cost, applying cost increase and reduction effects, with the minimum cost being 0. At this stage the spell's total cost is locked in, and later cost-changing effects have no effect.
- 601.2g
  If the total cost includes a mana cost, mana abilities may be activated at this stage.
- 601.2h
  Pay the spell's cost.
- 601.2i
  The casting steps are complete, and "when you cast" triggered effects trigger at this time.
  (Example: the effect of [Ulamog, the Ceaseless Hunger](https://scryfall.com/card/bfz/15/zht/%E4%B8%8D%E4%BC%91%E9%A3%A2%E6%B8%B4%E9%8E%A2%E6%8B%89%E8%8E%AB) exiling two target permanents when cast)

---

## What Happens When You Try to Cast a Spell Without a Mana Cost Normally?

We all know that, absent outside factors, a spell with no cost cannot be cast directly. Asked why, you may have heard an explanation like "because this spell has no cost, there is no option to cast it directly," but that explanation is actually incomplete.

In reality, you can try to announce casting the spell, and the spell really does temporarily move onto the stack, but in the following steps the game finds that the spell has a cost that cannot be paid, so it judges this an [illegal action](https://mtg.fandom.com/wiki/Illegal_action), and the game rewinds to the state before you tried to announce casting this spell.

And every means that lets you successfully cast a spell without a mana cost works precisely by changing the condition checks in the casting steps above, allowing the whole casting procedure to run to completion.

---

## Various Sources That Let You Cast Spells

Besides normally casting spells, MTG has many spells or abilities (collectively called "sources" below) that let you cast spells from various zones. These sources can be roughly divided into 4 kinds:

1. The source casts the spell as it resolves, and the cost is paid normally
2. The source lets you cast the spell, and the cost is paid normally
3. The source casts the spell as it resolves, and no mana cost has to be paid (or a specified mana cost is paid instead)
4. The source lets you cast the spell, and no mana cost has to be paid (or a specified mana cost is paid instead)

Let's analyze one by one how these 4 kinds of sources interact with spells that have no cost.
Note: Since this article only discusses cases of casting (Cast) spells, even if some of the example cards allow you to play (Play) cards, the term cast is used throughout for the sake of readability.

### 1. The source casts the spell as it resolves, and the cost is paid normally

![Chandra, Torch of Defiance](https://cards.scryfall.io/large/front/2/e/2eac0eaa-55b2-444a-863d-c66769aab4ee.jpg?1690004652)

Effects of this kind usually let you cast a spell from some zone other than your hand, and cast it immediately as the source resolves, but without changing the cost required to cast, so the procedure is exactly the same as in the previous section.
But if you try to cast [Crashing Footfalls](https://scryfall.com/card/mh1/160/zht/%E5%A3%9E%E6%BB%85%E8%B6%B3%E8%B7%A1) this way, since the spell's casting cost is "None," the game treats it as an illegal action and rejects it.

### 2. The source lets you cast the spell, and the cost is paid normally

![Ragavan, Nimble Pilferer](https://cards.scryfall.io/large/front/4/1/41eb4f44-c655-432e-aea1-3af76bdca2e7.jpg?1646279037)

Effects of this kind usually come from a spell, activated ability, or triggered ability that lets you cast the card during a specified period or while a certain condition keeps being met (such as [Light Up the Stage](https://scryfall.com/card/clb/802/zht/%E7%85%A7%E4%BA%AE%E8%88%9E%E5%8F%B0) and [Gonti, Lord of Luxury](https://scryfall.com/card/clb/753/zht/%E5%A5%A2%E8%8F%AF%E9%A0%98%E4%B8%BB%E8%B2%A2%E6%8F%90)), or a static ability that allows you to cast cards from other zones (such as [Future Sight](https://scryfall.com/card/mh1/53/zht/%E9%A0%90%E7%9F%A5%E5%B0%87%E4%BE%86)). This is largely the same as case 1, differing only in that the timing of when the card can be used is not changed, and since the rules judgment about the card's cost remains unchanged, the result is the same as in case 1: you cannot directly cast [Crashing Footfalls](https://scryfall.com/card/mh1/160/zht/%E5%A3%9E%E6%BB%85%E8%B6%B3%E8%B7%A1).

### 3. The source casts the spell as it resolves, and no mana cost has to be paid (or a specified mana cost is paid instead)

![Shardless Agent](https://cards.scryfall.io/large/front/e/e/eeceff71-0a62-4bc5-8502-d537c77573d6.jpg?1646280822)

At last we reach the situation everyone knows best, and without a doubt, the answer here is that you can cast it.
How is that achieved? Effects of this kind give the spell an [alternative cost](https://mtg.fandom.com/wiki/Alternative_cost). At 601.2b the player announces using that alternative cost, and at 601.2f, when determining the cost the spell requires, it is no longer an unpayable "None" but uses the new alternative cost.

### 4. The source lets you cast the spell, and no mana cost has to be paid (or a specified mana cost is paid instead)

![Dauthi Voidwalker](https://cards.scryfall.io/large/front/b/a/ba32547b-523d-4ba8-b589-0c023aed0643.jpg?1646278414)

By the time you read case 3, most players' understanding should have clicked. In fact, even without knowing the underlying rules, you would mostly not judge the first three situations wrong. But case 4 is different: if your understanding of the casting procedure is insufficient, the simplified rules wording can easily scramble your logic.

Remember the colloquial explanation mentioned earlier, "because this spell has no cost, there is no option to cast it directly"? This is exactly what misleads so many people.

In the situations of 1 and 3, the source actively provides a moment to cast the spell, so no one cares how the spell would originally be announced for casting, whereas in 2 and 4 the spell itself announces being cast. If you still remember that colloquial description above, you may fall into this mental trap: "Isn't this spell simply uncastable? Does it matter how the cost is changed later?" Players may force themselves to memorize the result from precedents like being able to cast it with [As Foretold](https://scryfall.com/card/akh/42/zht/%E9%A0%90%E7%A4%BA%E6%88%90%E7%9C%9F), yet still not know the principle behind it, and the day they meet a card with different wording, they won't know how to handle it.

Now we know that when you try to cast a spell, the spell first goes onto the stack, but because it may fail to satisfy the requirements of 601.2, the game simply rewinds to before the attempt to cast.

---

## Giving a Spell Without a Cost Flashback

For spells like [Crashing Footfalls](https://scryfall.com/card/mh1/160/zht/%E5%A3%9E%E6%BB%85%E8%B6%B3%E8%B7%A1) that have no cost, more specifically their mana cost ([Mana Cost](https://mtg.fandom.com/wiki/Mana_cost)) is "None" and their mana value ([Mana Value](https://mtg.fandom.com/wiki/Mana_value)) is 0.

Some cards (such as [Snapcaster Mage](https://scryfall.com/card/uma/71/snapcaster-mage)) can give instants and sorceries in the graveyard the flashback ability, with a flashback cost equal to that spell's mana cost (Mana Cost). Although this ability creates an alternative cost, since the alternative cost is, like the original cost, "None," it still cannot be cast.

[Halo Forager](https://scryfall.com/card/mom/227/halo-forager), on the other hand, only asks for the mana value (Mana Value) of the instant or sorcery card, so you can use that ability to cast [Crashing Footfalls](https://scryfall.com/card/mh1/160/zht/%E5%A3%9E%E6%BB%85%E8%B6%B3%E8%B7%A1).

![Snapcaster Mage & Halo Forager](https://images.guildmagesforum.tw/posts/casting-spell-without-mana-cost/2f2f1fba0c4b.webp)

---

## Appendix: The Unbindable Squee

Since we've covered the process of casting spells, let's also mention an interesting little bit of history~

In 2018 Standard, there were two cards in the environment at the same time: [Ixalan's Binding](https://scryfall.com/card/xln/17/zht/%E4%BE%9D%E5%A4%8F%E8%98%AD%E7%9A%84%E6%9D%9F%E7%B8%9B) and [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E). Imagine that your opponent's [Ixalan's Binding](https://scryfall.com/card/xln/17/zht/%E4%BE%9D%E5%A4%8F%E8%98%AD%E7%9A%84%E6%9D%9F%E7%B8%9B) exiles my [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E). Can I still cast [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E) from exile?

![The Unbindable Squee](https://images.guildmagesforum.tw/posts/casting-spell-without-mana-cost/75cd45a0a66b.webp)

If the question were changed to [Banishing Light](https://scryfall.com/card/thb/4/zht/%E9%A9%85%E9%80%90%E6%98%8E%E5%85%89), the answer is obviously yes. But when the question is [Ixalan's Binding](https://scryfall.com/card/xln/17/zht/%E4%BE%9D%E5%A4%8F%E8%98%AD%E7%9A%84%E6%9D%9F%E7%B8%9B), because there is an effect forbidding me from casting spells with that name, I should not be able to cast [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E) from exile, right?

By today's rules, that is indeed correct, specifically governed by rule 601.3:

- 601.3
  A player can begin to cast a spell (begin the 601.2a procedure above) only if a rule or effect allows the player to cast it and no rule or effect prohibits the player from casting it.

However, this rule did not originally act at this point in time. Back in 2018, whether the spell could legally be cast was only checked when the casting procedure reached 601.2e. For an ordinary name-ban effect, handling it this way creates no problems at all, but with the bound Squee the situation gets interesting.

Under the rules at that time, if I tried to cast a [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E) exiled by [Ixalan's Binding](https://scryfall.com/card/xln/17/zht/%E4%BE%9D%E5%A4%8F%E8%98%AD%E7%9A%84%E6%9D%9F%E7%B8%9B), I would first move [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E) to the stack and run the casting procedure above. When it reached 601.2e to check the legality of the cast, since the card was currently on the stack and not in exile, when [Ixalan's Binding](https://scryfall.com/card/xln/17/zht/%E4%BE%9D%E5%A4%8F%E8%98%AD%E7%9A%84%E6%9D%9F%E7%B8%9B) checked card names it would find that it had not exiled any card at that moment, so naturally it could not say that casting [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E) was illegal, and in the end [Squee, the Immortal](https://scryfall.com/card/dom/146/zht/%E4%B8%8D%E6%AD%BB%E6%96%AF%E5%A5%8E) passed layer after layer of checks and was cast just like that.

This counterintuitive rules loophole has since been adjusted and can be explained by a complete set of underlying operating logic. This is one of the things I love about MTG: even though there have been many counterintuitive bugs, even ones that contradict the designers' original intent in making a card, the mechanisms that keep the game running have always been clear, and fixing these bugs is done by adjusting the most fundamental underlying logic, so from start to finish MTG's rules maintain rigor and consistency.
