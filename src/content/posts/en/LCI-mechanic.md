---
title: "The Lost Caverns of Ixalan Mechanics Explained"
date: "2023-10-25 17:19:50"
cover: "https://images.guildmagesforum.tw/posts/LCI-mechanic/eb96130c3166-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/LCI-mechanic/eb96130c3166-cover.jpg"
excerpt: "Let's see what new mechanics appear in The Lost Caverns of Ixalan!"
categories:
  - "Limited"
  - "LCI"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../LCI-mechanic/).

## Before We Start

The [Lost Caverns of Ixalan mechanics introduction](https://magic.wizards.com/en/news/feature/the-lost-caverns-of-ixalan-mechanics) has been published on the official MTG website. Since the official site may not provide a Traditional Chinese translation, and this set's mechanics include a few rules texts that are easily confusing, I decided to reorganize the mechanics of The Lost Caverns of Ixalan in my own way and share them with readers.

---

## Returning Mechanic: Transforming Double-Faced Cards

![Transforming double-faced cards](https://images.guildmagesforum.tw/posts/LCI-mechanic/c4cec38bc548.webp)

I honestly do not know whether to call this a returning mechanic or a semi-evergreen mechanic. Transforming double-faced cards were one of the set's hallmarks back in Ixalan, and they are not absent from The Lost Caverns of Ixalan either, with an even richer variety of card types after transforming. However, no rules about transforming double-faced cards have changed this time, so I will not belabor them. Readers interested in more rules about transforming double-faced cards can see this article: [Transforming Double-Faced Cards and Copy Effects](https://guildmagesforum.tw/en/DFC-Copy/).

## Returning Mechanic: Explore

![Explore](https://images.guildmagesforum.tw/posts/LCI-mechanic/af0adbce8467.webp)

Explore is another returning mechanic this time, and it was the signature mechanic of the original Ixalan. When you make a creature explore, reveal the top card of your library. If a land card is revealed, put it into your hand; if a land card was not revealed this way (a nonland card was revealed, or the library is empty), put a +1/+1 counter on the exploring creature, and then you may decide whether to leave the revealed nonland card on top of your library or put it into your graveyard.

Also, suppose that when the explore ability resolves the creature that is exploring is already gone: explore still works as normal, and when a nonland card is revealed you can still decide whether to put it into the graveyard; the only difference is that no creature gets a +1/+1 counter because of it.
(If a spell or ability makes a target creature explore, but the target creature disappears before resolution, this causes the ability to fizzle under the rules, and explore is not performed at all.)

## Map Tokens

![Map](https://images.guildmagesforum.tw/posts/LCI-mechanic/23ef09a2d0a6.webp)

The Map token is a newly defined artifact token whose effect is an extended application of explore. Map tokens are all colorless artifacts and have the following ability:
"{1}, {T}, Sacrifice this artifact: Target creature you control explores. Activate only as a sorcery."

## Craft

![Craft 1](https://images.guildmagesforum.tw/posts/LCI-mechanic/147d5a243c82.webp)
![Craft 2](https://images.guildmagesforum.tw/posts/LCI-mechanic/5910c03b664b.webp)

Craft is a new activated ability based on transforming double-faced cards. It always appears on the front face of a transforming double-faced card and helps that card transform to its back face.

The activation cost of craft always includes three things:

- Paying the specified mana cost
- Exiling this card
- Exiling other permanents / permanent cards of the specified condition and number from the battlefield or graveyard

When the craft ability resolves successfully, the card that activated craft is put onto the battlefield transformed (back face up).

Some cards' craft costs require you to exile multiple permanents / permanent cards. Take [The Enigma Jewel](https://scryfall.com/card/lci/55/the-enigma-jewel-locus-of-enlightenment) as an example: it requires you to exile four or more nonland cards with activated abilities, and as long as the total you exile from the battlefield and graveyard is 4 or more, the split can be 0:4, 2:2, or 3:1. Since the card only says "at least," there is no problem exiling 3 from the battlefield + 4 from the graveyard to activate it either. In addition, the condition for exiling from the battlefield is only "permanents you control," so using tokens or permanents you gained control of from your opponent as craft materials is no problem.

## Discover

![Discover](https://images.guildmagesforum.tw/posts/LCI-mechanic/325d12ef6dd3.webp)

We finally come to the main event of this article. The rules text on discover cards is exactly the biggest reason I decided to write it.

From its name to its effect, discover is clearly a tribute to **Cascade**. Let us look at discover's specific effect:

- Discover is always followed by a number, which is the maximum mana value of the card you can find. When an effect makes you discover, exile cards from the top of your library one at a time until you exile a nonland card with mana value equal to or less than that number, and then you may cast it without paying its mana cost, or put it into your hand. Then put the other exiled cards on the bottom of your library in a random order.
- **(Although it is not written on the card)** The spell cast with discover must also have a mana value equal to or less than the number specified after discover.

Discover can be said to be a flexible upgrade of cascade: if the card you flip is not applicable or not usable at the moment, you can also choose to put it in hand, unlike the original cascade that could only quietly stuff it onto the bottom of the library, and changing the mana value threshold to be specified by a number on the ability gives much more flexible design room. For example, this time the ability was put on a land. Although it is no longer a cast trigger, which means lower resilience against [Counterspell](https://scryfall.com/card/mh2/267/counterspell), from my own understanding of game balance, cast-trigger effects are indeed best made sparingly. After changing to an activated ability or a triggered ability (on the battlefield), it may also pair with effects like [Panharmonicon](https://scryfall.com/card/2x2/310/panharmonicon) to play out new synergies, so not being a cast trigger is not necessarily a bad thing.

But the next point puzzles me greatly, and that is that there is a gap between discover's rules text on the card and its actual effect. Take [Geological Appraiser](https://scryfall.com/card/lci/150/geological-appraiser) in the image above as an example: it only checks the mana value of the "card," and if that check passes you can cast it, but in reality there is another supplementary rule that requires the "spell" to also meet the mana value condition, which makes a huge difference for some cards.

![Tibalt](https://images.guildmagesforum.tw/posts/LCI-mechanic/ba928acaabc7.webp)

For instance, [Valki, God of Lies](https://scryfall.com/card/khm/114/valki-god-of-lies-tibalt-cosmic-impostor) is a modal double-faced card whose front face is a 2-mana creature and whose back face is a 7-mana planeswalker (Tibalt). If only the "card" is checked, Valki, God of Lies qualifies, and when you cast it for free you can choose which face to cast; but if the "spell" is checked as well, it does not work, because its back face is a 7-mana spell. The adventure of [Bramble Familiar](https://scryfall.com/card/woe/164/bramble-familiar-fetch-quest) works on the same principle: whether the "spell" cost is checked gives completely different results, and there are real examples in every format.

![Cheating](https://images.guildmagesforum.tw/posts/LCI-mechanic/feb059183709.webp)

The combo of [Invasion of Alara](https://scryfall.com/card/mom/230/invasion-of-alara-awaken-the-maelstrom) + [Bramble Familiar](https://scryfall.com/card/woe/164/bramble-familiar-fetch-quest) is a standard present-day example. For details, see the article [How Lier Interacts with Adventure Cards](https://guildmagesforum.tw/en/Adventure-and-Lier/).

[Bring to Light](https://scryfall.com/card/2x2/188/bring-to-light) + [Valki, God of Lies](https://scryfall.com/card/khm/114/valki-god-of-lies-tibalt-cosmic-impostor) is not rare in Pioneer. Bring to Light likewise only checks the cost of the "card" and does not care what mana value of "spell" you end up casting.

Cascade (such as [Shardless Agent](https://scryfall.com/card/mh2/292/shardless-agent)) + [Valki, God of Lies](https://scryfall.com/card/khm/114/valki-god-of-lies-tibalt-cosmic-impostor) originally worked with the same logic as Bring to Light, and at that time Modern was filled with large numbers of turn-three or even turn-two Cascade Tibalt decks. But on February 15, 2021, along with the [banned list update](https://magic.wizards.com/en/news/announcements/february-15-2021-banned-and-restricted-announcement), the official side very rarely changed the ability's rules definition: Cascade's new rule is that after the "card" cost check passes, the "spell" cost is checked again, and only if both qualify can it be cast, so the Cascade Tibalt tactic disappeared from the rules. However, this rules change targeted Cascade, and other tactics like Bring to Light still work.

In this respect Discover really is a tribute to Cascade, even down to the point that it is not written on the card but I will check the spell's cost. But Cascade had its rules modified after the fact, and the original rules were indeed different from now, so naturally the card text could not keep up with the current rules. That Discover, as an entirely new card, shows this phenomenon is truly puzzling.

That said, I think limiting the "spell" cost threshold is itself benign; this design makes game-breaking go-off decks less likely to appear. It is just that if you only read discover's rules text on the card, a very large rules ambiguity arises, so readers please pay special attention.

## Descend

![Descend](https://images.guildmagesforum.tw/posts/LCI-mechanic/9841cbd69a47.webp)

Descend cares about whether a permanent card was put into your graveyard from anywhere this turn, whether it died from the battlefield, was discarded from hand, or was milled from the library, and that permanent card does not need to stay in the graveyard; it only has to have entered the graveyard at some point, and even if that card later left the graveyard for some other reason, it does not affect descend at all.

[Broodrage Mycoid](https://scryfall.com/card/lci/95/broodrage-mycoid) only cares whether a permanent card has entered the graveyard this turn; as long as one permanent card has ever entered the graveyard, you count as having descended this turn.

[The Mycotyrant](https://scryfall.com/card/lci/235/the-mycotyrant) is slightly more complicated: it counts how many times you descended this turn, that is, how many times permanent cards were put into your graveyard this turn. Likewise, it only counts the total number of times these cards entered the graveyard; whether they stay in the graveyard does not matter, and the same card can also contribute to the descend count multiple times.

## Descend 4, Descend 8, Fathomless Descent

![Descend X](https://images.guildmagesforum.tw/posts/LCI-mechanic/42914b0d28c1.webp)

This is the second motivation that pushed me to write this article. Unlike the discover situation above, descend has no ambiguity in rules interpretation, but is quite unintuitive to read and easily confusing.

Descend 4, Descend 8, and Fathomless Descent all care about the **number of permanent cards** in your graveyard, producing different effects or adding extra effects according to that number. Descend 4 means your graveyard needs 4 permanent cards, Descend 8 means it needs 8 permanent cards, and Fathomless Descent does not require your graveyard to have a particular number of permanent cards; rather, the more the better, and the more cards there are, the greater the effect.

Reading this, you can see that **Descend** and **Descend N** are two entirely different abilities, but their wording is extremely close: in English they may differ only by a tense, and in Chinese there is not even any difference. Without understanding the rules differences between the two, it is very easy to mix up their meanings.

The simplest way to tell them apart is to check whether the card requires attention to the number of permanent cards in the graveyard. If so, it is **Descend N** or **Fathomless Descent**; if it only says **Descend** and the text does not say what Descend means, or there is wording like **"If you descended this turn"** that checks whether you have descended this turn, then it refers to the ability that cares about whether any permanent card has entered the graveyard (some higher-rarity or later-printing cards do not write out the full keyword definition).

Strictly speaking, Descend 4, Descend 8, and Fathomless Descent are not true keywords but [ability words](https://mtg.fandom.com/wiki/Ability_word), which are written in **_italics_** on English cards. Cards in other languages may not be as easy to tell apart, but when the font is clearly distinguishable this is also a way to identify them. An ability word means that even without that piece of text the card's complete rules are unaffected; generally, ability words make rules easier for players to read, but this time two abilities with completely different actual workings share one word, which causes player confusion.

## Finality Counter

![Finality counter](https://images.guildmagesforum.tw/posts/LCI-mechanic/0138bdc09017.webp)

Although the finality counter is a new counter, its ability is a new presentation of an old ability: **a creature with a finality counter on it is exiled instead if it would die**. When future MTG designs new cards with "exile instead of dying" effects, it may use the new tool of the finality counter, just like how some "doesn't untap" effects were later redesigned using stun counters.

Of course, since it is a counter, it has some new room for interaction, such as removing counters from your own creatures, or even moving counters onto your opponent's creatures, and so on.

Very few cards in this set use finality counters, but we can expect new cards using finality counters to keep appearing from now on.

---

## Getting Ready for The Lost Caverns of Ixalan

As of the time this article was completed, the official side has not published a Traditional Chinese version of the mechanics article. All Chinese translations quoted in this article come from the Simplified Chinese version, and the official Traditional Chinese translations in the future may differ from this article.

The Prerelease sealed events for The Lost Caverns of Ixalan begin on November 10, 2023. Get ready to start a new adventure!

![MR](https://images.guildmagesforum.tw/posts/LCI-mechanic/a04568aeb48a.webp)
