---
title: "Why Nadu Must Die: Aug 26th BnR Predictions"
cover: "https://guildmagesforum.tw/images/Why-Nadu-Should-Die/silver-nadu.jpg"
thumbnail: "https://guildmagesforum.tw/images/Why-Nadu-Should-Die/silver-nadu.jpg"
excerpt: "Farewell, Nadu. Have a good trip."
authors:
  - "MiohitoKiri5474"
date: 2024-08-16 17:51:11
categories:
  - "Construct"
  - "Modern"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Why-Nadu-Should-Die/).

{% notel red Note %}
This article is only a prediction for the Aug 26th BnR. It does not represent the final BnR update, and it should not be taken as investment advice on any single card.
Investing carries risk. If you make money, remember to share the profits ~~and if you lose money, don't come find me~~.
{% endnotel %}

## Before We Start

With the release of MH3, many new cards with Modern-level power were added. Besides shoring up existing decks in the format (for example, Dimir Tempo, Azorius Control becoming Jeskai Control, and Goryo's Reanimator), there are also quite a few new decks, such as Boros/Mardu Energy and Ruby Storm.
... and Bant Nadu Combo.

![](/images/Why-Nadu-Should-Die/nadu-comic.jpg)

## Counting Nadu's Crimes

Nadu is arguably the most hated deck in the current format, bar none. You could even say it's more hated than last year's Scam.

> For the actual odds of a turn-one Scam, see the article I wrote last year: [What's Wrong with Modern Lately?](https://guildmagesforum.tw/en/Whats-Wrong-Modern/).

Especially these two fine charts, the meta breakdown and the win rate table:
![](/images/Why-Nadu-Should-Die/meta.webp)
![](/images/Why-Nadu-Should-Die/win-rate.png)

From the win rate table we can see that Nadu Combo is basically favored against every deck in the format, with an overall win rate of 59%, and among the main meta decks only Jeskai Control is slightly unfavorable.

Besides the combo, the deck has many flex slots that can hold all sorts of creature toolboxes, and it uses {% mtgcard "Chord of Calling" tooltip=true %} to find those toolboxes.

### What Is the Nadu Deck Actually Doing

First, we need to understand what the Nadu deck is doing. A Nadu deck looks roughly like this:

![](/images/Why-Nadu-Should-Die/bant-nadu-deck.webp)

> I copied this deck from a top-eight finisher at a recent Modern Challenge. Don't ask me why the sideboard has only 14 cards. I'd like to ask why only 14 as well...

The main combo pieces are:

<script src="https://cdn.tailwindcss.com"></script>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  <div>{% mtgcard "Nadu, Winged Wisdom" %}</div>
  <div>{% mtgcard "Shuko" %}</div>
  <div>{% mtgcard "Outrider en-Kor" %}</div>
  <div>{% mtgcard "Springheart Nantuko" %}</div>
</div>

{% mtgcard "Nadu, Winged Wisdom" tooltip=true %} is the core of the deck. Its effect is to give other creatures "Whenever this creature becomes the target of a spell or ability, reveal the top card of your library. If it's a land card, put it onto the battlefield; otherwise, put it into your hand. This ability triggers only twice each turn." So if you pair it with a free targeting source, you can trigger this ability 2X times (X being the number of creatures on the battlefield).
Of these, you only need one of {% mtgcard "Shuko" tooltip=true %} and {% mtgcard "Outrider en-Kor" tooltip=true %}; their purpose is just to be a targeting source that can be activated for zero mana.
Last is {% mtgcard "Springheart Nantuko" tooltip=true %}, which will always make a 1/1 Insect whenever a land enters.

In other words, we can activate the ability of {% mtgcard "Shuko" tooltip=true %} or {% mtgcard "Outrider en-Kor" tooltip=true %}, targeting one of my creatures. The ability triggers and reveals the top of the library: if it's a land it enters the battlefield, otherwise the card goes to hand, and if a land enters we make another 1/1 Insect, a clean creature that hasn't triggered Nadu's ability yet.

Then we repeat the above, with a **chance** to throw every land in the library onto the battlefield and put all the other cards into hand. Then you win with either {% mtgcard "Thassa's Oracle" tooltip=true %} or {% mtgcard "Finale of Devastation" tooltip=true %}.

> A quick note on how to win with {% mtgcard "Finale of Devastation" tooltip=true %}: you need three other pieces on the battlefield, {% mtgcard "Endurance" tooltip=true %}, {% mtgcard "Yavimaya, Cradle of Growth" tooltip=true %}, and {% mtgcard "Sylvan Safekeeper" tooltip=true %}, and {% mtgcard "Endurance" tooltip=true %} must have a bestowed {% mtgcard "Springheart Nantuko" tooltip=true %} attached to it (but as mentioned earlier, you'll basically be holding your whole deck in hand, so you should have all of these).
> When the last land is thrown onto the battlefield and the bestowed {% mtgcard "Springheart Nantuko" tooltip=true %} triggers, we can respond to that trigger by using the ability of {% mtgcard "Sylvan Safekeeper" tooltip=true %} to sacrifice all our lands (activate it again in response to your own activated ability, so that one target creature can sacrifice all the lands), and produce mana before sacrificing (with {% mtgcard "Yavimaya, Cradle of Growth" tooltip=true %} the other lands can also produce green), then pay two mana to copy {% mtgcard "Endurance" tooltip=true %}, which enters and targets ourselves to shuffle our graveyard back into our library, and then we continue the loop of targeting ourselves -> reveal the top of the library -> land enters and makes a 1/1 -> when all the lands are out, copy {% mtgcard "Endurance" tooltip=true %} to shuffle our own graveyard.
> This gets us infinite creatures and infinite green mana, and finally one enormous {% mtgcard "Finale of Devastation" tooltip=true %} gives all the creatures haste and trample, and we swing with everything to kill.
> I personally prefer this version, because it can dodge things like {% mtgcard "Angel's Grace" tooltip=true %} (you can shuffle your own graveyard back, so you don't fear being decked), {% mtgcard "Finale of Devastation" tooltip=true %} can also serve early on as an extra creature tutor to find toolbox pieces or combo components, and it can also withstand some graveyard decks.

Note that this is a **chance**, not a **guarantee**, because you could target every creature on the battlefield and be so unlucky that you hit no lands at all.

Hey, did you notice? This is a combo deck that `might not be able to finish`. Admittedly there are quite a few combo decks that fail to finish if one link in the chain breaks, but with Nadu Combo you must target every creature on the battlefield twice before you can say "ah, I can't finish." By then there may be 10 creatures on the battlefield, and even if each trigger takes only five seconds to resolve, that's still 200 seconds... let alone when there are even more creatures.

Even though the deck has now been specialized into a build that rarely fails to finish, there are always situations of `hold on, let me run a few triggers to see if I can find something`, especially when there's no {% mtgcard "Springheart Nantuko" tooltip=true %}.

So the first idea we establish here: **Nadu Combo is a very time-consuming combo deck**.

### Since It's a Gauntlet (Shuko), Surely It Can Take the Hit for Nadu?

Hey, it might really not be able to. It's true that banning {% mtgcard "Shuko" tooltip=true %} would lower the deck's power, but the deck has another targeting source that can be activated for zero mana: {% mtgcard "Outrider en-Kor" tooltip=true %}.

And in the early MH3 environment, there was already a build that didn't need {% mtgcard "Shuko" tooltip=true %}:

![](/images/Why-Nadu-Should-Die/neoform-nadu-deck.webp)

Not to mention there's another card in the format, {% mtgcard "Lightning Greaves" tooltip=true %}, which is also a zero-mana targeting source, with the downside that it can't target the creature it was originally equipped to.

So if {% mtgcard "Shuko" tooltip=true %} were banned, Nadu Combo would indeed get weaker, but there's another problem: **Nadu Combo is still a very time-consuming combo deck**.

Let's look back at the [October 10, 2022, Banned and Restricted Announcement](https://magic.wizards.com/en/news/announcements/october-10-2022-banned-and-restricted-announcement) to review why {% mtgcard "Yorion, Sky Nomad" tooltip=true %} was banned in Modern.

{% notel default fa-info "OCT 20th 2022 BnR Update" %}
... Modern specifically entails more shuffling and other physical card manipulation because of the deep card pool of card-selection spells, fetch lands, and so on. Cards encouraging large decks, like Battle of Wits , have existed in the past, but usually on the fringes of competitive play rather than as one of the strongest decks.
Finally, we've also heard from many players that the repeated triggers caused by Yorion and many of the cards surrounding it can lead to repetitive gameplay patterns and long games with lots of downtime between the other player's actions...
{% endnotel %}

> Simple translation:
> ... Modern especially requires more shuffling and other physical card manipulation, for example spells that search the library, fetch lands, and so on. Although cards that encourage large decks, such as {% mtgcard "Battle of Wits" tooltip=true %}, have existed in the past, they were decks on the fringes of the format, not one of the strongest decks.
> Finally, many paper players have told us that Yorion makes many other cards produce lots of repeated triggers, which leads to repetitive gameplay patterns and overly long games, and other actions (such as fetching lands) leave the opponent constantly sitting idle...

So we can also put it this way: the deck was too thick, the searching took too long, and there were too few targets, so {% mtgcard "Yorion, Sky Nomad" tooltip=true %} was killed.

If WotC could not accept the long searching and therefore banned {% mtgcard "Yorion, Sky Nomad" tooltip=true %}, what reason is there for a combo that takes at least five or six minutes and might still not finish to survive?
Moreover, Nadu Combo likewise has plenty of library-searching actions ({% mtgcard "Urza's Saga" tooltip=true %}, {% mtgcard "Chord of Calling" tooltip=true %}, and land-finding cards), and likewise plenty of handling time (the {% mtgcard "Shuko" tooltip=true %} being attached back and forth and the {% mtgcard "Outrider en-Kor" tooltip=true %} pointing back and forth). It sounds just like 4C Elemental back then.

Take for example the MITQ I attended at the 貓腳印松江店. There were a great many draws that day, and many of them were Nadu Combo vs Jeskai Control, and the whole match looked stinky and long.
That's right, Nadu Combo really is that annoying a deck.

## After Banning Nadu

Since banning Nadu is a necessary measure, what comes after it? What decks will be in the format?

Besides the ones that will certainly be there, Boros/Mardu Energy, Jeskai Control, and Goryo's Reanimator, there's also Dimir Murktide, which beats the decks above, and Mono-Black Necro, which has a harder time against Control but beats other decks easily, and so on.

Let's look back at the win rate table and see which decks besides Nadu Combo have especially high win rates.

![](/images/Why-Nadu-Should-Die/win-rate.png)

Among the mainstream decks, that's Mardu Energy, but compared to Nadu Combo it doesn't have such an evenly high win rate; it's pulled up by a small number of extremely favorable matchups.
Also, Energy doesn't have a single card where "if I ban this card, the whole deck stops working"; if you really had to name one, it might be the one-mana {% mtgcard "Guide of Souls" tooltip=true %}. And Energy can have a large number of its card interactions cut off by {% mtgcard "Suncleanser" tooltip=true %}.
Of course there are other high win rate decks too. Going by [MTG Decks' data](https://mtgdecks.net/Modern/winrates/range:last30days), there's also Eldrazi Ramp at 60%, Izzet Wizards at 55%, and Domain Aggro at 59% (there are others further down with win rates above 55%, but their sample sizes are too small to count).
But likewise, these decks are also pulled up by a small number of extremely favorable matchups, and their sample sizes are far smaller than the few above, so they might make a good thing to try.

## Nadu's Fellow Inmates

Now let's switch to another question: could other decks be locked up in the dark room together?

First we need to know WotC's recent ban strategy. It's actually quite simple: in a nutshell, they chop down the tallest poppy, and basically whatever is strong gets chopped.
And sometimes they only act when the community can't stand it anymore (turning to look at the BnR of that {% mtgcard "Fury" tooltip=true %} time).

There's one more condition: **they absolutely never do preemptive detention**.

I've lost count of how many times I've complained, but cascade should have been dealt with at the same time in last year's end-of-year BnR; otherwise you could figure out with your knees which other decks would dominate the format next.
But WotC is the same as ever: if they won't ban, they won't ban.

> Okay, I know that back when Standard banned {% mtgcard "Wilderness Reclamation" tooltip=true %}, they also preemptively detained {% mtgcard "Teferi, Time Raveler" tooltip=true %}.
> But that was the only time in recent years, so I think it's still fair to say WtoC basically won't do preemptive detention.

{% mtgcard "The One Ring" %}

Next, let's look at the other highly played cards in the format. Right now I think the card most likely to be locked up together is {% mtgcard "The One Ring" tooltip=true %}.
This card shines in Jeskai Control, and now there's also {% mtgcard "Phlage, Titan of Fire's Fury" tooltip=true %} to make up for the life lost to {% mtgcard "The One Ring" tooltip=true %}.
Or in the few Mono-Black decks, the combination with {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %}, where your life total grows the more you draw.

There are also other cards that many people are calling for, but which I think probably won't be banned: {% mtgcard "Necrodominance" tooltip=true %} and {% mtgcard "Orcish Bowmasters" tooltip=true %}.

{% mtgcard "Necrodominance" %}

Let's start with {% mtgcard "Necrodominance" tooltip=true %}. Any player with some seniority will immediately think of {% mtgcard "Necropotence" tooltip=true %}.
It's true that {% mtgcard "Necrodominance" tooltip=true %} is very strong, although you have to wait until end of turn to pay life all at once and gain an equal number of cards, so you can't pay life flexibly according to the current state of the game.
But because it's drawing, you can combine it with the {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} mentioned earlier to regain life, and since it's not an activated ability, it can't be locked.

But drawing is a double-edged sword, and it also means being punished by the opponent's {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} or {% mtgcard "Orcish Bowmasters" tooltip=true %}.
It's also an end-of-turn trigger, so something like {% mtgcard "Tishana's Tidebinder" tooltip=true %} could counter it and wipe out a whole turn of tempo.
And it has more drawbacks, such as a maximum hand size reduced by two, cards going to the graveyard being exiled instead ({% mtgcard "Necropotence" tooltip=true %} exiles a card when you discard it, which lets you do more with the stack), and so on.

{% mtgcard "Orcish Bowmasters" %}

Next, {% mtgcard "Orcish Bowmasters" tooltip=true %}. I think it's even less likely to be banned, because it can punish both {% mtgcard "The One Ring" tooltip=true %} and the {% mtgcard "Necrodominance" tooltip=true %} mentioned above. Until those two cards are gone, {% mtgcard "Orcish Bowmasters" tooltip=true %} can't be touched, or truly nobody could punish these players who draw cards like crazy QQ

Although I've always been a staunch ban-Orcish advocate, things being what they are, there's nothing to do but accept it.

## Releasing the Seniors Who Have Served Their Time

Last August we welcomed back, for the first time in a long while, inmates who had served their sentences. But honestly, releasing {% mtgcard "Preordain" tooltip=true %} didn't really affect the format, and at that time blue-based decks were nearly crushed by {% mtgcard "Orcish Bowmasters" tooltip=true %}...
Looking at the other seniors still in prison, I think there are two other cards worth considering for release: {% mtgcard "Umezawa's Jitte" tooltip=true %} and {% mtgcard "Glimpse of Nature" tooltip=true %}.

{% mtgcard "Umezawa's Jitte" %}

Let's talk about {% mtgcard "Umezawa's Jitte" tooltip=true %} first. Basically its ability can no longer dominate the format effectively. To put it bluntly, {% mtgcard "Umezawa's Jitte" tooltip=true %}, and indeed all of Stoneblade, is no longer a viable deck in the format. {% mtgcard "Stoneforge Mystic" tooltip=true %} used to be able to find {% mtgcard "Shuko" tooltip=true %} in Nadu Combo, but now it looks completely unemployed...

{% mtgcard "Glimpse of Nature" %}

Releasing {% mtgcard "Glimpse of Nature" tooltip=true %} should be able to save Elves, and with two black draw punishers in the format, {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} and {% mtgcard "Orcish Bowmasters" tooltip=true %}, it should be fine... right?

Unless WotC changes to a banning method like the neighboring YGO's (starting from limited to two, then limited to one, with a ban only at the end), trying to release some cards as limited to one or limited to two, I think it would be acceptable if we could only use one {% mtgcard "Uro, Titan of Nature's Wrath" tooltip=true %} or {% mtgcard "Oko, Thief of Crowns" tooltip=true %}.

> A little rant: WotC has already learned Konami's way of chopping down the tallest poppy, so why can't they also learn Konami's way of banning cards = =

## Taking a Look at Other Formats Too

Standard is basically very healthy and needs no changes. In the last BnR, WotC said Boros Convoke and Domain Ramp in Standard are on their watch list, because each has a creature ({% mtgcard "Atraxa, Grand Unifier" tooltip=true %} and {% mtgcard "Knight-Errant of Eos" tooltip=true %}) that is a big creature itself and also refills hand resources.
But they also mentioned that after this year's rotation, Boros Convoke loses {% mtgcard "Voldaren Epicure" tooltip=true %}, which paired with {% mtgcard "Gleeful Demolition" tooltip=true %} to get {% mtgcard "Knight-Errant of Eos" tooltip=true %} out early, and Domain Ramp loses the three-color lands that could reliably fix colors and build up domain, so both have lost a little something.
That leaves Pioneer to look at.

Pioneer, I also think, is still fairly balanced. The one that probably messes with your head the most is Abzan Amalia Combo. Although according to a writer on a certain site it's a bad deck, that doesn't change the despair this deck brings. Sometimes it's not that you don't want to remove it, it's that you can't: for example, when Izzet Phoenix sees a {% mtgcard "Selfless Savior" tooltip=true %} on the battlefield and has only one removal spell in hand that can't remove {% mtgcard "Amalia Benavides Aguirre" tooltip=true %}, and after the opponent finishes the combo it still can't kill her; or when you see a {% mtgcard "Aetherflux Reservoir" tooltip=true %} left on top of the opponent's library, which is as despairing as it gets...
I think the other decks are within the normal range of power, but is that Rakdos Vampires meta share really okay...?

![](/images/Why-Nadu-Should-Die/pioneer-meta-rate.webp)

## Last of All: Personal Hopes

Although I keep the same thought I've always had, that I hope Izzet Murktide returns to glory, I can't think of anything that unbanning now could save the deck QQ
Unbanning {% mtgcard "Gitaxian Probe" tooltip=true %}, {% mtgcard "Faithless Looting" tooltip=true %}, and {% mtgcard "Treasure Cruise" tooltip=true %} would feel like it would only make Dredge happy; unbanning {% mtgcard "Ponder" tooltip=true %} would feel like scratching an itch through a boot. Honestly {% mtgcard "Ponder" tooltip=true %} is only a little better than {% mtgcard "Preordain" tooltip=true %}, and I don't think that little bit can bridge the gap between Izzet Murktide and the meta.
Rather than waiting for Izzet Murktide to return to glory, I might as well keep dreaming that one day they really print something like {% mtgcard "Daze" tooltip=true %} in Modern.
