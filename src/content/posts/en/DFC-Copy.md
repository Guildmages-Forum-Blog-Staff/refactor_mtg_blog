---
title: "Transforming Double-Faced Cards and Copy Effects"
date: 2023-09-28 12:00:00
cover: "https://images.guildmagesforum.tw/posts/DFC-Copy/d94e56e09e4c-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/DFC-Copy/d94e56e09e4c-cover.jpg"

excerpt: "What do you get when you try to copy a transforming double-faced card?"

categories:
  - "MTG Rules"
authors:
  - "JruMTG"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../DFC-Copy/).

## Before We Start

Double-faced cards and copy effects are both bosses of the rules Q&A world. Either one alone already pulls in a pile of rules, and when the two interact, the result is often not just counterintuitive: you may not even know where to start analyzing it. On top of that, the Incubator token that came with the [[邪軍壓境]] set completely upended many people's understanding of how double-faced cards work. Maybe you have tried searching the rules yourself, only to be lost in a sea of rule text, or got dizzy the moment you saw that a characteristic has seven Layers.

In this column, let's take on the challenge of explaining, in plain language and without losing rules rigor, what you get when you copy a double-faced card. And let's narrow the question a bit and focus on just one thing: so which face is this card now?

(Note: below, "double-faced card" always means **transforming double-faced card**.)

![Incubator](https://images.guildmagesforum.tw/posts/DFC-Copy/c43d513a4d7d.webp)

---

## Summary of the Transforming Double-Faced Card Rules

Transforming double-faced cards involve a lot of rules, but if you hold on to the following key rules, that is enough to follow the topic of this article:

- 712.8a
  While a double-faced card is outside the game or in a zone other than the battlefield or stack, it has only the characteristics of its front face.
- 712.8d
  While a transforming double-faced permanent's front face is up, it has only the characteristics of its front face.
- 712.8e
  While a transforming double-faced permanent's back face is up, it has only the characteristics of its back face. However, its mana value is calculated using the mana cost of its front face. If a permanent is copying the back face of a transforming double-faced card, the mana value of that permanent is 0 (even if that card is itself a double-faced card).
- 712.9
  Only **transforming double-faced permanents** (transforming tokens and transforming double-faced cards) can transform. If a spell or ability instructs a player to transform a permanent that isn't a transforming double-faced permanent, nothing happens.
- 712.14a
  If a spell or ability puts a transforming double-faced card onto the battlefield "transformed," it enters the battlefield with its back face up. If a player is instructed to put a card that isn't a transforming double-faced card onto the battlefield transformed, that card stays in its current zone.
- 712.18
  When a transforming double-faced permanent transforms, it doesn't become a new object. Any effects that applied to that permanent will continue to apply to it after it transforms.

Of these, **712.9** is a very recent rules change, and it is the root of many people's confused understanding. It is the token rules change brought by the [Incubator token](https://images.guildmagesforum.tw/posts/DFC-Copy/c43d513a4d7d.webp) from [[邪軍壓境]].

Under the old rule, only a "transforming double-faced **card**" could transform. A token did not meet the condition and had no back face to transform into, so when you made a token copy of a double-faced card, you only got the information of one face and could not perform the transform action.

After the Incubator token came along, that rule was changed so that only a "transforming double-faced **permanent**" can transform. If you make a token copy of a transforming double-faced permanent, that token is also a transforming double-faced permanent: it has information on both faces and can transform according to the ability text on the card.

Note, however, that this rule only changes the ruling for **tokens**. For cards that are not tokens, the rules work the same as ever. Now let's look at specific cases to see how the rules for transforming double-faced cards and copy effects should be analyzed!

---

## Making a Token Copy of a Double-Faced Card

![](https://images.guildmagesforum.tw/posts/DFC-Copy/4e8b67d213f3.webp)

Whether you use [Quasiduplicate](https://cards.scryfall.io/large/front/f/0/f069646c-fae2-40bd-92bc-35459a84d847.jpg?1572892821) or [Dollhouse of Horrors](https://cards.scryfall.io/large/front/3/9/396abc9e-a738-430d-85cc-448ace2548f9.jpg?1681389581) to make a token copy of [Graveyard Trespasser](https://cards.scryfall.io/large/front/d/a/daa2a273-488f-4285-a069-ad159ad2d393.jpg?1634347903), the result is the same: the token has both faces of Graveyard Trespasser and can transform under the usual transform rules.

There is one case to watch out for, though: when the transformation goes through exile first and then returns to the battlefield (for example [Sheoldred](https://cards.scryfall.io/large/front/b/f/bf2249e6-af74-4b88-8eb7-144ce8fa7f6b.jpg?1682203978)). Suppose you make a token copy of Sheoldred and activate her transform ability. The token follows the ability and goes to exile first, and a token that is in any zone other than the battlefield ceases to exist (see rules 111.8 and 704.5d).

(Note: some effects modify certain attributes of the token when making a token copy. Take Dollhouse of Horrors: the Graveyard Trespasser token it makes is, no matter which face is up and no matter how many times day and night switch, an artifact creature Construct with power and toughness 0/0 and "This creature gets +1/+1 for each Construct you control." The detailed rules behind this involve Layers, so to keep this article from straying too far, I will only give the result here without breaking Layers down.)

---

## Ludevic, Necrogenius + Enduring Angel

![Undying Angel](https://images.guildmagesforum.tw/posts/DFC-Copy/44eb9cf14b24.webp)

Say you use the ability of [Ludevic, Necrogenius](https://cards.scryfall.io/large/front/7/8/788288f6-7944-48f4-91b0-f452e209c9ce.jpg?1636684654) to transform it into [Olag, Ludevic's Hubris](https://cards.scryfall.io/large/back/7/8/788288f6-7944-48f4-91b0-f452e209c9ce.jpg?1636684654), and then make it a copy of [Enduring Angel](https://cards.scryfall.io/large/front/a/2/a204c2a3-a899-4b70-8825-7e085b655ed0.jpg?1634347126). Your Olag gains Enduring Angel's abilities, including this one: "If your life total would become 0 or less, instead transform this card and your life total becomes 3. Then if this card didn't transform this way, you lose the game."

When your life drops to 0, Enduring Angel's ability applies: it changes your life total to 3 and checks whether this card transformed. Ludevic/Olag is a transforming double-faced card and can perform the transform action, so you don't lose. But what state is Olag in after it transforms? Does it become the back face of Enduring Angel? For that we need to go back to the two rules mentioned above:

- 712.8a
  While a double-faced card is outside the game or in a zone other than the battlefield or stack, it has only the characteristics of its front face.

Based on this rule, when Olag becomes a copy of Enduring Angel, it only sees Enduring Angel's front-face characteristics. What the back face of Enduring Angel looks like is completely invisible to Olag. Now Olag has a continuous effect on it called "this card becomes a copy of Enduring Angel." When the game asks Olag to transform, this rule takes effect:

- 712.18
  When a transforming double-faced permanent transforms, it doesn't become a new object. Any effects that applied to that permanent will continue to apply to it after it transforms.

Because simply transforming doesn't leave the battlefield and doesn't create a new object, the effect "this card becomes a copy of Enduring Angel" doesn't go away either. So every time your life drops to 0, this card flips back and forth between the front and back faces of Ludevic/Olag, but whichever face it turns to, the effect "this card becomes a copy of Enduring Angel" is still there, so what you end up seeing is always an Enduring Angel. As long as your opponent can't deal with your Angel, you can stay locked between 0 and 3 life forever!

![Undying Angel](https://images.guildmagesforum.tw/posts/DFC-Copy/bb5620c5909c.webp)

While we are at it, let's extrapolate and see what happens when your life drops to 0 if the following cards were copies of Enduring Angel:

![Shapeshifters](https://images.guildmagesforum.tw/posts/DFC-Copy/9e7b7c0b284d.webp)

- 712.8d
  While a transforming double-faced permanent's front face is up, it has only the characteristics of its front face.

Based on this rule, no matter what becomes a copy of Enduring Angel, it can only see the characteristics of Enduring Angel as the front face.
[Mirror Image](https://cards.scryfall.io/large/front/5/b/5b3ffc69-f21b-410e-8993-8c1b4669fc19.jpg?1562302230) isn't a double-faced card, so it obviously can't perform the transform action (rule 712.9), and you lose the game.
[[[鏡廊擬妖]]](https://cards.scryfall.io/large/front/8/2/823ad188-bd56-476d-9853-bed90bfad582.jpg?1643588179) works on the same principle as Ludevic, Necrogenius, and the process can follow the one above exactly: it becomes an Angel that locks your life total forever.
[Glasspool Mimic](https://cards.scryfall.io/large/front/5/a/5adcb500-8c77-4925-8e2c-1243502827d1.jpg?1604243976) is also a double-faced card, but it is a **modal double-faced card** rather than a **transforming double-faced card**. A modal double-faced card cannot perform the transform action, so the result is the same as Mirror Image: you lose the game because it can't transform.

---

## Invasion of Amonkhet + Sheoldred

![Amonkhet Sheoldred](https://images.guildmagesforum.tw/posts/DFC-Copy/6bd328ad0b22.webp)

[Invasion of Amonkhet](https://cards.scryfall.io/large/front/9/8/981f091a-17f8-412e-9752-69070ebed4ea.jpg?1682715194) transforms into [Lazotep Convert](https://cards.scryfall.io/large/back/9/8/981f091a-17f8-412e-9752-69070ebed4ea.jpg?1682715194) and becomes a copy of [Sheoldred](https://cards.scryfall.io/large/front/b/f/bf2249e6-af74-4b88-8eb7-144ce8fa7f6b.jpg?1682203978). This scenario is similar to the previous one. The transform process on the battlefield is slightly special, but that doesn't affect how it is handled as a transforming double-faced card.

After Lazotep Convert becomes a copy of Sheoldred, it can likewise use Sheoldred's transform ability. The difference is that Sheoldred has you exile this card and then return it to the battlefield "transformed." Here 712.18 no longer applies, because when this card exiles itself it becomes a new object, and the effect "this card becomes a copy of Sheoldred" ends too. It doesn't remember that it was ever a copy of anyone. So does this card come back face up or face down? Let's review rule 712.14a:

- 712.14a
  If a spell or ability puts a transforming double-faced card onto the battlefield "transformed," it enters the battlefield with its back face up. If a player is instructed to put a card that isn't a transforming double-faced card onto the battlefield transformed, that card stays in its current zone.

Sheoldred asks for it to return to the battlefield "transformed," so whether the card is front or back face up when you activate this ability, it ends up returning to the battlefield back face up. Lazotep Convert can enter as a copy of any creature in a graveyard, so when it enters it will be a copy of the new target you choose.

![Amonkhet Sheoldred](https://images.guildmagesforum.tw/posts/DFC-Copy/eb23641a107d.webp)

---

## Mirror Image + Sheoldred

![Mirror Sheoldred](https://images.guildmagesforum.tw/posts/DFC-Copy/8fdc6cf9b050.webp)

Same idea of becoming a copy of [Sheoldred](https://cards.scryfall.io/large/front/b/f/bf2249e6-af74-4b88-8eb7-144ce8fa7f6b.jpg?1682203978), but what if it is copied by a non-transforming card like [Mirror Image](https://cards.scryfall.io/large/front/5/b/5b3ffc69-f21b-410e-8993-8c1b4669fc19.jpg?1562302230) and then performs the ability "exile this card and return it transformed"?

If it were only a copy of an in-place transforming creature like Graveyard Trespasser, nothing would happen because there is no back face to transform into (rule 712.9). But a process like Sheoldred's "exile this card and return it transformed" is a bit more complicated. First, Mirror Image can be exiled just fine, but when it tries to be put onto the battlefield transformed from exile, it runs into a problem, because it isn't a transforming double-faced card, and one of the rules above says:

- 712.14a
  If a spell or ability puts a transforming double-faced card onto the battlefield "transformed," it enters the battlefield with its back face up. If a player is instructed to put a card that isn't a transforming double-faced card onto the battlefield transformed, that card stays in its current zone.

The "current zone" Mirror Image was last in is exactly exile, so it stays there. In other words, if you let Mirror Image use Sheoldred's transform ability, it exiles itself and then... that's the end of the story...

![Mirror Sheoldred](https://images.guildmagesforum.tw/posts/DFC-Copy/aff43275a5f6.webp)

---

## Sheoldred + [[共魂利刃]] + Edgar, Charmed Groom

![Blade 1](https://images.guildmagesforum.tw/posts/DFC-Copy/b415f037b32b.webp)

When [Sheoldred](https://cards.scryfall.io/large/front/b/f/bf2249e6-af74-4b88-8eb7-144ce8fa7f6b.jpg?1682203978) equips [[[共魂利刃]]](https://cards.scryfall.io/large/front/2/7/277aeb73-4c7c-4132-b9f9-55181d57e75d.jpg?1675956948) and makes it a copy of [Edgar, Charmed Groom](https://cards.scryfall.io/large/front/6/3/63ba8eef-b834-4031-b0a1-0f8505d53813.jpg?1643594071), and then dies for any reason (for example, sacrificed to the legend rule), Edgar's death ability triggers: "When this creature dies, return it to the battlefield transformed under its owner's control." Since the rules text says "transformed," Sheoldred returns to the battlefield as its back face ([The True Scriptures](https://scryfall.com/card/mom/125/sheoldred-the-true-scriptures?back)). And because it is already a Saga as it enters, it meets the condition for a Saga to get a lore counter, so a lore counter is put on it and its chapter I ability is performed.

![Blade 1](https://images.guildmagesforum.tw/posts/DFC-Copy/0f997b3f6096.webp)

---

## Sheoldred + [[共魂利刃]] + [[遮物簾幕]]

![Blade 2](https://images.guildmagesforum.tw/posts/DFC-Copy/59bf2b1830c3.webp)

A big feature of [[共魂利刃]] is that it lets card A become a copy of card B like Clone does, and it can end the copy effect without the card leaving the battlefield and becoming a new object. This shows more clearly the underlying logic of copy effects acting on double-faced cards.

The scenario is as follows. Suppose [Sheoldred](https://cards.scryfall.io/large/front/b/f/bf2249e6-af74-4b88-8eb7-144ce8fa7f6b.jpg?1682203978) equips [[[共魂利刃]]](https://cards.scryfall.io/large/front/2/7/277aeb73-4c7c-4132-b9f9-55181d57e75d.jpg?1675956948) and makes it a copy of [[[遮物簾幕]]](https://cards.scryfall.io/large/front/6/1/612b2e6e-fe8d-49ad-b845-6fa7fa59ffd1.jpg?1643596119), then activates [[遮物簾幕]]'s "transform this card" ability. What state is Sheoldred in now? And what happens after the equipment is unattached?

First, what happens after activating the transform ability of [[遮物簾幕]]? Just like the Ludevic, Necrogenius + Enduring Angel case, Sheoldred is a transforming double-faced card and can perform the transform action, but the effect "this card becomes a copy of [[遮物簾幕]]" is still in force, so what you end up seeing is still a 0/4 [[遮物簾幕]].

But Sheoldred has indeed transformed to its back face, [The True Scriptures](https://scryfall.com/card/mom/125/sheoldred-the-true-scriptures?back); the copy effect just covers it so you can't tell. Now let's unattach [[共魂利刃]] to end the effect "this card becomes a copy of [[遮物簾幕]]." You will then see the card's original state, which is The True Scriptures. However, since the Saga never had a moment of entering the battlefield that it could check, it currently has no lore counters on it. Only at the beginning of your next precombat main phase will it get a lore counter and perform its chapter I ability.

![Blade 2](https://images.guildmagesforum.tw/posts/DFC-Copy/c4a7c00b8b63.webp)

---

## Clearing Up the Rules Definitions

The underlying logic of how transforming double-faced cards and copy effects work is actually not complicated, but it really tests your understanding of the basic rules definitions. The rules and scenarios covered in this article should handle most rules questions you might run into in actual play. As long as you understand the principles behind the scenarios here, you can break down even more complicated questions step by step from the underlying logic.

To keep the question contained this time, we only focused on how to tell which face is up. Other details such as Layers I will leave as a hole I'm digging here. I believe that someday I will fill it in and talk about exactly how Layers should be analyzed.
