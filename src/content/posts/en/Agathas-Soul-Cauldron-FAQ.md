---

title: "Cauldron, You Have the Most Problems"
date: "2025-08-19 19:50:31"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/441bb5f8bdec-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/441bb5f8bdec-cover.jpg"
excerpt: "This Vivi looks so tasty, why not toss it in the cauldron?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Agathas-Soul-Cauldron-FAQ/).

## Introduction

[Agatha's Soul Cauldron](https://scryfall.com/card/woe/242/agathas-soul-cauldron) (the Cauldron from here on) has been full of endless possibilities since it was born, feeding all sorts of wonderful decks with a single card, and after it got the premium ingredient [Vivi](https://scryfall.com/card/fin/248/vivi-ornitier), it has turned Standard into a wasteland.

In proportion to its possibilities, this guy has never been short of rules questions either, and these questions often involve [Layer](https://guildmagesforum.tw/Layer/) or even concepts more obscure than [Layer](https://guildmagesforum.tw/Layer/). This time let's look at how to handle the Cauldron's various issues. <font color="#A6A6A6">(Not including handling tournament problems with the banned list)</font>

![Introduction](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/545d21dcdd2a.webp)

---

## Rules

Let's first re-read the text of the Cauldron and organize some related rules logic:

{% mtgpick "woe" 242 %}
> ● [Agatha's Soul Cauldron](https://scryfall.com/card/woe/242/agathas-soul-cauldron):
> You may spend mana as though it were mana of any color to activate abilities of creatures you control.
> Creatures you control with +1/+1 counters on them have all activated abilities of all creature cards exiled with Agatha's Soul Cauldron.
> {T}: Exile target card from a graveyard. When a creature card is exiled this way, put a +1/+1 counter on target creature you control.

**<font color="#FF0000">{T}: Exile target card from a graveyard</font>**

When you activate the Cauldron's activated ability, the only target is a card in a graveyard, and at this point it has nothing to do with the creatures on the battlefield.


**<font color="#FF0000">When a creature card is exiled this way, put a +1/+1 counter on target creature you control.</font>**

Note here that the Cauldron is written with **"When"**, and seeing this word means it's a triggered ability. So when you exile a creature card with the Cauldron, a new triggered ability is created that targets a creature you control, and at this point the opponent can respond to this triggered ability on the stack by first removing the creature you chose as the target, which prevents you from putting the +1/+1 counter on a creature.


**<font color="#FF0000">Creatures you control with +1/+1 counters on them have all activated abilities of all creature cards exiled with Agatha's Soul Cauldron.</font>**

The Cauldron can give creatures activated abilities, which falls under Layer 6, the effects that add or remove abilities.

>Further reading: [Layer: The Interaction of Continuous Effects](https://guildmagesforum.tw/Layer/#%E5%B1%A46%EF%BC%9A%E6%B7%BB%E5%8A%A0%E3%80%81%E7%A7%BB%E9%99%A4%E7%95%B0%E8%83%BD%E7%9A%84%E6%95%88%E6%87%89)

According to MTG's rules about text, when an effect mentions the object's own name, it refers only to **that object** and has nothing to do with any other objects of the same name. So suppose Cauldron #1 exiles a card and leaves the battlefield, and then Cauldron #2 enters. It can't give the activated abilities of the cards exiled with Cauldron #1. Of course, even the same Cauldron card, after leaving the battlefield and re-entering, is an independent new object, and a re-entered Cauldron means the same as Cauldron #2 above.

- 201.5. If an object's rules text uses its name to refer to itself, it refers only to that object and not to any other object with the same name, regardless of any name changes caused by game effects.

>Further reading: [Something About Card Names](https://guildmagesforum.tw/Something-About-Card-Name/)





---

## Examples



![1](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/be27d7ee45d5.webp)
> **● [Pack Rat](https://scryfall.com/card/sld/35/pack-rat):**
> {2} <font color="#000000">{B}</font>, Discard a card: Create a token that's a copy of Pack Rat.

The Cauldron has currently exiled a Pack Rat, and later one of my creatures with a +1/+1 counter activates Pack Rat's ability. Whose copy is the token that gets created?

As mentioned above, the actual effect of Pack Rat's ability is **"create a token that's a copy of this creature"**. Whichever creature activates the ability, the token is a copy of that creature, rather than always a copy of Pack Rat.

- 201.5. If an object's rules text uses its name to refer to itself, it refers only to that object and not to any other object with the same name, regardless of any name changes caused by game effects.





![2](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/ec600a91bfce.webp)
> **● [Vivi Ornitier](https://scryfall.com/card/fin/248/vivi-ornitier):**
> {0}: Add X mana in any combination of <font color="#0000FF">{U}</font> and/or <font color="#FF0000">{R}</font>, where X is Vivi Ornitier's power. Activate only during your turn and only once each turn.
> Vivi for short from here on.

If the Cauldron has currently exiled one Vivi, then each of your creatures with a +1/+1 counter can activate Vivi's ability once.

Now suppose two Vivi are exiled with the Cauldron. Then the Cauldron gives your creatures the activated abilities of both Vivi independently, meaning your creatures get two identical independent abilities, each of which can be activated once. In addition, the interaction between [Exhaust](https://guildmagesforum.tw/DFT-mechanism/#%E7%AB%AD%E7%B5%95%EF%BC%88Exhaust%EF%BC%89r) abilities and the Cauldron works on the same principle.





![3](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/5b01ca1cbe4b.webp)
> **● [Grist, the Hunger Tide](https://scryfall.com/card/mh2/202/grist-the-hunger-tide):**
> As long as Grist, the Hunger Tide isn't on the battlefield, it's a 1/1 Insect creature in addition to its other types.
> {+1}: Create a 1/1 black and green Insect creature token, then mill a card. If an Insect card was milled this way, put a loyalty counter on Grist and repeat this process.
> {−2}: You may sacrifice a creature. When you do, destroy target creature or planeswalker.
> {−5}: Each opponent loses life equal to the number of creature cards in your graveyard.

Because Grist, the Hunger Tide is a creature in every zone other than the battlefield, when it is exiled by the Cauldron, the Cauldron also considers it a creature card and gives its activated abilities to your creatures.

All of Grist, the Hunger Tide's activated abilities are **loyalty abilities**. After a nonplaneswalker creature gets loyalty abilities, can those creatures use them?

Here we need to mention a definition concerning planeswalkers and loyalty abilities. Loyalty abilities are indeed printed only on planeswalker cards, but under the rules loyalty abilities aren't restricted to being activated only by planeswalkers. They're just activated abilities with a particular kind of cost description, and when a permanent of any type gains loyalty abilities, it can activate them following the rules for loyalty abilities.

Suppose you have a creature with no loyalty counters at all, and it gains Grist, the Hunger Tide's abilities through the Cauldron. Since you can't pay the {-2} and {-5} costs, you can't activate those two, but you can activate {+1}, putting 1 loyalty counter on itself as the cost, then milling and creating a token, and once this creature has enough loyalty counters, it can activate {-2} or {-5}.

Also, a permanent can activate only one loyalty ability per turn. That's the rule for loyalty abilities, and no matter whether the permanent is a planeswalker, it can't escape this restriction.

**<font color="#FF0000">Conclusion: Your creatures can also activate Grist, the Hunger Tide's loyalty abilities</font>**





![4](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/6c674af3a13c.webp)
> **● [Dress Down](https://scryfall.com/card/mh2/39/dress-down):**
> Creatures have no abilities.

The Cauldron gives creatures abilities, while Dress Down makes creatures lose all abilities. When both are on the battlefield, can your creatures gain the abilities given by the Cauldron?

Both belong to Layer 6, [effects that add or remove abilities](https://guildmagesforum.tw/Layer/#%E5%B1%A46%EF%BC%9A%E6%B7%BB%E5%8A%A0%E3%80%81%E7%A7%BB%E9%99%A4%E7%95%B0%E8%83%BD%E7%9A%84%E6%95%88%E6%87%89), so they take effect in [timestamp](https://guildmagesforum.tw/What-is-Time-Stamp/) order, or more plainly, the later one overrides the earlier one.

Dress Down's timestamp is easy to understand: it's the time this enchantment entered the battlefield. But what about the timestamp of **"the effect that gives creatures the abilities from the Cauldron"**? The answer isn't the time the creature entered, nor the time the +1/+1 counter was put on the creature, but **the time the Cauldron entered the battlefield**.
> You can understand it as the Cauldron's effect being continuously in effect from the moment it enters the battlefield. It's just that it only produces a visible impact once it has exiled a qualifying card and you control a creature with a +1/+1 counter, but even if it has no effect on the current board, the effect exists all along.

Suppose the Cauldron entered first and Dress Down entered later: then the creatures lose all abilities. But if Dress Down entered first and the Cauldron entered later and you activated its ability, then your creatures first lose all abilities and then gain the abilities given by the Cauldron.

- 613.7a The timestamp of a continuous effect that comes from a static ability is the timestamp of the object that has the static ability or of the effect that created that ability, whichever is later. If the effect that created the ability has the later timestamp and the object the ability is on gets a new timestamp, each continuous effect from that object's static abilities also gets a new timestamp, but the relative order of those timestamps stays the same.

>Further reading: [What Is a Timestamp](https://guildmagesforum.tw/What-is-Time-Stamp/)

**<font color="#FF0000">Conclusion: Cauldron & Dress Down, the one that entered later overrides the one that entered earlier</font>**





![5](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/77455dfc1d49.webp)
> **● [Tishana's Tidebinder](https://scryfall.com/card/lci/81/tishanas-tidebinder):**
> When Tishana's Tidebinder enters the battlefield, counter up to one target activated or triggered ability. If an ability of an artifact, creature, or planeswalker is countered this way, that permanent loses all abilities for as long as Tishana's Tidebinder remains on the battlefield.
> Merfolk for short from here on.

Suppose I have a creature that loses all abilities because of the Merfolk, and the Cauldron also tries to give that creature new abilities. Then the scenario resolves the same way as the [Dress Down](https://scryfall.com/card/mh2/39/dress-down) case in the previous question: the timestamps of the Merfolk & the Cauldron are compared to decide the order in which they apply.

Now change the scenario. Suppose there is already a creature that has activated abilities because of the Cauldron, and now the Cauldron activates its ability again, but this time the opponent responds by flashing in the Merfolk, causing the Cauldron to lose all abilities. Will my creatures also lose the abilities given by the Cauldron?

After the Merfolk's effect applies, the Cauldron loses all abilities, including its ability to give other creatures activated abilities, so all your creatures no longer have the activated abilities the Cauldron gave.

Although this answer looks easy to understand, if you dig deeper you'll find it can't seem to be explained with the timestamp concept from the previous question. That's because there is a **dependency** in the rules interaction between the Merfolk and the Cauldron, but dependency is too complex to explain clearly in a few words, so here I'll just give the conclusion, and for a more detailed explanation you can refer to a past article:

>Further reading: [What Is Dependency](https://guildmagesforum.tw/What-is-Dependency/)

By the way, whether it's the Cauldron's activated ability that exiles a creature or its triggered ability that puts the +1/+1 counter that gets countered by the Merfolk, either way the Cauldron loses all abilities.

**<font color="#FF0000">Conclusion: The Cauldron becomes vanilla and no longer gives creatures abilities</font>**





![6](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/7daa38f427ba.webp)
> **● [Shifting Woodland](https://scryfall.com/card/mh3/228/shifting-woodland):**
> Delirium — {2}{G}{G}: Shifting Woodland becomes a copy of target permanent card in your graveyard until end of turn. Activate only if there are four or more card types among cards in your graveyard.

Suppose I have Shifting Woodland on the battlefield, the Cauldron is in my graveyard, and I have delirium. This turn I make Shifting Woodland a copy of the Cauldron and use it to exile a [Birds of Paradise](https://scryfall.com/card/rvr/133/birds-of-paradise) from a graveyard, giving my creatures Birds of Paradise's activated ability, and then the turn ends and Shifting Woodland reverts. Then next turn, I make the same Shifting Woodland a copy of the Cauldron again. Can it still give my creatures the activated ability of the Birds of Paradise exiled last turn?

Here we need to introduce a new concept: [linked abilities](https://mtg.fandom.com/wiki/Linked_abilities)

The design of linked abilities is actually very common, but the concepts related to it are rarely mentioned. Put simply, the definition of linked abilities is that when an object has multiple abilities and the effect of one depends on another, the two abilities are linked. The specific rule entry is as follows:

- 607.1. An object may have two abilities printed on it such that one causes a player or object to take actions or become changed and the other refers directly to those actions, players, or objects. In this case, the two abilities are linked: the second refers only to actions performed or objects or players affected by the first, and not to any other actions, players, or objects.

One ability exiling cards and another ability referring to the exiled cards is one of the most common examples, and the Cauldron is exactly this kind of design:

- 607.2a If an object has an activated or triggered ability that exiles cards and another ability that refers to either "the exiled cards" or cards "exiled with [this object]," these abilities are linked. The second ability refers only to cards in the exile zone that were put there as a result of the first ability.

Sharp-eyed readers may notice that when describing linked abilities above, the word **printed** was used, but Shifting Woodland doesn't have this pair of linked abilities printed on it; it only gained them afterward by copying the Cauldron. For this situation of gaining linked abilities through some effect, a dedicated rule defines it:

- 607.5. If an object gains a pair of linked abilities from the same effect, those abilities will be linked to each other on that object, even if they weren't printed on it. They can't be linked to other abilities, no matter what abilities the object has now or had before.

Applying 607.5 to this scenario: when Shifting Woodland copies the Cauldron, the two abilities gained this time, "exile target card from a graveyard" & "give creatures the activated abilities of creature cards exiled with this card," are automatically linked, and when this copy effect ends, this pair of linked abilities is gone. Even if Shifting Woodland later becomes a copy of the Cauldron again, it just gains a new pair of linked abilities, and can't link to cards exiled in past turns.

**<font color="#FF0000">Conclusion: Each time Shifting Woodland copies the Cauldron, it can only give the abilities of creature cards exiled during that copy</font>**




![7](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/535813ce46be.webp)
> **● [Zoetic Glyph](https://scryfall.com/card/lci/86/zoetic-glyph):**
> Enchanted artifact is a Golem creature with base power and toughness 5/4 in addition to its other types.
> **● [Keen-Eyed Curator](https://scryfall.com/card/blb/181/keen-eyed-curator):**
> {1}: Exile target card from a graveyard.

From the definition of linked abilities we can also learn that although the Cauldron's literal wording is "they have all activated abilities of all creature cards exiled with Agatha's Soul Cauldron," in fact the cards must have been exiled by the Cauldron's original **"{T}: Exile target card from a graveyard"** ability to be linked.

In this example, suppose we use Zoetic Glyph to make the Cauldron a creature, and use the Cauldron's own effect to gain Keen-Eyed Curator's ability. Then this Cauldron can indeed pay 1 mana at any time to exile cards from graveyards, but your creatures won't gain the activated abilities of creature cards exiled with Keen-Eyed Curator's ability.

**<font color="#FF0000">Conclusion: When the Cauldron gives creatures abilities, it only recognizes creature cards exiled by its own original ability</font>**


---

## Conclusion

The Cauldron can contribute endless deckbuilding possibilities with a single card, and even something as strong as [Yawgmoth, Thran Physician](https://scryfall.com/card/dmr/110/yawgmoth-thran-physician) has to dutifully earn a chef's license in front of it. Although the Cauldron has spawned countless decks with itself at the core, in the two years before [Vivi](https://scryfall.com/card/fin/248/vivi-ornitier) was born, no Cauldron deck exerted monopolistic suppression on the format, at most reaching a level where it could fight top-tier decks.

![END](https://images.guildmagesforum.tw/posts/Agathas-Soul-Cauldron-FAQ/e5504c6120db.webp)

So given the current situation of Vivi Cauldron ravaging recent Standard, it certainly looks like the banned list will have to be brought out. Looking only from a gameplay perspective, without considering extra factors like pushing set sales, I personally lean toward banning [Vivi](https://scryfall.com/card/fin/248/vivi-ornitier). But if we only discuss the Vivi Cauldron deck, [Proft's Eidetic Memory](https://scryfall.com/card/mkm/67/profts-eidetic-memory) is actually also a reasonable option, since that thing is the culprit behind the deck's great tempo, and its ETB even comes with extra resources. Because it can repeatedly supply +1/+1 counters, it more than doubles the Cauldron's efficiency. The reason I finally chose to nominate Vivi is that I also took its performance in Izzet Prowess into account.

<font color="#A6A6A6">(As for whether to wait until the regular update date of 11/24 or use an emergency banned list update, that's another topic)</font>
