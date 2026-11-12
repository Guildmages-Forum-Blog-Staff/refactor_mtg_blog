---

title: "Layers: How Continuous Effects Interact"
date: "2024-12-02 10:57:43"
updated: "2025-07-06 19:55:27"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/Layer/58e10aa6385e-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Layer/58e10aa6385e-cover.jpg"
excerpt: "How do you handle Humility + Opalescence? (Maybe handling the rules, or maybe handling the person playing it)"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Layer/).

## Before We Start

Today's topic is the famous **Layers**. The function of layers is just as the section is named in the [MTG Comprehensive Rules](https://blogs.magicjudges.org/rules/cr/): ["Interaction of Continuous Effects"](https://blogs.magicjudges.org/rules/cr613/). Layers define how continuous effects apply to an object.

The layer rules are very rigorous and have an extremely wide range of applications. You could even say they are one of the foundations that allow the MTG rules to be so rigorous. But precisely because of that rigor and the amount of background knowledge involved, the text of the layer rules isn't easy to read, and among some players it has even built up a reputation as "something that can't be understood." In fact, though, the underlying rules of layers are very concise. If you patiently follow its structure and walk through it layer by layer, you'll find the logic of layers is not as complicated as you might imagine.

In earlier rules articles, we have already touched on some of the layer rules here and there, with detailed explanations and examples. In this article we'll introduce how layers work from the beginning. Rules that have been covered before will be passed over briefly, so if you find any of the quoted rules hard to follow, please refer to the earlier articles.

{% folding blue :: Previous Articles %}

- [Copiable Values](https://guildmagesforum.tw/What-is-Copiable-Value/)
- [Characteristic-Defining Abilities](https://guildmagesforum.tw/Characteristic-Defining-Ability/)
- [Timestamps](https://guildmagesforum.tw/What-is-Time-Stamp/)
- [Dependency](https://guildmagesforum.tw/What-is-Dependency/)

{% endfolding %}

![Cover](https://images.guildmagesforum.tw/posts/Layer/c0218147bc81.webp)

---

## Why We Need Layers

MTG has a great many elements to manipulate, which ranks near the top even among TCGs. The number of objects on the battlefield is unlimited, there are many card types, and an object has many kinds of attributes inside it. All of this means MTG is especially prone to complex card interactions. Faced with these endless combinations, it is impossible to handle everything through individual card rulings, so MTG needs a **rigorous underlying logical structure**. When a rules question arises from a card interaction, you just follow this logic and arrive at a **consistent** and correct answer. In some more complicated situations the logic may lead to an answer that is hard to understand or counterintuitive, but the layer system ensures the logic is consistent throughout. You will never have two cards with identical effect text reaching different conclusions "because they are different cards."

---

## Definition of the Layer Rules

First, let's introduce the most basic definition of the layer rules. This section will quote the original rules text heavily. I know full well that these rules aren't easy to digest, so **I'll explain them again afterward in plainer language**.

Layers are the rules used to determine an object's characteristics, and they work just as the name suggests: sorting the various attributes of an object into categories, arranged layer by layer. Next, let's look at how layers actually operate when a continuous effect affects an object.

Before discussing how continuous effects apply, we first need to determine the object's original characteristics. For a card, these are the characteristics printed on the card; for a token or a copy of a spell or card, these are the characteristics defined by the effect that created it. You can think of these original characteristics as **layer 0** <font color="#AAAAAA">(this is just a way of putting it for ease of understanding; there is no such term in the official rules)</font>. Once layer 0 is determined, it never changes again. After that, whenever any continuous effect tries to modify the object's characteristics, it takes effect in a series of layers in the following order:

{% notel blue Definition of Each Layer %}

There are seven layers in total (numbered 1 to 7), and some of them can be further divided into sublayers (labeled a, b, ...)

- Layer 1: Rules and effects that affect [copiable values](https://guildmagesforum.tw/What-is-Copiable-Value/) are applied.
    - Layer 1a: Copy effects are applied.
    - Layer 1b: Face-down spells' and permanents' characteristic-related rules are applied.
- Layer 2: Control-changing effects are applied.
- Layer 3: Text-changing effects are applied.
- Layer 4: Type-changing effects are applied. This includes effects that change an object's card type, subtype, and supertype.
- Layer 5: Color-changing effects are applied.
- Layer 6: Effects that add abilities, keyword counters, effects that remove abilities, and effects that say an object can't have certain abilities are applied.
- Layer 7: Effects that change power and/or toughness are applied.
    - Layer 7a: Effects from [characteristic-defining abilities](https://guildmagesforum.tw/Characteristic-Defining-Ability/) that define power and toughness are applied.
    - Layer 7b: Effects that set power and/or toughness to a specific number or value are applied. Effects that refer to a creature's base power and toughness are applied in this layer.
    - Layer 7c: Effects and counters that modify power and/or toughness (but don't set power and/or toughness to a specific number or value) are applied.
    - Layer 7d: Effects that switch a creature's power and toughness are applied.

### Layer 1a: Copy Effects
![Layer_1a](https://images.guildmagesforum.tw/posts/Layer/f8bd7e25c128.webp)
> Effects that make something a copy of XX apply in this layer.

### Layer 1b: Face-Down Effects
![Layer_1b](https://images.guildmagesforum.tw/posts/Layer/9b7923477499.webp)
> The characteristics that a face-down permanent comes with are split out into their own layer, higher than ordinary copy effects, and copiable values are checked only up to layer 1b.

### Layer 2: Control-Changing Effects
![Layer_2](https://images.guildmagesforum.tw/posts/Layer/39c0a047d5d7.webp)

### Layer 3: Text-Changing Effects
![Layer_3](https://images.guildmagesforum.tw/posts/Layer/ac38c9b86071.webp)

### Layer 4: Type-Changing Effects
![Layer_4](https://images.guildmagesforum.tw/posts/Layer/7f40af28a9d0.webp)

### Layer 5: Color-Changing Effects
![Layer_5](https://images.guildmagesforum.tw/posts/Layer/ef8444685737.webp)

### Layer 6: Effects That Add or Remove Abilities
![Layer_6](https://images.guildmagesforum.tw/posts/Layer/cbb8df43b62a.webp)
> Keyword counters also apply in this layer.

### Layer 7a: Characteristic-Defining Abilities That Define Power and Toughness
![Layer_7a](https://images.guildmagesforum.tw/posts/Layer/b02298104149.webp)
> The power or toughness value in the bottom right corner is shown as ★.

### Layer 7b: Setting Power and Toughness to Specific Values
![Layer_7b](https://images.guildmagesforum.tw/posts/Layer/7aa5e325dfbe.webp)
> This layer determines the object's base power and toughness. For cards that check base power and toughness, such as [Kutzil, Malamet Exemplar](https://scryfall.com/card/lci/232/kutzil-malamet-exemplar), what they look at is the value determined by layer 7b.

### Layer 7c: Increasing or Decreasing Power and Toughness
![Layer_7c](https://images.guildmagesforum.tw/posts/Layer/4fb7629ff549.webp)

### Layer 7d: Switching Power and Toughness
![Layer_7d](https://images.guildmagesforum.tw/posts/Layer/80c921c1704c.webp)

{% endnotel %}

Besides the basic definitions of the layers above, there are also the following layer rules. It's fine if you can't follow them yet; later sections have more detailed explanations and examples:

{% notel blue Additional Layer Rules %}

- 613.3 Within layers 2-6, apply effects from characteristic-defining abilities first, and then apply all other effects in timestamp order.
> In practice, this rule about characteristic-defining abilities currently only comes up in layers 4 and 5.

- 613.5 The game continually and automatically applies continuous effects in the order determined by the layer system. All changes to an object's characteristics are made instantly.

- 613.6 If an effect should be applied in different layers and/or sublayers, the parts of the effect apply in each relevant layer or sublayer. If an effect starts to apply in one layer and/or sublayer, it will continue to be applied to the same set of objects in other layers and/or sublayers, even if the ability generating the effect is removed during this process.

- 613.7 Within a layer or sublayer, determining which order effects are applied in is usually done using a [timestamp](https://guildmagesforum.tw/What-is-Time-Stamp/) system. An effect with an earlier timestamp is applied before an effect with a later timestamp.

- 613.8 Within a layer or sublayer, determining which order effects are applied in is sometimes done using a [dependency](https://guildmagesforum.tw/What-is-Dependency/) system. If a dependency exists, it will override the timestamp system.

- 613.9 One continuous effect can override another. Sometimes the results of one effect determine whether another effect applies or what another effect does.

{% endnotel %}


---

## How Should We Analyze Layers?

Reading the original rules text directly may leave you not understanding what it's talking about, so here I'll summarize a simple way to interpret layers, and also introduce how later articles will analyze them.

### Effects Apply in Layer Order

We'll call an object's original characteristics layer 0. Any later effect that makes a characteristic change to it happens in layers 1 to 7, modifying on top of the original characteristics. For the definition of each layer, refer to the sections above.

Now suppose an effect wants to modify an object's characteristics. We first need to work out which layer the effect applies in. One effect may also modify information in multiple layers at once. Let's take [Kenrith's Transformation](https://scryfall.com/card/woc/128/kenriths-transformation) as an example:
![](https://images.guildmagesforum.tw/posts/Layer/ee6cbbd02eff.webp)
First, following the layer definitions above, fill Kenrith's Transformation's effect into a table:
| Layer | Kenrith's Transformation | 
| :-: | :-: | 
| 4 | Becomes an Elk | 
| 5 | Becomes green | 
| 6 | Loses all abilities | 
| 7b | Becomes 3/3 | 

Once you've worked out which layers an effect applies in, you can start applying these effects. The layer procedure starts at layer 1a and ends at layer 7d, applying the effects of each layer one layer at a time. In the Kenrith's Transformation example, the order of application is 4 -> 5 -> 6 -> 7b.

Applying effects in order is the single most important concept of layers, because some effects may only apply to objects that meet certain conditions, and modifications in earlier layers may change the scope of that condition. Let's keep using the example above. Suppose Kenrith's Transformation is attached to my Shivan Dragon, and I also have a Wilt-Leaf Liege on the battlefield. The effects acting on Shivan Dragon are then as follows:
![Example](https://images.guildmagesforum.tw/posts/Layer/73141a4109d6.webp)
> ● **[Shivan Dragon](https://scryfall.com/card/fdn/206/shivan-dragon)**:
> The creature enchanted by the Aura.
> ● **[Kenrith's Transformation](https://scryfall.com/card/woc/128/kenriths-transformation)**:
> Enchanted creature loses all abilities and is a green Elk creature with base power and toughness 3/3. (It loses all other card types and creature types.)
> ● **[Wilt-Leaf Liege](https://scryfall.com/card/fdn/668/wilt-leaf-liege)**:
> Other green creatures you control get +1/+1.

Let's fill the effects of Kenrith's Transformation & Wilt-Leaf Liege into a table:
| Layer | Kenrith's Transformation | Wilt-Leaf Liege |
| :-: | :-: |  :-: | 
| 4 | Becomes an Elk | |
| 5 | Becomes green | |
| 6 | Loses all abilities | |
| 7b | Becomes 3/3 | |
| 7c |  | Other green creatures get +1/+1 |

As a result of applying them in order, Shivan Dragon is first turned green in layer 5, and only afterward, in layer 7c, does it get affected by the +1/+1 effect, because Shivan Dragon is green. Every layer problem-solving approach from here on is inseparable from this important concept!

Let me also introduce how later layer problems will be explained. For each problem, I'll organize the relevant effects into a table so that readers can analyze the current state of the layers. As a rule, I name the header columns by "effect source." In the previous example, all of these effects are actually acting on Shivan Dragon, but if I only wrote Shivan Dragon, you might not be able to tell where each effect comes from, so I use the effect sources as table headers. (Some special problems that don't suit this approach will be handled individually.)

| Layer | Source A | Source B |
| :-: | :-: | :-: |
| 4 | Effect A1 | Effect B1 |
| 6 | Effect A2 |  |
| 7b |  | Effect B2 |


### Within the Same Layer, Effects Apply in Timestamp Order

Sometimes multiple effects apply in the same layer at once, and then you need to compare the [timestamps](https://guildmagesforum.tw/What-is-Time-Stamp/) of those effects. A timestamp is, plainly speaking, the point in time when the effect started to apply. The earlier an effect started, the earlier it applies, but that also means it gets overwritten by effects that started later.

![Timestamps](https://images.guildmagesforum.tw/posts/Layer/6761eb04af2d.webp)
> ● **[Diminish](https://scryfall.com/card/ima/50/diminish)**:
> Target creature has base power and toughness 1/1 until end of turn.
> ● **[Square Up](https://scryfall.com/card/stx/238/square-up)**:
> Target creature has base power and toughness 4/4 until end of turn.

| Layer | Diminish | Square Up |
| :-: | :-: |  :-: | 
| 7b | Becomes 1/1 | Becomes 4/4 |

Take Diminish & Square Up: both are effects that set power and toughness in layer 7b, and the order in which the two apply is determined by timestamp. If both act on the same creature, with Diminish applying first and Square Up second, then because Square Up has the newer timestamp, the creature will be a 4/4.


### Within the Same Layer, Dependency Sometimes Overrides Timestamp

Sometimes multiple effects in the same layer don't operate independently. After one effect applies, the "objects it affects, what it does, its text, or its existence" of another effect changes as a result. In such cases, there is a [dependency](https://guildmagesforum.tw/What-is-Dependency/) between those two effects. Simply put, if B would be affected after A applies, then A is applied first and then B.

![Dependency](https://images.guildmagesforum.tw/posts/Layer/153ddf57899b.webp)
> ● **[Mycosynth Lattice](https://scryfall.com/card/bbd/241/mycosynth-lattice)**:
> All permanents are artifacts in addition to their other types.
> ● **[March of the Machines](https://scryfall.com/card/arc/6/march-of-the-machines)**:
> Each noncreature artifact is an artifact creature with power and toughness each equal to its mana value.

| Layer | Mycosynth Lattice | March of the Machines |
| :-: | :-: |  :-: | 
| 4 | Permanents are also artifacts | Noncreature artifacts are artifact creatures |
| 7b |  | Becomes N/N |

In this example you can see that although both are type-changing effects in layer 4, Mycosynth Lattice changes the objects March of the Machines affects, so there is a dependency between the two effects. Regardless of timestamp order, Mycosynth Lattice first gives every permanent the artifact type, and then March of the Machines turns those noncreature artifacts into artifact creatures.

[Dependency](https://guildmagesforum.tw/What-is-Dependency/) can indeed be called the hardest part of layers. If you can't follow this section, it does no harm to just skip it.

### Try It Yourself

![Example 1](https://images.guildmagesforum.tw/posts/Layer/6342bbea9ec1.webp)
> ● **[Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn)**:
> Regal Bunnicorn's power and toughness are each equal to the number of nonland permanents you control.
> ● **[Cursed Role token (Aura)](https://scryfall.com/card/twoe/17/wicked-cursed)**:
> Enchanted creature is 1/1.

A situation anyone who has played WOE Limited has probably experienced to some extent: if Regal Bunnicorn gets a Cursed Role attached to it, what will its power and toughness be?

| Layer | Regal Bunnicorn | Cursed Role (Aura) |
| :-: | :-: | :-: |
| 7a | ★ is the number of nonland permanents |  |
| 7b | | Becomes 1/1 |

You can see that the effects defining power and toughness are in different layers. Regal Bunnicorn's is a [characteristic-defining ability (CDA)](https://guildmagesforum.tw/Characteristic-Defining-Ability/) in layer 7a, while the Cursed Role's is in layer 7b. Processing in layer order, the last one to apply is the Cursed Role, so no matter what ★ is at the moment, Regal Bunnicorn ends up a 1/1 creature.


![Example 2](https://images.guildmagesforum.tw/posts/Layer/9ab866aa5ee7.webp)
> ● **[Siege Mastodon](https://scryfall.com/card/m20/312/siege-mastodon)**:
> A 3/5 creature.
> ● **[Twisted Image](https://scryfall.com/card/a25/75/twisted-image)**:
> Switch target creature's power and toughness until end of turn.
> ● **[Auger Spree](https://scryfall.com/card/bbd/218/auger-spree)**:
> Target creature gets +4/-4 until end of turn.

Siege Mastodon's current stats are 3/5. First, cast a Twisted Image on it to switch its power and toughness, making it 5/3. Then cast Auger Spree on Siege Mastodon, giving it +4/-4. What will Siege Mastodon's power and toughness be then? Will it die because its toughness becomes 0?

| Layer | Twisted Image | Auger Spree |
| :-: | :-: | :-: |
| 7c | | +4/-4 |
| 7d | Switch power/toughness | |

If you directly apply +4/-4 to the 5/3, then of course Siege Mastodon is toast. But note that these are actually two continuous effects trying to affect Siege Mastodon, and you must apply the layers to get the right answer. Because Auger Spree's +4/-4 is in layer 7c and Twisted Image's power/toughness switch is in layer 7d, processing in layer order goes like this:

- Siege Mastodon's original stats are 3/5.
- Layer 7c applies +4/-4, making it 7/1.
- Layer 7d handles the power/toughness switch, making it 1/7.



The answers to these two problems may seem a bit counterintuitive at first, because these are all effects that affect power/toughness. Without a concept of the layer system, most people instinctively calculate on the current numbers, arriving at a wrong result, or have no idea about the relationship between the two effects (as with the Regal Bunnicorn problem). But as long as you sort these effects into layers and process them in order, I believe it's easy to understand why the answers turn out this way. The most important thing when handling a layer problem is to clarify which layer each effect belongs to. Once the effects are sorted, execute them in order one after another, and most problems can be solved.

The examples just now only dealt with power/toughness, so they are only a simple appetizer. Next, let's move on to the main course and see how the layer system works in various situations!

---

## Layer Rules Examples

### <font color="#FF0000">Mirror Image + Vehicle</font>

![Vehicle](https://images.guildmagesforum.tw/posts/Layer/b4ceeabb3ace.webp)
> ● **[Mirror Image](https://scryfall.com/card/j22/62/mirror-image)**:
> You may have Mirror Image enter the battlefield as a copy of any creature you control.
> ● **[Subterranean Schooner](https://scryfall.com/card/lci/80/subterranean-schooner)**:
> A Vehicle.
> ● **[Blossoming Defense](https://scryfall.com/card/kld/146/blossoming-defense)**:
> Target creature you control gets +2/+2 and gains hexproof until end of turn.

I have a Subterranean Schooner that has already become a creature by crewing, and this turn it received a buff from Blossoming Defense. Then I let Mirror Image enter as a copy of Subterranean Schooner. Will it be a creature when it enters? Will the effect of Blossoming Defense be copied along with it?

| Layer | Mirror Image | Subterranean Schooner | Blossoming Defense |
| :-: | :-: | :-: | :-: |
| 1a | Copies a creature |  |  |
| 4 |  | Becomes an artifact creature (crew) |  |
| 6 |  |  | Hexproof |
| 7c |  |  | +2/+2 |

You can see that crew only applies in layer 4, giving it the creature type in addition, and Blossoming Defense is in an even later layer. A copy effect, however, only sees the [copiable values](https://guildmagesforum.tw/What-is-Copiable-Value/) from layer 1, so even though the original Subterranean Schooner is a creature, the Mirror Image copy is still noncreature. To make it a creature, you need to activate the crew ability again. The effect of Blossoming Defense isn't copied at all, either.
(If you replace Mirror Image with a token-making copy effect, and the Vehicle with a manland, you'll get the same result in this scenario.)






### <font color="#FF0000">Mirror Image + Oko, Thief of Crowns</font>

![One Ring OKO](https://images.guildmagesforum.tw/posts/Layer/fb56a7ba9a51.webp)
> ● **[Oko, Thief of Crowns](https://scryfall.com/card/eld/197/oko-thief-of-crowns)**:
> [+1]: Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3.
> ● **[The One Ring](https://scryfall.com/card/ltr/246/the-one-ring)**:
> A noncreature legendary artifact.
> ● **[Mirror Image](https://scryfall.com/card/j22/62/mirror-image)**:
> You may have Mirror Image enter the battlefield as a copy of any creature you control.

I have a The One Ring on the battlefield that has been turned into an Elk creature by Oko's [+1]. Then I let Mirror Image enter as a copy of this Elk Ring. What happens?

| Layer | Oko [+1] | Mirror Image |
| :-: | :-: | :-: |
| 1a |  | Copies a creature |
| 4 | Becomes an Elk creature |  |
| 5 | Becomes green |  |
| 6 | Loses all abilities |  |
| 7b | Becomes 3/3 |  |

As the previous case showed, although Oko's [+1] does many things, none of them modify copiable values, so Mirror Image will enter as the original The One Ring. But note that The One Ring is a legendary permanent, and Oko's [+1] doesn't touch the name or the supertype (legendary), so you now control two legendary permanents with the same name. By the legend rule, you must choose one to keep on the battlefield and put the other into the graveyard.






### <font color="#FF0000">Mirror Image + Enduring Innocence</font>

![Enduring creature](https://images.guildmagesforum.tw/posts/Layer/4e661e6aa9a9.webp)
> ● **[Mirror Image](https://scryfall.com/card/j22/62/mirror-image)**:
> You may have Mirror Image enter the battlefield as a copy of any creature you control.
> ● **[Enduring Innocence](https://scryfall.com/card/dsk/6/enduring-innocence)**:
> When Enduring Innocence dies, if it was a creature, return it to the battlefield under its owner's control. It's an enchantment. (It's no longer a creature.)

Currently Mirror Image is a copy of Enduring Innocence. When Mirror Image dies, it triggers Enduring Innocence's death ability and returns to the battlefield as an enchantment. What state is Mirror Image in at that point?

| Layer | Mirror Image | Enduring Innocence |
| :-: | :-: | :-: |
| 0 | Itself is a 0/0 creature |  |
| 1a | Copies a creature |  |
| 4 |  | Becomes an enchantment |

First, you can still have Mirror Image enter as a copy of another creature you control, and naturally the abilities of the target creature are copied as well. This is an effect that applies in layer 1. Then we get to the layer 4 effect from Enduring Innocence, which makes Mirror Image an enchantment, and it loses its original creature type.

There's an interesting extension to this problem. Suppose that when Mirror Image comes back, you have no other creatures to copy. Will Mirror Image die because it's a 0/0 creature? The answer is no. It's true that if Mirror Image doesn't copy any other creature, it is a 0/0, but then in layer 4 it loses the creature type, and since it's not a creature, it won't die from having 0 toughness. It will become a functionless enchantment standing on the battlefield <font color="#AAAAAA">(well, if you insist, it's a sacrificial fertilizer)</font>.






### <font color="#FF0000">Invasion of Amonkhet + Enduring Innocence</font>

![Amonkhet Enduring](https://images.guildmagesforum.tw/posts/Layer/a493ef28f985.webp)
> ● **[Invasion of Amonkhet](https://scryfall.com/card/mom/231/invasion-of-amonkhet-lazotep-convert)**:
> A Battle, with Lazotep Convert on its back face.
> ● **[Lazotep Convert](https://scryfall.com/card/mom/231/invasion-of-amonkhet-lazotep-convert)**:
> You may have Lazotep Convert enter the battlefield as a copy of any creature card in a graveyard, except it's a 4/4 black Zombie and it still has its original types.
> ● **[Enduring Innocence](https://scryfall.com/card/dsk/6/enduring-innocence)**:
> When Enduring Innocence dies, if it was a creature, return it to the battlefield under its owner's control. It's an enchantment. (It's no longer a creature.)

I have a Lazotep Convert that I chose to enter as a copy of Enduring Innocence. Then it dies, triggering Enduring Innocence's death ability, and returns to the battlefield as an enchantment.

| Layer | Invasion of Amonkhet | 
| :-: | :-: | 
| 4 |  Becomes an enchantment |

When a transforming double-faced card enters the battlefield, unless a special effect specifies that it enters with its back face up, it always enters front face up, so it enters as an Invasion of Amonkhet and triggers Invasion of Amonkhet's ETB ability.

Because of Enduring Innocence's death ability, Invasion of Amonkhet becomes an enchantment and loses its original types, which means the "Battle - Siege" types are all gone. A battle entering with defense counters is an effect given by the Battle type, so if it loses the Battle type, naturally it loses this ability too. Therefore this Invasion of Amonkhet enters without any defense counters.






### <font color="#FF0000">Lazotep Convert + Mirror Image</font>

![1a modification](https://images.guildmagesforum.tw/posts/Layer/b1d651ddd6af.webp)
> ● **[Lazotep Convert](https://scryfall.com/card/mom/231/invasion-of-amonkhet-lazotep-convert)**:
> You may have Lazotep Convert enter the battlefield as a copy of any creature card in a graveyard, except it's a 4/4 black Zombie and it still has its original types.
> ● **[Inspiring Overseer](https://scryfall.com/card/fdn/496/inspiring-overseer)**:
> The target creature that Lazotep Convert copies.
> ● **[Mirror Image](https://scryfall.com/card/j22/62/mirror-image)**:
> You may have Mirror Image enter the battlefield as a copy of any creature you control.

Suppose I let Lazotep Convert enter as a copy of Inspiring Overseer, and then use Mirror Image to copy Lazotep Convert. What is the final result of Mirror Image's copy?

| Layer | Lazotep Convert | Mirror Image |
| :-: | :-: | :-: |
| 1a | Copies a creature, except it's a 4/4 black Zombie and still has its original types | Copies a creature |

This seems similar to the first two copy problems, but this time the situation is a bit different. Lazotep Convert's modifications to types, color, and power and toughness do not apply in layers 4, 5, and 7b; instead, in layer 1 they directly modify this object's [copiable values](https://guildmagesforum.tw/What-is-Copiable-Value/). So when Mirror Image later copies Lazotep Convert, it will also use these modified copiable values.

So Mirror Image will be a creature named Inspiring Overseer, a 4/4 black Zombie Angel Cleric with flying, and upon entering it still triggers the draw-a-card, gain-1-life effect.






### <font color="#FF0000">Copy + Face-Down</font>

![Face-down](https://images.guildmagesforum.tw/posts/Layer/5ff8107a4ed5.webp)
> ● **[Pyrotechnic Performer](https://scryfall.com/card/mkm/140/pyrotechnic-performer)**:
> [Disguise](https://guildmagesforum.tw/MKM-mechanism/#%E5%81%BD%E8%A3%9D%EF%BC%88Disguise%EF%BC%89) <font color="#FF0000">{R}</font> (You may cast this card face down for {3} as a 2/2 creature with ward {2}. Turn it face up any time for its disguise cost.)
> ● **[Metamorphic Alteration](https://scryfall.com/card/m19/60/metamorphic-alteration)**:
> As Metamorphic Alteration enters the battlefield, choose a creature. Enchanted creature is a copy of the chosen creature.
> ● **[Archfiend of the Dross](https://scryfall.com/card/one/82/archfiend-of-the-dross)**:
> The creature that Metamorphic Alteration copies.

The opponent has a Pyrotechnic Performer that was cast with disguise and is currently still face down. I attach a Metamorphic Alteration to it and choose to make it a copy of my Archfiend of the Dross. What state is this Pyrotechnic Performer in now?

| Layer | Pyrotechnic Performer | Metamorphic Alteration |
| :-: | :-: | :-: |
| 1a |  | Copies a creature |
| 1b | Disguise |  |

Because of Metamorphic Alteration's effect, Pyrotechnic Performer does become a copy of Archfiend of the Dross; this is an effect that applies in layer 1a. However, layer 1b has another effect afterward, which turns it into a creature with the characteristics defined by disguise (colorless, 2/2, ward {2}). Because layer 1b is above layer 1a, the final copiable values of this creature are a 2/2 colorless creature, and if you have another creature copy it, you still get a 2/2 colorless creature.

The actual current state of this creature is "a face-down Archfiend of the Dross." Since it has become a copy of Archfiend of the Dross, it lost Pyrotechnic Performer's original disguise cost and can't be turned face up with the disguise ability. However, if you use a card like [Expose the Culprit](https://scryfall.com/card/mkm/124/expose-the-culprit) to forcibly turn this permanent face up, then it will be an Archfiend of the Dross, because the layer 1b disguise effect has ended but the layer 1a copy effect is still operating.






### <font color="#FF0000">Control Changes</font>

![NTR](https://images.guildmagesforum.tw/posts/Layer/afb142e56c3d.webp)
> ● **[Mass Manipulation](https://scryfall.com/card/rna/42/mass-manipulation)**:
> Gain control of X target creatures and/or planeswalkers.
> ● **[Act of Treason](https://scryfall.com/card/rvr/99/act-of-treason)**:
> Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn.

In a multiplayer game, Player A has a creature, and Player B uses Mass Manipulation to gain control of it. Later Player C also uses Act of Treason to steal that creature. When the Act of Treason effect ends at the end of this turn, does control of the creature go to Player A or Player B?

| Layer | Mass Manipulation | Act of Treason |
| :-: | :-: | :-: |
| 2 | Player B gains control | Player C gains control |
| 6 |  | Haste |

After Player C uses Act of Treason to steal the creature, the effect of Player B's Mass Manipulation has not actually ended. Both are still operating in layer 2, and it's just that Player C's Act of Treason has the newer timestamp, so it overrides Player B's Mass Manipulation. Once the Act of Treason effect ends, only Mass Manipulation is left operating in layer 2, so control of the creature goes to Player B.







### <font color="#FF0000">Text-Changing Effects</font>

![Mind Bend](https://images.guildmagesforum.tw/posts/Layer/511af7c2a83b.webp)
> ● **[Mind Bend](https://scryfall.com/card/10e/93/mind-bend)**:
> Change the text of target permanent by replacing all instances of one color word with another or one basic land type with another.
> ● **[Linden, the Steadfast Queen](https://scryfall.com/card/lci/80/subterranean-schooner)**:
> Whenever a white creature you control attacks, you gain 1 life.

Suppose you use Mind Bend to change "white" to "black" in Linden's ability description. The result is as follows:

| Layer | Mind Bend | Linden, the Steadfast Queen |
| :-: | :-: | :-: |
| 0 |  | Triggers when a white creature attacks |
| 3 | White -> Black |  |
| Final |  |  Triggers when a black creature attacks |

In fact, even without the concept of layers this problem would mostly make no difference, but because effects that modify rules text are so rare, I'll still introduce how they operate within layers.






### <font color="#FF0000">Leyline of the Guildpact + Devoid</font>

![Devoid](https://images.guildmagesforum.tw/posts/Layer/ac71053d5101.webp)
> ● **[Leyline of the Guildpact](https://scryfall.com/card/mkm/217/leyline-of-the-guildpact)**:
> Each nonland permanent you control is all colors.
> ● **[Thief of Existence](https://scryfall.com/card/mh3/174/thief-of-existence)**:
> Devoid (This card has no color.)

When I have both Leyline of the Guildpact and Thief of Existence on my side of the battlefield, is Thief of Existence's color actually colorless or five-color? Does the order in which the two entered change the result?

| Layer | Leyline of the Guildpact | Thief of Existence |
| :-: | :-: | :-: |
| 5 | Nonland permanents are all colors | Devoid (This card has no color) |

Both of these effects are color-changing effects in layer 5, so it seems like we'd compare timestamps? But note that devoid is a type of [characteristic-defining ability (CDA)](https://guildmagesforum.tw/Characteristic-Defining-Ability/) that defines color. Among effects in the same layer, a CDA takes effect before ordinary effects, so regardless of the order in which they entered (or rather, the timestamp order), Thief of Existence ends up being five colors.

> - 613.3 Within layers 2-6, apply effects from characteristic-defining abilities first, and then apply all other effects in timestamp order.






### <font color="#FF0000">Keyword Counters + Losing Abilities</font>

![Layer6](https://images.guildmagesforum.tw/posts/Layer/e479cb7fed2a.webp)
> ● **[Helica Glider](https://scryfall.com/card/iko/15/helica-glider)**:
> Helica Glider enters the battlefield with your choice of a flying counter or a first strike counter on it.
> ● **[Mystic Subdual](https://scryfall.com/card/iko/57/mystic-subdual)**:
> Enchanted creature gets -2/-0 and loses all abilities. (Mutating can't give this creature new abilities. It can gain abilities in other ways.)

Suppose Helica Glider got a flying counter when it entered, and was later enchanted with Mystic Subdual. Does it still have flying?

| Layer | Helica Glider | Mystic Subdual |
| :-: | :-: | :-: |
| 6 | Flying counter | Loses all abilities |
| 7c |  | -2/-0 |

Although many people feel from experience that counters take effect last and are hard to override, keyword counters actually operate in the same place as ordinary ability-granting effects, namely layer 6. So whether Helica Glider still has flying depends on the timestamps of the flying counter and Mystic Subdual. Since in this scenario Mystic Subdual has the newer timestamp, Helica Glider ends up losing flying.

But suppose that afterward you use some other effect to put a first strike counter on Helica Glider. Then it will have first strike, because this first strike counter's timestamp is later than Mystic Subdual's, so Mystic Subdual can't wash away this effect.






### <font color="#FF0000">Blood Moon + Urborg, Tomb of Yawgmoth</font>

![Blood Moon](https://images.guildmagesforum.tw/posts/Layer/efc898226420.webp)
> ● **[Blood Moon](https://scryfall.com/card/2xm/118/blood-moon)**:
> Nonbasic lands are Mountains.
> ● **[Urborg, Tomb of Yawgmoth](https://scryfall.com/card/tsr/287/urborg-tomb-of-yawgmoth)**:
> Each land is a Swamp in addition to its other land types. Hereafter abbreviated as "Urborg."

One of the most classic examples of Blood Moon: when Blood Moon and Urborg are on the battlefield at the same time, what land types do the lands on the battlefield have?

| Layer | Blood Moon | Urborg, Tomb of Yawgmoth |
| :-: | :-: | :-: |
| 4 | Nonbasic lands are Mountains | Lands are also Swamps |

Although both are type-changing effects in layer 4, Urborg itself is also affected by Blood Moon, and once Blood Moon's effect applies, it makes Urborg's original effect disappear. So there is a [dependency](https://guildmagesforum.tw/What-is-Dependency/) between these two effects: Urborg depends on Blood Moon, so Blood Moon's effect is processed first, and after Blood Moon applies, Urborg's ability is gone, so lands do not additionally get the Swamp type.

> - 613.8a An effect is said to "depend on" another if (a) it's applied in the same layer (and sublayer, if applicable) as the other effect; (b) applying the other would change the text or the existence of the first effect, what it applies to, or what it does to any of the things it applies to; and (c) neither effect is from a characteristic-defining ability or both effects are. Otherwise, the effects are independent of each other.







### <font color="#FF0000">Gingerbrute + Turn to Frog</font>

![Gingerbrute](https://images.guildmagesforum.tw/posts/Layer/2c57334091a2.webp)
> ● **[Gingerbrute](https://scryfall.com/card/woe/246/gingerbrute)**:
> {1}: Gingerbrute can't be blocked this turn except by creatures with haste.
> ● **[Turn to Frog](https://scryfall.com/card/clu/103/turn-to-frog)**:
> Until end of turn, target creature loses all abilities and becomes a blue Frog with base power and toughness 1/1.

Suppose my Gingerbrute has already activated its "can't be blocked except by creatures with haste" ability this turn, and after I declare it as an attacker, the opponent uses Turn to Frog on it, making it lose all abilities. Can this Gingerbrute now be blocked by creatures without haste?

| Layer | Gingerbrute | Turn to Frog |
| :-: | :-: | :-: |
| 4 |  | Becomes a Frog |
| 5 |  | Becomes blue |
| 6 |  | Loses all abilities |
| 7b |  | Becomes 1/1 |
| other | Can't be blocked except by creatures with haste | |

Although Turn to Frog does many things, in this problem we only need to focus on "loses all abilities" and ignore the effects of the other layers for now.

The most important concept in this problem is whether the way an effect works on an object is **"to make that object gain an ability."** If it makes it gain an ability, then it's a layer 6 effect, and you compare timestamps with Turn to Frog to decide which effect wins. But Gingerbrute's wording doesn't give it an ability; it simply produces an effect that acts on it. So in this case, even though Gingerbrute has lost all abilities, it can still only be blocked by creatures with haste.

To specifically judge whether an effect grants an ability, you can look at this rule:
> - 113.1a An ability can be a characteristic of an object that lets it affect the game. An object's abilities are defined by its rules text or by the effect that created it. Rules or effects can also grant abilities to an object. Abilities generate effects.
(Effects that grant abilities usually use the words "has, have, gains, gain.")






### <font color="#FF0000">Beamtown Beatstick + Turn to Frog</font>

![Equipment](https://images.guildmagesforum.tw/posts/Layer/701abb35b9c3.webp)
> ● **[Bear Cub](https://scryfall.com/card/fdn/552/bear-cub)**:
> A vanilla 2/2 creature.
> ● **[Beamtown Beatstick](https://scryfall.com/card/mom/131/beamtown-beatstick)**:
> Equipped creature gets +1/+0 and has menace. 
Whenever equipped creature deals combat damage to a player or battle, create a Treasure token.
> ● **[Turn to Frog](https://scryfall.com/card/clu/103/turn-to-frog)**:
> Until end of turn, target creature loses all abilities and becomes a blue Frog with base power and toughness 1/1.

After Bear Cub is equipped with Beamtown Beatstick, it gets turned into a blue Frog by Turn to Frog. What are Bear Cub's power and toughness now? Does it still have "menace" and "create a Treasure when it hits a player or battle"?

| Layer | Bear Cub (gained from the Equipment) | Beamtown Beatstick | Turn to Frog |
| :-: | :-: | :-: | :-: |
| 4 |  |  | Becomes a Frog |
| 5 |  |  | Becomes blue |
| 6 | Menace |  |  Loses all abilities |
| 7b |  |  |  Becomes 1/1 |
| 7c | +1/+0 |  |  |
| other |  | Treasure when it hits a player or battle | |

Let's start simple: Bear Cub's original stats are 2/2, but in layer 7b Turn to Frog sets it to 1/1, and then in layer 7c it gets +1/+0 from the Equipment, so the final result is 2/1. I trust this raises no doubts so far.

The main event is the Equipment's other two abilities. Again, first use the rule below to judge whether the effect grants an ability:

> - 113.1a An ability can be a characteristic of an object that lets it affect the game. An object's abilities are defined by its rules text or by the effect that created it. Rules or effects can also grant abilities to an object. Abilities generate effects.
(Effects that grant abilities usually use the words "has, have, gains, gain.")

You can see that Beamtown Beatstick's ability does make the equipped creature "gain menace," which is a layer 6 effect, just like Turn to Frog's "loses all abilities." Now we compare timestamps. The Equipment's timestamp is the moment it was attached, which in this scenario is earlier, so it gets overridden by Turn to Frog, and Bear Cub will not have menace. However, if you unattach the Equipment and then equip it again, its timestamp is updated, so even while Turn to Frog is still in effect, Bear Cub can gain menace again.

- 613.7e Each time an Aura, Equipment, or Fortification becomes attached to an object or player, that Aura, Equipment, or Fortification receives a new timestamp.

As for Beamtown Beatstick's other ability, "Whenever equipped creature deals combat damage to a player or battle, create a Treasure token," this isn't an ability granted to the equipped creature but the Equipment's own ability, so no matter how you nullify the equipped creature's abilities, it can't affect this one.

> Originally I wanted to use something like [Sword of Fire and Ice](https://scryfall.com/card/2xm/297/sword-of-fire-and-ice), the two-color protection Sword everyone is familiar with, as the example, but the rules text on that guy is so long that the table layout blows up no matter how I adjust it.






### <font color="#FF0000">Zur, Eternal Schemer + Tishana's Tidebinder</font>

![Zur](https://images.guildmagesforum.tw/posts/Layer/79e93cf5bf7d.webp)
> ● **[Zur, Eternal Schemer](https://scryfall.com/card/dmu/228/zur-eternal-schemer)**:
>Enchantment creatures you control have deathtouch, lifelink, and hexproof.
{1} <font color="#FFC000">{W}</font>: Target non-Aura enchantment you control becomes a creature with base power and toughness each equal to its mana value. It still has its other types.
> ● **[Overlord of the Hauntwoods](https://scryfall.com/card/dsk/194/overlord-of-the-hauntwoods)**:
Impending 4-{1} <font color="#00B050">{G}{G}</font> (If you cast this spell for its impending cost, it enters with four time counters and isn't a creature until the last is removed. At the beginning of your end step, remove a time counter from it.)
Whenever Overlord of the Hauntwoods enters or attacks, create a tapped colorless land token named Everywhere that is every basic land type.
> ● **[Tishana's Tidebinder](https://scryfall.com/card/lci/81/tishanas-tidebinder)**:
When Tishana's Tidebinder enters the battlefield, counter up to one target activated or triggered ability. If an ability of an artifact, creature, or planeswalker is countered this way, that permanent loses all abilities for as long as Tishana's Tidebinder remains on the battlefield.

Overlord of the Hauntwoods was cast with impending and is currently still a noncreature. With that as the premise, two questions arise:


- 1. Zur activates his ability targeting Overlord of the Hauntwoods. In response, Tidebinder is flashed in. Zur responds to Tidebinder's ETB by activating the ability on Overlord again. When the whole stack has finished resolving, what are Overlord's characteristics?

- 2. Zur has successfully turned Overlord of the Hauntwoods into a creature. When Overlord's attack trigger is on the stack, Tidebinder is flashed in in response, causing Overlord to lose its abilities. What are Overlord's characteristics now?

| Layer | Zur, Eternal Schemer | Overlord of the Hauntwoods | Tishana's Tidebinder |
| :-: | :-: | :-: | :-: |
| 4 | Non-Aura enchantments are also creatures | Not a creature (impending) |  |
| 6 | Enchantment creatures have deathtouch, lifelink, hexproof |  | Loses all abilities |
| 7b | Becomes N/N |  |  |

- **1. Tidebinder counters Zur:**

As the stack starts resolving, first Zur's ability resolves, turning Overlord of the Hauntwoods into a 5/5 creature. Since Zur's abilities are all still intact at this point, Overlord of course has deathtouch, lifelink, and hexproof. But later, when Tidebinder's ETB resolves, Zur loses all abilities, so naturally he can no longer give Overlord those abilities. Overlord's own attack trigger is unaffected, though.

> A quick note: although the table above puts "Enchantment creatures have deathtouch, lifelink, hexproof" in Zur's layer 6, that is the position when Zur's ability affects other enchantment creatures. For Zur himself, this ability is a layer 0 original characteristic.

- **2. Tidebinder counters Overlord of the Hauntwoods:**

Zur's ability grants Overlord deathtouch, lifelink, and hexproof, while Tidebinder makes Overlord lose its abilities. Both of these apply in layer 6, so we compare timestamps. The source of Zur's effect is his static ability, so its timestamp is the same as when Zur entered the battlefield. The conclusion is therefore that Tidebinder has the newer timestamp, and Overlord loses all abilities, becoming a 5/5 creature with no abilities.

> ![Overlord](https://images.guildmagesforum.tw/posts/Layer/4e64e207bcde.webp)






### <font color="#FF0000">Regal Bunnicorn + Dress Down</font>

![CDA](https://images.guildmagesforum.tw/posts/Layer/941b986c2ec5.webp)
> ● **[Regal Bunnicorn](https://scryfall.com/card/woe/25/regal-bunnicorn)**:
> Regal Bunnicorn's power and toughness are each equal to the number of nonland permanents you control.
> ● **[Dress Down](https://scryfall.com/card/mh2/39/dress-down)**:
> Creatures lose all abilities.

Let's see what happens when a [characteristic-defining ability (CDA)](https://guildmagesforum.tw/Characteristic-Defining-Ability/) that defines power/toughness as ★, like Regal Bunnicorn's, meets an effect that makes creatures lose abilities.

| Layer | Regal Bunnicorn | Dress Down |
| :-: | :-: | :-: |
| 6 |  | Loses all abilities |
| 7a | ★ is the number of nonland permanents |  |

A CDA is a kind of ability, and it is affected by effects that remove abilities. No matter what Regal Bunnicorn's ★ is currently, as long as Dress Down is on the battlefield, Regal Bunnicorn loses its CDA, becomes a 0/0, and dies right away.

- 208.2a Some cards have characteristic-defining abilities that set their power and/or toughness according to some defined set of conditions. Such an ability works in all zones, even outside the game. If the ability needs to use a number that can't be determined, including inside a calculation, use 0 instead of that number.



### <font color="#FF0000">Hexdrinker + Dress Down</font>

![Hexdrinker](https://images.guildmagesforum.tw/posts/Layer/db72233fc543.webp)
> ● **[Hexdrinker](https://scryfall.com/card/mh1/168/hexdrinker)**:
> Level 8+: 6/6, protection from everything.
> ● **[Dress Down](https://scryfall.com/card/mh2/39/dress-down)**:
> Creatures lose all abilities.

There is currently a Hexdrinker on the battlefield that has been leveled up to level 8, and then Dress Down enters. How is Hexdrinker affected?

First, some background knowledge: a leveler's level ability is a kind of static ability. A leveler, depending on the level it's currently at, has base power/toughness set to specified values and has the corresponding abilities, and these of course also fall under the layer system.

| Layer | Hexdrinker | Dress Down |
| :-: | :-: | :-: |
| 6 | Protection from everything | Loses all abilities |
| 7b | Becomes 6/6 |  |

In layer 6 there are two effects that add or remove abilities acting on Hexdrinker, and there is a [dependency](https://guildmagesforum.tw/What-is-Dependency/) between them. The conclusion is that Dress Down's "loses all abilities" effect wins out. Regardless of the timestamps of the two effects, Hexdrinker ends up losing all abilities, and that includes the effect that sets power and toughness in layer 7b that would apply afterward. So once Dress Down enters the battlefield, Hexdrinker is doomed to be a 2/1 creature with no abilities.






### <font color="#FF0000">Ragavan, Nimble Pilferer + Dress Down</font>

![Dash](https://images.guildmagesforum.tw/posts/Layer/d522b6403f01.webp)
> ● **[Ragavan, Nimble Pilferer](https://scryfall.com/card/mh2/138/ragavan-nimble-pilferer)**:
> Dash {1} <font color="#FF0000">{R}</font> (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)
> ● **[Dress Down](https://scryfall.com/card/mh2/39/dress-down)**:
> Creatures lose all abilities.

What happens if you cast Ragavan, Nimble Pilferer with dash while Dress Down is already on the battlefield?

Dress Down only governs creatures on the battlefield. It won't make the Ragavan in your hand lose the ability to be cast with dash, and the ability that triggers when Ragavan hits a player will undoubtedly be erased by Dress Down. I trust neither point is controversial, so I'll skip them below.

Dash actually comprises three abilities. One is its own alternative-cost casting rule, and the other two are:
- If you chose to pay this spell's dash cost, return the permanent this spell becomes to its owner's hand at the beginning of the next end step.
- As long as this permanent's dash cost was paid, it has haste.

| Layer | Ragavan, Nimble Pilferer | Dress Down |
| :-: | :-: | :-: |
| 6 | Haste (from dash) | Loses all abilities |
| Other | Returns to hand at end of turn |  |

After filling these effects into the table, doesn't the problem look much simpler? 

First, the haste granted by dash and Dress Down's loss of abilities are both in layer 6, and the two have a [dependency](https://guildmagesforum.tw/What-is-Dependency/). No matter whether the dashed Ragavan or Dress Down entered first, Ragavan will lose haste.

What about the "return to hand at the beginning of the end step" effect? In fact, when you cast with dash, you create a **delayed triggered ability** that returns the permanent to hand at the end step. This effect is not Ragavan's own ability, and doesn't even belong to the effects governed by the seven layers, so it is completely unaffected by Dress Down.

The conclusion is that if you dash in Ragavan while Dress Down is out, it will have no haste and none of its original abilities, but it will still return to hand at the beginning of the end step.






### <font color="#FF0000">Magus of the Moon + Oko, Thief of Crowns</font>

![Magus Oko](https://images.guildmagesforum.tw/posts/Layer/f3d78bc6063a.webp)
> ● **[Magus of the Moon](https://scryfall.com/card/tsr/175/magus-of-the-moon)**:
> Nonbasic lands are Mountains.
> ● **[Oko, Thief of Crowns](https://scryfall.com/card/eld/197/oko-thief-of-crowns)**:
> [+1]: Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3.

This is yet another classic layers problem. If Magus of the Moon on the battlefield is turned into an Elk by Oko's [+1], will Magus of the Moon's "nonbasic lands are Mountains" effect disappear? A player unfamiliar with layers will surely assume that since Oko says "loses all abilities," of course it's gone!

But the reason this problem is a classic is that the answer is very counterintuitive: Magus of the Moon's effect still exists. Let's see why.

| Layer | Magus of the Moon | Oko [+1] |
| :-: | :-: | :-: |
| 4 | Nonbasic lands are Mountains | Becomes an Elk creature |
| 5 |  | Becomes green |
| 6 |  | Loses all abilities |
| 7b |  | Becomes 3/3 |

After reading the table, I trust you've noticed that Magus of the Moon's ability applies in layer 4, while "loses all abilities" is in layer 6. So the layer 4 effect applies first, turning nonbasic lands into Mountains, and only then does layer 6's loss of all abilities apply, but by then it's too late to stop Magus of the Moon. Swapping Oko for any other card that makes creatures lose abilities doesn't change the result (such as [Turn to Frog](https://scryfall.com/card/clu/103/turn-to-frog), [Dress Down](https://scryfall.com/card/mh2/39/dress-down), and so on).






### <font color="#FF0000">Blood Moon + Ashaya, Soul of the Wild</font>

![Ashaya](https://images.guildmagesforum.tw/posts/Layer/5d74e4fbbd99.webp)
> ● **[Blood Moon](https://scryfall.com/card/2xm/118/blood-moon)**:
> Nonbasic lands are Mountains.
> ● **[Ashaya, Soul of the Wild](https://scryfall.com/card/znr/179/ashaya-soul-of-the-wild)**:
> Ashaya, Soul of the Wild's power and toughness are each equal to the number of lands you control.
Nontoken creatures you control are Forest lands in addition to their other types.

This example already appeared once in the [dependency](https://guildmagesforum.tw/What-is-Dependency/) article, but back then only the conclusion was given without a full explanation. This time, let's explain it thoroughly.

| Layer | Blood Moon | Ashaya, Soul of the Wild |
| :-: | :-: | :-: |
| 4 | Nonbasic lands are Mountains | Nontoken creatures are also Forests |
| 7a |  | ★ is the number of lands you control|

Now there are two type-changing effects in layer 4 that need to apply. Normally this would come down to timestamps, but Ashaya's ability turns herself into a land, which changes what Blood Moon's effect applies to. The two effects therefore have a dependency, and **Blood Moon depends on Ashaya**. That is, Ashaya's effect of giving creatures the Forest land type applies first, and only then does Blood Moon's effect apply.

Basic land types share a characteristic: when something gains such a type, it automatically gains the ability "{T}: Add one mana of the corresponding color." An ability like Ashaya's, which grants an additional type, is relatively simple to handle: it just adds something new on top of the existing types and abilities. But Blood Moon's wording smuggles in a very troublesome rule: when you make a land **"become"** a specified basic land type, the whole card loses its original abilities and **land types**. The exact rule is as follows:

> - 305.7 If an effect sets a land's subtype to one or more of the basic land types, the land no longer has its old land type. It loses all abilities generated from its rules text, its old land types, and any copy effects affecting that land, and it gains a mana ability corresponding to its new land type(s). Note that this doesn't remove any abilities that were granted to the land by other effects. Setting a land's subtype doesn't add or remove any card type (such as creature) or supertype (such as basic, legendary, and snow) the land may have. If a land gains one or more land types in addition to its own, it keeps its land types and rules text, and it gains the new land types and mana abilities.

Although this seems to involve layer 6's ability adding and removing, these do not apply in layer 6; they are a special case within layer 4's type-changing effects!

Let's continue solving the layers. The current state, solved up to layer 4, is:
Ashaya makes all your nontoken creatures additionally Forest lands.
Blood Moon makes all nonbasic lands into Mountains, and these lands include all your nontoken creatures.
The creatures of yours that were turned into Mountains all lose their original abilities, Ashaya herself included. But this "becomes a basic land type" wording only overwrites the original land types; the creature types remain.
<font color="#FF0000">Conclusion: your nontoken creatures are all Mountain land creatures (the layer 4 effects have all been solved by this point, and it does not loop back to the earlier steps into an infinite loop because Ashaya lost her abilities).</font>

It's not over yet. Ashaya still has a CDA in layer 7a that defines her own power/toughness. But remember that Blood Moon made her lose all abilities? That means Ashaya has now lost the ability that defines her own power/toughness, and under the following rule, ★ is set to 0 in this situation. And since Blood Moon didn't strip her of the creature type, she ends up a 0/0 land creature, and as a creature with 0 toughness she dies!

> - 208.2a Some cards have characteristic-defining abilities that set their power and/or toughness according to some defined set of conditions. Such an ability works in all zones, even outside the game. If the ability needs to use a number that can't be determined, including inside a calculation, use 0 instead of that number.

Normally this problem ends here with Ashaya dying, her effect disappearing, and the board returning to the state with only Blood Moon. But here's the fun part: what if Ashaya had a +1/+1 counter or something similar on her, so that she doesn't die after the earlier layers are solved? Then the earlier layer 4 effects keep applying, and all your creatures (including ones entering later) become land creatures, with their subtypes being their original creature types plus Mountain, losing all abilities and gaining Mountain's ability to tap for red mana.






### <font color="#FF0000">Blood Moon + Ashaya + Rootpath Purifier</font>

![Rootpath Purifier](https://images.guildmagesforum.tw/posts/Layer/3eb72ca72533.webp)
> ● **[Blood Moon](https://scryfall.com/card/2xm/118/blood-moon)**:
> Nonbasic lands are Mountains.
> ● **[Ashaya, Soul of the Wild](https://scryfall.com/card/znr/179/ashaya-soul-of-the-wild)**:
> Ashaya, Soul of the Wild's power and toughness are each equal to the number of lands you control.
Nontoken creatures you control are Forest lands in addition to their other types.
> ● **[Rootpath Purifier](https://scryfall.com/card/brc/24/rootpath-purifier)**:
> Lands you control and land cards in your library are basic.

An extension of the previous problem: what if you now also have a Rootpath Purifier on the battlefield? Although there are more objects in this problem, solving it actually becomes simpler.

| Layer | Blood Moon | Ashaya, Soul of the Wild | Rootpath Purifier |
| :-: | :-: | :-: | :-: |
| 4 | Nonbasic lands are Mountains | Nontoken creatures are also Forests | Lands are basic |
| 7a |  | ★ is the number of lands you control| |

Now there are three type-changing effects in layer 4, and they all depend on one another. Following the order of application, the end result is: 
1. Ashaya: all your nontoken creatures are additionally Forest lands.
2. Rootpath Purifier: because your creatures are lands now, it can affect them, giving them the basic supertype in addition.
3. Blood Moon: because all your lands have the basic supertype, they fall outside Blood Moon's scope.

> If you want to ask why the final order comes out this way, you can review the rule definition in the [dependency](https://guildmagesforum.tw/What-is-Dependency/) article: if applying effect A first would change what effect B applies to, then effect B depends on effect A.

So in the end your nontoken creatures additionally gain the basic land type Forest and gain Forest's ability to tap for green mana, while Blood Moon, because of your Rootpath Purifier, can hardly do anything to you.






### <font color="#FF0000">Graaz, Unstoppable Juggernaut + Vraska, Betrayal's Sting</font>

![Juggernaut](https://images.guildmagesforum.tw/posts/Layer/d5b84b829724.webp)
> ● **[Graaz, Unstoppable Juggernaut](https://scryfall.com/card/one/229/graaz-unstoppable-juggernaut)**:
Juggernauts you control attack each combat if able.
Juggernauts you control can't be blocked by Walls.
Each other creature you control has base power and toughness 5/3 and is a Juggernaut in addition to its other creature types.
> ● **[Vraska, Betrayal's Sting](https://scryfall.com/card/one/115/vraska-betrayals-sting)**:
> [-2]: Target creature becomes a Treasure artifact with "{T}, Sacrifice this artifact: Add one mana of any color" and loses all other card types and abilities.

I control a Graaz, Unstoppable Juggernaut, and it's just been hit by Vraska, Betrayal's Sting's [-2]. Do the other creatures I control remain 5/3 and additionally Juggernauts?

| Layer | Graaz, Unstoppable Juggernaut | Vraska, Betrayal's Sting [-2] |
| :-: | :-: | :-: |
| 4 | Other creatures are also Juggernauts | Becomes a Treasure, loses other types |
| 6 |  | Loses all abilities |
| 7b | Other creatures become 5/3 |  |

"Juggernauts you control attack each combat if able" and "Juggernauts you control can't be blocked by Walls" have little to do with layers. They don't change an object's characteristics but change combat rules, and once it "loses all abilities," these effects naturally no longer exist either.

If you remember the [Magus of the Moon](https://scryfall.com/card/tsr/175/magus-of-the-moon) + [Oko](https://scryfall.com/card/eld/197/oko-thief-of-crowns) case above, you'll know that layer 4's type change applies before layer 6's "loses all abilities," so my other creatures still have the Juggernaut type. But by the same logic, after layer 6's "loses all abilities" is processed, the layer 7 "other creatures become 5/3" should be gone, right?

The answer to this one is very counterintuitive: your other creatures are still 5/3. This is because this scenario runs into a relatively rarely used rule:

> - 613.6 If an effect should be applied in different layers and/or sublayers, the parts of the effect apply in each relevant layer or sublayer. If an effect starts to apply in one layer and/or sublayer, it will continue to be applied to the same set of objects in other layers and/or sublayers, even if the ability generating the effect is removed during this process.

Put simply, although Graaz's "Each other creature you control has base power and toughness 5/3 and is a Juggernaut in addition to its other creature types" touches multiple layers, that whole sentence is one complete effect, and under rule 613.6, once an effect starts to apply in some layer, its effects in other layers apply as well. In this problem, the first to apply is Graaz's layer 4 effect (Vraska's [-2] also acts in layer 4, but the timestamp of this loyalty ability acting on Graaz is certainly later than the timestamp of Graaz entering the battlefield). The instant Graaz's layer 4 effect applies, it finishes its work in the other layers too, so even the "loses all abilities" effect afterward is too late to stop it.






### <font color="#FF0000">Mutate + Losing Abilities</font>

![Mutate 1](https://images.guildmagesforum.tw/posts/Layer/cbee395b2924.webp)
> ● **[Dreamtail Heron](https://scryfall.com/card/iko/47/dreamtail-heron)**:
> Mutate {3}{U}. Whenever this creature mutates, draw a card.
> ● **[Mystic Subdual](https://scryfall.com/card/iko/57/mystic-subdual)**:
> Enchanted creature gets -2/-0 and loses all abilities. (Mutating can't give this creature new abilities. It can gain abilities in other ways.)

I currently have a [Bear Cub](https://scryfall.com/card/fdn/552/bear-cub) with a Mystic Subdual on it. Then I mutate Dreamtail Heron onto the Bear Cub, choosing to put Dreamtail Heron on top. What is the result of the mutation? Can it trigger Dreamtail Heron's "whenever this creature mutates, draw a card"?

| Layer | Dreamtail Heron | Mystic Subdual |
| :-: | :-: | :-: |
| 1a | Mutate |  |
| 6 |  | Loses all abilities |
| 7c |  | -2/-0 |
| Other | Draw a card when it mutates |  |

When mutating changes a creature's characteristics, it applies in layer 1a, changing this object's [copiable values](https://guildmagesforum.tw/What-is-Copiable-Value/). That means any effect that applies in the layers afterward will certainly overwrite the characteristics it got from mutating.

For this problem, the result of the mutation is a 1/4 Dreamtail Heron with no abilities at all, and the draw ability won't trigger on mutating, either.

This problem aims to point out the basic operating principle of mutate in layers. With this concept in hand, you can face the next classic mutate example.

> From the reminder text in the parentheses after [Mystic Subdual](https://scryfall.com/card/iko/57/mystic-subdual), you can see that the design intent of this card is to remind players of how mutate works.






### <font color="#FF0000">Nissa, Who Shakes the World + Gemrazer</font>

![Mutate 2](https://images.guildmagesforum.tw/posts/Layer/f252b55387cf.webp)
> ● **[Nissa, Who Shakes the World](https://scryfall.com/card/war/169/nissa-who-shakes-the-world)**:
> [+1]: Put three +1/+1 counters on up to one target noncreature land you control. Untap it. It becomes a 0/0 Elemental creature with vigilance and haste that's still a land.
> ● **[Forest](https://scryfall.com/card/fdn/291/forest)**:
> Basic Land - Forest
> ● **[Gemrazer](https://scryfall.com/card/iko/155/gemrazer)**:
> Mutate {1} <font color="#00B050">{G}{G}</font>.

This is a classic layers problem that appeared frequently in Standard back in the day. Among the common rules questions in actual play I've seen in my MTG career <font color="#AAAAAA">(non-EDH formats)</font>, this one is undoubtedly in the top three for difficulty.

Nissa, Who Shakes the World uses her [+1] to turn a basic Forest into a land creature, and then Gemrazer mutates onto the Forest. When Gemrazer is placed on top or on the bottom, what characteristics will this creature have respectively?

Since this problem doesn't include any effect that makes things lose abilities, this creature has vigilance, haste, reach, trample, and the ability that triggers on mutating. I won't repeat that below.

| Layer | Nissa, Who Shakes the World [+1] | Gemrazer |
| :-: | :-: | :-: |
| 1a |  | Mutate |
| 4 | Land is also an Elemental creature |  |
| 6 | Gains vigilance, haste |  |
| 7b | Becomes 0/0 |  |
| 7c | Three +1/+1 counters |  |

- **Question 1: When Gemrazer is mutated on top, what are this creature's final power/toughness?**

To a player with no concept of layers, it's natural to think it's a 4/4 creature with 3 +1/+1 counters on it, so the answer is 7/7.

But let's go back and look at which continuous effects act on this creature. You'll find that the 4/4 is the copiable value modified by mutate in layer 1a, and above it in layer 7b there's Nissa's "it becomes a 0/0" effect, which means after layer 7b it's a 0/0, then in layer 7c the +1/+1 counters apply, and in the end it's a 3/3! (A 0/0 creature with 3 +1/+1 counters.)

- **Question 2: When Gemrazer is mutated on top or on the bottom, what are this creature's types? And does it have the ability to tap for green mana?**

These two questions are really both asking about the creature's current types, because the ability of a Forest to "{T}: Add one green mana" is granted by the type rules of the basic land type. Having the Forest type automatically gives this ability, and conversely a Forest that loses the Forest type automatically loses the ability.

There are two effects currently trying to modify the types: one is the layer 1a type modification when Gemrazer mutates on top, and the other is Nissa's [+1] in layer 4, "it becomes an Elemental creature that's still a land." The rules about type modification are a bit long, so here are the simple conclusions first:

1. If a card type is removed from an object, the subtypes under that card type are removed along with it.
2. If an effect makes an object become type A but it still keeps its original types, then it is **type A added on top of its current types**.

> The full rules are as follows:
> - 205.1a Some effects set an object's card type. In most such cases, the new card type(s) replaces any existing card types. However, an object that's an instant or sorcery retains that card type. Counters, stickers, effects, and damage remain with an object even if it ceases to be a particular card type. Similarly, when an object's subtype or subtypes change, any new subtypes will replace any existing subtypes from the appropriate set (creature types, land types, artifact types, enchantment types, planeswalker types, or spell types). **If an object's card type is removed, the subtypes correlated with that card type will remain if they are also subtypes of a card type the object currently has; otherwise, they are also removed for the entire time the object's card type is removed.** Removing an object's subtype doesn't affect its card types at all.
> - 205.1b Some effects change an object's card type, supertype, or subtype but specify that it's still the previous card type, supertype, or subtype. In such cases, all of the object's previous card types, supertypes, and subtypes are retained. This rule applies to effects that use phrases such as **"in addition to its other types"** (Note: the Chinese rules text renders this phrase in two different ways), or that say the object is "still a [type]." Some effects state that an object becomes an "artifact creature"; this also lets the object retain all of its previous card types and subtypes. Some effects state that an object becomes a "[creature type] artifact creature"; this also allows the object to retain all of its previous card types and all of its previous subtypes except creature types, but the old creature types are replaced.

Now we can answer the original questions:

| Layer | Gemrazer on top | Gemrazer on bottom | 
| :-: | :-: | :-: | 
| 1a | Gemrazer: Creature - Beast | Forest: Basic Land - Forest  | 
| 4  | Also Creature - Elemental  | Also Creature - Elemental |
| Final | Creature - Elemental / Beast | Basic Land Creature - Elemental / Forest |

When Gemrazer is on top, it loses the Forest type, and so it also loses the Forest's mana ability. The phrase "that's still a land" in Nissa's [+1] only means it adds types without changing the existing types, but after mutating modifies the characteristics in layer 1a, it is no longer a land, so Nissa's [+1] does not let it keep the land type.






### <font color="#FF0000">Conspiracy + Life and Limb 1</font>

![Life and Limb 1](https://images.guildmagesforum.tw/posts/Layer/f20111d8f1a3.webp)
> ● **[Conspiracy](https://scryfall.com/card/acr/88/conspiracy)**:
> As Conspiracy enters the battlefield, choose a creature type.
Creature cards you own that aren't on the battlefield, creature spells you control, and creatures you control are the chosen type.
> ● **[Life and Limb](https://scryfall.com/card/tsr/215/life-and-limb)**:
> All Forests and all Saprolings are 1/1 green Saproling creatures and Forest lands in addition to their other types.
> ● **[Savannah Lions](https://scryfall.com/card/dmr/24/savannah-lions)**:
> A white Cat.

Currently my side of the battlefield has no creatures and no Forest lands, only Conspiracy (declared creature type: Saproling) + Life and Limb. Now a Savannah Lions enters the battlefield. How do Savannah Lions' characteristics change?

| Layer | Conspiracy | Life and Limb | 
| :-: | :-: | :-: | 
| 4 | Creatures are Saprolings | Forests & Saprolings are Saproling<font color="#AAAAAA"> creatures</font> + Forest<font color="#AAAAAA"> lands</font>, still keeping their original types | 
| 5 |  | Becomes green | 
| 7b |  | Becomes 1/1 | 

Conspiracy & Life and Limb are both effects that apply in layer 4, but look closely: if Conspiracy's effect is applied first, changing Savannah Lions' creature type to Saproling, Savannah Lions then also becomes something Life and Limb affects. So there is a [dependency](https://guildmagesforum.tw/What-is-Dependency/) between the two effects (Life and Limb depends on Conspiracy), and Conspiracy's effect applies first, then Life and Limb.

After layer 4, Savannah Lions is: Land Creature - Saproling / Forest. Afterward it is turned green in layer 5 and becomes 1/1 in layer 7b.







### <font color="#FF0000">Conspiracy + Life and Limb 2</font>

![Life and Limb 2](https://images.guildmagesforum.tw/posts/Layer/ef1476e7d362.webp)
> ● **[Conspiracy](https://scryfall.com/card/acr/88/conspiracy)**:
> As Conspiracy enters the battlefield, choose a creature type.
Creature cards you own that aren't on the battlefield, creature spells you control, and creatures you control are the chosen type.
> ● **[Life and Limb](https://scryfall.com/card/tsr/215/life-and-limb)**:
> All Forests and all Saprolings are 1/1 green Saproling creatures and Forest lands in addition to their other types.
> ● **[Savannah Lions](https://scryfall.com/card/dmr/24/savannah-lions)**:
> A white Cat.
> ● **[Forest](https://scryfall.com/card/fdn/291/forest)**:
> Basic Land - Forest

Continuing from the previous problem, in the same scenario, but with a basic Forest added to my battlefield. Does anything change?

| Layer | Conspiracy | Life and Limb | 
| :-: | :-: | :-: | 
| 4 | Creatures are Saprolings | Forests & Saprolings are Saproling<font color="#AAAAAA"> creatures</font> + Forest<font color="#AAAAAA"> lands</font>, still keeping their original types | 
| 5 |  | Becomes green | 
| 7b |  | Becomes 1/1 | 

In the previous solution we learned that Life and Limb depends on Conspiracy, but with the Forest added the situation changes dramatically. Suppose the Forest first applies Life and Limb. That makes it a creature, and being a creature means it also becomes something Conspiracy's effect applies to, so Conspiracy depending on Life and Limb also holds.

Now each of the two effects depends on the other. How do we solve this infinite-loop-like situation? This is where the following rule comes in:
> - 613.8b An effect dependent on one or more other effects waits to apply until just after all of those effects have been applied. If multiple dependent effects would apply simultaneously in this way, they do so in timestamp order. If dependent effects form a dependency loop, then this rule is ignored and the effects in the dependency loop are applied in timestamp order.

This situation is exactly the **"dependency loop"** mentioned in 613.8b. When a dependency loop occurs, the dependency disappears, and the two effects determine their order of application only by [timestamp](https://guildmagesforum.tw/What-is-Time-Stamp/). Let's solve it by assuming each of the two timestamp orders in turn:

- **Scenario 1. Conspiracy -> Life and Limb**

This timestamp order is the same as the scenario in the previous problem, so Savannah Lions goes through the same thing as in the previous problem. As for the Forest, it isn't a creature yet when Conspiracy applies, so it isn't affected by Conspiracy, and its later changes come purely from Life and Limb.

| Layer | Savannah Lions | Forest | 
| :-: | :-: | :-: | 
| 4 (Conspiracy) | Creature - Saproling | <font color="#FF0000">Doesn't apply</font> |
| 4 (Life and Limb) | Land Creature - Saproling / Forest | Basic Land Creature - Saproling / Forest | 
| 5 (Life and Limb) | Becomes green | Becomes green | 
| 7b (Life and Limb) | Becomes 1/1  | Becomes 1/1 | 

- **Scenario 2. Life and Limb -> Conspiracy**

Now reverse the situation and let Life and Limb apply first. How do the results change?

| Layer | Savannah Lions | Forest | 
| :-: | :-: | :-: | 
| 4 (Life and Limb) | <font color="#FF0000">Doesn't apply</font> | Basic Land Creature - Saproling / Forest | 
| 5 (Life and Limb) | <font color="#FF0000">Doesn't apply</font> | Becomes green | 
| 7b (Life and Limb) | <font color="#FF0000">Doesn't apply</font> | Becomes 1/1 | 
| 4 (Conspiracy) | Creature - Saproling | Basic Land Creature - Saproling / Forest |

<font color="#AAAAAA"> If you're thinking "what the heck am I looking at," you're a normal person.</font>

The first to apply here is Life and Limb's layer 4 type modification. The basic Forest becomes "Basic Land Creature - Saproling / Forest," while Savannah Lions hasn't yet had its type modified by Conspiracy and is still a Cat, so Life and Limb's effect doesn't apply to it. So far that should be easy to follow. But why does the next step jump to Life and Limb's layer 5? Where did Conspiracy, which is also in layer 4, go? Let's look back at the earlier rule:
> - 613.6 If an effect should be applied in different layers and/or sublayers, the parts of the effect apply in each relevant layer or sublayer. If an effect starts to apply in one layer and/or sublayer, it will continue to be applied to the same set of objects in other layers and/or sublayers, even if the ability generating the effect is removed during this process.

Life and Limb modifies three layers within a single effect, so once one of its layers starts to operate, its effects on the other layers apply as well. Since Savannah Lions isn't a Forest or a Saproling at this point, it's outside Life and Limb's scope, so Life and Limb's effect doesn't apply to Savannah Lions at all. By the time it's Conspiracy's turn to apply, the objects Life and Limb affects have already been determined, and it's too late for Conspiracy to modify Savannah Lions' type.






### <font color="#FF0000">Devotion God + Opalescence</font>

![Enchantment god](https://images.guildmagesforum.tw/posts/Layer/5c712516d59b.webp)
> ● **[Heliod, Sun-Crowned](https://scryfall.com/card/cmm/29/heliod-sun-crowned)**:
> As long as your devotion to white is less than five, Heliod isn't a creature. (Hereafter abbreviated as "Heliod.")
> ● **[Opalescence](https://scryfall.com/card/uds/13/opalescence)**:
> Each other non-Aura enchantment is a creature in addition to its other types and has base power and toughness each equal to its mana value.

When Heliod and Opalescence are on the battlefield at the same time, does Heliod have the creature type? And what are its power and toughness?

| Layer | Heliod, Sun-Crowned | Opalescence |
| :-: | :-: | :-: |
| 4 | Not a creature when white devotion < 5 | Enchantments are also creatures |
| 7b |  | Becomes N/N |


Heliod's "isn't a creature when devotion < 5" and Opalescence's "enchantments are also creatures" are both type-changing effects in layer 4, and there is no [dependency](https://guildmagesforum.tw/What-is-Dependency/) between them. Which effect applies first doesn't affect the other, so these two effects simply compare [timestamps](https://guildmagesforum.tw/What-is-Time-Stamp/): the one with the earlier timestamp applies first but gets overridden by the one that applies later.

If Heliod entered the battlefield first, Opalescence's effect wins, and Heliod is bound to be a creature.
If Opalescence entered first, Heliod's "isn't a creature when devotion < 5" effect wins, and when your white devotion is < 5, Heliod loses the creature type.

But regardless of the order in which Heliod and Opalescence entered, Opalescence's power/toughness-setting ability will take effect, so Heliod's power and toughness are always equal to its mana value.






### <font color="#FF0000">Devotion God + Humility</font>

![Enchantment god 2](https://images.guildmagesforum.tw/posts/Layer/6cf6765014e9.webp)
> ● **[Heliod, Sun-Crowned](https://scryfall.com/card/cmm/29/heliod-sun-crowned)**:
> As long as your devotion to white is less than five, Heliod isn't a creature.
> ● **[Humility](https://scryfall.com/card/tpr/16/humility)**:
> All creatures lose all abilities and have base power and toughness 1/1.

This problem is also a classic of the devotion gods. Without further ado, here's the table:

| Layer | Heliod, Sun-Crowned | Humility |
| :-: | :-: | :-: |
| 4 | Not a creature when white devotion < 5 |  |
| 6 |  | Creatures lose all abilities |
| 7b |  | Becomes 1/1 |

Now let's try to answer the following three questions:


- 1. Heliod is on the battlefield, and Humility enters, with white devotion < 5:
Because Heliod isn't a creature at this point, it isn't something Humility affects at all, so Humility has no effect on it.

- 2. Heliod is on the battlefield, white devotion >= 5, and Humility enters:
Now Heliod is a creature, so it is affected by Humility and becomes a 1/1 creature with no abilities.

- 3. Continuing from the result of the previous question, your white devotion now drops below 5:
This is the classic part of the devotion god problem. Because Heliod has already lost all abilities to Humility, people wonder whether it has even lost the ability to check devotion.
In fact, once you fill out the layer table, the answer is already there: the ability to check devotion is a layer 4 type-changing effect, and it took effect long before layer 6's loss of abilities. So the answer to this problem is quite simple: Heliod keeps checking devotion at all times to decide whether it is a creature, and if it's a creature, it is affected by Humility, regardless of when Humility entered or whether Heliod was a creature at that time.






### <font color="#FF0000">Humility + Gideon of the Trials</font>

![Gideon](https://images.guildmagesforum.tw/posts/Layer/5f1a52fc9bd0.webp)
> ● **[Humility](https://scryfall.com/card/tpr/16/humility)**:
> All creatures lose all abilities and have base power and toughness 1/1.
> ● **[Gideon of the Trials](https://scryfall.com/card/akh/14/gideon-of-the-trials)**:
> [0]: Until end of turn, Gideon of the Trials becomes a 4/4 Human Soldier creature with indestructible that's still a planeswalker. Prevent all damage that would be dealt to him this turn.

With Humility on the battlefield, what kind of creature does Gideon of the Trials become after using [0] to become a creature?

| Layer | Humility | Gideon of the Trials [0] |
| :-: | :-: | :-: |
| 4 |  | Also a Human Soldier creature |
| 6 | Creatures lose all abilities | Indestructible |
| 7b | Becomes 1/1 | Becomes 4/4 |
| other |  | Prevent damage |

The first to apply is Gideon's layer 4 type-changing effect, which makes him a creature at this point, so he also becomes something Humility affects. But note that the effects by which Gideon gives himself abilities and power/toughness when he transforms are in the same layers as Humility's, so the two compare timestamps. In this problem, Humility entered first, so Gideon's ability, which has the newer timestamp, wins out. As a result, Humility doesn't interfere with Gideon much.

However, if Humility leaves the battlefield and comes back, giving Humility the newer timestamp, then Gideon becomes a 1/1 planeswalker creature with no abilities.

As for "Prevent all damage that would be dealt to him this turn," this doesn't modify Gideon's characteristics but merely creates an effect acting on Gideon. This doesn't fall within the scope of layers, so even if Gideon loses his abilities, this effect continues to protect him.






### <font color="#FF0000">Humility + Opalescence</font>

![Humility](https://images.guildmagesforum.tw/posts/Layer/82c26e4059a9.webp)
> ● **[Humility](https://scryfall.com/card/tpr/16/humility)**:
> All creatures lose all abilities and have base power and toughness 1/1.
> ● **[Opalescence](https://scryfall.com/card/uds/13/opalescence)**:
> Each other non-Aura enchantment is a creature in addition to its other types and has base power and toughness each equal to its mana value.

Welcome to the most classic layers problem. Any column discussing layers is destined to run into **Humility + Opalescence**. Although questions about Humility are often described as a flood-and-beast that nobody but a judge can understand, after being bombarded by the examples above, you may find this problem surprisingly easy to look back on.

| Layer | Humility | Opalescence |
| :-: | :-: | :-: |
| 4 |  | Other non-Aura enchantments are also creatures |
| 6 | Creatures lose all abilities |  |
| 7b | Becomes 1/1 | Becomes N/N |

The first to apply is Opalescence's layer 4 effect, making all other non-Aura enchantments creatures in addition, which means Humility becomes a creature as well.

Next is layer 6, where Humility's effect of making creatures lose all abilities applies, and this includes Humility itself. One point to stress: the effects of this layer have already been solved and applied at this point, and the infinite loop of Humility losing its own "creatures lose all abilities" because it lost its abilities doesn't happen.

Finally, layer 7b, where two effects both want to set creatures' base power/toughness: Humility wants 1/1 and Opalescence wants N/N. Which of these two wins is simply a matter of timestamp. Suppose Humility is the one that entered later, with the newer timestamp. Then the result is: **"All creatures and enchantments other than Opalescence become 1/1 creatures with no abilities."**

You ask why both effects can still apply in layer 7b when everything lost all abilities in layer 6? Let's review this rule once more:

> - 613.6 If an effect should be applied in different layers and/or sublayers, the parts of the effect apply in each relevant layer or sublayer. If an effect starts to apply in one layer and/or sublayer, it will continue to be applied to the same set of objects in other layers and/or sublayers, even if the ability generating the effect is removed during this process.

You can see that both Humility and Opalescence touch multiple layers within a single effect. Once an effect starts to apply, its changes to the other layers are certain to apply, and it's not affected even if abilities are removed in the middle.






### <font color="#FF0000">Humility + Opalescence x2</font>

![Humility 2](https://images.guildmagesforum.tw/posts/Layer/50eee2cc0fbb.webp)
> ● **[Humility](https://scryfall.com/card/tpr/16/humility)**:
> All creatures lose all abilities and have base power and toughness 1/1.
> ● **[Opalescence](https://scryfall.com/card/uds/13/opalescence)×2**:
> Each other non-Aura enchantment is a creature in addition to its other types and has base power and toughness each equal to its mana value.

Let's level up the previous problem. Opalescence doesn't affect itself, so that case is relatively simple, but what if two Opalescences are affecting each other?

| Layer | Humility | Opalescence |
| :-: | :-: | :-: |
| 4 |  | **Other** non-Aura enchantments are also creatures |
| 6 | Creatures lose all abilities |  |
| 7b | Becomes 1/1 | Becomes N/N |

As described in the previous problem, the earliest effect to apply is Opalescence's layer 4 type-changing effect. So even if Opalescence is changed to a creature and consequently loses all abilities to Humility in layer 6, that doesn't matter, because the type modification has already finished, and every creature and enchantment on the battlefield becomes a creature with no abilities.

Because of rule 613.6 described earlier, the abilities that set power/toughness in layer 7b work normally too. So now the question is whether the power/toughness gets set to 1/1 or N/N.

- If Humility has the newest timestamp, all creatures are 1/1.
- If Humility has the oldest timestamp, all creatures are N/N.
- If the timestamp order is Opalescence A -> Humility -> Opalescence B, this is where it gets fun. Applying effects in timestamp order, Opalescence A applies first, which doesn't matter here; then Humility applies and all creatures become 1/1; finally Opalescence B applies and sets the creatures **other than itself** to N/N. However, Opalescence B doesn't set its own power/toughness, so the value it ends up with is Humility's 1/1.






### <font color="#FF0000">Humility + Opalescence + Enchanted Evening</font>

![Enchanted Evening](https://images.guildmagesforum.tw/posts/Layer/4b86ee7cd95c.webp)
> ● **[Humility](https://scryfall.com/card/tpr/16/humility)**:
> All creatures lose all abilities and have base power and toughness 1/1.
> ● **[Opalescence](https://scryfall.com/card/uds/13/opalescence)**:
> Each other non-Aura enchantment is a creature in addition to its other types and has base power and toughness each equal to its mana value.
> ● **[Enchanted Evening](https://scryfall.com/card/sld/122/enchanted-evening)**:
> All permanents are enchantments in addition to their other types.

To close out the layers, let's finish with this most vexing case~

Suppose these three things are on the battlefield, and the [timestamp](https://guildmagesforum.tw/What-is-Time-Stamp/) order is Humility -> Opalescence -> Enchanted Evening. How are the permanents across the whole battlefield affected?

| Layer | Humility | Opalescence | Enchanted Evening |
| :-: | :-: | :-: | :-: |
| 4 |  | Other non-Aura enchantments are also creatures | Permanents are also enchantments |
| 6 | Creatures lose all abilities |  |  |
| 7b |  Becomes 1/1 | Becomes N/N |  |

The first to apply are the layer 4 type-changing effects. After Enchanted Evening's "permanents are also enchantments" applies, it changes what Opalescence's "other non-Aura enchantments are also creatures" effect applies to, so there is a [dependency](https://guildmagesforum.tw/What-is-Dependency/) between these two effects, and regardless of timestamps, Enchanted Evening always applies first. After layer 4 is processed, **all non-Aura permanents are additionally enchantment creatures**.

What happens after that is the same as in the earlier examples, except that this time we've assumed Opalescence has the newer timestamp, so the last effect to apply in layer 7b is "base power and toughness each equal to its mana value."

Let's sum up the final result:
- All permanents are enchantments.
- Non-Aura enchantments other than Opalescence are additionally N/N creatures, where N is their mana value.
- Creatures lose all abilities.

Yes, all permanents, so even lands become 0/0 creatures and die.

---

## Conclusion

The Layers column is finally finished, confetti~~~

In fact, the hardest part of layer problems is usually the first step: when you have no logical line of thinking you don't know where to start, and when you have no concept of the layer order, you wonder whether one effect's changes will affect another effect. From now on, when you meet layers, just sort the various effects by the layer definitions and put them in a table like the examples above, and I believe most problems will be solved with ease.

{% folding blue :: Definition of Each Layer %}

Layer 1a: Copy effects
Layer 1b: Face-down effects
Layer 2: Control-changing effects
Layer 3: Text-changing effects
Layer 4: Type-changing effects
Layer 5: Color-changing effects
Layer 6: Effects that add or remove abilities
Layer 7a: Characteristic-defining abilities that define power and toughness
Layer 7b: Setting power and toughness to specific values
Layer 7c: Increasing or decreasing power and toughness
Layer 7d: Switching power and toughness

{% endfolding %}


After finishing the previous article on [dependency](https://guildmagesforum.tw/What-is-Dependency/), I planned to finish the Layers column within a month, but once I actually started writing I found it far more daunting than I had imagined. Understanding it myself is one thing, and figuring out how to explain it is another. On top of that, Standard was updating at a high frequency during that time, and as a heavy Standard player, I poured almost all my free time into the endless cycle of building decks, testing decks, and tweaking decks, so in the end I shelved it for half a year before finishing this article.

I actually have quite a few rules article topics stockpiled, but I didn't really want to let other topics cut in line before Layers was done. My plan for rules articles from now on is to raise the update frequency again, with each article focusing on a smaller range of rules. If readers are curious about a particular rules question, you're welcome to suggest it on the [Guildmages' Forum Facebook page](https://www.facebook.com/guildmagesforumtw), and it might become inspiration for a rules article one day.
