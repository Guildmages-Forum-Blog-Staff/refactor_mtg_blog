---

title: "A Few Things About Names"
date: "2025-06-24 10:15:50"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/Something-About-Card-Name/f590869befc0-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Something-About-Card-Name/f590869befc0-cover.jpg"
excerpt: "I used Maelstrom Pulse to destroy an Unholy Annex // Ritual Chamber with both doors unlocked. Will the neighboring Unholy Annex // Ritual Chamber with only the left half unlocked get blown up too?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Something-About-Card-Name/).

## Introduction

- I used [Maelstrom Pulse](https://scryfall.com/card/fdn/661/maelstrom-pulse) to destroy an [Unholy Annex // Ritual Chamber](https://scryfall.com/card/dsk/118/unholy-annex-ritual-chamber) with both doors unlocked. Will the neighboring [Unholy Annex // Ritual Chamber](https://scryfall.com/card/dsk/118/unholy-annex-ritual-chamber) with only the left half unlocked get blown up too?
- Can [Anointed Peacekeeper](https://scryfall.com/card/dmu/2/anointed-peacekeeper) name the instant or sorcery half in the lower left corner of an Adventure or Omen card?
- When an effect on a card is written with the whole card name, does that effect mean "this card" or "this card name"?
- How are Token names figured out?

Do you hear questions like these every now and then? Although a name is only one of a card's most basic pieces of information, the rules questions surrounding names are surprisingly rich, so in this article let's explore the mysteries of MTG card names.

{% folding blue :: Basic Definitions of Names %}

- 109.3. An object's characteristics are **name**, mana cost, color, color indicator, card type, subtype, supertype, rules text, abilities, power, toughness, loyalty, defense, hand modifier, and life modifier. Objects can have some, all, or none of these characteristics. Any other information about an object isn't a characteristic. For example, characteristics don't include whether a permanent is tapped, a spell's target, an object's owner or controller, what an Aura enchants, and so on.
- 108.1. Cards' descriptions are as given in the Oracle card reference. The Oracle card reference for a card can be found in the **[Gatherer database](https://gatherer.wizards.com/Pages/Default.aspx)**.
- 201.2. A card's name is always considered to be the English version of its name, regardless of the language the card is printed in.

{% endfolding %}

![Introduction](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/1acb36368fdc.webp)

---

## Rules for Names Written in Text

**When an effect on a card is written with the whole card name, does that effect mean "this card" or "this card name"?**

I'm sure this is one of the questions beginners run into most often <font color="#B0B0B0">(I even feel like I answer this question more than once every month)</font>, though a big part of why it comes up so frequently is really the fault of the official wording being unintuitive. In fact, when an effect is written with XX card name and that card name is the card's own name, it actually means this card. The specific rule is as follows:

- 201.5. If the rules text of an object uses the object's name to refer to itself, it means only that object and not any other objects with the same name, regardless of any name changes caused by game effects.

>PS: Actually, using "card name / this card" is not a very rigorous way to put it; the formal terms should be "object name / this object", but that's honestly a bit of a mouthful, so for ease of reading I'll keep using "card name / this card" below.

![1](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/5abb38673431.webp)
> ● [Resolute Reinforcements (DMU text)](https://scryfall.com/card/dmu/29/resolute-reinforcements):
> When <font color="#FF0000">Resolute Reinforcements</font> enters the battlefield, create a 1/1 white Soldier creature token.
> ● [Resolute Reinforcements (FDN text)](https://scryfall.com/card/fdn/145/resolute-reinforcements):
> When <font color="#FF0000">this creature</font> enters, create a 1/1 white Soldier creature token.

Wizards is actually aware that using the card name to mean "this card" easily causes misunderstandings, so starting from recent sets, some effect texts no longer write the card name and instead directly say "this card". The text change of Resolute Reinforcements before and after its reprint is a typical example. But it should be stressed that the two ways of writing are completely equivalent under the rules.

{% mtgpick "fdn" 15 %}
> ● [Hare Apparent](https://scryfall.com/card/fdn/15/hare-apparent):
> When this creature enters, create a number of 1/1 white Rabbit creature tokens equal to the number of other creatures you control <font color="#FF0000">named</font> Hare Apparent.
A deck can have any number of cards named Hare Apparent.

As for effects that really are tied to a card name, they will explicitly mark **"named"** XX card name.

![2](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/d7a7f3732760.webp)
> ● [Sarkhan, Soul Aflame](https://scryfall.com/card/tdc/301/sarkhan-soul-aflame):
> Whenever a Dragon you control enters, you may have Sarkhan, Soul Aflame become a copy of it until end of turn, except its name is Sarkhan, Soul Aflame and it's legendary in addition to its other types.
> ● [Goldspan Dragon](https://scryfall.com/card/khm/139/goldspan-dragon):
> Whenever Goldspan Dragon attacks or becomes the target of a spell, create a Treasure token.

Goldspan Dragon's triggered ability actually triggers when this card attacks, and doesn't require the creature's own name to be Goldspan Dragon. So when Sarkhan copies Goldspan Dragon but its name is Sarkhan, Soul Aflame, Sarkhan still makes a Treasure Token when it attacks.

![3](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/8f2229e14cdc.webp)
> ● [Sarkhan, Soul Aflame](https://scryfall.com/card/tdc/301/sarkhan-soul-aflame):
> Whenever a Dragon you control enters, you may have Sarkhan, Soul Aflame become a copy of it until end of turn, except its name is Sarkhan, Soul Aflame and it's legendary in addition to its other types.
> ● [Mirror Image](https://scryfall.com/card/j22/62/mirror-image):
> You may have Mirror Image enter the battlefield as a copy of any creature you control.

Incidentally, a normal copy copies the name along with everything else, unless the copy effect emphasizes handling the name separately. If Mirror Image copied Sarkhan, Soul Aflame today, you would control multiple legendary permanents with the same name, and under the legend rule you'd have to choose one to put into the graveyard.

In addition, some cards use the card name as "this card" in their text, but if you look closely you'll find the card name isn't written in full, only a short form, yet under the rules this is still treated as having written the full card name.

- 201.5c Some cards use a shortened name to refer to the card in the text printed on it. In this case, using a card's shortened name is treated as using the card's full name.

{% mtgpick "tdm" 118 %}
> ● [Sarkhan, Dragon Ascendant](https://scryfall.com/card/tdm/118/sarkhan-dragon-ascendant):
> Whenever a Dragon you control enters, put a +1/+1 counter on <font color="#FF0000">Sarkhan</font>. Until end of turn, <font color="#FF0000">Sarkhan</font> becomes a Dragon in addition to its other types and gains flying.

Although the effect text of Sarkhan, Dragon Ascendant only writes Sarkhan, it still means this card. This effect will not put +1/+1 counters on a Sarkhan, Soul Aflame next to it.

---

## Choosing a Card Name

When an effect has you choose a card name, you must choose a card name that really exists in MTG's Oracle database, but you don't have to recite the card's exact name from memory; as long as you can clearly and unambiguously indicate the card you want to choose, it's treated as you having chosen that card name.

- 201.4. If an effect instructs a player to choose a card name, that player must choose the name of a card in the Oracle card reference. The player can't choose the name of a token unless that name is also the name of a card.
- 201.4a If an effect is instructed to choose a card name with a specified characteristic, the effect must choose the name of a card whose Oracle card text matches that characteristic.
- MTR3.6 When a player gives a description that uniquely identifies a card (including saying all or part of its name), the player is considered to have named that card. If the player or a judge thinks the description given doesn't uniquely identify a card, they must ask the other party for further clarification.

![4](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/07919e08ff09.webp)
> ● [The Stone Brain](https://scryfall.com/card/bro/247/the-stone-brain):
> {2}, {T}, Exile The Stone Brain: Choose a card name. Search target opponent's graveyard, hand, and library for up to four cards with that name and exile them. That player shuffles, then draws a card for each card exiled from their hand this way. Activate only as a sorcery.
> ● [Overlord of the Mistmoors](https://scryfall.com/card/dsk/23/overlord-of-the-mistmoors):
> The card you intend to choose

For example, say you plan to use The Stone Brain to choose "Overlord of the Mistmoors", but you can't remember what its card name is, and you shout "White Overlord". As long as the opponent can clearly recognize which card you're talking about, that works. If the abbreviation or description you use can't be recognized by the opponent, raise your hand and call a judge to help sort it out!

Also, under the rules you can only choose card names that exist in MTG; this rule doesn't restrict you to cards legal in the current format, so shouting [Black Lotus](https://scryfall.com/card/vma/4/black-lotus) in Standard doesn't violate anything, but choosing a card that doesn't exist in MTG is, in principle, not allowed. <font color="#B0B0B0">(It's just that everyone knows you simply want to shout something that isn't in your deck, so people rarely hold you to this rule.)</font>

{% folding blue :: Examples of Shouting Random Card Names %}

![Blue-Eyes White Dragon](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/c116ee2c6d80.webp)
> ● [Demonic Consultation](https://scryfall.com/card/ice/121/demonic-consultation):
> Choose a card name. Exile the top six cards of your library, then reveal cards from the top of your library until you reveal a card with the chosen name. Put that card into your hand and exile all other cards revealed this way.

{% endfolding %}

![5](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/a8b455b7f56b.webp)
> ● [Phyrexian Revoker](https://scryfall.com/card/clb/868/phyrexian-revoker):
> As Phyrexian Revoker enters the battlefield, choose a nonland card name.
Activated abilities of sources with the chosen name can't be activated.
> ● [Arixmethes, Slumbering Isle](https://scryfall.com/card/dsc/211/arixmethes-slumbering-isle):
> As long as Arixmethes has a slumber counter on it, it's a land. (It isn't a creature.)
{T}: Add {G}{U}.
> ● [Dryad Arbor](https://scryfall.com/card/tsr/277/dryad-arbor):
> Land Creature - Forest Dryad

When we choose a card's name, that name automatically tracks to the card information recorded in the Oracle card database, so if the effect asking you to choose a card name includes a specified characteristic, what you need to check is the original characteristics of the card with that name in the Oracle database, not the characteristics of the card with that name currently on the battlefield.

- 201.4a If an effect is instructed to choose a card name with a specified characteristic, the effect must choose the name of a card whose Oracle card text matches that characteristic.

For example, Arixmethes: although it is a land while on the battlefield right now, its original information is that of a creature card, so it can be named by Phyrexian Revoker. Once Phyrexian Revoker has named it, Arixmethes's activated ability of tapping to produce blue-green mana can no longer be activated.
<font color="#B0B0B0">(PS: Among the many cards that name a card to lock activated abilities, Revoker is one of the few that can lock mana abilities.)</font>

As for Dryad Arbor, because it's originally a land card, Phyrexian Revoker can't name it.

---

## Handling Cards with Multiple Names

The cards that currently have multiple names at once are the following kinds. All the names on these cards have corresponding entries in Oracle and can be chosen card names.

- Both sides of a split card
- An Adventure card's permanent body & the Adventure instant/sorcery
- An Omen card's permanent body & the Omen instant/sorcery
- A flip card's before-flip & after-flip halves
- Both faces of a double-faced card

{% folding blue :: Original Text of the Rules for Multiple-Name Cards %}

- 709.4a Each split card has two names. If an effect instructs a player to choose a card name, and the player wants to choose the name of a split card, the player must choose one of the names, but not both. If an object has one of the chosen names, it has the chosen name.
- 715.5. If an effect instructs a player to choose a card name, and the player wants to choose the secondary name of an Adventure card, that player may do so.
- 720.5. If an effect instructs a player to choose a card name, and the player wants to choose the secondary name of an Omen card, that player may do so.
- 710.1b The bottom half of a flip card includes the card's secondary name, text box, type line, power, and toughness. These characteristics are used only if that permanent is on the battlefield and flipped.
- 712.19. If an effect instructs a player to choose a card name, that player may choose the name on either face of a transforming double-faced card or modal double-faced card, but not both faces' names. Similarly, that player may choose the name on the front face of a meld card, or the name of the combined back face of a meld card.

{% endfolding %}

![CR201](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/e8ab0ab24585.webp)

![6](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/9ca390bb91e8.webp)
> ● [Meddling Mage](https://scryfall.com/card/2xm/210/meddling-mage):
> As Meddling Mage enters the battlefield, choose a nonland card name.
> Spells with the chosen name can't be cast.
> ● [Fire // Ice](https://scryfall.com/card/dmr/215/fire-ice):
> A split card.

Fire & Ice are two independent names, and one Meddling Mage can only name one of them. If you name Fire, then Fire can't be cast, but Ice can still be cast normally.

![7](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/f700b8b038cd.webp)
> ● [The End](https://scryfall.com/card/woe/87/the-end):
> Exile target creature or planeswalker. Search its controller's graveyard, hand, and library for any number of cards with the same name as that permanent and exile them. That player shuffles, then draws a card for each card exiled from their hand this way.
> ● [Reckless Stormseeker // Storm-Charged Slasher](https://scryfall.com/card/mid/157/reckless-stormseeker-storm-charged-slasher):
> The front and back faces of a transforming double-faced card.

The two faces of a double-faced card each have their own name. Suppose you use The End to exile a Storm-Charged Slasher (back face). Then this effect checks the back face's card name, yet a double-faced card in hand, library, and graveyard only has its front-face characteristics (named Reckless Stormseeker), so you can't find any card named Storm-Charged Slasher to exile, even though a card named Storm-Charged Slasher does actually exist in the Oracle database.

![8](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/09580088161c.webp)
> ● [Meddling Mage](https://scryfall.com/card/2xm/210/meddling-mage):
> As Meddling Mage enters the battlefield, choose a nonland card name.
> Spells with the chosen name can't be cast.
> ● [Test of Talents](https://scryfall.com/card/stx/59/test-of-talents):
> Counter target instant or sorcery spell. Search its controller's graveyard, hand, and library for any number of cards with the same name as that spell and exile them. That player shuffles, then draws a card for each card exiled from their hand this way.
> ● [Bonecrusher Giant // Stomp](https://scryfall.com/card/eld/115/bonecrusher-giant-stomp):
> The body is a creature, the Adventure is an instant.

The Adventure case is very similar to the back face of a double-faced card. An Adventure card, in zones other than the stack, and on the stack when it isn't an Adventure, doesn't have the Adventure's characteristics, including the Adventure's name. The same goes for Omen.

Take Bonecrusher Giant as an example: its Adventure "Stomp" is indeed recorded in the Oracle database, and is a name that Meddling Mage can name, but when you use Test of Talents to counter Stomp, you'll find you can't find any card named Stomp in any zone.

![9](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/d2190df850ad.webp)
> ● [Maelstrom Pulse](https://scryfall.com/card/fdn/661/maelstrom-pulse):
> Destroy target nonland permanent and all other permanents with the same name as that permanent.
> ● [Unholy Annex // Ritual Chamber](https://scryfall.com/card/dsk/118/unholy-annex-ritual-chamber):
> A split card (Room). Hereafter referred to as the Demon Room.

<font color="#B0B0B0">(Although the official Chinese translation of "Room" is a word meaning "compartment", I'll still use the nickname players are used to, "room")</font>

[Room](https://guildmagesforum.tw/en/DSK-mechanism/) is a kind of split card, so it's also a card with two names, but its rules on the battlefield are a bit more troublesome: a Room on the battlefield only has the characteristics of its unlocked doors, including the name.

Suppose the Demon Room has only unlocked the left side; then its current name is "Unholy Annex". If only the right side is unlocked, the name is "Ritual Chamber". If both sides are unlocked, it has both names at once. And when an effect checks whether things share a name, for a card that has multiple names, having any one name in common counts as having the same name.

- 201.2a If two or more objects each have at least one name in common, those objects have the same name, even if one or more of them have additional names. An object with no name doesn't have the same name as any other object, including another object with no name.

So suppose you use Maelstrom Pulse to destroy the Demon Room with only the left side unlocked: a Demon Room with only the right side unlocked is fine, but a Demon Room with both sides unlocked will be destroyed along with it.

![10](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/871e994c2d5a.webp)
> ● [Gideon's Intervention](https://scryfall.com/card/akh/15/gideons-intervention):
> As Gideon's Intervention enters the battlefield, choose a card name.
> Your opponents can't cast spells with the chosen name.
> Prevent all damage that sources with the chosen name would deal to you and permanents you control.
> ● [Glassworks // Shattered Yard](https://scryfall.com/card/dsk/137/glassworks-shattered-yard):
> Glassworks (left): When you unlock this door, this Room deals 4 damage to target creature an opponent controls.
> Shattered Yard (right): At the beginning of your end step, this Room deals 1 damage to each opponent.

Suppose the opponent uses Gideon's Intervention to name the left side, "Glassworks". Then you can't cast the left side, but there's no problem at all casting the right side, Shattered Yard. At this point the Room's name on the battlefield is only "Shattered Yard", so it can deal 1 damage to the opponent on each of your turns.

Paying to unlock the other side of a Room on the battlefield is a special action; it's not casting, and not even an activated ability (so [Pithing Needle](https://scryfall.com/card/2x2/312/pithing-needle) can't lock it), so you can still unlock the left side. In the fully unlocked state, this object has both names "Glassworks" + "Shattered Yard", which means all damage from it will now be prevented by Gideon's Intervention: not just the 4 damage to a creature triggered when you unlock the left side, but also the original right side's 1 damage to the opponent each turn.

---

## Token Names

- 111.4. A spell or ability that creates a token sets its name and subtypes. If the spell or ability doesn't specify the name of the token, its name is the same as its subtype(s) plus the word "Token." Once a token is on the battlefield, changing its name doesn't change its subtypes, and vice versa.

![Token1](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/46ed667e4152.webp)
> ● [Declaration in Stone](https://scryfall.com/card/soi/12/declaration-in-stone):
> Exile target creature and all other creatures its controller controls with the same name as that creature. That player investigates for each nontoken creature exiled this way.
> ● [Hop to It](https://scryfall.com/card/blb/16/hop-to-it):
> Create three 1/1 white Rabbit creature tokens.

The three Tokens created by Hop to It are all named Rabbit Token, so they can be taken away in one package by a single Declaration in Stone.

![Dragon Token](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/4599b403d70f.webp)

As for the various Dragon Tokens above, although their power, toughness, and even abilities differ, since Token naming rules only look at the subtype, their names are all the same, "Dragon Token", and they'll all disappear together to [Declaration in Stone](https://scryfall.com/card/soi/12/declaration-in-stone) too.

![Token2](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/9b099e18eec3.webp)
> ● [Maelstrom Pulse](https://scryfall.com/card/fdn/661/maelstrom-pulse):
> Destroy target nonland permanent and all other permanents with the same name as that permanent.
> ● [Nesting Dragon](https://scryfall.com/card/tdc/225/nesting-dragon):
> Landfall - Whenever a land you control enters, create a 0/2 red Dragon Egg creature token with defender and "When this creature dies, create a 2/2 red Dragon creature token with flying and '{R}: This creature gets +1/+0 until end of turn.'"
> ● [Dragon Egg](https://scryfall.com/card/cmr/173/dragon-egg):
> When Dragon Egg dies, create a 2/2 red Dragon creature token with flying and "{R}: This creature gets +1/+0 until end of turn."

The Dragon Egg Token created by Nesting Dragon's landfall has the original name "Dragon Egg Token", while Dragon Egg's original name is "Dragon Egg". Because their names differ by one word, **Token**, they are still not objects with the same name, and when Maelstrom Pulse destroys a Dragon Egg Token, Dragon Egg will not be destroyed.

![Token3](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/356ae165799d.webp)
> ● [Maelstrom Pulse](https://scryfall.com/card/fdn/661/maelstrom-pulse):
> Destroy target nonland permanent and all other permanents with the same name as that permanent.
> ● [Pack Rat](https://scryfall.com/card/sld/35/pack-rat):
> {2}{B}, Discard a card: Create a token that's a copy of Pack Rat.

Only when the effect that creates a Token doesn't specify a name is the subtype used as the name, and copy effects copy the name along with everything else, so the copy Token that Pack Rat makes with its own ability still has the full name "Pack Rat", and using Maelstrom Pulse can take the original and all the copies away in one package.

![Token4](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/9b111a601406.webp)
> ● [Runed Halo](https://scryfall.com/card/m21/32/runed-halo):
> As Runed Halo enters the battlefield, choose a card name.
> You have protection from the chosen name. (You can't be targeted, dealt damage, or enchanted by anything with that name.)
> ● [Minsc, Beloved Ranger](https://scryfall.com/card/afr/227/minsc-beloved-ranger):
> When Minsc, Beloved Ranger enters the battlefield, create Boo, a legendary 1/1 red Hamster creature token with trample and haste.

Although some effects can create Tokens with specified names, those names aren't in the Oracle database, so they aren't card names that can be named. For example, Runed Halo can't name Boo.

- 201.4. If an effect instructs a player to choose a card name, that player must choose the name of a card in the Oracle card reference. The player can't choose the name of a token unless that name is also the name of a card.

---

## Names of Face-Down Cards

Face-down cards can be considered a very annoying class of design in MTG. The common mechanics that can create face-down cards are: Morph, Manifest, Disguise, and Cloak, and one of the basic definitions of these face-down cards is that they **have no name**.

- 708.2a If a face-up permanent is turned face down by a spell or ability that doesn't characterize the object, it becomes a 2/2 face-down creature with **no name**, no rules text, no subtypes, and no mana cost. A permanent that enters the battlefield face down also has these characteristics, unless the effect that puts it onto the battlefield face down or allows it to be cast face down specifies otherwise. These values are that object's copiable values.

Having no name means any effect that checks for a specified name doesn't apply, and there's no such thing as a "card with the same name".

- 201.2a If two or more objects each have at least one name in common, those objects have the same name, even if one or more of them have additional names. An object with no name doesn't have the same name as any other object, including another object with no name.

![Manifest](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/3e70e751c257.webp)
> ● [Maelstrom Pulse](https://scryfall.com/card/fdn/661/maelstrom-pulse):
> Destroy target nonland permanent and all other permanents with the same name as that permanent.
> ● [Valgavoth's Onslaught](https://scryfall.com/card/dsk/204/valgavoths-onslaught):
> Manifest dread X times, then put X +1/+1 counters on each of those creatures.
> (To manifest dread, look at the top two cards of your library. Put one onto the battlefield face down as a 2/2 creature and the other into your graveyard. If it's a creature card, you may turn it face up any time for its mana cost.)

Suppose you manifested 3 creatures and one of them ate a Maelstrom Pulse. Then only that one manifested creature dies, and the other two won't be affected at all, because they aren't permanents with the same name. This is also where the face-down mechanics are most easily confused with the Token rules.

---

## Conclusion

Actually I currently have several half-finished rules articles prepared, but this one cut in line and was written from scratch, because over the past two months I've suddenly been seeing two kinds of questions frequently in various groups:

- 1. The rule that a card's own name in its text means "this card". This might also be seen as one of the good signs that more new players are joining.
- 2. Rules questions about multi-name cards, though thinking about it, it seems like 80% of them are [Unholy Annex // Ritual Chamber](https://scryfall.com/card/dsk/118/unholy-annex-ritual-chamber) questions.

I originally thought this would be a very concise short piece, but once I actually started writing I found that questions based on names can be surprisingly stretched out.

On the side, let me also chat about a personal experience, a little game story about naming card names. Once while playing Modern, I was playing a Ramp deck using the [Arbor Elf](https://scryfall.com/card/pw21/1/arbor-elf) + [Utopia Sprawl](https://scryfall.com/card/rvr/159/utopia-sprawl) package, and in a sideboarded game the opponent, on the play, slammed [Pithing Needle](https://scryfall.com/card/2x2/312/pithing-needle) on turn one and named... [Dryad Arbor](https://scryfall.com/card/tsr/277/dryad-arbor). That's right, the opponent mixed up the two "Arbor" card names, and what's even more awkward is that my deck really did also have [Dryad Arbor](https://scryfall.com/card/tsr/277/dryad-arbor) in it, and it's a name [Needle](https://scryfall.com/card/2x2/312/pithing-needle) can legally name, indeed.

![Final](https://images.guildmagesforum.tw/posts/Something-About-Card-Name/6249f8510733.webp)

This story happened at a very casual store weekly-tournament level event, and the opponent also laughed and admitted it, with no trouble afterward. Of course, stating a wrong full card name this decisively and clearly is a rare special case, but misunderstandings that need a judge to step in because of differing understandings of card nicknames have really happened, so when naming a card name, if there's any worry that the two sides' understanding might be ambiguous, remember to raise your hand and call a judge to help.
