---

title: "Esper Murktide: The Return of Echo of Eons"
date: "2025-02-20 19:51:48"
authors:
  - "cephille"
  - "jeffchen"
categories:
  - "Tournaments"
  - "MIT"
cover: "https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/2c26767063d1-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/2c26767063d1-cover.jpg"
excerpt: "Without Abhorrent Oculus or Ketramose, can Murktide and Echo of Eons still dance?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Modern-Esper-Murktide-w-Echo/).

## Before We Start

> Previously: [A New Trick for Dimir Murktide: Echo of Eons](https://guildmagesforum.tw/Modern-Dimir-Murktide/)

After qualifying for Standard MIT#9 at the end of last year, I started preparing for the Modern MIT#8 a month before the event. Special thanks to [Jeff Chen](/authors/jeffchen/), [faintmama](/authors/faintmama/), and [猴王](/authors/MiohitoKiri5474/); to the No Miss Trigger team put together by [荒野騎士](/authors/ClarkShih/); to everyone who practiced for the big event with me at [Game Square](https://www.facebook.com/GameSquareTCG); and to the friends who lent me cards. Every discussion and exchange with you was an important driving force behind improving my deck. This article is dedicated to all of you.

> Note: If you are only interested in the deck construction, feel free to jump straight to [Deck Construction Breakdown](#%E5%A5%97%E7%89%8C%E6%A7%8B%E7%AF%89%E8%A7%A3%E6%9E%90). That said, the next section, [The Road to Preparation](#%E6%BA%96%E5%82%99%E7%9A%84%E5%BF%83%E8%B7%AF%E6%AD%B7%E7%A8%8B), should also offer some useful advice and methodology for anyone who wants to know how to prepare for a big tournament and what challenges you may run into along the way.

## The Road to Preparation

### Week 1 (20250113 – 20250119)

I started this round of research with Dimir Oculus, the most common list in mid-January:

[Prototype list: Dimir Oculus_20250116](https://www.mtggoldfish.com/deck/6868741#paper)

Focus of this round of testing:
1. Replace the {% mtglink "Counterspell" %} slots with 3 {% mtglink "Thoughtseize" %} and 4 {% mtglink "Force of Negation" %}. The goal was to clear the way for {% mtglink "Abhorrent Oculus" %}'s proactive plan, and to keep free FoN backup available even when tapped out after the Oculus lands.
2. A 1 main / 1 side split of {% mtglink "Kaito, Bane of Nightmares" %}, plus 2 {% mtglink "Orcish Bowmasters" %} in the sideboard, as an alternative plan for the post-board games when the opponent has graveyard hate.

Takeaways from this round:
1. {% mtglink "Kaito, Bane of Nightmares" %} is not an answer. Even at its best (ninjutsu it in successfully, bounce an Oculus-manifested 2/2 Horror, and even the bounced {% mtglink "Force of Negation" %} is usable again), you end up tapped out on your own turn, hitting for 3, surveilling 2 and drawing 1. Against Eldrazi Ramp, Temur Breach and the like, that kind of tempo gap means that when the turn passes, we are the ones who die.
2. {% mtglink "Thoughtseize" %} is mediocre main deck, bad against Energy, and also hurts a lot, so I swapped back to {% mtglink "Counterspell" %}, and FoN went back down to 3 copies.
3. In short, back to square one: we still need to find a win condition that does not depend on the graveyard.
4. One more note: the strength of Thoughtseize, or any cheap discard spell, lies in whether your next threat after seeing their hand is going to give the opponent a headache. If so, it is worth it; if not, you are just losing tempo and trading mana down. Also, in Modern it is hard to derail an opponent's game plan by looking at a single card. Topdecking Thoughtseize at the wrong time, or discarding their threat only for them to topdeck another one right away, are risks you have to weigh whenever you play it.

Btw, at the start of the next week I watched [this Dimir Oculus video by Mengucci](https://youtu.be/Hys6BuqAuxk?si=bXWib5b2_rkcsH-B) and did a second iteration. After testing, though, I felt that main-deck Thoughtseize really was not it... Then I watched the whole video properly and found out that at the very end Mengucci says that going forward his default is that main-deck Thoughtseize in Dimir Oculus is just bad XDD

This tells us to **watch a video to the end instead of copying the decklist from the first minute**. The comment section also often holds responses from people who have finished the video, so even if you do not have time to watch it all, check the comments first before deciding whether to invest the time.

### Week 2 (20250120 – 20250126)

I started by testing the [20250122 MO Challenge 8-1 list](https://www.mtggoldfish.com/deck/6880607#paper). The main-deck {% mtglink "Dauthi Voidwalker" %} looked like an answer to graveyard hate that also counters the opponent's graveyard hate. But after testing I still found it **too fragile**; against Boros Energy, having only a {% mtglink "Dauthi Voidwalker" %} that cannot block is simply awful. The sideboard {% mtglink "Plague Engineer" %} looks like it is there to kill the row of Energy cats, but if the opponent plays around it, then once {% mtglink "Ajani, Nacatl Pariah//Ajani, Nacatl Avenger" %} flips and uses [+2] to put counters on all the cats first, it does nothing. Also, it is obvious that the sideboard {% mtglink "Engineered Explosives" %} is meant to deal with the pile of weirdness unlocked by the {% mtglink "Mox Opal" %} unban: Affinity, Temur Breach and other cheap-artifact-driven decks. But failing to sweep cleanly remains this card's fatal flaw. For all these reasons, this version's strength is mostly that it is favored in the mirror, but it is still very hard to play against other mainstream decks like Energy or the up-and-coming Temur Breach.

The main/side plan of the Dimir shell seemed to be in trouble, and this showed in that week's meta results too: Dimir Oculus kept declining... What to do?

[Prototype list: Esper Oculus_20250125](https://www.mtggoldfish.com/deck/6885347#paper)

I looked at Esper Oculus, which did well that week. The main purpose of adding white was to include {% mtglink "Pest Control" %}. Let me briefly explain what a revolutionary boost this card brings to Dimir shells:

1. Against the popular Boros Energy, Temur Breach, and other artifact-based decks such as traditional Affinity, Scales Affinity, and Hammer Time, it cleans up the opponent's whole explosive board with a single card. No more {% mtglink "Engineered Explosives" %} hitting 0 only to get beaten by a 1-drop, or vice versa, and no more awkward situations like the earlier red splash {% mtglink "Meltdown" %} killing the artifacts only for creatures to finish you off.
2. Traditional sweepers become dead cards stuck in hand in matchups or situations where they are useless, but this card can still be cycled for 2 mana to draw a card, so the deck keeps moving forward.
3. As in point 1, resetting the board after a sweep forces those fast, explosive decks to slow down, which drops them right into the sweet spot of the Dimir approach: counter, remove, then take over the game with {% mtglink "Abhorrent Oculus" %} / {% mtglink "Psychic Frog" %} / {% mtglink "Murktide Regent" %}.
4. When needed, it is essentially a one-sided sweeper. Dimir shells are barely affected, at most losing the 2/2 Horrors the Oculus manifests.

I thought the deck was nearly settled, and that I could enjoy the New Year, see whether the new set DFT had any new cards, make minor tweaks, and go play the big event. Little did I know this was only the beginning of a series of twists...

### Week 3 (20250127 – 20250202)

[Eldrazi Ramp arrives in force](https://youtu.be/O5C7FyItKlI?si=B8z6A8ycKWGHmAk_)! In the few test sessions before the New Year, last week's Esper Oculus got beaten to the point of being unable to function. I was facing an extremely painful choice: should I switch decks?

This week was basically spent preparing for the holidays while racking my brain for a respectable deck that did decently against Eldrazi Ramp. Here are my attempts; spoiler: none of them worked.

- **Indomitable Creativity**: Basically the only way to win is to dig up the Atraxa, Grand Unifier on turn two. → **Not adopted**.
- **UG Infect**: Surely an all-in fast aggro deck can beat ramp? Then I got killed into losing all will to fight by turn-two {% mtglink "Kozilek's Return" %}, {% mtglink "Kozilek's Command" %}, and the sideboard {% mtglink "Dismember" %}. Here I truly felt how different this Eldrazi Ramp is from traditional Green Tron: (1) there is no window of at least three turns while Green Tron assembles its Urza lands; (2) the turn-two sweeper is broken, and playing around sweepers by being too passive makes winning even less likely; (3) Green Tron has no blockers in the first three turns, but Eldrazi Ramp has many ways to produce 0/1 Eldrazi Spawn to block, so the upside of a turn-two Glistener Elf can easily be shut down by the opponent. All in all, I once again experienced, deeply, the fact that Infect has been phased out of the environment, and looking at my [all-foil Infect in my binder](https://docs.google.com/document/d/1RvlrkplGfHERnoImj1kfQWpqX5gRU1EcZcmZO3TNyLk/edit?usp=sharing) made me very sad. → **Not adopted**.
- **Eldrazi Ramp**: I built it as a practice partner, but basically I ~~with all my Phyrexian soul~~ resist playing ramp decks → **Not adopted**.

Then, on the day before New Year's Eve, I saw [ALG](https://www.facebook.com/ALGTW) buying Oculus at a high price, and a very clear signal popped into my head. I had always been thinking about how to fix the Oculus's weakness to graveyard hate in post-board games, and how the main deck is locked into 4 Oculus, 4 {% mtglink "Unearth" %}, and 6-7 {% mtglink "Thought Scour" %} and {% mtglink "Consider" %}, which makes the deck too rigid. **Do I really want to bring this deck to the MIT venue? Especially now that the Oculus's powerful plan basically can no longer beat Eldrazi?**

After discussing with Jeff, the conclusion was roughly this:
1. The Oculus's unfair plan is no longer good enough in the current meta, and in most matchups it does not win fast enough. Rather than being locked into at least 10 cards in the main deck, and given its relative weakness to graveyard hate, giving up the Oculus to open up more possibilities for the Dimir shell is necessary.
2. We agree that 4 {% mtglink "Unearth" %} in the Oculus shell, together with the Frog and the other three-mana-or-less creatures with menace, is a very powerful line. But as in point 1, it is not worth making the main deck rigid for it.
3. Fixing the old filtering problem: {% mtglink "Thought Scour" %} can mill away important lands and get you stuck, and {% mtglink "Consider" %} does not filter well, so switching back to 4 {% mtglink "Preordain" %} to strengthen the deck is a reasonable choice.
4. Using other unfair plans to counter the various unfair plans in the field is the focus to explore next. The known [Echo of Eons Combo](https://guildmagesforum.tw/Modern-Dimir-Murktide/#Combo-%E8%AA%AA%E6%98%8E) is one of them, and we need more similar pairings to reach that goal.

Based on those four points, I felt that dropping the Oculus, and focusing on the familiar Dimir Murktide plus the Echo of Eons combo before figuring out how to answer the meta, was a very reasonable decision with a low switching cost.

### Week 4 (20250203 – 20250209)

[Prototype list: Esper Murktide_20250206](https://www.mtggoldfish.com/deck/6907032#paper)

This week, and the latter half of last week, were mostly spent writing the [DFT limited ratings and articles](/categories/DFT/) for [Guildmages' Forum](https://guildmagesforum.tw/). There was less actual playtesting; instead, Jeff and I had in-depth discussions about what a given card, or certain situations, need. After discussing, we iterated quickly, and I could clearly feel the 75 converging!

The mode I adopted this week was to first update my own decklist and test results, then start a discussion on one or a few specific points. The benefit is that it requires no real-time or face-to-face replies from teammates, which is an effective way to discuss for a player like me who has little time. An example:

![](https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/c14f68a1a9b8.webp)

### Week 5 (20250210 – 20250216)

The last week was mostly focused discussion on a few specific cards. An example:

![](https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/e26a8c0020cf.webp)

The core of the discussion was how to deal with {% mtglink "Ketramose, the New Dawn" %}. It couldn't be helped: I failed to preorder it for 800 and it shot up in price, so I couldn't afford it and had no time to test it, and instead tried to find ways to fight it!

My takeaway from this week is that the results of last week and this week were actually not much different, and for many cards the outcome of the discussion was "do not adopt". Of course, this is also a sign that the discussion had converged well.

Worth mentioning, though, is that there was one fairly sizable change this week: Jeff convinced me to add {% mtglink "Tamiyo, Inquisitive Student//Tamiyo, Seasoned Scholar" %} to the main deck. Although there is a risk of her getting swept along with {% mtglink "Pest Control" %}, Jeff made the top four of the [20250209 CM 小蘇不會輸盃](https://www.facebook.com/photo/?fbid=1133642042106811&set=pcb.1133642215440127) with a 2-copy build, which directly proved that the Tamiyo and Pest Control interaction is manageable. The advantage she brings turns out to be far greater than I expected, and I will add more on that in a later section.

(Jeff: Tamiyo on turn one, attack plus Pest Control on turn two. The ultimate BM (Bad Manner)!)

![](https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/0a4a412d3faf.webp)

> Because Tamiyo is just that strong, I was willing to become an illustrator for her! The reference image is Secret Liar's [Tamiyo, the Moon Sage](https://scryfall.com/card/sld/396/tamiyo-the-moon-sage). Incidentally, the thing floating in the air next to her is her scroll, not a chikuwa XD

## Why Isn't Dimir Oculus Good Enough?

Jeff: I've probably played quite a few Dimir decks, so let me share my humble opinion on Modern Dimir. Dimir decks have few threats, but every one is deadly, and they use removal or counters in hand to cover the board. Balancing those two is the art of Dimir.

To use an analogy of attack styles: Boros attacks at multiple points, looking for holes in the opponent's defenses to break through, while Dimir wears the opponent down in a war of attrition, builds a tempo advantage, and then nibbles away at the opponent's weakest spot.

The best Dimir deck I have ever seen was probably Legacy's Dimir Reanimator, but because a deck that deploys threats that fast with FoW protection was too powerful, the Frog got banned.

The Oculus plus {% mtglink "Unearth" %} build burst onto the scene and once dominated Modern. Its ceiling is the Oculus on turn two, which makes the opponent's board collapse outright; its floor is always milling the wrong cards, and having the cards you need in the graveyard stuck in your hand, which is very annoying. It pushed Dimir into hyper-aggro, committed to attacking and abandoned some defenses; worse, it focused on a single game plan, directly discarding the flexibility and the draw-filter ability that are distinctive to Dimir decks. Overall, it weakened what this color pair can do.

Blue-based decks in Modern need nothing more than stable draw-filtering and good counters. Today's decks that touch blue do so for consistency, or to use {% mtglink "Consign to Memory" %} in the sideboard.

If your main force is reanimated Frog plus Oculus, what is the reserve? DFT offered the answer of Ketramose, which still gives you a board after graveyard hate, and I think that is very good, but it clearly does not fix the consistency problem. At the [Porland RCQ](https://melee.gg/Tournament/View/197801) before MIT, every copy of this style of Esper Murktide was eliminated, hunted down by the other decks in the field, a harsh fact that confirmed our guess.

For post-MIT Modern Dimir (or Esper), I think it can go in a midrange direction, dropping the Oculus-plus-reanimation approach and simply using Tamiyo + Frog + Murktide + Ketramose. These creatures combine bodies, resource refilling, and life gain, and combined with Dimir's tempo advantage, that is enough to earn a place in the field.

## Deck Construction Breakdown

First, the conclusion I had in mind while writing this summary: **I think the Esper Murktide I played is a very good fit for the [MIT#8 main event meta](https://melee.gg/Tournament/View/221434).** Of course there is plenty of room to improve, but I am personally quite satisfied with the core and framework of this version. The disappointing result is down to the pilot, not the deck.

[MIT#8 decklist_cephille](https://melee.gg/Decklist/View/474954)

![](https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/422d6c917c47.webp)

[MIT#8 decklist_Jeff Chen](https://melee.gg/Decklist/View/478840)

![](https://images.guildmagesforum.tw/posts/Modern-Esper-Murktide-w-Echo/af6bc71f803c.webp)

Since I am the main author of this article, the following content will mainly explain [my list](https://melee.gg/Decklist/View/474954). Here are the main differences between my version and Jeff's:
- In the main deck I chose 3 {% mtglink "Force of Negation" %} and he did not play it; Jeff instead played 2 {% mtglink "Consider" %} and one {% mtglink "Drown in the Loch" %}, and the choice of the third graveyard hate card also differs slightly.
- For creatures, Jeff focused on value and on matchups won by an unfair {% mtglink "Harbinger of the Seas" %} plan, with a full 2 each of {% mtglink "Tamiyo, Inquisitive Student//Tamiyo, Seasoned Scholar" %} and Harbinger; I focused more on answering the opponent's cards, running only 1 of each of those two creatures, and added more {% mtglink "Prismatic Ending" %} and {% mtglink "Sink into Stupor//Soporific Springs" %}.
- On fetchlands, Jeff spread his choices out more, which reduces the impact of {% mtglink "Surgical Extraction" %}. He also played a third {% mtglink "Watery Grave" %} to lessen the problem of getting stuck from a fastland when you fetch or cycle Island-cyclers and Echo of Eons in the mid to late game.
- The sideboards are basically 12 of the same cards, but I valued graveyard hate and the midrange games after sideboarding more, while Jeff valued sweepers and the Eldrazi Ramp matchup more.
- In his post-tournament review, Jeff said the main deck should drop {% mtglink "Consider" %} for {% mtglink "Force of Negation" %}: with two Tamiyo already, the cost of FoN is entirely acceptable. He also said the sideboard {% mtglink "Shatter Assumptions" %} was not a good choice and he would lean toward a fourth {% mtglink "Consign to Memory" %}.

### Deck Core

> Note: All the deck design below targets this MIT#8. MIT#8 is an open-decklist event, which differs from the closed-decklist store events and MITQs that most of you play in. Players get two minutes before the match to look over the opponent's list, and may also check it while sideboarding. Building for open lists and for closed lists is very different, which will be illustrated with examples below.

#### Core Creatures

{% mtgcard "Psychic Frog" %}

The core creature of Dimir shells. In my view, **if Dimir keeps performing strongly, the Frog will likely be considered for a ban. It's just that strong!** Whether Oculus or Murktide, the decks are all built around this Frog. Three abilities are fused onto a single two-mana card, and after MH3 came out, the Frog alone turned the tempo-counter decks of that time from Izzet to Dimir, abandoning red.

Not enough cards in hand? Have the Frog deal combat damage to a player or planeswalker to draw a card, rewarding you for attacking and gaining card advantage. Not big enough? Discard useless cards to grow it; the traditional {% mtglink "Lightning Bolt" %} basically cannot kill a Frog with two cards in hand, and with a pile of cards in hand the Frog can hit like a truck. Blocked by ground creatures and unable to attack effectively? Exile three cards from your graveyard and your giant Frog flies over the armies!

That is a brief account of the Frog's strength. Now for the hidden advantages of its abilities. If you can fully exploit them, the Frog's power will far exceed your imagination:
- There are far too many tricks you can play with discarding: Madness, filling the graveyard and digging things back out, too many to list. This is also the main reason the Frog was banned in Legacy: the reanimation strategy with {% mtglink "Reanimate" %} was too strong. And in Modern, our Oculus shell is playing exactly this line. The {% mtglink "Echo of Eons" %} this deck is built around can also be discarded to the graveyard this way and flashed back.
- Exiling three cards from the graveyard at instant speed not only makes the Frog fly, it can also instantly make your Murktide bigger, dodge cards like {% mtglink "Drown in the Loch" %}, or make the opponent's graveyard hate such as {% mtglink "Surgical Extraction" %} miss its target.
- Paired with the recently hot {% mtglink "Ketramose, the New Dawn" %}, every time you activate the Frog's ability on your turn you draw a card and lose 1 life, and with {% mtglink "Darkblast" %} you can make a gigantic Frog, though your library may be about to run out... For combo details, see [this article](https://mtgrocks.com/ketramose-the-new-dawn-psychic-frog-combo-mtg/); I won't repeat them here.
- There are many more possibilities, worth readers exploring further.

{% mtgcard "Orcish Bowmasters" %}

I have heard quite a few people say that after {% mtglink "The One Ring" %} was banned, there is no need to play draw-hate like Bowmasters, but we don't think so.

When I played the Oculus builds, I often faced games on the play where I had to hold up a counter and could not cast the Frog on time, and I badly wanted the deck to have a powerful flash creature to fill the tempo gap when both players pass. Bowmasters fits that need perfectly! Besides that, it also dominates against the mainstream Boros Energy, and even against Eldrazi Ramp, killing the opponent's lone 0/1 Eldrazi Spawn in time is sometimes very valuable. Beyond pairing with Echo of Eons (when both players draw seven, you can hit any target for 7 and Amass Orcs 7), there are various other wonderful uses, which I leave for readers to discover.

Bowmasters is the kind of card that feels like a given when you have it, but you really miss it when you don't. A card like that is naturally an essential core of the deck.

{% mtgcard "Murktide Regent" %}

It's MH3 already, and you're still using Murktide? As I mentioned earlier in [The Road to Preparation](#%E6%BA%96%E5%82%99%E7%9A%84%E5%BF%83%E8%B7%AF%E6%AD%B7%E7%A8%8B), choosing the Oculus shell costs you fear of graveyard hate, deck rigidity, and weaker filtering, all far from the traditional Murktide tempo-counter plan; and in today's meta, where hitting the Oculus on turn two does not necessarily mean victory, sticking to the Oculus's proactive plan no longer appeals to me. With Murktide, you keep interacting with the opponent in the early to mid game while building your graveyard, and then in the mid game a Murktide comes crashing down, and victory is usually not far off. Choosing Murktide or Oculus, or even some other win condition, is in my opinion not a binary of right and wrong. It is about knowing how you want to play the match and making the choice that best fits your game plan.

As for playing only 2 Murktide, that is simply what repeated testing showed to be the best result. Although sometimes you don't draw one, we have other ways to win.

{% mtgcard "Harbinger of the Seas" %}

Nicknamed "Blue Moon Man". An important card in our Unfair-versus-Unfair plan. But because in some environments land hate is not critical against the decks you face, I finally decided on 1 main / 1 side.

Let me briefly touch on the idea of 1 Harbinger in the main deck; this is a choice I made for an open-list event. I have one in the main deck. Even if you are a two-color deck, when fetching for lands you must give this Harbinger enough respect. When you ignore the Harbinger's existence, or when your opening hand prevents you from fetching a basic land, and neither side has a significant threat on board, Harbinger coming down tilts the game in our favor. Even making Orzhov Blink unable to produce black to use {% mtglink "Fatal Push" %} or {% mtglink "Overlord of the Balemurk" %}, or producing only two white mana to cast creatures, can leave the opponent's game plan stuck. ~~Oh, the opponent has Solitude and Aether Vial? Then forget I said anything XD~~

#### Why Play FoN?

{% mtgcard "Force of Negation" %}

Every Murktide/Oculus deck plays 2 to 3 FoN, and there are also builds with 1 or 4, or even 0. I personally think this hides each player's understanding of the current environment, and they choose the number accordingly.

When I first played the Oculus build, I even chose a 4-copy configuration of FoN, to make sure the Oculus would not be removed at sorcery speed or swept away in response after it resolved. I have not played a 2-copy build, but I guess it serves as a defense when you tap out to deploy a threat. So why did I choose 3? **3 is a number that means you hope to have one in your opening hand but would rather not have a second one.** This brings me to something I practiced over and over while preparing for this big event: **use specific matchups and specific situations to decide the key cards in your deck**.

- **Against Temur Breach**: The targets are the opponent's deadly {% mtglink "Underworld Breach" %} and {% mtglink "Grinding Station" %}; and sometimes when we are short on mana, countering a {% mtglink "Malevolent Rumble" %} is also a key play. Since FoN exiles the card after countering, countering a noncreature artifact prevents the opponent from reusing it.
- **Against Eldrazi Ramp**: Top priority! It helps us stop the opponent's explosive turn one or two acceleration into a turn-three land destruction. Against Eldrazi I think the best opening hand in the main deck is: FoN, {% mtglink "Spell Snare" %}, Bowmasters, {% mtglink "Harbinger of the Seas" %}, and three lands. In this process, FoN stops the opponent's accelerant on the play, then we use Snare to hold down the opponent's second mana rock or {% mtglink "Malevolent Rumble" %}, which limits the opponent's perfect start to a three-mana play with green, or a four-mana Eldrazi without green. After that the opponent can only tap out for {% mtglink "Sowing Mycospawn" %} to ramp and cannot destroy a land, and then our Harbinger comes down and can take over the game, until the opponent resolves two or more further mana rocks or a Rumble, only then producing two colorless to cast {% mtglink "Kozilek's Command" %} to remove the Harbinger, by which point it should be too late, or we have counter mana held up. This plan cannot be executed without the zero-mana interaction that FoN provides.
- **Against Boros Energy**: Weaker, but at least it can stop the opponent's sorcery-speed removal, and stop {% mtglink "Goblin Bombardment" %} when the opponent tries to resolve it in the window after our turn-two Frog.
- **Against Orzhov Blink**: The weakest, but if it can stop the opponent's turn-one {% mtglink "Aether Vial" %} on the play, that is priceless.
- **Against other combo decks**: Such as Ruby Storm and Azorius Breach. Basically the opponent wins by completing the combo at sorcery speed, and FoN helps keep you from dying outright just because you cast a creature or tapped out to counter an earlier threat.

Given the above, although FoN costs you card advantage, its timing of interaction and its zero-mana nature are very important against these mainstream decks. So it is worth playing 3. The reason for not playing 4 is also obvious: against midrange decks like Boros and Orzhov, the penalty for drawing two or more FoN is hard to accept.

> If FoN is this important, what about {% mtglink "Subtlety" %}, which also interacts with creatures/planeswalkers for free? Unfortunately, Subtlety was made to interact with its Elemental brothers, and in a Modern environment where the red and black Elementals are banned, I don't think there is any need to use Subtlety. For a deeper argument, see what I wrote earlier: [Tale of the Five-Color Elementals: A Brief Review of the MH2 Five Elementals](https://guildmagesforum.tw/MH2-Mythics-Elementals/).

#### Cornerstone Cards of the Deck: Counters, Removal, and Filtering

{% mtgcard "Counterspell" %}

Nicknamed "the true counter". Once we make it through the early disruption, or in relatively slow matchups, Counterspell is a very reliable permission spell. I tested a 3-copy version, but kept feeling I was one counter short, so I ended up playing a full 4.

> Two mana, counter target spell, what a beautiful card! ~ Quoted from one of [Andrea Mengucci](https://www.youtube.com/@AndreaMengucci)'s streams.

{% mtgcard "Fatal Push" %}

The most reliable removal spell in the environment, bar none. Basically, only against Eldrazi do you consider siding out one or two copies (not all of them; sometimes killing the opponent's only 0/1 Spawn is quite crucial).

{% mtgcard "Preordain" %}

Preordain is the cornerstone of the deck's filtering, but because the environment has combos that are too fast, you often will not have time to filter in the early game, and need aggressive mulligans to find the right opening hand to have a good experience. Of course, once you reach the mid to late game, Preordain's filtering depth can help you pull ahead in one go, and that is why it deserves a full 4 copies.

#### Unfair vs. Unfair: 2 Surgical Extraction in the Main Deck

{% mtgcard "Surgical Extraction" %}

Surgical Extraction counts as a core card too!? That's outrageous! Uh... yes...
But if you already know what to extract in every match, why not play it main deck? Against the mainstream Dimir Oculus, you can Extract in response to Unearth, which is effectively a counter for the opponent's reanimation spell, and against any mainstream deck, Surgical Extraction is always useful, whether it takes a key combo piece or the opponent's core card, just take it. But to make up for this card's loss of resources, you need to bring cards that can generate extra resources.


### Other Chosen Cards

#### More Cheap Counters That Lock Down Specific Matchups

{% mtgcard "Spell Snare" %}

The best one-mana counter in the environment, with an extremely wide range of targets, and a core card for locking down the key cards of fast combo decks, such as {% mtglink "Underworld Breach" %} and {% mtglink "Grinding Station" %} in Temur Breach, the two-mana cost reducers in Ruby Storm, and the opponent's Counterspell in the mirror. After testing, my takeaway is that it deserves 3 copies. In some earlier periods of Modern it was even played at 4 across main and side.

Let me also mention why I did not play other one-mana counters such as {% mtglink "Spell Pierce" %} or {% mtglink "Stern Scolding" %} in this slot:
- Spell Pierce main deck can have a deterrent effect in open-list events, but after trying a configuration of 1 Pierce and 2 Snare, I found that most of the time I held Pierce wishing it were Snare, so I took it out XD
- Stern Scolding main deck could improve the matchup against Orzhov Blink and make the Boros Energy matchup a bit better, but at the time my preparation was for an MIT#8 that would mostly be Energy, Eldrazi Ramp, various combos, and a small amount of Murktide/Oculus and Orzhov Blink, so I did not choose it.

#### The Main Reason to Splash White: Pest Control

{% mtgcard "Pest Control" %}

This is the main reason for the white splash, but it is not itself the reason you would want to play this type of deck. It is more a necessary card forced upon us by the environment, so I don't think it belongs in the "core cards" section. The reason I chose this card was already explained in [Week 2](#Week-2-%EF%BC%8820250120-%EF%BD%9E-20250126%EF%BC%89) above. Here I will explain why I chose 2 main / 1 side.

The main reason is that I predicted Eldrazi Ramp would be the biggest share of the field, and drawing two or more of this card in that matchup is something you really would not want (just as I said about the Eldrazi matchup when discussing FoN), so I put the third copy in the sideboard. ~~Then in round 5 of the main event I got paired against Scales Affinity, woe is me.~~

#### More Value Cards

{% mtgcard "Echo of Eons" %}

Although [Echo of Eons](https://guildmagesforum.tw/Modern-Dimir-Murktide/) is one of the ways our deck goes unfair, it is not indispensable. Often we may take out one copy in the sideboard, but we always keep at least one to preserve the deck's flexibility for a quick win. Besides being fun, the important thing about this unfair approach is that once the conditions are met, it wins fast enough, which is the main reason it still has 2 slots in the main deck. In many matchups you must not only take control first, but also win quickly afterward; Echo of Eons performs very well at that.

{% mtgcard "Tamiyo, Inquisitive Student//Tamiyo, Seasoned Scholar" %}

[We met too late](https://youtu.be/otvd3rxo_rE?si=GEi9a1DXWv6qQ3g5), {% mtglink "Tamiyo, Inquisitive Student//Tamiyo, Seasoned Scholar" %} and I. Jeff had kept recommending her to me, but I did not own the card, and I was a bit doubtful about her interaction and sequencing with Pest Control. But in the last week, convinced by Jeff, I half-heartedly put in one...

...and you don't know until you try it, and then you are amazed! So strong! Truly, insanely strong! After resolving for one mana she starts generating cards, and against Energy she is also a great blocker plus bait for removal. Most of the time she is stronger unflipped, but once flipped, the [+2] basically holds down the army of Energy cats, and if the opponent doesn't attack her, two turns later you can [-7] for an ultimate that draws half your library, or [-3] to pick up a graveyard spell and cast it to wreak havoc or counter things. A card this strong costs only one mana!?

Readers are welcome to join the Church of Tamiyo, for a thousand years and ten thousand generations, though there's no need to unify the world.

#### More Graveyard Hate

{% mtgcard "Nihil Spellbomb" %}

After all the testing, the deck needs 3 to 5 graveyard hate cards across main and side, with 3 strongly recommended in the main deck. Besides the core {% mtglink "Surgical Extraction" %}, I also want a one-shot graveyard clearer in the main deck, and {% mtglink "Nihil Spellbomb" %} does that quite well.

The other graveyard hate cards competing with it are described below:

- {% mtglink "Cling to Dust" %}: Reusable, which is nice, but the single-target graveyard hate slot is already reserved for Surgical Extraction. We still need a one-shot graveyard wipe to delay the desperate endgame of {% mtglink "Emrakul, the Promised End" %} in Eldrazi Ramp, or to stop the decisive transform-and-assemble-the-pieces play after {% mtglink "Shifting Woodland" %} delirium in Amulet Titan or Temur Breach.
- {% mtglink "Thraben Charm" %}: Since the gap we need to fill is a one-shot graveyard wipe, and we are splashing white anyway, this multi-purpose charm should be worth considering; however, because we don't have as many creatures as Boros Energy, the first mode, dealing damage, will mostly fail to kill the key creatures, and the one-shot graveyard wipe costs two mana. It's flexible, but if our goal is to clear the graveyard, Nihil Spellbomb is still better: for the same cost, it doesn't cost a card, and it can trigger Push's revolt. Destroying enchantments does give us some pause, but considering that we won't always have white, we shouldn't go looking for extra white lands just for that flexibility. In the end I gave it up. Oh, and because the Charm costs two, if I really want to clear the graveyard in the mirror and it gets Snared, I truly can't accept it XD

#### And More Removal

{% mtgcard "Prismatic Ending" %}

This slot was originally {% mtglink "Dreams of Steel and Oil" %}, which was about being tricky. What I liked was that nowadays basically every deck's win condition is a creature or an artifact, and {% mtglink "Dreams of Steel and Oil" %} happens to combine discard with half a single-target graveyard hate effect. However, in testing, perhaps I never ran into situations where it shone. Later, looking at this old card's powerful removal, I found the situations to be remarkably similar, and {% mtglink "Prismatic Ending" %} usually performs better and offers more value.

Take Orzhov Blink as an example: Dreams of Steel and Oil needs us to be on the play to have a chance to discard the opponent's Vial, while Prismatic Ending lets us remove the Vial directly even on the draw. And in the mid to late game, converge can remove a three-mana threat like Ketramose, which is another reason it appealed to me for the main deck. In short, it gives the deck more time to adapt, and that is why I chose this card.

By the way, during preparation I saw some Dimir decks playing {% mtglink "Bloodchief's Thirst" %} to fill a one-mana removal slot. But considering the flexibility of removing a three-mana menace creature, Prismatic Ending is an upgrade on the same concept.

{% mtgcard "Go for the Throat" %}

Finally, a single main-deck kill spell that costs two was something Jeff and I decided was a must, and it needed to satisfy at least one of the following conditions:

1. Can remove Murktide and other high-cost creatures outside Push's range
2. Can remove Ketramose and other creatures that need exile to deal with
3. Can remove {% mtglink "Emrakul, the Promised End" %}
4. (Ideally) can be cast for two mana or less

From these criteria we shortlisted the following cards, with brief reasons why each was chosen or not:

-  {% mtglink "Go for the Throat" %}:
**The final choice.** Although it cannot remove Ketramose or Emrakul, its inability to kill artifact creatures is actually not critical. Most artifact creatures fall within the range of other removal or even Bowmasters, and the only one it cannot kill, {% mtglink "Kappa Cannoneer" %}, cannot be killed by the other options either, so it's not a problem.
-  {% mtglink "Baleful Mastery" %}:
Very close to the final choice. It costs four but can be cast for two, and it can get around Snare; but I dropped it because the cost of giving the opponent a card when cast for two may be unaffordable.
-  {% mtglink "Path to Exile" %}:
A very good exile removal, but dropped because it would make our later Harbinger unfair plan worse.
-  {% mtglink "The End" %}:
The lobotomy effect is attractive, but it is basically too clunky at four mana.
-  {% mtglink "Leyline Binding" %}:
Has a chance to come down for three and can hold off Emrakul. But considering the environment has quite a few enchantment answers, the board might collapse if the opponent removes it.
-  {% mtglink "Shoot the Sheriff" %}:
Fairly close to GFTT, but not adopted because it can't kill the Outlaws such as {% mtglink "Ragavan, Nimble Pilferer" %} and {% mtglink "Dauthi Voidwalker" %}.
-  {% mtglink "Vindicate" %}:
Meets conditions 1 to 3, and can even blow up a land! But as a three-mana sorcery-speed catch-all it is still not very compatible with the tempo of Murktide decks, so not adopted, though given time it may be worth trying.
-  {% mtglink "Vanishing Verse" %}:
Can't kill a pile of the things that need killing; impossible to use.

> Note: If readers really want to know how to deal with {% mtglink "Kappa Cannoneer" %} using spot removal, here is a small trick from the author:
>
> **Kappa Cooking Class (~~secret recipe~~):**
>
> 1. Don't play GFTT; instead play another two-mana kill spell such as Shoot the Sheriff
> 2. In post-board games, bring in {% mtglink "Consign to Memory" %}
> 3. 【【[Impeccable Timing](https://scryfall.com/card/kld/19/zht/%E5%AE%8C%E7%BE%8E%E6%99%82%E6%A9%9F)】】 - The opponent has Kappa on the battlefield and is casting a colorless spell; we have four mana open, with a two-mana kill spell and Consign in hand. First target Kappa with the two-mana kill spell, causing its ward 4 trigger to go on the stack, then use Consign to counter the colorless spell on the stack, paying one mana for its replicate ability, and have the copy Consign counter Kappa's ward 4 trigger (countering in the reverse order works too, as long as you declare it correctly). Two for two, perfectly reasonable, right?
> 4. 【Ordinary Timing】 - Same as Impeccable Timing, but simply use Consign itself to counter the ward 4 trigger, a two-for-one, slightly losing XD

### Land Configuration

Basically there are 19 lands from the main land category, plus another 1 to 2 Island-cyclers or spell lands, for a total of **20 to 21 "land" slots**:

1. **9 fetchlands**, 7 of which can fetch a basic Island and 6 of which can fetch a basic Swamp.
2. **8 lands that can be fetched**, including 4 shocklands, 2 surveil lands, 1 basic Island and 1 basic Swamp.
3. **Two lands that cannot be fetched**
4. **1 to 2 Island-cyclers or spell lands**

#### 9 Fetchlands

My personal habit is to play one more fetchland than fetchable lands, so I chose a 9:8 configuration. I know that in some Oculus builds you might choose 10:8, or even 11:7, to fill the graveyard like crazy. But I think in a Murktide build the 9:8 configuration is better. Using more fetchlands purely to fill the graveyard or thin the deck costs extra life and, I feel, does not generate much extra value. Of course, this is a matter of opinion. Jeff chose an equal 9:9 configuration, which is also viable. An extra Dimir shockland also helps avoid getting our mid to late game spells stuck.

#### 8 Fetchable Lands

Since this is a three-color build with a white splash, we need at least two fetchable lands that produce white.

Of the 4 shocklands, I chose a version with 2 Dimir and 2 Azorius. {% mtglink "Watery Grave" %} gets 2 copies because Dimir is the main color pair, and I once tested only 1 {% mtglink "Hallowed Fountain" %} with {% mtglink "Meticulous Archive" %} as the other, but found that I would be in a spot where I needed a turn-one {% mtglink "Prismatic Ending" %} but the only land in hand was a surveil land that had to enter tapped, so I ended up going back to 2 Azorius shocklands.

Across many tests, the acceptable upper limit for surveil lands was basically 2. I tested a version with one more Azorius surveil land, but after getting stuck with it I went back to 2. The reason I didn't pick one Dimir and one Azorius is that in a control matchup where both sides play a fetch and pass in the first two turns, you basically want the surveil land not to block your two black spells on turn three (for example Bowmasters + Push), so I picked 2 {% mtglink "Undercity Sewers" %}.

One basic Island and one basic Swamp each let you find the land you need that turn with lower life pressure. I didn't add a second basic Island because I didn't want to get my on-time turn-two {% mtglink "Pest Control" %} stuck.

Although the white splash is quite worthwhile against the current meta, the cost of a third color is at least 3 to 5 more life lost. Not only on the critical turn two, but even on turns three and four when we want to do 2+1 or 2+2, we often had a shockland in hand, or a fetchland that had to fetch a shockland, and had to pay extra life. This drawback was even more evident in my second round on the day of the main event against Boros Burn, and I eventually lost that match.

#### 2 Unfetchable Lands

In my version I played 2 {% mtglink "Darkslick Shores" %}. The reasons for choosing fastlands were mainly:
- A dual land that doesn't cost life in the first three turns
- Until its condition is turned off, it won't get my turn-one blue/black spell stuck

Of course, in the mid to late game, the fastland's need to enter tapped may slightly get in the way of our Murktide plus Counterspell protection, a five-mana hard-cast {% mtglink "Lorien Revealed" %}, or a six-mana Echo of Eons. But considering that the key of our deck is interaction in the first three turns, I still ended up choosing two Dimir fastlands. In an open-list event, playing a Dimir fastland on turn one also adds variables for the opponent to consider: every blue/black spell they can cast for one mana or less must be factored in. Dimir shocklands can certainly do that too, but the 2-life cost needs extra consideration.

As for the other lands that others might play, let me also briefly explain why I did not pick them:

1. {% mtglink "Otawara, Soaring City" %}: A very flexible four-mana channel bounce effect that is hard to interact with but a bit clunky; and producing only blue is a drawback, so in practice I'd still lean toward {% mtglink "Sink into Stupor//Soporific Springs" %}.
2. {% mtglink "Gloomlake Verge" %}: Great from turn two onward, but when you can only play it on turn one and want to cast another black spell, it is a real headache.

#### 1 to 2 Island-Cyclers or Spell Lands

The debate over 1 {% mtglink "Lorien Revealed" %} actually came from discussing turn-one filtering. We often keep a one-land hand with filtering, and a turn-one {% mtglink "Preordain" %} or {% mtglink "Consider" %} is there to guarantee a land drop on turn two, and an Island-cycler guarantees you will find a land in that situation; after all, I have run into a hand of 1 land and 2 Preordains where, after casting both and drawing for the turn, I advanced 7 to 8 cards in total and still could not find a land. And in the very late game, when it comes down to a topdeck war in the junk time, five mana to draw three becomes very powerful, and our builds always have a chance of reaching that stage. The number of Island-cyclers here depends on the person; most decks play 1 to 2 {% mtglink "Sink into Stupor//Soporific Springs" %}. Its bounce effect is very strong in Modern, and handy for dealing with hard-to-remove creatures like Murktide, Primeval Titan, and Ketramose; bouncing a spell is also at times equivalent to a counter, such as bouncing a card like {% mtglink "Indomitable Creativity" %} that needs extra conditions to cast, or against Eldrazi Ramp sacrificing a 0/1 Spawn to pay for a spell. Since I really wanted a card with a bounce effect, and Otawara is too heavy while {% mtglink "Brazen Borrower//Petty Theft" %} gets hit by Snare, I ended up playing 1. I don't intend to treat it as a land, really; 19 lands plus 1 Island-cycler is enough.

### Sideboard Strategy

Design for Win, which is exactly the core of the sideboard! So correctly predicting the field to allocate the most effective sideboard, and choosing the most versatile sideboard cards, is a very important part of playing a tempo-counter deck like Murktide. Below I will only briefly describe my understanding of this sideboard, and will not list a Sideboard Guide. After all, MIT#8 is over and the meta has kept moving.

#### Counters! More Counters!

{% mtgcard "Consign to Memory" %}

- A must for Eldrazi Ramp. Load up on it; if there really are a lot of Eldrazi, play 4. Drawing it versus not drawing it makes a world of difference in the matchup. Basically save it for Eldrazi whose abilities trigger on cast; early on it mainly holds down the opponent's {% mtglink "Sowing Mycospawn" %}, and in the mid to late game it is saved to keep the peace against Emrakul.
- I basically won't bring it in against Orzhov Blink, since countering only half a card is too costly.
- Against Temur Breach you could consider 2 copies. Using it to counter Grinding Station is actually not very good, since the opponent can always cast it again with Emry or Breach, but if you have follow-up Extraction or other graveyard hate, it's worth it; or counter the chapter III trigger of {% mtglink "Urza's Saga" %} that searches for an artifact, so the opponent can't find Mox Opal after being blown up by Pest Control, or block the opponent's {% mtglink "Aether Spellbomb" %} so that their plan to bounce our huge Frog/Murktide falls apart, and so on...

{% mtgcard "Stern Scolding" %}

- A key card against Orzhov Blink; the key target is the opponent's Solitude. Of course, you can also counter other small creatures if resolving them would matter.
- Also great against Energy, an extra card to hold down {% mtglink "Ajani, Nacatl Pariah//Ajani, Nacatl Avenger" %} or {% mtglink "Seasoned Pyromancer" %}.
- A key card against Golgari Yawgmoth when they go first; it mainly counters {% mtglink "Delighted Halfling" %}, {% mtglink "Grist, the Hunger Tide" %}, {% mtglink "Yawgmoth, Thran Physician" %}, and so on; on the draw it must be paired with Push, otherwise once the Halfling resolves all of your counters are dead.
- Brought in for the mirror only if there is a free slot and I'm on the draw; the only mainstream Oculus-type target is the Frog, and removal or other counters are enough.

{% mtgcard "Mystical Dispute" %}

- A mirror staple, but I feel that right now there's no need to play 2 copies. The reason is that Dimir is still on the weak side, so one in the open list is enough to scare the opponent, and you don't even need to bring it in XD
- I'm not sure at all whether to bring it in against Temur Breach, but considering that the opponent can probably still afford three mana, I lean toward not bringing it in.
- If you're really afraid of being killed by {% mtglink "Kappa Cannoneer" %}, you can bring it in against Affinity, where the opponent can hardly pay these 3 mana when they improvise Kappa out.

#### Thoughtseize Leads the Way

{% mtgcard "Thoughtseize" %}

- Bring it in against Eldrazi Ramp and the various combos, to disrupt their speed, or take a key card and follow up with Extraction;
- I won't bring it in against Boros Energy, since it hurts too much and gives too little benefit;
- Bring it in against Orzhov Blink, with the targets of taking their {% mtglink "Overlord of the Balemurk" %}, or taking {% mtglink "Solitude" %} and following up with Extraction.
- Bring it in in the Dimir mirror: seeing more of their hand noticeably improves the quality of our later counter trades.

#### More Talismans

{% mtgcard "Nihil Spellbomb" %}

- Bring it in against Temur Breach; another one-shot graveyard wipe for disruption is still important.
- Bring it in in the mirror, especially against Oculus-style decks.
- Against Boros Energy, I probably won't bring more in; the 3 main-deck graveyard hate cards should already give {% mtglink "Phlage, Titan of Fire's Fury" %} enough respect.

{% mtgcard "Pest Control" %}

- Nothing to add. Any matchup I mentioned earlier where Pest Control is good, just bring it in; conversely, don't bring it in against decks like Eldrazi Ramp.

{% mtgcard "The Meathook Massacre" %}

- The competitor for this slot is {% mtglink "Toxic Deluge" %}, an extra sweeper slot. The matchups where we want a sweeper are mostly Boros Energy and Orzhov Blink, and both share a feature: the vast majority of their creatures have toughness no greater than 2. So rather than a Toxic Deluge that costs life, I lean toward The Meathook Massacre, which gains life; after Pest Control helps hold off the Energy deck's first and second waves of attacks, a three-mana sweep and a four-mana sweep are not much different.
- Also bring it in against Golgari Yawgmoth. A good time to sweep in this matchup is usually X=4; generally, if Grist isn't resolved early in this matchup, there's a decent chance of casting Meathook for six.

#### And Haters for Specific Matchups

{% mtgcard "Torpor Orb" %}

- **Specifically aimed at Orzhov Blink**: one card locks up the core of its engine. But note that resolving the Orb doesn't mean you win; the opponent also has counters such as {% mtglink "March of Otherworldly Light" %} in the sideboard.
- **Don't bring it in against Boros Energy!** I've heard many arguments for and against; here's an example of why I'm against it: one day in a store event I played against Boros Energy and brought in the Orb, and the opponent's turn-three Phlage Titan just stayed on the battlefield as a 6/6 without needing to sacrifice, which is like giving the opponent a {% mtglink "Dress Down" %}.

{% mtgcard "Harbinger of the Seas" %}

- Even more aimed at Eldrazi Ramp, but as I mentioned above with FoN, Harbinger alone is still too slow; you need to be more aggressive in stopping the opponent's turn-one and turn-two acceleration so that Harbinger can fully shine.
- Against Temur Breach, although the opponent can still fail to find Mox Opal, you should still bring it in to blow up their {% mtglink "Urza's Saga" %}, and to make {% mtglink "Shifting Woodland" %} just a well-behaved Island.
- You can also bring it in against others such as Affinity, or three-plus-color decks like Domain Zoo.

{% mtgcard "Shatter Assumptions" %}

- **Specifically aimed at Eldrazi Ramp**, but again it is too slow alone; you must stop the opponent's acceleration or use Thoughtseize to force them to slow down, so that this card arrives on time and wipes out all of the opponent's resources; then we have to win fast enough to give the opponent no chance of a comeback. Yes, our matchup against Eldrazi Ramp really is that hard.
- Don't bring it in against other decks, so **if Eldrazi Ramp fades, there's no need to play this card**.

{% mtgcard "Sheoldred, the Apocalypse" %}

- Use it in any matchup where Harbinger is poor: Boros Energy, Orzhov Blink, and even Temur Breach, which loves drawing extra cards with {% mtglink "Mishra's Bauble" %}, can all bring it in.
- **Bring it in against control. In the junk time after resources have been traded, that is when Sheoldred is at her most powerful!**
- In the mirror, optional; a bit slow.

## Conclusion

Although the result at MIT#8 was so-so, with me finishing 23rd (4-2-1) and Jeff 31st (4-3), one win short of the top eight, through these five weeks of gradually converging discussion and meta research, we believe this deck deserves a better showing. If you are disappointed by Dimir Oculus's performance, or want to try a tempo-counter deck in Modern, I believe this article can help you understand it quickly. Readers are also welcome to share their thoughts after reading. Let's keep improving and have more fun together!

> Note: If you are interested in my round-by-round report from that day, take a look at [this post](https://www.facebook.com/share/p/15qMCn54Hi/).

## Closing: With a Group of Friends to Play With, This Game Just Gets More Fun!

Preparing for these big events always leaves me with a lot of feelings. Back in the days of the national team qualifier and the WMCQ, I could hardly find anyone around me to discuss with, and a new idea tested at the local card shop made it hard to tell whether the iteration was going in a good or bad direction. Since playing in MIT#4, I gradually met more friends around me; we discuss together, then playtest, each person has their own specialties and shares a bit, and researching the meta has become much easier. This also leaves me convinced that competitive MTG is definitely not something one person can grind alone; even if someone really does show up with a meta-beating tech one day, without a team's support to eliminate personal blind spots, it is hard for them to keep performing well in tournaments.

Jeff: Ever since I shared the Echo of Eons idea with cephille, for some reason he has been having even more fun with it than I have. Let me say again, it's really fun XD. I had originally meant to play it as a fun deck, but he took it and seriously researched how to make it better, finally decided to enter a tournament with it, and made it to one win short of the top eight. The process was still very enjoyable.

I hope everyone can use this game to meet more like-minded friends, play cards together, discuss together, and build deeper and more lasting friendships. By sharing resources and information, we build our own strong networks and connections, and then this game is not just a game; it becomes a part of your life.

I believe everyone who keeps playing this game has come this far in exactly this way.
