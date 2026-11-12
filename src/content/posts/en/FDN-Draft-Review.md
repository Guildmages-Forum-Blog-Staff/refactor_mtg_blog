---

title: "Article Translation — FDN Draft Experience: A Top Japanese Limited Player's View"
date: "2024-12-06 09:52:25"
authors:
  - "Kappa"
categories:
  - "Limited"
  - "FDN"
cover: "https://images.guildmagesforum.tw/posts/FDN-Draft-Review/628de3273278-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/FDN-Draft-Review/628de3273278-cover.jpg"
excerpt: "Just draw a land now... wait, why is it Leyline Axe? It never shows up in the opening hand, does it? Trash game! FDN Limited, full of cards that arrive at the wrong time! Our first attempt at translating an article: let's see how a Japanese player uses box plots to analyze just how \"trash\" FDN Limited is!"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../FDN-Draft-Review/).

## Original Article Info

Original title: 【MTG】 FDNリミテはクソだと叫びたい
Translated title: 【MTG】 I Want to Scream That FDN Limited Is Trash

>Translator's note: [君が好きだと叫びたい](https://www.youtube.com/watch?v=ufDlhed1iJQ)?

[Link to the original article](https://note.com/yamabekafka/n/n63b98b191446)

Original author: [山辺カフカ＠MTGリミテッド](https://twitter.com/yamabekafka)

Translator: Kappa
**This translation has been authorized by the original author.**

## Introduction

There's a rumor in the MTG community that the Limited environment of Foundations (FDN) is trash, and I felt this myself in Arena Open.
This article is simply an attempt to prove that with data.

## Method of Analysis

There are several kinds of bad Limited environments.

**Ultra-fast environments, environments where the player on the play has a huge advantage, environments where bombs fly everywhere**... and so on.

However, none of the above reasons felt like a good fit for the FDN environment.
How should I put it? It feels like screaming "Don't draw that card right now!!" and then losing.
I wanted to find a way to prove this.
So, let's focus on **GIH WR** and **OH WR** from 17Lands.com.

* GIH WR (Game In Hand Win Rate): The familiar one, the individual win rate of a card in games where it appeared in hand
* OH WR (Open Hand Win Rate): The individual win rate of a card when it was in the opening hand

This time we will focus on the difference between the two, **Δ(OH WR － GIH WR)**.

A clear and easy-to-understand example of Δ is [Llanowar Elves](https://scryfall.com/card/fdn/227/llanowar-elves).

{% mtgpick "fdn" 227 %}

This guy's OH WR of 61.4% is the highest among all commons, but its GIH WR is 56.7%, which is still well within the range of a pretty good common.
For cards whose value drops the more they go unused early on, the Δ becomes larger.

Conversely, an example with a very small Δ is [Koma, World-Eater](https://scryfall.com/card/fdn/121/koma-world-eater).

{% mtgpick "fdn" 121 %}

Its GIH WR of 56.6% is above the passing mark, but its OH WR of 52.2% is quite low, so if it's in your opening hand, it's effectively the same as having one fewer card in hand, which tends to be disadvantageous.

This time, my hypothesis is that **FDN has many cards with a very large or very small Δ(OH WR － GIH WR)**.
Simply put, the high variance in card draws causes instability.
Next, we will verify this.

## Verification

>Translator's note: Because this involves mathematical knowledge, I have added charts here to help readers understand, and adjusted the wording of some of the content below to make it easier to follow, but the meaning is unchanged.

We verify by comparing results using a [box plot](https://zh.wikipedia.org/zh-tw/%E7%AE%B1%E5%BD%A2%E5%9C%96). The points of a box plot are defined as follows:

![Box plot](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/ddd69ef85157.webp)

- Q0: **minimum**
- Q1: **lower quartile ([quartile](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E6%95%B0))**
- Q2: **[median](https://zh.wikipedia.org/wiki/%E4%B8%AD%E4%BD%8D%E6%95%B8) (second [quartile](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E6%95%B0))**
- Q3: **upper quartile ([quartile](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E6%95%B0))**
- Q4: **maximum**

The difference between Q1 and Q3 is also called the **IQR ([interquartile range](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E8%B7%9D))**, and the IQR is the key parameter for determining the maximum and minimum of a box plot:
- Minimum Q0 = Q1 - 1.5×IQR
- Maximum Q4 = Q3 + 1.5×IQR

Data points outside the range from Q0 to Q4 are called **outliers**.

>Translator's note: The original explanation of this was fairly brief. To save readers from struggling with the box plot as a mathematical tool, I added some extra explanation in the section between this note and the translator's note above.

We compare the Δ(OH WR - GIH WR) of all FDN cards with that of the two most recent sets, DSK and BLB. The resulting chart is as follows:

![1](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/7d4bb2bef9cc.webp)

The box plot shows that FDN has the widest range, so it seems fair to say that FDN has greater variability in Δ than DSK and BLB, at least.

Incidentally, the card with the largest Δ in FDN is [Leyline Axe](https://scryfall.com/card/fdn/129/leyline-axe). Of course it is.

{% mtgpick "fdn" 129 %}

BLB's [Hired Claw](https://scryfall.com/card/blb/140/hired-claw) has a Δ even greater than this axe, which shows how impressive it is.

{% mtgpick "blb" 140 %}

Here we will also add MH3, which is known as a good environment, to the chart.

![2](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/5cc88416fab6.webp)

MH3 shows less variability than any other environment, and this verification suggests it is an environment with "low draw variance."
In fact, thanks to "[modal double-faced cards with a land on the back](https://scryfall.com/card/mh3/260/suppression-ray-orderly-plaza)" and "[land-fetching lands with cycling](https://scryfall.com/card/mh3/217/bountiful-landscape)," bad draws are less likely to happen, which is one reason it is called a good environment.

Next, we add the rest of the environments since the release of Play Boosters, MKM and OTJ, to the chart.

![3](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/7d56841487b4.webp)

In my personal opinion, OTJ is also a pretty trash environment, so it's really interesting to see a commonality here.

>Translator's note: In contrast to FDN, OTJ actually has too many bombs, becoming the bomb-flying environment mentioned above, yet the statistical result looks similar, so it's quite interesting that they arrive at the same destination by different paths. You can see in the chart that OTJ's mythic rares tend to sit at the two extremes of the box plot, which shows how heavily bomb-level mythic rares affect this Limited environment... or how trash they are, to the point of being unplayable.

On the other hand, although I don't have a particularly good impression of MKM, the data it shows is no worse than MH3.
Perhaps thanks to disguise, the OH WR of expensive cards doesn't drop easily.

I'd like to verify a bit more, but are there any other notorious environments... Ah!

![](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/6be057dcbc1f.webp)

Let's add Phyrexia: All Will Be One (ONE) to the chart.

![4](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/437a8fc0a0f0.webp)

The result here is far better than expected.
ONE is notorious because the environment is abnormally fast and favors the player on the play, but this verification method observes draw variance, so that is largely ignored.
To be precise, an environment that is too fast also has the effect of making the Δ look smaller, which needs to be noted. This has something in common with MH3 above.

After this I'd like to look at something like core set environments...
But there is almost no 17Lands data for core sets... Ah!

![](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/cea4e0f45528.webp)

Let's add Khans of Tarkir (KTK), widely known as "Showa MTG," to the chart.

>Translator's note: "Showa MTG" refers to the retro era of MTG, roughly the time before Ninth Edition, when Limited environments often saw vanilla creatures bumping into each other and removal wasn't very strong. KTK earned this nickname for its slow tempo and low average card quality.

![5](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/96f8bbfa6ec0.webp)

Just as predicted, we got a box plot of a width similar to FDN's.
In so-called basic-style environments that easily turn into long games, how you deal with mana flood or expensive cards is very important, but since you don't want to draw those cards in your opening hand, I infer that this FDN-like result appears.

## Application

Since the verification gave results broadly close to the hypothesis, we move on to the application section.
We compare the Δ(OH WR - GIH WR) of FDN cards by color.

![6](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/bf61f08a312c.webp)

From this chart you can see that blue's box plot is extremely narrow, while black and green are, by contrast, relatively wide.
Since black and green cards are mostly geared toward long games, I infer their draw variance would also be larger, but blue should also lean toward long games.
What may soften this is the card filtering led by [Refute](https://scryfall.com/card/fdn/48/refute): if you can loot away those cards with draw variance, the OH WR won't drop much.

## (Added 12/3)

I was so happy to receive a better response than expected that I also organized DSK and BLB by color.
Due to limitations of the charting platform (Flourish), the order of the colors and the layout of the axes are inconsistent, so please bear with me.

DSK

![7](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/208b92d51800.webp)

Although you can see characteristics of various colors in whether they lean toward OH WR or GIH WR, the variability of the individual colors is small overall, giving a quite balanced impression.
It's also interesting that white, which is supposed to be a strong color, shows the greatest draw variance in the data. I think the high proportion of white among the cheap creatures with survival abilities influenced the result.

BLB

![8](https://images.guildmagesforum.tw/posts/FDN-Draft-Review/f7653d8a2c7c.webp)

Blue's distribution is extremely broad and skewed toward GIH WR, which is interesting data.
In fact, the Worst 12 by Δ (this doesn't mean the weak cards) is made up entirely of blue and colorless cards.
In fact, BLB's blue cards more easily follow a winning strategy of building a System and playing steadily. Although the number of surveil and card filtering effects is itself comparable to other sets, the individual power of each card tends to be weak before the System is assembled, which seems to be the cause of this situation.

## Quiz

What did everyone think?
Finally, I'd like to pose a question to wrap up this article. Within the range of data shown so far, which card has the largest Δ?
Since this is a members-only article, the answer is in the paid section.
Please support me generously, as if tipping. Thank you!

## Translator's Summary

Since the final answer is in the paid section, per our agreement with the author of this article, this translation cannot give the answer directly. If you're interested, you can go to the [original note](https://note.com/yamabekafka/n/n63b98b191446) and support them with 100 yen, and you're also welcome to guess the answer on our page.

This is the first time our site has tried translating a Japanese MTG article. Because this article approaches things from a distinctive mathematical angle, it caught our editors' interest. What did you think, readers? If you have any feedback, feel free to leave it on the page, and if you'd like to see more translated articles, let us know your opinions too! Thank you all for reading this translated article to the end!

Below are hints for the quiz above. If you want to guess the answer on your own, please don't open the hints below.

————(Spoiler warning line)————

{% folding blue :: Hint 1 %}

After a certain set was added, the largest number on the right side of the chart jumped all at once to 12. So what could that be?

{% endfolding %}

{% folding blue :: Hint 2 %}

It's a mythic rare, and a card that makes its presence felt on turn one! (The translator felt an urge to shovel cards into the graveyard

{% endfolding %}

{% folding blue :: Hint 3 %}

It's a Special Guest card.

{% endfolding %}
