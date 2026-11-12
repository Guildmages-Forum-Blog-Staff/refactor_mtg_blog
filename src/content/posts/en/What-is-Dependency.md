---
title: "What Is Dependency?"
date: "2024-05-09 09:25:22"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
cover: "https://images.guildmagesforum.tw/posts/What-is-Dependency/67bc12163786-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/What-is-Dependency/67bc12163786-cover.jpg"
excerpt: "Blood Moon + Urborg, Tomb of Yawgmoth: how do you handle it?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../What-is-Dependency/).

## Before We Start

Welcome to the fourth article in the [Layer](https://mtg.fandom.com/wiki/Layer?so=search) series. This time the star is dependency.

Before we officially start on the rules, a bit of mental preparation: this will be the hardest article in the Layer series. Although dependency is only one of the many rules in the layer system and only applies in a few situations, the way it works is extremely complicated, and introducing dependency is even harder than introducing the layer system itself.

When interpreting rules about dependency, a special situation easily arises: you feel like you have almost figured it out intuitively, but when you really pick the detailed rules apart, your brain ties itself in knots. So for the example scenarios in this article, if you truly cannot understand how the rules work, it is fine to just remember the results of the classic cases, or some loose but easy-to-remember simple explanations. <font color="#AAAAAA">(Anyway, if you really run into a problem in a tournament, just call a judge.)</font>

{% folding red :: Previous Articles %}

- [Copiable Values](https://guildmagesforum.tw/en/What-is-Copiable-Value/)
- [Characteristic-Defining Abilities](https://guildmagesforum.tw/en/Characteristic-Defining-Ability/)
- [Timestamps](https://guildmagesforum.tw/en/What-is-Time-Stamp/)

{% endfolding %}

![Cover](https://images.guildmagesforum.tw/posts/What-is-Dependency/ab02fadbb8c0.webp)

---

## What Is Dependency?

### Timestamps and Dependency

Remember that in the last article, when we introduced timestamps, we briefly went over the definition of each layer and the conditions under which timestamps apply:

{% folding red :: Definitions of Each Layer %}

- Layer 1: Rules and effects that affect [copiable values](https://guildmagesforum.tw/en/What-is-Copiable-Value/) are applied.
  - Layer 1a: Copy effects are applied.
  - Layer 1b: Rules about the characteristics of face-down spells and permanents are applied.
- Layer 2: Control-changing effects are applied.
- Layer 3: Text-changing effects are applied.
- Layer 4: Type-changing effects are applied. This includes effects that change an object's card type, subtype, or supertype.
- Layer 5: Color-changing effects are applied.
- Layer 6: Effects that add abilities, keyword counters, effects that remove abilities, and effects that say an object can't have an ability are applied.
- Layer 7: Effects that change power and/or toughness are applied.
  - Layer 7a: Effects from [characteristic-defining abilities](https://guildmagesforum.tw/en/Characteristic-Defining-Ability/) that define power and/or toughness are applied.
  - Layer 7b: Effects that set power and/or toughness to a specific number or value are applied. Effects that refer to the base power and/or toughness of a creature apply in this layer.
  - Layer 7c: Effects and counters that modify power and/or toughness (but don't set power and/or toughness to a specific number or value) are applied.
  - Layer 7d: Effects that switch a creature's power and toughness are applied.

{% endfolding %}

- 613.7.
  Within a layer or sublayer, determining which order effects are applied in is usually done using a timestamp system. An effect with an earlier timestamp is applied before an effect with a later timestamp.

However, this rule actually has a caveat: when certain conditions are met, even if we are dealing with the same layer, the effects are not resolved by timestamp but by dependency. So what exactly is dependency? And how do we decide when to use which rule? That is the topic of this article.

- 613.8.
  Within a layer or sublayer, sometimes the true order of effects is determined using a dependency system. If a dependency exists, it will override the timestamp system.

### Why We Need Dependency

First, let's look at the following situation. Suppose I already control [Kwende, Pride of Femeref](https://scryfall.com/card/dom/25/kwende-pride-of-femeref), and then I cast a [Maul of the Skyclaves](https://scryfall.com/card/znr/27/maul-of-the-skyclaves) and attach it to a [Grizzly Bears](https://scryfall.com/card/10e/268/grizzly-bears). Does this Grizzly Bears now have double strike?

![First strike](https://images.guildmagesforum.tw/posts/What-is-Dependency/93d02d57face.webp)

> [Kwende, Pride of Femeref](https://scryfall.com/card/dom/25/kwende-pride-of-femeref): Creatures you control with first strike have double strike.
> [Maul of the Skyclaves](https://scryfall.com/card/znr/27/maul-of-the-skyclaves): Equipped creature gets +2/+2 and has flying and first strike.

**"Because Maul of the Skyclaves gives the equipped creature first strike, and Kwende gives creatures with first strike double strike, the Grizzly Bears has double strike."** That is indeed the correct answer, and I doubt anyone would get it wrong, but if we explain it using only the idea of timestamps, it seems a bit contradictory.

Both the Maul giving the creature first strike and Kwende giving creatures double strike are **effects that add abilities in layer 6**. If we follow the timestamp logic, Kwende has the earlier timestamp, so its ability is processed first, but at that point the Grizzly Bears has no first strike, so it doesn't apply. Only then is the later-timestamped Maul's ability processed, giving the Grizzly Bears first strike, but by then Kwende has already checked and can't see the Grizzly Bears' first strike, so it fails to grant double strike.

That explanation is very counterintuitive, right? In fact, if every effect in the same layer were handled only by timestamp, it would be more than counterintuitive: it would cause many big bugs in the game, or make many kinds of designs unable to work properly. So how do we solve this problem? The answer is to make the order of some effects not follow timestamps but be decided **by their relationship to each other**. This is the core idea of **dependency**.

### Definition of the Dependency Rules

Let's first see how the original text of the rule for dependency <font color="#AAAAAA">(which doesn't speak human)</font> describes it:

- 613.8.
  Within a layer or sublayer, sometimes the true order of effects is determined using a dependency system. If a dependency exists, it will override the timestamp system.
- 613.8a
  An effect is said to "depend on" another if (a) it's applied in the same layer (and, if applicable, sublayer) as the other effect; (b) applying the other would change the text or the existence of the first effect, what it applies to, or what it does to any of the things it applies to; and (c) neither effect is from a characteristic-defining ability or both effects are from characteristic-defining abilities. Otherwise, the effects are independent of each other.
- 613.8b
  An effect dependent on one or more other effects waits to apply until just after all of those effects have been applied. If multiple dependent effects would be applied at the same time this way, they are applied in timestamp order relative to each other. If several dependent effects form a dependency loop, this rule is ignored and the effects in the dependency loop are applied in timestamp order.
- 613.8c
  After each effect is applied, the order of remaining effects is reevaluated and may change if an effect that has not yet been applied becomes dependent on or no longer depends on another effect that has not yet been applied.

If you feel that you understand every word of these rules but can't make sense of them put together, you are a normal person. In the author's view, dependency is indeed among the least human-readable parts of the Comprehensive Rules.

First, 613.8a defines what kinds of effects form a dependency:

- **(a) It is applied in the same layer (or sublayer) as the other effect**
  This is easy to understand, and so far it matches the timestamp condition. The rules that decide the difference between timestamps and dependency come later.
- **(c) Neither effect is from a characteristic-defining ability, or both are**
  We already explained the definition of [characteristic-defining abilities (CDAs)](https://guildmagesforum.tw/en/Characteristic-Defining-Ability/) in a previous article. Readers not yet familiar with CDAs can go back and read the earlier posts.
- **<font color="#FF0000">(b) Applying the other would change the text or the existence of the first effect, what it applies to, or what it does to any of the things it applies to</font>**
  This single short line is the most important core definition of dependency! Do you feel this rule is too vague, and that a pile of detailed clauses will follow to fill in the details? Unfortunately not. This is the entire rules text of dependency.

Let's dig deeper into what (b) of 613.8a means. Suppose there are two effects now: <font color="#FF0000">Effect A</font> & <font color="#0000FF">Effect B</font>. Both act in the same layer or sublayer, and both are or both are not CDAs. First, let's drop the idea of timestamps and look only at what the two effects act on. If applying <font color="#FF0000">Effect A</font> first causes any of the following changes to <font color="#0000FF">Effect B</font>:

- It changes the text or existence of <font color="#0000FF">Effect B</font>. For example, after applying <font color="#FF0000">Effect A</font>, <font color="#0000FF">Effect B</font> simply disappears.
- It changes what <font color="#0000FF">Effect B</font> applies to. For example, <font color="#0000FF">Effect B</font> only affects artifacts, and <font color="#FF0000">Effect A</font> turns a nonartifact permanent into an artifact.
- It changes what <font color="#0000FF">Effect B</font> does. For example, <font color="#0000FF">Effect B</font> can give a creature certain abilities, and <font color="#FF0000">Effect A</font> changes what abilities are gained.

When the above conditions are met, we can say: <font color="#0000FF">Effect B</font> **depends on** <font color="#FF0000">Effect A</font>!

Now let's go back to the <font color="#0000FF">Kwende, Pride of Femeref</font> & <font color="#FF0000">Maul of the Skyclaves</font> example. Applying <font color="#FF0000">Maul of the Skyclaves</font> first changes what <font color="#0000FF">Kwende</font> applies to: the Grizzly Bears, which was originally unaffected by <font color="#0000FF">Kwende</font>, is now affected by <font color="#0000FF">Kwende</font>'s effect because of <font color="#FF0000">Maul of the Skyclaves</font>. Here we can say: <font color="#0000FF">Kwende</font> depends on <font color="#FF0000">Maul of the Skyclaves</font>.

To sum up briefly: to decide whether to use the timestamp or dependency system when handling multiple effects, just ask **after applying one of the two effects, does it change the other effect?**

## Dependency Rule Examples

With the basic rules in hand, let's look at some actual examples!

![Turn to Frog](https://images.guildmagesforum.tw/posts/What-is-Dependency/694b06dc1a2b.webp)

> [Yarus, Roar of the Old Gods](https://scryfall.com/card/mkm/245/yarus-roar-of-the-old-gods): Other creatures you control have haste.
> [Turn to Frog](https://scryfall.com/card/clu/103/turn-to-frog): Until end of turn, target creature loses all abilities and becomes a blue Frog with base power and toughness 1/1.

If you cast Turn to Frog on Yarus, can your other creatures still gain haste from Yarus?

After applying <font color="#FF0000">Turn to Frog</font>, <font color="#0000FF">Yarus</font> loses the ability to give other creatures haste. That is what we said above: after applying <font color="#FF0000">Effect A</font>, <font color="#0000FF">Effect B</font> simply disappears. This is the first case of 613.8a (b), so <font color="#0000FF">Yarus</font> depends on <font color="#FF0000">Turn to Frog</font>, and your other creatures will no longer gain haste from Yarus.

![Cauldron](https://images.guildmagesforum.tw/posts/What-is-Dependency/49b2c6013adb.webp)

> [Agatha's Soul Cauldron](https://scryfall.com/card/woe/242/agathas-soul-cauldron): Creatures you control with +1/+1 counters on them have all activated abilities of all creature cards exiled with Agatha's Soul Cauldron.
> {T}: Exile target card from a graveyard. When a creature card is exiled this way, put a +1/+1 counter on target creature you control.
> [Tishana's Tidebinder](https://scryfall.com/card/lci/81/tishanas-tidebinder): When Tishana's Tidebinder enters the battlefield, counter up to one target activated or triggered ability. If an ability of an artifact, creature, or planeswalker is countered this way, that permanent loses all abilities for as long as Tishana's Tidebinder remains on the battlefield.

Agatha's Soul Cauldron is hereafter called the "Cauldron". This question is somewhat similar to the "[Cauldron](https://scryfall.com/card/woe/242/agathas-soul-cauldron) + [Dress Down](https://scryfall.com/card/mh2/39/dress-down)" example from [the previous article](https://guildmagesforum.tw/en/What-is-Time-Stamp/), but that one could be explained with timestamps alone, while this time we need dependency. Readers may want to think first about what the difference between the two is.

Back to the example: the Cauldron has already exiled a [Birds of Paradise](https://scryfall.com/card/rvr/133/birds-of-paradise), so every creature of yours with a +1/+1 counter has Birds of Paradise's mana ability ({T}: Add one mana of any color), and you now have a [Young Wolf](https://scryfall.com/card/j22/746/young-wolf) with a +1/+1 counter on it. Later, when the Cauldron's ability is activated again, it is countered by Tishana's Tidebinder. While the Tidebinder remains on the battlefield, does your Young Wolf still have Birds of Paradise's mana ability?

The solution to this one is actually the same as the previous one. <font color="#FF0000">The Tidebinder</font> makes <font color="#0000FF">the Cauldron</font> lose all abilities, including the ability to give creatures activated abilities, so <font color="#0000FF">the Cauldron</font> depends on <font color="#FF0000">the Tidebinder</font>, and your creatures can no longer gain activated abilities through the Cauldron.

As for why, when both are effects that add or remove abilities, "Cauldron + Dress Down" can be explained with timestamps while "Cauldron + Tidebinder" needs dependency, the answer is that Dress Down and the Tidebinder act on different things!
The effects of the Cauldron and Dress Down both act on creatures, with no relationship between them. Applying one does not change the other effect itself, so the timestamp system is used.
But in the Cauldron + Tidebinder case, the Cauldron affects creatures while the Tidebinder affects the Cauldron. Applying the Tidebinder's effect also changes the Cauldron, so the dependency system is used.

![Haste](https://images.guildmagesforum.tw/posts/What-is-Dependency/ca6de496fc92.webp)

> [Garna, the Bloodflame](https://scryfall.com/card/c20/213/garna-the-bloodflame): Other creatures you control have haste.
> [Fervor](https://scryfall.com/card/m13/129/fervor): Creatures you control have haste.
> [Dress Down](https://scryfall.com/card/mh2/39/dress-down): Creatures lose all abilities.

Still feel the difference between timestamps and dependency is a bit confusing? Then here's a simpler example to reinforce the memory. Suppose I have either Garna, the Bloodflame or Fervor on the battlefield, plus Dress Down. Will my creatures have haste?

Garna's case is the same as the two examples above. After applying <font color="#FF0000">Dress Down</font> first, <font color="#0000FF">Garna</font> loses the ability to give other creatures haste, so the two have a dependency, and <font color="#0000FF">Garna</font> depends on <font color="#FF0000">Dress Down</font>.

Fervor and Dress Down have no direct interaction. Fervor is not a creature, so it isn't affected by Dress Down. They both just affect creatures through layer 6 ability adding and removing effects, so here we compare their timestamps. If Fervor entered first and Dress Down entered later, then the creatures lose all abilities. Conversely, if Dress Down entered first and Fervor later, then your creatures first lose all abilities and then gain haste.

![March of the Machines](https://images.guildmagesforum.tw/posts/What-is-Dependency/48de78bb1063.webp)

> [Mycosynth Lattice](https://scryfall.com/card/bbd/241/mycosynth-lattice): All permanents are artifacts in addition to their other types.
> [March of the Machines](https://scryfall.com/card/arc/6/march-of-the-machines): Each noncreature artifact is an artifact creature with power and toughness each equal to its mana value.

When Mycosynth Lattice and March of the Machines are on the battlefield at the same time, does the result differ depending on the timestamp order of the two?

After applying <font color="#FF0000">Mycosynth Lattice</font>, what <font color="#0000FF">March of the Machines</font> applies to changes: permanents that were not artifacts become artifacts because of <font color="#FF0000">Mycosynth Lattice</font> and are then affected by <font color="#0000FF">March of the Machines</font>. This is the second case of 613.8a (b), so <font color="#0000FF">March of the Machines</font> depends on <font color="#FF0000">Mycosynth Lattice</font>, and their timestamps have no effect.

> One more note: because the abilities of Mycosynth Lattice and March of the Machines can both affect lands, when both are on the battlefield, all lands become 0/0 artifact creatures. This combination is equivalent to a land-destruction combo.

![Yixlid Jailer](https://images.guildmagesforum.tw/posts/What-is-Dependency/023ba4a24f24.webp)

> [Necrotic Ooze](https://scryfall.com/card/2x2/83/necrotic-ooze): As long as Necrotic Ooze is on the battlefield, it has all activated abilities of all creature cards in all graveyards.
> [Yixlid Jailer](https://scryfall.com/card/tsr/149/yixlid-jailer): Cards in graveyards lose all abilities.

The opponent controls Yixlid Jailer, and then I cast a Necrotic Ooze. Can my Necrotic Ooze have all the activated abilities of the creature cards in the graveyards?

This example looks similar to the earlier Cauldron + Tidebinder case, but there is actually a difference. In the case above, the Tidebinder's effect acts directly on the Cauldron, making it lose abilities, which is the first case of 613.8a (b).

But in this case, Yixlid Jailer's ability doesn't act directly on Necrotic Ooze. It acts on the cards in graveyards that define which abilities Necrotic Ooze gets. In other words, <font color="#FF0000">Yixlid Jailer</font> changes what <font color="#0000FF">Necrotic Ooze</font>'s effect does, which is the third case of 613.8a (b). <font color="#0000FF">Necrotic Ooze</font> depends on <font color="#FF0000">Yixlid Jailer</font>, and Necrotic Ooze can't gain any activated abilities of the creature cards in graveyards.

![Sutured Ghoul](https://images.guildmagesforum.tw/posts/What-is-Dependency/0167a523cf56.webp)

> [Sutured Ghoul](https://scryfall.com/card/m12/112/sutured-ghoul): As Sutured Ghoul enters the battlefield, exile any number of creature cards from your graveyard.
> Sutured Ghoul's power is equal to the total power of the cards exiled this way, and its toughness is equal to the total toughness of the cards exiled this way.
> [Necrogoyf](https://scryfall.com/card/mh2/93/necrogoyf): Necrogoyf's power is equal to the number of creature cards in all graveyards.

When Sutured Ghoul enters, it exiles Necrogoyf from the graveyard. How should Sutured Ghoul's power be calculated?

This is a rare dependency involving [CDAs](https://guildmagesforum.tw/en/Characteristic-Defining-Ability/). Let's recall one important feature of CDAs: **"a characteristic-defining ability works in all zones."** So no matter which zone Necrogoyf is in now, the card's power dynamically checks the current game state.

And when calculating power, <font color="#0000FF">Sutured Ghoul</font>'s CDA needs to refer to the CDA of the <font color="#FF0000">Necrogoyf</font> it exiled. In other words, <font color="#0000FF">Sutured Ghoul</font> depends on <font color="#FF0000">Necrogoyf</font>. You first compute <font color="#FF0000">Necrogoyf</font>'s power, then use that value to compute <font color="#0000FF">Sutured Ghoul</font>'s power.

![NTR](https://images.guildmagesforum.tw/posts/What-is-Dependency/9168aaf1ed08.webp)

> [Control Magic](https://scryfall.com/card/cma/34/control-magic): You control enchanted creature.
> [Steal Enchantment](https://scryfall.com/card/tmp/90/steal-enchantment): You control enchanted enchantment.

I control a [Grizzly Bears](https://scryfall.com/card/10e/268/grizzly-bears), and the opponent attaches Control Magic to my Grizzly Bears to gain control of it. Then I attach Steal Enchantment to Control Magic, gaining control of Control Magic. Does control of the Grizzly Bears come back to me too?

Both are layer 2 "control-changing effects." <font color="#0000FF">Control Magic</font>'s effect is that **"you"** control the enchanted creature, and this **"you"** is the controller of the Aura. <font color="#FF0000">Steal Enchantment</font> will change the controller of <font color="#0000FF">Control Magic</font>, so <font color="#0000FF">Control Magic</font> depends on <font color="#FF0000">Steal Enchantment</font>, and in the end control of the Grizzly Bears goes to me.

![Urborg](https://images.guildmagesforum.tw/posts/What-is-Dependency/ab02fadbb8c0.webp)

> [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon): Nonbasic lands are Mountains. Hereafter called "Moon".
> [Urborg, Tomb of Yawgmoth](https://scryfall.com/card/tsr/287/urborg-tomb-of-yawgmoth): Each land is a Swamp in addition to its other land types. Hereafter called "Urborg".

We finally arrive at the most classic example of dependency. Blood Moon + Urborg is an example you absolutely can't avoid when talking about dependency. This article without it would be like fried shrimp without the sauce.

Before formally interpreting their relationship, we need to go back and explain how Blood Moon's ability works. Simply put, Blood Moon makes nonbasic lands lose their original land types and abilities, and then gives them the Mountain type and the ability to tap for red mana. Although losing abilities is involved, this is not a layer 6 ability adding or removing effect, but a special case among layer 4 type-changing effects. For a fuller explanation, see the earlier article: [Why Did Urza's Saga Blow Itself Up?](https://guildmagesforum.tw/en/Saga-and-Moon/).

- 305.7
  If an effect sets a land's subtype to one or more of the basic land types, the land no longer has its old land type. It loses all abilities generated from its rules text, its old land types, and any copiable effects affecting that land, and it gains a mana ability for each basic land type it has. Setting a land's subtype doesn't add or remove any card types (such as creature) or supertypes (such as basic, legendary, and snow) the land may have.

Back to the example: with both Blood Moon + Urborg on the battlefield, what types will all nonbasic lands on the battlefield have?

Let's see what happens if Urborg is applied first. Urborg gives all lands the Swamp type in addition, and then Blood Moon applies, turning those nonbasic lands into Mountains. This has no relation to the effect Urborg applied earlier; it is simply overwritten. So <font color="#FF0000">Blood Moon</font> **does not depend on** <font color="#0000FF">Urborg</font>.

What is the result if <font color="#FF0000">Blood Moon</font> is applied first? <font color="#FF0000">Blood Moon</font> makes <font color="#0000FF">Urborg</font> lose all its original abilities. In other words, after applying <font color="#FF0000">Blood Moon</font>, <font color="#0000FF">Urborg</font>'s effect simply disappears, so <font color="#0000FF">Urborg</font> depends on <font color="#FF0000">Blood Moon</font>! In the end, all nonbasic lands, including Urborg, become Mountains.

In fact, the logic of this case is very simple, but this way of writing effects that modify land types is sometimes less intuitive than the examples above. And compared to the previous examples, where <font color="#FF0000">A</font> clearly affects <font color="#0000FF">B</font>, the interaction of <font color="#FF0000">Blood Moon</font> & <font color="#0000FF">Urborg</font> looks especially like it falls within the scope of timestamp handling, as if the two effects had little dependency. For a similar case, see "Blood Moon + [Leyline of the Guildpact](https://scryfall.com/card/mkm/217/leyline-of-the-guildpact)" in [the previous article](https://guildmagesforum.tw/en/What-is-Time-Stamp/). When you are unsure whether there is a dependency between two effects, a simple way to judge is to **"simulate the two effects once in each application order."** Taking this question as an example, once you try applying Blood Moon first or Urborg first, the relationship between the two becomes quite obvious. Even if you still don't understand the definition of dependency, at least in a game you can sort out the current game state.

![Rootpath Purifier](https://images.guildmagesforum.tw/posts/What-is-Dependency/89f8cc27e89c.webp)

> [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon): Nonbasic lands are Mountains.
> [Rootpath Purifier](https://scryfall.com/card/brc/24/rootpath-purifier): Lands you control and land cards in your library are basic.

Suppose Blood Moon is on the battlefield and you control Rootpath Purifier. What happens to your lands?

<font color="#0000FF">Blood Moon</font>'s effect can only act on "nonbasic lands," but <font color="#FF0000">Rootpath Purifier</font> can additionally give all your lands the "basic" supertype. That means applying <font color="#FF0000">Rootpath Purifier</font> changes what <font color="#0000FF">Blood Moon</font>'s effect applies to. <font color="#0000FF">Blood Moon</font> depends on <font color="#FF0000">Rootpath Purifier</font>, so all your lands first gain the "basic" supertype and then ignore Blood Moon, since those lands are no longer something Blood Moon applies to. Your opponent isn't so lucky, though; they are still affected by Blood Moon as usual.

![Ashaya](https://images.guildmagesforum.tw/posts/What-is-Dependency/33ffa7e825ce.webp)

> [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon): Nonbasic lands are Mountains.
> [Ashaya, Soul of the Wild](https://scryfall.com/card/znr/179/ashaya-soul-of-the-wild): Ashaya, Soul of the Wild's power and toughness are each equal to the number of lands you control.
> Nontoken creatures you control are Forest lands in addition to their other types.

I originally have an Ashaya, Soul of the Wild on the battlefield, and now Blood Moon enters. What happens to Ashaya? (Let's simplify the question by ignoring any other permanents or effects.)

Ashaya's ability makes my nontoken creatures also have the land and Forest types, including itself. So after <font color="#FF0000">Ashaya</font>'s effect is applied, it is both a creature and a Forest land. Since it is a nonbasic land, that means it is something <font color="#0000FF">Blood Moon</font> applies to. <font color="#0000FF">Blood Moon</font> depends on <font color="#FF0000">Ashaya</font>, and Ashaya becomes a Mountain because of Blood Moon. The question is... what happens after that?

Let me just give the conclusion first. Ashaya doesn't lose its creature type because of Blood Moon, but it does lose the CDA that defines its own power and toughness because of Blood Moon, and then as a 0/0 creature it dies the next time state-based actions are checked. A fuller explanation of this example will appear again in the final Layer wrap-up article, and based on this example you can derive many interesting variant situations.

![Life and Limb](https://images.guildmagesforum.tw/posts/What-is-Dependency/3b321a92dc75.webp)

> [Conspiracy](https://scryfall.com/card/tsb/39/conspiracy): As Conspiracy enters the battlefield, choose a creature type.
> Creature cards you own that aren't on the battlefield, creature spells you control, and creatures you control are the chosen type.
> [Life and Limb](https://scryfall.com/card/tsr/215/life-and-limb): All Forests and all Saprolings are 1/1 green Saproling creatures and Forest lands in addition to their other types.

Suppose I have both Life and Limb and Conspiracy on the battlefield, Conspiracy names the creature type Saproling, and I also control a basic Forest and a [Savannah Lions](https://scryfall.com/card/dmr/24/savannah-lions). How should these two effects be handled?

Suppose <font color="#FF0000">Conspiracy</font> is applied first. Then my Savannah Lions additionally becomes a Saproling, which changes what <font color="#0000FF">Life and Limb</font>'s effect applies to, so it holds that <font color="#0000FF">Life and Limb</font> depends on <font color="#FF0000">Conspiracy</font>.

Wait! That is not the whole conclusion. Now let's reverse the application order and see what happens. If <font color="#FF0000">Life and Limb</font> is applied first, it makes my basic Forest a 1/1 green Saproling, because it gains the creature type. That also changes what <font color="#0000FF">Conspiracy</font>'s effect applies to, so it also holds that <font color="#0000FF">Conspiracy</font> depends on <font color="#FF0000">Life and Limb</font>.

Now it's awkward: what do we do when two effects each depend on the other? Here we turn to the rule we glossed over above:

- 613.8b
  An effect dependent on one or more other effects waits to apply until just after all of those effects have been applied. If multiple dependent effects would be applied at the same time this way, they are applied in timestamp order relative to each other. If several dependent effects form a dependency loop, this rule is ignored and the effects in the dependency loop are applied in timestamp order.

In this case, Conspiracy and Life and Limb form a dependency loop, so according to rule 613.8b, the dependency is dropped and the two effects are handled by timestamp.

Since the focus of this article is introducing dependency, let's wrap this question up here for now. But you will see this question once more in the final Layer wrap-up article, because even when handled by timestamp these two effects don't behave themselves, and other rules involving multiple layers interfere.

![Conversion 1](https://images.guildmagesforum.tw/posts/What-is-Dependency/eed5824af0b4.webp)

> [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon): Nonbasic lands are Mountains.
> [Conversion](https://scryfall.com/card/me4/9/conversion): All Mountains are Plains.
> [Steam Vents](https://scryfall.com/card/grn/257/steam-vents): Land — Island Mountain. Hereafter called the "Izzet land".

Suppose I have both Blood Moon and Conversion on the battlefield, with no lands <font color="#AAAAAA">(say I just ate an [Armageddon](https://scryfall.com/card/a25/5/armageddon))</font>, and then I play an Izzet land. Does this Izzet land become a Mountain or a Plains?

Here you might take it for granted that Blood Moon and Conversion have a dependency, because Blood Moon first turns lands that aren't Mountains into Mountains, which changes what Conversion's effect applies to, so Conversion depends on Blood Moon?

But back to this case, let's look at how the two effects act on the Izzet land. The Izzet land is originally a nonbasic Mountain, and is something both Blood Moon and Conversion apply to. Applying either one first doesn't cause the other to stop applying, or in other words, **what the effects apply to does not change**. So this is not a dependency, and it is handled by timestamp.

Suppose the timestamp order is Conversion first and Blood Moon later. Then the Izzet land is first handled by Conversion and becomes a Plains, and then handled by Blood Moon and becomes a Mountain. In the end it is a Mountain.

![Conversion 2](https://images.guildmagesforum.tw/posts/What-is-Dependency/17a4367da3b4.webp)

> [Blood Moon](https://scryfall.com/card/2xm/118/blood-moon): Nonbasic lands are Mountains.
> [Conversion](https://scryfall.com/card/me4/9/conversion): All Mountains are Plains.
> [Steam Vents](https://scryfall.com/card/grn/257/steam-vents): Land — Island Mountain. Hereafter called the "Izzet land".
> [Breeding Pool](https://scryfall.com/card/rna/246/breeding-pool): Land — Forest Island. Hereafter called the "Simic land".

Continuing from the previous question, the timestamp order is Conversion first and Blood Moon later, and the Izzet land on the battlefield has already become a Mountain. Now I play a Simic land. Does this have any effect on the situation?

Now let's check again how Blood Moon & Conversion handle the Simic land. This is a bit different from the case above. The Simic land is a nonbasic land but not a Mountain, so if <font color="#FF0000">Blood Moon</font> were applied first, it would change what <font color="#0000FF">Conversion</font>'s effect applies to, while the reverse would not change what is applied to. Now <font color="#FF0000">Blood Moon</font> & <font color="#0000FF">Conversion</font> suddenly have a dependency! <font color="#0000FF">Conversion</font> depends on <font color="#FF0000">Blood Moon</font>, so the Simic land first gets Blood Moon and becomes a Mountain, then gets Conversion and ends up a Plains.

What about the Izzet land left over from the previous question? The answer is that it changes along with it. Once the relationship between Blood Moon and Conversion shifts from timestamp to dependency, the application order of the effects is redetermined, so the Izzet land that was a Mountain becomes a Plains because you played a Simic land.

This also brings out a distinctive property of dependency: whether multiple effects form a dependency depends on the current game state, and can't be fully judged from the text of the individual cards alone.

With this concept understood, readers can go back to the [Conspiracy](https://scryfall.com/card/tsb/39/conspiracy) + [Life and Limb](https://scryfall.com/card/tsr/215/life-and-limb) question and try removing the basic Forest or the [Savannah Lions](https://scryfall.com/card/dmr/24/savannah-lions) from the example situation, or both, and see how the relationship between the two effects changes.

---

## Next: Layer

With this, we have finally introduced all the tools of the Layer system. In the next article we will fully introduce how the Layer system works.

![Next](https://images.guildmagesforum.tw/posts/What-is-Dependency/8b9b20a6117d.webp)
