---
title: "Characteristic-Defining Abilities (CDA)"
date: "2024-01-03 10:50:24"
cover: "https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/d95bb385b150-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/d95bb385b150-cover.jpg"
excerpt: "Let's look at the rules behind the * that defines Tarmogoyf's size"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Characteristic-Defining-Ability/).

## Before We Start

Welcome to the second installment of the [Layer](https://mtg.fandom.com/wiki/Layer?so=search) series. The star of this issue is the CDA, that is, the Characteristic-Defining Ability.

CDAs are most commonly seen defining a creature's power/toughness, but of course that's not the only thing a CDA can do.

The reason CDAs get their own article is that a CDA affects an object's characteristics in a special way that differs from other effects. If you can't tell a CDA apart from an ordinary effect, then when facing certain characteristic questions you'll be left wondering "why doesn't this thing resolve the way the rulebook says??"

---

## What Counts as a CDA

The rules defining CDAs are as follows:

- 604.3 Some static abilities are characteristic-defining abilities. A characteristic-defining ability conveys information about an object's characteristics that would normally be found elsewhere on that object (such as its mana cost, card type line, or power/toughness box).
  Characteristic-defining abilities can add to or override information found elsewhere on that object.
  Characteristic-defining abilities function in all zones. They also function outside the game and before the game begins.
- 604.3a A static ability is a characteristic-defining ability if it meets the following criteria:
  (1) It defines an object's color, subtype, power, or toughness.
  (2) It is printed on the card it affects, or it is granted to the token it affects by the effect that creates the token, or it is acquired by the object it affects as the result of a copy effect or text-changing effect.
  (3) It does not directly affect the characteristics of any other objects.
  (4) It is not an ability that an object grants to itself.
  (5) It does not set a characteristic only if certain conditions are met.

The " _ " in the bottom right corner that defines the size of [Tarmogoyf](https://scryfall.com/card/mm3/141/tarmogoyf) and [Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn) is a typical example. Also, because the " _ " symbol used on normal cards is a character with special function in this website's syntax, I'll use the star symbol "⭐" instead in the rest of this article to avoid display bugs.

![封面](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/6003922717fd.webp)

Take [Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn) as an example, and let's check how its ability fares against 604.3.

**(1) It defines an object's color, subtype, power, or toughness.**
⭕ It defines Regal Bunnicorn's power/toughness.

**(2) It is printed on the card it affects, or it is granted to the token it affects by the effect that creates the token, or it is acquired by the object it affects as the result of a copy effect or text-changing effect.**
⭕ It is printed on Regal Bunnicorn's card face.

**(3) It does not directly affect the characteristics of any other objects.**
⭕ It only affects Regal Bunnicorn itself and indeed doesn't affect any other object.

**(4) It is not an ability that an object grants to itself.**
⭕ It is Regal Bunnicorn's own ability, not something granted to it by an external effect.

**(5) It does not set a characteristic only if certain conditions are met.**
⭕ It doesn't need to satisfy any condition to apply.

Besides the most common case of defining size, a CDA can also define an object's type or color, such as changeling and devoid:

![CDA](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/a87155b54069.webp)

> [Masked Vandal](https://scryfall.com/card/khm/184/masked-vandal): Changeling (This card is every creature type.)
> [Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler): Devoid (This card has no color.)

- 702.73a Changeling is a characteristic-defining ability. "Changeling" means "This object is every creature type." This ability works in all zones, even outside the game.
- 702.114a Devoid is a characteristic-defining ability. "Devoid" means "This object is colorless." This ability works in all zones, even outside the game.

---

## CDA Rules Examples

Next, let's see how the rules handle CDAs in various situations:

### Basic CDA Examples

![CDA](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/a954ce81cf11.webp)

> [Stern Scolding](https://scryfall.com/card/ltr/71/stern-scolding): Counter target creature spell with power or toughness 2 or less.
> [Tarmogoyf](https://scryfall.com/card/mm3/141/tarmogoyf): Tarmogoyf's power is equal to the number of card types among cards in all graveyards, and its toughness is equal to that number plus 1.
> [Walking Ballista](https://scryfall.com/card/2xm/306/walking-ballista): Walking Ballista enters the battlefield with X +1/+1 counters on it.

**"Characteristic-defining abilities function in all zones. They also function outside the game and before the game begins"** is the biggest difference between a CDA and an ordinary ability. For example, Stern Scolding can counter a creature spell with power or toughness 2 or less, and even if Walking Ballista is cast with X=1000, it's a 0/0 creature spell on the stack and can't escape Stern Scolding.

Tarmogoyf is different, though. Because a CDA works in any zone, even on the stack, as long as the graveyards have enough card types, Tarmogoyf can escape Stern Scolding's reach. Suppose that when you cast Tarmogoyf the graveyards have only 2 card types, instant and land (⭐=2). Tarmogoyf's characteristics are then 2/3, and Stern Scolding can target it, but you can respond by cycling a [Street Wraith](https://scryfall.com/card/tsr/141/street-wraith) to put one more card of another type, creature, into the graveyard. That way, when Stern Scolding resolves it finds Tarmogoyf is a 3/4 creature spell, and is countered on rules (it fizzles).

![備牌](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/ea8b0542fb49.webp)

> [Glittering Wish](https://scryfall.com/card/tsr/253/glittering-wish): You may choose a multicolored card you own from outside the game and put it into your hand. Exile Glittering Wish.
> [Ulamog's Nullifier](https://scryfall.com/card/bfz/207/ulamogs-nullifier): Devoid (This card has no color.)

As mentioned above, the CDA's scope even includes outside the game, which is usually the sideboard. Although Ulamog's Nullifier has blue and black in its mana cost and would normally be a multicolored card, the devoid ability redefines it as colorless, so if you want to use Glittering Wish to fetch an Ulamog's Nullifier from your sideboard, you can't.

![涅司羅](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/3ba1f8870bb2.webp)

> [Scourge of the Skyclaves](https://scryfall.com/card/znr/122/scourge-of-the-skyclaves): Scourge of the Skyclaves's power and toughness are each equal to 20 minus the highest life total among players.
> [Nethroi, Apex of Death](https://scryfall.com/card/iko/197/nethroi-apex-of-death): Whenever this creature mutates, return any number of target creature cards with total power 10 or less from your graveyard to the battlefield.

There's a very interesting example of a CDA working in any zone: the ability that defines Scourge of the Skyclaves's size is also a CDA, meaning it works in the graveyard, and this ⭐ can go negative. Suppose the highest life total among players is now 40 (you may be playing an EDH game). The size Scourge of the Skyclaves gets from its CDA is then -20/-20. When Nethroi, Apex of Death triggers its mutate ability to dig creatures with total power 10 or less from the graveyard, Scourge of the Skyclaves contributes -20 to the sum, so you can dig out one Scourge of the Skyclaves plus a bunch of other creatures with total power 30 or less.

![失去異能](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/ef71fd7d06cc.webp)

> [Sewer Nemesis](https://scryfall.com/card/vow/195/cultivator-colossus):
> As Sewer Nemesis enters the battlefield, choose a player.
> Sewer Nemesis's power and toughness are each equal to the number of cards in the chosen player's graveyard.
> [Dress Down](https://scryfall.com/card/mh2/39/dress-down): Creatures lose all abilities.

Although a CDA works in any zone, sometimes defining ⭐ uses information that can only be obtained under specific circumstances, and in other situations it's unclear how to assign ⭐ a value; for example, Sewer Nemesis not on the battlefield. In that case ⭐ is treated as 0, and the specific rule is:

- 208.2a Some cards have characteristic-defining abilities that set their power and/or toughness according to some condition. Such abilities function in all places, even outside the game. If the ability needs to use a number that can't be determined, 0 is used instead.

Also, a CDA is an ability too, and is affected by effects that remove abilities. Suppose Sewer Nemesis is currently a 5/5 on the battlefield and Dress Down enters; Sewer Nemesis loses its CDA, becomes 0/0, and dies right away. Conversely, if Dress Down is already on the battlefield, Sewer Nemesis entering is the same: it enters as a 0/0 and dies immediately. Tarmogoyf fares slightly better: its toughness is ⭐+1, so even after losing its abilities its toughness is still 1, and it doesn't die on the spot.

![倒楣鬼](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/5987ea7452e9.webp)

> [Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn): Regal Bunnicorn's power and toughness are each equal to the number of nonland permanents you control.
> [Cursed Role token (Aura)](https://scryfall.com/card/twoe/17/wicked-cursed): Enchanted creature is 1/1.

If Regal Bunnicorn has a Cursed Role attached, then no matter what ⭐ currently is, it becomes a 1/1. Explaining the principle behind this example requires Layers, so for now just remember the result.

![畫家](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/beedc96bb49c.webp)

> [Painter's Servant](https://scryfall.com/card/p23/1/painters-servant) :
> As Painter's Servant enters the battlefield, choose a color.
> All cards that aren't on the battlefield, spells, and permanents are the chosen color in addition to their other colors.
> [Eldrazi Obligator](https://scryfall.com/card/ogw/96/eldrazi-obligator): Devoid (This card has no color.)

- 613.3 In layers 2-6, apply effects from characteristic-defining abilities first, then apply all other effects in timestamp order. Note that dependency may alter the order in which effects are applied within a layer.

Although this is one of the important rules about CDAs, given the amount of rules introduced so far, this question is completely unanswerable. Layers, timestamps, and dependency are all deeper rules that the series plans to explain in later chapters, so here we'll just give the final answer.

If a Painter's Servant on the battlefield has declared blue, then Eldrazi Obligator's devoid CDA becomes meaningless, and Eldrazi Obligator ends up as a blue creature (card), not colorless.

### CDAs and Copy Effects

The most troublesome thing about handling CDAs is when they meet copy effects that modify characteristics, which can also be seen as a supplement to the previous installment, [What Is Copiable Value](https://guildmagesforum.tw/What-is-Copiable-Value/). When a copy effect meets a CDA, there is a particularly convoluted rule:

- 707.9d When a copy effect (1) doesn't copy a specified characteristic, (2) keeps one or more original values for a specified characteristic, or (3) provides a specific set of values for a specified characteristic, any characteristic-defining ability on the copied object that defines that specified characteristic **is not copied**. If that characteristic is color, the object's color indicator is also not copied. This rule doesn't apply to copy effects that have an exception stating "except it's also" certain card types, supertypes, and/or subtypes. In that case, any characteristic-defining ability that defines card types, supertypes, and/or subtypes is copied.

After reading it, it's normal not to understand what on earth this is saying; don't get hung up on it, just look at the examples first and then come back to understand what this rule means.

![613.3](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/f4708ca162af.webp)

> [The Scarab God](https://scryfall.com/card/cmm/353/the-scarab-god): {2}{U}{B}: Exile target creature card from a graveyard. Create a token that's a copy of the exiled card, except it's a 4/4 black Zombie.
> [Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn): Regal Bunnicorn's power and toughness are each equal to the number of nonland permanents you control.
> [Eldrazi Displacer](https://scryfall.com/card/ogw/13/eldrazi-displacer): Devoid (This card has no color.)

Suppose I use The Scarab God's ability to create modified copies of Regal Bunnicorn and Eldrazi Displacer. What are their characteristics?

The Scarab God's ability is **"a copy effect that provides a specific set of values for a specified characteristic"**, specifying both the size and the color of the copy, so neither Regal Bunnicorn's CDA nor Eldrazi Displacer's devoid is copied; they will be black 4/4 creatures.

![莫甘達岩畫](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/6d546e77af42.webp)

> [The Scarab God](https://scryfall.com/card/cmm/353/the-scarab-god): {2}{U}{B}: Exile target creature card from a graveyard. Create a token that's a copy of the exiled card, except it's a 4/4 black Zombie.
> [Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn): Regal Bunnicorn's power and toughness are each equal to the number of nonland permanents you control.
> [Muraganda Petroglyphs](https://scryfall.com/card/tsr/220/muraganda-petroglyphs): Creatures with no abilities get +2/+2.

This is an extended explanation based on the previous question. The phrase **"is not copied"** actually runs deep: it doesn't simply make the CDA not work, it makes the object directly lose its original CDA rules text. What would the specific impact be?

A normal Regal Bunnicorn has a CDA, which is a kind of ability, so it can't benefit from Muraganda Petroglyphs, but suppose you use The Scarab God to create a 4/4 black Zombie token of Regal Bunnicorn. Because it has lost the CDA, Muraganda Petroglyphs judges it to be a creature with no abilities, so it gets +2/+2.

![707.9d](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/18a02cfc0bf2.webp)

> [Masked Vandal](https://scryfall.com/card/khm/184/masked-vandal): Changeling (This card is every creature type.)
> [Glasspool Mimic](https://scryfall.com/card/znr/60/glasspool-mimic-glasspool-shore): You may have Glasspool Mimic enter the battlefield as a copy of a creature you control, except it's a Shapeshifter Rogue in addition to its other types.

- **This rule doesn't apply to copy effects that have an exception stating "except it's also" certain card types, supertypes, and/or subtypes. In that case, any characteristic-defining ability that defines card types, supertypes, and/or subtypes is copied.**

When quoting rule 707.9d earlier, this passage was probably the least human-readable, but once you see the example it's actually quite simple; the wording is just roundabout.

When Glasspool Mimic copies a creature, although it also defines types, its wording is "in addition to", and this phrasing doesn't make it lose the CDA. So when Glasspool Mimic copies Masked Vandal with changeling, the result is still a Masked Vandal with changeling, and the changeling ability is copied over properly.

### CDAs and Mutate

How can we talk about rules that mess with people without mentioning mutate?

![合變](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/9b0209638dbd.webp)

> [Pack Rat](https://scryfall.com/card/sld/35/pack-rat): Pack Rat's power and toughness are each equal to the number of Rats you control.
> [Cubwarden](https://scryfall.com/card/iko/7/cubwarden): Mutate {2}{W}{W}
> [Startling Development](https://scryfall.com/card/iko/68/startling-development): Until end of turn, target creature becomes a blue Serpent with base power and toughness 4/4.

Suppose I currently control only one Pack Rat and no other creatures, and I choose to mutate Cubwarden onto Pack Rat. After choosing to put Cubwarden on top or underneath, what is this creature's size in each case?

Although it looks similar to the Scarab God example above, mutate isn't a copy effect, so the copy rule about losing a CDA doesn't apply here, and the CDA won't disappear. Explaining this one also needs the Layer concept, so we'll just give the result for now:

No matter who you choose to be on top after the mutate, this creature's size will be defined by Pack Rat's CDA. If Pack Rat is on top it's a 1/1 (because it's your only Rat), while Cubwarden, since you have no Rats, would become 0/0 and die on the spot (though the ability triggered by the mutate still triggers successfully).

If you have other Rats on the battlefield, so that the mutated creature doesn't become a 0/0 and die no matter who is on top, and you now cast Startling Development on this creature, it temporarily becomes a blue 4/4 creature. Because this isn't a copy effect either, the CDA's function is merely temporarily overwritten and the ability isn't lost; when Startling Development's effect ends it goes back to being a ⭐/⭐ creature.

![合變](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/ecb4b8f8802a.webp)

> [Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn): Regal Bunnicorn's power and toughness are each equal to the number of nonland permanents you control.
> [Dirge Bat](https://scryfall.com/card/iko/84/dirge-bat): Mutate {4}{B}{B}
> [Dress Down](https://scryfall.com/card/mh2/39/dress-down): Creatures lose all abilities.

Another mutate example: mutate Dirge Bat onto Regal Bunnicorn. No matter who is on top or underneath, the size is ⭐/⭐. Now a Dress Down appears on the battlefield; how does this mutated creature's size change?

It depends on who is on top of your mutate, because the mutated creature's characteristics depend on the top creature, it's just that the CDA among the components sometimes overrides those characteristics. If Regal Bunnicorn is on top, you'll lose the CDA and become a 0/0 creature, just like the Sewer Nemesis example earlier; but if Dirge Bat is on top, this creature was originally supposed to be a 3/3 and was only overridden by the CDA to ⭐/⭐, and now that the CDA is temporarily lost because of Dress Down, this creature goes back to its original 3/3 characteristics.

### Grist, Which Looks a Lot Like a CDA

![格蕊斯](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/5d725cddbeaf.webp)

> [Grist, the Hunger Tide](https://scryfall.com/card/mh2/202/grist-the-hunger-tide): As long as Grist, the Hunger Tide isn't on the battlefield, it's a 1/1 Insect creature in addition to its other types.
> [Umori, the Collector](https://scryfall.com/card/mul/62/umori-the-collector): Companion — Each nonland card in your starting deck shares a card type.

Finally, let's talk about a guy that is easily mistaken for a CDA too, namely [Grist, the Hunger Tide](https://scryfall.com/card/mh2/202/grist-the-hunger-tide)'s "As long as Grist, the Hunger Tide isn't on the battlefield, it's a 1/1 Insect creature in addition to its other types." Let's look back at the CDA definition in 604.3a, where criterion 5 states **"It does not set a characteristic only if certain conditions are met"**. Grist's ability only works when it isn't on the battlefield, so it is not a CDA.

Although it's not a CDA, in practice the rules handling isn't much different, because the rule that applies to Grist reads:

- 113.6c An ability that states it doesn't function in a specified zone functions in any zone other than that specified zone, even outside the game or before the game begins.

Through this rule, Grist's ability that defines its own characteristics in zones outside the battlefield is no different from a changeling creature in the library having every creature type.

Also, Grist's ability is already in effect before the game begins, which actually means it's treated as a 1/1 Insect creature when checking deck construction. For example, [Umori, the Collector](https://scryfall.com/card/iko/231/umori-the-collector)'s companion condition is that all nonland cards in the deck share a type; if you plan to satisfy the companion condition with creature type, you can include Grist; or, even more extreme... Grist is a legendary creature, so in EDH deck construction you can also set it as your commander.

---

## Next: Timestamps

In the next installment of the Layer series we'll cover timestamps. Passengers, please fasten your seat belts: starting from the next issue, the rules will cut into territory more closely tied to the Layer system.

![Next](https://images.guildmagesforum.tw/posts/Characteristic-Defining-Ability/fc607a4d6a11.webp)
