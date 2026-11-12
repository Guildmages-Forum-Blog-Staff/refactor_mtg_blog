---
title: "Why Did Urza's Saga Blow Itself Up?"
date: 2023-09-05 17:42:48
cover: "https://images.guildmagesforum.tw/posts/Saga-and-Moon/d7b70bbb498e-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Saga-and-Moon/d7b70bbb498e-cover.jpg"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
excerpt: "Why is Blood Moon the Urza's Saga killer?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Saga-and-Moon/).

## <font color="#FF0000">Major Rules Change</font>

The FIN set made a major change to the Saga rules. The new rules change how a Saga is handled after it loses its abilities, so the rules analysis in this article of Sagas that have lost their abilities no longer applies. For the current rules, please see the new article: [How Blood Moon Went from Urza's Saga's Natural Enemy to Its Teammate](https://guildmagesforum.tw/en/How-does-Urzas-Saga-Become-Blood-Moons-Friend/).



---

## Introduction

If you ask which card in recent sets got judges the most rules questions, I think it has to be [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3). It is not only the first enchantment land in history but also an unprecedented (and perhaps never to be repeated) Saga land, which makes its rules Q&A exceptionally interesting.

The most common question is how its interactions with cards like [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) and [Spreading Seas](https://scryfall.com/card/zen/70/spreading-seas) cause [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3) to blow itself up, so today let's talk about some rules topics regarding Sagas.

(Note: for ease of reading and understanding, the rules text quoted below appropriately omits some of the rule description. For the complete rules, please refer to the linked originals.)

{% mtgpick "mh2" 259 %}

---

## When Does a Saga Sacrifice Itself

Before discussing the more complicated [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3), let's first look at how an ordinary Saga works. [Saga rule 714.4](https://mtg.fandom.com/wiki/Saga) states the following: 

- 714.4
If the number of lore counters on a Saga is greater than or equal to its final chapter number, and it isn't the source of a chapter ability that has triggered but not yet left the stack, sacrifice that Saga. This state-based action doesn't use the stack.

This is also why, when a Saga reaches its final chapter, you can respond to the final chapter's triggered ability before the Saga is sacrificed, for example by activating the chapter II effect of [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3) to create a token, or by using a card like [Flicker of Fate](https://scryfall.com/card/thb/16/zht/%E6%98%8E%E6%BB%85%E5%91%BD%E9%81%8B) in response to the chapter III ability (while the ability is on the stack and has not yet resolved) to Cloudshift the Saga so it re-enters the battlefield and avoids being sacrificed.

The double-faced Sagas of Kamigawa: Neon Dynasty (such as [Fable of the Mirror-Breaker // Reflection of Kiki-Jiki](https://scryfall.com/card/neo/141/fable-of-the-mirror-breaker-reflection-of-kiki-jiki)) also use this rule: when the final chapter ability resolves, the Saga has already been exiled and has entered the battlefield as a new object in its transformed form, so naturally it won't be sacrificed under the Saga's original rule.

---

## What Blood Moon Does

![Blood Moon](https://images.guildmagesforum.tw/posts/Saga-and-Moon/4764f0256ec4.webp)

[Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) turns all nonbasic lands into Mountains, at which point [rule 305.7](https://mtg.fandom.com/wiki/Land) takes effect: 

- 305.7
When a land's subtype is set to one or more basic land types, it loses its old land type, and also loses all abilities it gained from its original rules text and types, and gains the mana ability corresponding to the colors of the current basic land types. Setting a land's subtype does not cause it to lose its other card types (creature, enchantment) or supertypes (basic, legendary, snow, etc.)

While [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) is on the battlefield, [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3) loses all the abilities it originally had, but it does not lose the enchantment type, nor the Saga type that is a subtype of enchantment, so the rules that come with the Saga type still apply. And when a Saga loses its abilities, [rule 714.2d](https://mtg.fandom.com/wiki/Saga) states: 

- 714.2d
A Saga's final chapter number is the greatest value among its chapter abilities. If a Saga has no chapter abilities for some reason, its final chapter number is 0.

That is to say, [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) turns [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3) into a Saga with no abilities and a final chapter of 0 (a simplified diagram is below). Then, according to rule [714.4](https://mtg.fandom.com/wiki/Saga) above, the state check finds a Saga with **lore counters greater than or equal to its final chapter number and no unresolved triggered ability**, and sacrifices it.

![Urza's Mountain](https://images.guildmagesforum.tw/posts/Saga-and-Moon/69d603cf7b87.webp)

---

## The Urza's Saga Self-Destruct Gift Pack

Besides the [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon) and [Magus of the Moon](https://scryfall.com/card/tsr/175/magus-of-the-moon) mentioned above, there are many other cards that can make [Urza's Saga](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3) blow itself up, such as [Alpine Moon](https://scryfall.com/card/m19/128/alpine-moon), [Blood Sun](https://scryfall.com/card/rix/92/blood-sun), and [Spreading Seas](https://scryfall.com/card/zen/70/spreading-seas). How these cards make Urza's Saga blow itself up can all be explained by the rules above. From now on, whenever you see cards like these that erase land abilities in a decklist, don't forget they can be used to make Urza's Saga blow itself up.

![Urza's Saga counters](https://images.guildmagesforum.tw/posts/Saga-and-Moon/e202939229ce.webp)

---

## What Happens When a Saga Loses Lore Counters

Finally, here is a small interaction with Sagas. Above we learned that a Saga is sacrificed if its lore counters are greater than or equal to its final chapter number, but what happens if a Saga simply loses lore counters? 

The answer is that nothing happens: the Saga isn't sacrificed, and no chapter ability triggers at that time. The Saga only executes the corresponding chapter's ability the next time it gets a lore counter, so by pairing with counter-removing abilities such as [Power Conduit](https://scryfall.com/card/ncc/376/power-conduit), [Glissa Sunslayer](https://scryfall.com/card/one/202/glissa-sunslayer), and [Render Inert](https://scryfall.com/card/mom/123/render-inert), you can wind a Saga's progress backward and reuse chapters that have already been executed.

![Removing counters](https://images.guildmagesforum.tw/posts/Saga-and-Moon/10c2da80fe03.webp)

Among these, effects that remove counters at instant speed, like [Power Conduit](https://scryfall.com/card/ncc/376/power-conduit), can achieve even more subtle interactions with Sagas.

When your Saga's final chapter ability triggers, you can respond to the ability on the stack by removing the Saga's lore counters. Since the Saga's triggered ability hasn't yet left the stack, the condition for sacrificing the Saga in [714.4](https://mtg.fandom.com/wiki/Saga) isn't met, and when that chapter ability resolves, because the Saga's lore counters have already been removed and it is not in a state of having counters greater than or equal to the final chapter number, you don't have to sacrifice the Saga either. In the end you have freeloaded one use of the Saga's final chapter ability, while the Saga stays on the battlefield.
