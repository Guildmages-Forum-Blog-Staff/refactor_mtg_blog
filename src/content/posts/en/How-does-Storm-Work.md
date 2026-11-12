---

title: "How Does Storm Work?"
date: "2025-03-26 14:38:42"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/How-does-Storm-Work/740bd24eddae-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-does-Storm-Work/740bd24eddae-cover.jpg"
excerpt: "Storm, are you sure this rate of reappearance meets the definition of a 10 on the Storm Scale?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-does-Storm-Work/).

## Introduction

Storm is a classic and powerful ability in MTG history. Even now, in Modern and above, Storm decks remain a force to be reckoned with in the environment. MTG's head designer [Maro](https://en.wikipedia.org/wiki/Mark_Rosewater) once gave Storm, on his blog and based on its power, the evaluation of "the mechanic least likely to return to Standard sets," and from this grew a series of columns called the **[Storm Scale](https://mtg.fandom.com/wiki/Storm_Scale)**.

After the 2006 [Time Spiral](https://scryfall.com/sets/tsp) environment, the Storm ability wasn't used in Standard set card design for a full 18 years (of course, along the way there were some cards whose workings paid homage to Storm, such as [Thousand-Year Storm](https://scryfall.com/card/grn/207/thousand-year-storm) and [Show of Confidence](https://scryfall.com/card/stx/28/show-of-confidence)). It wasn't until 2024, when [Ral, Crackling Wit](https://scryfall.com/card/blb/230/ral-crackling-wit) in [Bloomburrow](https://scryfall.com/sets/blb) officially brought Storm back to Standard, though this time the mechanic was applied to a planeswalker's ultimate emblem. A planeswalker's ultimate is meant to provide a sufficiently powerful winning point, so tolerance for power and complexity is high there, and it didn't spark much discussion.

Fast forward to now: [Tarkir: Dragonstorm](https://scryfall.com/sets/tdm) has a new Storm card, [Stormscale Scion](https://scryfall.com/card/tdm/123/stormscale-scion). This is a genuine Storm card, and even the name is an official joke, a nod to the Storm Scale. So let's take this opportunity to introduce just what kind of mechanic Storm is!

![Introduction](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/f224beeef190.webp)

---

## Storm Rules Definition

The Storm rule itself is simple. You could say that just reading the Storm text once is enough to understand how it works:

- 702.40a Storm is a <font color="#FF0000">triggered ability</font> that functions on the stack. "Storm" means "When you cast this spell, copy it for each spell cast <font color="#FF0000">before it</font> this turn. If the spell has any targets, you may choose new targets for any of the copies."
> PS: If you copy a permanent spell, when that spell resolves, the corresponding permanent token is put onto the battlefield.

The core idea of Storm is that it's a **cast trigger**, a **triggered ability**. When the Storm ability resolves, it checks the record of all spells cast this turn before this spell, to see how many spells were cast in total (hereafter N). The count includes spells cast by other players, as well as spells that were cast and are still on the stack unresolved. Then it copies that spell N times, and if the spell has targets, each copy may choose new targets.

The Storm rules also show that using it well requires casting a large number of spells in one turn, so apart from some infinite-loop combos, the game screen often ends up looking like this:

![14](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/87c0b9617397.webp)
> This scene is from chapter 14 of the MTG manga "Destroy All Humans, They Can't Regenerate"

---

## Storm Rules Examples

Although the examples below use a variety of Storm cards, to be honest the card effects themselves aren't important. We only need to pay attention to how the Storm ability works in these situations.

![1](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/4ee38fc052b3.webp)
> - [Galvanic Relay](https://scryfall.com/card/mh2/127/galvanic-relay):
>   Exile the top card of your library. During your next turn, you may play that card.
>   Storm
> - [Consign to Memory](https://scryfall.com/card/mh3/54/consign-to-memory):
>   Replicate {1} (When you cast this spell, copy it for each time you paid its replicate cost. You may choose new targets for the copies.)
>   Counter target triggered ability or colorless spell.

The hardest thing about a Storm spell is that it copies N times. A one-for-one counter like [Counterspell](https://scryfall.com/card/cmm/81/counterspell) can only counter one of them, and usually can't stop the opponent at all. But as mentioned before, Storm is a triggered ability, and this ability can be countered too. As long as you counter the Storm ability, the N copies afterward never appear at all.

![2](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/c3a629be119a.webp)
> - [Grapeshot](https://scryfall.com/card/tsr/166/grapeshot):
>   Grapeshot deals 1 damage to any target.
>   Storm
> - [Twincast](https://scryfall.com/card/m10/78/twincast):
>   Copy target instant or sorcery spell. You may choose new targets for the copy.

Suppose you cast a Grapeshot and the Storm has already resolved, making N Grapeshot copies on the stack. If you then use Twincast to copy Grapeshot, can it trigger Storm again and create N+2 additional Grapeshot copies?

Storm's trigger condition is **when cast**. Suppose you use some method to copy a Storm spell on the stack. Although the copy does get the Storm ability, the copied spell was not cast; it is put directly onto the stack. So in this case you simply made one extra Grapeshot, and a second Storm does not occur.

![3](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/2b73a2feb3e0.webp)
> - [Weather the Storm](https://scryfall.com/card/mh1/191/weather-the-storm):
>   You gain 3 life.
>   Storm
> - [Coruscation Mage](https://scryfall.com/card/blb/131/coruscation-mage):
>   Whenever you cast a noncreature spell, this creature deals 1 damage to each opponent.
> - [Archmage Emeritus](https://scryfall.com/card/stx/37/archmage-emeritus):
>   Magecraft — Whenever you cast or copy an instant or sorcery spell, draw a card.

When you cast Weather the Storm and make N copies through Storm, how many times will Coruscation Mage's and Archmage Emeritus's abilities each trigger?

As in the previous example, copying a spell doesn't involve the casting action, so Coruscation Mage triggers only once, for the original Weather the Storm being cast.

Archmage Emeritus's magecraft, on the other hand, triggers whenever an instant or sorcery is cast or copied, so it triggers a total of N+1 card draws (once for the original spell, N times for the copies).

![4](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/c83673176e48.webp)
> - [Hunting Pack](https://scryfall.com/card/mh2/284/hunting-pack):
>   Create a 4/4 green Beast creature token.
>   Storm
> - [Mnemonic Deluge](https://scryfall.com/card/cmr/82/mnemonic-deluge):
>   Exile target instant or sorcery card from a graveyard. Copy it three times. You may cast the copies without paying their mana costs. Exile Mnemonic Deluge.

Suppose no spells have been cast this turn, and you use Mnemonic Deluge to copy the Hunting Pack in the graveyard 3 times. How many 4/4 tokens do you get?

The difference between this one and the two examples above is that those copied spells without casting them, while Mnemonic Deluge copies the instant/sorcery card and **casts** it. This means the Storm ability triggers, and casting spells is an action that can't be performed on multiple objects simultaneously, so the three Hunting Pack copies are cast one at a time, in sequence.

- 608.2f Some spells and abilities include actions to be performed on multiple players and/or objects. In most cases, those actions are processed simultaneously. If the action can't be processed simultaneously, it is instead considered for each affected object or player individually as it resolves. The "active player first" order is used as the primary basis for deciding the order in which those actions are performed. Second, if the action would be performed simultaneously on a player and an object they control, or on multiple objects controlled by the same player, the player who controls the resolving spell or ability chooses the relative order of those actions.

The casting order is: Hunting Pack A ➔ Hunting Pack B ➔ Hunting Pack C. The number of spells cast before it that A checks is 1 <font color="#999999">(Mnemonic Deluge)</font>, B checks 2 <font color="#999999">(Mnemonic Deluge + the A cast earlier)</font>, and so on, with C at 3. In total you copy 6 times through Storm, and adding the A, B, and C spells themselves, you end up with 9 4/4 Beast tokens.





![5](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/e25ddbcba6e2.webp)
> - [Ground Rift](https://scryfall.com/card/tsp/162/ground-rift):
>   Target creature without flying can't block this turn.
>   Storm
> - [Venerated Rotpriest](https://scryfall.com/card/one/192/venerated-rotpriest):
>   Whenever a creature you control becomes the target of a spell, target opponent gets a poison counter.

No spells have been cast this turn, and I have a [Grizzly Bears](https://scryfall.com/card/10e/268/grizzly-bears) on my side of the board. I first cast Venerated Rotpriest, then cast Ground Rift targeting Venerated Rotpriest, with Storm N=1, and the copied Ground Rift targets Grizzly Bears. Does the opponent get 2 poison counters this way?

The answer is yes. A copied spell also makes your permanent a target, thereby triggering Venerated Rotpriest's ability.

If you're wondering whether **choose new targets** in Storm means I first target the original Venerated Rotpriest and only afterward switch to designating Grizzly Bears, causing one spell copy to trigger Venerated Rotpriest's ability twice, the answer is that this doesn't happen, because by the time the copied spell is put onto the stack, it already has its new targets chosen.

- 707.10c Some effects that copy a spell or ability also state that the controller may choose new targets for the copy. The player may leave any number of the targets unchanged, even if those targets would be illegal. If the player chooses to change some or all of the targets, the new targets must be legal. Once the player has decided what the copy's targets will be, the copy is put onto the stack with those targets.





![6](https://images.guildmagesforum.tw/posts/How-does-Storm-Work/2537755bb3d4.webp)
> - [Chatterstorm](https://scryfall.com/card/mh2/152/chatterstorm):
>   Create a 1/1 green Squirrel creature token.
>   Storm
> - [Ral, Crackling Wit [-10] ](https://scryfall.com/card/blb/230/ral-crackling-wit):
>   Draw three cards. You get an emblem with "Instant and sorcery spells you cast have storm."

What happens if a spell somehow has multiple Storm abilities at once? The answer is simple: each Storm is an independent triggered ability. They trigger separately, and each makes N copies of the spell.

- 702.40b If a spell has multiple instances of storm, each triggers separately.

---

## The Storm Scale

 MTG's head designer [Maro](https://en.wikipedia.org/wiki/Mark_Rosewater) was once asked on his blog, "How likely is it that Storm returns to Standard?" Maro felt Storm is simply too strong and didn't think it had much chance of coming back to Standard sets. If we had a scale for measuring whether a design will return to Standard, with 1 being very likely and 10 being very unlikely, Storm would be a 10. This got other readers asking where various mechanics would land on this "**[Storm Scale](https://mtg.fandom.com/wiki/Storm_Scale)**." After that, the Storm Scale became one of the signature features of Maro's blog and grew into a series of columns published on the official MTG website.

The Storm Scale rating takes into account many aspects of a mechanic, including its power, complexity, popularity, and development constraints. For example, Embalm: the mechanic itself is reasonably balanced in power, not very complex, and quite popular, but because its flavor design is tied to the time-and-space character of Amonkhet, it's hard to bring back for sets whose story doesn't take place on Amonkhet (the reason the [Aetherdrift](https://scryfall.com/sets/dft) set could make [Cursecloth Wrappings](https://scryfall.com/card/dft/81/cursecloth-wrappings) is precisely that the story passes through Amonkhet), which pushed up Embalm's score. The Storm Scale rating definitions are roughly as follows:

{% notel blue Storm Scale Rating Definitions %}

1: You will definitely see them again, quite possibly in the very next set
2: You will definitely see them again, but not necessarily right away
3: Extremely likely to appear again, possibly many times
4: Quite likely to appear again, but there are some issues that make them a bit less certain
5: We need to find the right place to bring them back, but I'm optimistic
6: We need to find the right place to bring them back, but I'm a little less optimistic
7: It's unlikely to come back, but possible if the right environment exists
8: Unlikely to come back, but possible if everything lines up perfectly
9: I never say never, but it would take a small miracle
10, I never say never, but it would take a big miracle

{% endnotel %}

For details on the score definitions and the ratings of various mechanics, see the articles on the official Storm Scale site:

{% notel blue Storm Scale Official Article Links %}

[Khans of Tarkir](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-khans-tarkir-block-2016-02-29)
[Ravnica & Return to Ravnica](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-ravnica-and-return-ravnica-2016-05-02)
[Zendikar & Battle for Zendikar](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-zendikar-and-battle-zendikar-2016-11-21)
[Innistrad & Shadows over Innistrad](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-zendikar-and-battle-zendikar-2016-11-21)
[Kaladesh & Amonkhet](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-kaladesh-and-amonkhet-2019-03-25)
[Mirrodin & Scars of Mirrodin](https://magic.wizards.com/en/news/making-magic/storm-scale-mirrodin-and-scars-mirrodin-blocks-2018-06-11)
[Theros & Theros Beyond Death](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-theros-and-theros-beyond-death-2020-12-07)
[Throne of Eldraine through Strixhaven Part 1](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-throne-of-eldraine-through-strixhaven-part-1)
[Throne of Eldraine through Strixhaven Part 2](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-throne-of-eldraine-through-strixhaven-part-2)

> PS: When the website language is set to Traditional Chinese, the pages may show unpredictable bugs, such as crashing or occasionally displaying 404. 

{% endnotel %}

However, in the 2019-2020s, MTG's design philosophy underwent a huge shift, and the power and complexity of Standard sets before and after that period show an obvious break. So views on various mechanics in earlier articles may be outdated, and in any case this is just Maro's personal evaluation and doesn't represent the opinion of the entire official development team. So there's no need to take the ratings in them too seriously; just read them casually as light chatter.

Still, there's one thing I want to complain about: Storm's appearance rate really doesn't look like the definition of a 10! Why not just rename it the Companion Scale instead? Oh wait, Companion is only a 9...? I give up complaining.
