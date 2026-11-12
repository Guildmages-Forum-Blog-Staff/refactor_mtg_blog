---
title: "How to Break Uldaros Theorix"
date: "9/29/2026, 11:52:43 AM"
preview: false
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
cover: "https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/a6be8d2f073a-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/a6be8d2f073a-cover.jpg"
excerpt: "Does Wizards still remember that Superior Spider-Man is in Standard?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-to-Ruin-Uldaros-Theorix/).

## Introduction

Of the five great Sphinx Elders in the Reality Fracture series, the one generating the most discussion has to be [Uldaros Theorix](https://scryfall.com/card/fra/159/uldaros-theorix). After all, how good its ETB ability is, is immediately obvious, and with [Superior Spider-Man](https://scryfall.com/card/spm/155/superior-spider-man) currently in Standard, the two together add up to far more than the sum of their parts.

That said, I have noticed that while the community discusses how to pair [Uldaros Theorix](https://scryfall.com/card/fra/159/uldaros-theorix) with other cards, many players are also confused about how the ability checks its conditions, especially for cards with multiple parts such as split cards, Adventure cards, and double-faced cards. I hope this article clears up how the ability of [Uldaros Theorix](https://scryfall.com/card/fra/159/uldaros-theorix) works.



---

## How Uldaros Theorix Works

{% mtgpick "fra" 159 %}

**When [Uldaros Theorix](https://scryfall.com/card/fra/159/uldaros-theorix) enters, if you cast it, for each <font color="#FF0000">card type</font> among cards in your graveyard, exile up to one target nonland card of that type. Copy those cards. You may cast any number of the copies without paying their mana costs, as long as the total <font color="#FF0000">mana value of those spells</font> is 6 or less. (Permanent spells cast this way become tokens.)**

The check performed by [Uldaros Theorix](https://scryfall.com/card/fra/159/uldaros-theorix) can be broken down into two steps:

### Step 1: Check card types

First, you may exile cards from your graveyard, with one slot available for each type. If a card has multiple types, you can place it in any one of its type slots, but note that the ability cannot exile land cards.

- A split card counts as one card that has the characteristics of both halves.
- Adventure, Omen, and Prepare cards count as one card that has only the characteristics of the permanent; you cannot use the instant or sorcery slots to exile them.
- A double-faced card in the graveyard has only its front face's characteristics.
- At this point only the types are checked. As long as the types match, you may exile the card, even if it is a card you could never actually cast later.

### Step 2: Check the spells' mana value

After that, you may cast copies of those exiled cards for free, as long as the total mana value of the spells is 6 or less.

It is important to note that the condition being checked is no longer about the **card** but about the **spell**. For the various special cards mentioned above, what is checked is the characteristics of the spell you actually want to cast, and the card's original characteristics no longer matter at this point.

That may sound a bit abstract, so let's go through some actual examples to see how it is ruled.



---

## Rules Examples

![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/18326a75b523.webp)
> ● **[Fear of Missing Out](https://scryfall.com/card/dsk/136/fear-of-missing-out):** 
> A two-mana Enchantment Creature.

Fear of Missing Out is both an Enchantment and a Creature. Suppose you have two copies of it in your graveyard: you can assign one copy to the Enchantment slot and the other to the Creature slot, so you can make two creatures at once.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/bb51ebadb9ad.webp)
> ● **[Cease // Desist](https://scryfall.com/card/mkm/246/cease-desist):** 
> A split card. Cease is a two-mana instant, and Desist is a six-mana sorcery.

A split card has the characteristics of both halves, so you can choose to exile it using either the instant slot or the sorcery slot. The fact that its mana value as a card is 8 does not matter here, because what is actually checked is its mana value when cast as a spell.

Each half, cast individually as a spell, is within the mana value 6 or less limit, so either can be cast for free.

Also, even if you exiled this card using the sorcery slot earlier, when it comes time to cast it you can still choose the instant half. The ability of Uldaros Theorix does not check which type slot was used to exile the card.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/81a32cf14b91.webp)
> ● **[Commit // Memory](https://scryfall.com/card/lcc/147/commit-memory):** 
> An Aftermath card. Commit (the main half) is a four-mana instant, and Memory (the Aftermath half) is a six-mana sorcery.

Aftermath cards are a special variant of split cards. For type checking, this card likewise has the characteristics of both halves, so you may exile it using either the instant slot or the sorcery slot.

Casting is different, however. Aftermath says the Aftermath half can be cast only from the graveyard, and Uldaros Theorix does not cast spells directly from the graveyard; it first exiles the cards and creates copies, and then lets you cast those copies. So you cannot get Uldaros Theorix to cast Memory for free.

At this point, some may recall the Amonkhet-era Standard, and wonder why [Torrential Gearhulk](https://scryfall.com/card/cmm/128/torrential-gearhulk) could cast Memory for free. The reason is that [Torrential Gearhulk](https://scryfall.com/card/cmm/128/torrential-gearhulk) is worded to let you cast an instant card from your graveyard for free. Thanks to the split card rules, Commit // Memory really is an instant card, and since it is indeed cast from the graveyard, the Aftermath casting condition is also satisfied.

> - 702.127a Aftermath is an ability found on some split cards (see rule 709, "Split Cards"). It represents three static abilities. "Aftermath" means "You may cast this half of this split card from your graveyard," "This half of this split card can't be cast from any zone other than a graveyard," and "If this spell was cast from a graveyard, exile it instead of putting it anywhere else any time it would leave the stack."




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/71c2654eb268.webp)
> ● **[Virtue of Persistence // Locthwain Scorn](https://scryfall.com/card/woe/115/virtue-of-persistence-locthwain-scorn):** 
> An Adventure card. The main card is a seven-mana Enchantment, and the Adventure is a two-mana Sorcery.

When Uldaros Theorix enters, you can use the Enchantment slot to exile Virtue of Persistence from your graveyard, because only the type is checked at that point, so it does not matter that the main card is a seven-mana card over the mana value limit.

Afterward, when you cast spells, you choose which spells to cast from the copies created by Uldaros Theorix, and the Adventure of Virtue of Persistence is among the options. If you choose to cast its Adventure spell, it only uses up 2 of your mana value allowance.

Normally, after an Adventure spell resolves, the card goes to exile so you can cast the main card later, but now you are only casting a copy. Once the Adventure spell resolves, that is the end of it, and no Enchantment copy of Virtue of Persistence will be created in exile for you to use.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/011030cd09a3.webp)
> ● **[Ishgard, the Holy See // Faith & Grief](https://scryfall.com/card/fin/283/ishgard-the-holy-see-faith-&-grief):** 
> An Adventure card. The main card is a land, and the Adventure is a five-mana Sorcery.

The case of Ishgard, the Holy See is even simpler. As a card, it has only the land type, but the ETB ability of Uldaros Theorix requires exiling nonland cards, so this card cannot be exiled in the first place, let alone copied and cast afterward.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/46675d59c710.webp)
> ● **[Reidane, God of the Worthy](https://scryfall.com/card/khm/21/reidane-god-of-the-worthy-valkmira-protectors-shield):** 
> The front face of a modal double-faced card, a three-mana Creature card.
> ● **[Valkmira, Protector's Shield](https://scryfall.com/card/khm/21/reidane-god-of-the-worthy-valkmira-protectors-shield?back):** 
> The back face of a modal double-faced card, a four-mana Artifact card.

A double-faced card in the graveyard has only its front face's characteristics, so you can only use the Creature slot to exile this card.

But when you cast a modal double-faced card, you can choose to cast either the front or the back face, and the mana value of that spell is that of whichever face you choose.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/352d36270908.webp)
> ● **[Sink into Stupor](https://scryfall.com/card/mh3/241/sink-into-stupor-soporific-springs):** 
> The front face of a modal double-faced card, a three-mana Instant card.
> ● **[Soporific Springs](https://scryfall.com/card/mh3/241/sink-into-stupor-soporific-springs?back):** 
> The back face of a modal double-faced card, a land card.

The front of Sink into Stupor is an instant card, so it can be exiled using the instant slot. But when you want to cast this card for free, playing a land is not casting a spell, so Uldaros Theorix can only cast the front instant half.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/131f20b815d1.webp)
> ● **[Overlord of the Balemurk](https://scryfall.com/card/dsk/113/overlord-of-the-balemurk):** 
> Impending 5—{1}{B} (If you cast this spell for its impending cost, it enters with five time counters and isn't a creature until the last is removed. At the beginning of your end step, remove a time counter from it.)
> ● **[Mind Spring](https://scryfall.com/card/blb/389/mind-spring):** 
> Draw X cards.

Wording like "you may cast that spell without paying its mana cost" is a kind of alternative cost, and a spell can be cast with only one alternative cost. So if you use the ability of Uldaros Theorix to cast Overlord of the Balemurk for free, you cannot also choose to cast it for its impending alternative cost, and can only cast the original five-mana creature.

Also, if a spell's cost includes X, then when you cast it without paying its mana cost, X is 0. So if you have Uldaros Theorix cast Mind Spring for free, the result is drawing 0 cards.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/92f0bc647c5c.webp)
> ● **[Three Steps Ahead](https://scryfall.com/card/otj/75/three-steps-ahead):** 
> Spree (Choose one or more additional costs.)
> +{1}{U}—Counter target spell.
> +{3}—Create a token that's a copy of target artifact or creature you control.
> +{4}—Draw two cards, then discard a card.

The previous example explained why you cannot choose another alternative cost, but additional costs are a different matter.

An additional cost is a cost you may pay on top of casting a spell, and it does not change the spell's mana value. So if you cast Three Steps Ahead with the ability of Uldaros Theorix, no matter how many Spree costs you want to add, it still counts as a spell with mana value 1, leaving you an extra 5 of allowance to use, but the additional costs that Spree requires must be paid in mana by yourself.

Also, suppose you use the second mode of Three Steps Ahead to create a copy of Uldaros Theorix. Since that creature does not meet the condition "if you cast it", the token copy of Uldaros Theorix will not trigger its own ability when it enters. By the same logic, bringing it onto the battlefield with a Cloudshift-style effect such as [Ephemerate](https://scryfall.com/card/mh1/7/ephemerate) cannot trigger its ETB ability either.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/2afa3aa36b59.webp)
> ● **[Doomsday Excruciator](https://scryfall.com/card/dsk/94/doomsday-excruciator):** 
> When Doomsday Excruciator enters, if you cast it, each player's library is reduced to the bottom six cards, and the rest are exiled face down.

Although the free casting from Uldaros Theorix does not involve paying mana, it is still a casting action. So a Doomsday Excruciator cast for free with the effect of Uldaros Theorix meets the "if you cast it" condition and can trigger Doomsday Excruciator's ETB ability.




![](https://images.guildmagesforum.tw/posts/How-to-Ruin-Uldaros-Theorix/3e2a3ed51f10.webp)
> ● **[Superior Spider-Man](https://scryfall.com/card/spm/155/superior-spider-man):** 
> You may have Superior Spider-Man enter as a copy of any creature card in a graveyard, except his name is Superior Spider-Man, he's a 4/4 Spider Human Hero in addition to his other types. When you do, exile the card you chose.

Now for the main event. If I cast Superior Spider-Man normally and choose to have him enter as a copy of Uldaros Theorix in the graveyard, and I have two instant or sorcery cards in the graveyard that I want to cast, how can I play it out?

First, let me explain how Superior Spider-Man works. When he successfully enters, he enters as the copied object, so he can trigger the copied object's ETB ability, but on top of that, Superior Spider-Man also creates an additional ETB ability of his own: "exile the original card from the graveyard." Since these ETBs are all triggered abilities created by the same event, you can choose the order in which they go on the stack.

Now Superior Spider-Man has entered as a copy of Uldaros Theorix and triggered the ETB. Of course I could just exile those two instant and sorcery cards, but there is an even better choice here.

Since Uldaros Theorix itself is a six-mana card, exactly within its own casting limit, I can choose to exile the original card in the graveyard that Superior Spider-Man copied, and by ordering the stack myself, have Uldaros Theorix's ability resolve first, so that it is exiled by its own ability and cast for free before Superior Spider-Man exiles it. And the freely cast Uldaros Theorix itself still enters as a cast permanent, so when it enters it also triggers its ETB, and this time you exile the two instant and sorcery cards you originally wanted. With that, your board gets a free 5/5 flier.

You ask why you do not lose one to the legend rule? Because when Superior Spider-Man copies, he changes the name so it stays "Superior Spider-Man," so you do not control legendary permanents with the same name, and the legend rule does not apply.




---

## Conclusion

The ability of [Uldaros Theorix](https://scryfall.com/card/fra/159/uldaros-theorix) involves many characteristic filters for cards and spells, which makes it a very comprehensive teaching example for a rules article. In the future, when you run into questions about casting spells with specific conditions, this article should offer plenty of equivalent answers.

As for actual gameplay, though, I still want to ask: does Wizards really remember that [Superior Spider-Man](https://scryfall.com/card/spm/155/superior-spider-man) is in Standard...? The various unfair combos [Superior Spider-Man](https://scryfall.com/card/spm/155/superior-spider-man) already has are plenty powerful, and further boosting its ability to go off feels unhealthy.
