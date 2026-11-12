---
title: "How Do You Describe an Object?"
date: "2023-11-30 23:48:43"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/5533f87b0545-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/5533f87b0545-cover.jpg"
excerpt: "Cursed Totem and Suppression Field: which of them can affect ninjutsu?"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-to-Describe-an-Object/).

## Before We Start

Can [Cursed Totem](https://scryfall.com/card/mh2/295/cursed-totem) and [Suppression Field](https://scryfall.com/card/rav/31/suppression-field) interfere with ninjutsu?
Does the land activation cost reduction of [Blossoming Tortoise](https://scryfall.com/card/woe/163/blossoming-tortoise) work on [Boseiju, Who Endures](https://scryfall.com/card/neo/266/boseiju-who-endures) in your hand?
These all depend on how a card describes the objects it can affect. This time, let us look at how MTG defines the rules for describing objects!

![Ninjutsu](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/69282f4f5c7e.webp)

---

## Basic Rules of Objects

The word "object" actually covers a very wide range; you could say that basically every category you can think of other than players falls under objects. The specific scope is as follows:

- 109.1 An object is an ability on the stack, a card, a copy of a card, a token, a spell, a permanent, or an emblem.

What we really care about is the difference in descriptions under the broad category of objects, that is, what the rules call an object when it is in which zone:

- 109.2 If a spell or ability describes an object by a card type or subtype, and doesn't use the word "card," "spell," or "source," it means an object of that card type or subtype on the battlefield.
- 109.2a If a spell or ability describes an object using the word "card" and the name of a zone, it means a card matching that description in the stated zone.
- 109.2c If a spell or ability describes an object using the word "source," it means a source matching that description in any zone, including sources of abilities, damage, or mana.
- 108.2b Tokens are not cards. Even if a game accessory the same size as a card is used to represent a token, it is not treated as a card by the rules.

![Names](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/52adf4e44caa.webp)

> **[Rise Again](https://scryfall.com/card/m21/119/rise-again)**: Return target **creature card** from your graveyard to the battlefield.
> **[Murder](https://scryfall.com/card/m20/109/murder)**: Destroy target **creature**.
> **[Essence Scatter](https://scryfall.com/card/m19/54/essence-scatter)**: Counter target **creature spell**.

The three examples above are exactly the most basic differences in how objects are named. Although objects have other, more detailed definitions and rules, as long as you grasp the rules above, you can usually figure out how a card's text describes what it affects. Now let us look at some real examples~

---

## Object Description Examples

![Blossoming Tortoise and Boseiju](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/24a95e5c6d54.webp)

> **[Blossoming Tortoise](https://scryfall.com/card/woe/163/blossoming-tortoise)**:
> Activated abilities of lands you control cost {1} less to activate.
> **[Boseiju, Who Endures](https://scryfall.com/card/neo/266/boseiju-who-endures)**:
> Channel — {1}{G}, Discard Boseiju, Who Endures: Destroy target artifact, enchantment, or nonbasic land an opponent controls. That player may search their library for a land card with a basic land type, put it onto the battlefield, then shuffle. This ability costs {1} less to activate for each legendary creature you control.

The object that Blossoming Tortoise's cost reduction ability describes is "lands." According to rule 109.2, this means it can only reduce the cost of activated abilities of lands on the battlefield. Boseiju's channel is an ability activated from your hand, so it is not within Blossoming Tortoise's description.

![Cycling](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/e62b4dd0bc76.webp)

> **[Darksteel Citadel](https://scryfall.com/card/2xm/315/darksteel-citadel)**: Artifact Land
> **[Tectonic Reformation](https://scryfall.com/card/mh1/149/tectonic-reformation)**: Each land card in your hand has cycling {R}.
> **[Collector Ouphe](https://scryfall.com/card/mh1/158/collector-ouphe)**: Activated abilities of artifacts can't be activated.

The object Tectonic Reformation describes is "land cards in your hand," which gives the land cards in your hand an additional activated ability; while the object that Collector Ouphe's lockdown describes is "artifacts." Again according to rule 109.2, this means Collector Ouphe only affects artifacts on the battlefield. If you want to use Tectonic Reformation's ability to cycle Darksteel Citadel from your hand, Collector Ouphe cannot stop you. Darksteel Citadel is indeed an artifact card, but as long as it is not on the battlefield, Collector Ouphe does not affect it.

![Chord of Calling](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/14fd3560f432.webp)

> **[Chord of Calling](https://scryfall.com/card/2xm/158/chord-of-calling)**:
> Search your library for a creature card with mana value X or less, put it onto the battlefield, then shuffle.
> **[Grist, the Hunger Tide](https://scryfall.com/card/mh2/202/grist-the-hunger-tide)**:
> As long as Grist, the Hunger Tide isn't on the battlefield, it's a 1/1 Insect creature in addition to its other types.
> **[Grafdigger's Cage](https://scryfall.com/card/m20/227/grafdiggers-cage)**:
> Creature cards in graveyards and libraries can't enter the battlefield.
> **[Containment Priest](https://scryfall.com/card/m21/13/containment-priest)**:
> If a nontoken creature would enter the battlefield and it wasn't cast, exile it instead.

Suppose I use Chord of Calling with X=3 to put Grist, the Hunger Tide from my library onto the battlefield, and my opponent has Grafdigger's Cage or Containment Priest respectively. What happens?

As long as Grist, the Hunger Tide is not on the battlefield, it is also a creature, which makes it a "creature card," meaning that under normal circumstances Chord of Calling can drop Grist onto the battlefield. But Grafdigger's Cage restricts "creature cards in libraries from entering the battlefield," so Chord of Calling will be shut down, and you can only search your library and shuffle, without putting a creature onto the battlefield.

Containment Priest, however, affects "creatures," which is wording limited to the battlefield. So how does an ability that only affects things on the battlefield affect a creature that is about to be put onto the battlefield? In fact, there is a dedicated rule for replacement effects that affect how a permanent enters the battlefield:

- 614.12. Some replacement effects modify how a permanent enters the battlefield. (See rules 614.1c-d.) Such effects may come from the permanent itself if they affect only that permanent (as opposed to a general subset of permanents that includes it). They may also come from other sources. To determine which replacement effects apply and how they apply, check the characteristics of the permanent as it would exist on the battlefield, taking into account replacement effects that have already modified how it enters the battlefield (see rule 616.1), continuous effects from the permanent's own static abilities that would apply to it once it's on the battlefield, and continuous effects that already exist and would apply to the permanent.

To put it briefly, these effects use the **characteristics it would have on the battlefield** to determine how it enters. If it were an ordinary creature card, it would be exiled by Containment Priest, but when Grist is on the battlefield it is not additionally a creature; it is just a normal planeswalker. This means Containment Priest checks and finds that what is about to enter is a non-creature, which is outside its jurisdiction, and Grist can enter successfully.

![Ninjutsu](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/69282f4f5c7e.webp)

> **[Cursed Totem](https://scryfall.com/card/mh2/295/cursed-totem)**:
> Activated abilities of creatures can't be activated.
> **[Suppression Field](https://scryfall.com/card/rav/31/suppression-field)**:
> Activated abilities cost {2} more to activate unless they're mana abilities.
> **[Yuriko, the Tiger's Shadow](https://scryfall.com/card/cmm/364/yuriko-the-tigers-shadow)**:
> Commander ninjutsu {U}{B} ({U}{B}, Return an unblocked attacker you control to hand: Put this card onto the battlefield from your hand or the command zone tapped and attacking.)

Yuriko's commander ninjutsu is a variant of ninjutsu, and in this case treating it as ordinary ninjutsu creates no conflict.

The object Cursed Totem describes is "creatures," which likewise means it only affects creatures on the battlefield and cannot affect Ninja creature cards in your hand. Suppression Field's wording is a bit more special: it does not restrict at all which zone the activated ability is activated from, which in practice means it can affect activated abilities in any zone. That is, as long as Suppression Field is on the battlefield, whether Yuriko activates commander ninjutsu from the hand or from the command zone, an extra payment is required.

![Wicked](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/1de6cd550257.webp)

> **[Ao, the Dawn Sky](https://scryfall.com/card/neo/2/ao-the-dawn-sky)**:
> When Ao, the Dawn Sky dies, ... (rest omitted)
> **[Wicked Role (Aura token)](https://scryfall.com/card/twoe/17/wicked-cursed)**:
> Enchanted creature gets +1/+1. When this Aura is put into a graveyard from the battlefield, each opponent loses 1 life.
> **[Dauthi Voidwalker](https://scryfall.com/card/mh2/81/dauthi-voidwalker)**:
> If a card would be put into an opponent's graveyard from anywhere, instead exile it with a void counter on it.

Suppose your opponent, through [Not Dead After All](https://scryfall.com/card/woe/101/not-dead-after-all) or some other means, attaches a Wicked Role Aura token to their Ao, the Dawn Sky, and I control Dauthi Voidwalker. When the opponent's Ao dies, will Ao's own death ability and the Wicked Role's graveyard ability be affected by Dauthi Voidwalker? First we need to mention the definition of dying:

- 700.4 The term dies means "is put into a graveyard from the battlefield."

Dauthi Voidwalker's replacement effect of "exile instead of dying" essentially replaces the entire process of dying; a creature that would die in front of Dauthi does not count as having died but is directly exiled, so the trigger condition of the death ability is not satisfied. What about the Aura on that creature? Dauthi Voidwalker's described object is "a card," meaning it covers every type indiscriminately. If this were an ordinary Aura, it would likewise be exiled instead of going to the graveyard, but rule 108.2b above says "tokens are not cards," which means Dauthi cannot replace the Wicked Role going to the graveyard. The Wicked Role goes to the graveyard normally and then disappears due to the token state-based action, and because of its own graveyard ability you lose 1 life.

![Source](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/baf26c0b383c.webp)

> **[Weaver of Harmony](https://scryfall.com/card/neo/213/weaver-of-harmony)**:
> Copy target activated or triggered ability you control from an **enchantment source**. You may choose new targets for the copy.
> **[Torbran, Thane of Red Fell](https://scryfall.com/card/eld/147/torbran-thane-of-red-fell)**:
> If a red source you control would deal **damage** to an opponent or a permanent an opponent controls, it deals that much damage plus 2 instead.
> **[Search for Glory](https://scryfall.com/card/khm/27/search-for-glory)**:
> Search your library for a snow permanent card, a legendary card, or a Saga card, reveal it, put it into your hand, then shuffle. You gain 1 life **for each {S} spent to cast this spell**. ({S} is mana from a snow source.)

- 109.2c If a spell or ability describes an object using the word "source," it means a source matching that description in any zone, including sources of abilities, damage, or mana.

If you are unsure what the specific wording about sources looks like, the three examples above correspond exactly to sources of abilities, damage, and mana respectively.

![Painter's Servant and Grindstone](https://images.guildmagesforum.tw/posts/How-to-Describe-an-Object/b8bd67a93eea.webp)

> **[Painter's Servant](https://scryfall.com/card/p23/1/painters-servant)**:
> As Painter's Servant enters the battlefield, choose a color.
> All cards that aren't on the battlefield, spells, and permanents are the chosen color in addition to their other colors.
> **[Grindstone](https://scryfall.com/card/p23/2/grindstone)**:
> {3}, {T}: Target player mills two cards. If two cards that share a color were milled this way, repeat this process.
> **[Pyroblast](https://scryfall.com/card/ss3/5/pyroblast)**:
> Choose one —
> • Counter target spell if it's blue.
> • Destroy target permanent if it's blue.

Friends who follow Legacy are surely no strangers to Painter's Servant + Grindstone. Painter's Servant's color-changing ability names almost every kind of object you will use apart from abilities and emblems (in non-multiplayer formats), so you can see in one go how MTG words its descriptions of various objects.

Also, let me briefly explain what this combo does for readers unfamiliar with it. Suppose Painter's Servant enters and names blue. All spells, permanents, and cards not on the battlefield also become blue, so Pyroblast can become a universal counterspell + universal removal, and as long as Grindstone is activated afterward, since every card in the opponent's library has been made blue by Painter's Servant, they will mill their entire library. However, since naming blue means every card in hand, including lands, can become pitch fodder for [Force of Will](https://scryfall.com/card/2xm/51/force-of-will), sometimes you can also name a different color depending on the situation.

---

## Conclusion

In fact, most rules doubts you will run into in normal games can be cleared up by simply paying attention to whether the condition wording includes "card." If only a certain type is used to describe it, it is limited to the battlefield; to affect other zones, the text must emphasize "cards" in a certain zone. Also remember that tokens are not cards, and many effects that target cards do not affect tokens.

Take the very first example of Blossoming Tortoise + Boseiju: the cause of the confusion is the lack of an idea about the difference in "card" wording, and being too used to activated abilities coming from the battlefield, so when facing abilities activated from other zones (especially the hand), you wonder whether these rules are consistent. But after reading this article, I believe you will understand that the basic defining rules are all the same set, and it is just that when describing objects in different zones, differences in wording affect the result.
