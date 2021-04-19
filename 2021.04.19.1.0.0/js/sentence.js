let sentenceArray = [
  '每天都是一个起点，每天都有一点进步，每天都有一点收获！',
  '拼一载春秋，搏一生无悔。',
  '贵在坚持、难在坚持、成在坚持。',
  '眼泪不是我们的答案，拼搏才是我们的选择。',
  '把汗水变成珍珠，把梦想变成现实！',
  '少年狂，我自强。挥斥方遒斗志昂，披荆斩棘神飞扬。',
  '渺挫折，笑风浪。恣意青春我最狂。',
  '剑出鞘，亮锋芒。沙场点兵我为王。',
  '仰，无愧于天地，俯，无愧于父母，挺直铮铮铁骨，啸出朗朗正气。',
  '拳胸中豪情，倾热血满腔，与雷霆碰杯，同日月争辉。',
  '持之以恒的积累，石破天惊的畅想。',
  '脚踏实地，奋力拼搏。',
  '争分夺秒，百炼成钢。',
  '全力以赴，铸我辉煌。',
  '仰，无愧于天地，俯，无愧于父母，挺直铮铮铁骨，啸出朗朗正气。二百天，我卧薪藏胆，七个月，我奋发图强。持之以恒的积累，石破天惊的畅想。拳胸中豪情，倾热血满腔，与雷霆碰杯同日月争辉。子弹已上膛，我誓要一发中标。弯弓已搭箭，我定要百步穿杨。脚踏实地，奋力拼搏。争分夺秒，百炼成钢。全力以赴，铸我辉煌。',
  '今天是一个用努力改写的梦幻；明天是一个用梦想编织的花环；枯藤能挥出美丽的孤线；努力能闪出成功的誓言；把握今天，拥抱未来！',
  '用激情创造未来，用热血拼搏现在，把一切献给现在，创造美好未来。',
  '踏书山坎坷，劈波斩浪，集胸中豪情，倾热血满腔，书生自有凌云志，书生自有壮志酬。',
  '选择了大海，就去乘风破浪;选择了蓝天，就去展翅翱翔。',
  '没有比人更高的山峰，没有比脚更长的路。',
  '选择了就去全力以赴，行动是最好的誓言。',
  '百炼成钢，百日流芳。',
  '要想成为强者，决不能绕过挡道的荆棘，也不能回避风雨的冲刷。',
  '意志力是人的一条救生索，它能够帮忙我们脱离困境，引导我们走向胜利。',
  '没有不会做的事，只有不想做的事。',
  '一份信心，一份努力，一份成功；十分信心，十分努力，十分成功。',
  '过错是暂时的遗憾，而错过则是永远的遗憾！',
  '撑不住的时候能够说我好累，但永远不要说我不行。',
  '如果敌人让你生气，那说明你没有胜他的把握。',
  '人生就像赛跑，不在乎你是否第一个到达尽头，而在乎你有没有跑完全程。',
  '任何的限制，都是从自己的内心开始的。',
  '希望，只有和勤奋作伴，才能如虎添翼。',
  '遇到困难时不要抱怨，既然改变不了过去，那么就努力改变未来。',
  '顽强的毅力能够征服世界上任何一座高峰。',
  '行动不必须带来快乐，而无行动则决无快乐。',
  '学问二字，须要拆开看，学是学，问是问光阴易逝，岂容我待。',
  '成功之前我们要做就应做的事情，成功之后我们才能够做喜欢做的事情。',
  '如果放弃太早，你永远都不知道自己会错过什么。',
  '不做任何人的公主，只做自己的女王。收起无谓的委屈，收起不需的眼泪，此刻起只做自己的女王。',
  '奋斗的双脚在踏碎自己的温床时，却开拓了一条创造之路。',
  '方向比速度重要，智慧比吃苦重要，学习比学历重要，机遇比关系重要，要什么比做什么重要！',
  '每一个闪闪发光的人都在背后熬过了一个又一个不为人知的黑夜。',
  '只要更好，不求最好！奋斗是成功之父。',
  '什么都能够舍弃，但不可舍弃快乐；什么都能够输掉，但不可输掉笑容。',
  '现实很近又很冷，梦想很远却很温暖。',
  '不要活在过去的阴影里，把每一天当作人生的新一天，生活才会多彩多姿。',
  '不要让追求之舟停泊在幻想的港湾，而应扬起奋斗的风帆，驶向现实生活的大海。',
  '太阳虽有黑点，却在奋力燃烧中树立了光辉的形象。',
  '做对的事情比把事情做对重要。',
  '自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。',
  '用自己的双手去创造生活，用辛勤的汗水实现人生的梦想。',
  '勤奋是聪明的土壤，勤学是聪明的钥匙。',
  '你需要跟自己比的唯一一个人，就是以前的自己。你需要比一个人变得更好，那个人就是此刻的你。',
  '在最美的年龄为最纯真的梦做最大的努力。',
  '生活总是让我们遍体鳞伤，但到之后，那些受伤的地方必须会变成我们最强壮的地方。',
  '抓住今日，尽可能少的信赖明天。',
  '努力是为了站在万人中央成为别人的光。',
  '给自己一片没有退路的悬崖，就是给自己一个向生命高地冲锋的机会。',
  '命运之神关上一道门，必定会打开另一扇窗。',
  '石头记告诉我们：凡是真的爱的最后都散了，凡是混搭的最后都团圆了。',
  '进取用汗水谱写着自己奋斗和希望之歌。',
  '我们必须拿我们所有的，去换我们所没有的。',
  '在强者的眼中，没有最好，只有更好。',
  '如果可恨的挫折使你尝到苦果，朋友，奋起必将让你尝到人生的欢乐。',
  '要做的事情总找得出时间和机会；不愿意做的事情也总能找得出借口。',
  '人就应有力量揪着自己的头发把自己从泥地里拔起。',
  '停止拜访就是停止呼吸，停止增员就是消灭生机。',
  '别低头，皇冠会掉。别流泪，贱人会笑。',
  '再长的路，一步步也能走完，再短的路，不迈开双脚也无法到达。',
  '人的一生，能够有所作为的时机只有一次，那就是此刻。',
  '让珊瑚远离惊涛骇浪的侵蚀吗？那无异是将它们的美丽葬送。',
  '命运负责洗牌，但是玩牌的是我们自己',
  '相信你行，你就活力无穷。',
  '没有人能够让我服输，除非我不想赢！',
  '命是弱者的借口，运是强者的谦辞，辉煌肯定有，就看怎样走。',
  '对于每一个不利条件，都会存在与之相对应的有利条件。',
  '如果你曾歌颂黎明，那么也请你拥抱黑暗。',
  '如果不想在世界上虚度一生，那就要学习一辈子。',
  '透过云端的道路，只亲吻攀登者的足迹。',
  '咖啡苦与甜，不在于怎样搅拌，而在于是否放糖。一段伤痛，不在于怎样忘记，而在于是否有勇气重新开始。',
  '萤火虫的光点虽然微弱，但亮着便是向黑暗挑战。',
  '我为你今日的表现感到骄傲。',
  '此刻不玩命，将来命玩你，此刻不努力，未来不给力。 — —致自己',
  '人的活动如果没有理想的鼓舞，就会变得空虚而渺小。',
  '不要那么认真的看待自己。没有人会这样看待你的。',
  '如果你有鸭梨，把它放冰箱里，它就会变成冻梨。',
  '知道自己目的地的人，才是旅行得最远的人。',
  '除了奋斗我别无选择。',
  '成功是一种观念，成功是一种思想，成功是一种习惯，成功是一种心态。',
  '昨日的辉煌已过去，今日的辉煌要争取，明天的辉煌需努力。',
  '一个人的梦想也许不值钱, 但一个人的努力很值钱。',
  '经过大海的一番磨砺，卵石才变得更加美丽光滑。',
  '就算学习和生活再艰难，也要一边痛着，一边笑着，给生活一张漂亮的脸。',
  '时间是没有声音的锉刀。',
  '没有一种不透过蔑视忍受和奋斗就能够征服的命运。',
  '没有过不去的事情，只有过不去的情绪。',
  '时间是脑力劳动者的资本。',
  '不求做的最好，但求做的更好。',
  '嘲讽是一种力量，消极的力量。赞扬也是一种力量，但却是用心的力量。',
  '一个人只有在全力以赴的时候才能发挥最大的潜能。',
  '我们最值得自豪的不在于从不跌倒，而在于每次跌倒之后都爬起来。',
  '要混就混出个名堂，要学就学出个样貌，要么出人头地，要么人头落地。',
  '当人们做不到一些事情的时候，他们就会对你说你也同样不能。',
  '立下人生志向，活出人生精彩。铺好今日沙石，走出明天大道。',
  '活着不是靠泪水搏取同情，而是靠汗水获得掌声。',
  '对自己狠一点，逼自己努力，再过几年你将会感谢今日发狠的自己。努力过后，才知道许多事情，坚持坚持，就过来了。',
  '征服自己，就能征服一切。',
  '你相信你行，你就活力无穷。你认为你自已不行，就会精神萎靡。',
  '真正的坚强就是在所有人都希望你崩溃的时候你还能够振作。',
  '只会在水泥地上走路的人，永远不会留下深深的脚印。',
  '人最悲哀的，并不是昨日失去得太多，而是沉浸于昨日的悲哀之中。',
  '用心向上的人总是把苦难化为用心向上的动力。',
  '只要还有明天，今日就永远是起跑线。',
  '梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',
  '你在学习上这种尝试精神很可贵。',
  '世间最容易的事是坚持，最难的事也是坚持。要记住，坚持到底就是胜利。',
  '饿了想想灰太狼，穷了想想光头强，青春的路上，没有理由不坚强！',
  '烈火试真金，逆境试强者，珍惜眼前时，再创更高峰。',
  '一击就碎的念头不是梦想。',
  '一个华丽短暂的梦，一个残酷漫长的现实。',
  '成熟意味着就算再多再多的困苦也要倔强的告诉自己不会低头。',
  '如果你此刻走得辛苦，就证明你在走上坡路。',
  '一帆风顺，并不等于行驶的是一条平坦的航线。',
  '骄傲是断了引线的风筝稍纵即逝。',
  '本来无望的事，大胆尝试，往往能成功。',
  '你一向在回忆过去，怎样拥抱未来。',
  '姑娘，当你背后空无一人时，你必须活得像个爷们。',
  '没有加倍的勤奋，就既没有才能，也没有天才。',
  '我们这个世界，从不会给一个悲哀的落伍者颁发奖牌。',
  '蝴蝶如要在百花园里得到飞舞的欢乐，那首先得忍受与蛹决裂的痛苦。',
  '学会下一次进步，是做大自己的有效法则。因此千万不要让自己睡在已有的成功温床上。',
  '有人将你从高处推下的时候恰恰是你展翅高飞的最佳时机。',
  '你既然认准一条道路，何必去打听要走多久。',
  '只有创造，才是真正的享受，只有拼搏，才是充实的生活。',
  '好好努力就是为了将来用钱砸死那些看不起我父母的人，这将会是我一生不会改变的梦想。',
  '不是井里没有水，而是挖的不够深；不是成功来的慢，而是放弃速度快。得到一件东西需要智慧，放弃一样东西则需要勇气！',
  '沉湎于希望的人和守株待兔的樵夫没有什么两样。',
  '在你迷茫的时候，请记得最初的梦想。',
  '失败的定义：什么都要做，什么都在做，却从未做完过，也未做好过。',
  '我在奋斗在坚持在拼搏在努力你要等。',
  '外观往往和事物的本身完全不符，世人都容易为表面的装饰所欺骗。',
  '未来一片迷茫，我只好带上坚强勇敢去闯。',
  '一个有信念者所开发出的力量，大于个只有兴趣者。',
  '吹过的牛逼都会变成响亮的耳光，要么扇在自己脸上，要么扇在瞧不起自己的人脸上。',
  '乐观的人能重整旗鼓东山再起，悲观的人因缺乏自信，往往一败涂地。',
  '当你的才华还撑不起你的野心时，那你就就应静下心来学习。',
  '目标再远大，终离不开信念去支撑。',
  '并非神仙才能烧陶器，有志的人总能够学得精手艺。',
  '生活就像海洋，只有意志将强的人才能到达彼岸。',
  '绝大多数人，在绝大多数时候，都只能靠自己。',
  '承载了太多的期许目光，怎敢轻易辜负。',
  '有志者自有千方百计，无志者只感千难万难。',
  '每一发奋努力的背后，必有加倍的赏赐。',
  '不管失败多少次，都要应对生活，充满希望。',
  '此刻过的每一天，都是余生中最年轻的一天。',
  '不喜不悲，不哀不怒，安之若素，冷暖自知。一个人，要坚强。',
  '一生中你唯一需要回头的时候，是为了看自己到底走了多远。',
  '我最孤单最无助最难过的时候都是我自己一个人熬过来的，你说我凭什么不坚强。',
  '有一种成功，叫永不言弃。有一种成功，叫继续努力。',
  '不要等待机会，而要创造机会。',
  '梦想注定是孤独的旅行，路上少不了嘲笑和质疑。',
  '站在巨人的肩上是为了超过巨人。',
  '再长的路，一步步也能走完，再短的路，不迈开双脚也无法到达。',
  '所有的胜利，与征服自己的胜利比起来，都是微不足道。',
  '每一发奋努力的背后，必有加倍的赏赐。',
  '失败只是暂时停止成功，假如我不能，我就必须要；假如我要，我就必须能',
  '自己选的路，跪着也要走完！',
  '人生路上什么都不怕，就怕自己投降。',
  '羡慕别人得到的，不如珍惜自己拥有的。',
  '我们不能选择命运，但是我们能改变命运。',
  '勤奋是学习的枝叶，当然很苦，智慧是学习的花朵，当然香郁。',
  '壮志与毅力是事业的双翼。',
  '别受了点伤就一蹶不振，毕竟未来还有许多大风大浪等待着你去乘风破浪。',
  '只要你确信自己正确就去做。做了有人说不好，不做还是有人说不好，不要逃避批判。',
  '我们必须在失败中寻找胜利，在绝望中寻求希望。',
  '黄金时代是在我们的前面，而不在我们的后面。',
  '只要能收获甜蜜，荆棘丛中也会有蜜蜂忙碌的身影。',
  '不要抱怨自己所处的环境，如果改变不了环境，那么就改变自己的心态。',
  '过去不等于未来。',
  '别人能做到的事，自己也能够做到。',
  '不可压倒一切，但你也不能被一切压倒。',
  '潜力不在脸上，本事不在嘴上。',
  '我们之所以要努力，不是为了改变世界，而是为了不让世界改变我们。',
  '人们痛恨的不是改变，而是被改变。',
  '只有承担起旅途风雨，才能最终守得住彩虹满天。',
  '勇敢地理解挑战，不断地超越自我，这样才能发出你的无限潜能。',
  '对活者的人来说，是没有明天的死了的人则没有今日。',
  '如果要给完美人生一个定义，那就是惬意。如果要给惬意一个定义，那就是三五知己谈笑风生。',
  '稗子享受着禾苗一样的待遇，结出的却不是谷穗。',
  '绊脚石乃是进身之阶。',
  '此刻的我不配喊累，因为我一无所有。',
  '一分耕耘，一分收获。要收获的好，必须耕耘的好。',
  '缺乏明确的目标，一生将庸庸碌碌。',
  '坚强的毅力能够征服世界上任何一座高峰。',
  '雄心壮志是茫茫黑夜中的北斗星。',
  '你被拒绝的越多，你就成长得越快；你学的越多，就越能成功。',
  '这世间最可依靠的不是别人，而是你自己。不要指望他人，必须要坚强自立。',
  '总有一天我要让我的名字成为你们口中的骄傲。',
  '善于把握生命的每一个瞬间，才能感受人生的每一个精彩。',
  '目标和信念给人以持久的动力，它是人的精神支柱。',
  '你三年的艰辛努力，至少会换来你年的完美生活。',
  '你能够一无所有，但绝不能一无是处。',
  '自己要先看得起自己，别人才会看得起你。',
  '自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。',
  '时间象奔腾澎湃的急湍，它一去无返，毫不流连。',
  '世上最可贵的是时间，世上最奢靡的是挥霍时光。——莫扎特',
  '成功＝艰苦的劳动＋正确的方法＋少说空话。——爱因斯坦',
  '人生恰恰像马拉松赛跑一样……只有坚持到最后的人，才能称为胜利者。——池田大作',
  '谁和我一样用功，谁就会和我一样成功。——莫扎特',
  '这世界除了心理上的失败，实际上并不存在什么失败，只要不是一败涂地，你一定会取得胜利的。——亨·奥斯汀',
  '不要心平气和，不要容你自己昏睡！趁你还年轻，强壮、灵活，要永不疲倦地做好事。——契诃夫',
  '忍耐和坚持虽是痛苦的事情，但却能渐渐地为你带来好处。——奥维德',
  '要从容地着手去做一件事，但一旦开始，就要坚持到底。——比阿斯',
  '创造者才是真正的享受者。——富尔克',
  '坚持意志伟大的事业需要始终不渝的精神。——伏尔泰'
]