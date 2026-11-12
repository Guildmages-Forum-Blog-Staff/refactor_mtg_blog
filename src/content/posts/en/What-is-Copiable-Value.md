---
title: "What Are Copiable Values?"
date: "2023-12-28 21:54:27"
cover: "https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/95def540c293-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/95def540c293-cover.jpg"
excerpt: "What do you get when Kiki-Jiki copies a manland that has become a creature?"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../What-is-Copiable-Value/).

## Before We Start

Starting with this installment, there will be a series of articles introducing how the famous seven [Layers](https://mtg.fandom.com/wiki/Layer?so=search) of MTG work. The Layers rigorously define the properties of an object, and among the most baffling rules questions, the ones that trip people up are often the Layer rules about rewriting an object's characteristics.

The Layer rules are extremely deep, and the many rules they cite frequently refer back to each other, so I racked my brain over what order would let me introduce them systematically...

My final answer: first explain, one by one, the smaller and more complex topics that are worth covering even setting the Layers aside, and then begin the full analysis of the Layer structure, folding those earlier pieces back into the larger system.

In this article we will first introduce the most basic information about every object, namely its **"copiable values."** For some problems that need the Layer concept to be fully analyzed, this article may not expand on them completely and will only give a simple way to understand them; the formal, detailed rule interpretation is reserved for the main Layer articles.

![Cover](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/d005a6759978.webp)

---

## The Definition of Copiable Values

First, let's look at the core rule defining copiable values:

- 707.2 When copying an object, the copy acquires the copiable values of the original object's characteristics.
  **"Copiable values" means the values derived from the text printed on the object (that text being the name, mana cost, color indicator, card type, supertype, subtype, rules text, power, toughness, and/or loyalty)**; as modified by other copy effects, by its face-down status, and by "as ... enters the battlefield" and "as ... is turned face up" abilities that set power and toughness (and may also set additional characteristics). Other effects (including type-changing and text-changing effects), status, counters, and stickers are not copied.

![](https://cards.scryfall.io/large/front/d/6/d67be074-cdd4-41d9-ac89-0a0456c4e4b2.jpg?1674057568)

> Take [Sheoldred, the Apocalypse](https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse) as an example: **all of the information inside the card's black border, such as the text, numbers, and color symbols, is copiable values** (but not the collector number, rarity, set code, language, or artist at the bottom left, nor the Wizards trademark at the bottom right).

**If the object being copied is on the stack, this also includes the choices made when it was cast or activated (modes, targets, the value of X, whether kicker was paid, how it affects multiple targets, and so on).**

![](https://cards.scryfall.io/large/front/d/e/de547f52-3798-4b3a-947d-24873251204b.jpg?1624591645)

> As another example, take [Crackle with Power](https://scryfall.com/card/stx/95/crackle-with-power). If you decide X=3 when casting it, and it is a sorcery with total mana value 11 when copied, then the copy is likewise a sorcery with X=3 and mana value 11, and both can deal 15 damage each to up to 3 targets.

**"When copying an object, the copy acquires the copiable values of the original object's characteristics"** is the key to everything. Conversely, it can be read as "information that is not a copiable value does not take part in copy effects." When we discuss rules questions about copying an object, we are really trying to work out what the copiable values of that object are, and all the rules that follow either define what counts as a copiable value or describe which effects can modify an object's copiable values.

A few more basic defining rules are also worth mentioning here:

- 707.2a A copy acquires the color of the object it is copying, because that characteristic is derived from the latter's mana cost. A copy acquires all abilities of the object it is copying, because that characteristic is derived from the latter's rules text. A copy doesn't acquire two sets of characteristics from the same ability (it doesn't copy the object's abilities and its rules text, and then define a new identical set of abilities from that rules text).
- 707.2b Once an object has been copied, changing the copiable values of the original object doesn't cause the objects copying it to change as well.
- 707.2c If a static ability generates a continuous effect that is a copy effect, the copiable values granted by that effect are determined only when the effect first begins to apply.
- 707.3 The copy's copiable values are replaced by the information being copied, and are affected by the copy's **"status."** When other objects copy this object, they use its new copiable values.

Rule 707.3 puts special emphasis on the word "status," because "status" here is not natural language but a defined MTG rules term. It exists only in the underlying rules framework, and no card uses this word on its face to describe its own ability. I will explain it in detail when we reach examples that need the concept of "status."

If I crammed every rules clause into this one section, I believe that even if readers could get through it, they would have forgotten the beginning by the end, so the remaining detailed rules will likewise be cited only when a relevant example comes up.

---

## Copying Spells

Let's start with the relatively simple case of copying spells. The main rules are the following two:

- 707.10. To copy a spell, activated ability, or triggered ability means to put a copy of it onto the stack; a copy of a spell isn't cast and a copy of an activated ability isn't activated. A copy of a spell or ability copies both the characteristics of the spell or ability and all decisions made for it, including modes, targets, the value of X, and additional or alternative costs. (See rule 601, "Casting Spells.") Choices that are normally made on resolution are not copied. If an effect of the copy refers to objects used to pay its costs, it uses the objects used to pay the costs of the original spell or ability. A copy of a spell is owned by the player under whose control it was put on the stack. A copy of a spell or ability is controlled by the player under whose control it was put on the stack. A copy of a spell is still a spell, even though it has no spell card associated with it. A copy of an ability is still an ability.
- 707.10f Some effects copy a permanent spell. When that copy resolves, it will no longer be a copy of a spell, and it becomes a token permanent.

{% notel blue Copying Spells, Example 1 %}
![Copying an instant 0](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/b08e24d31357.webp)

> [Dualcaster Mage](https://scryfall.com/card/2xm/124/dualcaster-mage): When Dualcaster Mage enters the battlefield, copy target instant or sorcery spell. You may choose new targets for the copy.
> [Opt](https://scryfall.com/card/xln/65/opt): Scry 1. Draw a card.
> [Young Pyromancer](https://scryfall.com/card/2x2/131/young-pyromancer): Whenever you cast an instant or sorcery spell, create a 1/1 red Elemental creature token.

When you use Dualcaster Mage's ETB ability to copy Opt, because the copied spell was not cast, it cannot trigger Young Pyromancer's cast trigger.
{% endnotel %}

{% notel blue Copying Spells, Example 2 %}
![Copying an instant 1](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/0227066441b2.webp)

> [Dualcaster Mage](https://scryfall.com/card/2xm/124/dualcaster-mage): When Dualcaster Mage enters the battlefield, copy target instant or sorcery spell. You may choose new targets for the copy.
> [Fling](https://scryfall.com/card/eld/126/fling): As an additional cost to cast this spell, sacrifice a creature. Fling deals damage equal to the sacrificed creature's power to any target.
> [Pull from Tomorrow](https://scryfall.com/card/2x2/62/pull-from-tomorrow): Draw X cards, then discard a card.

Both the amount of damage Fling can deal and the X in Pull from Tomorrow are copiable values of the spell. For example, if you cast Pull from Tomorrow with X=4 and copy it once, that is two instances of draw 4, discard 1. Also note that Fling's sacrificing a creature is its cost, not its effect, and costs are not copied. So when you copy Fling, you simply choose another target to deal the same damage to. Similar interactions include [Galvanic Iteration](https://scryfall.com/card/mid/224/galvanic-iteration) + [Big Score](https://scryfall.com/card/snc/102/big-score).
{% endnotel %}

{% notel blue Copying Spells, Example 3 %}
![Copying an instant 2](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/bb76f6880a63.webp)

> [Dualcaster Mage](https://scryfall.com/card/2xm/124/dualcaster-mage): When Dualcaster Mage enters the battlefield, copy target instant or sorcery spell. You may choose new targets for the copy.
> [Get Lost](https://scryfall.com/card/lci/14/get-lost): Destroy target creature, enchantment, or planeswalker. Its controller creates two Map tokens.
> [Destroy Evil](https://scryfall.com/card/dmu/17/destroy-evil): Choose one —
> • Destroy target creature with toughness 4 or greater.
> • Destroy target enchantment.

When you copy a spell, you copy all the decisions made for it, which includes modes. Get Lost has no mode choice when cast, so when you copy Get Lost with Dualcaster Mage you can freely choose which creature, enchantment, or planeswalker to target. Destroy Evil is different: its mode is chosen when it is cast, and that mode becomes a copiable value of the spell. So suppose the original Destroy Evil was cast choosing "Destroy target enchantment." If you copy it, you can only target an enchantment and cannot choose "Destroy target creature with toughness 4 or greater."
{% endnotel %}

{% notel blue Copying Spells, Example 4 %}
![Copying an instant 3](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/18a9ee6cbe32.webp)

> [Dualcaster Mage](https://scryfall.com/card/2xm/124/dualcaster-mage): When Dualcaster Mage enters the battlefield, copy target instant or sorcery spell. You may choose new targets for the copy.
> [Memory Deluge](https://scryfall.com/card/mid/62/memory-deluge): Look at the top X cards of your library, where X is the amount of mana spent to cast this spell. Put two of them into your hand and the rest on the bottom of your library in a random order.
> [Prismatic Ending](https://scryfall.com/card/mh2/25/prismatic-ending): Converge — Exile target nonland permanent if its mana value is less than or equal to the number of colors of mana spent to cast this spell.

There is another kind of information that is easily mistaken for a copiable value: the mana spent to cast a spell. Using the [Pull from Tomorrow](https://scryfall.com/card/2x2/62/pull-from-tomorrow) example above, what is actually copied is the X value you declared, not how much you paid in total to cast the spell. A normal X=4 Pull from Tomorrow costs 6, and perhaps because of [Thalia, Guardian of Thraben](https://scryfall.com/card/vow/38/thalia-guardian-of-thraben) you paid 7 to cast it, but none of that has anything to do with copiable values; it only cares what your X is.

Back to this example: when you copy a Memory Deluge, the game cannot check how much you paid to cast the original. It only knows that the copied Memory Deluge was cast for no cost (you could also say 0 mana), so it resolves by looking at the top 0 cards of your library. Copying Prismatic Ending is the same: the copy can only exile a nonland permanent with mana value 0. The good news is that it is at least not completely useless, since it can perhaps still kill a token or the like.

> Since we've mentioned Thalia, Guardian of Thraben and Prismatic Ending, let me also cover a related rules ruling:
> Prismatic Ending can be cast targeting any nonland permanent; it's just that on resolution, if that permanent's mana value is greater than the number of colors spent, it has no effect. The extra cost added to a spell by Thalia, Guardian of Thraben is also part of what you paid to cast that spell. So if you want to use Prismatic Ending on Thalia, Guardian of Thraben, you can declare X=0, then pay 1 more because of Thalia, so you actually still pay 2 mana to cast it. As long as those 2 mana include two colors, you successfully remove Thalia.

{% endnotel %}

---

## Copying Permanents

We finally arrive at the main course. Before we begin, readers can remember a mnemonic: "**Effects that can modify copiable values almost always mention copying.**" Remembering this quick test helps distinguish how an effect works in later examples. Now let's analyze the examples and see how to read the rules.

Note: A copy effect copies the card name as well. To make it easier to tell which object is being discussed, whenever A becomes a copy of B below, I will still refer to that object as A, even though A's card name has actually become B.

{% notel blue Copying Permanents, Example 1 %}
![707.2a](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/9e4ec024a3e6.webp)

> [Dream Eater](https://scryfall.com/card/grn/38/dream-eater): It's a 6-mana creature.
> [Quasiduplicate](https://scryfall.com/card/grn/51/quasiduplicate): Create a token that's a copy of target creature you control.
> [Ritual of Soot](https://scryfall.com/card/grn/84/ritual-of-soot): Destroy all creatures with mana value 3 or less.

Normally a token's mana value is 0, but if it is a token that is a copy of a permanent, the mana value is copied too, because the mana cost is one of the copiable values. For example, if I now use Quasiduplicate to create a token copy of Dream Eater, that token is still a 6-mana creature and will not be destroyed by Ritual of Soot.
{% endnotel %}

{% notel blue Copying Permanents, Example 2 %}
![707.2](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/f841a7196b10.webp)

> [Reflection of Kiki-Jiki](https://scryfall.com/card/neo/141/fable-of-the-mirror-breaker-reflection-of-kiki-jiki?back): {T}: Create a token that's a copy of another target nonlegendary creature you control, except it has haste. Sacrifice it at the beginning of the next end step.
> [Reckoner Bankbuster](https://scryfall.com/card/neo/255/reckoner-bankbuster): It's a Vehicle.

Suppose Reckoner Bankbuster has already become a creature through crew, and now I use Reflection of Kiki-Jiki's ability to create a token copy of Reckoner Bankbuster. Will it be a creature?

To answer this fully you need the Layer concept, but rule 707.2's definition of copiable values is enough to answer it. The answer first:

This token will be a noncreature Vehicle, but it still has haste, so as long as you can make it a creature, it can still attack.

How do we explain this result? The simple answer is that neither crew's type-changing nor its power/toughness-defining ability acts on copiable values, so even though Reckoner Bankbuster is a creature right now, those creature characteristics can't be copied. The deeper answer is left for the Layer column.
{% endnotel %}

{% notel blue Copying Permanents, Example 3 %}
![OKO](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/0bb51781fd3b.webp)

> [Oko, Thief of Crowns (+1)](https://scryfall.com/card/eld/197/oko-thief-of-crowns): Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3.
> [Gilded Goose](https://scryfall.com/card/eld/160/gilded-goose): A creature to copy.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

I have a Gilded Goose that has become a 3/3 Elk through Oko's +1 ability. Now I let Mirror Image enter as a copy of this Gilded Goose that has become an Elk. What does Mirror Image look like?

Oko's +1 does many things, including changing types, changing colors, removing abilities, and defining power and toughness, but none of these modifies copiable values, so Mirror Image enters as a copy of a normal Gilded Goose.
{% endnotel %}

{% notel blue Copying Permanents, Example 4 %}
![The One Ring](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/7edd66079505.webp)

> [Oko, Thief of Crowns (+1)](https://scryfall.com/card/eld/197/oko-thief-of-crowns): Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3.
> [The One Ring](https://scryfall.com/card/ltr/246/the-one-ring): A noncreature legendary artifact.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

It is again Oko's +1, but this time the target that becomes an Elk is my The One Ring. Because The One Ring has become a creature, I can have Mirror Image enter as a copy of The One Ring. By the same principle as the previous example, though, since Oko doesn't change copiable values, Mirror Image ends up landing as a normal The One Ring, not a green 3/3 Elk. Also, Oko doesn't erase the name or the legendary supertype, so now I control two legendary permanents both named The One Ring, and under the legend rule I must sacrifice one until only one remains.
{% endnotel %}

{% notel blue Copying Permanents, Example 5 %}
![707.3](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/dc1ca2d6d21c.webp)

> [Sentinel of the Nameless City](https://scryfall.com/card/lci/211/sentinel-of-the-nameless-city): A creature to copy.
> [Deepfathom Echo](https://scryfall.com/card/lci/228/deepfathom-echo): At the beginning of combat on your turn, Deepfathom Echo explores. Then you may have it become a copy of another creature you control until end of turn.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

Suppose I first have Deepfathom Echo become a copy of Sentinel of the Nameless City until end of turn using its own ability, and then have Mirror Image enter as a copy of Deepfathom Echo (which is currently a copy of Sentinel of the Nameless City). What does my Mirror Image look like now? Does it change at end of turn?

First of all, Deepfathom Echo's ability is different from the Oko example above: it is an ability that truly modifies copiable values, and this holds even for a temporary copy. When another effect tries to copy Deepfathom Echo, it uses the updated copiable values, and it looks only at what the Echo looks like at the moment of copying, regardless of what happens to the original later.

When Mirror Image enters, Deepfathom Echo's copiable values are the same as Sentinel of the Nameless City's, so Mirror Image effectively becomes a copy of Sentinel of the Nameless City. At end of turn, Deepfathom Echo's copy effect ends and it returns to its original form, but Mirror Image stays in the form of Sentinel of the Nameless City.
{% endnotel %}

{% notel blue Copying Permanents, Example 6 %}
![707.4](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/2d03cc742741.webp)

> [Sentinel of the Nameless City](https://scryfall.com/card/lci/211/sentinel-of-the-nameless-city): A creature to copy.
> [Deepfathom Echo](https://scryfall.com/card/lci/228/deepfathom-echo): At the beginning of combat on your turn, Deepfathom Echo explores. Then you may have it become a copy of another creature you control until end of turn.
> [Titanic Growth](https://scryfall.com/card/woe/191/titanic-growth): Target creature gets +4/+4 until end of turn.

Deepfathom Echo is currently its original 4/4. I use Titanic Growth on it to make it 8/8, and then use its own ability to become a copy of Sentinel of the Nameless City, which has 3/4 stats (suppose it explored a land, which doesn't affect its stats). What are Deepfathom Echo's stats now?

- 707.4 Some effects cause a permanent that's already a copy of one permanent on the battlefield to become a copy of a different permanent and remain on the battlefield. This doesn't trigger enters-the-battlefield or leaves-the-battlefield abilities. If a noncopy effect is currently affecting the permanent, that effect isn't changed.

From this rule we learn that although Deepfathom Echo's copiable values are modified to Sentinel of the Nameless City's 3/4 stats, this doesn't affect the +4/+4 effect from Titanic Growth, so Deepfathom Echo ends up at 7/8.
{% endnotel %}

{% notel blue Copying Permanents, Example 7 %}
![707.5](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/b01390df91b0.webp)

> [Jewel Thief](https://scryfall.com/card/snc/151/jewel-thief): When Jewel Thief enters the battlefield, create a Treasure token.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.
> [Deepfathom Echo](https://scryfall.com/card/lci/228/deepfathom-echo): At the beginning of combat on your turn, Deepfathom Echo explores. Then you may have it become a copy of another creature you control until end of turn.

I have Mirror Image enter as a copy of Jewel Thief, and separately have Deepfathom Echo become a copy of Jewel Thief. Do I get a Treasure token?

- 707.5 An object that enters the battlefield "as a copy" or "becomes a copy" of ... is already a copy of that permanent as it enters the battlefield. It doesn't enter the battlefield and then become a copy of that permanent. If the rules text being copied includes any abilities that replace the event of entering the battlefield (such as "enters the battlefield with ..." or "as [this permanent] enters the battlefield" abilities), those abilities will take effect. Also, any enters-the-battlefield triggered abilities the copy has will have a chance to trigger.

From this rule we can see that Mirror Image enters independently as a new Jewel Thief, and at that time it can create a Treasure token. As for Deepfathom Echo, it never checks the entering moment, so naturally it has no chance to make a Treasure.
{% endnotel %}

{% notel blue Copying Permanents, Example 8 %}
![707.6](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/982d18be06f2.webp)

> [Cavern of Souls](https://scryfall.com/card/lci/269/cavern-of-souls): As Cavern of Souls enters the battlefield, choose a creature type.
> [Vesuva](https://scryfall.com/card/tsr/289/vesuva): You may have Vesuva enter the battlefield as a copy of any land on the battlefield.
> [Thespian's Stage](https://scryfall.com/card/2xm/327/thespians-stage): {2}, {T}: Thespian's Stage becomes a copy of target land, except it has this ability.

So what if we change the question: when Cavern of Souls entered it named Elemental, and I have Vesuva enter as a copy of Cavern of Souls, and have Thespian's Stage become a copy of Cavern of Souls. What does each become?

- 707.6 When copying a permanent, the copy effect doesn't copy choices made for that permanent. However, if an object enters the battlefield as a copy of another permanent, the controller of that object may make the "as [this object] enters the battlefield" choices for it.

Put plainly, it's much the same as the Jewel Thief example, and what creature type the original Cavern of Souls named doesn't matter at all. Vesuva enters independently as a new Cavern of Souls, and at that time it can freely choose a creature type. As for Thespian's Stage, it also never checks the entering moment and has no chance to name a creature type, so becoming a copy of Cavern of Souls is really just giving itself a new card name.
{% endnotel %}

{% notel blue Copying Permanents, Example 9 %}
![707.9a](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/c4e7baa7bdb7.webp)

> [Phyrexian Dreadnought](https://scryfall.com/card/g10/3/phyrexian-dreadnought): When Phyrexian Dreadnought enters the battlefield, sacrifice it unless you sacrifice any number of creatures with total power 12 or greater.
> [Likeness Looter](https://scryfall.com/card/woe/208/likeness-looter): {X}: Choose target creature card with mana value X in your graveyard. Likeness Looter becomes a copy of that card, except it has flying and this ability. Activate only as a sorcery.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

Suppose I have Likeness Looter become a copy of Phyrexian Dreadnought in my graveyard, and then have Mirror Image enter as a copy of Likeness Looter. What happens?

- 707.9 A copy effect may add modifications or exceptions to the copying process.
- 707.9a Some copy effects give the copy an ability as part of the copying process. This ability becomes part of the copiable values for the copy, along with any other abilities that were copied.

When Likeness Looter becomes a copy of another creature, it is not copied wholesale; the copiable values are modified slightly. After becoming a copy of the target creature card, it "adds" flying and this activated ability to its own copiable values. Then, if Mirror Image enters as a copy of Likeness Looter, it becomes a Phyrexian Dreadnought that additionally has flying and the become-a-copy activated ability. Of course... the ability to sacrifice creatures on entering was copied too, so I hope you have a [Stifle](https://scryfall.com/card/cns/108/stifle) ready to deal with your own triggered ability.
{% endnotel %}

{% notel blue Copying Permanents, Example 10 %}
![Extra types](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/28ad8f033a77.webp)

> [Spirited Companion](https://scryfall.com/card/cmm/838/spirited-companion): When Spirited Companion enters the battlefield, draw a card.
> [Glasspool Mimic // Glasspool Shore](https://scryfall.com/card/znr/60/glasspool-mimic-glasspool-shore): You may have Glasspool Mimic enter the battlefield as a copy of any creature you control, except it's a Shapeshifter Rogue in addition to its other types.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

- 707.9 A copy effect may add modifications or exceptions to the copying process.
- 707.9b Some copy effects modify a characteristic as part of the copying process. The final set of values for that characteristic becomes part of the copiable values of the copy.

Suppose I have Glasspool Mimic enter as a copy of Spirited Companion. Glasspool Mimic's ability also slightly modifies its own copiable values, ultimately making its types "Dog Shapeshifter Rogue," and if Mirror Image then enters as a copy of Glasspool Mimic, naturally its types are also "Dog Shapeshifter Rogue." Don't forget that they can both trigger Spirited Companion's enters-the-battlefield draw ability.
{% endnotel %}

{% notel blue Copying Permanents, Example 11 %}
![Gideon](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/864d74c47896.webp)

> [Gideon Jura (0)](https://scryfall.com/card/cmm/822/gideon-jura):
> Until end of turn, Gideon Jura becomes a 6/6 Human Soldier creature that's still a planeswalker. Prevent all damage that would be dealt to him this turn.
> [Gideon Blackblade](https://scryfall.com/card/war/13/gideon-blackblade):
> As long as it's your turn, Gideon Blackblade is a 4/4 Human Soldier creature with indestructible that's still a planeswalker.
> [Spark Double](https://scryfall.com/card/war/68/spark-double):
> You may have Spark Double enter the battlefield as a copy of a creature or planeswalker you control, except it enters with an additional +1/+1 counter on it if it's a creature, it enters with an additional loyalty counter on it if it's a planeswalker, and it isn't legendary if that permanent is legendary.

Let's do a mid-article recap and apply the rules mentioned so far to answer this one. It is my turn, and I have a Gideon Jura that became a creature through its (0) ability, and a Gideon Blackblade that is automatically a creature through its static ability. Spark Double enters as a copy of each of these two Gideons. What does each Spark Double end up looking like?

First, without a doubt, this Spark Double will not have the legendary supertype, and this becomes part of its copiable values; if someone later copies this Spark Double, the result will likewise not be a legendary permanent.

Next is the question of whether this Spark Double is a creature and what counters it has. Let's look at Gideon Jura first. From the earlier definition of copiable values, Gideon Jura's ability to turn himself into a creature does not affect copiable values, and what Spark Double sees is just an ordinary planeswalker. So it enters as a noncreature planeswalker with an additional loyalty counter.

By that logic, Gideon Blackblade should be the same, since its ability doesn't modify copiable values either, right? The answer is slightly more complicated. Gideon Blackblade's ability indeed doesn't modify copiable values, but the static ability that makes it a creature on your turn is itself part of its copiable values. Spark Double copies that ability along with everything else, and it already applies as Spark Double enters. So if you copy Gideon Blackblade with Spark Double, it enters with the types "Creature Planeswalker," and because it has both types as it enters, it gets an additional +1/+1 counter and an additional loyalty counter.
{% endnotel %}

{% notel blue Copying Permanents, Example 12 %}
![Cat-cart Ob Nixilis](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/eba5e200e128.webp)

> [Ob Nixilis, the Adversary](https://scryfall.com/card/snc/206/ob-nixilis-the-adversary): Casualty X. The copy isn't legendary and has starting loyalty X. (As you cast this spell, you may sacrifice a creature with power X. When you do, copy this spell. The copy becomes a token.)
> [Esika's Chariot](https://scryfall.com/card/khm/169/esikas-chariot): Whenever Esika's Chariot attacks, create a token that's a copy of target token you control.

Speaking of creating nonlegendary planeswalker tokens, Ob Nixilis with Esika's Chariot is also a classic example. Ob Nixilis, the Adversary's casualty changes the characteristics of the token it ultimately produces. Losing the legendary supertype is easy to understand, and the Ob Nixilis token's starting loyalty being the X defined at casualty is also easy to understand (suppose the creature sacrificed to casualty was [The Ancient One](https://scryfall.com/card/lci/222/the-ancient-one), so X is 8). But if I use Esika's Chariot to create a token copy of that Ob Nixilis token, is the copy token's starting loyalty 3 or 8?

How Ob Nixilis, the Adversary really works is a bit deep and a bit convoluted, so here is just the simple conclusion: casualty creates a copy of a permanent spell whose copiable values have been modified, and when that spell resolves it produces a permanent with the corresponding characteristics. So the Ob Nixilis token that was originally made by casualty with The Ancient One has a copiable starting loyalty of 8, and a token copy of it will likewise be a nonlegendary Ob Nixilis, the Adversary with starting loyalty 8.
{% endnotel %}

{% notel blue Copying Permanents, Example 13 %}
![707.9e](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/4ef11ef10818.webp)

> [Spirited Companion](https://scryfall.com/card/cmm/838/spirited-companion): When Spirited Companion enters the battlefield, draw a card.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.
> [Altered Ego](https://scryfall.com/card/soi/241/altered-ego): You may have Altered Ego enter the battlefield as a copy of any creature on the battlefield, except it enters with X additional +1/+1 counters on it.

- 707.9e Some replacement effects that cause a copy effect include an exception that is itself an additional effect (rather than a modification of the affected object's characteristics). If another copy effect applies to the object after the copy effect with such an exception, that exception's effect doesn't happen.

This is an extremely tricky and rare special case. You can just skim it, and it's no problem to pass over it if you don't follow. Suppose I have a Spirited Companion and a Mirror Image on the battlefield, and Mirror Image did not enter as a copy of any creature. Now you have Altered Ego enter as a copy of Mirror Image, and because of Mirror Image's own replacement effect you choose to copy Spirited Companion as it enters. In the end you will not be able to put X additional +1/+1 counters on it through Altered Ego's original replacement effect.
{% endnotel %}

{% notel blue Copying Permanents, Example 14 %}
![707.9f](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/f647919a4039.webp)

> [Moritte of the Frost](https://scryfall.com/card/khm/223/moritte-of-the-frost): You may have Moritte of the Frost enter the battlefield as a copy of a permanent you control, except it's legendary and snow in addition to its other types and, if it's a creature, it enters with two additional +1/+1 counters on it and has changeling.
> [Lair of the Hydra](https://scryfall.com/card/afr/259/lair-of-the-hydra): {X}{G}: Until end of turn, Lair of the Hydra becomes an X/X green Hydra creature. It's still a land. X can't be 0.

Suppose I first make Lair of the Hydra a 1/1 Hydra land creature, and then have Moritte of the Frost enter as a copy of Lair of the Hydra. What are Moritte of the Frost's characteristics at that point?

- 707.9f Some exceptions to the copying process only apply if the copy is or has a certain characteristic. To determine whether such an exception applies, consider what the characteristics of the permanent resulting from the copy effect would be if the exception were not applied, taking into account any other exceptions that effect includes.

Let's review once more: does Lair of the Hydra's ability to become a creature modify copiable values? Clearly not, so Lair of the Hydra's current stats are actually irrelevant. Moritte of the Frost will enter only as a copy of a land, additionally with the legendary and snow types. These two types are written into its copiable values. Because Moritte of the Frost is not entering as a creature, it gets no +1/+1 counters and no changeling.
{% endnotel %}

---

## Copying Double-Faced Permanents

This topic was already discussed in detail in the article **[Transforming Double-Faced Cards and Copy Effects](https://guildmagesforum.tw/en/DFC-Copy/)**, so here I will only quickly cover the most basic rules. For a more detailed rules analysis, please refer to that article.

{% notel blue Copying Double-Faced Permanents, Example 1 %}
![707.8](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/da61cafa1efc.webp)

> [Graveyard Trespasser // Graveyard Glutton](https://scryfall.com/card/mid/104/graveyard-trespasser-graveyard-glutton): A transforming double-faced creature card. (Hereafter called the "black werewolf.")
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

- 707.8 When copying a merged permanent or another double-faced card, use the copiable values of the permanent's currently face-up characteristics to determine the characteristics of the copy.

If you make a permanent a copy of a transforming double-faced permanent, for example making Mirror Image a copy of the black werewolf, the black werewolf's copiable values are whichever face is currently up, and this copy effect can't see the other face's copiable values at all. Suppose the black werewolf is currently the back-face Graveyard Glutton: Mirror Image becomes a copy of Graveyard Glutton, and even if day and night later change and the black werewolf transforms back to the front-face Graveyard Trespasser, Mirror Image still looks like Graveyard Glutton.
{% endnotel %}

{% notel blue Copying Double-Faced Permanents, Example 2 %}
![707.8a](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/9da970092cc8.webp)

> [Graveyard Trespasser // Graveyard Glutton](https://scryfall.com/card/mid/104/graveyard-trespasser-graveyard-glutton): A transforming double-faced creature card. (Hereafter called the "black werewolf.")
> [Quasiduplicate](https://scryfall.com/card/grn/51/quasiduplicate): Create a token that's a copy of target creature you control.

- 707.8a If an effect creates a token that's a copy of a transforming permanent or a transforming double-faced card not on the battlefield, the created token is a transforming token that has both a front face and a back face. The characteristics of each face are determined from the copiable values of the same face of the permanent it is a copy of, as modified by any other copy effects that applied to that permanent. If the token is a copy of a transforming permanent with its back face up, the token enters the battlefield with its back face up. This rule does not apply to tokens that are created with their own characteristics and enter the battlefield as a copy of a transforming permanent due to a replacement effect.

Creating a token copy of a transforming double-faced permanent or card is a bit more complicated. The token checks the copiable values of both faces of the original and copies them onto its corresponding faces. For example, if I use Quasiduplicate to create a token copy of the black werewolf, that token will also follow the black werewolf's transform rules and transform to the corresponding face when day and night change.

Note, though, that creating a token copy is a relatively special case; generally, when checking copiable values you can still only see the information of the face that is currently up.
{% endnotel %}

{% notel blue Copying Double-Faced Permanents, Example 3 %}
![Dollhouse of Horrors](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/46336077c61c.webp)

> [Graveyard Trespasser // Graveyard Glutton](https://scryfall.com/card/mid/104/graveyard-trespasser-graveyard-glutton): A transforming double-faced creature card. (Hereafter called the "black werewolf.")
> [Dollhouse of Horrors](https://scryfall.com/card/vow/255/dollhouse-of-horrors): {1}, {T}, Exile a creature card from your graveyard: Create a token that's a copy of the exiled card, except it's a 0/0 Construct artifact in addition to its other types and has "This creature gets +1/+1 for each artifact you control." It gains haste until end of turn. Activate only as a sorcery.

Let's put together the rules mentioned above. What happens if you create a token copy of a transforming double-faced permanent or card, and then modify that token's characteristics?

- 707.9 A copy effect may add modifications or exceptions to the copying process.
- 707.9a Some copy effects give the copy an ability as part of the copying process. This ability becomes part of the copiable values for the copy, along with any other abilities that were copied.
- 707.9b Some copy effects modify a characteristic as part of the copying process. The final set of values for that characteristic becomes part of the copiable values of the copy.

Suppose you use Dollhouse of Horrors to create a token copy of the black werewolf. As in the previous example, this token copies the corresponding copiable values on both faces and can transform according to its own day/night rules. However, on either face, the copiable values will be modified by Dollhouse of Horrors: the types gain artifact and Construct, the stats become 0/0, and it has "This creature gets +1/+1 for each artifact you control." As for the haste until end of turn, it is not a copiable value, so if you copy this token again, the resulting creature will not have haste.
{% endnotel %}

{% notel blue Copying Double-Faced Permanents, Example 4 %}
![Life-locking Angel](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/44eb9cf14b24.webp)

> [Ludevic, Necrogenius // Olag, Ludevic's Hubris](https://scryfall.com/card/mid/233/ludevic-necrogenius-olag-ludevics-hubris): Can transform into Olag, Ludevic's Hubris.
> [Olag, Ludevic's Hubris](https://scryfall.com/card/mid/233/ludevic-necrogenius-olag-ludevics-hubris?back): When this creature transforms into Olag, Ludevic's Hubris, it becomes a copy of a creature card exiled with it, except its name is Olag, Ludevic's Hubris, it's 4/4, it's a legendary blue and black Zombie in addition to its other colors and types.
> [Enduring Angel // Angelic Enforcer](https://scryfall.com/card/mid/17/enduring-angel-angelic-enforcer): If you would lose the game, instead transform Enduring Angel and your life total becomes 3. Then if Enduring Angel didn't transform this way, you lose the game.

This is a classic example also mentioned in **[Transforming Double-Faced Cards and Copy Effects](https://guildmagesforum.tw/en/DFC-Copy/)**, so let's quickly review it once more.

You transform Ludevic, Necrogenius into Olag, Ludevic's Hubris, which becomes a copy of Enduring Angel. Later your life drops to 0, so Enduring Angel's ability applies and your life total becomes 3. What does your Olag look like afterward? Will it cause you to lose the game due to Enduring Angel's ability?

First, Olag is itself a transforming double-faced card and can perform the transform action, so you won't be hit by Enduring Angel's lose-the-game rule. Then what does Olag look like after transforming?

- 712.8a While a double-faced card is outside the game or in a zone other than the battlefield or stack, it has only the characteristics of its front face.
- 712.18 When a transforming double-faced permanent transforms, it doesn't become a new object. Any effects that applied to that permanent will continue to apply to it after it transforms.

Based on the two rules above, when Olag becomes a copy of Enduring Angel, it looks at Enduring Angel's copiable values, and at that time Enduring Angel's copiable values include only its front-face information, so Olag has no idea what Enduring Angel's back face looks like. Once the copy effect is established, Olag always has an effect modifying its copiable values saying "this card becomes a copy of Enduring Angel." Transforming doesn't leave the battlefield and doesn't make it a new object, so even when Olag transforms, this effect continues to apply.

So the final result is that each time your life drops to 0, this creature transforms between the Ludevic, Necrogenius and Olag, Ludevic's Hubris faces, but because it still has the copiable-values-modifying effect "this card becomes a copy of Enduring Angel," in the end you will see that the creature's characteristics are still those of Enduring Angel. You now have an angel that can lock your life total indefinitely as long as it stays on the battlefield.
{% endnotel %}

---

## The "Status" of a Permanent

- 707.3 The copy's copiable values are replaced by the information being copied, and are affected by the copy's **"status."** When other objects copy this object, they use its new copiable values.

When I mentioned this rule above, I specifically singled out the word "status." In fact, the concept of status is used in every game; it's just that no card uses the word on its face. First, let's see how status is defined:

- 110.5 A permanent's status is its physical state. There are four status categories, each of which has two possible values: tapped/untapped, flipped/unflipped, face up/face down, and phased in/phased out. Each permanent always has one of these values for each of these categories.
- 110.5a Status is not a characteristic, though it may affect a permanent's characteristics.
- 110.5b Unless a spell or ability instructs otherwise, a permanent enters the battlefield untapped, unflipped, face up, and phased in.
- 110.5c A permanent retains its status until a spell, ability, or turn-based action changes it, even if that status is not relevant to it.
- 110.5d Only permanents have status. Cards not on the battlefield do not. Although cards in exile may be face up or face down, this has no relation to the face-up or face-down status of permanents. Similarly, cards not on the battlefield are not tapped or untapped, regardless of their physical orientation.

**Status is an independent property, separate from copiable values and even from a permanent's characteristics, but status may affect various characteristics.** It is crucial to have this concept first.

The status most commonly used in ordinary games is "tapped/untapped." Normally, when you copy a permanent, its tapped/untapped status is not copied along with it. You need to understand this principle before you can explain the following questions, namely how the "flipped/unflipped" and "face up/face down" statuses interact with copy effects.

---

## Copying Flip Cards

Flip cards are an old and very obscure mechanic, so here is a brief introduction first:

![Flip cards](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/59083718b8c4.webp)

- 710.1 A flip card has a two-part card face. The upright, top half contains the card's normal characteristics. The inverted, bottom half contains an alternative set of characteristics for that card.
- 710.2 A flip card has only the normal characteristics of the permanent in zones other than the battlefield and before the permanent flips on the battlefield. Once the permanent flips, its normal name, text box, type line, and power and toughness no longer apply to the flipped permanent, and the alternative characteristics apply instead.

Flip cards are the only mechanic that uses the "flipped/unflipped" status, and they were one of the features of the Champions of Kamigawa era. But because flip cards cause quite a lot of trouble in how they are presented, after double-faced cards were invented Wizards stopped considering the flip mechanic for designing new cards.

A flip card has its own characteristics in the top and bottom halves, and comes with an ability that can change the "flipped/unflipped" status. Once the status becomes "flipped," some of the card's characteristics become those of the bottom half. Also, although only flip cards are affected by the flipped status, in fact any permanent can change its status from "unflipped" to "flipped"; it's just that for a non-flip card, this status change has no effect.

{% notel blue Flip Cards, Example 1 %}
![707.3](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/ce2bc7afb7d3.webp)

> [Erayo, Soratami Ascendant // Erayo's Essence](https://scryfall.com/card/sok/35/erayo-soratami-ascendant-erayos-essence): A flip card. Its normal state is a legendary creature (Erayo, Soratami Ascendant), and when flipped it is a legendary enchantment (Erayo's Essence).
> [Copy Enchantment](https://scryfall.com/card/rvr/39/copy-enchantment): You may have Copy Enchantment enter the battlefield as a copy of any enchantment on the battlefield.

Suppose I currently control Erayo's Essence (its status is flipped), and have Copy Enchantment enter as a copy of Erayo's Essence. What does this Copy Enchantment look like?

- 110.5b Unless a spell or ability instructs otherwise, a permanent enters the battlefield untapped, unflipped, face up, and phased in.

Unlike transforming double-faced cards, when you copy a flip card, the information of both the top and bottom halves is copied; the characteristics that show are simply determined by your current status. Erayo's Essence is an enchantment, so Copy Enchantment may choose to enter as a copy of Erayo's Essence, but when it actually enters it finds its status is "unflipped," so it ends up entering as a copy of Erayo, Soratami Ascendant. And because Erayo, Soratami Ascendant and Erayo's Essence are cards with two different names, this avoids the sacrifice from the legend rule.
{% endnotel %}

{% notel blue Flip Cards, Example 2 %}
![Flip cards](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/150eb4040d6c.webp)

> [Deepfathom Echo](https://scryfall.com/card/lci/228/deepfathom-echo): At the beginning of combat on your turn, Deepfathom Echo explores. Then you may have it become a copy of another creature you control until end of turn.
> [Jushi Apprentice // Tomoya the Revealer](https://scryfall.com/card/chk/70/jushi-apprentice-tomoya-the-revealer): A flip card. Its normal state is a creature (Jushi Apprentice), and when flipped it is a legendary creature (Tomoya the Revealer). Currently flipped.
> [Erayo, Soratami Ascendant // Erayo's Essence](https://scryfall.com/card/sok/35/erayo-soratami-ascendant-erayos-essence): A flip card. Its normal state is a legendary creature (Erayo, Soratami Ascendant), and when flipped it is a legendary enchantment (Erayo's Essence). Currently in its normal state.

Suppose I first have Deepfathom Echo become a copy of Tomoya the Revealer. Because Deepfathom Echo's status is "unflipped," it ends up becoming Jushi Apprentice. Now I use the flip ability copied over to flip it into Tomoya the Revealer (because it's a legendary creature, I have to sacrifice until no same-named permanents remain; here I choose to sacrifice the original). At end of turn the copy effect ends and it turns back into Deepfathom Echo, but it keeps the "flipped" status. Next turn, I have Deepfathom Echo become a copy of Erayo, Soratami Ascendant. Because my status is now "flipped," the result of the copy is Erayo's Essence.
{% endnotel %}

---

## Copying Face-Down Permanents

Compared with the obscure flip mechanic, face-down permanents are much more common. Although this mechanic is still used every now and then in new cards (nowadays basically in non-Standard sets), that does not mean its rules are clearer; if anything, it is even more likely than the former to leave you dizzy.

![Morph](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/b32a6cf49505.webp)

- 708.2 Face-down spells and face-down permanents have no characteristics other than those specified by the ability or rules that allowed the spell or permanent to be turned face down. These values are the copiable values of that object.
- 708.2a If a face-up permanent is turned face down by a spell or ability that doesn't specify any characteristics for it, it becomes a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost. A permanent that enters the battlefield face down has these characteristics too, unless the effect that put it onto the battlefield face down or that allowed it to be cast face down specifies otherwise. These values are the copiable values of that object.
- 708.8 As a face-down permanent is turned face up, its copiable values revert to its normal copiable values. Any effects that have already applied to the permanent still apply to it. Any enters-the-battlefield triggered abilities won't trigger, because the permanent has already entered the battlefield.
- 708.10 If a face-down permanent becomes a copy of another permanent, its copiable values become the copiable values of that permanent, modified by its face-down status. Therefore its characteristics remain the same: those listed in the rule or ability that made it face down. However, if it's turned face up, its copiable values become the copiable values of the permanent it copied. See rule 707.3.

The mechanics that can turn a permanent face down mainly appear as morph and manifest, though plenty of individual cards can do it with their own abilities. Morph and manifest are themselves complex enough to deserve a dedicated column, and the focus of this article is copiable values, so I will pick out only the rules related to this topic, using morph for the examples below:

- 702.37a Morph is a static ability that functions in any zone from which you could play the card it's on, and the morph effect works any time the card is face down. "Morph [cost]" means "You may cast this card as a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost by paying {3} rather than paying its mana cost."
- 702.37e Any time you have priority, you may turn a face-down permanent you control with a morph ability face up. This is a special action; it doesn't use the stack. To do this, show all players what the permanent's morph cost would be if it were face up, pay that cost, then turn the permanent face up. (If the permanent wouldn't have a morph cost if it were face up, it can't be turned face up this way.) The morph effect on it ends, and it regains its normal characteristics. Because the permanent has already entered the battlefield, turning it face up doesn't trigger any abilities, or create any effects, related to a permanent entering the battlefield.

Simply put, through morph or other methods you can get a face-down creature, whose **copiable values** are defined by the **rules for face-down permanents**; if that face-down creature has a morph ability, it can turn itself face up by morphing.

Remember how, when we discussed status, one of the statuses was "face up/face down"? Copying a face-down permanent is complicated precisely because copiable values are directly affected by this status. The most important rule is 708.10, which can be put colloquially as **"the copiable values defined by the face-down status override the original characteristics."** When we reach the Layer column, there will be a deeper reading of this rule.

{% notel blue Face-Down Permanents, Example 1 %}
![Morph 1](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/a50b9647e64b.webp)

> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.
> [Grim Haruspex](https://scryfall.com/card/clb/754/grim-haruspex): Morph {B}

Grim Haruspex is currently face down, and Mirror Image enters as a copy of it. Mirror Image becomes a colorless 2/2 creature with no name, types, abilities, or mana cost, because these are the copiable values of a face-down permanent (as defined by rule 708.2a).
{% endnotel %}

{% notel blue Face-Down Permanents, Example 2 %}
![Morph 2](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/8db1870555c3.webp)

> [Akroma, Angel of Fury](https://scryfall.com/card/tsr/150/akroma-angel-of-fury): Morph {3}{R}{R}{R}.
> [Blade of Shared Souls](https://scryfall.com/card/one/42/blade-of-shared-souls): Whenever Blade of Shared Souls becomes attached to a creature, for as long as Blade of Shared Souls remains attached to it, you may have that creature become a copy of another target creature you control.
> [Grim Haruspex](https://scryfall.com/card/clb/754/grim-haruspex): Morph {B}

Suppose I now control a face-down Akroma, Angel of Fury and a face-up Grim Haruspex, and use Blade of Shared Souls to make Akroma a copy of Grim Haruspex. Although you copy Grim Haruspex's characteristics, because Akroma's current status is "face down," you are still a colorless 2/2 (..and so on). At this point, if you want to pay a morph cost to turn Akroma face up, you pay Grim Haruspex's {B}, not Akroma's original {3}{R}{R}{R}, because you copied that characteristic as well, and after turning face up you will be a copy of Grim Haruspex.
{% endnotel %}

{% notel blue Face-Down Permanents, Example 3 %}
![Morph 3](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/16dec14436ee.webp)

> [Akroma, Angel of Fury](https://scryfall.com/card/tsr/150/akroma-angel-of-fury): Morph {3}{R}{R}{R}.
> [Blade of Shared Souls](https://scryfall.com/card/one/42/blade-of-shared-souls): Whenever Blade of Shared Souls becomes attached to a creature, for as long as Blade of Shared Souls remains attached to it, you may have that creature become a copy of another target creature you control.
> [Graveyard Trespasser // Graveyard Glutton](https://scryfall.com/card/mid/104/graveyard-trespasser-graveyard-glutton): A transforming double-faced creature card.

Again with a face-down Akroma, Angel of Fury, what if it now becomes a copy of Graveyard Trespasser (front face) using Blade of Shared Souls?

First, one thing must be made clear: although face-down permanents and double-faced cards both physically flip back and forth in actual games, the two are completely different concepts. You can think of a double-faced card as two cards, each with its own card back, glued together. When they are turned face down they are no different from an ordinary card, and there is no such thing as face down = transformed.

After the copy effect is established, Akroma becomes a face-down Graveyard Trespasser. Since it is face down, its characteristics are still a colorless 2/2 creature, and you have already lost Akroma's morph cost, and Graveyard Trespasser itself has no morph cost, so this Akroma can no longer turn itself face up by its own power. Suppose you force Akroma face up by some outside means: it will be a copy of Graveyard Trespasser, locked to the front-face characteristics at the moment of copying. Even if day/night has by now switched to night, Akroma stays as the day-side Graveyard Trespasser and does not become a copy of Graveyard Glutton.
{% endnotel %}

---

## Copying Mutate

If you asked me which of the new mechanics of the past ten years has been the heaviest bombardment on rules handling, I would vote for mutate without hesitation...
Seriously, every example above could be upgraded into a new problem if you added mutate, but covering that would never end, so this article gives only the broad principles.

![Mutate](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/34306040c611.webp)

Mutate lets multiple creatures combine into a single object, or, in formal MTG rules terminology, causes these permanents to merge (Merging with Permanents).

Mutate gives a creature spell an alternative cost. You can pay the mutate cost to cast this creature spell (hereafter A), targeting a non-Human creature you own (hereafter B). If this mutating spell resolves successfully, you choose to put A over or under B, and these permanents merge into one permanent. The characteristics of this merged permanent (such as types, cost, and stats) are those of whichever component is on top, but it has all the abilities of the whole merged permanent. If B is already a merged permanent that other creatures have mutated onto, A can only be placed on the very top or the very bottom of the whole pile B, and cannot be inserted in the middle.

> The author's inner thoughts: I gave up quoting the original rules text for this part... Not only are there too many rule entries, but the amount of other prerequisite knowledge needed is also large, and if you aren't familiar with the other basic defining rules, it is easy to read it ambiguously.

{% notel blue Mutate, Example 1 %}
![Mutate](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/1e30ccdfdd40.webp)

> [Dreamtail Heron](https://scryfall.com/card/iko/47/dreamtail-heron):
> Mutate {3}{U} (If you cast this spell for its mutate cost, put it over or under target non-Human creature you own. They mutate into the creature on top plus all abilities from under it.)
> Flying.
> Whenever this creature mutates, draw a card.
> [Gifted Aetherborn](https://scryfall.com/card/aer/61/gifted-aetherborn): Deathtouch, lifelink.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

Suppose you now mutate Dreamtail Heron onto Gifted Aetherborn. You can freely choose whether to put Dreamtail Heron on top or underneath. Choosing Dreamtail Heron on top gives the result on the left of the image below, and putting Dreamtail Heron underneath gives the result on the right.

![Mutate mockup](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/41fd4f2ddb3c.webp)

This is also the copiable values of this permanent now. If you later use Mirror Image to copy this mutated creature, you will get exactly the same result as in the image above.
{% endnotel %}

{% notel blue Mutate, Example 2 %}
![Copying a mutate spell](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/e9fbe090eb51.webp)

> [Double Major](https://scryfall.com/card/stx/179/double-major): Copy target creature spell you control, except it isn't legendary if the spell is legendary.
> [Ivy, Gleeful Spellthief](https://scryfall.com/card/dmu/201/ivy-gleeful-spellthief): Whenever a player casts a spell that targets only a single creature other than Ivy, Gleeful Spellthief, you may copy that spell. The copy targets Ivy.
> [Gemrazer](https://scryfall.com/card/iko/155/gemrazer): Mutate {1}{G}{G}.

A mutating spell is a creature spell that targets a creature, so both Double Major and Ivy, Gleeful Spellthief can copy it. Note, though, that Double Major doesn't let you choose new targets, so the copied mutating spell still targets the same creature, while Ivy, Gleeful Spellthief forces the copy to target her.
{% endnotel %}

{% notel blue Mutate, Example 3 %}
![Mutating N times](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/f29669ed535a.webp)

> [Porcuparrot](https://scryfall.com/card/iko/128/porcuparrot): {T}: This creature deals X damage to any target, where X is the number of times this creature has mutated.
> [Mirror Image](https://scryfall.com/card/j22/62/mirror-image): You may have Mirror Image enter the battlefield as a copy of any creature you control.

Porcuparrot's ability checks how many times it has mutated (X can also be simply understood as the number of components in the pile minus 1). Suppose a Porcuparrot that has mutated twice is copied by Mirror Image. How much damage can Mirror Image deal by activating Porcuparrot's ability? The answer is X=0. How many times a permanent has mutated is not part of its copiable values; to Mirror Image, the whole mutated stack of creatures is like a single object that has always looked this way.
{% endnotel %}

{% notel blue Mutate, Example 4 %}
![Mutate and morph](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/f45b882be3fa.webp)

> [Majestic Auricorn](https://scryfall.com/card/iko/22/majestic-auricorn): Whenever this creature mutates, you gain 4 life.
> [Grim Haruspex](https://scryfall.com/card/clb/754/grim-haruspex): Morph {B}
> [Dreamtail Heron](https://scryfall.com/card/iko/47/dreamtail-heron): Whenever this creature mutates, draw a card.

Now for something more exciting: what happens if you mutate onto a face-down creature? Besides the rules about face-down permanents mentioned earlier, the most important rules for mutate here are these two:

- 725.2e If a merged permanent contains both face-up and face-down components, its status is determined by its topmost component. If a face-down permanent becomes face up because of something it merged with, other effects don't treat it as having been turned face up.
- 725.2f If a merged permanent is turned face down, each face-up component that represents that permanent is turned face down. If a face-down merged permanent is turned face up, each face-down component that represents that permanent is turned face up.

Let's start with a simpler situation. Suppose I have a face-down Grim Haruspex, currently a colorless 2/2 creature with no subtypes, and I mutate Dreamtail Heron onto Grim Haruspex (no subtypes = not Human, satisfying the mutate restriction):

- Scenario A: Dreamtail Heron on top, face-down Grim Haruspex underneath
  You end up with a Dreamtail Heron, and the "draw a card when it mutates" ability triggers. But with the face-up Dreamtail Heron on top, the whole pile of permanents counts as face up, so Grim Haruspex can no longer turn face up by paying its morph cost.

- Scenario B: Face-down Grim Haruspex on top, Dreamtail Heron underneath
  You still see a colorless 2/2 face-down creature, and Dreamtail Heron's mutate-draw ability doesn't even trigger, because your pile of permanents is face down. Grim Haruspex can pay the morph cost to turn face up, and once it is turned face up, Dreamtail Heron's abilities come back too. But because you have missed the mutate timing, Dreamtail Heron will not let you draw a card at the moment of turning face up.

With the principle above understood, we can extend the question: suppose it is again a case that has already mutated, with face-down Grim Haruspex on top and Dreamtail Heron underneath, and now I mutate Majestic Auricorn onto this pile, choosing Majestic Auricorn on top. What happens?

Now the topmost permanent is face up, which is in effect the same as Scenario A above, and the whole pile of permanents counts as face up. So Majestic Auricorn's and Dreamtail Heron's abilities both trigger normally, and because your pile is face up, the Grim Haruspex in the middle cannot pay its morph cost to turn face up; in this pile it is now just a vanilla creature with no abilities.
{% endnotel %}

{% notel blue Mutate, Example 5 %}
![Mutate and copying](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/90f820e36f3b.webp)

> [Serra Angel](https://scryfall.com/card/dom/33/serra-angel): Flying, vigilance.
> [Gifted Aetherborn](https://scryfall.com/card/aer/61/gifted-aetherborn): Deathtouch, lifelink.
> [Blade of Shared Souls](https://scryfall.com/card/one/42/blade-of-shared-souls): Whenever Blade of Shared Souls becomes attached to a creature, for as long as Blade of Shared Souls remains attached to it, you may have that creature become a copy of another target creature you control.
> [Gemrazer](https://scryfall.com/card/iko/155/gemrazer): Reach, trample. Mutate {1}{G}{G}.

Suppose you equip Blade of Shared Souls onto Gifted Aetherborn and make it a copy of Serra Angel, then mutate Gemrazer onto Gifted Aetherborn, choosing Gemrazer on top. What kind of creature do you get? And what changes after Blade of Shared Souls is unattached?

- 613.2a Layer 1a: Copiable effects are applied. This includes copy effects and changes to an object's base characteristics determined by the object merging with a permanent.
- 725.2a A merged permanent has only the characteristics of its topmost component, unless the effect that merged it says otherwise. This is a copiable effect whose timestamp is the time the objects were merged.

It's fine if you don't follow the two rules cited above, since some concepts will only be explained in later installments. The short conclusion is that copying a permanent and the characteristic changes from mutating a creature are abilities at the same level, and when both occur, the newer change overrides the older one.

Back to the example: once Gemrazer's mutate is complete, the component underneath currently has Serra Angel's characteristics, so Gemrazer will have flying and vigilance. When Blade of Shared Souls is unattached, Gifted Aetherborn returns to its original characteristics, so Gemrazer will have deathtouch and lifelink.

Taken alone, this question seems intuitive and not very tricky, but combined with the life-locking angel example (Olag, Ludevic's Hubris + Enduring Angel) from the double-faced section above, it is very easy to get confused. This can only be put down to mutate's rules being very special. Whenever you run into a mutate-related case, I recommend always treating it as a special case, so that at least you don't wreck your understanding of ordinary copy effects along with it.
{% endnotel %}

---

## Try It Yourself

Finally, let's use a practice problem to review the rules learned today!

![Try it yourself](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/d16820d4a150.webp)

> [Nezumi Shortfang // Stabwhisker the Odious](https://scryfall.com/card/chk/131/nezumi-shortfang-stabwhisker-the-odious): A flip card. Its normal state is a creature (Nezumi Shortfang), and when flipped it is a legendary creature (Stabwhisker the Odious).
> [Kenrith's Transformation](https://scryfall.com/card/eld/164/kenriths-transformation): Enchanted creature loses all abilities and is a green Elk creature with base power and toughness 3/3. (It loses all other card types and creature types.)
> [Sagu Mauler](https://scryfall.com/card/c19/200/sagu-mauler): Morph {3}{G}{U}.
> [Blade of Shared Souls](https://scryfall.com/card/one/42/blade-of-shared-souls): Whenever Blade of Shared Souls becomes attached to a creature, for as long as Blade of Shared Souls remains attached to it, you may have that creature become a copy of another target creature you control.
> [Everquill Phoenix](https://scryfall.com/card/iko/114/everquill-phoenix): Mutate {3}{R}.

Here is the question:

I have a Stabwhisker the Odious (a flipped Nezumi Shortfang) with Kenrith's Transformation (an Aura) on it, making it a green 3/3 Elk. I also control a face-down Sagu Mauler, currently a colorless 2/2 creature.

Now I equip the face-down Sagu Mauler with Blade of Shared Souls, choosing as the copy target the Stabwhisker the Odious that has become an Elk, and then have Everquill Phoenix mutate onto Sagu Mauler. What results do I get if I choose Everquill Phoenix on top versus on the bottom after mutating?

![Try it yourself](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/7245cbdb270f.webp)

Let's start analyzing from the flipped Rat. First, Kenrith's Transformation does not modify copiable values (same principle as the Oko example above), so here it is merely a distraction that can be ignored. Although this Rat is currently Stabwhisker the Odious (flipped), when a creature whose "status" is unflipped becomes a copy of it, the characteristics it shows are the unflipped ones, so the result of copying will be Nezumi Shortfang.

Next, look at the face-down Sagu Mauler. Although it has now become a copy of Nezumi Shortfang, the characteristics defined by the **face-down** "status" will override the original characteristics, so what you see is still a colorless 2/2 creature with no subtypes. Also, because Sagu Mauler has become a copy of Nezumi Shortfang, it has lost its morph ability and cannot pay a morph cost to turn face up.

Now Everquill Phoenix mutates on. If you choose Everquill Phoenix on top, you still get a normal Everquill Phoenix, and its when-mutates ability triggers. The component underneath is a thing with no abilities, with no function other than counting the number of mutations.

And what if you put Everquill Phoenix on the bottom when it mutates...? Because the topmost component of this mutated creature is a face-down creature, you are still a colorless creature with no abilities, a 2/2, and the mutate trigger is gone too. And for the reason above, you can't turn face up by paying Sagu Mauler's morph cost.

---

## Next: Characteristic-Defining Abilities (CDA)

As the appetizer for the Layer column series, I hope all readers could digest this installment smoothly. At this stage, if you can't fully understand how some examples work, it is fine to remember only the results for now, because some of these problems really can't be explained by the concept of copiable values alone and must be fit into the complete Layer structure to be answered thoroughly.

In the next Layer installment, we will introduce CDAs, that is, characteristic-defining abilities. Stay tuned, readers.

![Next](https://images.guildmagesforum.tw/posts/What-is-Copiable-Value/6003922717fd.webp)
