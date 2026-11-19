---
title: "MIT#13 季軍心得: Azorius Chant"
date: "11/19/2026, 5:18:23 PM"
preview: false
categories:
  - "Tournaments"
  - "MIT"
  - "Modern"
authors:
  - "Enki"
cover: "https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7850e28dada6-cover.jpg"
thumbnail: "https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7850e28dada6-cover.jpg"
excerpt: "沉默中的人是無法說 「不」的。"
---
## 前言

大家好~ 我是[Enki](https://guildmagesforum.tw/authors/Enki/)，上次在這裡投稿已經是非常久以前的事情了。不過並不是我不玩、不愛Magic了，而是我在心態上有了一些轉變，決定要有一定程度的成績才會來這裡寫文章。Magic依舊是我的根，我是不會輕易放棄它的。這次就是剛好有了這個契機，想好好來跟各位分享這套讓我取得季軍的Azorius Chant。

接下來的分享主要會圍繞以下：
- 賽前準備
- 套牌底層邏輯、運作與構建

我會盡量充分的說明以上事項的流程與細節，讓正在閱讀本文的各位能夠更加深入的理解這副套牌。

## 賽前準備

大約是從9月中開始，我們Team的神祕DC群開始有人提到要準備近代MIT，想想離10月底不遠了，確實該來好好照顧一下這個近代，於是我們放下手中的其他遊戲，開始好好研究到底該打甚麼。而要參考肯定就是要關注一下國外的RC環境，畢竟MIT好像是當季最後一場，有不少作業可以抄。

第一個映入我們眼簾的是：[SCG CON Baltimore](https://melee.gg/Tournament/View/405588)
給各位看一下當時的八強Meta： 
![01-Baltimore-top-8](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/9bec9d833886.webp)
可以看到超級多的 [Mono-Green BroodScale （血刀）](https://www.mtggoldfish.com/archetype/modern-eldrazi-ramp#paper) 在上面亂殺、加上一些其他零碎的近代強者。

我對於當時近代的解讀是：原本最強的是[神器共鳴](https://www.mtggoldfish.com/archetype/modern-affinity#paper)、只要出了無敵的 {% mtglink "Kappa Cannoneer" %} ，或是順利的用 {% mtglink "Weapons Manufacturing" %} 鋪炸彈、抑或是利用 {% mtglink "Urza's Saga" %} 給予的龐大資源量，就能夠在大部分對局中製造出對手難以應對的場面以取勝。

而為了應對氾濫的神器共鳴，玩家給出的解答是：｢神器共鳴是如此Unfair，但最快也要4回才有機會把人打死吧? 那我3回贏不就好了ㄏㄏ」，於是最快3回就能贏的血刀出現了。

而為了應對接管近代的血刀，當時也出現了一個另一個正夯的牌組: [Devoted Druid Combo](https://www.mtggoldfish.com/archetype/modern-devoted-combo#paper)，理由大同小異：｢你3回贏，那有看過2回贏嗎？」

這兩套的出現活生生把當時的近代變成了超級賽跑遊戲，有看過Baltimore的八強直播就知道，一個bo3十來分鐘就結束了，相當鬼扯。

但對我來說這都不是重點，我看到的是我唯一的救星：[Esper Blink](https://www.mtggoldfish.com/archetype/modern-esper-blink#paper)，也是讓我拿到第十三季資格的套牌，我當時幾乎是篤定要打這副套牌，理由相當簡單：

- Baltimore有兩副進八強、代表總體表現上來說可以競爭。
- 熟悉的套牌、因此時間成本可以拿去練不同對局的打法。
- 對上Druid Combo跟血刀的勝率可以接受。
- 最劣勢對局神器共鳴已經式微。

因此我很興奮地馬上組好我的blink，準備要來挑戰CM幫的兄弟們，然而我囂張的氣焰大概只維持了幾個小時就熄滅了。在跟人稱泰坦聖體的勳哥練習時我遭遇了莫大的挫折，不管是備牌還是正編、先攻或是後攻我的勝率都低的可悲，彷彿被勳哥玩弄於股掌之間。雖然當下我是告訴自己正賽不要遇到泰坦就好，但內心還是有點不安，甚至是動了一絲邪念：「**還是我去玩這個Azorius Chant？**」
現在想想也許這就是一切的開端。

過了幾周，大概在10月初我還在思考我的Blink要怎麼改才能不被這些泰坦玩死時，神秘DC群一如往常的關注著各大區域的RC環境，而當時我們看到了對我這次影響最深遠的一次RC：[Ottawa 2026-27 Round 1 Regional Championship](https://melee.gg/Tournament/View/459699)。 

![02-ottawa](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/72644fe2b2c7.webp)
冠軍就是 **Azorius Chant**，所使用的卡表也是相當的變態，除了本來就會放滿4張的 {% mtglink "Orim's Chant" %} ，還追加了3張 {% mtglink "Silence" %} 搭配原本就有的 {% mtglink "Isochron Scepter" %} ，基本上是不打算讓對面玩遊戲了。

![03-ottawa-chant](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/1904cdf6767d.webp)
看到此等喜訊的當下，深藏於我內心的惡魔隨即甦醒，操控了我將Esper Blink解體，讓Mana Base類似的Azorius Chant繼承了它的衣缽，就此踏上一去不復返的道路……
雖然講得有點戲劇性，但其實當下換套牌時我是很理性的。理由只有一個、而且非常簡單，那就是：**我有很高的熟練度加成**。
去年MIT#10雖然成績不盡理想，但當時我就是使用[Fransisco Sanchez 的Azorius Chant](https://www.mtggoldfish.com/deck/7365218#paper)。且這一季在拿到資格後去充當香菇的每一場MITQ，我幾乎都是使用同一套、或是相同概念的藍白控制型牌組參戰。對我來說，我並不需要花太多時間去熟悉套牌邏輯，可以在很短的時間內就去驗收套牌可行性。最差的情況，就只是轉回去打Esper Blink，僅此而已。因此我決定在準備時間有限的情況下，嘗試轉打7 Silence/chant 的 Azorius Chant。

![](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7901a544795d.webp)
<p style="text-align: center;"><a class="small">7 Silence/chant</a></p>

經過了一陣子的測試後，我發現7 Silence/Chant解決了不少過去的問題、而且在當時的環境有明顯優勢。除了在對上剛剛有提到的Druid Combo、血刀與泰坦有很高的勝率外、取代原本 {% mtglink "Counterspell" %} 位置的Silence在對上原本很不利的 [Izzet Prowess](https://www.mtggoldfish.com/archetype/modern-izzet-prowess#paper) 與 [Boros Energy](https://www.mtggoldfish.com/archetype/modern-boros-energy#paper)時會比CounterSpell有用很多（下面會提到差異），因此勝率有提高許多，而且優開Blink或是Goryo這種環境數量不少且看似不利、但實際上卻很有利的對局。在獲得了這些資訊之後我當下就確定要打Chant了。

後來過了一周環境又出現了變化，[紅黑Aggro](https://www.mtggoldfish.com/archetype/modern-rakdos-midrange#paper)在國外RC大量發生，聽說打藍白的勝率很高。而且為了對應紅黑、有無敵[地脈](https://scryfall.com/card/mkm/217/leyline-of-the-guildpact)[龍](https://scryfall.com/card/mh2/234/scion-of-draco)的[Domain Zoo](https://www.mtggoldfish.com/archetype/modern-domain-zoo#paper)數量似乎也有所提升。而據某位魔風里長伯的線報，MIT要打紅黑的人似乎很多，Domain也有人要打，我當下其實就有點慌，完蛋要被針對了。但想想也沒辦法了，只能先改牌。

後續我針對了這兩套要來扁我的套牌，做了一些針對的改動。最主要的，就是捨棄了把一些用途較窄的牌放一張在正編的習慣，並將它們移除來提高容錯率。改成能提高對紅黑/Domain的勝率，並在多數對局不太會變成死牌的有效單卡。

在最後一個星期的測試中，這些改動也發揮了成效。雖然勝率表上藍白打紅黑的勝率較低，但在測試中，我改完的版本在正編局是有辦法做到優開紅黑的。雖然也有可能是受到一些波動影響，導致我測試的結果不太準確。但總體來講說，我相當滿意這次的改動，在最後也是交了這個能夠跟紅黑掰掰手腕的版本。至於Domain Zoo這個對局，在測完後我幾乎是完全放棄的。不管有沒有做針對快攻的改動，應該都是打不太贏，只能祈禱當天不要遇到。

## 遊戲計畫

先附上[卡表](https://melee.gg/Decklist/View/4f87df2d-383b-4851-9cb1-b4ee0107f13d):
![04-enki-chant](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/fea632d7a6d4.webp)

主要改動邏輯是參考[SCG CON Los Angeles](https://melee.gg/Tournament/View/405591)冠軍Toothy的型、並與Fransisco Sanchez 去年的舊型做參照，兩邊的Guide我都有買。雖然套牌時空背景不同，但比較差異讓我的打法很快的從舊型轉成新型邏輯。

新舊型的主要差異在於：新型幾乎是完全捨棄掉康牌，增加更多的 {% mtglink "Silence" %} 去封鎖對手，並讓 {% mtglink "Day's Undoing" %} 有更好的發揮空間。較常使用情境為：
1. 在清掉對手場面後，使用 {% mtglink "Day's Undoing" %} （以下簡稱 Day's）的情況下抽到Silence/chant的機率上升。可以很有效地連續封鎖掉對手後續的展開回合，製造出只有自己能玩遊戲的場面。
2. 跟第1點用法差不多，先手的情況下可以Keep 2 Silence/chant + Day's，連續鎖對面兩回合後直接開Day's把前兩回合失去的牌差直接打回來。

以上兩種情境在對上任何牌型幾乎都適用，尤其第2點在對上快攻（Prowess/紅黑/Energy）是非常好的拖延手段，對手會無法在前期展開。且以套牌構成來講，我方在第四塊地之後的回合都會比對面強。可以很容易的在快攻對手把我方打死之前，就製造出第1點的連續封鎖情境，或是直接用資源Control Win。

舊型仍有一半的Control成分，利用康牌干擾、濾牌、解場是Plan A， {% mtglink "Narset, Parter of Veils" %} + Day's則是Plan B。當時的環境還容許放康牌去跟堆疊互動，但在現在的超絕Turbo環境，康牌反而成了絆腳石。發揮得不夠快，而且在打一些容易Double Spell的超展開套牌時幾乎是一張死牌。此外，舊型最嚴重的缺陷是：比起新型，它更難有效地去保護自己最重要的組合技Wincon。

而新型則是更加著重於組合技本身，但依舊保留了解場Control的Plan A。只有在一些組合技不容易成功、且我方會被強逼轉打資源取向的對局時、才會啟用這套解場控制的隱藏Plan B。

## 套牌底層邏輯

傳統的控制Deck講求穩定的下地、資源領先與解場。在把對手資源耗光後，用更強的牌與大量牌差去控死對手、慢慢獲勝。

但Azorius Chant在很多操作上，其實都跟傳統控制的邏輯背道而馳。你會在一些傳統控制不會行動的時間點發動Silence/chant虧牌，會冒著將對手手牌補滿的風險施放Day's Undoing。而這些看似反直覺的行動，其實都是在為了後續回合的勝利鋪路。這使套牌的性質更貼近組合技，而並非傳統控制。

大部分時間，Chant要贏都只能等到第5塊地之後。理想情況下，我們有 {% mtglink "Narset, Parter of Veils" alt="Narset" %} 、{% mtglink "Teferi, Time Raveler" %} 跟複數Silence/Chant的時候，通常會從自己要進4費的前一個回合開始 {% mtglink "Silence" alt="封口" %} 對手，在出完Teferi的下一個回合再封口對手一次，下個回合再出Narset去找更多的封口，同時 {% mtglink "Teferi, Time Raveler" alt="Teferi" %} 持續 [+1] 。用這個連續封鎖策略去買更多的回合找Day's，並爭取在下個對手的抽牌階段直接開Day's施展手牌消失術以取勝。

但這僅限於手牌不錯的狀況。大多數情況會是需要打更長盤的情境：解場較多、Silence/Chant只有1～2張、然後Narset/Teferi只來其中一邊。在那之前我們必須要做的，就是盡可能讓對手 **場上不要出現地以外的東西**，並透過Narset、 {% mtglink "Consult the Star Charts" %} 或是右手去找到Day's Undoing，並在至少有5塊地的回合正開Day's Undoing逼大家重玩。而因為現在有7～8張Silence/chant，重打後墳場也會洗回去的關係，能抽到至少一張Silence的機率是接近65%的。意味著我們有很高的可能性，能在開完Day's的下一個對手回合的維持階段繼續封口，讓遊戲的主導權回到我方。
只要對手場面全空且無法行動，我們就又回到可以去找連續封鎖 + Narset & Day's 組合技的情境了。

沒錯，整個套牌的目的就是在中期不間斷地去找連續封鎖、過程中同時也找到組合技組件。即使還沒有找到，那就再開Day's重打，然後再繼續重複同樣的流程。而就算中間發生斷檔，我們也可以用抽到的解場或濾牌去買時間，直到你可以Control Win或是 Combo Win。

永遠不要因為害怕對手會把手牌補滿而不在該做的時機正開Day's，要記住： **Chant的套牌邏輯就是圍繞著這張去組成的，但對手的不是。**


### 套牌單卡說明

說說幾張這次的改動影響最多的單卡。

#### 正編

{% mtgcard "Teferi, Time Raveler" %}

已經算是近代最常見的旅法師了吧？
基本上做壞的靜止式異能是許多近代套牌的天敵，在這裡則是成為封口策略和Day's Undoing組合技不可或缺的一部分。是讓套牌成立的關鍵單卡。主要的作用在於 [-3] 去回手對手的威脅來爭取回合數，成功站住後就可以不斷地 [+1] 去把手上的巫術解場變瞬間，在對手的回合干擾，或是在抽牌階段配合Narset + Day's的Combo。

{% mtgcard "Narset, Parter of Veils" %}
組合技組件之一，也是賺牌手段。
用來濾更多的封口、解場、找 {% mtglink "Consult the Star Charts" alt="Consult" %} 這種大濾牌，或是直接拿Day's上手跟對手說我等等要把你手牌Bang不見了。
限制每回合只能抽一張的效果在很多狀況都可以讓對手很不舒服，這也造成她的嘲諷值極高，基本上對手一定會打她。更不用說遇到有直傷的套牌開完 [-2] 的賺牌效果就會被電掉了。

{% mtgcard "Day's Undoing" %}
套牌的組合技終端Payoff，一切的開始也是一切的結束。
最為人知曉的Combo **手牌消失術** ：在場上已經站好Narset時使用，我方的手牌會補滿。而對手則會因為Narset的效果只抽到一張牌 or 抽不到牌。
這張牌的使用時機比較弔詭，不只是Combo，有時候我們甚至會直接正開他去把手牌給補回來。雖然你可能會覺得這樣會讓對面也抽牌很虧，但戰略上來講，我們的主要目的是想辦法打到 **第5塊地之後做出Combo** 來取勝。而正開Day's就可以讓我們在耗光前期資源的情況下接關、去找下一次Combo或是控場手牌。
使用上需要注意的是，Day's只有在自己回合結算時會直接結束回合 + 放逐自己。在對方回合利用Teferi [+1] 的效果施放時，不會結束對方的回合，同時這張牌也會正常地掉入墳場。


{% mtgcard "The Wandering Emperor" %} 
飄萍皇，先驅老朋友。
其實很多Chant已經開始在備編投入這張牌了，我則是直接在正編投入兩張。它在對上內戰、紅黑、Prowess或是Energy都是可以拖很多時間，讓你活下來的牌，甚至自己就可以成為Win Con。

{% mtgcard "The Mind Stone" %}
大概算是我覺得改動後、整套牌裡面強化封口策略最重要的一張牌，有買Toothy的guide才會知道有這個選項。
它給套牌帶來的好處是：你可以在2回的時候跳費，並用封口封鎖對手下回的節奏。到了下個你的回合讓你能夠出3費的旅法師，並保有1費拿去做連續封口，或是解場空間。
它是白色的牌，可以讓你拿來pitch給 {% mtglink "Solitude" alt="白元素" %} 、甚至不會被自己的 {% mtglink "Wrath Of The Skies" %} 炸掉。四強內戰輸給[Gman](https://melee.gg/Profile/Index/Peter780107)，很大部分原因就是他後手2回先出了這張牌，在我的回合封口讓我不能出Teferi。到他的回合他就可以出他的Teferi，並可以留有1費跟我的 {% mtglink "Mystical Dispute" alt="dispute" %} 對康。

{% mtgcard "Erode" %}
國外RC有不少list都開始放這張，理由是為了打內戰，需要很有效率的手段去除對手的旅法師。我自己則是有時候會Evoke出白元素之後，再Erode它自己來讓我跳費。

{% mtgcard "Geier Reach Sanitarium" %}
賽前有跟本來還是隊友的[菜鳥](https://guildmagesforum.tw/authors/SamuelChang/)來回討論過要不要留這張。他是覺得沒用，更傾向於放 {% mtglink "Petrified Hamlet" %} 去針對一些功能地的封鎖，像是會出現在泰坦與血刀中的 {% mtglink "Ba Sing Se" %} ，或是喊對手的找地讓它有那麼一點機會被這張卡死。
我自己的話則是更傾向於相信我的個人經驗。很多時候都能靠這張地去把手上的廢卡濾掉，更多的是這塊地其實是Narset + Day's 組合技的一部分。在對手回合清光手牌後若這塊地在我方場上，那便可以在下個對手回合的維持開它的效果，逼對手抽1棄1，然後對手就會被Narset卡死在抽牌階段不能抽牌而輸掉。

基於組合技完整性考量，我最後並沒有把它換掉。

{% mtgcard "Isochron Scepter" %}
也算是考慮了很久才決定留著的單卡，算是牌組的Plan C吧。
用它的效果去壓印Silence/chant就可以完全封鎖對手在自己回合做事，後續抽到Teferi搭配這張，那就是對手在雙方回合都不能做事，基本上等於輸了。
原本是把它踢掉換第8張Silence、但最後想想還是覺得7 Silence打起來順手一點，而這張牌很多時候抽到幾乎就是Auto-Win。

![](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7901a544795d.webp)

封口 （7 Silence/chant）。
套牌的原罪，也是造成這套牌人人喊打的原因之一。在中後期的連續封口會讓對手完全失去遊戲體驗，只剩你一個人在玩。套牌最難的部分就在於這兩張的使用時機。基本上要看你對對手的套牌的了解，同時也要知道自己離連續封鎖的回合數有多近，才有辦法去決定要在什麼時機用封口。但大多數時候的優先級別，都是：
`阻止對手的Power Turn > 保護自己的連續封口Turn or 施放旅法師 > 不爽就丟。`
隨便亂丟通常沒什麼好結果，很多人對這張牌的誤解就在於覺得它可以隨便亂丟，但其實你施放封口是要有目的性的。而不是從第一回合開始就封口，然後封完甚麼限制都沒有留給對手，到最後還是讓他炸出他的Power Turn，那就跟沒丟是一樣的。
**Chant一定是比Silence強的。** 通常只是要買回合、不讓對手出招都是丟Silence。比較前面的回合想貪一點留Chant，到後面的回合也可以先出Silence賣一點血給對手。Chant最常見的使用時機，就是對面拍一堆東西要進戰階扁你的時候才kicker，然後下回就會被你用掃場給清檯。


#### 備牌

{% mtgcard "Consign to Memory" %}
應該不用多解釋太多這張牌，專扁無色牌組跟會有一堆觸發式異能的deck。很多構築後來都只放3張，但我在嘗到 {% mtglink "Ba Sing Se" %} 的厲害就決定放第4張了，絕對不能讓 {% mtglink "Sowing Mycospawn" alt="找地蘑菇" %} 的異能結算。要也是他自己用抽的把Ba Sing Se抽上來，不准給我用Tu的，帶種就放超過2張抽得到算你厲害。

{% mtgcard "Mystical Dispute" %}
這張應該也不用解釋太多。打內戰、Blink或是有放 {% mtglink "Psychic Frog" %} 體系的套牌都很強，遇到對面是康康怪也可以用來保護自己的旅法師結算。

{% mtgcard "Sanctum Prelate" %}
[菜鳥](https://guildmagesforum.tw/authors/SamuelChang/)給我的建議。
雖然現在7Silence/chant + 有飄萍的型已經有十足的把握可以對付Prowess了，原本備牌這張的位置是 {% mtglink "High Noon" %} ，但同樣要針對Prowess，這張的好處是可以完全鎖死Prowess、不會被 {% mtglink "Wrath of the Skies" %} 波及。並且因為是生物，所以不會吃 {% mtglink "Spell Pierce" %} 或是 {% mtglink "Spell Snare" %} ，一登場Prowess基本上是要直接喊投降的。順道一提這張同樣也可以針對到Storm，基本上不會因為拿掉High Noon而讓打Storm的勝率變低。

{% mtgcard "Sanctifier en-Vec" %}
主要拿來針對紅黑的單卡，Goryo只是順便。
在跟 {% mtglink "Rest in Peace" alt="RIP" %} 互相比較後，在各種意義上我都覺得比較優秀的單卡。原本剋墳是有放 {% mtglink "Surgical Extraction" %} ，但後來我連堆墳都不想讓對手堆，於是就把歪腦筋動到這張牌上了。
跟RIP的主要差異是：它可以提供一個幾乎不會死的阻擋者，且不會把我自己墳場的Silence放逐。所以我正開Day's還是會有一樣、甚至更高的機率去重抽到Silence去打我想要的Plan。但RIP會影響到這件事。加上我覺得現在真的算墳場deck就只有紅黑，而Goryo也會因為吃這張牌讓他失去唯一能贏chant的plan，因此選擇它。

{% mtgcard "Supreme Verdict" %}
正加備各一張，還是給了神器共鳴 / Domain Zoo 一點Respect。且打到血刀若 {% mtglink "Emrakul, the Promised End" %} 不幸結算也需要這張牌去把它給掃掉，算是重新讀過Fransisco Sanchez的guide之後下的判斷。打神器共鳴最好的一張牌並不會是 {% mtglink "Wrath of the Skies" %} ，而是能清掉 {% mtglink "Kappa Cannoneer" %} 的Verdict。而在對上Domain Zoo時，沒有這張牌幾乎是不可能贏的。 

## Sideboard Plan
各對局的上下備牌，如下圖：
![06-sideboard](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/260947cc96c9.webp)

## 結語
這次我覺得各種意義上運氣都不錯吧。套牌強度不錯，也是我喜歡的牌。環境不錯、優勢對局多。走位也不錯，沒有遇到最難打的神器共鳴 / Domain Zoo，看到[碩恩](https://guildmagesforum.tw/authors/Sekun/)大大一直坐在附近真的很怕遇到。
Win & In 運氣也不錯，剛好抓到據稱勝率有80%以上的[風暴](https://guildmagesforum.tw/Modern-Ruby-Storm/)，只能跟對手說Sorry。
比賽的結果也不錯。季軍戰對上韓同學本來打錯沒留飄萍皇，但右手進牌讓我解掉了他的Power Turn。後續來來回回他手牌不夠強，我才能贏下這個對局。
幾乎每次MIT給自己設定的目標都是八強，但有幾次都剛好差一點。而這次超出八強、甚至能前進PT的結果，算是讓我了結了過去的遺憾吧。

![](https://images.guildmagesforum.tw/posts/MIT13-Azorius-Chant/7850e28dada6.webp)
