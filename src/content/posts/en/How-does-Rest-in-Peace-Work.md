---

title: "How Does RIP Work?"
date: "2025-09-08 09:13:30"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/43bf383a5518-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/085cb3fab893-cover.jpg"
excerpt: "Please stop treating the graveyard as a second hand"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-does-Rest-in-Peace-Work/).

## Introduction

[Rest in Peace](https://scryfall.com/card/sld/96/rest-in-peace) (RIP from here on) has always been one of the most efficient graveyard hate cards, and it matters even more in an age where the graveyard is treated as an extra resource at every turn. This time, let's see how RIP affects the rules around zone changes.

![Introduction](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/5b32d6c3c34c.webp)


---

## RIP Card Breakdown


{% mtgpick "sld" 96 %}

> ● **[Rest in Peace](https://scryfall.com/card/sld/96/rest-in-peace)**:
> When Rest in Peace enters the battlefield, exile all cards from all graveyards.
> If a card or token would be put into a graveyard from anywhere, exile it instead.

**<font color="#FF0000">●If a card or token would be put into a graveyard from anywhere, exile it instead.</font>**

Seeing **instead** means this is a **replacement effect**: whenever any card or token would go to a graveyard, its destination is rewritten directly to exile, and it never passes through the graveyard at all. In principle, every question about RIP revolves around how to handle this replacement effect about zone changes.

The reason tokens are specifically emphasized is that tokens aren't cards. Although a token vanishes right after it goes to the graveyard, it can still trigger abilities that care about going to the graveyard. One famous example of something that stops cards but not tokens is [Dauthi Voidwalker](https://scryfall.com/card/tdc/176/dauthi-voidwalker), which can't stop [Not Dead After All](https://scryfall.com/card/woe/101/not-dead-after-all)'s [Wicked Role token](https://scryfall.com/card/twoe/17/wicked-cursed).

**<font color="#FF0000">●When Rest in Peace enters the battlefield, exile all cards from all graveyards. </font>**

Although RIP is a graveyard killer, its static ability only affects cards that would go to the graveyard while it is on the battlefield. The cards already in the graveyard before RIP enters are handled by this ETB. Since it's a triggered ability, of course it goes on the stack and can be responded to.

![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/a86f1234e0a8.webp)
> ● **[Tale's End](https://scryfall.com/card/m20/77/tales-end)**:
> Counter target activated ability, triggered ability, or legendary spell.

Suppose you respond to RIP's ETB and counter this graveyard-exiling triggered ability with Tale's End. Then you can save the cards currently in the graveyard, but because RIP is already on the battlefield when Tale's End resolves, Tale's End itself still gets exiled.

---

## RIP Rules Examples

![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/ddd5d8425f44.webp)
> ● **[Blood Artist](https://scryfall.com/card/inr/97/blood-artist)**:
> Whenever Blood Artist or another creature dies, target player loses 1 life and you gain 1 life.

The interaction between RIP and dies triggers is the one most often encountered in actual play and the one that most easily confuses newcomers. First, let's look at the definition of **dies**:

- 700.4. The term dies means "is put into a graveyard from the battlefield."

Dies is a defined term in MTG, specifically meaning the event of going from the battlefield to the graveyard. But RIP changes going to the graveyard into exile, which means no permanent can die while RIP is on the battlefield. **<font color="#FF0000">RIP turns dying into exile</font>**, and any ability that triggers on dying naturally won't trigger either, since the event of dying never happened at all.


{% folding blue :: A Side Note on "Dies" %}

Semantically, it might seem that only creatures (at most plus planeswalkers) can use the word dies, but in fact MTG's definition of dies doesn't restrict the permanent type. It's just that in the past the word dies was used almost only for creatures, and abilities that trigger when other types of permanents go to the graveyard were mostly written out in full.

But from the text of recent new cards, you can see Wizards has begun extending the word dies to noncreature types. Of course, the two wordings are equivalent under the rules, so this has no rules-level impact; it just may take some getting used to.

![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/8262e1bf13c9.webp)
> ● **[Marionette Apprentice](https://scryfall.com/card/mh3/100/marionette-apprentice)**:
> Whenever another creature or artifact you control is put into a graveyard from the battlefield, each opponent loses 1 life.
> ● **[Susurian Voidborn](https://scryfall.com/card/eoe/118/susurian-voidborn)**:
> Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life.

{% endfolding %}





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/c5fc10ecb997.webp)
> ● **[Seasoned Pyromancer](https://scryfall.com/card/2x2/123/seasoned-pyromancer)**:
> When Seasoned Pyromancer enters the battlefield, discard two cards, then draw two cards. For each nonland card discarded this way, create a 1/1 red Elemental creature token.

With RIP on the battlefield, Seasoned Pyromancer's ETB triggers the discard. Suppose I discard 2 nonland cards. Those cards will be exiled instead of going to the graveyard because of RIP, so can Seasoned Pyromancer still make 2 token creatures?

Discard is a keyword action, defined as follows:

- 701.9a To discard a card, move it from its owner's hand to that player's graveyard.

Discarding is an action, and the result of the action is a card moving from hand to graveyard. RIP's replacement effect changes the result of that action, but the discard event still happened. Seasoned Pyromancer knows it discarded 2 nonland cards, and makes 2 token creatures.

> Each of this question and the previous one should be easy to understand on its own, and for many players they're already basic rules taken for granted. But if you press further, the definitions of dies and discard look so similar, so why does RIP make dying no longer count as dying while discarding still counts as discarding? That may tie your brain in knots.
> Simply put, the definition of dies is itself special: it strictly refers to the event of "going from the battlefield to the graveyard," or you could say it's an abbreviation of that event. So when the content of the event changes, the condition check fails, and naturally it doesn't count as dying.
> Although this concept can be read from the Comprehensive Rules, the description really isn't intuitive and there's no extra entry to help explain it, so on RIP's card Q&A you can also find rulings clarifying these two concepts:
> ![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/eb0229dc2245.webp)





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/24623f1d4452.webp)
> ● **[Progenitus](https://scryfall.com/card/fdn/244/progenitus)**:
> If Progenitus would be put into a graveyard from anywhere, reveal Progenitus and shuffle it into its owner's library instead.

If Progenitus is discarded from hand while RIP is on the battlefield, is it exiled or shuffled back into the library?

Progenitus being shuffled back into the library instead of going to the graveyard from anywhere is also a replacement effect. When multiple replacement effects want to apply to the same object, the object's controller (or its owner if it has no controller) decides the order of application, which in this scenario effectively means deciding which effect applies.

The conclusion is that Progenitus's owner can decide whether it is exiled or shuffled back into the library.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/f331e24275af.webp)
> ● **[Say Its Name](https://scryfall.com/card/dsk/197/say-its-name)**:
> Mill three cards. Then you may return a creature or land card from your graveyard to your hand.
> ● **[Dredger's Insight](https://scryfall.com/card/dft/159/dredgers-insight)**:
> When this Aura enters, mill four cards. You may put an artifact, creature, or land card from among the milled cards into your hand.

Suppose the graveyard is currently empty and RIP is on the battlefield. Can using Say Its Name or Dredger's Insight add a card to your hand?

Say Its Name is hopeless, because the card works by first milling cards into the graveyard and then recovering a card from the graveyard. With RIP on the battlefield, there won't be any cards in the graveyard to recover.

Dredger's Insight is different. For this kind of effect that mills N cards and then recovers a card **from among the cards milled this way**, when it runs into a replacement effect that affects zone changes, as long as the zone is a public zone, the effect can track those cards.

- 701.13c An effect that refers to a milled card can find that card in the zone it moved to from the library, as long as that zone is a public zone.

So even if the 4 cards milled by Dredger's Insight are exiled directly without passing through the graveyard, it can still track those 4 cards and recover a qualifying card from them.

By the same logic, with RIP on the battlefield, if [Grist, the Hunger Tide](https://scryfall.com/card/dsc/220/grist-the-hunger-tide) uses its [+1] and the top card of the library is an Insect creature card, even though that card is exiled instead, Grist still knows it milled a creature card and continues the process, repeating it.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/eec4b5ab70e8.webp)
> ● **[Biolume Egg // Biolume Serpent](https://scryfall.com/card/inr/54/biolume-egg-biolume-serpent)**:
> When you sacrifice Biolume Egg, return it to the battlefield transformed under its owner's control at the beginning of the next end step.

If you sacrifice Biolume Egg while RIP is on the battlefield, can it still come back transformed at the end step? One key point to note first is that Biolume Egg's ability triggers **when you sacrifice it**, not when it dies, and RIP can't replace the fact that it was sacrificed.

So the question now is, after Biolume Egg is exiled instead of going to the graveyard, can its ability still pick it back up from exile? Here we need a rule related to zone changes:

- 400.7e When an object moves from one zone to another, if the new zone is a public zone, a triggered ability that triggers on that move (for example "When this Aura is put into a graveyard from the battlefield") can find the new object that the object became in the new zone.

Exile is a public zone, so Biolume Egg's ability can track the creature card that was its original trigger source and continue to carry out the effect, and you can return it transformed to the battlefield at the end step.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/c7efcadc106a.webp)
> ● **[Disenchant](https://scryfall.com/card/fdn/572/disenchant)**:
> Destroy target artifact or enchantment.

After using Disenchant to destroy RIP, where do Disenchant and RIP each end up, graveyard or exile?

Let's first look at Disenchant. When an instant or sorcery resolves, it follows all of its instructions and is then put into the graveyard. Because Disenchant already destroyed RIP while processing its effect, by the time it finishes resolving and is about to go to the graveyard, RIP is long gone from the battlefield, so Disenchant goes to the graveyard normally.

Now RIP, whose rules interpretation may not be as easy to understand. For a replacement effect about zone changes, **before** the zone change event happens, the game checks whether any replacement effect will modify the result of that event, and if so, applies it.

- 400.6. If an object would move from one zone to another, determine what event is moving the object. If the object would move to a public zone and its owner would be able to look at it in that zone, its owner looks at it to see if it has any abilities that would affect the move. If the object would move to the battlefield, each other player who would be able to look at it in that zone does so as well. Then any appropriate replacement effects, whether they come from that object or from elsewhere, are applied to that event. If any effects or rules try to modify the same object in several contradictory ways, the object's controller (or its owner if it has no controller) chooses which effect applies and what that effect does. (Note that multiple effects on the same object may conflict; for example, two simultaneous "destroy" effects.) Then the event moves the object.

Applied to this question, the time to check whether a replacement effect applies is **the moment before it is destroyed**, once RIP has already been determined to be destroyed by Disenchant, rather than looking at where to go only while it is being destroyed. Because RIP is still on the battlefield at that moment, the replacement effect of going to exile instead of the graveyard is still active, so RIP is exiled by its own effect.

**<font color="#FF0000">Conclusion: Disenchant goes to the graveyard, RIP is exiled</font>**

> Because this case is so famous and so counterintuitive, when you look up RIP in a card search engine like Scryfall, you can find this rules ruling below the card:
> ![RIP_QA](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/38f550ed271f.webp)





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/949ef236a002.webp)
> ● **[Planar Cleansing](https://scryfall.com/card/m20/33/planar-cleansing)**:
> Destroy all nonland permanents.

Now suppose that with RIP on the battlefield, you use Planar Cleansing to destroy all nonland permanents. Where do those permanents go?

In fact this is no different from the previous question, because the other permanents and RIP are destroyed at the same time, and their destinations are no different: all the permanents are exiled.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/e7aa78e0d2bd.webp)
> ● **[Fiery Temper](https://scryfall.com/card/inr/154/fiery-temper)**:
> Madness <font color="#FF0000">{R}</font> (If you discard this card, discard it into exile. When you do, cast it for its madness cost or put it into your graveyard.)

With RIP on the battlefield, when Fiery Temper is discarded, can it be cast with madness?

- 702.35a Madness represents two abilities. The first is a static ability that functions while the card is in a player's hand. The second is a triggered ability that functions when the first ability is applied. "Madness [cost]" means "If a player would discard this card, that player discards it, but exiles it instead of putting it into their graveyard" and "When this card is exiled this way, its owner may cast it by paying [cost] rather than paying its mana cost. If that player doesn't, they put this card into their graveyard."

When a madness card is discarded, it is exiled by its own replacement effect, which applies to the same event as RIP's replacement effect, and you can choose whether to apply madness's or RIP's exile effect. If you apply madness's exile, it triggers madness's second ability, "you may pay the madness cost to cast it." If you pay the madness cost, it is cast through madness just like during a normal discard. If you don't pay the madness cost, Fiery Temper tries to go to the graveyard, but because of RIP it is still exiled.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/763342e76045.webp)
> ● **[Wasteland Strangler](https://scryfall.com/card/bfz/102/wasteland-strangler)**:
> When Wasteland Strangler enters the battlefield, you may put a card you own from exile into its owner's graveyard. If you do, target creature gets -3/-3 until end of turn.

With RIP on the battlefield, can Wasteland Strangler use its ETB to give a target creature -3/-3?

The answer is yes. Although the card you try to put from exile into the graveyard ends up exiled anyway, it becomes a new object, and you can use this trick to make an [Bonecrusher Giant](https://scryfall.com/card/eld/115/bonecrusher-giant-stomp) on an adventure lose its on-an-adventure status.

- 406.7. If an object that's exiled would be exiled, it doesn't change zones, but it becomes a new object that has just been exiled.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/ea1bae9548ad.webp)
> ● **[Energy Field](https://scryfall.com/card/usg/73/energy-field)**:
> Prevent all damage that would be dealt to you by sources you don't control.
> When any card is put into your graveyard from anywhere, sacrifice Energy Field.

This is an interesting little combination with RIP: since no card enters the graveyard while RIP is on the battlefield, Energy Field can offer powerful protection.





![](https://images.guildmagesforum.tw/posts/How-does-Rest-in-Peace-Work/3231bfb12d8d.webp)
> ● **[Helm of Obedience](https://scryfall.com/card/all/121/helm-of-obedience)**:
> {X}, {T}: Target opponent mills a card, then repeats this process until a creature card or X cards are put into their graveyard this way, whichever comes first. If one or more creature cards are put into the graveyard this way, sacrifice Helm of Obedience and put one of those creatures onto the battlefield under your control. X can't be 0.

The Helm of Obedience combo is a classic pairing with RIP (swapping RIP for [Leyline of the Void](https://scryfall.com/card/dsk/106/leyline-of-the-void) is also a common configuration). Because of RIP, the opponent will never have a card milled into the graveyard, so as soon as Helm of Obedience is activated, the opponent's library is instantly emptied.

---

## Conclusion

RIP's graveyard-hating ability has been among the very best since the day it was born, and sometimes it has surprising effects against sacrifice decks that focus on dies triggers.

The older the format, the easier it is for the graveyard to become a player's second hand, but leaving aside the eternal formats, even in today's Standard, graveyard utilization is already shockingly high.

The current number-one overlord of the format, Vivi Cauldron, is already top-tier in its sheer board-development power, and on top of that it has very strong graveyard utilization, with so many resources that even control decks can't match it. And because there are so many graveyard use points, a graveyard hate card like [Ghost Vacuum](https://scryfall.com/card/dsk/248/ghost-vacuum) that removes one card at a time can honestly only partially restrain it, and it's still hard to truly suppress its graveyard resources. Almost all the paper Standard decks I'm currently playing splash white, and RIP is one of my motivations for actively mixing in white. (Against Vivi Cauldron, RIP together with [High Noon](https://scryfall.com/card/otj/15/high-noon) provides a wonderful amount of restraint.)
