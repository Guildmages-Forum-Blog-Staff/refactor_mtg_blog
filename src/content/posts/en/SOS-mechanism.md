---

title: "Secrets of Strixhaven Mechanics Breakdown"
date: "2026-04-07 11:58:31"
updated: "2026-04-08 18:20:24"
authors:
  - "JruMTG"
categories:
  - "Limited"
  - "SOS"
cover: "https://images.guildmagesforum.tw/posts/SOS-mechanism/6f3eb618320b-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/SOS-mechanism/6f3eb618320b-cover.jpg"
excerpt: "Let's see which mechanics appear in the Secrets of Strixhaven mechanics breakdown!"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../SOS-mechanism/).

## Prepare
![Prepare](https://images.guildmagesforum.tw/posts/SOS-mechanism/92da26bade99.webp)

Every prepare card has two card frames, just like past [Adventure](https://guildmagesforum.tw/FIN-mechanism/#%E6%AD%B7%E9%9A%AA%EF%BC%88Adventure%EF%BC%89) and [Omen](https://guildmagesforum.tw/TDM-mechanism/#%E9%A0%90%E5%85%86%EF%BC%88Omen%EF%BC%89) cards. The left rules text box holds the creature card's own abilities, and the right holds its prepare spell, which has its own name, cost, type, and rules text box.

A permanent can become **prepared** in some way. Whenever a permanent becomes prepared, a copy of its prepare spell is created in exile, and that copy stays in exile until any of the following happens:

- 1. You cast this prepare spell from exile.
- 2. The prepared permanent leaves the battlefield.
- 3. The prepared permanent becomes **unprepared**, which some cards can cause.

If 2 or 3 happens and you haven't yet cast the copy of the prepare spell from exile, the copy disappears.

Casting a prepare spell is just like casting a normal instant or sorcery spell: you need to pay the specified cost and follow the timing rules for spells of that type. Because you are casting the spell from exile, it is affected by cards like [Aven Interrupter](https://scryfall.com/card/otj/4/aven-interrupter) and [Doc Aurlock, Grizzled Genius](https://scryfall.com/card/otj/201/doc-aurlock-grizzled-genius).

If you cast a prepare spell from exile, the corresponding **prepared** permanent becomes **unprepared**. If a permanent is already prepared, it can't become prepared again, which means a permanent can have at most one prepare spell copy in exile at a time.

If player A controls a prepared permanent and player B later gains control of it, then player B is now the one who can cast the corresponding prepare spell from exile.

A prepare card has only the characteristics of its permanent side in any zone. Take the pictured [Studious First-Year](https://scryfall.com/card/sos/162/studious-first-year-rampant-growth) as an example: in any zone it is only a creature card. If you use an effect that searches your library for a creature card, you can find it, but if you use an effect that searches for an instant/sorcery card, you can't find it, because the card doesn't have the sorcery card type.

Also, do the prepare spell of [Studious First-Year](https://scryfall.com/card/sos/162/studious-first-year-rampant-growth), its cost, effect, and name, all look a bit familiar? That's because its prepare spell really is [Rampant Growth](https://scryfall.com/card/j25/704/rampant-growth)! Many of the prepare spells created by prepare cards this time are instants and sorceries that have actually existed in MTG history. Suppose you use [Meddling Mage](https://scryfall.com/card/2xm/210/meddling-mage) to name [Rampant Growth](https://scryfall.com/card/j25/704/rampant-growth) so no player can cast spells with that name: both the real [Rampant Growth](https://scryfall.com/card/j25/704/rampant-growth) itself and the [Rampant Growth](https://scryfall.com/card/j25/704/rampant-growth) copy made by [Studious First-Year](https://scryfall.com/card/sos/162/studious-first-year-rampant-growth) through prepare will be locked out.




## Flashback
![Flashback](https://images.guildmagesforum.tw/posts/SOS-mechanism/3a3410000c5c.webp)

> Representative colors: Red-White (Lorehold College)

This time, Lorehold's representative ability is the keyword ability flashback, which is already semi-evergreen.

Flashback appears on instants and sorceries. You can cast an instant or sorcery spell with flashback from your graveyard and pay the alternative cost specified by flashback instead of the spell's original cost.

If a spell cast with flashback would leave the stack (whether it resolves successfully, is countered, or in other special circumstances), exile it instead of putting it into any other zone.

Flashback doesn't change when the spell can be cast; you still follow the timing of its original type.





## Repartee
![Repartee](https://images.guildmagesforum.tw/posts/SOS-mechanism/f6abfec7299f.webp)

> Representative colors: White-Black (Silverquill College)

Repartee is an ability word. All repartee abilities are triggered abilities that trigger when you cast an instant or sorcery spell that targets a creature, and the triggered effect depends on each individual card's text.

If an instant/sorcery spell targets multiple creatures at once, repartee still triggers only once. When multiple repartee abilities trigger at the same time, you choose the order in which they go on the stack.





## Infusion
![Infusion](https://images.guildmagesforum.tw/posts/SOS-mechanism/d6ba78cc6f44.webp)

> Representative colors: Black-Green (Witherbloom College)

Infusion is an ability word that checks whether you have gained life this turn and produces the corresponding effect.

Infusion only cares whether the event of gaining life has happened. Even if you gained 1 life this turn but lost 10 life, the infusion condition is still met.





## Increment
![Increment](https://images.guildmagesforum.tw/posts/SOS-mechanism/3c8967c8dffa.webp)

> Representative colors: Blue-Green (Quandrix College)

Increment is a keyword ability that appears on creatures. Whenever you cast a spell, if the **amount** of mana spent to cast that spell is greater than the power or toughness of the creature with increment, you put a +1/+1 counter on that creature.

Increment checks its condition twice. When you cast a spell, the increment condition is checked once, and the ability goes on the stack only if the condition is really met. When the ability resolves, the condition is checked again. Suppose that before the ability resolves, the creature's power and toughness increased for some reason; then the increment condition may no longer be met, and the +1/+1 counter can't be placed.

The cost paid for the spell that increment checks includes all kinds of additional costs paid when casting it, such as Kicker.





## Opus
![Opus](https://images.guildmagesforum.tw/posts/SOS-mechanism/fc7d0a125c4f.webp)

> Representative colors: Red-Blue (Prismari College)

Opus is an ability word. All opus abilities are triggered abilities that trigger when you cast an instant or sorcery spell. Each opus ability has a base effect, and if the amount of mana spent to cast that instant or sorcery spell is 5 or more, it produces an additional effect or strengthens the original effect. If multiple opus abilities trigger together, you choose the order in which they go on the stack.

Like increment, opus also counts additional costs paid when casting the spell.





## Converge
![Converge](https://images.guildmagesforum.tw/posts/SOS-mechanism/d867eeed506a.webp)

Converge checks the number of colors of mana spent to cast this spell and produces the corresponding effect. Since MTG mana comes in only 5 colors, this value is limited to between 0 and 5.

When you copy a spell, the copy wasn't cast, so naturally no mana was spent to cast it, and therefore the converge value of the copied spell is 0.






## Paradigm
![Paradigm](https://images.guildmagesforum.tw/posts/SOS-mechanism/838cd55e6cac.webp)

Paradigm is a keyword ability that appears on a cycle of sorceries, and all paradigm cards in this set have the [Lesson](https://guildmagesforum.tw/TLA-Mechanism/#%E8%AA%B2%E7%A8%8B%EF%BC%88Lesson%EF%BC%89) subtype. However, Lesson isn't the headline mechanic this time, so this set has no supporting mechanics that make use of the Lesson subtype.

A spell with paradigm is exiled as it resolves, and then, if this is the first time you've resolved a paradigm spell with that name, at the beginning of each of your [first main phases](https://guildmagesforum.tw/Round-Process/#%E7%AC%AC%E4%B8%80%E8%A1%8C%E5%8B%95%E9%9A%8E%E6%AE%B5%EF%BC%88First-Main-Phase%EF%BC%89) afterward, you may cast a copy of that spell without paying its mana cost. Whether to cast the copy is entirely your choice.

Because each copy is independent, even if the spell copied by paradigm this turn is countered, a new copy will still be created next turn.

> You can think of paradigm as an upgraded version of the old ability [Epic](https://mtg.fandom.com/wiki/Epic) that doesn't lock you out of your own spells.
