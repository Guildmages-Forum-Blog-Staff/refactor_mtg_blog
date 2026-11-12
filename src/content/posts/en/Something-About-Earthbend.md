---

title: "A Few Things About Earthbend"
date: "2025-12-11 11:31:33"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/Something-About-Earthbend/8c774cc77db5-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Something-About-Earthbend/8c774cc77db5-cover.jpg"
excerpt: "There is no doubt that Earthbend is the year's most complex mechanic"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Something-About-Earthbend/).

## Introduction

[Earthbend](https://guildmagesforum.tw/TLA-Mechanism/#%E9%81%8B%E5%9C%9F%EF%BC%88Earthbend%EF%BC%89) is clearly one of the very powerful new mechanics in Avatar: The Last Airbender, and [Badgermole Cub](https://scryfall.com/card/tla/167/badgermole-cub) in particular has been the center of attention since the preview season. In proportion to its power, Earthbend's complexity is also quite high, so much so that even the official mechanics article, rarely, got it wrong. It is not an exaggeration to call it the most complex new mechanic in 2025 Standard. Today, let's see just how many problems Earthbend can cause!

![Introduction](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/74656a576d36.webp)



---

## Earthbend Rules Overview

The official rule text of Earthbend is as follows:

- 701.66a "Earthbend N" means "Target land you control becomes a 0/0 creature with haste that's still a land. Put N +1/+1 counters on it. When that land dies or is put into exile, return it to the battlefield tapped under your control."

![Earthbend](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/bf9187a4d346.webp)

Honestly, it isn't really hard to remember, since effects that turn lands into creatures are not uncommon. But a mechanic that touches multiple [Layers](https://guildmagesforum.tw/Layer/) at once always has the potential to become a rules bomb in play.

In actual play, though, most rules questions involving Earthbend are caused by the last sentence, **<font color="#FF0000">"When that land dies or is put into exile, return it to the battlefield tapped under your control."</font>** About this effect, let me first summarize two key points, whose underlying principles will be explained in more detail in the examples that follow.

### 1. Returning when it dies or is exiled is a triggered ability, and it is not an ability of the land itself

In MTG terminology, whenever you see the word **<font color="#FF0000">"When"</font>**, it means a triggered ability, one that goes on the stack and can be responded to or countered.

In addition, this is an effect that applies to the land creature and creates a delayed triggered ability, not an ability that the earthbent land has, so making the earthbent land creature lose all abilities cannot stop it from returning.

### 2. No matter whose control it dies under, control goes back to the player who originally earthbent

Who gets the earthbent land creature back on their battlefield after it dies or is exiled was the biggest rules controversy of Earthbend's early days, and the official introduction was partly to blame. The conclusion is simply this: whichever player originally earthbent that land creature gets control of it when it returns.

As for a land that has been earthbent by multiple players, that is another, more advanced question.



---

## Earthbend Rules Examples

![1](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/3fd7a66ceca6.webp)
> ● **[Rest in Peace](https://scryfall.com/card/big/4/rest-in-peace):** 
> If a card or token would be put into a graveyard from anywhere, exile it instead.
> ● **[Ghost Vacuum](https://scryfall.com/card/dsk/248/ghost-vacuum):** 
> {T}: Exile target card from a graveyard.

Can Rest in Peace or Ghost Vacuum stop the effect that returns an earthbent land tapped when it dies to [Murder](https://scryfall.com/card/j25/467/murder)?

First, Rest in Peace absolutely can't. Rest in Peace's "exile instead of dying" is a replacement effect, but Earthbend's rescue scope was always "dies or is exiled", so if you change a destroy effect into exile, it still doesn't escape Earthbend's rescue scope, and the land will be returned tapped to the battlefield because it went to the exile zone.

As mentioned above, Earthbend's return is a **<font color="#FF0000">triggered ability</font>** that can be responded to, so when an earthbent land dies, the full sequence is:
Land creature is destroyed → land card goes to the graveyard → triggered ability triggers → triggered ability resolves, and the land returns to the battlefield tapped

So if you can make that land card disappear from the graveyard while it is still there and before the triggered ability resolves, you can stop Earthbend from pulling it back, and Ghost Vacuum's instant-speed graveyard exile does exactly that.

Why can't Rest in Peace stop it, when it also ends up in exile, while Ghost Vacuum can? Simply put, this ability triggers in the graveyard, and on resolution the object must still be in the graveyard without having changed zones, otherwise the ability can't track the object. The full rule is as follows:

- 603.6. Trigger events that involve objects changing zones are called "zone-change triggers." Many abilities with zone-change triggers attempt to do something to that object after it changes zones. During resolution, such an ability checks for the object in the zone that it moved to. If the object isn't there, the part of the ability that attempted to affect the object has no effect. The ability might not find the object because the object never entered the specified zone, because it left the zone before the ability resolved, or because it is in a zone that is hidden from a player, such as a library or an opponent's hand. (This rule applies even if the object leaves the zone and returns again before the ability resolves.) The most common zone-change triggers are enters-the-battlefield triggers and leaves-the-battlefield triggers.




{% mtgpick "tla" 94 %}
> ● **[Day of Black Sun](https://scryfall.com/card/tla/94/day-of-black-sun):** 
> Each creature with mana value X or less loses all abilities until end of turn. Destroy those creatures.

If you wipe out earthbent land creatures with Day of Black Sun, can those lands come back? This is a question that came up constantly in TLA Limited.

When we talk about an object gaining or losing abilities, we are actually talking about the ability-adding and ability-removing effects of [Layer 6](https://guildmagesforum.tw/Layer/#%E5%B1%A46%EF%BC%9A%E6%B7%BB%E5%8A%A0%E3%80%81%E7%A7%BB%E9%99%A4%E7%95%B0%E8%83%BD%E7%9A%84%E6%95%88%E6%87%89). But in Layer 6, the only ability Earthbend gives is haste; the part about returning when it dies or is exiled is an effect that applies to the land, not an ability of the land itself.

| Layer | Earthbent land creature | Day of Black Sun |
| :-: | :-: | :-: |
| 4 | Additionally a creature type |  |
| 6 | Has haste | Loses all abilities |
| 7B | Becomes 0/0 |  |
| 7C | +1/+1 counters |  |
| Other | Returns when it dies or is exiled |  |

The conclusion: **<font color="#FF0000">losing abilities cannot stop an earthbent land creature from returning</font>**.

> For a case with a similar principle, see [Legwen + Dress Down](https://guildmagesforum.tw/Layer/#%E5%B7%A7%E6%89%8B%E7%AB%8A%E7%8C%B4%E5%8B%92%E6%A0%BC%E6%96%87-%E8%A4%AA%E9%99%A4%E6%AD%A6%E8%A3%9D).




![2](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/d49db0fef618.webp)
> ● **[Ultima](https://scryfall.com/card/fin/38/ultima):** 
> Destroy all artifacts and creatures. End the turn.
> ● **[Deadly Cover-Up](https://scryfall.com/card/mkm/83/deadly-cover-up):** 
> As an additional cost to cast this spell, you may collect evidence 6.
> Destroy all creatures. If evidence was collected, exile a card from an opponent's graveyard. Then search that player's graveyard, hand, and library for any number of cards with that name and exile them. That player shuffles, then draws a card for each card exiled from their hand this way.

So is a board wipe truly powerless against Earthbend? Not quite; there are some removal effects that can cure Earthbend at the root.

After wiping the board, Ultima immediately ends the turn, which means the whole stack is cleared, and abilities waiting to be put on the stack won't go on the stack, so Earthbend's return triggered ability simply vanishes.

> Further reading: [What Does "End the Turn" Mean?](https://guildmagesforum.tw/What-does-End-this-Turn-Mean/)

As for Deadly Cover-Up with evidence collected, after the wipe it exiles a card from the opponent's graveyard. This is one complete action with no response point in between. Suppose the opponent earthbent a basic Forest. After Deadly Cover-Up wipes the board, you can choose to exile that basic Forest from the opponent's graveyard, and exile all cards with the same name from their graveyard, hand, and library. Only after Deadly Cover-Up finishes resolving does Earthbend get its turn. Since the basic Forest going to the graveyard is what triggered Earthbend, Earthbend will try to find that basic Forest in the graveyard, but it is no longer there, so Earthbend can't rescue it.




![3](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/6f43ea108992.webp)
> ● **[Stomping Ground](https://scryfall.com/card/eoe/258/stomping-ground):** 
> Land - Mountain Forest
> ● **[Diligent Zookeeper](https://scryfall.com/card/tla/171/diligent-zookeeper):** 
> Each non-Human creature you control gets +1/+1 for each creature type it has, to a maximum of 10 creature types per creature.

Suppose I have a Stomping Ground (the red-green shockland) that became a creature through Earthbend. Would it get +2/+2 from the Zookeeper because it has the two types Mountain and Forest?

The answer is no. Although Earthbend gives the creature card type, it does not give any creature subtype <font color="#A6A6A6">(effects like this have often given types such as Elemental, so giving no creature type at all is indeed quite rare)</font>. Mountain and Forest are land types, not creature types, so the Zookeeper provides no bonus.




![4](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/c972b65a0003.webp)
> ● **[Ba Sing Se](https://scryfall.com/card/tla/266/ba-sing-se):** 
> {2}{G}, {T}: Earthbend 2. Activate only as a sorcery.
> ● **[Restless Cottage](https://scryfall.com/card/woe/258/restless-cottage):**
> {2}{B}{G}: Restless Cottage becomes a 4/4 black and green Horror creature until end of turn. It's still a land.
> Whenever Restless Cottage attacks, create a Food token and exile up to one target card from a graveyard.

The manlands from WOE and LCI both pair nicely with Earthbend, because these lands trigger their abilities just by attacking, even if they didn't become creatures through their own activated abilities.

Suppose Restless Cottage is currently earthbent 2 and is a 2/2 creature. When it attacks, it triggers its graveyard-exile and Food-making ability. If you want to deal more damage, you can also activate Restless Cottage's own animation ability at instant speed, changing its base size from 0/0 to 4/4, which with the +1/+1 counters makes it a 6/6 creature.

| Layer | Earthbend 2 | Restless Cottage |
| :-: | :-: | :-: |
| 4 | Gains creature type | Gains creature - Horror type |
| 5 |  | Becomes black and green |
| 6 | Has haste |  |
| 7B | Becomes 0/0 | Becomes 4/4 |
| 7C | 2 +1/+1 counters |  |




![5](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/e57aa77ca7f8.webp)
> ● **[Ba Sing Se](https://scryfall.com/card/tla/266/ba-sing-se):** 
> {2}{G}, {T}: Earthbend 2. Activate only as a sorcery.
> ● **[Soulstone Sanctuary](https://scryfall.com/card/fdn/133/soulstone-sanctuary):** 
> {4}: This land becomes a 3/3 creature with vigilance and all creature types until end of turn. It's still a land.

From the previous example, we can see that Earthbend's "becomes 0/0" and a manland's own "becomes N/N" are both effects that set power and toughness in [Layer 7B](https://guildmagesforum.tw/Layer/#%E5%B1%A47b%EF%BC%9A%E8%A8%AD%E5%AE%9A%E5%8A%9B%E9%87%8F%E3%80%81%E9%98%B2%E7%A6%A6%E5%8A%9B%E7%82%BA%E6%8C%87%E5%AE%9A%E6%95%B8%E5%80%BC). When multiple effects try to modify base power and toughness in 7B at the same time, you compare the two effects' [timestamps](https://guildmagesforum.tw/What-is-Time-Stamp/); put plainly, the later one overrides the earlier one.

Suppose a Soulstone Sanctuary has already activated its own ability and is a 3/3 vigilance creature. If you then Earthbend 2 it, it instead becomes a 0/0 creature with two +1/+1 counters. Of course, you can also activate Soulstone Sanctuary's animation again, and then it is a 3/3 with two +1/+1 counters, a 5/5 haste vigilance creature.

| Layer | Earthbend 2 | Soulstone Sanctuary |
| :-: | :-: | :-: |
| 4 | Gains creature type | Gains creature - all creature types |
| 6 | Has haste | Has vigilance |
| 7B | Becomes 0/0 | Becomes 3/3 |
| 7C | 2 +1/+1 counters |  |





{% mtgpick "xln" 55 %}
> ● **[Entrancing Melody](https://scryfall.com/card/xln/55/entrancing-melody):** 
> Gain control of target creature with mana value X.

Now to the main event. Player A earthbends a land they control, and later player B gains control of that land creature. When that land creature dies, whose battlefield does it return to? Let's first review how the CR words Earthbend:

- 701.66a "Earthbend N" means "Target land you control becomes a 0/0 creature with haste that's still a land. Put N +1/+1 counters on it. When that land dies or is put into exile, return it to the battlefield tapped under **<font color="#FF0000">your</font>** control."

So the key here is how exactly **"you"** is defined. First, I want to stress again that Earthbend's return effect is a **<font color="#FF0000">delayed triggered ability</font>**. This matters a great deal, because being in the category of delayed triggered abilities directly determines which rule applies. Let's first see how the rules define **"you"**:

- 109.5. The words "you" and "your" on an object refer to the object's controller, its would-be controller (if a player is attempting to cast it or activate it), or its owner (if it has no controller). For a static ability, the controller is the current controller of the object it's on. For an activated ability, the controller is the player who activated the ability. For a triggered ability, the controller is the controller of the object when it triggered, **<font color="#FF0000">unless it's a delayed triggered ability. To determine the controller of a delayed triggered ability, see rules 603.7d-f</font>**.
- 113.7. The source of an ability is the object that generated it. The source of an activated ability on the stack is the object whose ability was activated. The source of a triggered ability on the stack **<font color="#FF0000">(other than a delayed triggered ability)</font>** or one that has triggered and is waiting to be put on the stack is the object whose ability triggered. **<font color="#FF0000">To determine the source of a delayed triggered ability, see rules 603.7d-f</font>**.

You can see that in most cases the definition of **"you"** is very simple, but when delayed triggered abilities are involved, things get a bit more complicated and we need the section that specifically defines delayed triggered abilities. That section defines the controller of such an ability as follows:

- 603.7d A delayed triggered ability that's created by a spell has that spell as its source. Its controller is the player who controlled the spell as it resolved.
- 603.7e If an activated or triggered ability creates a delayed triggered ability, the source of the delayed triggered ability is the same as the source of the other ability. The controller of the delayed triggered ability is the player who controlled the other ability as it resolved.

In other words, the controller of Earthbend's delayed triggered ability is player A, who originally performed the Earthbend ability. Whether the land later dies under A's or B's control, it returns to A's battlefield.


{% folding blue :: About the Error in the Initial Version of the Official Mechanics Article %}

In fact, on the question of whose battlefield an earthbent land returns to after dying following a control change, even the official [TLA mechanics article](https://magic.wizards.com/en/news/feature/avatar-the-last-airbender-mechanics) got it wrong at first. The original wording on the official site was: it returns to the battlefield of whoever controlled it when it died.

![Initial official rules text](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/5004a92df7d2.webp)

Luckily, the problem was spotted quickly. The author also posted a [mechanics clarification announcement](https://x.com/fireshoes/status/1991191535807812028?t=nRwKLXOcJJgpTk7I_d5uSQ&s=19) and immediately corrected the article, and the current article describes the correct rules.

{% endfolding %}

From this, we can derive an advanced question. Suppose player A earthbends a land, then player B gains control of that land, and B then also earthbends it. When this land dies, whose battlefield does it return to? 

In fact, when this land creature dies, the triggered abilities controlled by A and B both go on the stack, so the key question is whose turn it is. When multiple triggered abilities trigger at the same time, the order of putting them on the stack is: the active player's go on the stack first, then the nonactive player's, which means the nonactive player's abilities resolve first. So if it is currently A's turn, A's ability goes on the stack first and B's goes on after, B's ability resolves first, and so the land ends up entering the battlefield under B's control.




{% mtgpick "rvr" 55 %}
> ● **[Quasiduplicate](https://scryfall.com/card/rvr/55/quasiduplicate):** 
> Create a token that's a copy of target creature you control.

After a land has been earthbent into a creature, if you use Quasiduplicate to create a token copy of that land creature, will that token be a creature?

This question is really the same as copying an ordinary manland or Vehicle. A copy effect only sees copiable values at Layer 1, while Earthbend's type, ability, and power/toughness changes are all applied at higher Layers and are not something a copy effect can copy, so what you create is a token copy of the plain original land.




![6](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/3771aa530836.webp)
> ● **[Badgermole Cub](https://scryfall.com/card/tla/167/badgermole-cub):** 
> When this creature enters, earthbend 1.
> Whenever you tap a creature for mana, add an additional {G}.
> ● **[Cavern of Souls](https://scryfall.com/card/lci/269/cavern-of-souls):** 
> As Cavern of Souls enters, choose a creature type.
> {T}: Add one mana of any color. Spend this mana only to cast a creature spell of the chosen type, and that spell can't be countered.

Suppose Cavern of Souls named Human as it entered, and was later earthbent into a creature by Badgermole Cub. If Cavern of Souls then taps for one black mana, does the extra green mana from Badgermole Cub also carry the "that spell can't be countered" effect when used to cast a Human spell?

Unfortunately the answer is no. Ultimately, the producer of that green mana isn't Cavern of Souls at all; it's that when Cavern of Souls activated its own mana ability, it triggered Badgermole Cub's triggered mana ability.

- 605.1b A triggered ability is a mana ability if it meets all of the following criteria: it doesn't require a target (see rule 115.6), it triggers from the resolution of an activated mana ability (see rule 605.1a) or from mana being added to a player's mana pool, and it could add mana to a player's mana pool when it resolves.

But if you replace Badgermole Cub with something like [Nyxbloom Ancient](https://scryfall.com/card/thb/190/nyxbloom-ancient), which uses a replacement effect to multiply mana produced, then all N black mana would carry the protection against counterspells for Human spells.




![7](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/bc9f3af879d5.webp)
> ● **[Ba Sing Se](https://scryfall.com/card/tla/266/ba-sing-se):** 
> {2}{G}, {T}: Earthbend 2. Activate only as a sorcery.
> ● **[Aclazotz, Deepest Betrayal](https://scryfall.com/card/lci/88/aclazotz-deepest-betrayal-temple-of-the-dead) (the Bat God, for short below):** 
> When Aclazotz dies, return it to the battlefield tapped and transformed under its owner's control.
> ● **[Temple of the Dead](https://scryfall.com/card/lci/88/aclazotz-deepest-betrayal-temple-of-the-dead?back):** 
> (Transformed from Aclazotz, Deepest Betrayal.)
> {2}{B}, {T}: Transform Temple of the Dead. Activate only if a player has one or fewer cards in hand and only as a sorcery.

Suppose there is a Temple of the Dead (transformed from the Bat God) that became a land creature through Earthbend, and then Temple of the Dead dies. That triggers Earthbend's return-tapped effect, but when a permanent is put onto the battlefield, unless the effect specifically says it enters **transformed**, it always enters front face up. So when the earthbent Temple of the Dead dies, what returns is the front face, the Bat God.

Let's make the situation more complicated. This time, the Temple of the Dead that was already earthbent first transforms back into the front-face Bat God using its own ability <font color="#A6A6A6">(and it has the +1/+1 counters Earthbend gave too, how nice)</font>, and then this Bat God is destroyed. Does the Bat God return back-face up (as Temple of the Dead) due to its own ability, or front-face up directly due to Earthbend? The answer is that you choose, because both abilities are triggered abilities with the same trigger condition, and you decide the order in which they go on the stack.




![8](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/84cd7872052a.webp)
> ● **[Toph, the First Metalbender](https://scryfall.com/card/tla/247/toph-the-first-metalbender):** 
> Nontoken artifacts you control are lands in addition to their other types. (They don't gain the ability to {T} for mana.)
> At the beginning of your end step, earthbend 2.
> ● **[Caged Sun](https://scryfall.com/card/cm2/178/caged-sun):** 
> As Caged Sun enters, choose a color.
> Creatures you control of the chosen color get +1/+1.
> Whenever a land's ability causes you to add one or more mana of the chosen color, add an additional one mana of that color.

Honestly, this question and the next one no longer have much to do with Earthbend; they are just questions raised by an Earthbending Toph. But this one is really interesting, so I'll share it anyway.

Suppose I control both Toph, the First Metalbender and Caged Sun (naming green), and then tap a Forest for green mana. What happens?

First, Caged Sun's effect is a triggered mana ability, which triggers because you activated the Forest's mana ability, and because it is itself a mana ability, it takes effect directly without using the stack.

- 605.1b A triggered ability is a mana ability if it meets all of the following criteria: it doesn't require a target (see rule 115.6), it triggers from the resolution of an activated mana ability (see rule 605.1a) or from mana being added to a player's mana pool, and it could add mana to a player's mana pool when it resolves.

But after the first additional green mana is produced, the fun begins: Caged Sun is now a land card, and the event of Caged Sun producing an additional green mana through its triggered mana ability once again satisfies the trigger condition of its own mana ability.

Congratulations! You have successfully made an infinite mana combo. There are just a few teeny little problems: this is an uncontrollable infinite loop, Caged Sun will keep triggering new mana abilities off its own mana ability with no way to stop, and so the game ends in a draw.

- 104.4b If a game that's not using the limited range of influence option (including a two-player game) somehow enters a "loop" of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw. Loops that contain an optional action don't result in a draw.

The most impressive part of this infinite loop is that it doesn't use the stack at all, and no player ever gets priority, so there is naturally no chance to cast spells, and not even a mana ability with a sacrifice-a-creature activation cost like [Phyrexian Altar](https://scryfall.com/card/2x2/311/phyrexian-altar) can interrupt it. Although mana abilities can be activated at many special times, they are not unrestricted; the timing is just more permissive, and in this scenario there is no moment at which you can activate a mana ability.

- 605.3a A player may activate an activated mana ability whenever they have priority, whenever they are casting a spell or activating an ability that requires a mana payment, or whenever a rule or effect asks for a mana payment, even in the middle of casting or resolving a spell or activating or resolving an ability.




![9](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/fd70fd93b37c.webp)
> ● **[Ygra, Eater of All](https://scryfall.com/card/blb/241/ygra-eater-of-all):** 
> Other creatures are Food artifacts in addition to their other types and have "{2}, {T}, Sacrifice this permanent: You gain 3 life."
> ● **[Toph, the First Metalbender](https://scryfall.com/card/tla/247/toph-the-first-metalbender):** 
> Nontoken artifacts you control are lands in addition to their other types. (They don't gain the ability to {T} for mana.)
> ● **[Magus of the Moon](https://scryfall.com/card/tsr/175/magus-of-the-moon):** 
> Nonbasic lands are Mountains.

When Ygra, Toph, and Magus of the Moon are all on the battlefield, what do the creatures and artifacts on the battlefield become? Does the order they entered affect the result? 

Let's first analyze how the effects of these three work:

| Layer | Ygra | Toph | Magus of the Moon |
| :-: | :-: | :-: | :-: |
| 4 | Creatures are additionally artifact - Food | Artifacts are additionally lands | Nonbasic lands are Mountains |
| 6 | Have an ability to sacrifice itself to gain life |  |  |

You can see all three act in the same Layer, Layer 4, the type-changing effects. Normally, when multiple effects act in the same Layer, you compare their [timestamps](https://guildmagesforum.tw/What-is-Time-Stamp/) to determine the order they apply, but this one is slightly more complicated, because applying one effect changes what another effect applies to. That means there are [dependencies](https://guildmagesforum.tw/What-is-Dependency/) among these effects, which forcibly determine their order of application.

- 613.8. Within a layer or sublayer, determining which order effects are applied in is sometimes done using a dependency system. If an effect is dependent on another, it will override the timestamp system.
- 613.8a An effect is said to "depend on" another if (a) it's applied in the same layer (and sublayer, if appropriate) as the other effect; (b) applying the other would change the text or the existence of the first effect, what it applies to, or what it does to any of the things it applies to; and (c) neither effect is from a characteristic-defining ability or both effects are from characteristic-defining abilities. Otherwise, the effects are independent of each other.

In short, applying Ygra's "creatures are additionally artifacts" effect first changes what Toph's "artifacts are additionally lands" effect applies to, so the two form a dependency. No matter which of Ygra and Toph has the earlier timestamp, the order is forcibly set to: first apply Ygra's "creatures are additionally artifacts" and then Toph's "artifacts are additionally lands", and the same goes for the later interaction between Toph and Magus of the Moon.

In the end, apart from Ygra, which escapes because it doesn't change its own types, every other creature and artifact you control additionally gains the types artifact, land - Food, and Mountain. Because of Magus of the Moon making them Mountains, they lose all their original abilities and gain the Mountain's "{T}: Add {R}", and even Toph and Magus of the Moon are no exception. In addition... when Ygra gave the Food type, the "{2}, {T}, Sacrifice this permanent: You gain 3 life." ability granted along with it is still there... 

![Final](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/3f1a09d4a273.webp)

But this is not an ability that the Food type automatically grants; don't confuse it with the basic land types granting the ability to tap for the corresponding color of mana. The Food type itself has no special rules meaning on the battlefield; only when an effect has you create a Food token does the word Food carry the following definition:

- 111.10. Some effects instruct a player to create a predefined token. These effects use the definitions below to determine the characteristics the token is created with. The effect that creates a predefined token may also modify or add to the predefined characteristics.
- 111.10b A Food token is a colorless Food artifact token with "{2}, {T}, Sacrifice this token: You gain 3 life."

So why is the sacrifice-to-gain-life activated ability the only one kept? The reason is that Ygra's effect affects both Layer 4 and Layer 6 at once, and when an effect affects multiple layers, once it starts applying in one layer, the other layers it affects are also locked in to apply, even if the effect is removed by Magus of the Moon during the Layer process.

- 613.6 If an effect should be applied in different layers and/or sublayers, the parts of the effect each apply in their appropriate ones. If an effect starts to apply in one layer and/or sublayer, it will continue to be applied to the same set of objects in other layers and/or sublayers, even if the ability generating the effect is removed during this process.

> This question can really be seen as an upgraded-complexity version of [Blood Moon + Ashaya, Soul of the Wild](https://guildmagesforum.tw/Layer/#%E8%85%A5%E7%B4%85%E4%B9%8B%E6%9C%88-%E8%8D%92%E9%87%8E%E4%B9%8B%E9%AD%82%E8%89%BE%E8%8E%8E%E5%A9%AD): the last part, handling the Blood Moon-style effect, is exactly the same logic, just with more components involved in the rules interaction up front, and Ygra contributes an extra branch about Food. This article only briefly presents the final result; for more on how Layers work, see the article [Layers: Interaction of Continuous Effects](https://guildmagesforum.tw/Layer/).




---

## Conclusion

Earthbend is a very powerful mechanic, and can be seen as a super-powered version of [Awaken](https://scryfall.com/search?q=oracle%3AAwaken+%28game%3Apaper%29+set%3Abfz+prefer%3Abest&order=set&as=grid). You can tell the designers made earthbent lands come back when they are removed in order to fix Awaken's old pain point of lands getting blown up, especially since Earthbend is designed to be used in the early to mid game, when losing a land to removal might be no different from losing outright. To keep the new mechanic from becoming a joke, they added this protection.

The intent is understandable, but adding it gave Earthbend all sorts of combo potential. For example, in Standard you can already play [Beifong's Bounty Hunters](https://scryfall.com/card/tla/209/beifongs-bounty-hunters) + [Bloodghast](https://scryfall.com/card/dft/77/bloodghast) + [Umbral Collar Zealot](https://scryfall.com/card/eoe/123/umbral-collar-zealot), paired with a [[痛血沙漠]] or another infinite-loop finisher.

![Combo](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/b7efca71ddaf.webp)

In addition, since lands come back when they die, [Urza's Saga](https://scryfall.com/card/mh2/259/urzas-saga) and all kinds of lands that normally sacrifice themselves for one-time use can also be played in many fancy ways.

![Land](https://images.guildmagesforum.tw/posts/Something-About-Earthbend/9eaa0f19d2bd.webp)

My overall evaluation of Earthbend is that it is a very fun and practical mechanic, but also a very risky one, easily broken by the slightest design slip. Still, as for [Badgermole Cub](https://scryfall.com/card/tla/167/badgermole-cub), which is the most talked about right now, I actually think the main problem isn't Earthbend. After all, printing a nonlegendary [Kinnan, Bonder Prodigy](https://scryfall.com/card/iko/192/kinnan-bonder-prodigy) that comes with a built-in mana dork, in an environment that already has [Llanowar Elves](https://scryfall.com/card/fdn/227/llanowar-elves), is just too crazy no matter how you look at it.

{% mtgpick "iko" 192 %}

Although, judging from this World Championship and the past week's meta statistics, the usage rate and win rate of [Badgermole Cub](https://scryfall.com/card/tla/167/badgermole-cub) decks have begun to show signs of being suppressed, and perhaps the current Standard environment really does have the ability to digest this guy, I still think the adaptation cost is extremely high. After all, when decks with extremely unfair, blowout starts become the mainstream of the environment, the other decks inevitably have to develop toward extremes too: either extremely fast, extremely controlling, or with a game plan that has a special mode ordinary decks can hardly interact with. When fair midrange disappears and the environment's mainstream is all extreme decks, it is usually the last struggle before the banned list comes out.

Recent Standard is still in a turbulent phase of constant surprises, and how the impact TLA brings will finally converge is hard to predict for now. But when unfair decks dominate a Standard environment, history so far can be said to be one explosion after another. I still hope Wizards will, when designing new cards, give a little thought to how much room for effective interaction there is against this proactive plan.
