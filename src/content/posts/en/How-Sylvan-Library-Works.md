---

title: "How Does Sylvan Library Work?"
date: "2024-12-18 17:53:59"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/72c3f4c745b3-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/72c3f4c745b3-cover.jpg"
excerpt: "You may use Sylvan Library all the time, but do you remember how its effect is actually worded?"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../How-Sylvan-Library-Works/).

## Before We Start

Anyone who plays EDH is surely familiar with [Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library), which is almost synonymous with green card draw. Everyone uses Sylvan Library and knows how to operate it in normal play, but when asked how exactly it works, many can't necessarily answer. The problem becomes even more apparent when other effects that affect drawing are on the battlefield.

Today, let's analyze it properly: how exactly does Sylvan Library work?

---

## Sylvan Library Effect Explained


{% mtgpick "cc1" 5 %}

**[Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library): At the beginning of your draw step, you may draw two additional cards. If you do, choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.**

- **<font color="#FF0000">At the beginning of your draw step, you may draw two additional cards.</font>**

This means Sylvan Library's ability is a triggered ability. At the beginning of the draw step, the turn-based action of drawing a card happens first, and then a triggered ability saying "you may draw two additional cards" goes on the stack. If you have multiple Sylvan Libraries, or other abilities that trigger off drawing cards, these abilities all go on the stack together, and you put them in whatever order you like.

Only when Sylvan Library's ability resolves do you choose whether to draw two cards.

- **<font color="#FF0000">If you do, ...</font>**

If you chose not to draw just now, the ability ends there, with no further effects.

If you did draw cards, the subsequent effects are carried out immediately, with no new items put on the stack in between.

There is also a special case. Suppose you choose to draw, but some other effect makes you **unable** to perform the action of drawing. Since you didn't actually draw, the condition of **if you do** isn't met, so the rest of Sylvan Library's effect isn't processed. If a replacement effect replaces your draw instead, it still counts as you having done so, and the subsequent effects continue to be processed.

- **<font color="#FF0000">Choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.</font>**

The cards you are asked to choose from your hand are **cards drawn this turn**. Normally, the options you can choose from are the one card drawn normally in the draw step, plus the two extra cards drawn by Sylvan Library. But suppose you had also drawn extra cards earlier because of something like [Phyrexian Arena](https://scryfall.com/card/fdn/180/phyrexian-arena). Those cards are also within the selectable range, which is why, when using Sylvan Library, you are obligated to keep the cards drawn this turn distinguishable in your hand.

After choosing the cards from your hand, you then choose, for each of them, whether to pay 4 life or put it on top of your library. If you choose to put both cards back on top of the library, the order of the two is hidden information, and your opponents don't need to know which card was put back in which order.

From the moment the triggered ability resolves and you choose to draw two cards until this entire ability finishes processing, no triggered abilities go on the stack and no player receives priority. Only after Sylvan Library's ability has finished processing do triggered abilities caused by Sylvan Library's draws go on the stack.

---

## Sylvan Library Rules Examples

![Narset](https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/fa644e0a2879.webp)
>[Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library): At the beginning of your draw step, you may draw two additional cards. If you do, choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.
>[Narset, Parter of Veils](https://scryfall.com/card/cmm/853/narset-parter-of-veils): Each opponent can't draw more than one card each turn.

If an opponent controls Narset, after you draw one card normally in the draw step, Sylvan Library's ability can't make you draw cards. According to the explanation of **if you do** above, you didn't draw cards because of this effect, so Sylvan Library's ability ends there.

But suppose you drew an instant in the draw step that can deal with Narset. Then you can respond to Sylvan Library's triggered ability by removing Narset first, and when Sylvan Library resolves, no one can stop you.




![Hullbreacher](https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/d092431b340b.webp)
>[Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library): At the beginning of your draw step, you may draw two additional cards. If you do, choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.
>[Hullbreacher](https://scryfall.com/card/cmr/74/hullbreacher): If an opponent would draw a card except the first one they draw in each of their draw steps, instead you create a Treasure token.

Although at first glance this resembles the Narset case above, Narset doesn't let you draw, whereas Hullbreacher is a replacement effect that turns your draw into some other event, so the answer is quite different.

First, you draw one card normally in the draw step. Then, if you choose to draw with Sylvan Library, those two draws are replaced by Hullbreacher with your opponent creating Treasures. But because Sylvan Library considers that you have performed the action it asks for, you still have to process the subsequent effect: "choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library." Suppose the only card in your hand drawn this turn is the one you drew at the very start of the draw step. Then you must choose, for that card, whether to pay 4 life or put it back on top of your library.

Of course, Sylvan Library's draw is optional, so unless you are mind-controlled by [Emrakul, the Promised End](https://scryfall.com/card/inr/5/emrakul-the-promised-end), or simply want to do charity, you can completely avoid this tragedy.




![Dredge](https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/6b3f9ab4f2d7.webp)
>[Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library): At the beginning of your draw step, you may draw two additional cards. If you do, choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.
>[Life from the Loam](https://scryfall.com/card/uma/172/life-from-the-loam): Dredge 3 (If you would draw a card, you may instead mill three cards and return this card from your graveyard to your hand.)

Dredge is likewise a replacement effect that replaces your draw with some other event.

Suppose your graveyard has 3 Life from the Loams <font color="#AAAAAA">(or other cards with dredge, anything works)</font>, and the normal draw of the draw step and Sylvan Library's draws are all replaced using dredge. Then when Sylvan Library asks you to choose two "cards **drawn** this turn", you'll find that you haven't actually drawn any card into your hand this turn. They were added to your hand in a way other than drawing, so you don't need to choose any cards in hand.

Another similar case is [Abundance](https://scryfall.com/card/cmm/884/abundance), which likewise replaces drawing with another way of adding cards to your hand.




![Miracle](https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/857ed1e98b59.webp)
>[Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library): At the beginning of your draw step, you may draw two additional cards. If you do, choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.
>[Reforge the Soul](https://scryfall.com/card/inr/167/reforge-the-soul): Each player discards their hand, then draws seven cards.
Miracle {1}{R} (You may cast this card for its miracle cost when you draw it if it's the first card you drew this turn.)

Suppose that on the normal draw in the draw step, you drew Reforge the Soul and intend to cast it for its miracle cost. How does this interact with Sylvan Library?

First, here is the rules definition of miracle:

> - 702.94a 
Miracle is a static ability linked to a triggered ability. "Miracle [cost]" means "When you draw this card, if it's the first card you've drawn this turn, you may reveal it from your hand. When you do, you may cast it by paying [cost] rather than its mana cost."
> - 702.94b 
If a player chooses to reveal a card using its miracle ability, the player plays with that card revealed in their hand until that card leaves their hand, that ability resolves, or that ability otherwise leaves the stack.

Miracle is also a triggered ability that goes on the stack, and it goes on the stack at exactly the same time as Sylvan Library's, so the controller orders the stack. Note that at the moment you draw Reforge the Soul, if you intend to cast it with miracle, you must reveal it immediately. It's just that the triggered ability allowing you to cast it for the alternative cost doesn't go on the stack until a player would receive priority. In other words, when you order the stack, Reforge the Soul will be a revealed card in your hand.

Let's start with the simpler case. Suppose Reforge the Soul resolves first, making all players discard their hands and draw seven. Then Sylvan Library resolves and you choose to draw two, and when it asks me to choose two "cards drawn **this turn**", the seven cards just drawn by Reforge the Soul are also within the selectable range.

What if Sylvan Library resolves first, and you choose to use its effect to put the Reforge the Soul in your hand, currently revealed due to miracle, back on top of the library? From rule 702.94b we know that if a miracle card leaves your hand, it is no longer revealed, and a miracle card must still be revealed in your hand when the ability resolves in order to be cast. Also, if you choose to put two cards from your hand back on top of the library, the opponent won't know whether it is the first or second card on top of your library.




![Platinum Emperion](https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/25220f95d2e9.webp)
>[Sylvan Library](https://scryfall.com/card/cc1/5/sylvan-library): At the beginning of your draw step, you may draw two additional cards. If you do, choose two cards in your hand drawn this turn. For each of those cards, pay 4 life or put the card on top of your library.
>[Platinum Emperion](https://scryfall.com/card/uma/233/platinum-emperion): Your life total can't change. (You can't gain or lose life. You can't pay any amount of life except 0.)

Platinum Emperion's ability makes you unable to pay any life other than 0, so after Sylvan Library draws the cards, you can't choose to pay life to keep them in your hand, and can only put the cards back on top of the library.





---

## Conclusion

Sylvan Library is a card with a long history. Its original version dates back to [Legends](https://scryfall.com/card/leg/207/sylvan-library), and in between it went through more than one change in how it operates. However, since the new-frame era starting with Eighth Edition, its operation and Oracle text have stabilized, and haven't changed since.

Personally, I see Sylvan Library as a great grammar test for MTG rules. Its rules wording has no ambiguity whatsoever and strictly follows the rules terminology. Whether you can correctly read how Sylvan Library works shows whether there are gaps in your understanding of MTG's wording.

![History](https://images.guildmagesforum.tw/posts/How-Sylvan-Library-Works/5b91ff5413a4.webp)
