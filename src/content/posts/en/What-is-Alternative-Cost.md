---
title: "What Is an Alternative Cost?"
date: 2023-10-18 23:00:00
cover: "https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/94d3932b9d9f-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/94d3932b9d9f-cover.jpg"
excerpt: "Why can't you choose to cast FOW for its alternative cost when you flash it back with Snapcaster Mage?"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../What-is-Alternative-Cost/).

## Before We Start

An alternative cost, as the name implies, lets you pay some other cost in place of the cost you would normally pay. Some help you cast spells with a cost that is easier to pay, and some can change the characteristics of a spell. It is one of the most frequently used card design elements in MTG.

Although alternative costs are everywhere in MTG and the rules handling is quite simple, without knowing the basic rules definitions you can still run into quite a few misconceptions in play. This issue is a relatively light rules article about what an alternative cost is. For the full rules text, please see the [rules link](https://mtg.fandom.com/wiki/Alternative_cost).

![FOW](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/f114a3acabbc.webp)

---

## The Basic Definition of Alternative Costs

Alternative costs have the following basic rules:

- 118.9
  Some spells have alternative costs. An alternative cost is a cost listed in **a spell's text**, or applied to it from **another effect**, that its controller may pay rather than paying the spell's mana cost. Alternative costs are usually phrased as **"You may [action] rather than pay [this object's] mana cost"** or **"You may cast [this object] without paying its mana cost"**, and some alternative costs are defined by keywords.

- 118.9a
  Only one alternative cost can be applied to any one spell as it's being cast. The controller of the spell announces what costs they intend to pay according to the description of rule 601.2b.

{% folding red :: Simplified Spell Casting Procedure %}

> 601.2
> Specifies the steps for casting a spell. If a player is unable to comply with the requirements of a step while announcing the spell, that is an illegal action, and the game reverts to the state before the spell was announced.

> 601.2a
> The player announces that they are casting the spell, moving that card (or a copy) to the top of the stack, where it stays until the spell resolves, is countered, or moves elsewhere.
>
> 601.2b
> If the spell has modes, the player announces their choices.
> If the spell has alternative or additional costs, the player announces the costs they intend to pay.
> If the spell has a variable cost (X, etc.), the player announces its value.
> If the spell has hybrid mana symbols, Phyrexian mana symbols, etc., the player announces how they will pay for them.

> 601.2c
> The player announces the spell's targets; if the number of targets is variable, they first announce the number of targets.

> 601.2d
> If the spell requires distributing an effect among multiple targets, the player announces the distribution, and each target must receive at least one.

> 601.2e
> The game checks whether the announced spell can legally be cast. If the spell is illegal, the game reverts to the state before the spell was announced.

> 601.2f
> The total cost of the spell is determined, applying cost increases and reductions, with the minimum being 0. At this point the total cost is locked in, and later effects that change costs do not apply.

> 601.2g
> If the total cost includes a mana payment, the player may activate mana abilities at this point.

> 601.2h
> The player pays the spell's costs.

> 601.2i
> The casting steps are complete, and "when you cast" triggered abilities trigger at this time.

{% endfolding %}

- 118.9c
  An alternative cost doesn't change a spell's mana cost, only what you pay to cast it. Spells and abilities that care about the spell's mana cost still use its original value.

- 118.9d
  If an alternative cost is paid to cast a spell, any additional costs, cost increases, and cost reductions that affect that spell are applied to that alternative cost.

Once you grasp these rules, you can understand how alternative costs work. But reading text alone is never intuitive, so let us deepen the concept with some real examples below.

---

## Concrete Examples of Alternative Costs

### An Effect Gives Another Spell an Alternative Cost

![MH2 examples](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/f76e45e1e42a.webp)

[Solitude](https://scryfall.com/card/mh2/32/solitude)'s evoke and [Ragavan, Nimble Pilferer](https://scryfall.com/card/mh2/138/ragavan-nimble-pilferer)'s dash both **get their alternative costs from their own text**, or more precisely, these keywords themselves define the property of being an alternative cost. You can choose to cast the card using the alternative cost above instead; this cost might be swapping to different mana (Ragavan), or paying something other than mana (Solitude's exiling a white card from hand).

[Shardless Agent](https://scryfall.com/card/mh2/292/shardless-agent)'s cascade, on the other hand, is **an effect giving another spell an alternative cost**: a spell revealed by cascade that meets the conditions gains an alternative cost called "without paying its mana cost," and costless cards like [Living End](https://scryfall.com/card/tsr/121/living-end) are successfully cast exactly this way. For a detailed explanation see this article: [How to Cast Spells Without Paying Their Mana Cost](https://guildmagesforum.tw/en/casting-spell-without-mana-cost/).

Also, some cards only have a keyword with the characteristics of an alternative cost without spelling out how the keyword works (like Solitude in the image above); in that case you just have to memorize the definitions of the various keywords.

![Alternative costs](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/31d79cb534e4.webp)

These are likewise cases of **an effect giving another spell an alternative cost**. The specified alternative costs differ, but the principle is the same: [Omniscience](https://scryfall.com/card/m19/65/omniscience) uses the same wording as cascade above, "You may cast it without paying its mana cost," while [Fist of Suns](https://scryfall.com/card/c17/211/fist-of-suns) and [Bolas's Citadel](https://scryfall.com/card/war/79/bolass-citadel) change the original cost to a newly specified cost. Bolas's Citadel changes the cost from paying mana to paying life. If there is an effect on the battlefield such as [Yasharn, Implacable Earth](https://scryfall.com/card/znr/240/yasharn-implacable-earth)'s "Players can't pay life to cast spells," you cannot cast spells through Bolas's Citadel's alternative cost (unless the spell's total mana value is 0, since such effects do not prevent a player from paying 0 life).

### Any Spell Can Only Use One Alternative Cost

![FOW](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/f114a3acabbc.webp)

The most important rule of alternative costs is none other than **"Any spell can only use one alternative cost."** This example shows well the principle of this rule and the misunderstanding it can cause.

[Force of Will (FOW)](https://scryfall.com/card/ema/49/force-of-will) is a very standard spell with an alternative cost (paying life and exiling a blue card from hand). [Snapcaster Mage](https://scryfall.com/card/uma/71/snapcaster-mage) can give an instant or sorcery card in the graveyard flashback, with a flashback cost equal to that spell's mana cost. The flashback cost is likewise an alternative cost, and a spell cannot use two alternative costs, so if you use Snapcaster Mage to give a FOW in the graveyard flashback, you can only dutifully pay 5 mana to cast it and cannot also choose FOW's own alternative cost.

![Bolas Storm](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/147b9781b25c.webp)

This is a case with the same principle as the one above. [Rooftop Storm](https://scryfall.com/card/mic/103/rooftop-storm) gives Zombie spells a new alternative cost of "0," and [Bolas's Citadel](https://scryfall.com/card/war/79/bolass-citadel) gives the spell on top of your library a new alternative cost of "life." Suppose you control both, and the top of your library is a [Relentless Dead](https://scryfall.com/card/soi/131/relentless-dead). When you want to use Bolas's Citadel's ability to cast it, you are bound to be using Bolas's Citadel's alternative cost, and Rooftop Storm has no effect here; you cannot apply two alternative costs to one spell at once.

### An Alternative Cost Does Not Change the Spell's Original Mana Value

![Spell Snare and Rift](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/cf4a133809e8.webp)

Another characteristic of alternative costs is that they do not change the spell's original mana value; they only change the cost paid when casting. Suppose you cast a [Cyclonic Rift](https://scryfall.com/card/cmm/84/cyclonic-rift): whether or not you choose to use the overload alternative cost, it is a spell with a total mana value of 2. [Disdainful Stroke](https://scryfall.com/card/khm/54/disdainful-stroke) can never counter Cyclonic Rift, while [Spell Snare](https://scryfall.com/card/bbd/132/spell-snare) can counter Cyclonic Rift.

![Flashback silver mirror](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/da704ec42681.webp)

However, one situation is a little more complicated: when the spell's cost includes X. Let us first look at what the rules say about costs that include X:

- 107.3a
  If a spell or activated ability has a mana cost, alternative cost, additional cost, and/or activation cost with an {X}, [-X], or X in it, and the value of X isn't defined by the text of that spell or ability, the controller of that spell or ability chooses and announces the value of X as part of casting the spell or activating the ability. While on the stack, any X in its mana cost or in an alternative or additional cost equals the announced value. While an activated ability is on the stack, any X in its activation cost equals the announced value.

Simply put, if a spell's original cost and its alternative cost both include X, then when it is cast with the alternative cost, that X also becomes a characteristic of the spell's cost on the stack. Let us give a more concrete example. Suppose we now control [Lier, Disciple of the Drowned](https://scryfall.com/card/mid/59/lier-disciple-of-the-drowned) and [Up the Beanstalk](https://scryfall.com/card/woe/195/up-the-beanstalk), and use Lier's ability to flash back [Silver Scrutiny](https://scryfall.com/card/dmu/65/silver-scrutiny) from the graveyard, announcing X=3. Although flashback is an alternative cost, this X is also reflected in the cost characteristics of the spell itself, so Up the Beanstalk will see you cast a 5-mana (3UU) Silver Scrutiny and trigger its draw ability.

![Flashback X](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/e9b99dccb461.webp)

Using [Up the Beanstalk](https://scryfall.com/card/woe/195/up-the-beanstalk) again to check the situation of flashing back a spell with an X cost, let us make the problem a bit more advanced.

Suppose we flash back a [Devil's Play](https://scryfall.com/card/c19/138/devils-play) and announce X=2. You do have to pay 5 mana (2RRR) to cast it, but when checking the spell's characteristics on the stack, the game still checks the original characteristics and will only see that this is a spell with X=2 and a total of 3 mana (2R). Up the Beanstalk will not trigger its draw ability; if you want to draw, X must be at least 4.

[Light Up the Night](https://scryfall.com/card/mid/146/light-up-the-night) works the same way. Its flashback cost is 4 mana plus removing X loyalty counters from a planeswalker, and this X will determine what mana value the spell will have when you flash it back. If you want to draw with Up the Beanstalk, you must remove at least 4 loyalty counters, so that with X greater than or equal to 4, the spell's cost can reach 5 mana (4R).

![Kicker](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/9dfc4e601f65.webp)

The difference between alternative costs and additional costs is also something people confuse from time to time. The biggest difference between the two is that any spell can only use one alternative cost, but can have multiple additional costs.

Suppose you control [Omniscience](https://scryfall.com/card/m19/65/omniscience), which creates an alternative cost. If you use Omniscience's free-cast alternative cost, [Cyclonic Rift](https://scryfall.com/card/cmm/84/cyclonic-rift) can only use its original function of choosing one target nonland permanent and cannot choose overload; conversely, if you want to overload it you have to dutifully pay 7 mana and cannot use Omniscience's ability. But additional costs like kicker are different. Taking [Blink of an Eye](https://scryfall.com/card/dom/46/blink-of-an-eye) as an example, whether or not you apply Omniscience's alternative cost, you can pay an additional 2 mana on top of it to kick the spell.

### Note: Prototype Is Not an Alternative Cost

![Prototype](https://images.guildmagesforum.tw/posts/What-is-Alternative-Cost/09e5126f3166.webp)

Finally, a special case that is very easily misunderstood: although prototype's wording looks at first glance very much like an alternative cost, it is not! Prototype actually changes the characteristics of the spell. A [Phyrexian Fleshgorger](https://scryfall.com/card/bro/121/phyrexian-fleshgorger) cast with its prototype cost cannot be countered by [Disdainful Stroke](https://scryfall.com/card/khm/54/disdainful-stroke), and a kicked [Beseech the Mirror](https://scryfall.com/card/woe/82/beseech-the-mirror) can choose to cast the prototyped Phyrexian Fleshgorger, because the only alternative cost here is Beseech the Mirror's free-cast ability.

---

## Conclusion

**"[Any spell can only use one alternative cost](#any-spell-can-only-use-one-alternative-cost)"** Just remember this sentence and you have understood today's article. What remains is, when facing cards that only write a keyword without a full explanation, knowing what that keyword's definition is. Once you have sorted these out, when you face questions like "why can't you choose the alternative cost when flashing back FOW with Snapcaster Mage," I believe you can already answer very clearly.
