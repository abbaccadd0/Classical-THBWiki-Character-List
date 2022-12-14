// ==UserScript==
// @name                Classical THBWiki Character List
// @name:zh-CN          经典THBWiki角色列表
// @description         Restore old THBWiki character list
// @description:zh-CN   经典THBWiki角色列表，但或许……也有点新东西
// @home-url            https://github.com/abbaccadd0/Classical-THBWiki-Character-List
// @namespace           abbaccadd0
// @version             0.0.2
// @author              abbaccadd0
// @license             MIT License
// @run-at              document-end
// @match               *://thwiki.cc/index.php?title=%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8*
// @match               *://thwiki.cc/%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8*
// @updateURL           https://raw.githubusercontent.com/abbaccadd0/Classical-THBWiki-Character-List/main/ClassicalTHBCharaList.user.js
// @downloadURL         https://raw.githubusercontent.com/abbaccadd0/Classical-THBWiki-Character-List/main/ClassicalTHBCharaList.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById('chara-list').style.wordBreak="keep-all";
    document.getElementById('chara-list').innerHTML = "<div class=chara-title><span class=title>官方角色列表</span></div><div class=chara-filter style=word-break:keep-all><ul>    <li><a href=/东方灵异传 title=东方灵异传>东方灵异传</a></li>    <ul>        <li>            <a href=/博丽灵梦（旧作角色） title=博丽灵梦（旧作角色）>博丽灵梦（旧作角色）  </a>            <a href=/神玉 title=神玉>神玉  </a>            <a href=/魅魔 title=魅魔>魅魔  </a>            <a href=/菊理 title=菊理>菊理  </a>            <a href=/矜羯罗 title=矜羯罗>矜羯罗  </a>            <a href=/幽幻魔眼 title=幽幻魔眼>幽幻魔眼  </a>            <a href=/依莉斯 title=依莉斯>依莉斯  </a>            <a href=/萨丽爱尔 title=萨丽爱尔>萨丽爱尔  </a>        </li>    </ul>    <li><a href=/东方封魔录 title=东方封魔录>东方封魔录  </a></li>    <ul>        <li>            <a href=/玄爷 title=玄爷>玄爷  </a>            <a href=/里香 title=里香>里香  </a>            <a href=/明罗 title=明罗>明罗  </a>            <a href=/雾雨魔理沙（旧作角色） title=雾雨魔理沙（旧作角色）>雾雨魔理沙（旧作角色）  </a>        </li>    </ul>    <li><a href=/东方梦时空 title=东方梦时空>东方梦时空  </a></li>    <ul>        <li>            <a href=/爱莲 title=爱莲>爱莲  </a>            <a href=/小兔姬 title=小兔姬>小兔姬  </a>            <a href=/卡娜·安娜贝拉尔 title=卡娜·安娜贝拉尔>卡娜·安娜贝拉尔  </a>            <a href=/朝仓理香子 title=朝仓理香子>朝仓理香子  </a>            <a href=/北白河千百合 title=北白河千百合>北白河千百合  </a>            <a href=/冈崎梦美 title=冈崎梦美>冈崎梦美  </a>            <a href=/咪咪号 title=咪咪号>咪咪号  </a>            <a href=/留琴 title=留琴>留琴  </a>        </li>    </ul>    <li><a href=/东方幻想乡 title=东方幻想乡>东方幻想乡  </a></li>    <ul>        <li>            <a href=/奥莲姬 title=奥莲姬>奥莲姬  </a>            <a href=/胡桃 title=胡桃>胡桃  </a>            <a href=/艾丽 title=艾丽>艾丽  </a>            <a href=/幽香 title=幽香>幽香  </a>            <a href=/梦月 title=梦月>梦月  </a>            <a href=/幻月 title=幻月>幻月  </a>        </li>    </ul>    <li><a href=/东方怪绮谈 title=东方怪绮谈>东方怪绮谈  </a></li>    <ul>        <li>            <a href=/萨拉 title=萨拉>萨拉  </a>            <a href=/露易兹 title=露易兹>露易兹  </a>            <a href=/爱丽丝（旧作角色） title=爱丽丝（旧作角色）>爱丽丝（旧作角色）  </a>            <a href=/雪 title=雪>雪  </a>            <a href=/舞 title=舞>舞  </a>            <a href=/梦子 title=梦子>梦子  </a>            <a href=/神绮 title=神绮>神绮  </a>        </li>    </ul>    <li><a href=/东方红魔乡 title=东方红魔乡>东方红魔乡  </a></li>    <ul>        <li>            <a href=/博丽灵梦 title=博丽灵梦>博丽灵梦  </a>            <a href=/雾雨魔理沙 title=雾雨魔理沙>雾雨魔理沙  </a>            <a href=/露米娅 title=露米娅>露米娅  </a>            <a href=/大妖精 title=大妖精>大妖精  </a>            <a href=/琪露诺 title=琪露诺>琪露诺  </a>            <a href=/红美铃 title=红美铃>红美铃  </a>            <a href=/小恶魔 title=小恶魔>小恶魔  </a>            <a href=/帕秋莉·诺蕾姬 title=帕秋莉·诺蕾姬>帕秋莉·诺蕾姬  </a>            <a href=/十六夜咲夜 title=十六夜咲夜>十六夜咲夜  </a>            <a href=/蕾米莉亚·斯卡蕾特 title=蕾米莉亚·斯卡蕾特>蕾米莉亚·斯卡蕾特  </a>            <a href=/芙兰朵露·斯卡蕾特 title=芙兰朵露·斯卡蕾特>芙兰朵露·斯卡蕾特  </a>            <a href=/冴月麟 title=冴月麟>冴月麟  </a>        </li>    </ul>    <li><a href=/东方妖妖梦 title=东方妖妖梦>东方妖妖梦  </a></li>    <ul>        <li>            <a href=/蕾蒂·霍瓦特洛克 title=蕾蒂·霍瓦特洛克>蕾蒂·霍瓦特洛克  </a>            <a href=/橙 title=橙>橙  </a>            <a href=/爱丽丝·玛格特洛依德 title=爱丽丝·玛格特洛依德>爱丽丝·玛格特洛依德  </a>            <a href=/莉莉霍瓦特 title=莉莉霍瓦特>莉莉霍瓦特  </a>            <a href=/露娜萨·普莉兹姆利巴 title=露娜萨·普莉兹姆利巴>露娜萨·普莉兹姆利巴  </a>            <a href=/梅露兰·普莉兹姆利巴 title=梅露兰·普莉兹姆利巴>梅露兰·普莉兹姆利巴  </a>            <a href=/莉莉卡·普莉兹姆利巴 title=莉莉卡·普莉兹姆利巴>莉莉卡·普莉兹姆利巴  </a>            <a href=/魂魄妖梦 title=魂魄妖梦>魂魄妖梦  </a>            <a href=/西行寺幽幽子 title=西行寺幽幽子>西行寺幽幽子  </a>            <a href=/八云蓝 title=八云蓝>八云蓝  </a>            <a href=/八云紫 title=八云紫>八云紫  </a>            <a href=/魂魄妖忌 title=魂魄妖忌>魂魄妖忌  </a>            <a href=/蕾拉·普莉兹姆利巴 title=蕾拉·普莉兹姆利巴>蕾拉·普莉兹姆利巴  </a>        </li>    </ul>    <li><a href=/东方萃梦想 title=东方萃梦想>东方萃梦想  </a></li>    <ul>        <li>            <a href=/伊吹萃香 title=伊吹萃香>伊吹萃香  </a>        </li>    </ul>    <li><a href=/东方永夜抄 title=东方永夜抄>东方永夜抄  </a></li>    <ul>        <li>            <a href=/莉格露·奈特巴格 title=莉格露·奈特巴格>莉格露·奈特巴格  </a>            <a href=/米斯蒂娅·萝蕾拉 title=米斯蒂娅·萝蕾拉>米斯蒂娅·萝蕾拉  </a>            <a href=/上白泽慧音 title=上白泽慧音>上白泽慧音  </a>            <a href=/因幡天为 title=因幡天为>因幡天为  </a>            <a href=/铃仙·优昙华院·因幡 title=铃仙·优昙华院·因幡>铃仙·优昙华院·因幡  </a>            <a href=/八意永琳 title=八意永琳>八意永琳  </a>            <a href=/蓬莱山辉夜 title=蓬莱山辉夜>蓬莱山辉夜  </a>            <a href=/藤原妹红 title=藤原妹红>藤原妹红  </a>        </li>    </ul>    <li><a href=/东方文花帖(书籍) title=东方文花帖(书籍)>东方文花帖(书籍)  </a></li>    <ul>        <li>            <a href=/射命丸文 title=射命丸文>射命丸文  </a>        </li>    </ul>    <li><a href=/东方花映塚 title=东方花映塚>东方花映塚  </a></li>    <ul>        <li>            <a href=/梅蒂欣·梅兰可莉 title=梅蒂欣·梅兰可莉>梅蒂欣·梅兰可莉  </a>            <a href=/风见幽香 title=风见幽香>风见幽香  </a>            <a href=/小野塚小町 title=小野塚小町>小野塚小町  </a>            <a href=/四季映姬·夜摩仙那度 title=四季映姬·夜摩仙那度>四季映姬·夜摩仙那度  </a>        </li>    </ul>    <li><a href=/东方风神录 title=东方风神录>东方风神录  </a></li>    <ul>        <li>            <a href=/秋静叶 title=秋静叶>秋静叶  </a>            <a href=/秋穰子 title=秋穰子>秋穰子  </a>            <a href=/键山雏 title=键山雏>键山雏  </a>            <a href=/河城荷取 title=河城荷取>河城荷取  </a>            <a href=/犬走椛 title=犬走椛>犬走椛  </a>            <a href=/东风谷早苗 title=东风谷早苗>东风谷早苗  </a>            <a href=/八坂神奈子 title=八坂神奈子>八坂神奈子  </a>            <a href=/洩矢诹访子 title=洩矢诹访子>洩矢诹访子  </a>        </li>    </ul>    <li><a href=/东方绯想天 title=东方绯想天>东方绯想天  </a></li>    <ul>        <li>            <a href=/永江衣玖 title=永江衣玖>永江衣玖  </a>            <a href=/比那名居天子 title=比那名居天子>比那名居天子  </a>            <a href=/大鲶鱼 title=大鲶鱼>大鲶鱼  </a>        </li>    </ul>    <li><a href=/东方地灵殿 title=东方地灵殿>东方地灵殿  </a></li>    <ul>        <li>            <a href=/琪斯美 title=琪斯美>琪斯美  </a>            <a href=/黑谷山女 title=黑谷山女>黑谷山女  </a>            <a href=/水桥帕露西 title=水桥帕露西>水桥帕露西  </a>            <a href=/星熊勇仪 title=星熊勇仪>星熊勇仪  </a>            <a href=/古明地觉 title=古明地觉>古明地觉  </a>            <a href=/火焰猫燐 title=火焰猫燐>火焰猫燐  </a>            <a href=/灵乌路空 title=灵乌路空>灵乌路空  </a>            <a href=/古明地恋 title=古明地恋>古明地恋  </a>        </li>    </ul>    <li><a href=/东方星莲船 title=东方星莲船>东方星莲船  </a></li>    <ul>        <li>            <a href=/娜兹玲 title=娜兹玲>娜兹玲  </a>            <a href=/多多良小伞 title=多多良小伞>多多良小伞  </a>            <a href=/云居一轮 title=云居一轮>云居一轮  </a>            <a href=/村纱水蜜 title=村纱水蜜>村纱水蜜  </a>            <a href=/寅丸星 title=寅丸星>寅丸星  </a>            <a href=/圣白莲 title=圣白莲>圣白莲  </a>            <a href=/封兽鵺 title=封兽鵺>封兽鵺  </a>            <a href=/命莲 title=命莲>命莲  </a>        </li>    </ul>    <li><a href=/东方文花帖DS title=东方文花帖DS>东方文花帖DS  </a></li>    <ul>        <li>            <a href=/姬海棠果 title=姬海棠果>姬海棠果  </a>        </li>    </ul>    <li><a href=/东方神灵庙 title=东方神灵庙>东方神灵庙  </a></li>    <ul>        <li>            <a href=/幽谷响子 title=幽谷响子>幽谷响子  </a>            <a href=/宫古芳香 title=宫古芳香>宫古芳香  </a>            <a href=/霍青娥 title=霍青娥>霍青娥  </a>            <a href=/苏我屠自古 title=苏我屠自古>苏我屠自古  </a>            <a href=/物部布都 title=物部布都>物部布都  </a>            <a href=/丰聪耳神子 title=丰聪耳神子>丰聪耳神子  </a>            <a href=/二岩猯藏 title=二岩猯藏>二岩猯藏  </a>        </li>    </ul>    <li><a href=/东方心绮楼 title=东方心绮楼>东方心绮楼  </a></li>    <ul>        <li>            <a href=/秦心 title=秦心>秦心  </a>            <a href=/秦河胜 title=秦河胜>秦河胜  </a>        </li>    </ul>    <li><a href=/东方辉针城 title=东方辉针城>东方辉针城  </a></li>    <ul>        <li>            <a href=/若鹭姬 title=若鹭姬>若鹭姬  </a>            <a href=/赤蛮奇 title=赤蛮奇>赤蛮奇  </a>            <a href=/今泉影狼 title=今泉影狼>今泉影狼  </a>            <a href=/九十九弁弁 title=九十九弁弁>九十九弁弁  </a>            <a href=/九十九八桥 title=九十九八桥>九十九八桥  </a>            <a href=/鬼人正邪 title=鬼人正邪>鬼人正邪  </a>            <a href=/少名针妙丸 title=少名针妙丸>少名针妙丸  </a>            <a href=/堀川雷鼓 title=堀川雷鼓>堀川雷鼓  </a>        </li>    </ul>    <li><a href=/东方深秘录 title=东方深秘录>东方深秘录  </a></li>    <ul>        <li>            <a href=/宇佐见堇子 title=宇佐见堇子>宇佐见堇子  </a>        </li>    </ul>    <li><a href=/东方绀珠传 title=东方绀珠传>东方绀珠传  </a></li>    <ul>        <li>            <a href=/清兰 title=清兰>清兰  </a>            <a href=/铃瑚 title=铃瑚>铃瑚  </a>            <a href=/哆来咪·苏伊特 title=哆来咪·苏伊特>哆来咪·苏伊特  </a>            <a href=/稀神探女 title=稀神探女>稀神探女  </a>            <a href=/克劳恩皮丝 title=克劳恩皮丝>克劳恩皮丝  </a>            <a href=/纯狐 title=纯狐>纯狐  </a>            <a href=/赫卡提亚·拉碧斯拉祖利 title=赫卡提亚·拉碧斯拉祖利>赫卡提亚·拉碧斯拉祖利  </a>            <a href=/后羿 title=后羿>后羿  </a>        </li>    </ul>    <li><a href=/东方凭依华 title=东方凭依华>东方凭依华  </a></li>    <ul>        <li>            <a href=/依神女苑 title=依神女苑>依神女苑  </a>            <a href=/依神紫苑 title=依神紫苑>依神紫苑  </a>        </li>    </ul>    <li><a href=/东方天空璋 title=东方天空璋>东方天空璋  </a></li>    <ul>        <li>            <a href=/爱塔妮缇拉尔瓦 title=爱塔妮缇拉尔瓦>爱塔妮缇拉尔瓦  </a>            <a href=/坂田合欢 title=坂田合欢>坂田合欢  </a>            <a href=/高丽野阿吽 title=高丽野阿吽>高丽野阿吽  </a>            <a href=/矢田寺成美 title=矢田寺成美>矢田寺成美  </a>            <a href=/尔子田里乃 title=尔子田里乃>尔子田里乃  </a>            <a href=/丁礼田舞 title=丁礼田舞>丁礼田舞  </a>            <a href=/摩多罗隐岐奈 title=摩多罗隐岐奈>摩多罗隐岐奈  </a>        </li>    </ul>    <li><a href=/东方鬼形兽 title=东方鬼形兽>东方鬼形兽  </a></li>    <ul>        <li>            <a href=/戎璎花 title=戎璎花>戎璎花  </a>            <a href=/牛崎润美 title=牛崎润美>牛崎润美  </a>            <a href=/庭渡久侘歌 title=庭渡久侘歌>庭渡久侘歌  </a>            <a href=/吉吊八千慧 title=吉吊八千慧>吉吊八千慧  </a>            <a href=/杖刀偶磨弓 title=杖刀偶磨弓>杖刀偶磨弓  </a>            <a href=/埴安神袿姬 title=埴安神袿姬>埴安神袿姬  </a>            <a href=/骊驹早鬼 title=骊驹早鬼>骊驹早鬼  </a>        </li>    </ul>    <li><a href=/东方刚欲异闻 title=东方刚欲异闻>东方刚欲异闻  </a></li>    <ul>        <li>            <a href=/饕餮尤魔 title=饕餮尤魔>饕餮尤魔  </a>        </li>    </ul>    <li><a href=/东方虹龙洞 title=东方虹龙洞>东方虹龙洞  </a></li>    <ul>        <li>            <a href=/豪德寺三花 title=豪德寺三花>豪德寺三花  </a>            <a href=/山城高岭 title=山城高岭>山城高岭  </a>            <a href=/驹草山如 title=驹草山如>驹草山如  </a>            <a href=/玉造魅须丸 title=玉造魅须丸>玉造魅须丸  </a>            <a href=/菅牧典 title=菅牧典>菅牧典  </a>            <a href=/饭纲丸龙 title=饭纲丸龙>饭纲丸龙  </a>            <a href=/天弓千亦 title=天弓千亦>天弓千亦  </a>            <a href=/姬虫百百世 title=姬虫百百世>姬虫百百世  </a>        </li>    </ul>    <li><a href=/东方香霖堂 title=东方香霖堂>东方香霖堂  </a></li>    <ul>        <li>            <a href=/森近霖之助 title=森近霖之助>森近霖之助  </a>            <a href=/无名的读书妖怪 title=无名的读书妖怪>无名的读书妖怪  </a>        </li>    </ul>    <li><a href=/东方三月精 ～ Eastern and Little Nature Deity. title=东方三月精 ～ Eastern and Little Nature Deity.>东方三月精 ～ Eastern and Little Nature Deity.  </a></li>    <ul>        <li>            <a href=/桑尼米尔克 title=桑尼米尔克>桑尼米尔克  </a>            <a href=/露娜切露德 title=露娜切露德>露娜切露德  </a>            <a href=/斯塔萨菲雅 title=斯塔萨菲雅>斯塔萨菲雅  </a>        </li>    </ul>    <li><a href=/东方儚月抄(小说) title=东方儚月抄(小说)>东方儚月抄(小说)  </a></li>    <ul>        <li>            <a href=/绵月丰姬 title=绵月丰姬>绵月丰姬  </a>            <a href=/绵月依姬 title=绵月依姬>绵月依姬  </a>            <a href=/Reisen title=Reisen>Reisen  </a>            <a href=/岩笠 title=岩笠>岩笠  </a>            <a href=/月夜见 title=月夜见>月夜见  </a>            <a href=/石长姬 title=石长姬>石长姬  </a>            <a href=/木花咲耶姬 title=木花咲耶姬>木花咲耶姬  </a>            <a href=/瑞江浦岛子 title=瑞江浦岛子>瑞江浦岛子  </a>        </li>    </ul>    <li><a href=/东方儚月抄(漫画) title=东方儚月抄(漫画)>东方儚月抄(漫画)  </a></li>    <ul>        <li>            <a href=/嫦娥 title=嫦娥>嫦娥  </a>        </li>    </ul>    <li><a href=/东方求闻史纪 title=东方求闻史纪>东方求闻史纪  </a></li>    <ul>        <li>            <a href=/稗田阿求 title=稗田阿求>稗田阿求  </a>            <a href=/龙神 title=龙神>龙神  </a>        </li>    </ul>    <li><a href=/东方茨歌仙 title=东方茨歌仙>东方茨歌仙  </a></li>    <ul>        <li>            <a href=/茨木华扇 title=茨木华扇>茨木华扇  </a>            <a href=/假扮魔理沙的妖狐 title=假扮魔理沙的妖狐>假扮魔理沙的妖狐  </a>            <a href=/运松翁 title=运松翁>运松翁  </a>            <a href=/万岁乐 title=万岁乐>万岁乐  </a>        </li>    </ul>    <li><a href=/东方铃奈庵 title=东方铃奈庵>东方铃奈庵  </a></li>    <ul>        <li>            <a href=/本居小铃 title=本居小铃>本居小铃  </a>            <a href=/烟烟罗 title=烟烟罗>烟烟罗  </a>            <a href=/卓柏卡布拉 title=卓柏卡布拉>卓柏卡布拉  </a>            <a href=/邪龙 title=邪龙>邪龙  </a>            <a href=/沓颊 title=沓颊>沓颊  </a>            <a href=/怨灵少女 title=怨灵少女>怨灵少女  </a>            <a href=/年幼的妖狐 title=年幼的妖狐>年幼的妖狐  </a>            <a href=/蟒蛇 title=蟒蛇>蟒蛇  </a>            <a href=/易者 title=易者>易者  </a>            <a href=/抗抑郁药大叔 title=抗抑郁药大叔>抗抑郁药大叔  </a>            <a href=/盐家老板 title=盐家老板>盐家老板  </a>        </li>    </ul>    <li><a href=/东方智灵奇传 title=东方智灵奇传>东方智灵奇传  </a></li>    <ul>        <li>            <a href=/宫出口瑞灵 title=宫出口瑞灵>宫出口瑞灵  </a>        </li>    </ul>    <li><a href=/东方醉蝶华 title=东方醉蝶华>东方醉蝶华  </a></li>    <ul>        <li>            <a href=/奥野田美宵 title=奥野田美宵>奥野田美宵  </a>            <a href=/鲵吞亭店主 title=鲵吞亭店主>鲵吞亭店主  </a>        </li>    </ul>    <li><a href=/莲台野夜行 title=莲台野夜行>莲台野夜行  </a></li>    <ul>        <li>            <a href=/宇佐见莲子 title=宇佐见莲子>宇佐见莲子  </a>            <a href=/梅莉 title=梅莉>梅莉  </a>        </li>    </ul>    <li><a href=/蓬莱人形 title=蓬莱人形>蓬莱人形  </a></li>    <ul>        <li>            <a href=/蓬莱人形#封面角色 title=蓬莱人形#封面角色>蓬莱人形#封面角色  </a>            <a href=/蓬莱人形#封面角色 title=蓬莱人形#封面角色>蓬莱人形#封面角色  </a>            <a href=/小丑 title=小丑>小丑  </a>            <a href=/正直者 title=正直者>正直者  </a>        </li>    </ul></ul></div>";
    
})();
