// ZH version of Twitter Bot

var stars = ['ChinaConnectEU', 'iResearchChina', 'chinapetro'];
// RING 0 - country of origin of the idea - RU - is tweeting almost hourly
// in function tweet_ring0; they do not have English Twitter for auto-retweets

// RING 0
var ring0 = [
    /* Israel */
    '以色列: http://www.israelgives.org/  #以色列 #慈善',

     /* VA */
     '教皇的慈善事业 [梵蒂冈]： https：//goo.gl/K3zVIF http://www.catholicparents.org/  #梵蒂冈 #慈善事业',
    // RU
     '俄罗斯慈善事业： http://www.evansnyc.com/charity/  #慈善 #俄罗斯'
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [
        // American
        '捐给美国红十字会 [美国]: https://www.redcross.org/donate/donation  #红十字  #美国',
        // British
        '捐给英国红十字会。: http://www.redcross.org.uk/Donate-Now  #红十字  #英国  #大不列颠',
        // MYBlood
        //'PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org  #Orlando',
        // Canadian
        '捐给加拿大  #红十字会: http://www.redcross.ca/donate  #红十字  #加拿大',
        // Swiss ICRC
        '捐给红十字国际委员会 [🇨🇭]: https://www.icrc.org/en/donate  #红十字  #红十字国际委员会',
        // IFRC
        '捐给红十字与红会: http://www.ifrc.org/  #IFRC  #红十字  #红新月',
        // Australian
        '捐给澳大利亚  #红十字会: http://www.redcross.org.au/donate.aspx  #红十字  #澳大利亚'
        // WER NY
//        'Donate to West Residences: https://donatenow.networkforgood.org/westendnyc
        ];

// tweet char limit - 120 - rest is for datetime stamp
// RING 2 - 
var ring2 = [
    '捐给中国  #红十字会: http://www.redcross.org.cn/  #中国  #红十字',
    '捐给新加坡  #红十字会: https://www.redcross.sg/  #红十字  #新加坡'
 // Hong Kong and Taiwan are provinces of China. Fairplay - only countries ;]   
//    'Red Cross of Hong Kong  #HongKong: http://redcross.org.hk  #红十字',

  ];

// RING 3 - other countries

var ring3 = [
    '巴西红十字会  #红十字会: http://cruzvermelha.org.br家庭中心: http://bit.ly/28VlSrc #巴西 #慈善',
    '墨西哥  #红十字会: http://cruzrojamexicana.org.mx/  #墨西哥红十字会',
    '菲律宾  #红十字会: http://redcross.org.ph/  #菲律宾 #红十字会',
    '尼日利亚  #红十字会: http://redcrossnigeria.org/  #尼日利亚 #红十字会',
    '刚果帮手: http://congohelpinghands.org/  #刚果 #慈善',
    '意大利  #红十字会: http://cri.it/  #意大利 #红十字会',
    '埃塞俄比亚  #红十字会: http://redcrosseth.org/  #埃塞俄比亚 #红十字会',
    '德国  #红十字会: http://www.drk.de/  #德国 #红十字会',
    '哥伦比亚  #红十字会: http://www.cruzrojacolombiana.org/  #哥伦比亚 #红十字会',
    '青年为基督[南非]: http://yfc.org.za/  #南非 #共和国非洲非洲 #慈善事业',
    '阿根廷  #红十字会: http://www.cruzroja.org.ar/  #阿根廷 #红十字会',
    '法国  #红十字会: http://www.croix-rouge.fr/  #法国 #红十字会',
    '波兰  #红十字会: http://www.pck.pl/index.php?lang=en #波兰 #红十字会',
    '肯尼亚  #红十字会: http://www.kenyaredcross.org/  #肯尼亚 #红十字会',
    '西班牙  #红十字会: http://www.cruzroja.es/  #西班牙 #红十字会',
    '坦桑尼亚  #红十字会: http://www.trcs.or.tz/  #坦桑尼亚 #红十字会',
    '乌干达  #红十字会: http://www.redcrossug.org/  #乌干达 #红十字会',
    '印度  #红十字会: http://indianredcross.org/  #印度 #红十字会',
    '委内瑞拉红十字会 #  #红十字会: http://www.cruzrojavenezolana.org/慈善团体委内瑞拉: http://bit.ly/29ydNLR',
    '秘鲁  #红十字会: http://www.cruzroja.org.pe/  #秘鲁 #红十字会',
    '印度尼西亚  #红十字会: http://www.pmi.or.id/  #印度尼西亚 #红十字会',
    '加纳  #红十字会: http://www.redcrossghana.org/  #加纳 #红十字会',
    '罗马尼亚  #红十字会: http://www.crucearosie.ro/  #罗马尼亚 #红十字会',
    '安哥拉  #红十字会: http://www.cruzvermelha.og.ao/  #安哥拉 #红十字会',
    '捐给乌克兰红十字会：https：//goo.gl/niAr27 #Ukraine #红十字',
    '韩国  #红十字会: https://www.redcross.or.kr/eng/eng_main/main.do #韩国 #红十字会',

    '厄瓜多尔人：http：//www.cruzroja.org.ec/  #厄瓜多尔 #红十字会',
    '危地马拉  #红十字会: http://www.cruzroja.gt/  #危地马拉 #红十字会',
    ' # #慈善 为  #喀麦隆: http://www.idealist.org/view/org/8WbKBhBbx874/',
    ' #慈善 #莫桑比克 #https://goo.gl/SqMbSU',
    ' #慈善赞比亚: https://goo.gl/L6mt1K',
    ' # #慈善 为  #Malawi: https://goo.gl/ouh5qK',
    '津巴布韦 #慈善机构：https：//goo.gl/bmDftq',
    '希腊  #红十字会: http://www.redcross.gr/  #希腊 #红十字会',
    ' #葡萄牙  #红十字会: http://www.cruzvermelha.pt/',
    ' # #红十字会智利: http://www.cruzroja.cl/',
    ' #多米尼加共和国的慈善事宜 #DominicanRepublic: https://goo.gl/vzjjpR',
    ' # #慈善 为  #Bolivia: http://www.ayuda.org/',
    '卢旺达红十字会：http：//www.rwandaredcross.org/',
    ' # #红十字海地: http://www.croixrouge.ht/',
    '红色代表 #埃及: http://egyptianrc.org/  #红新月',
    ' #慈善 为  #马达加斯加: http://helpmg.org/',
    ' #布隆迪  #红十字会: http://www.croixrougeburundi.org/',
    '塞尔维亚  #红十字会: http://www.redcross.org.rs/  #红十字会',
    '象牙海岸 的慈善机构  #慈善  #象牙海岸: http://www.icmrt.org/',
    ' #越南  #红十字会: http://redcross.org.vn/',
    ' #红十字会比利时: http://www.redcross.be/',
    ' #巴布新几内亚的慈善事业 #巴布新几内亚：https：//goo.gl/Gx0a0n',
    '古巴  #红十字会: http://www.sld.cu/sitios/cruzroja',
    '洪都拉斯红十字会 #http://www.cruzroja.org.hn/',
    ' #红十字会 #保加利亚: http://en.redcross.bg/',
    '瑞典 #红十字会 #http://www.redcross.se/',
    '巴拉圭  #红十字会: http://www.cruzroja.org.py/  #红十字会',
    ' #慈善 为   #奥地利: http://www.charity-charities.org/Austria-charities/Vienna.html',
    '南苏丹红十字会 #南苏丹  #南苏丹: http://southsudanredcross.org/',
    '荷兰  #红十字会: http://www.rodekruis.nl/  #荷兰 #红十字会',
    '瑞士  #红十字会: http://www.redcross.ch/  #瑞士 #红十字会',


    '拉脱维亚  #红十字会: http://www.redcross.lv/en/  #红十字会',
    '白俄罗斯  #红十字会: http://redcross.by/  #红十字会',
    '红十字会 #匈牙利: http://www.voroskereszt.hu/  #红十字会',
    '尼加拉瓜  #红十字会: http://cruzrojanicaraguense.org/  #红十字会',
    '萨尔瓦多  #红十字会: http://www.cruzrojasal.org.sv/  #萨尔瓦多  #红十字',
    '红十字会 #斯洛伐克: http://www.redcross.sk/  #红十字会',
    '红十字会  #丹麦: http://www.rodekors.dk/  #红十字会',
    ' #慈善 为  #Chad: http://www.chadnow.com/chad_links/chad_aid_links.php',
    '红新月会 #哈萨克斯坦 #红新月会: http://www.redcrescent.kz/',
    '红十字会 #芬兰: http://www.redcross.fi/  #红十字会',
    '克罗地亚  #红十字会: http://www.hck.hr/  #红十字会',
    //瑞士,
    //白俄罗斯,匈牙利,尼加拉瓜,萨尔瓦多,斯洛伐克,丹麦,乍得,哈萨克斯坦,芬兰,克罗地亚,
    //爱尔兰,贝宁,格鲁吉亚,哥斯达黎加,波多黎各,挪威,缅甸,布基纳法索,
    '爱尔兰  #红十字会: http://www.redcross.ie/  #红十字会',
    '贝宁  #红十字会: http://croixrougebenin.afredis.com/  #红十字会',
    '格鲁吉亚  #红十字会: http://redcross.ge/  #红十字会',
    '哥斯达黎加  #红十字会: http://www.cruzroja.or.cr/  #哥斯达黎加 #红十字会',
    '挪威  #红十字会: http://www.rodekors.no/  #红十字会',
    '缅甸  #红十字会: http://www.redcross.org.mm/  #红十字会',
    '布基纳法索红十字会 #布基纳法索: http://www.croixrougebf.org/  #红十字会',
    '摩尔多瓦  #红十字会: http://redcross.md/  #红十字会',
    //'刚果共和国',//已经...
    '巴拿马  #红十字会: http://www.cruzroja.org.pa/  #红十字会',
    '日本  #红十字会: http://www.jrc.or.jp/  #红十字会',
    '立陶宛  #红十字会: http://www.redcross.lt/  #红十字会',
    '亚美尼亚  #红十字会: http://redcross.am/  #红十字会',
    ' #马来西亚慈善机构: http://www.malaysiancare.org/',
    ' # #慈善为 #巴基斯坦: http://christiandevelopmentpakistan.org/',
    ' #中非共和国慈善 #中非共和国: https://goo.gl/HucaYG',
    '红十字会 #纳米比: http://www.redcross.org.na/  #红十字会',
    ' #慈善机构 对于  #多哥 https://goo.gl/hIIrNH', // Togo
    '乌拉圭  #红十字会: http://www.cruzrojauruguaya.org/  #红十字会',
    '莱索托  #红十字会: http://www.redcross.org.ls/  #红十字会',
    '新西兰红十字会新西兰: http://www.redcross.org.nz/  #红十字会',
    '红新月会 #叙利亚 #红新月会: http://www.sarc.sy/',    // Moldova, Congo, Republic of [already in ring2], Panama, Japan, Eritrea, Lithuania,
    // Armenia, Malaysia, Pakistan, Central African Republic, Namibia, Togo, Uruguay,
    // Lesotho, New Zealand, Syria, 

    '牙买加  #红十字会: http://jamaicaredcross.org/  #红十字会',
    '波斯尼亚和黑塞哥维那红十字会波斯尼亚和黑塞哥维那：http：///www.rcsbh.org/  #红十字会',
    '斯洛文尼亚  #红十字会: http://www.rks.si/  #红十字会',
    '#慈善为 #黎巴嫩: http://www.lccm.us/',
    '拉脱维亚  #红十字会: http://www.redcross.lv/en/  #红十字会',
    '斯里兰卡  #红十字会: http://www.redcross.lk/  #斯里兰卡 #红十字会',
    '#慈善为 #博茨瓦纳: http://bocaip.org.bw/',
    '#慈善为 #利比里亚: http://berkleycenter.georgetown.edu/organizations/liberian-council-of-churches',
    '马其顿  #红十字会: http://www.ckrm.org.mk/  #红十字会',
    //牙买加,波斯尼亚和黑塞哥维那,斯洛文尼亚,黎巴嫩,
    //拉脱维亚,斯里兰卡,沙特阿拉伯,博茨瓦纳,利比里亚,马其顿共和国,
    /*捷克共和国,*/
    '捷克  #红十字会: http://www.cervenykriz.eu/  #捷克共和国红十字会',
    '东帝汶红十字会东帝汶: http://www.redcross.tl/  #红十字会',
    '加蓬  #红十字会: http://croixrouge-gabon.org/  #红十字会',
    ' #几内亚的慈善事业：https：//goo.gl/4CQyx8',
    '斯威士兰  #红十字会: http://redcross.org.sz/  #红十字会',
    '红新月会 #伊拉克 #红新月会: http://www.ircs.org.iq/',
    '阿拉伯联合酋长国红新月会 #UnitedArabEmirates #Red Crescent: http://www.rcuae.ae/',
    '塞浦路斯  #红十字会: http://www.redcross.org.cy/en/home #红十字会',
    '泰国  #红十字会: https://english.redcross.or.th/  #红十字会',
    ' #特立尼达和多巴哥的慈善事业 #TrinidadAndTobago：https：//goo.gl/l57Ue1',
    '红新月会 #乌兹别克斯坦 #红新月会: http://redcrescent.uz/',
    //' 赤道几内亚',
    ' #慈善机构 对于  #塞拉利昂 https://goo.gl/jwwLiY',
    '红新月会 #吉尔吉斯斯坦 #红新月会: http://www.redcrescent.kg/',
    ' #阿尔巴尼亚的慈善事业: http://www.kksh.org.al/',
    '塞内加尔  #红十字会: http://www.croixrougesenegal.com/  #红十字会',
    '斐济  #红十字会: http://www.redcross.com.fj/  #红十字会',
    ' #慈善机构 对于  #苏丹 https://goo.gl/9fykQb',
    ' # #慈善 为  #Montenegro: http://www.ckcg.co.me/',
    ' #佛得角慈善 #CapeVerde: https://goo.gl/5DbtM6',
    ' #慈善机构 对于  #土库曼斯坦 https://goo.gl/Zhsvsc',
    '红新月会 #科威特 #红新月会: http://krcs.org.kw',



        // East Timor, Gabon, Guinea, Swaziland, Iraq, United Arab Emirates, Singapore, Cyprus,
    // Hong Kong, Thailand, Trinidad and Tobago, Uzbekistan, Equatorial Guinea, Sierra Leone,
    // Kyrgyzstan, Albania, Senegal, Fiji, Sudan, Montenegro, Cape Verde, Turkmenistan, Kuwait,
    /* Guyana*/ 
    '圭亚那  #红十字会: http://guyanaredcross.org.gy/  #圭亚那 #红十字会',
    '红新月会 #孟加拉国 #红新月会: http://www.bdrcs.org/',
    ' #慈善机构 对于  #毛里求斯 https://goo.gl/NUpkTd',
    ' #北朝鲜慈善事业 #北韩: http://www.helpinghandskorea.org/',
    '马耳他  #红十字会: http://www.redcross.org.mt/  #红十字会',
    '红新月会 #Jordan #红新月会: http://www.jnrcs.org/',
    ' #阿尔及利亚的慈善事业: http://www.cra-algerie.org/',
    '红新月会 #伊朗 #红新月会: http://www.rcs.ir/',
    '卢森堡  #红十字会: http://www.croix-rouge.lu/en/  #红十字会',
    '马里  #红十字会: http://www.croixrouge-mali.org/  #红十字会',
    '红新月会 #摩洛哥红新月会: http://www.croissant-rouge.ma/',
    '爱沙尼亚  #红十字会: http://www.redcross.ee/  #红十字会',
    '阿联酋红新月会红新月会: http://www.redcrescent.az/',
    '冰岛  #红十字会: http://www.redcross.is/  #红十字会',
    '巴哈马  #红十字会: http://www.bahamasredcross.com/  #红十字会',
    '红新月会 #尼泊尔红新月会：http：//www.nrcs.org/',
    '红新月会 #卡塔尔 #红新月会: http://www.qrcs.org.qa/',
    ' #苏里南慈善机构: https://goo.gl/BPsz9U',
    ' #慈善为 #伯利兹: https://goo.gl/ILXLDt',
    ' # #慈善 为  #Barbados: http://www.barbadosyp.com/Barbados/Charitable-Organisations',
    '红新月会 #巴林 #红新月会: http://www.rcsbahrain.org/',
    ' # #慈善 为  #阿曼：https：//goo.gl/P9hqeW',
    ' # #慈善 为  #Libya: https://www.libyahumanaid.org/',
    ' #几内亚比绍慈善事业 #几内亚比绍：https：//goo.gl/JrWyk6',
    '红十字会 #柬埔寨: http://www.redcross.org.kh/index.php?lang=en #红十字会',
    '老挝  #红十字会: http://www.laoredcross.org.la/en/  #红十字会',
    '红新月会 #土耳其 #红新月会: http://www.kizilay.org.tr/',
    '塔吉克斯坦红新月会红新月会: http://www.redcrescent.tj/',
    ' # #密克罗尼西亚慈善事业: http://www.habele.org/',
    '格林纳达  #红十字会: http://www.grenadaredcross.org/  #红十字会',
    '阿鲁巴  #红十字会: http://redcrossaruba.com/  #红十字会',
    ' #尼日利亚慈善机构: https://goo.gl/QNi7hC',
    '汤加  #红十字会: http://www.tongaredcross.com/  #红十字会',
    '塞舌尔红十字会：www.seychellesredcross.sc/  #红十字会',
    '安道尔  #红十字会: http://www.creuroja.ad/  #红十字会',

    '美属萨摩亚红十字会  #AmericanSamoa： https://redcross.wordpress.com/tag/american-samoa/  #红十字',
    ' #安提瓜和巴布达 #慈善 #安提瓜和巴布达：https：//goo.gl/eeNFnN',
    ' # #慈善 为  #Dominica: https://goo.gl/yJBRvc',
    '蒙古  #红十字会: http://www.redcross.mn/  #红十字会',
    ' # #慈善 为  #Greenland: https://goo.gl/J5pnNU',
    '红新月会 #吉布提 #红新月会: http://www.redcrescent-dj.org/',
    ' # #慈善为 #文莱: https://goo.gl/P7ccRU',
    '百慕大红十字会：www.bermudaredcross.com/  #红十字会',
    '开曼群岛红十字会开曼岛：www.redcross.org.ky/  #红十字会',
    //'这应该是法罗群岛的慈善事业,
    '列支敦士登  #红十字会: http://www.roteskreuz.li/  #红十字会',
    '摩纳哥  #红十字会: http://www.croix-rouge.mc/  #红十字会',
    '突尼斯突尼斯的红新月会: http://www.crt.tn/',
    ' # #慈善 为  #Yemen: http://www.zakat.org/country/yemen/',
    //' #慈善 为  #BritishIslands: https://goo.gl/0pRJVN', - 英国的一部分
    ' #库克群岛的慈善 #CookIslands: http://cookfoundation.org/',
    ' # #慈善 为  #Palau: https://goo.gl/Id7lKD',
    //' #慈善 为  #Anguilla: https://charitylook.org/city/anguilla/',这里是美国密西西比州
    ' #科摩罗的慈善事业: http://www.comoroscharity.org/',
    ' # # #慈善 #不丹: https://goo.gl/DRHEHH',
    '红新月会 #阿富汗 #红新月会: http://www.redcrescent.af/',
    ' # #慈善 为  #Mauritania: https://goo.gl/XK81gO',
    ' #福克兰群岛的慈善事业 #FalklandIsalands: http://www.falklandsconservation.com/',
    ' # #慈善 为  #Somalia: https://goo.gl/1Bn35T',
    //梵蒂冈第二戒
    '红新月会 #马尔代夫 #红新月会: https://redcrescent.org.mv/'

    //Bangladesh, Mauritius, North Korea, Malta, Jordan, Algeria, Iran,
    // Luxembourg, Mali, Morocco, Estonia, Azerbaijan, Iceland,
    // Bahamas, Nepal, Israel [leads RING 3], Qatar, Suriname, Belize, Barbados, Bahrain, Oman, Libya,
    // Guinea-Bissau, Cambodia, Laos, Turkey, Tajikistan, Micronesia, Federated States of,
    // Grenada, Aruba, Niger, Tonga, Seychelles, Gambia, Andorra, American Samoa, Antigua and Barbuda,
    // Dominica, Mongolia, Greenland, Djibouti, Brunei, Bermuda, Cayman Islands, Faroe Islands,
    // San Marino, Liechtenstein, Monaco, Tunisia, Yemen,
    // British Virgin Islands, Cook Islands, Palau, Anguilla, Comoros, Bhutan, Afghanistan, Mauritania,
    // Falkland Islands, Somalia,
    //  Vatican City [second element in RING 3], Maldives, Western Sahara, Pitcairn Islands,

  ];

var star_index = 0;
var ring0_index = 0;
var ring1_index = 0;
var ring2_index = 0;
var ring3_index = 0;


var bibles =
[
' #圣经  #台湾  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Taiwan&language=Chinese',
' #圣经  #台湾  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Taiwan&language=Chinese',
' #圣经  #新加坡  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Singapore&language=Chinese',
' #圣经  #新加坡  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Singapore&language=Chinese',
' #圣经  #澳门特区  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Macau%20SAR&language=Chinese',
' #圣经  #澳门特区  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Macau%20SAR&language=Chinese',
' #圣经  #香港特区  #中文: gold-bible.16mb.com/?b_code=cmn-cu89s&country=Hong%20Kong%20SAR&language=zh',
' #圣经  #香港特区  #中文: gold-bible.16mb.com/?b_code=cmn-cu89t&country=Hong%20Kong%20SAR&language=zh',
' #圣经  #香港  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Hong%20Kong&language=Chinese',
' #圣经  #香港  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Hong%20Kong&language=Chinese',
' #圣经  #中国  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=China&language=Chinese',
' #圣经  #中国  #中文: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=China&language=Chinese'
];

var quotes = [
    '又有声音从天上来,说：「你是我的爱子,我喜悦你。」 马可福音 1:11',
    '「　神爱世人,甚至将他的独生子赐给他们,叫一切信他的,不致灭亡,反得永生。 约翰福音 3:16',
    '耶和华说：我知道我向你们所怀的意念是赐平安的意念,不是降灾祸的意念,要叫你们末后有指望。 耶利米书 29:11',
    '我们晓得万事都互相效力,叫爱　神的人得益处,就是按他旨意被召的人。 罗马书 8:28',
    '我靠着那加给我力量的,凡事都能做。 腓立比书 4:13',
    '你要专心仰赖耶和华, 不可倚靠自己的聪明, 箴言 3:5',
    '起初,　神创造天地。 创世记 1:1',
    '在你一切所行的事上都要认定他, 他必指引你的路。 箴言 3:6',
    '不要效法这个世界,只要心意更新而变化,叫你们察验何为　神的善良、纯全、可喜悦的旨意。 罗马书 12:2',
    '应当一无挂虑,只要凡事借着祷告、祈求,和感谢,将你们所要的告诉　神。 腓立比书 4:6',
    '所以,你们要去,使万民作我的门徒,奉父、子、圣灵的名给他们施洗。 马太福音 28:19',
    '你们得救是本乎恩,也因着信；这并不是出于自己,乃是　神所赐的； 以弗所书 2:8'
];

var quote_index = 0;

var bible_index = 0;

var twit = require('twit');

var gbo_zh = new twit({
  consumer_key:         '',
  consumer_secret:  '',
  access_token:         '',
  access_token_secret:  ''
});


function quote_bible()
{

                var date = new Date();

                if (ring0_index == ring0.length) ring0_index = 0;

                gbo_zh.post(
                                                'statuses/update',
                                                { 
                                                  status: 
                                                  quotes[quote_index] +  " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );


                quote_index++;   
}

function tweet_ring0()
{
                var date = new Date();

                if (ring0_index == ring0.length) ring0_index = 0;

                gbo_zh.post(
                                                'statuses/update',
                                                { 
                                                  status: 
                                                  ring0[ring0_index] +  " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );


                ring0_index++;   
}


function tweet_ring1()
{
                var date = new Date();

                if (ring1_index == ring1.length) ring1_index = 0;

                gbo_zh.post(
                                                'statuses/update',
                                                { 
                                                  status: 
                                                  ring1[ring1_index] +  " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

                ring1_index++;   
}

function tweet_ring2()
{
                var date = new Date();

                if (ring2_index == ring2.length) ring2_index = 0;

                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring2[ring2_index] +  " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

                ring2_index++;

}

function tweet_ring3()
{
                var date = new Date();

                if (ring3_index == ring3.length) ring3_index = 0;

                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring3[ring3_index] +  " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

                ring3_index++;

}


function tweet_bible()
{
                var date = new Date();

                if (bible_index == bibles.length) bible_index = 0;

                gbo_zh.post(
                                                'statuses/update',
                                                { 
                                                  status: 
                                                  bibles[bible_index] +  " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

                bible_index++;   
}

function tweet_star()
{
    if (star_index == stars.length) star_index = 0;
                
                var date = new Date();
                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  "@Jin_Shengjing 圣经网站与慈善链接正在寻找一个所有者 Gold-Bible.16mb.com @" + stars[star_index]+ "\n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }
                                                );
    
                star_index++;

}

// <tweet-video-link>
function tweet_video_link()
{
        var tweet_text = '加入慈善支援社区PoRT youtu.be/-o5Y3GAN6Es  #圣经  #红十字 charity-port.16mb.com [ #英语]';
        var date = new Date();

                                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  tweet_text + " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);

                            }
                        }
                        );

}
// </tweet-video-link>


// <tweet-donation-link>
function tweet_donation_link()
{
        var tweet_text = "---";
        var date = new Date();

        gbo_zh.post(
                        'statuses/update',
                        {
                          status:
                          tweet_text + " \n"
                          + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                          + " " + date.getHours() + ":" + date.getMinutes()
                        },
                        function (err, response)
                        {
                          if (response)
                          {
                                  console.log('Tweeted');
                          }
                          if (err)
                          {
                                  console.log('Retweet Error: ', err);

                            }
                        }
          );
}
// </tweet-donation-link>




function tweet_digitalocean()
{
  var tweet_text = " #VPS 与  #SSD 在 @DigitalOcean。 注册使用我的链接,并获得$10信用: https://m.do.co/t/59b1f2d44f9f";
  var date = new Date();

       gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  tweet_text + " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                }, 
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );
}


function tweet_hostinger()
{
  var tweet_text = "网络托管在付费帐户上拥有无限的光盘空间和带宽  #无限磁盘空间  #无限带宽  #虚拟主机: http://bit.ly/2mdj0dC";
  var date = new Date();
  
        gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  tweet_text + " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                }, 
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );
}

function tweet_donate_blood()
{
  var donation_tweet = "for blood donations... ";
  var date = new Date();
  
                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  donation_tweet + " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

}

function tweet_parallel_bibles()
{
  var tweet_text = "想学新语言？  #学习语言 阅读平行圣经! gold-bible.16mb.com/?menu=parallelBibles youtu.be/7c9fwykj6EQ goo.gl/B3JXnq [英文视频]";
  var date = new Date(); var twitters = [daily_biz_news, gbo_zh, 'programming'];
  
                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  tweet_text + " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

}

function tweet_promo()
{
  var date = new Date();
  var tweet = "圣经报价,谚语,智慧。  #圣经  #箴言 遵循 @Jin_Shengjing gold-bible.16mb.com";
                gbo_zh.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  tweet + " \n"
                                                  + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
                                                  + " " + date.getHours() + ":" + date.getMinutes()
                                                },
                                                function (err, response)
                                                {
                                                  if (response)
                                                  {
                                                          console.log('Tweeted');
                                                  }
                                                  if (err)
                                                  {
                                                          console.log('Retweet Error: ', err);
                                                  }

                                                }

                                        );

}

//tweet_donate_blood();

// tweeting here in principle "Last will be first"... As Jesus said that will be=]

//tweet_star();
//tweet_promo();
//tweet_video_link();
//tweet_donation_link();
//tweet_ban_ar15();
//tweet_justice();

//tweet_ring3();
tweet_ring2();
//tweet_ring0();
//tweet_ring1();

//tweet_bible();

if (process.argv.length == 2) // && process.argv[2] == 'stop')
{
        try
        {   // Timers setting...

            // 60 * 60 * 1000 - hourly

            // 5 * 60 * 60 * 1000 - every five hours

        //setInterval(tweet_donate_blood, 55 * 60 * 1000);
        setInterval(tweet_star, 60 * 60 * 1000 * 5 - 10000 );

        setInterval(tweet_ring0, 0.95 * 3 * 59 * 60 * 1000);
        setInterval(tweet_ring1, 0.93 * 3 * 58 * 60 * 1000);
        setInterval(tweet_ring2, 0.92 * 3 * 57 * 60 * 1000);
        setInterval(tweet_ring3, 0.91 * 3 * 56 * 60 * 1000);

        setInterval(tweet_promo, 5 * 60 * 60 * 1000);
        setInterval(quote_bible, 3 * 60 * 60 * 1000);

        //setInterval(tweet_donation_link, 5 * 60 * 60 * 1000);
        setInterval(tweet_parallel_bibles, 5 * 59 * 60 * 1000);

        setInterval(tweet_digitalocean, 10 * 59 * 60 * 1000);
        setInterval(tweet_hostinger, 10 * 58 * 60 * 1000);
        
        setInterval(tweet_video_link, 12 * 58 * 60 * 1000);

        setInterval(tweet_bible, 5 * 58 * 60 * 1000);

        } catch (e)
        {
                console.error(e);
        }
}


/*
    The End of Script

    Twitter Bot for the Bible Project
    ZH Version

    http://gold-bible.16mb.com/

    @Jin_Shengjing

    @GoldenBible_org
    @ihaveabiblesite
    @dailybiz_news_


    This is automated script for tweeting links of
    Charity organizations, Bibles and some other good stuff.

    It includes charity for around one hundred seventy five countries.

    You're very welcome... 

	[if it is unregular restart comment lines of tweeting on start, 
	it will start tweeting on timers, otherwise accounts can be banned 
	for 'too many tweets per hour']
	before `shutdown -r now` check the script by `node index.js`
	and renew script in services by `source register.sh`

    And it is normal to see "error window" after disconnect, 
    because it is disconnect had come...
*/


