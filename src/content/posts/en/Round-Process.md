---

title: "The Turn Structure Explained"
date: "2023-10-27 00:00:00"
updated: "2025-07-23 09:13:24"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://images.guildmagesforum.tw/posts/Round-Process/604a02661ce7-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/Round-Process/604a02661ce7-cover.jpg"
excerpt: "Most of the turn structure, starting now!"
---

> **Note:** This article was translated from Chinese by AI and may contain errors. [Read the original Chinese version](../../Round-Process/).

## Before We Start

How does a turn work? This is a rule every player learns on their first day of Magic, and it is one of the foundations of the whole game.

Precisely because it is so basic, you can usually play smoothly without knowing the details.
And precisely because it is so basic, when you work through many rules questions you eventually have to return to the underlying concepts of the turn structure.

This installment covers the phases a turn goes through and how each one works. Newer players can use this article to understand the clear definition of the turn structure, and veterans can use it to check for blind spots in their own understanding.

![Turn Structure](https://images.guildmagesforum.tw/posts/Round-Process/ff7a3455f17e.webp)

---

## Prerequisites

Before talking about the turn structure, we need to introduce two more fundamental concepts, **"turn-based actions"** and **"priority"**. The most important basic rules are the following:

### Turn-Based Actions

- 703.1
Turn-based actions are game actions. They happen automatically when a phase or step begins, or when a phase or step ends. They don't use the stack.

Simply put, turn-based actions are the actions that certain phases or steps perform automatically. For example, the untap step untaps permanents, and the draw step draws a card.


### Priority

- 117.1
Unless a spell or ability is instructing a player to take an action, which player can take actions at any given time is determined by a system of priority. The player with priority may cast spells, activate abilities, and take special actions.
- 117.3d
If a player has priority and chooses not to take any actions, that player passes. If any mana is in that player's mana pool, they announce what mana is there. Then the next player in turn order receives priority.
- 117.4
If all players pass in succession (that is, if all players pass without taking any actions in between passing), the spell or ability on top of the stack resolves or, if the stack is empty, the phase or step ends.

Priority is like a flag that keeps being passed back and forth between the players. The first requirement for announcing a spell or activating an ability is that you are currently holding the flag (you have priority). If you have priority but don't want to do anything, you pass it to your opponent, and then your opponent decides whether to do something. This is one of the most fundamental foundations of how Magic works. Rule 117.4 also shows that moving from one phase or step to the next depends on passing priority.

Clarifying the turn structure is really about clarifying the definition of each turn-based action and when players receive priority.

---

## Basic Concepts of the Turn Structure

A turn consists of the following phases, and some phases are further divided into several steps:

- Beginning Phase
    - Untap Step
    - Upkeep Step
    - Draw Step
- First Main Phase
- Combat Phase
    - Beginning of Combat Step
    - Declare Attackers Step
    - Declare Blockers Step
    - Combat Damage Step
    - End of Combat Step
- Second Main Phase
- Ending Phase
    - End Step
    - Cleanup Step

Below we explain the details of each phase and step. A few general basic rules are also introduced here:

- 500.2
A phase or step ends when the stack is empty and all players pass in succession. Simply having the stack become empty doesn't cause a phase or step to end; all players have to pass in succession with the stack empty. Therefore, each player gets a chance to add something new to the stack before the phase or step ends.
- 500.4
When a step or phase ends, any unused mana in a player's mana pool empties. This turn-based action doesn't use the stack.
- 500.6
When a phase or step begins, any abilities that trigger "at the beginning of that phase or step" trigger. They are put on the stack the next time a player **would** receive priority.

You can see that these overlap quite a bit with the priority rules, because the two are deeply tied together. In a concrete situation, rule 500.6 means that if some ability triggers at the beginning of a phase or step, it goes on the stack first, and only then do players receive priority.

And what we casually call "announcing a phase change" in actual games really means that the active player says "I'm passing priority with an empty stack" and asks the opponent whether they want to respond or pass priority too. If the opponent also passes, the condition for moving on is met, and the game proceeds to the next phase or step. Under normal circumstances a turn always goes through all of the phases above, and even if the active player doesn't plan to do anything, the game still has to run through this sequence in order.

Now let's get into the main part and go through the turn structure in detail. The order of the article is also the order of the turn.

---

## Beginning Phase

- The beginning phase includes the untap step, the upkeep step, and the draw step.

Some cards let you take an additional beginning phase, which includes all three of these steps.

![Beginning Phase](https://images.guildmagesforum.tw/posts/Round-Process/25a35a328f61.webp)
> ● **[Sphinx of the Second Sun](https://scryfall.com/card/cmr/99/sphinx-of-the-second-sun):**
> At the beginning of your postcombat main phase, you get an additional beginning phase after this phase. (The beginning phase includes the untap, upkeep, and draw steps.)
> ● **[Shadow of the Second Sun](https://scryfall.com/card/mh3/70/shadow-of-the-second-sun):**
> At the beginning of enchanted player's postcombat main phase, there is an additional beginning phase after this phase. (The new untap, upkeep, and draw steps come before the end step.)

### Untap Step

- Phasing is handled, and the active player's phased-out permanents phase in. Both happen simultaneously.
- If it is currently day or night, check whether the conditions for changing between day and night are met, and if so, switch the day/night state.
- The active player untaps all of their permanents that can untap.
- No player receives priority during the untap step, so no spells can be cast or resolve and no abilities can be activated or resolve. Any abilities that trigger during this step are held until the next time a player would receive priority, which is usually during the upkeep step.

Phasing is an obscure mechanic that was rarely used before and won't be used in the future, so this article skips it. After reading the sequence you can see why permanents that phase in get untapped.

![Untap](https://images.guildmagesforum.tw/posts/Round-Process/07683af86c01.webp)
> ● **[The Celestus](https://scryfall.com/card/mid/252/the-celestus):**
> Whenever day becomes night or night becomes day, you gain 1 life. You may draw a card. If you do, discard a card.

The Celestus is a great example of both how the day/night mechanic works and how special the untap step is. The most special thing about the untap step is that players don't receive priority, and any triggered ability whose trigger condition is met during the untap step is held until the upkeep step (normally), when it is put on the stack before a player receives priority. If you control The Celestus and day/night changes, the moment its lifegain and loot ability actually goes on the stack is the upkeep.



### Upkeep Step

- The upkeep step has no turn-based actions. Once it begins, the active player receives priority.
- All abilities that triggered during the untap step and all abilities that trigger at the beginning of the upkeep are put on the stack before the active player receives priority, and you can order them yourself.

The upkeep step is very simple. The more common question is how to order multiple triggered abilities that go on the stack at the same time. You can remember two sentences: "the same player orders their own abilities" and "the active player puts theirs on the stack first." If all the triggered abilities are controlled by the same player, that player orders them on the stack however they like. If several players have triggered abilities, the active player's go on the stack first, then the nonactive player's (meaning theirs sit higher on the stack and resolve first). This is also called the "Active Player, Nonactive Player rule" (APNAP).

![Day/Night Thief](https://images.guildmagesforum.tw/posts/Round-Process/fee1413b95f5.webp)
> ● **[Daring Thief](https://scryfall.com/card/jou/36/daring-thief):**
> Inspired — Whenever Daring Thief becomes untapped, you may exchange control of target nonland permanent you control and target permanent an opponent controls that shares a card type with it.
> ● **[Brutal Cathar // Moonrage Brute](https://scryfall.com/card/mid/7/brutal-cathar-moonrage-brute):**
> Daybound/Nightbound. Hereafter referred to as the day werewolf (the "white wolf").

When Daring Thief becomes untapped (that is, when it untaps), it triggers an ability that targets nonland permanents, while the day werewolf is a creature affected by the day/night rules, and one of its faces has ward. Suppose that at the start of my turn I have a tapped Daring Thief, my opponent has a day werewolf, and I plan to target the opponent's day werewolf with Daring Thief's ability, and last turn the conditions for a day/night change were met. The result is as follows:
- The untap step begins.
- The day/night change is handled, and the day werewolf transforms to the corresponding face.
- Daring Thief untaps, but the ability that triggers when it untaps is held for now, so nothing goes on the stack yet.
- The upkeep step begins.
- The held Daring Thief ability now goes on the stack. If it targets the day werewolf and the werewolf is currently on its Moonrage Brute face, the werewolf's ward ability triggers.

![Upkeep Loot](https://images.guildmagesforum.tw/posts/Round-Process/cc0ee4ad65ff.webp)
> ● **[Key to the City](https://scryfall.com/card/kld/220/key-to-the-city):**
> Whenever Key to the City becomes untapped, you may pay {2}. If you do, draw a card.
> ● **[Rotting Regisaur](https://scryfall.com/card/m20/111/rotting-regisaur):**
> At the beginning of your upkeep, discard a card.

At the start of my turn I have a tapped Key to the City and a Rotting Regisaur. Key to the City triggers a pay-to-draw ability when it untaps, and Rotting Regisaur triggers a discard ability in the upkeep. The sequence is as follows:
- The untap step begins.
- Key to the City untaps, but the ability that triggers when it untaps is held for now, so nothing goes on the stack yet.
- The upkeep step begins.
- The held Key to the City ability now goes on the stack, and Rotting Regisaur's ability goes on the stack at the same time. You can order the two yourself, deciding whether to draw or discard first based on your current hand.

### Draw Step

- The active player draws a card. This is a turn-based action and doesn't use the stack.
- The active player receives priority.

The draw step also gives priority after the draw. If you have an instant-speed discard spell such as [Kolaghan's Command](https://scryfall.com/card/2x2/239/kolaghans-command), you can use it now. If the opponent had no cards in hand and their only card is the one they just drew in this draw step, having Kolaghan's Command cast on you must be very painful.

![Instant-Speed Discard](https://images.guildmagesforum.tw/posts/Round-Process/f028ab5afd56.webp)

---

## First Main Phase

<font color="#FF0000">BLB rules update: this phase used to be called the "precombat main phase." Starting with BLB, new cards all use the new term, but this doesn't affect the text of older cards. </font>

The main phase is also often called the "main step," and a turn normally has two main phases. What people call "main phase one" refers to this phase. Only the first main phase of each turn is the precombat main phase.

- At the beginning of the first main phase, the active player puts a lore counter on each Saga they control. This is a turn-based action and doesn't use the stack.
- The active player receives priority.
- The main phase has no steps, so it ends when the stack is empty and all players pass in succession.
- Sorcery timing is defined as: during your own main phase, with the stack empty, while you have priority.
- If a player hasn't played a land this turn (commonly called a "land drop"), or an effect allows an additional land play, they may play a land at sorcery timing. Playing a land doesn't use the stack and can't be responded to.

In most cases the main phase is the time in a game when you make your main plays. Note that the definition of sorcery timing includes the requirement that it be your own main phase. That is exactly the rule that decides why you normally can't cast non-instant, non-flash spells outside your main phase.

![Main Phase One](https://images.guildmagesforum.tw/posts/Round-Process/6831da8f789d.webp)
> ● **[Klothys, God of Destiny](https://scryfall.com/card/thb/220/klothys-god-of-destiny):**
> At the beginning of your precombat main phase, exile target card from a graveyard. If it was a land card, add {R} or {G}. If it wasn't, you gain 2 life and Klothys deals 2 damage to each opponent.
> ● **[Showdown of the Skalds](https://scryfall.com/card/khm/229/showdown-of-the-skalds):**
> A Saga.
> ● **[Muerra, Trash Tactician](https://scryfall.com/card/blb/227/muerra-trash-tactician):**
> At the beginning of your first main phase, add {R} or {G} for each Raccoon you control.

The triggered abilities of Klothys, God of Destiny and Muerra, Trash Tactician both go on the stack at the beginning of the first main phase. A Saga also gets a lore counter at the beginning of the first main phase. Note that putting the lore counter on is a turn-based action that doesn't use the stack; what goes on the stack is the Saga's triggered ability that triggers when it gets the lore counter.

---

## Combat Phase

- The combat phase contains five steps in order: beginning of combat, declare attackers, declare blockers, combat damage, and end of combat.
- If no creatures are declared as attackers or put onto the battlefield attacking, the declare blockers step and combat damage step are skipped.
- If any attacking or blocking creature has first strike or double strike, there will be two combat damage steps.

The combat phase is the most important part of this article, since the vast majority of rules questions happen during combat.

### Beginning of Combat Step

- The active player receives priority.

If a triggered ability's trigger condition is "at the beginning of combat on your turn," it refers to the beginning of combat step. These triggered abilities go on the stack first, and then players receive priority.

![Rat Car](https://images.guildmagesforum.tw/posts/Round-Process/50c97bdb8f6d.webp)
> ● **[Greasefang, Okiba Boss](https://scryfall.com/card/neo/220/greasefang-okiba-boss):**
> At the beginning of combat on your turn, return target Vehicle card from your graveyard to the battlefield. It gains haste. Return it to its owner's hand at the beginning of your next end step.
> ● **[Parhelion II](https://scryfall.com/card/war/24/parhelion-ii)):**
> A Vehicle.
> ● **[Go for the Throat](https://scryfall.com/card/bro/102/go-for-the-throat):**
> Destroy target nonartifact creature.

At the beginning of the beginning of combat step, Greasefang, Okiba Boss can pull a Vehicle (for example Parhelion II) from your graveyard back onto the battlefield. The target is already chosen when this ability goes on the stack, and players receive priority only after the ability is on the stack. Even if you respond by destroying Greasefang with Go for the Throat, you can't stop the Vehicle from coming back. If you want to stop this with removal, you have to act before the opponent enters the combat phase, usually when the opponent announces that they are about to change phases in main phase one and passes priority. But even if you respond at that point, the game doesn't move to the combat phase yet. It stays in main phase one, and the opponent has to pass priority once more before the phase changes, which means the opponent still has a chance to cast another Greasefang in main phase one.

![God-Pharaoh's Gift](https://images.guildmagesforum.tw/posts/Round-Process/cb855771c24b.webp)
> ● **[God-Pharaoh's Gift](https://scryfall.com/card/hou/161/god-pharaohs-gift):**
> At the beginning of combat on your turn, you may exile a creature card from your graveyard. If you do, create a token that's a copy of that card, except it's a 4/4 black Zombie. It gains haste until end of turn.
> ● **[Key to the City](https://scryfall.com/card/kld/220/key-to-the-city):**
> {T}, Discard a card: Target creature can't be blocked this turn.
> ● **[Angel of Invention](https://scryfall.com/card/kld/4/angel-of-invention):**
> A creature card.

God-Pharaoh's Gift is also an ability that triggers at the beginning of the beginning of combat step, with a small difference from Greasefang above: God-Pharaoh's Gift's ability has no target. Which creature card in the graveyard to exile and make a token copy of is chosen only as the ability resolves. So you have a chance to respond to this ability by using an instant-speed discard effect (for example Key to the City) to put Angel of Invention into the graveyard, and when God-Pharaoh's Gift's ability resolves, you can exile Angel of Invention and create a token copy of it.

### Declare Attackers Step

- The active player declares attackers (that is, declares which creatures will attack). This is a turn-based action and doesn't use the stack. As attackers are declared, the active player performs the following steps in order. If at any point during the declaration the active player can't complete the following steps, the declaration is illegal, and the game backs up to the point before the declaration.
- A creature declared as an attacker must be untapped, have haste, or have been continuously controlled by the active player since the turn began.
- The active player declares which player, planeswalker, or battle each attacking creature is attacking.
- ※ The active player checks each creature for any restrictions affecting it (for example, can't attack alone, can only attack alone, can attack only if certain conditions are met). If any restriction is violated, the attack declaration is illegal.
- ※ The active player checks each creature they control for any requirements affecting it (effects that say a creature attacks if able, or attacks if certain conditions are met). If the number of requirements being obeyed, without violating any restrictions, is fewer than the maximum number of requirements that could be obeyed, the attack declaration is illegal.
- ※ If an effect says a creature can't attack unless a cost is paid, the player isn't forced to pay that cost, even if attacking with that creature would increase the number of requirements being obeyed.
- Tap the creatures declared as attackers (unless they have vigilance or another ability that lets them attack without tapping).
- If any creature has an optional cost to attack (worded as a cost a player may pay "as" a creature attacks), and the player chooses to pay, choose which costs to pay.
- If any of the chosen creatures require paying a cost to attack, or an optional attack cost was chosen, the active player determines the total cost of attacking. Costs may include paying mana, tapping permanents, sacrificing permanents, discarding cards, and so on. Once the total cost is determined, it is "locked in." If effects then change the total cost, ignore those modifications.
- If the cost requires paying any mana, the active player may activate mana abilities at this time.
- Once the player has enough mana in their mana pool, they pay all costs in any order. Partial payment is not allowed.
- The creatures declared as attackers become attacking creatures, and they remain attacking creatures until the combat phase ends or until they are removed from combat.
- All abilities that trigger because of the attackers being declared trigger.
- The active player receives priority.
- Any abilities that triggered on attackers being declared or on any of the above events are put on the stack before players receive priority.
- If an effect puts a creature onto the battlefield attacking, the active player may choose which player, planeswalker, or battle that creature is attacking, unless the effect already specifies what it is attacking. A creature put onto the battlefield this way is also an attacking creature, but it was never declared as an attacker, and effects that apply to declaring attackers don't apply to it.

I believe some readers' eyes are glazing over by now, especially at the three rules marked with ※, which most people finish reading without knowing what they say. In general, the most common source of rules questions in declaring attackers is when creatures are subject to mandatory commands like "must attack" or "can't attack," and when multiple commands conflict, which creatures actually attack? We'll explain this with concrete examples.

Also, from the declare attackers step through the combat damage step, each step first performs the turn-based actions defined for that step, and only afterward do the related triggered abilities go on the stack and players receive priority.

![Squee](https://images.guildmagesforum.tw/posts/Round-Process/9db848fde8c3.webp)
> ● **[Squee, Dubious Monarch](https://scryfall.com/card/dmu/146/squee-dubious-monarch):**
> Whenever Squee, Dubious Monarch attacks, create a 1/1 red Goblin creature token that's tapped and attacking.
> ● **[Go for the Throat](https://scryfall.com/card/bro/102/go-for-the-throat):**
> Destroy target nonartifact creature.

When Squee, Dubious Monarch attacks, it creates a creature token. If you wait until after attackers are declared to destroy Squee with Go for the Throat, you can't stop the token from being created. To stop that, you have to destroy Squee before it attacks. This is similar to the Greasefang example above, but you are luckier here: your last chance to destroy Squee is during the beginning of combat step, and it's hard for the opponent to cast a second Squee at that time.

![Attack Triggers](https://images.guildmagesforum.tw/posts/Round-Process/cefb3bf9b10c.webp)
> ● **[Winota, Joiner of Forces](https://scryfall.com/card/iko/216/winota-joiner-of-forces):**
> Whenever a non-Human creature you control attacks, look at the top six cards of your library. You may put a Human creature card from among them onto the battlefield tapped and attacking. It gains indestructible until end of turn. Put the rest on the bottom of your library in a random order.
> ● **[Adeline, Resplendent Cathar](https://scryfall.com/card/moc/167/adeline-resplendent-cathar):**
> Whenever you attack, for each opponent, create a 1/1 white Human creature token that's tapped and attacking that player or a planeswalker they control.
> ● **[Propaganda](https://scryfall.com/card/clb/730/propaganda):**
> Creatures can't attack you unless their controller pays {2} for each creature they control that's attacking you.

When Winota, Joiner of Forces uses its own ability to put Adeline, Resplendent Cathar onto the battlefield attacking, the declare attackers timing has already passed, so Adeline's "whenever you attack, create a token" ability doesn't trigger. And because Adeline was never declared as an attacker, Propaganda's requirement that each creature's controller pay 2 or it can't attack you doesn't check Adeline either.

![Must Attack 1](https://images.guildmagesforum.tw/posts/Round-Process/f8b32cb03c23.webp)
> ● **[Ruric Thar, the Unbowed](https://scryfall.com/card/2x2/271/ruric-thar-the-unbowed):**
> Ruric Thar, the Unbowed attacks each combat if able.
> ● **[Propaganda](https://scryfall.com/card/clb/730/propaganda):**
> Creatures can't attack you unless their controller pays {2} for each creature they control that's attacking you.

Ruric Thar requires that this creature "attacks each combat if able," but when the opponent has Propaganda, paying the cost isn't mandatory.
- If an effect says a creature can't attack unless a cost is paid, the player isn't forced to pay that cost.

If you don't pay, the creature can't attack. Since it can't attack at all, what follows Ruric Thar's "if able" no longer matters, and no effect can force you to perform the act of paying.

![Must Attack 2](https://images.guildmagesforum.tw/posts/Round-Process/9c3368e99205.webp)
> ● **[Ruric Thar, the Unbowed](https://scryfall.com/card/2x2/271/ruric-thar-the-unbowed):**
> Ruric Thar, the Unbowed attacks each combat if able.
> ● **[Master of Cruelties](https://scryfall.com/card/2x2/251/master-of-cruelties):**
> Master of Cruelties can only attack alone.

Ruric Thar's requirement is "attacks if able," while Master of Cruelties's is "can only attack alone." When you control both and neither has summoning sickness, the only action that satisfies everything is Ruric Thar attacking and Master of Cruelties not attacking.

![Must Attack 3](https://images.guildmagesforum.tw/posts/Round-Process/0353ea96e17d.webp)
> ● **[Ruric Thar, the Unbowed](https://scryfall.com/card/2x2/271/ruric-thar-the-unbowed):**
> Ruric Thar, the Unbowed attacks each combat if able.
> ● **[Master of Cruelties](https://scryfall.com/card/2x2/251/master-of-cruelties):**
> Master of Cruelties can only attack alone.
> ● **[Chemister's Trick](https://scryfall.com/card/rtr/149/chemisters-trick):**
> Target creature you don't control gets -2/-0 until end of turn and attacks this turn if able. Overload {3}{U}{R} (You may cast this spell for its overload cost. If you do, change its text by replacing all instances of "target" with "each.")

Let's raise the difficulty a little. Again we have Ruric Thar, the Unbowed and Master of Cruelties with no summoning sickness, but this time Master of Cruelties has also been given "attacks if able" by Chemister's Trick. Now the situation is...

Ruric Thar: attacks if able.
Master of Cruelties: attacks if able & can only attack alone.

Clearly, no matter how you choose, someone will fail to meet the requirements above. This is when that incomprehensible rule marked with ※ comes into play:
- The active player checks each creature they control for any requirements affecting it (effects that say a creature attacks if able, or attacks if certain conditions are met). If the number of requirements being obeyed, without violating any restrictions, is fewer than the maximum number of requirements that could be obeyed, the attack declaration is illegal.

First, let's clarify the terms. In rules language like this, there is a higher-level **"restriction"** and a lower-level **"requirement."** A **"restriction"** is a statement like "can't" or "can only," and a **"requirement"** is a statement like "if able." Restrictions must be obeyed no matter what and can't be broken, while requirements are carried out as far as possible without violating restrictions. In a situation like this example, where not all requirements can be satisfied, the rules require you to satisfy as many requirements as possible. If you choose an action that satisfies fewer requirements when you could have chosen one that satisfies more, that is an illegal action, and the game backs up and makes you choose again.

Back to the example scenario. Master of Cruelties's "can only attack alone" is a "restriction" that can't be broken no matter what: however you declare attackers, if Master of Cruelties attacks, it is necessarily attacking alone. Their "attacks if able" is a "requirement" that you only have to obey as far as possible. Let's lay out all the possible combinations:
- Ruric Thar doesn't attack, Master of Cruelties doesn't attack:
Satisfies Master of Cruelties's "restriction," violates the "requirements" of both Ruric Thar and Master of Cruelties.
- Ruric Thar doesn't attack, Master of Cruelties attacks:
Satisfies Master of Cruelties's "restriction," violates Ruric Thar's "requirement," satisfies Master of Cruelties's "requirement."
- Ruric Thar attacks, Master of Cruelties doesn't attack:
Satisfies Master of Cruelties's "restriction," satisfies Ruric Thar's "requirement," violates Master of Cruelties's "requirement."
- Ruric Thar attacks, Master of Cruelties attacks:
Violates Master of Cruelties's "restriction."

Looking at the combinations, having both attack directly violates a "restriction" and is an illegal action, while all the others satisfy the "restrictions." If neither attacks, two "requirements" are violated, while having either one attack violates one "requirement" and satisfies one. Across all combinations, the maximum number of "requirements" that can be obeyed is exactly 1, which means having either one of them attack alone is a legal action, whereas having neither attack obeys 0 "requirements." Since an option that obeys 1 exists, choosing the option that obeys 0 is an illegal action.

![Must Attack 4](https://images.guildmagesforum.tw/posts/Round-Process/abf15e513231.webp)
> ● **[Gruul Spellbreaker](https://scryfall.com/card/rna/179/gruul-spellbreaker):**
> Two unimportant creatures.
> ● **[Master of Cruelties](https://scryfall.com/card/2x2/251/master-of-cruelties):**
> Master of Cruelties can only attack alone.
> ● **[Chemister's Trick](https://scryfall.com/card/rtr/149/chemisters-trick):**
> Target creature you don't control gets -2/-0 until end of turn and attacks this turn if able. Overload {3}{U}{R} (You may cast this spell for its overload cost. If you do, change its text by replacing all instances of "target" with "each.")

What if the scenario changes so that Master of Cruelties and two Gruul Spellbreakers are all forced by Chemister's Trick to "attack if able"? 
- Both Gruul Spellbreakers don't attack, Master of Cruelties doesn't attack:
Violates the "requirements" of both Gruul Spellbreakers and Master of Cruelties, for a total of 0 "requirements" satisfied.
- Both Gruul Spellbreakers don't attack, Master of Cruelties attacks:
Violates the "requirements" of both Gruul Spellbreakers, satisfies Master of Cruelties's "requirement," for a total of 1 "requirement" satisfied.
- Both Gruul Spellbreakers attack, Master of Cruelties doesn't attack:
Satisfies the "requirements" of both Gruul Spellbreakers, violates Master of Cruelties's "requirement," for a total of 2 "requirements" satisfied.
- Two Gruul Spellbreakers or one Gruul Spellbreaker attack, Master of Cruelties attacks:
Violates Master of Cruelties's "restriction."

Here you can see that the maximum number of "requirements" you can obey is 2, which is "both Gruul Spellbreakers attack, Master of Cruelties doesn't attack." Any other choice is an illegal action.

![Angel Demon Dragon](https://images.guildmagesforum.tw/posts/Round-Process/c4c881f13844.webp)
> ● **[Kaalia of the Vast](https://scryfall.com/card/2x2/235/kaalia-of-the-vast):**
> Whenever Kaalia of the Vast attacks an opponent, you may put an Angel, Demon, or Dragon creature card from your hand onto the battlefield tapped and attacking that opponent.
> ● **[Master of Cruelties](https://scryfall.com/card/2x2/251/master-of-cruelties):**
> Master of Cruelties can only attack alone.

Of course, Master of Cruelties's rule only restricts you when attackers are declared. If a creature is put directly onto the battlefield attacking through an ability like Kaalia of the Vast's, the "can only attack alone" ability isn't checked.

### Declare Blockers Step

- The defending player declares blockers (that is, declares which creatures will block). This is a turn-based action and doesn't use the stack. As blockers are declared, the defending player performs the following steps in order. If at any point during the declaration the defending player can't complete the following steps, the declaration is illegal, and the game backs up to the point before the declaration.
- The defending player chooses one attacking creature for each creature declared as a blocker to block (in a few special cases, one blocking creature can block multiple attacking creatures at once). A creature declared as a blocker must be untapped.
- ※ The defending player checks each creature they control for any restrictions affecting it (effects that say a creature can't block, or can block only if certain conditions are met). If any restriction is violated, the block declaration is illegal. Restrictions may come from evasion abilities (static abilities of attacking creatures that restrict which creatures can block them, such as flying). If an attacking creature gains or loses an evasion ability after a legal block has been declared, it doesn't affect that block, and different evasion abilities are cumulative.
- ※ The defending player checks each creature they control for any requirements affecting it (effects that say a creature must block, or must block if certain conditions are met). If the number of requirements being obeyed, without violating any restrictions, is fewer than the maximum number of requirements that could be obeyed, the block declaration is illegal.
- ※ If an effect says a creature can't block unless a cost is paid, the player isn't forced to pay that cost, even if blocking with that creature would increase the number of requirements being obeyed.
- If any of the chosen creatures require paying a cost to block, the defending player determines the total cost of blocking. Costs may include paying mana, tapping permanents, sacrificing permanents, discarding cards, and so on. Once the total cost is determined, it is "locked in." If effects then change the total cost, ignore those modifications.
- If the cost requires paying any mana, the defending player may activate mana abilities at this time.
- Once the player has enough mana in their mana pool, they pay all costs in any order. Partial payment is not allowed.
- The creatures declared as blockers become blocking creatures, and they remain blocking creatures until the combat phase ends or until they are removed from combat.
- An attacking creature that has been declared blocked by one or more creatures becomes a blocked creature, and an attacking creature that hasn't been declared blocked by any creature becomes an unblocked creature. This doesn't change until the combat phase ends, the creature is removed from combat, or an effect causes it to become blocked or unblocked. Even if all the creatures blocking it are removed from combat, that creature remains blocked.
- All abilities that trigger because of blockers being declared trigger.
- The active player receives priority.
- Any abilities that triggered on blockers being declared or on any of the above events are put on the stack before players receive priority.

The declare blockers step is roughly a mirror image of the declare attackers step: the requirements on attackers are converted to their blocker versions and checked the same way.

<font color="#FF0000">FDN rules update: under the old rules, after blockers were declared you also had to **"order blockers/attackers for damage assignment."** That procedure has been removed, and players may now divide damage freely when damage is dealt. </font>

![Flying After Blocks](https://images.guildmagesforum.tw/posts/Round-Process/97916203ce64.webp)
> ● **[River Serpent](https://scryfall.com/card/akh/66/river-serpent):**
> An attacking creature.
> ● **[Mighty Leap](https://scryfall.com/card/akh/20/mighty-leap):**
> Target creature gets +2/+2 and gains flying until end of turn.
> ● **[Greater Sandwurm](https://scryfall.com/card/akh/168/greater-sandwurm):**
> A blocking creature.

Suppose I declare an attack with River Serpent and my opponent blocks with Greater Sandwurm. Once blockers are declared, River Serpent is already blocked. Players receive priority before damage, and I can use Mighty Leap to give River Serpent +2/+2 and flying. But gaining flying after blockers have been declared doesn't change the fact that River Serpent has already been blocked, and the two will trade in the combat damage step.

![Must Block](https://images.guildmagesforum.tw/posts/Round-Process/c47bd466d5ee.webp)
> ● **[Riveteers Decoy](https://scryfall.com/card/snc/156/riveteers-decoy):**
> Riveteers Decoy must be blocked if able.
> ● **[Spirited Companion](https://scryfall.com/card/cmm/838/spirited-companion):**
> A blocking creature.

Riveteers Decoy's rule is "must be blocked if able." Suppose the opponent attacks me with Riveteers Decoy and I have three Spirited Companions on the battlefield. Do all three have to block Riveteers Decoy? No. Riveteers Decoy only requires that this card be blocked if it can be, but doesn't say how. One creature blocking and three creatures blocking together both comply, so you only need to have one Spirited Companion block. For a real example where every creature able to block a card is forced to, see [Nessian Boar](https://scryfall.com/card/thb/181/nessian-boar).


### Combat Damage Step

- First, the active player announces how each attacking creature assigns its combat damage, then the defending player announces how each blocking creature assigns its combat damage. This is a turn-based action and doesn't use the stack. Players assign a creature's combat damage according to the following rules:
- Each attacking creature and each blocking creature assigns combat damage equal to its power. A creature that would assign 0 or less damage doesn't assign combat damage.
- An unblocked creature assigns its combat damage to the player, planeswalker, or battle it's attacking. If the creature isn't currently attacking anything (for example, the planeswalker it was attacking has left the battlefield), it doesn't assign combat damage.
- A blocked creature (that is, an attacking creature) assigns combat damage to the creatures blocking it:
    - If no creature is currently blocking it (for example, the creature was destroyed or removed from combat), it doesn't assign combat damage.
    - If only one creature is blocking it, it assigns all its combat damage to that creature.
    - If two or more creatures are blocking it, it divides its combat damage among those creatures as its controller likes, and the amount of damage assigned to a creature may be greater than that creature's lethal damage. A creature with trample must still assign lethal damage to all the creatures blocking it before assigning the excess damage to whatever it's attacking.
- A blocking creature assigns combat damage to the creature it's blocking:
    - If it isn't currently blocking any creature (for example, the creature was destroyed or removed from combat), it doesn't assign combat damage.
    - If it's blocking only one creature, it assigns all its combat damage to that creature.
    - If it's blocking two or more creatures, it divides its combat damage among those creatures as its controller likes.
- Once a player has assigned damage for each attacking or blocking creature they control, the total damage assignment (not any individual attacking or blocking creature's damage assignment) is checked to see whether it complies with all of the above rules. If not, the combat damage assignment is illegal, and the game backs up to the point before that player started assigning damage.
- All combat damage is dealt simultaneously. This is a turn-based action and doesn't use the stack. No player has a chance to cast spells or activate abilities between the time combat damage is assigned and the time it's dealt.
- The active player receives priority.
- Any abilities that trigger from damage being dealt, or from state-based actions performed afterward, are put on the stack before the active player receives priority.
- If at the beginning of the combat damage step at least one attacking or blocking creature has first strike or double strike, only creatures with first strike or double strike assign damage in that combat damage step. After that step, the phase gets a second combat damage step instead of proceeding directly to the end of combat step. Only the remaining attacking or blocking creatures that didn't have first strike or double strike at the beginning of the first combat damage step, plus the remaining creatures that currently have double strike, assign damage in the second combat damage step. After this step, the phase proceeds to the end of combat step.

The combat damage step defines how first strike and double strike produce two combat damage steps in a single combat phase. Remember that in both combat damage steps, players receive priority after damage is dealt, so players have a window to act after first-strike damage resolves and before regular damage resolves.

The biggest focus of the combat damage step is the rules for assigning and dealing damage, so let's explain with a few examples:

![Damage Resolution](https://images.guildmagesforum.tw/posts/Round-Process/8ff94b45d1d1.webp)
> ● **[Tyrranax Rex](https://scryfall.com/card/one/189/tyrranax-rex):**
> Trample, toxic 4.
> ● **[Phyrexian Obliterator](https://scryfall.com/card/one/105/phyrexian-obliterator):**
> Whenever a source deals damage to Phyrexian Obliterator, that source's controller sacrifices that many permanents.
> ● **[Tenacious Underdog](https://scryfall.com/card/snc/97/tenacious-underdog):**
> A blocking creature.

I attack with Tyrranax Rex, and the opponent chooses to block with Phyrexian Obliterator and Tenacious Underdog together. The game then proceeds as follows:
- The declare blockers step begins.
- The opponent declares Phyrexian Obliterator and Tenacious Underdog as blockers of Tyrranax Rex.
- <font color="#FF0000">Under the old rules, damage assignment order would be determined here, but that procedure has been removed. </font>
- Players receive priority.
- The combat damage step begins.
- Damage is dealt, and I choose how to divide it. Tenacious Underdog's lethal damage is 2 and Phyrexian Obliterator's lethal damage is 5. If I want Tyrranax Rex's trample to get damage through to the opponent, I must first assign lethal damage to all of these blocking creatures. But I can also divide all the damage among the blocking creatures however I like, for example 8 to Tenacious Underdog and 0 to Phyrexian Obliterator, or even a seemingly pointless split like 5 to Tenacious Underdog and 3 to Phyrexian Obliterator, which the rules also allow. Normally you would want to trade with as many of the opponent's creatures as possible, but if some of the creatures in the opponent's gang block have damage or death triggers you don't want to see, you can avoid them by dividing damage correctly.

![Deathtouch Trample](https://images.guildmagesforum.tw/posts/Round-Process/9346428e9008.webp)
> ● **[Questing Beast](https://scryfall.com/card/eld/171/questing-beast):**
> Deathtouch.
> ● **[Shadowspear](https://scryfall.com/card/thb/236/shadowspear):**
> Equipped creature gets +1/+1 and has trample and lifelink.
> ● **[Gigantosaurus](https://scryfall.com/card/m19/185/gigantosaurus):**
> A blocking creature.

Now suppose I attack with a Questing Beast carrying Shadowspear (a 5/5 with deathtouch and trample), and the opponent has four Gigantosauruses gang-block Questing Beast. Here is where it gets fun. The rule for assigning combat damage is that "a creature with trample must assign lethal damage to all the creatures blocking it before assigning the excess damage to whatever it's attacking," and for a source with deathtouch, just 1 damage is lethal. That means my Questing Beast can assign 1 damage to each of the four Gigantosauruses and 1 to the defending player, because in the face of deathtouch it doesn't matter whether the toughness is 10 or 100: 1 damage is lethal.

![Protection from Color](https://images.guildmagesforum.tw/posts/Round-Process/7eddd88d387b.webp)
> ● **[Trumpeting Carnosaur](https://scryfall.com/card/lci/171/trumpeting-carnosaur):**
> A red attacking creature with trample.
> ● **[Cerulean Drake](https://scryfall.com/card/m20/53/cerulean-drake):**
> Protection from red.
> ● **[Brash Taunter](https://scryfall.com/card/m21/133/brash-taunter):**
> Indestructible.
> Whenever Brash Taunter is dealt damage, it deals that much damage to target opponent.

When assigning lethal damage, the rules don't care whether the damage will actually be lethal once dealt. If the damage source has deathtouch, 1 damage is lethal; for an ordinary damage source, lethal damage equals the creature's toughness. For instance, say I attack with Trumpeting Carnosaur and the opponent has Cerulean Drake (protection from red) and Brash Taunter (indestructible) gang-block it. Neither of them is a creature that would die from Trumpeting Carnosaur's damage, but when calculating lethal damage assignment, only their toughness matters, and in this case both are exactly 1. If my goal is to deal as much damage to the defending player as possible, the result is:
- Assign damage: 1 to Brash Taunter, 1 to Cerulean Drake, 5 to the defending player.
- Brash Taunter is dealt 1 damage, but because it's indestructible it doesn't die.
- Cerulean Drake prevents that damage because of protection from red.
- The defending player is dealt 1 damage.
- After that, Brash Taunter's ability that triggers when it's dealt damage goes on the stack.

This also shows that Brash Taunter is afraid of opponents with trample: the opponent only needs to assign 1 damage to Brash Taunter for it to count as lethal, and the excess can keep being assigned onward, so Brash Taunter will only ever be dealt 1 damage (unless the opponent is willing to foolishly overassign damage to you).

![Air Wall](https://images.guildmagesforum.tw/posts/Round-Process/87be8e7584c4.webp)
> ● **[Skirmish Rhino](https://scryfall.com/card/tdm/224/skirmish-rhino):**
> A 3/4 trampler, an attacking creature.
> ● **[Temur Tawnyback](https://scryfall.com/card/tdm/229/temur-tawnyback):**
> A blocking creature.
> ● **[Dragon's Prey](https://scryfall.com/card/tdm/79/dragons-prey):**
> Destroy target creature.

Suppose I attack with a 3/4 trampling Skirmish Rhino, and the opponent chooses to block my Skirmish Rhino with Temur Tawnyback. After blockers are declared, players receive priority, and I can use Dragon's Prey or any other instant-speed removal to make Temur Tawnyback leave the battlefield. In a normal combat, once an attacking creature is blocked, even if the blocking creature leaves the battlefield before damage, the attacking creature doesn't deal damage to the player instead. This is the effect players commonly call the "air wall." But if the attacking creature has trample, it is treated as though the blocking creatures have all already been assigned lethal damage (as if the blocking creature were a 0/0). In this example, if Temur Tawnyback leaves after blocking, Skirmish Rhino deals 3 combat damage to the opponent.

![You Are Already Dead](https://images.guildmagesforum.tw/posts/Round-Process/92fd174c81f0.webp)
> ● **[Sheoldred, the Apocalypse](https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse):**
> An attacking creature.
> ● **[Llanowar Loamspeaker](https://scryfall.com/card/dmu/170/llanowar-loamspeaker):**
> {T}: Add one mana of any color.
> A blocking creature.
> ● **[You Are Already Dead](https://scryfall.com/card/neo/129/you-are-already-dead):**
> Destroy target creature that was dealt damage this turn.

Suppose I now have a Llanowar Loamspeaker that is untapped and able to tap for one mana of any color, I have no other mana sources, and I hold a You Are Already Dead (destroy target creature that was dealt damage this turn). The opponent attacks me with Sheoldred, the Apocalypse. Do I get to tap Llanowar Loamspeaker for one black mana first, block Sheoldred so it deals her 1 damage, and then use that black mana to cast You Are Already Dead and destroy Sheoldred? The answer is no. The last chance Llanowar Loamspeaker has to produce mana before it dies is the declare blockers step. Once the game moves to the combat damage step, any unspent mana in the mana pool empties, and as soon as the combat damage step starts, Llanowar Loamspeaker dies from the damage, and you only get priority after that.

![First Strike Ninjutsu](https://images.guildmagesforum.tw/posts/Round-Process/e14969f8c48c.webp)
> ● **[Glissa Sunslayer](https://scryfall.com/card/one/202/glissa-sunslayer):**
> Whenever Glissa Sunslayer deals combat damage to a player, choose one —
> • You draw a card and lose 1 life.
> • Destroy target enchantment.
> • Remove up to three counters from target permanent.
> ● **[Biting-Palm Ninja](https://scryfall.com/card/neo/88/biting-palm-ninja):**
> Ninjutsu {2}{B}
> Biting-Palm Ninja enters the battlefield with a menace counter on it.
> Whenever Biting-Palm Ninja deals combat damage to a player, you may remove a menace counter from it. When you do, that player reveals their hand and you choose a nonland card from it. Exile that card.


When the creatures in combat include first strike or double strike, there is an extra combat damage step, and players get priority in the first combat damage step. For example, I attack with a Glissa Sunslayer that has first strike, the opponent doesn't block, and I'm holding a Biting-Palm Ninja. In the first combat damage step, after Glissa deals damage she has a trigger of her own. Although she will deal no more combat damage this combat phase, she remains an attacking creature until the combat phase ends, so she satisfies the ninjutsu condition of an "unblocked attacking creature" (see [Ninjutsu](https://guildmagesforum.tw/en/Standard-Dimir-Ninja/)). You can use Biting-Palm Ninja's ninjutsu ability at this time to return Glissa, and then in the second combat damage step Biting-Palm Ninja deals damage once more and triggers its ability for hitting the player.


### End of Combat Step

- The end of combat step has no turn-based actions. Once it begins, the active player receives priority.
- Abilities that trigger "at end of combat" trigger at the beginning of the end of combat step, and effects that last "until end of combat" end after the combat phase ends.
- Once the end of combat step ends, all objects are removed from combat. After the end of combat step, the combat phase ends and the postcombat main phase begins.

---

## Second Main Phase

<font color="#FF0000">BLB rules update: this phase used to be called the "postcombat main phase." Starting with BLB, new cards all use the new term, but this doesn't affect the text of older cards. The second main phase and the postcombat main phase are not defined identically in the rules! </font>

- The active player receives priority.
- The main phase has no steps, so it ends when the stack is empty and all players pass in succession.
- Sorcery timing is defined as: during your own main phase, with the stack empty, while you have priority.
- If a player hasn't played a land this turn (commonly called a "land drop"), or an effect allows an additional land play, they may play a land at sorcery timing. Playing a land doesn't use the stack and can't be responded to.

Basically there is not much difference in the rules between the first main phase and the second main phase. The main difference is that Sagas don't automatically get a lore counter at this time.

![Main Phase Two](https://images.guildmagesforum.tw/posts/Round-Process/6546ba3f928b.webp)
> ● **[Tymna the Weaver](https://scryfall.com/card/c16/48/tymna-the-weaver):**
> At the beginning of your **postcombat main phase**, you may pay X life, where X is the number of opponents that were dealt combat damage this turn. If you do, draw X cards.
> ● **[Neheb, the Eternal](https://scryfall.com/card/hou/104/neheb-the-eternal):**
> At the beginning of your **postcombat main phase**, add {R} for each 1 life your opponents have lost this turn.
> ● **[Fireglass Mentor](https://scryfall.com/card/blb/213/fireglass-mentor):**
> At the beginning of your **second main phase**, if an opponent lost life this turn, exile the top two cards of your library. Choose one of them. Until end of turn, you may play that card.

Only the first main phase of each turn is the precombat main phase; all the other main phases are postcombat main phases. But there really is only one second main phase per turn, so older cards like Tymna and Neheb, worded this way, can trigger repeatedly as long as you can get additional main phases. Fireglass Mentor, on the other hand, is tied to the second main phase, so even if you get additional main phases, its ability won't trigger.

The "postcombat main phase" wording won't be used to design new cards from BLB onward, but the abilities of existing cards aren't affected, so the two can be treated as separate pieces of rules terminology.

>PS: Originally Wizards actually planned to errata the text, changing the postcombat main phase on old cards to the second main phase as well, but since that change would have broken a lot of existing decks, Wizards ended up with the current approach of leaving old cards alone after the player community protested.


---

## Ending Phase

The ending phase includes the end step and the cleanup step.

### End Step

- The end step has no turn-based actions. Once it begins, the active player receives priority.

The end step is generally the last chance for players to do things during a turn. There is nothing special about the end step in the rules, but a great many triggered abilities trigger at the beginning of the end step, so the stack can look rather grand. These are handled by the same principles as covered in the upkeep step.

### Cleanup Step

- If the active player's hand size is greater than their maximum hand size, they must discard enough cards to bring it down to the maximum hand size. This is a turn-based action and doesn't use the stack.
- The following actions happen simultaneously: all damage marked on permanents (including phased-out permanents) is removed, and all "until end of turn" and "this turn" effects end. This is a turn-based action and doesn't use the stack.
- Normally, no player receives priority during the cleanup step, so no spells can be cast and no abilities can be activated, but there are exceptions to this rule:
- At this point, the game checks to see if any state-based actions need to be performed or any triggered abilities are waiting to be put on the stack (including abilities that trigger "at the beginning of the next cleanup step"). If so, those state-based actions are performed, then those triggered abilities are put on the stack, and then the active player gets priority. Players may cast spells and activate abilities. Once the stack is empty and all players pass in succession, another cleanup step begins.

Normally the only thing the cleanup step makes a player do is discard when their hand is over the maximum, which produces no stack or priority. In some cases, however, the cleanup step meets the conditions for a state-based action or triggered ability, usually because of that discard. In that case the abilities go on the stack and players receive priority, and once the stack is cleared and all players have passed priority, a new cleanup step begins.

![Cleanup Discard](https://images.guildmagesforum.tw/posts/Round-Process/c346467ceaa6.webp)
> ● **[Fiery Temper](https://scryfall.com/card/uma/129/fiery-temper):**
> Madness {R} (If you discard this card, discard it into exile. When you do, cast it for its madness cost or put it into your graveyard.)
> ● **[Rielle, the Everwise](https://scryfall.com/card/iko/203/rielle-the-everwise):**
> Whenever you discard one or more cards for the first time each turn, draw that many cards.

For example, when you discard a card with madness (such as Fiery Temper) because of the cleanup step's discard requirement, that card can still go on the stack and can be responded to. And if the discard in the cleanup step happens to be your first discard this turn, Rielle, the Everwise's draw ability triggers and you draw that many cards. But don't celebrate too early: another cleanup step will follow, which again requires you to discard down to the maximum hand size, and you can't use Rielle's ability to break past the hand size limit.


![Cleanup Discard](https://images.guildmagesforum.tw/posts/Round-Process/81d116f09c24.webp)
> ● **[Silence](https://scryfall.com/card/m14/35/silence):**
> Your opponents can't cast spells this turn.
> ● **[Necropotence](https://scryfall.com/card/ima/98/necropotence):**
> Whenever you discard a card, exile that card from your graveyard.

Here is another interesting situation where the stack appears in the cleanup step. Suppose your opponent resolved Silence this turn. In theory you can't cast spells this turn, but there is actually a way around Silence's restriction. First, let's look back at the order in which the cleanup step is processed:

- If your hand size is greater than the maximum hand size, discard until your hand size equals the maximum.
- All "this turn" effects end.
- Check whether any triggered abilities go on the stack, and if so, players receive priority.

Suppose you control Necropotence and your hand size exceeds the maximum, so you must discard. Necropotence's "exile that card when you discard" is a triggered ability that goes on the stack later. Then Silence's "can't cast spells this turn" effect ends. Next, Necropotence's triggered ability goes on the stack and players receive priority. Because Silence's effect has already ended, even though it's still the same turn, you can cast spells normally (still subject to timing restrictions, of course).


---

## Extra Turns or Extra Phases

In some cases, players can get extra turns, phases, or steps. The related rules are as follows:

- Some effects can give a player an extra turn. These effects add turns directly after a specified turn. If a player gets multiple extra turns, they are added one at a time. If multiple players get extra turns at the same time, the extra turns are added in an order chosen with the active player deciding first, and the last turn created is played first.
- Some effects add phases to a turn. They add the new phase directly after a certain phase. If multiple extra phases are created after the same phase, the last one created occurs first.
- Some effects add steps to a phase. They add the new step directly before or after a certain step. If multiple extra steps are created after the same step, the last one created occurs first.

![Extra Phases](https://images.guildmagesforum.tw/posts/Round-Process/fb105b13f715.webp)
> ● **[Moraug, Fury of Akoum](https://scryfall.com/card/znr/150/moraug-fury-of-akoum):**
> Landfall — Whenever a land enters the battlefield under your control, if it's your main phase, there's an additional combat phase after this phase. At the beginning of that combat, untap all creatures you control.
> ● **[Nexus of Fate](https://scryfall.com/card/m19/306/nexus-of-fate):**
> Take an extra turn after this one.

Note that these extra turns and phases all cut in line. Take Moraug, Fury of Akoum as an example: when a land enters under your control during a main phase, you get an extra combat phase after that main phase, and only at the beginning of this extra combat phase it creates do your creatures untap.

If you make a land drop in main phase one, you first go to the extra combat phase created by Moraug, where all your creatures untap. After the extra combat phase ends, you go straight into the normal combat phase, but the beginning of the normal combat phase doesn't untap your creatures. If you declared attackers in the earlier extra combat phase, you may awkwardly find that you have a combat phase but no creatures that can attack.

Conversely, if you make your land drop in main phase two, then after main phase two ends you go to the extra combat phase, and after this extra combat phase ends you go straight to the ending phase, because Moraug only creates an extra combat phase and doesn't create an extra main phase.

Also, suppose this is a multiplayer game, it's currently your turn, and the next turn belongs to A. During your end step, opponent B casts Nexus of Fate so that he will get an extra turn, and then C also casts a Nexus of Fate. Now B's and C's extra turns are both queued up, and it works like the stack: the last one to join the queue is resolved first. That is, C takes an extra turn first, then after that turn it's B's extra turn, and after B's extra turn ends the game returns to the original turn order, which is A's turn.

---

## Conclusion

Today we spent a bit more space explaining what the structure of a turn looks like, but in reality this is only the tip of the iceberg. Advanced rules such as the handling principles for multiplayer games were deliberately left out this time, because while compiling the material I found that these rule details are truly endless, and expanding the content without limit would greatly reduce readability. In the end I decided to filter out the most fundamental core concepts and organize them into this article. If you want to understand the complete rules further, you can refer to: [Turn Structure Rules](https://mtg.fandom.com/wiki/Turn_structure).
