---

title: "Land Color Distribution 101"
date: "2025-09-30 19:17:38"
authors:
  - "JerobaMTG"
categories:
  - "Construct"
  - "Beginner"
cover: "https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/d8e15f65859e-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/d8e15f65859e-cover.jpg"
excerpt: "Sign is F."
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-to-Distribute-Land-Color/).

This article is a sequel to [Deck Building Basics](https://guildmagesforum.tw/en/Deck-Building-Basic/). New players are welcome to click the link and read that one first.

## Introduction

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/d8e15f65859e.webp)

"Five-color decks look so cool! How do you even build the mana base? Why don't they seem to get color-screwed?" For newer players who have only recently picked up constructed, a lot of cards look strong or synergize well, but their colors are quite different, so you need three or more colors to fit them all. However, unlike mono-color and two-color decks, where you can lay out the lands intuitively, building a deck with three or more colors means you have to carefully tune the color ratios. How do you go about it?

## Counting Colors and Quantities

In [Deck Building Basics](https://guildmagesforum.tw/en/Deck-Building-Basic/), I briefly covered the average number of copies you draw, the mana curve, and the baseline nonland-to-land ratio for a 60-card deck (6:4), but I did not touch on how to split lands by color. For decks with two colors or fewer, the color split of your lands is not a big problem. A mono-color deck never gets color-screwed, and you can even fill it with basic lands. A two-color deck just runs the matching dual lands and then splits the basics 1:1; unless you have a lot of cards with heavy single-color requirements, you will rarely get color-screwed. So, can a deck with three or more colors just do the same, according to each color's proportion?

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/90ed968d0b21.webp)

Indeed, when working out the color split of a three-color deck's lands, you cannot ignore the share of each color's mana symbols among your nonland cards, but you also cannot simply stuff lands in by proportion. Let's start by calculating the share of each color among the nonland cards.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/0604fb3d6bf6.webp)

First, we need to count how much of each color your nonland cards contain. More specifically, we count how many mana symbols of each color appear in the upper right corner of the cards. Count the number of times a color's symbol appears on each card, multiply by the number of copies of that card, and compare the resulting numbers; this is your reference for dividing up the lands. For example, say you play four [Temur Battlecrier](https://scryfall.com/card/tdm/228/temur-battlecrier), two [Cease // Desist](https://scryfall.com/card/mkm/246/cease-desist), and three [Twinmaw Stormbrood // Charring Bite](https://scryfall.com/card/tdm/232/twinmaw-stormbrood-charring-bite). The calculation looks like this:

**White: [Twinmaw Stormbrood](https://scryfall.com/card/tdm/232/twinmaw-stormbrood-charring-bite) × 3 + [Desist](https://scryfall.com/card/mkm/246/cease-desist) × 2 = 7**
**Blue: [Temur Battlecrier](https://scryfall.com/card/tdm/228/temur-battlecrier) × 4  = 4**
**Black: [Cease](https://scryfall.com/card/mkm/246/cease-desist) × 2 = 4**
**Red: [Temur Battlecrier](https://scryfall.com/card/tdm/228/temur-battlecrier) × 4 + [Charring Bite](https://scryfall.com/card/tdm/232/twinmaw-stormbrood-charring-bite) × 3 = 7**
**Green: [Temur Battlecrier](https://scryfall.com/card/tdm/228/temur-battlecrier) × 4 + [Cease // Desist](https://scryfall.com/card/mkm/246/cease-desist) × 2 = 8**

Going by the cards above alone, we find that the main colors are red and green, followed by blue. White and black have numbers equal to or greater than blue, but they can be ignored. Why? Because those two colors come from the Omen card's main half and the hybrid mana on the adjoined (split) card. The Omen [Twinmaw Stormbrood // Charring Bite](https://scryfall.com/card/tdm/232/twinmaw-stormbrood-charring-bite) is mainly cast for its red half, so whether you have white matters little. [Cease // Desist](https://scryfall.com/card/mkm/246/cease-desist) is black-green // white-green hybrid, so as long as you have green, you can cast either side, and since you can only use one half, green counts as two symbols × two copies rather than four symbols × two copies. You can use this ratio as a reference when arranging your lands. The next question is: how many lands does a main color need?

## The Magic Number Is "Fifteen"

Do you remember that in [Deck Building Basics](https://guildmagesforum.tw/en/Deck-Building-Basic/), when I discussed how many cards costing two or less to play, I mentioned the minimum number needed to reliably hold two cards costing two or less after your opening hand plus one draw?

**The answer is 15.**

This number also applies to mana base construction. That is, to reliably have two lands of one specific color in the first two turns, you need to run at least 15 of them. This is not a number I came up with by feel. In fact, Wizards follows this rule when building its beginner preconstructed decks. Let's walk through the series of beginner Planeswalker decks from a few years ago. First, take the *[Throne of Eldraine](https://scryfall.com/sets/eld?as=grid&order=set)* Planeswalker decks as an example:

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/09e8d3364dbb.webp)
[Throne of Eldraine Planeswalker deck contents](https://magic.wizards.com/en/news/card-preview/throne-eldraine-planeswalker-decks-2019-09-18)

In the [Rowan, Fearless Sparkmage](https://scryfall.com/card/eld/304/rowan-fearless-sparkmage) deck, the red and white nonland mana ratio is close to 1:1, with white slightly ahead of red, so the lands are 11 Plains, 10 Mountain, and 4 [Wind-Scarred Crag](https://scryfall.com/card/tdm/271/wind-scarred-crag), making the two colors' land split 15:14. In the [Oko, the Trickster](https://scryfall.com/card/eld/309/oko-the-trickster) deck, the nonland mana ratio leans a bit more toward blue (1:1.3), yet the lands are 15 green and 14 blue. It looks like this was because the deck includes a single [Beanstalk Giant](https://scryfall.com/card/dsc/172/beanstalk-giant-fertile-footsteps), which can adventure to fetch a land, so one Island slot was handed over to the Giant and green is used to patch the colors, leaving green with a few more lands.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/c304c7785df4.webp)

So, is there an example of a three-color deck? Yes. There was exactly one three-color Planeswalker deck, and that was [Nicol Bolas, the Deceiver](https://scryfall.com/card/hou/205/nicol-bolas-the-deceiver) from *[Hour of Devastation](https://scryfall.com/sets/hou?as=grid&order=set)*.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/39781520be55.webp)
[Nicol Bolas, the Deceiver deck contents](https://www.mtggoldfish.com/deck/692175#paper)

The nonland color points across the whole deck are red 15, black 15, blue 5, and the land counts for the three colors are red 15, black 14, blue 9. The main colors are red and black; red lands reach the baseline of 15, while black is one short. What is curious is that there are only five blue cards, yet the deck runs nine blue lands, specially moving one Swamp slot over to an Island. As for this question, in my opinion, running nine means "you will see one in your opening hand". Using the estimate from the previous article, running 9 in a 60-card deck gives you on average 9÷60 = 0.15 per draw, and with seven opening cards that is 0.15×7 = 1.05, giving the player a better chance of casting cheap blue spells early.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/6dd3722d0100.webp)

The other Planeswalker decks differ somewhat, but their main colors almost always get 15 or more. A few exceptions: in *[Aether Revolt](https://scryfall.com/sets/aer?as=grid&order=set)*, [Ajani, Valiant Protector](https://scryfall.com/card/aer/185/ajani-valiant-protector) runs 22 lands split evenly at 13 each, but the deck has three [Renegade Map](https://scryfall.com/card/aer/173/renegade-map) that can fetch a land on turn one, so it is effectively 16 each. In *[Amonkhet](https://scryfall.com/sets/akh?as=grid&order=set)*, the [Gideon, Martial Paragon](https://scryfall.com/card/akh/270/gideon-martial-paragon) deck has a lower mana curve and runs only 24 lands, split evenly at 14 each. In *[Theros Beyond Death](https://scryfall.com/sets/thb?as=grid&order=set)*, [Ashiok, Sculptor of Fears](https://scryfall.com/card/thb/274/ashiok-sculptor-of-fears), because that set did not print common dual lands or [Evolving Wilds](https://scryfall.com/card/eoc/158/evolving-wilds), uses only two [Unknown Shores](https://scryfall.com/card/thb/249/unknown-shores) for color fixing, with 25 lands at 14 black and 13 blue.
From these examples, we can derive some patterns in how Wizards allocates mana when designing preconstructed decks:

**1. The main color (after adding one-drop color fixing) is generally given 15 or more sources.**
**2. Even when the nonland color ratios in the deck are lopsided, the allocation prioritizes reliably hitting your colors.**
**3. When green cards in the deck provide color fixing or ramp, raise green to main-color status.**

Next, we will go through example Standard decks in three colors and five colors. Four-color decks are rarer and are built basically the same way as five-color ones, so I won't cover them separately; players who want to build a four-color deck should refer to the five-color example.

## Three-Color Example: Sultai

With the basic principles of color allocation down, let's look at an actual example.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/07c997d438c9.webp)
[Sultai Umbral Goldkeeper deck list](https://www.mtggoldfish.com/deck/7339607#paper)

Let's start with the easier case, three colors, using the deck I recently published on this site, [Umbral Goldkeeper](https://guildmagesforum.tw/en/Standard-Umbral-Goldkeeper/), as the example. Basically, in a Standard card pool that has tri-lands and above, the three-color mana base can be handled in a formulaic way: take one set of tri-lands plus one set of each of the three dual lands and you reach 12 sources for each color. For the Sultai colors, that is [Starting Town](https://scryfall.com/card/fin/289/starting-town)/[Opulent Palace](https://scryfall.com/card/tdm/264/opulent-palace) + [Blooming Marsh](https://scryfall.com/card/otj/266/blooming-marsh)/[Wastewood Verge](https://scryfall.com/card/dft/268/wastewood-verge) + [Breeding Pool](https://scryfall.com/card/eoe/251/breeding-pool)/[Botanical Sanctum](https://scryfall.com/card/otj/267/botanical-sanctum) + [Undercity Sewers](https://scryfall.com/card/mkm/270/undercity-sewers)/[Watery Grave](https://scryfall.com/card/eoe/261/watery-grave), and so on, which settles 80% of the baseline number in one go; the rest is fine-tuned by each color's share of mana symbols. In the example deck, all remaining slots go to the main colors black and green, bringing them up to 16, slightly above the baseline. The blue has only 8 cards and is needed on turn three at the earliest, so the blue lands stay at 12, enough to be drawn within three turns.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/7ccb7480c7db.webp)
![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/79670cae727a.webp)

But in a card pool with only dual lands, building three or more colors requires finer tuning. After you slot in three sets of dual lands, the numbers barely pass half (8 each), and the roughly 12 remaining slots, even if split evenly, only reach 12 each. This part can be handled with land-fetching lands such as [Fabled Passage](https://scryfall.com/card/eoc/60/fabled-passage)/[Evolving Wilds](https://scryfall.com/card/eoc/158/evolving-wilds) that find basic lands, together with basics.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/1b282cd23a52.webp)

Note, however, that although these lands are rarely absent from Standard and can be treated as five-color lands in deck building, they can only fetch one color at a time, so in practice they tie your hands to some degree.

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/ee00b996a8b4.webp)

"Can't I just add another three sets of dual lands?" True, if the card pool allows it, you can get 16 or more of every color this way, but there are two risks:

**1. When hit by [Field of Ruin](https://scryfall.com/card/moc/400/field-of-ruin)/[Demolition Field](https://scryfall.com/card/fdn/687/demolition-field), you may have no basic land to fetch (you only run one or two, and if you get hit repeatedly or draw them early, they are gone).**
**2. The number of available lands that enter untapped is limited, and too many tapped lands slow your tempo.**

Therefore, in a card pool without a full set of lands, unless the deck is clearly stronger than the rest, I don't recommend building with three or more colors.

## Five-Color Example: Towns

Although Pioneer has five-color decks like [Niv to Light](https://www.mtggoldfish.com/archetype/niv-to-light#paper), Pioneer and larger pools have enough tri-lands and land-fetching lands to patch colors, and the deck is 80 cards, so it is not really a fitting example. Recently, at [Hareruya](https://www.hareruyamtg.com/en/), I came across a lovingly built five-color Towns deck, [Yoshida SPECIAL](https://www.hareruyamtg.com/en/deck/1107208/show/), which happens to make a good example:

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/53cc5e3a4d5f.webp)
[Yoshida SPECIAL deck list](https://www.hareruyamtg.com/en/deck/1107208/show/)

This is a Towns deck deliberately built using only cards from *[FINAL FANTASY](https://scryfall.com/sets/fin?as=grid&order=set)*, and it went 3-0 at a store Standard event that day. Let's first calculate the share of each color among the nonland cards: white 11, blue 22, black 10, red 4, green 14. Blue is unquestionably the main color, and because of fixing needs green must also be raised to main-color level, so the base is blue-green. So how did the builder set up the land split?

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/ccd3dfa37731.webp)
![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/48117efe2e97.webp)

First, four [Starting Town](https://scryfall.com/card/fin/289/starting-town) and four [Capital City](https://scryfall.com/card/fin/274/capital-city) lay a foundation of 8 sources in each of the five colors. Adding four of the blue-green rare Town [Balamb Garden, SeeD Academy // Balamb Garden, Airborne](https://scryfall.com/card/fin/272/balamb-garden-seed-academy-balamb-garden-airborne) brings both blue and green to 12. Then come the other common dual-color Towns that touch blue or green, plus the basic lands set aside to be fetched by [Summon: Fenrir](https://scryfall.com/card/fin/203/summon:-fenrir), ultimately bringing both blue and green to 18, a high density of roughly one in every three cards drawn, which ensures a good start in the early game. The other colors are white 13, black 11, and red 11. Red looks like it could spare a land for black, but considering the sideboard has four [Fire Magic](https://scryfall.com/card/fin/136/fire-magic) and green is available to help fix, it is understandable that these two colors have the same number of lands. And this setup really did let the deck run smoothly and win the three rounds that day.

## Conclusion

![](https://images.guildmagesforum.tw/posts/How-to-Distribute-Land-Color/a3274d2257bf.webp)

After reading this article, I believe readers should be able to grasp the basic rules of land color allocation. When building a deck with three or more colors, you can use the three rules in this article to do a first check on your colors, avoiding the tragedy of a freshly built deck dying to color screw in its debut, and giving you a direction for later adjustments. Happy deck building!
