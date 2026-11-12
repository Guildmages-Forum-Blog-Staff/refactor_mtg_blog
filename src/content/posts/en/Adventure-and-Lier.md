---
title: "How Lier Interacts with Adventure Cards"

date: 2023-09-19 18:00:00


cover: "https://images.guildmagesforum.tw/posts/Adventure-and-Lier/7f8fdf5320ba-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Adventure-and-Lier/035f91527607-cover.jpg"

excerpt: "How does Lier, Disciple of the Drowned flash back Adventure spells from the graveyard?"

categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Adventure-and-Lier/).

Can [Lier, Disciple of the Drowned](https://scryfall.com/card/mid/59/lier-disciple-of-the-drowned) actually flash back an Adventure spell from the graveyard? This isn't a very new question, but it was one that many people overlooked or misunderstood before, and with Adventure returning to Standard, how often this question comes up in actual play has risen a lot.

I believe many readers have already heard the answer through various social media: **Yes! You can use Lier, Disciple of the Drowned's ability to flash back an Adventure spell from the graveyard!** But the mechanics behind it are hard to understand: why can Lier, who gives instants and sorceries flashback, affect an Adventure card, which is a permanent card?

Today let's analyze how Lier actually does it, and whether other cards with similar effects can achieve the same application.

![Lier&Adventure](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/b432d97fc1bc.webp)

---

## Is Casting This Spell Legal?

What is the first step of casting a spell? Readers who have read the article **[How to Cast a Spell Without Paying Its Mana Cost](https://guildmagesforum.tw/en/casting-spell-without-mana-cost/)** should remember that the first step is moving the spell to the stack:

- 601.2a
  A player announces that they are casting a spell, and moves that card (or a copy of that card) to the top of the stack until the spell resolves, is countered, or moves elsewhere.

But before the spell is put on the stack, there is a preliminary check: the game checks whether this spell is allowed to be cast, and whether any effect forbids players from casting spells. This is rule 601.3:

- 601.3
  A player can begin to cast a spell only if a rule or effect allows that player to cast it and no rule or effect prohibits that player from casting it.

This 601.3 looks intuitive and obvious, right? But if you ask carefully, which characteristics should be used to define this legality check? Many spells have variables, alternative characteristics and so on when cast, and there are many effects that allow you to cast things specially or forbid casting, for example:

- [Melek, Izzet Paragon](https://scryfall.com/card/c20/220/melek-izzet-paragon) lets you cast instant and sorcery cards from the top of your library.
- [Brisela, Voice of Nightmares](https://scryfall.com/card/emn/15b/brisela-voice-of-nightmares) forbids you from casting spells with total mana value 3 or less.

These conditions are limiting, and the result may change depending on the spell's own variables or changes in characteristics, so how exactly does the game decide? For that we look at rule 601.3e:

- 601.3e
  Some rules and effects state that an alternative set of characteristics or a subset of characteristics are considered to determine if a card or a copy of a card is legal to cast. These alternative characteristics replace the object's characteristics for this determination. **Continuous effects that would apply to that object once it has those characteristics are also considered.**
- 601.3e
  Some rules and effects state that an alternative set of characteristics or a subset of characteristics are considered to determine if a card or copy of a card is legal to cast. These alternative characteristics replace the object’s characteristics for this determination. **Continuous effects that would apply to that object once it has those characteristics are also considered** .

Just looking at this, it is certainly hard to understand, so let's start with an example~
![601.3e Example](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/68a3ef34c4ee.webp)

[Melek, Izzet Paragon](https://scryfall.com/card/c20/220/melek-izzet-paragon): You may cast instant and sorcery cards from the top of your library.
[Garruk's Horde](https://scryfall.com/card/w17/24/garruks-horde): You may cast creature spells from the top of your library.

Suppose I control only Melek or only Garruk's Horde, and the top card of my library is [Bonecrusher Giant](https://scryfall.com/card/eld/115/bonecrusher-giant-stomp). What casting actions can I take from the top of the library? The answer is obvious: with Garruk's Horde I can cast Bonecrusher Giant but not Stomp (the Adventure half); with Melek on the battlefield I can cast Stomp but not Bonecrusher Giant. The reason is that when we try to cast it, if we announce that we are casting the alternative-characteristics half, the game swaps the alternative characteristics in for the original ones, so when I control Melek and try to announce Stomp, the game checks the characteristics of Stomp, not those of Bonecrusher Giant.

In addition, when you use alternative characteristics, **continuous effects that apply to those alternative characteristics also take effect**, so when you control [Najal, the Storm Runner](https://scryfall.com/card/dmu/208/najal-the-storm-runner), you can cast [Locthwain Scorn (the Adventure half of Virtue of Persistence)](https://scryfall.com/card/woe/115/virtue-of-persistence-locthwain-scorn) as though it had flash.

![Continuous Effect Example](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/cee74bd1c3a4.webp)

---

## How Does Lier Do It?

Back to our topic: when we control Lier, Disciple of the Drowned and try to announce a flashback of Seek Thrills in the graveyard, how does the game check this casting announcement?

![Lier&Adventure](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/b432d97fc1bc.webp)

First we pick up Beluna Grandsquall from the graveyard and announce that we are casting its Adventure half, Seek Thrills, by flashback. The game begins checking whether this action is legal. Since we announced casting it with the Adventure's alternative characteristics, the characteristics checked will be changed to those of Seek Thrills. According to the rule **"601.3e: Continuous effects that would apply to that object once it has those characteristics are also considered"**, at this point Seek Thrills is also subject to Lier's **"Each instant and sorcery card in your graveyard has flashback"**. The game judges this a legal action, Seek Thrills moves to the stack, and the casting process begins.

After Seek Thrills is successfully cast from the graveyard, some readers may remember another rule of flashback: **"If the flashback cost was paid, exile this card instead of putting it anywhere else any time it would leave the stack"**. But as it happens, a card that has been cast as an Adventure goes to exile anyway, which means this flashback rule has no effect at all on an Adventure card, and now Beluna Grandsquall truly gets its last flash of life.

---

## How Do Other Cards Interact with Adventure?

![Flashback](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/8221abc83040.webp)

[Snapcaster Mage](https://scryfall.com/card/mm3/50/snapcaster-mage) and [Past in Flames](https://scryfall.com/card/mm3/105/past-in-flames) are likewise cards that give instants and sorceries in the graveyard flashback, but they aren't as lucky as Lier. Snapcaster Mage's ability needs a target, but an Adventure card obviously doesn't satisfy the target requirement of being an instant or sorcery card; if the ability can't target the card, naturally nothing follows.

So why can't Past in Flames, which looks almost identical to Lier, do it either?

In fact, there is a decisive difference between Lier and Past in Flames: Lier's ability comes from a permanent's static ability, while Past in Flames is a continuous effect created by the resolution of a spell or ability. The rules for this kind of continuous effect are governed by 611.2c:

- 611.2c
  If a continuous effect generated by the resolution of a spell or ability modifies the characteristics or changes the controller of any objects, the set of objects it affects is determined when that continuous effect begins. After that point, the set won't change. (Note that this works differently than a continuous effect from a static ability.) A continuous effect generated by the resolution of a spell or ability that doesn't modify the characteristics or change the controller of any objects modifies the rules of the game, so it can affect objects that weren't affected when that continuous effect began. If a single continuous effect has parts that modify the characteristics or changes the controller of any objects and other parts that don't, the set of objects each part applies to is determined independently.
- 611.2c
  If a continuous effect generated by the resolution of a spell or ability modifies the characteristics or changes the controller of any objects, the set of objects it affects is determined when that continuous effect begins. After that point, the set won’t change. (Note that this works differently than a continuous effect from a static ability.) A continuous effect generated by the resolution of a spell or ability that doesn’t modify the characteristics or change the controller of any objects modifies the rules of the game, so it can affect objects that weren’t affected when that continuous effect began. If a single continuous effect has parts that modify the characteristics or changes the controller of any objects and other parts that don’t, the set of objects each part applies to is determined independently.

Let's put this in plain language... It's perfectly normal to read this legal-text-like thing 10 times and still not take it in.

Taking Past in Flames as the example, only the instants and sorceries that the spell sees at the moment it resolves gain flashback; instants and sorceries that enter the graveyard afterwards don't automatically gain flashback, and at the moment Past in Flames resolves, those Adventure cards are just permanent cards, so naturally they can't gain flashback.

![Other Examples](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/84622f049a5b.webp)

The emblem of [Wrenn and Six](https://scryfall.com/card/mh1/217/wrenn-and-six) gives instants and sorceries in your graveyard retrace. In terms of how it works, its interaction with Adventure cards in the graveyard is exactly the same as Lier's: when you have this emblem, you can cast Adventure spells from your graveyard using retrace.

[Sword of Once and Future](https://scryfall.com/card/mom/265/sword-of-once-and-future) is the simplest case, because it says Spell from the very start, not Card, so it isn't affected by the fact that the Adventure card itself is a permanent card; as long as the Adventure spell's total mana value is 2 or less, it can be cast from the graveyard through Sword of Once and Future's effect.

![Invasion of Alara](https://images.guildmagesforum.tw/posts/Adventure-and-Lier/5a1d2aa8dc0c.webp)

[Invasion of Alara](https://scryfall.com/card/mom/230/invasion-of-alara-awaken-the-maelstrom) and [Bramble Familiar](https://scryfall.com/card/woe/164/bramble-familiar-fetch-quest) form a combo that makes full use of an Adventure card's two sets of characteristics. When Invasion of Alara enters, you exile cards from the top of your library until you exile two **cards** with total mana value 4 or less, and you may cast one of them without paying its mana cost.

The only condition this ability checks is **cards with mana value 4 or less**. Bramble Familiar is a two-mana creature card, which satisfies this condition. Then you may cast it without paying its mana cost, and at that point the Adventure card asks whether you want to cast the creature half, Bramble Familiar, or the Adventure sorcery half, Fetch Quest. Whichever side you choose can be cast successfully, and Invasion of Alara won't ask what mana cost the spell you end up casting has.
