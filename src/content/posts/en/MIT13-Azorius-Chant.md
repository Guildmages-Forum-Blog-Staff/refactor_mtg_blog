---
title: "MIT#13 Third Place Report: Azorius Chant"
date: "11/19/2026, 5:18:23 PM"
updated: "2026-11-19 19:28:18"
preview: false
categories:
  - "Tournaments"
  - "MIT"
  - "Modern"
authors:
  - "Enki"
cover: "https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7850e28dada6-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7850e28dada6-cover.jpg"
excerpt: "Those who are silenced cannot say \"no\"."
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../MIT13-Azorius-Chant/).

## Foreword

Hi everyone~ I'm [Enki](/en/authors/Enki/). It's been a very long time since I last wrote here. That's not because I stopped playing or stopped loving Magic. My mindset changed, and I decided I would only come back to write once I had results worth writing about. Magic is still my roots, and I won't give it up easily. This time the opportunity finally came, and I'd like to share the Azorius Chant deck that earned me third place.

This report mainly covers:
- Tournament preparation
- The deck's underlying logic, how it operates, and how it's built

I'll try to explain the process and details of each as fully as I can, so that you can understand this deck more deeply.

## Preparation

Around mid-September, people in our team's secret Discord started talking about preparing for Modern MIT. The end of October wasn't far off, so it really was time to take care of Modern. We put our other games down and started seriously researching what to play. Naturally, the place to look was the overseas RC metagame; MIT seemed to be the last event of the season, so there was plenty of homework to copy.

The first event that caught our eye was [SCG CON Baltimore](https://melee.gg/Tournament/View/405588).
Here is the top 8 meta from that event:
![01-Baltimore-top-8](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/9bec9d833886.webp)
You can see a ton of [Mono-Green BroodScale](https://www.mtggoldfish.com/archetype/modern-eldrazi-ramp#paper) running wild, along with a few other assorted Modern powerhouses.

My read on Modern at the time: the strongest deck had been [Affinity](https://www.mtggoldfish.com/archetype/modern-affinity#paper). As long as it landed an unbeatable {% mtglink "Kappa Cannoneer" %}, smoothly set up bombs with {% mtglink "Weapons Manufacturing" %}, or leveraged the huge resources from {% mtglink "Urza's Saga" %}, it could create boards the opponent couldn't answer in most matchups.

Players' answer to rampant Affinity was: "Affinity is so unfair, but it still needs at least four turns to kill you, right? So I'll just win on turn three lol." And so BroodScale, which can win as early as turn three, showed up.

To deal with BroodScale taking over Modern, another hot deck appeared: [Devoted Druid Combo](https://www.mtggoldfish.com/archetype/modern-devoted-combo#paper). The reasoning was about the same: "You win on turn three? Ever seen a turn-two win?"

These two decks turned Modern into a pure race. If you watched the Baltimore top 8 stream, you know a Bo3 was over in ten-odd minutes. Pretty absurd.

But none of that mattered to me. What I saw was my only savior: [Esper Blink](https://www.mtggoldfish.com/archetype/modern-esper-blink#paper), the deck that earned me my Season 13 invite. I was almost certain I would play it, for simple reasons:

- Two copies made top 8 at Baltimore, so its overall performance was competitive.
- It's a deck I know well, so I could spend the time practicing matchups instead.
- Its win rates against Druid Combo and BroodScale were acceptable.
- Its worst matchup, Affinity, was already in decline.

So I excitedly sleeved up Blink right away, ready to challenge the CM crew. My swagger lasted maybe a few hours. Practicing against Xun-ge, known as the "Titan incarnate," I hit a wall. Pre-board or post-board, on the play or on the draw, my win rate was pathetically low, as if he were toying with me. In the moment I told myself I just needed to dodge Titan in the main event, but I was still uneasy, and a wicked thought crept in: "**Or should I play Azorius Chant instead?**"
Looking back, maybe that's where it all started.

A few weeks later, around early October, I was still thinking about how to change Blink so these Titans would stop crushing me. The secret Discord was following regional RC metagames as usual, and that's when we saw the RC that would influence me the most this time: [Ottawa 2026-27 Round 1 Regional Championship](https://melee.gg/Tournament/View/459699).

![02-ottawa](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/72644fe2b2c7.webp)
The champion was **Azorius Chant**, and the list was nasty. On top of the usual four {% mtglink "Orim's Chant" %}, it added three {% mtglink "Silence" %} alongside the existing {% mtglink "Isochron Scepter" %}. It basically had no intention of letting the opponent play the game.

![03-ottawa-chant](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/1904cdf6767d.webp)
The moment I saw this good news, the demon buried deep in my heart awoke and made me dismantle Esper Blink, letting Azorius Chant, with its similar mana base, inherit the mantle. And so I set off down a road of no return...
That sounds dramatic, but the switch was actually a very rational decision. There was only one reason, and it was simple: **I had a big proficiency bonus**.
At last year's MIT#10 my results weren't great, but I played [Fransisco Sanchez's Azorius Chant](https://www.mtggoldfish.com/deck/7365218#paper) there. And this season, after qualifying, at every MITQ I entered as a free-roll punching bag I played the same deck or a UW control deck with the same concept. I didn't need much time to learn the deck's logic, so I could validate whether the deck was viable in a short time. Worst case, I'd just switch back to Esper Blink. So with limited prep time, I decided to try the 7 Silence/Chant version of Azorius Chant.

![](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7901a544795d.webp)
<p style="text-align: center;"><a class="small">7 Silence / Chant</a></p>

After testing for a while, I found that 7 Silence/Chant solved a lot of past problems and had a clear edge in the metagame of the time. Besides high win rates against Druid Combo, BroodScale and Titan mentioned above, Silence in the slot that used to hold {% mtglink "Counterspell" %} is much more useful against previously unfavorable matchups like [Izzet Prowess](https://www.mtggoldfish.com/archetype/modern-izzet-prowess#paper) and [Boros Energy](https://www.mtggoldfish.com/archetype/modern-boros-energy#paper) (I'll explain the difference below). That raised the win rate, and it's favored against Blink and Goryo's, decks that were common and looked unfavorable but are actually good matchups. Once I had this information, I was sure I would play Chant.

A week later the metagame shifted again. [Rakdos Aggro](https://www.mtggoldfish.com/archetype/modern-rakdos-midrange#paper) showed up in large numbers at overseas RCs, reportedly with a high win rate against UW. And to fight Rakdos, [Domain Zoo](https://www.mtggoldfish.com/archetype/modern-domain-zoo#paper), with its unbeatable [Leyline](https://scryfall.com/card/mkm/217/leyline-of-the-guildpact) [Scion](https://scryfall.com/card/mh2/234/scion-of-draco), also seemed to be on the rise. According to intel from a certain Guildmage's Forum neighborhood chief, lots of people planned to play Rakdos at MIT, and some would play Domain too. I panicked a bit: I was about to get targeted. But there was nothing to do except change the list.

I made some changes aimed at the two decks coming to beat me up. The main one was dropping my habit of putting single copies of narrow cards in the main deck. Instead I used effective cards that raise the win rate against Rakdos/Domain and rarely become dead cards in most matchups.

In the final week of testing, these changes paid off. Although the win-rate tables show UW having a lower win rate against Rakdos, in my testing my revised version could actually be favored against Rakdos in game one. Variance may have skewed my results somewhat, but overall I was very happy with the changes, and in the end I registered this version that can arm-wrestle Rakdos. As for Domain Zoo, after testing I basically gave up on it. With or without anti-aggro changes, it seemed unwinnable. I could only pray not to face it on the day.

## Game Plan

First, the [decklist](https://melee.gg/Decklist/View/4f87df2d-383b-4851-9cb1-b4ee0107f13d):
![04-enki-chant](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/fea632d7a6d4.webp)

My changes were mainly based on Toothy's winning list from [SCG CON Los Angeles](https://melee.gg/Tournament/View/405591), cross-referenced with Fransisco Sanchez's older version from last year. I bought both guides. The decks come from different metagames, but after comparing the differences, my play style quickly shifted from the old logic to the new.

The main difference between the old and new versions: the new version almost completely drops counterspells and adds more {% mtglink "Silence" %} to lock the opponent out, giving {% mtglink "Day's Undoing" %} more room to shine. The common use cases are:
1. After clearing the opponent's board, casting {% mtglink "Day's Undoing" %} (hereafter "Day's") raises the odds of drawing Silence/Chant. This lets you very effectively lock the opponent out of their following development turns, creating a game where only you get to play.
2. Similar to point 1: on the play, you can keep 2 Silence/Chant + Day's, lock the opponent for two turns in a row, then cast Day's to recover the card disadvantage from those two turns.

Both scenarios apply against almost any archetype. Point 2 in particular is a great stalling tool against aggro (Prowess / Rakdos / Energy), since the opponent can't develop early. And given the deck's construction, from the fourth land onward each of our turns is stronger than theirs. It's easy to set up the chain-lock scenario from point 1, or just win through resource control, before an aggro opponent can kill us.

The old version was still half control: the traditional control plan of disrupting with counterspells, filtering and removal, plus the {% mtglink "Narset, Parter of Veils" %} + Day's combo, with Plan A decided by the matchup and situation. That metagame still allowed counterspells to interact on the stack, but in today's ultra-turbo metagame, counterspells have become a liability. They aren't fast enough, and against explosive decks that easily double-spell, they're nearly dead cards. Also, the old version's most serious flaw: compared with the new version, it has a harder time protecting its most important combo win condition.

The new version focuses much more on the Narset + Day's combo itself, which is the deck's Plan A. Resource control makes up a smaller share now, but it's still a very strong win condition. In matchups where the combo is hard to pull off and we're forced into longer games, we can switch to this hidden Plan B to win.

## The Deck's Underlying Logic

Traditional control decks are about hitting land drops consistently, pulling ahead on resources and clearing the board. Once the opponent's resources are exhausted, they lock the opponent out with stronger cards and a big card advantage, and win slowly.

But in many respects Azorius Chant runs against traditional control logic. You'll cast Silence/Chant at times when traditional control wouldn't act, going down a card, and you'll cast Day's Undoing at the risk of refilling the opponent's hand. These seemingly counterintuitive actions are all paving the way for victory in later turns. That makes the deck closer to a combo deck than to traditional control.

Most of the time, Chant can only win after its fifth land. Ideally, with {% mtglink "Narset, Parter of Veils" alt="Narset" %}, {% mtglink "Teferi, Time Raveler" %} and multiple Silence/Chant in hand, we start {% mtglink "Silence" alt="silencing" %} the opponent on the turn before we hit four mana, silence them again on the turn after casting Teferi, then cast Narset the following turn to dig for more silences, while {% mtglink "Teferi, Time Raveler" alt="Teferi" %} keeps using [+1]. This chain-lock strategy buys more turns to find Day's, aiming to cast Day's during the opponent's next draw step and make their hand vanish for the win.

But that's only with a good hand. More often you need to play a longer game: more removal, only 1-2 Silence/Chant, and only one of Narset/Teferi. Until then, our job is to keep **anything other than lands off the opponent's board** as much as possible, find Day's Undoing through Narset, {% mtglink "Consult the Star Charts" %} or natural draws, and cast Day's Undoing proactively on a turn with at least five lands to force everyone to restart. Because we now run 7-8 Silence/Chant, and the graveyard gets shuffled back in on the reset, the odds of drawing at least one Silence are close to 65%. That means we have a high chance of silencing the opponent again in their next upkeep after Day's, putting control of the game back in our hands.
As long as the opponent's board is empty and they can't act, we're back in the position to dig for the chain lock + the {% mtglink "Narset, Parter of Veils" alt="Narset" %} & {% mtglink "Day's Undoing" alt="Day's" %} combo.

That's right: the whole point of the deck is to keep finding chain locks through the midgame while assembling the combo pieces along the way. If you haven't found them yet, cast Day's again to reset and repeat the same process. Even if there's a gap in between, you can use the removal or filtering you draw to buy time until you can win via control or via combo.

Never hold back from casting Day's at the right time out of fear of refilling the opponent's hand. Remember: **Chant's deck logic is built around this card, but your opponent's isn't.**


### Card Choices

Here are the cards most affected by my changes this time.

#### Main Deck

{% mtgcard "Teferi, Time Raveler" %}

Probably the most common planeswalker in Modern, right?
Its busted static ability is the nemesis of many Modern decks, and here it's an essential part of both the silence strategy and the Day's Undoing combo. It's the key card that makes the deck work. Its main job is using [-3] to bounce the opponent's threats and buy turns. Once it sticks, you can keep using [+1] to turn your sorcery-speed removal into instant speed, disrupting on the opponent's turn, or casting Day's during the draw step for the Narset + Day's combo.

{% mtgcard "Narset, Parter of Veils" %}
One of the combo pieces, and also a source of card advantage.
Use it to dig for more silences, removal, big filtering like {% mtglink "Consult the Star Charts" alt="Consult" %}, or just grab Day's and tell your opponent you're about to make their hand go bang.
Her one-card-per-turn restriction makes opponents miserable in many situations, which gives her very high aggro; opponents will almost always attack her. Not to mention that against decks with burn, she'll get shocked right after using her [-2] for value.

{% mtgcard "Day's Undoing" %}
The deck's combo payoff. Where everything begins, and where everything ends.
The most famous combo is the **disappearing hand trick**: cast it with Narset already on the battlefield, and our hand refills, while the opponent draws only one card or none because of Narset.
The timing of this card is tricky. It's not just for the combo; sometimes we'll cast it proactively just to refill our hand. You might think letting the opponent draw too is a bad deal, but strategically our main goal is to **assemble the combo after our fifth land**. Casting Day's proactively lets us continue after exhausting our early resources, to dig for the next combo or more control cards.
One thing to note: Day's only ends the turn and exiles itself when it resolves on your own turn. When cast on the opponent's turn via Teferi's [+1], it doesn't end their turn, and the card goes to the graveyard as usual.


{% mtgcard "The Wandering Emperor" %}
The Wandering Emperor, an old friend from Pioneer.
Many Chant lists have started putting this card in the sideboard; I put two straight in the main deck. It keeps you alive against the mirror, Rakdos, Prowess or Energy, and can even be a win condition on its own.

{% mtgcard "The Mind Stone" %}
Probably what I consider the most important card in the deck for strengthening the silence strategy after my changes. You'd only know about this option if you bought Toothy's guide.
What it gives the deck: you can ramp on turn two and use a silence to block the opponent's tempo on their next turn. On your following turn, it lets you cast a three-mana planeswalker while keeping one mana open for another silence or removal.
Also, it's a white card, so you can pitch it to {% mtglink "Solitude" %}, and it doesn't get blown up by your own {% mtglink "Wrath Of The Skies" %}. In the top 4 mirror, a big part of why I lost to [Gman](https://melee.gg/Decklist/View/3b0ef459-6c02-44e3-9f1e-b4f300120390) was that he cast this card first on turn two on the draw, then silenced me on my turn so I couldn't cast Teferi. On his turn he could cast his own Teferi, with one mana up to fight my {% mtglink "Mystical Dispute" alt="Dispute" %}.

{% mtgcard "Erode" %}
Quite a few lists at overseas RCs have started playing this card, because the mirror needs a very efficient way to remove the opponent's planeswalkers. Personally, I sometimes evoke Solitude and then Erode it myself to ramp.

{% mtgcard "Geier Reach Sanitarium" %}
Before the event, I went back and forth with [SamuelChang](/en/authors/SamuelChang/), still my teammate at the time, about whether to keep this card. He thought it was useless and leaned toward {% mtglink "Petrified Hamlet" %} to shut off utility lands, like the {% mtglink "Ba Sing Se" %} you see in Titan and BroodScale, or naming the opponent's fetch lands to give it a small chance of locking them up.
I preferred to trust my own experience. Very often this land lets me loot away dead cards in hand, and more importantly, it's actually part of the Narset + Day's combo. After emptying the opponent's hand on their turn, if this land is on our battlefield, we can activate it during their next upkeep, forcing them to draw 1 and discard 1. Then Narset locks them out of drawing in their draw step, and they lose.

For the sake of the combo's completeness, I didn't cut it in the end.

{% mtgcard "Isochron Scepter" %}
Another card I thought about for a long time before keeping. Call it the deck's Plan C.
Imprinting Silence/Chant on it completely locks the opponent out of doing anything on their own turn. Draw Teferi later to pair with it, and the opponent can't do anything on either player's turn, which is basically a loss for them.
I originally cut it for an eighth Silence, but in the end I felt 7 Silence played more smoothly, and drawing this card is often close to an auto-win.

![](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7901a544795d.webp)

The silences (7 Silence/Chant).
The deck's original sin, and one of the reasons everyone loves to hate it. Chain silences in the mid-to-late game rob the opponent of any game experience, leaving you playing single-player. The hardest part of the deck is when to use these two cards. You need to know your opponent's deck, and how close you are to your chain-lock turns, to decide when to silence. But most of the time the priority is:
`Stop the opponent's power turn > protect your own chain-silence turn or planeswalker cast > throw it out because you feel like it.`
Throwing it out carelessly usually ends badly. A common misconception about this card is that you can cast it whenever, but silence needs a purpose. If you silence from turn one and leave the opponent nothing restricted afterward, and they still explode with their power turn in the end, it's as if you never cast it.
**Chant is always stronger than Silence.** Usually, when you just want to buy a turn and stop the opponent from acting, cast Silence. In earlier turns you can be greedy and save Chant; in later turns you can cast Silence first and give up a bit of life. The most common time to use Chant is to kick it when the opponent has dumped a bunch of stuff and is about to attack you, then sweep their board next turn.


#### Sideboard

{% mtgcard "Consign to Memory" %}
This card shouldn't need much explanation. It punishes colorless decks and decks with lots of triggered abilities. Many lists later went down to three copies, but after tasting the power of {% mtglink "Ba Sing Se" %} I decided to run a fourth. I absolutely cannot let the {% mtglink "Sowing Mycospawn" alt="Mycospawn" %} trigger resolve. If they want Ba Sing Se, they can draw it themselves; no tutoring it. If you've got the guts, play more than two and good for you if you draw one.

{% mtgcard "Mystical Dispute" %}
This one doesn't need much explanation either. It's strong against the mirror, Blink, or decks running {% mtglink "Psychic Frog" %}, and against counterspell-heavy opponents it can protect your planeswalkers so they resolve.

{% mtgcard "Sanctum Prelate" %}
A suggestion from [SamuelChang](/en/authors/SamuelChang/).
The 7 Silence/Chant version with Wandering Emperor is already very confident against Prowess, and this sideboard slot used to be {% mtglink "High Noon" %}. Both target Prowess, but this card's advantage is that it locks Prowess out completely and isn't caught by {% mtglink "Wrath of the Skies" %}. And because it's a creature, it dodges {% mtglink "Spell Pierce" %} and {% mtglink "Spell Snare" %}; once it lands, Prowess basically has to concede. Incidentally, it also hits Storm, so cutting High Noon doesn't really lower the win rate against Storm.

{% mtgcard "Sanctifier en-Vec" %}
Mainly here for Rakdos; Goryo's is just a bonus.
Compared with {% mtglink "Rest in Peace" alt="RIP" %}, I think it's the better card in every sense. I used to run {% mtglink "Surgical Extraction" %} as graveyard hate, but later I didn't even want to let the opponent fill their graveyard, so I set my sights on this card.
The main difference from RIP: it provides a blocker that almost never dies, and it doesn't exile the Silences in my own graveyard. So when I cast Day's proactively I still have the same, or even higher, odds of redrawing Silence for the plan I want. RIP interferes with that. I also think the only real graveyard deck right now is Rakdos, and this card takes away Goryo's only plan for beating Chant, so I chose it.

{% mtgcard "Supreme Verdict" "rtr" %}
One in the main and one in the sideboard, as a bit of respect for Affinity / Domain Zoo. And if {% mtglink "Emrakul, the Promised End" %} unfortunately resolves against BroodScale, you need this card to sweep it away. This was a judgment I made after rereading Fransisco Sanchez's guide. The best card against Affinity isn't {% mtglink "Wrath of the Skies" %}, it's Verdict, which can clear {% mtglink "Kappa Cannoneer" %}. And against Domain Zoo, winning without this card is nearly impossible.

## Sideboard Plan
Sideboarding for each matchup, shown below:
![06-sideboard](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/260947cc96c9.webp)

## Closing Thoughts
I think I was lucky in every sense this time. The deck was strong, and it's a deck I like. The metagame was good, with lots of favorable matchups. My pairings were good too: I never faced the hardest matchups, Affinity / Domain Zoo. Seeing [Sekun](/en/authors/Sekun/) sitting nearby the whole time really had me scared of getting paired against him.
I was lucky in the win-and-in as well, drawing [Storm](https://guildmagesforum.tw/Modern-Ruby-Storm/), against which I reportedly have a win rate over 80%. All I could say to my opponent was sorry.
The results were good too. In the third-place match against Han, I misplayed and didn't hold up {% mtglink "The Wandering Emperor" alt="Wandering Emperor" %}, but I drew a card that let me answer his power turn. After that, his hand wasn't strong enough in the back-and-forth, and I won the match.
At almost every MIT my goal has been top 8, and a few times I fell just short. This time, going beyond top 8 and even earning a Pro Tour spot feels like putting my past regrets to rest.

![](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7850e28dada6.webp)
