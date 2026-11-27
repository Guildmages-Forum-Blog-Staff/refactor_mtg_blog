---
title: "第十三輪 MIT 冠軍心得：近代紅黑快攻"
date: "11/16/2026, 2:47:23 PM"
updated: "2026-11-16 14:49:32"
preview: false
categories:
  - "Tournaments"
  - "MIT"
authors:
  - "Weihow"
cover: "https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/caff556eb99e-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/caff556eb99e-cover.jpg"
excerpt: "「哩哩扣扣，你嘛時候是台灣冠軍呀？」『我不知道，你說呢？』「就在今天！就在今天！」"
---

## 前言

大家好，我是韋皓，很感謝[老曹](https://guildmagesforum.tw/authors/sertyple/)的邀稿（？）。說是邀稿，其實比較像是我自己挖坑給自己跳：第十三輪 MIT 的第六輪剛好遇到老曹，他說我只要進 8 強就寫一篇紅黑的攻略，結果我嘴硬回他：「要拿冠軍才寫。」沒想到最後運氣還不錯，真的讓我拿下了冠軍，這篇文章也才有機會跟大家見面。

接下來我會從賽前準備開始，聊聊我是怎麼從其他套牌轉向紅黑，再介紹選擇這副套牌的原因、套牌運作、備牌選擇，以及各對局的上下備牌。希望對想嘗試紅黑快攻，或是正在準備近代比賽的大家有所幫助。

## 賽前準備

在比賽一個多月前我並沒有太多的想法。一大部分原因是 [Boros Energy](https://www.mtggoldfish.com/archetype/modern-boros-energy#paper) 少了 {% mtglink "Phlage, Titan of Fire's Fury" alt="Phlage" %} ，導致能量很多的對局贏不太了。Phlage 是 Boros Energy 的後期引擎：進場或攻擊時造成 3 點傷害並獲得 3 點生命，之後還能從墳場 Escape 回來反覆使用。少了它之後，對局一拖長就少了翻盤和回血的手段，只能靠前期給予對手壓力。當時 [Izzet Prowess](https://www.mtggoldfish.com/archetype/modern-izzet-prowess#paper) 是勝率相對穩定的套牌，我在 MTGO 上試了幾把，發現有時候要跟對方拼命，容易把招打乾沒有後續。Izzet Prowess 靠靈技生物加上一連串低費咒語把傷害累積起來，只要對手把前幾隻打點解掉，很難重新建立場面。我喜歡積極進攻，但不喜歡一次就把資源打光的打法，最終這套也不在我的考慮範圍。

![01-azorius-control-kaheera](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/ab5f865a38ea.webp)

在放棄了快攻之後，原本想用 [Ruby Storm](https://www.mtggoldfish.com/archetype/modern-ruby-storm#paper) 出發，但在看到 Gregg, Kaya 使用 [Azorius Control (Kaheera)](https://melee.gg/Decklist/View/34961b8c-b05a-42e3-9ee2-b4d60108c432) 拿到了北美渥太華冠軍（套牌結構上放了 4 張的 {% mtglink "Orim's Chant" %} 跟 3 張 {% mtglink "Silence" %}），基本上是斷了風暴的夢。風暴要在同一回合連續施放很多咒語，而 {% mtglink "Orim's Chant" %} 和 {% mtglink "Silence" %} 都能讓對手當回合不能施放咒語，只要在風暴展開前丟一張，整個回合就白白浪費了。這麼針對的套牌拿到冠軍，代表環境裡會有更多人跟上，也是對風暴來說最不想看到的發展。

![02-nakamura-rakdos-aggro](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/1e227401dee8.webp)

今年 10 月初中村修平用他的[紅黑快攻](https://melee.gg/Decklist/View/289b7bb2-b002-459d-a800-b4d700510e6c)在日本 RC 上成績傲人，在預賽拿到了 10 勝 1 敗 1 和進入 8 強，我才看見了快攻的一絲曙光。他的牌表最大的亮點是新系列 Reality Fracture（[FRA](https://scryfall.com/sets/fra)） 的 {% mtglink "Dark Matter Manipulator" %} ：1 費、進場磨三張，讓 {% mtglink "Moonshadow" %} 、 {% mtglink "Nethergoyf" %} 這些靠墳場的生物更早成形。

![03-dmm-order](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/983f9ca85046.webp)

跟完直播的我馬上跟[遊戲平方](https://gamesquare.tw/)收了 4 張 {% mtglink "Dark Matter Manipulator" %} 。

![04-mcandrew-rakdos-aggro](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/790f4e683b2b.webp)

將近 10 月底，HEAVY PLAY 的 Joel McAndrew 改放了 {% mtglink "Stitcher's Supplier" %} 和 {% mtglink "Flare of Malice" %} ，原先的山脈也換成 {% mtglink "Blackcleave Cliffs" alt="紅黑快地" %} 。這些改動讓紅黑快攻面對一些 Unfair 的對局能夠獲得改善。{% mtglink "Stitcher's Supplier" %} 讓墳場的深度增加，而我非常喜歡有 {% mtglink "Flare of Malice" %} 的構築，它讓解怪的射程變得更遠。原本的解牌主要是 {% mtglink "Lightning Bolt" %} 和 {% mtglink "Fatal Push" %} ，對付不了大體質或帶守護（Ward）的生物。 {% mtglink "Flare of Malice" %} 不指定、不看法術力值，還可以犧牲 {% mtglink "Stitcher's Supplier" %} 免費施放，遇到奧扎奇大仔或 {% mtglink "Kappa Cannoneer" %} 都有辦法處理。兩張牌剛好互相配合：{% mtglink "Stitcher's Supplier" alt="Supplier" %} 是 {% mtglink "Flare of Malice" alt="Flare" %} 的費用，被犧牲時又能再磨三張。山脈換成紅黑快地，則是前期多了一張不用扣血就能產雙色的地，對快攻時生命值更寬裕。

最後我決定以 Joel McAndrew 的構築作為我紅黑快攻的基底。比起中村修平的版本，它的墳場更厚、解牌更全面，遇到奧扎奇、[Izzet Affinity](https://www.mtggoldfish.com/archetype/modern-affinity#paper) 這類的對局也比較有辦法。紅黑的主要打點和計畫都沒有變，只是多了應對特定對手的工具，對準備時間只有一個月的我來說，是最穩的選擇。確定基底之後，剩下的時間我就專心在練熟這副牌，以及依台灣常見的對手調整備牌。

選這套牌最大的理由，是它對上藍白控制有優勢，整體勝率也很高。根據[官方統計的五場秋季 RC](https://magic.gg/news/metagame-mentor-modern-developments-at-five-2026-fall-regional-championships)，國外比賽中使用率最高的是 [Broodscale Combo](https://www.mtggoldfish.com/deck/7997876#paper)，但它的操作門檻高，會選擇用它出戰的玩家不一定多，反而是藍白控制比較常見。所以準備 MIT 時，我最在意的是兩件事：能不能打贏藍白控制，以及整體勝率夠不夠高，而紅黑正好兩者都符合。

套用我在 [MIT#8 那篇文章](https://guildmagesforum.tw/MIT-8-Review/)提到的選牌方式，這次的考量大概是這樣：

- **套牌強度**：成績上，澳洲 RC 就有 3 副紅黑快攻進入 8 強，新加坡 RC 也有 2 副。官方在 [10 月 12 日的禁限公告](https://magic.wizards.com/en/news/announcements/banned-and-restricted-october-12-2026)中，也把 Rakdos Aggro 列為有成績的套牌之一。
- **打牌風格**：我是喜歡快速決策和積極進攻的玩家。紅黑快攻的計畫很單純：下打點、填墳場、攻擊，每回合要做的決定相對少。打點便宜又大，對手只要前幾回合回應不及，比賽很快就會結束。決策少、比賽快，在一整天的比賽裡也比較不累，後面幾輪還能保持專注。
- **熟練度**：我是 10 月初看完日本 RC 才轉向這副牌，到 11 月 1 日比賽還有將近一個月可以準備。一個月聽起來不長，但我之前就玩過 Boros Energy，快攻的節奏和算血的方式本來就熟悉。加上這副牌的計畫單純，真正需要花時間練的，是用 {% mtglink "Mishra's Bauble" %} 看完牌庫頂後，判斷要不要用 fetch 洗掉。以及各個對局的備牌方式，這些在比賽前都有足夠的時間熟悉。

## 牌表與套牌運作

![05-my-rakdos-aggro](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/d1fae6d2dd9e.webp)

[套牌連結](https://melee.gg/Decklist/View/5962b85b-8879-4338-9a52-b4f3009f0822)

這副牌的核心是用磨牌、循環、找地等……等方式將墳場湊出類別及張數來讓生物變大。國外也叫它 Rakdos Delirium，因中後盤的強度都建立在墳場有四種以上的牌張類別。常見的類別來源是地、神器、生物、瞬間、巫術和結界。{% mtglink "Fear of Missing Out" %} 和 {% mtglink "Detective's Phoenix" %} 是結界生物，一張就算兩種。

### 生物打點

{% mtgcard "Moonshadow" %} 
只要 1 費，帶威懾，本體 7/7，但帶著六個 -1/-1 指示物進場。每當有永久物牌進入自己的墳場，就會拿掉一個指示物。所以找地地、犧牲 {% mtglink "Mishra's Bauble" %} 、循環 {% mtglink "Street Wraith" %}  可以加速長大。要注意永久物被反擊，以及生物戰鬥進墳都會觸發 Moonshadow 的異能。

{% mtgcard "Nethergoyf" %} 
他的力量等於墳場的類別數，防禦力再多 1，且可以用 Escape 從墳場回來，費用是 {2}{<span style="color:#808080">B</span>} 和放逐墳場裡合計四種以上類別的其他牌。對手用單體解牌處理它後，後期還能再打一次。

{% mtgcard "Detective's Phoenix" %} 
是 3 費 2/2 飛行敏捷，但主要的用法是從墳場 Bestow。Bestow 的費用是 {<span style="color:#AF2321">紅</span>} 加上放逐墳場總法術力值 6 以上的牌，被附的生物 +2/+2 並獲得飛行和敏捷。常見的方式是把它附在剛進場的生物上，讓生物當回合就能攻擊。就算被附的生物死掉， {% mtglink "Detective's Phoenix" alt="Phoenix" %} 也會留在場上變成生物，對單體解牌很有韌性。

{% mtgcard "Fear of Missing Out" %} 
兩費 2/3，進場時棄一抽一，常見的是把 Detective's Phoenix 丟進墳場。只要達成躁狂，它每回合第一次攻擊時可以重置一隻生物，並多出一個戰鬥階段。

### 填墳場的工具

{% mtgcard "Dark Matter Manipulator" %} 
Reality Fracture 帶給這副牌最關鍵的新牌：1 費 1/2，進場磨三張，墳場每有七張就 +2/+0。它一進場就能幫 Nethergoyf 補類別，也有機會把 Detective's Phoenix 磨進墳場。到了中後盤，墳場 7 張是 3/2，14 張就是 5/2，後期抽到也不會是雜魚。

{% mtgcard "Stitcher's Supplier" %} 
1 費 1/1，進場和死亡時各磨三張，一張牌最多能填六張進墳場。它的體質比 Dark Matter Manipulator 差，但可以觸發兩次磨牌。最好用的時機是拿它付 Flare of Malice 的費用，免費解掉對手的生物，同時再磨三張。對上快攻時，它也可以直接擋一下換磨牌。

{% mtgcard "Mishra's Bauble" %} 
0 費神器，橫置並犧牲它就能看一位牌手的牌庫頂，在下一回合的維持開始時抽一張牌。它不用花法力就能補上神器類別，還不會虛耗手牌。如果手上有 Moonshadow，可以等它下場再犧牲，多拿掉一個指示物。看自己的牌庫頂時，也能決定要不要用找地地洗掉。

{% mtgcard "Street Wraith" %} 
付 2 點生命就能循環，法術力值 5，只要再放逐一張 1 費牌就湊齊 Phoenix 的 bestow 費用。

{% mtgcard "Troll of Khazad-dûm" %} 
類似 Street Wraith 的效果，可以支付 {1} 循環找 Swamp，自己就有魔法力值 6，直接墳場放逐 Troll of Khazad-dûm 施放 Phoenix。

### 解牌與干擾

{% mtgcard "Flare of Malice" %} 
可以用犧牲一隻非衍生物的<span style="color:#808080">黑</span>色生物代替費用，讓對手犧牲法術力值最高的生物或鵬洛客。我帶了 4 張，因為它不用花法力，還能處理難以指定的目標；它同時也能堆墳：施放後 Flare of Malice 自己和被犧牲的生物都會進墳場，一次補上瞬間和生物兩種類別，犧牲 Stitcher's Supplier 還能再磨三張。要注意 Fear of Missing Out 和 Phoenix 是<span style="color:#AF2321">紅</span>色，不能拿來犧牲。

![removals](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/cc37e11ff7bf.webp)

{% mtglink "Thoughtseize" %} 用來保護打點，並看對手有什麼解牌。 {% mtglink "Lightning Bolt" %} 和 {% mtglink "Fatal Push" %} 處理前期生物；Fatal Push 配合 Fetch land 和 {% mtglink "Mishra's Bauble" %} 就能打到法術力值 4 以下生物。

## 備牌選擇

- 2 {% mtglink "Blood Moon" %} - 對陣非基本地多或色組多的套牌，例如怨靈復仇、Tron、蜥蜴刀、護身符泰坦、動物園、Living End 和藍白控……。
- 2 {% mtglink "Meltdown" %} - 主要對付的是 Izzet Affinity，這算是紅黑快攻的劣勢對局。對手會利用 {% mtglink "Pinnacle Emissary" %} 只要施放神器咒語就做出一隻 1/1 飛行的[無人機](https://scryfall.com/card/teoe/3/drone)，而無人機是法術力值 0 的衍生物，Meltdown 只要 {<span style="color:#AF2321">R</span>} 就能清光。
- 1 {% mtglink "Steel Wrecking Ball" %} - 從手上棄掉並付 {1}{R} 就能破壞神器。這是起動式異能，不是咒語，而且棄掉後還是墳場裡的神器。也可以用來拆掉藍白控的 {% mtglink "Isochron Scepter" %} 。
- 1 {% mtglink "Obsidian Charmaw" %} - 打奧扎奇必備。對手每有一張能產無色的地就少付 1 費，進場破壞一張非基本地，可以拆掉 {% mtglink "Eldrazi Temple" %} 或 {% mtglink "Ugin's Labyrinth" %} 拖慢對手加速，或在 {% mtglink "Urza's Saga" %} 進入第三章之前先處理掉。但老實說，在目前的環境我沒有很喜歡這張牌：紅黑快攻常常沒辦法準時下地，多數情況湊不出 {<span style="color:#AF2321">R</span>}{<span style="color:#AF2321">R</span>} 或 {1}{<span style="color:#AF2321">R</span>}{<span style="color:#AF2321">R</span>} 把它叫出來，備牌還是要放一張給予對手壓力。
- 2 {% mtglink "Glistening Deluge" %} - 全場 -1/-1，<span style="color:#4A8A3D">綠</span>色或<span style="color:#C3B270">白</span>色生物再多 -2/-2，主要打 Boros Energy 跟 [Devoted Combo](https://www.mtggoldfish.com/archetype/modern-devoted-combo#paper)。
- 2 {% mtglink "Ob Nixilis, the Adversary" %} - 打控制和拖到後期的對局。3 費使用 Casualty，犧牲力量 X 的生物可以複製一個忠誠度 X 的鵬洛客。常見作法是犧牲貼著 Detective's Phoenix 的生物做 Casualty：Phoenix 的 +2/+2 讓複製品忠誠度更高，而生物被犧牲後 Phoenix 還會留在場上變成生物。
- 2 {% mtglink "Nihil Spellbomb" %} - 目前近代環境都需要帶剋墳，它可以清對手墳場，例如在對手施放 {% mtglink "Goryo's Vengeance" %} 時把目標放逐。對 {% mtglink "Living End" %} 則是在 Living End 結算前清掉對手的墳場。
- 1 {% mtglink "Grafdigger's Cage" %} - 除了墳場對局，這個環境還多了 [Simic Neoform](https://www.mtggoldfish.com/archetype/neobrand#paper)、[Devoted Combo](https://www.mtggoldfish.com/archetype/modern-devoted-combo#paper) 跟 [Ruby Storm](https://www.mtggoldfish.com/archetype/modern-ruby-storm#paper) 這種組合技套牌。Cage 在場時，生物牌不能從墳場或牌庫進場，也不能從墳場或牌庫施放咒語：可以擋住 Neoform 和 Devoted Combo 從牌庫找生物直接放進場，也能擋住 Ruby Storm 用 {% mtglink "Past in Flames" %} 從墳場重新施放咒語。
- 1 {% mtglink "Inquisition of Kozilek" %} - 專門對付低費的組合技。它和 Thoughtseize 一樣只要 {<span style="color:#808080">B</span>}，差別是只能拿法術力值 3 或以下的非地牌，但不用付 2 點生命。對上 Broodscale Combo 和藍白控這類套牌，對手的關鍵牌大多是低費的，第一回合先拿掉組合技零件或關鍵的干擾，再讓打點去打。它也能先看對手的手牌，決定要不要全力進攻。用完後進墳場，也能補上巫術類別。
- 1 {% mtglink "Fatal Push" %} - 它是 {<span style="color:#808080">B</span>} 的瞬間，可以消滅魔法力值 2 或以下的生物；當回合有自己的永久物離場（Revolt），就能打到魔法力值 4。可以用這些方式觸發 Revolt：找地地、犧牲 Mishra's Bauble，或拿生物付 Flare of Malice 都可以。對上 Boros Energy、Izzet Prowess 這類快攻，可以用 {1} 點法力換掉對手的前期生物；對 Broodscale Combo 也能解掉 {% mtglink "Basking Broodscale" %}。

## 備牌計畫

以下列出常見對局的備牌計畫

![06-sideboard-plan](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/609de4775913.webp)


## 結語

這次 MIT 我以預賽 6 勝 1 和進入 8 強，最後拿下冠軍，也兌現了第六輪跟老曹說的「要冠軍才能寫」，這篇文章總算可以交差了。

其實比賽前一天，我就覺得這次應該有機會前往 PT（賽前已經忘記跟多少人說過，這次有預感會拿冠軍……）。現在想想，這大概就是「顯化」吧，牌盒上的卡戴珊貼紙應該也有一點功勞。比起前幾次比賽，這次反而沒有那麼緊張，整天都盡量保持平常心，不去想勝負，只專注在每一盤的對局。回頭看，選一副計畫單純、決策偏少的牌，也讓我更容易做到這一點。

![07-deckbox-playmat](https://images.guildmagesforum.tw/posts/MIT13-Rakdos-Aggro/caff556eb99e.webp)
<p style="text-align: center;"><a class="small">前一天的晚上牌盒被女友貼了卡戴珊的粉色頭貼，沒想到這個牌盒就這樣陪我一路打到冠軍</a></p>

說起來有點不好意思，之前我一直跟大家說要開始練護身符泰坦、組合技或控制套牌，結果到現在都還沒實現。最後還是得靠快攻拿下，看來我還是離不開快攻 XD。不過這個目標我還是會放在心上，說不定下次大家就會在比賽上看到我拿著護身符泰坦出現（希望這次不要又只是說說而已）。

感謝閱讀。
