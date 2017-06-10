// RU version of Twitter Bot

var stars = ['Gazprom', 'finam_blog', 'Lukoil', 'sberbank', 'RuRailways', 'Rostec_Russia', ''];
// RING 0 - country of origin of the idea - RU - is tweeting almost hourly
// in function tweet_ring0; they do not have English Twitter for auto-retweets

// RING 0
var ring0 = [
    /* Israel */
    'Израиль дает: http://www.israelgives.org/ #Израиль #Благотворительность ',
     /* Ватикан */
     'Благотворительность Папы Римского [Ватикан]: https://goo.gl/K3zVIF http://www.catholicparents.org/ #Ватикан #Благотворительность ',
     'Благотворительность для России: http://www.evansnyc.com/charity/ #Благотворительность #Россия '
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [// Американский
         'Пожертвуйте Американскому Красному Кресту [#США]: https://www.redcross.org/donate/donation #КрасныйКрест #СоединенныеШтаты ',
         // Британский
         'Пожертвуйте Британскому Красному Кресту: http://www.redcross.org.uk/Donate-Now #КрасныйКрест #Англия #Великобритания ',
         // Моя кровь
         // 'ПОЖАЛУЙСТА, ОБРАТИТЕСЬ: Пожалуйста, назначьте встречу, чтобы пожертвовать на этой неделе. 1.888.936.6283. Www.oneblood.org #Орландо,
         // Канадский
         'Пожертвуйте Канадскому Красному Кресту: http://www.redcross.ca/donate #КрасныйКрест #Канада ',
         // Швейцарская МККК
         'Пожертвуйте МККК: https://www.icrc.org/en/donate #КрасныйКрест #МККК #МеждународныйКомитетКрасногоКреста',
         // IFRC
         'Пожертвуйте IFRC: http://www.ifrc.org/ #Благотворительность #IFRC #КрасныйПолумесяц #КрасныйКрест ',
         // Австралийский
         'Пожертвуйте Австралийскому Красному Кресту: http://www.redcross.org.au/donate.aspx #КрасныйКрест #Австралия '
        ];

// tweet char limit - 120 - rest is for datetime stamp
// RING 2 - 
var ring2 = [
    'Российская Благотворительность: http://www.evansnyc.com/charity/ #Благотворительность #Россия',
    'Красный Крест #Украина: https://goo.gl/niAr27 #Украина #КрасныйКрест',
    'Красный Крест #Беларусь: http://redcross.by/ #КрасныйКрест'
  ];

// RING 3 - other countries

var ring3 = [
    'Бразильский Красный Крест #КрасныйКрест: http://cruzvermelha.org.br Семейный центр: http://bit.ly/28VlSrc #Бразилия #Благотворительность',
    'Мексиканский Красный Крест: http://cruzrojamexicana.org.mx/ #Мексика #КрасныйКрест',
    'Красный Крест Филиппин: http://redcross.org.ph/ #Филиппины #КрасныйКрест',
    'Нигерийское общество Красного Креста: http://redcrossnigeria.org/ #Нигерия #КрасныйКрест',
    'Конго, помогая руками: http://congohelpinghands.org/ #Конго #Благотворительность',
    'Итальянский Красный Крест: http://cri.it/ #Италия #КрасныйКрест',
    'Эфиопское общество Красного Креста: http://redcrosseth.org/ #Эфиопия #КрасныйКрест',
    'Немецкий Красный Крест: http://www.drk.de/ #Германия #КрасныйКрест',
    'Колумбийский Красный Крест: http://www.cruzrojacolombiana.org/ #Колумбия #КрасныйКрест',
    'Молодежь для Христа [Южная Африка]: http://yfc.org.za/ #ЮжнаяАфрика #Благотворительность ',
    'Аргентинский Красный Крест: http://www.cruzroja.org.ar/ #Аргентина #КрасныйКрест',
    'Французский Красный Крест: http://www.croix-rouge.fr/ #Франция #КрасныйКрест',
    'Польский Красный Крест: http://www.pck.pl/index.php?lang=en #Польша #КрасныйКрест',
    'Общество Красного Креста Кении: http://www.kenyaredcross.org/ #Кения #КрасныйКрест',
    'Испанский Красный Крест: http://www.cruzroja.es/ #Испания #КрасныйКрест',
    'Общество Красного Креста Танзании: http://www.trcs.or.tz/ #Танзания #КрасныйКрест',
    'Красный Крест Китая: http://www.redcross.org.cn/ #Китай #КрасныйКрест',
    'Красный Крест Уганды: http://www.redcrossug.org/ #Уганда #КрасныйКрест',
    'Индийский Красный Крест: http://indianredcross.org/ #Индия #КрасныйКрест',
    'Венесуэльский Красный Крест #КрасныйКрест: http://www.cruzrojavenezolana.org/ Благотворительность в Венесуэле: http://bit.ly/29ydNLR',
    'Красный Крест в Перу: http://www.cruzroja.org.pe/ #Перу #КрасныйКрест',
    'Индонезийское общество Красного Креста: http://www.pmi.or.id/ #Индонезия #КрасныйКрест',
    'Красный Крест Ганы: http://www.redcrossghana.org/ #Гана #КрасныйКрест',
    'Румынский Красный Крест: http://www.crucearosie.ro/ #Румыния #КрасныйКрест',
    'Ангольский Красный Крест: http://www.cruzvermelha.og.ao/ #Ангола #КрасныйКрест',
    'Корейский Красный Крест: https://www.redcross.or.kr/rus/eng_main/main.do #Корея #КрасныйКрест',

    'Эквадор: http://www.cruzroja.org.ec/ #Эквадор #КрасныйКрест',
    'Гватемальский Красный Крест: http://www.cruzroja.gt/ #Гватемала #КрасныйКрест',
    '#Благотворительность для #Камеруна: http://www.idealist.org/view/org/8WbKBhBbx874/',
    '#Благотворительность для #Мозамбика #https://goo.gl/SqMbSU',
    '#Благотворительность для #Замбии: https://goo.gl/L6mt1K',
    '#Благотворительность для #Малави: https://goo.gl/ouh5qK',
    '#Благотворительность для #Зимбабве: https://goo.gl/bmDftq',
    'Греческий Красный Крест: http://www.redcross.gr/ #Греция #КрасныйКрест',
    '#КрасныйКрест #Португалия: http://www.cruzvermelha.pt/',
    '#КрасныйКрест #Чили: http://www.cruzroja.cl/',
    '#Благотворительность для Доминиканской Республики #ДоминиканскаяРеспублика: https://goo.gl/vzjjpR',
    '#Благотворительность для #Боливии: http://www.ayuda.org/',
    '#КрасныйКрест #Руанды: http://www.rwandaredcross.org/',
    '#КрасныйКрест #Гаити: http://www.croixrouge.ht/',
    'Red Cresent of #Египет: http://egyptianrc.org/ #КрасныйПолумесяц',
    '#Благотворительность для #Мадагаскара: http://helpmg.org/',
    '#КрасныйКрест #Бурунди: http://www.croixrougeburundi.org/',
    'Красный Крест #Сербии: http://www.redcross.org.rs/ #КрасныйКрест',
    '#Благотворительность для Кот-д\'Ивуара #КотдИвуар: http://www.icmrt.org/',
    '#КрасныйКрест #Вьетнама: http://redcross.org.vn/',
    '#КрасныйКрест #Бельгии: http://www.redcross.be/',
    '#Благотворительность для Папуа-Новой Гвинеи #ПапуаНоваяГвинея: https://goo.gl/Gx0a0n',
    '#КрасныйКрест #Куба: http://www.sld.cu/sitios/cruzroja',
    '#КрасныйКрест #Гондурас: http://www.cruzroja.org.hn/',
    '#КрасныйКрест #Болгария: http://en.redcross.bg/',
    '#КрасныйКрест #Швеция: http://www.redcross.se/',
    'Красный Крест #Парагвай: http://www.cruzroja.org.py/ #КрасныйКрест',
    '#Благотворительность для #Австрия: http://www.charity-charities.org/Austria-charities/Vienna.html',
    '#КрасныйКрест Южного Судана #ЮжныйСудан: http://southsudanredcross.org/',

    // Korea, Ecuador, Guatemala, Cameroon, Mozambique, Zambia, Malawi, Zimbabwe, Greece, 
    //  Portugal, Chile, Dominican Republic, Bolivia, Rwanda, Haiti, Egypt, Madagascar, Burundi,
    // ...
    // Sweden, Paraguay, Austria, South Sudan, Netherlands
    'Красный Крест в Нидерландах: http://www.rodekruis.nl/ #Нидерланды #КрасныйКрест',
    'Швейцарский Красный Крест: http://www.redcross.ch/ #Швейцария #КрасныйКрест',
    'Красный Крест #Латвия: http://www.redcross.lv/ru/ #КрасныйКрест',
    'Красный Крест #Венгрия: http://www.voroskereszt.hu/ #КрасныйКрест',
    'Красный Крест #Никарагуа: http://cruzrojanicaraguense.org/ #КрасныйКрест',
    'Красный Крест Сальвадора: http://www.cruzrojasal.org.sv/ #Сальвадор #КрасныйКрест ',
    'Красный Крест #Словакия: http://www.redcross.sk/ #КрасныйКрест',
    'Красный Крест #Дания: http://www.rodekors.dk/ #КрасныйКрест',
    '#Благотворительность #Чад: http://www.chadnow.com/chad_links/chad_aid_links.php',
    'Красный Полумесяц #Казахстан #КрасныйПолумесяц: http://www.redcrescent.kz/',
    'Красный Крест #Финляндия: http://www.redcross.fi/ #КрасныйКрест',
    'Красный Крест #Хорватия: http://www.hck.hr/ #КрасныйКрест',
    // Швейцария,
    // Беларусь, Венгрия, Никарагуа, Сальвадор, Словакия, Дания, Чад, Казахстан, Финляндия, Хорватия,
    // Ирландия, Бенин, Грузия, Коста-Рика, Пуэрто-Рико, Норвегия, Мьянма, Буркина-Фасо,
    'Красный Крест #Ирландия: http://www.redcross.ie/ #КрасныйКрест',
    'Красный Крест #Бенин: http://croixrougebenin.afredis.com/ #КрасныйКрест',
    'Красный Крест #Грузия: http://redcross.ge/ #КрасныйКрест',
    'Красный Крест Коста-Рики: http://www.cruzroja.or.cr/ #Костарика #КрасныйКрест',
    'Красный Крест #Норвегия: http://www.rodekors.no/ #КрасныйКрест',
    'Красный Крест #Мьянма: http://www.redcross.org.mm/ #КрасныйКрест',
    'Красный Крест Буркина-Фасо #БуркинаФасо: http://www.croixrougebf.org/ #КрасныйКрест',
    'Красный Крест #Молдова: http://redcross.md/ #КрасныйКрест',
    // 'Республика Конго', // уже ...
    'Красный Крест #Панама: http://www.cruzroja.org.pa/ #КрасныйКрест',
    'Красный Крест #Япония: http://www.jrc.or.jp/ #КрасныйКрест',
    'Красный Крест #Литва: http://www.redcross.lt/ #КрасныйКрест',
    'Красный Крест #Армения: http://redcross.am/ #КрасныйКрест',
    '#Благотворительность #Малайзия: http://www.malaysiancare.org/',
    '#Благотворительность #Пакистан: http://christiandevelopmentpakistan.org/',
    '#Благотворительность Центральноафриканской Республики #ЦентральноАфриканскаяРеспублика: https://goo.gl/HucaYG',
    'Красный крест #Намибия: http://www.redcross.org.na/ #КрасныйКрест',
    'Красный Крест #Того: http://www.croixrouge-togo.org/ #КрасныйКрест',
    'Красный Крест #Уругвай: http://www.cruzrojauruguaya.org/ #КрасныйКрест',
    'Красный Крест #Лесото: http://www.redcross.org.ls/ #КрасныйКрест',
    'Красный Крест Новой Зеландии #НоваяЗеландия: http://www.redcross.org.nz/ #КрасныйКрест',
    'Красный Полумесяц #Сирия #КрасныйПолумесяц: http://www.sarc.sy/',

    // Moldova, Congo, Republic of [already in ring2], Panama, Japan, Eritrea, Lithuania,
    // Armenia, Malaysia, Pakistan, Central African Republic, Namibia, Togo, Uruguay,
    // Lesotho, New Zealand, Syria, 
    
    'Красный Крест #Ямайки: http://jamaicaredcross.org/ #КрасныйКрест',
    'Красный Крест Боснии и Герцеговины #БоснияиГерцеговина: http: ///www.rcsbh.org/ #КрасныйКрест',
    'Красный Крест #Словения: http://www.rks.si/ #КрасныйКрест',
    '#Благотворительность #Ливан: http://www.lccm.us/',
    'Красный Крест #Латвия: http://www.redcross.lv/ru/ #КрасныйКрест',
    'Красный Крест Шри-Ланки: http://www.redcross.lk/ #ШриЛанка #КрасныйКрест',
    '#Благотворительность #Ботсвана: http://bocaip.org.bw/',
    '#Благотворительность #Либерия: http://berkleycenter.georgetown.edu/organizations/liberian-council-of-churches',
    'Красный Крест #Македония: http://www.ckrm.org.mk/ #КрасныйКрест',
    // Ямайка, Босния и Герцеговина, Словения, Ливан,
    // Латвия, Шри-Ланка, Саудовская Аравия, Ботсвана, Либерия, Македония, Республика,
    /*Чешская Республика,*/
    'Чешский Красный Крест: http://www.cervenykriz.eu/ #ЧешскаяРеспублика #Чехия #КрасныйКрест',
    'Красный Крест Восточного Тимора #ВосточныйТимор: http://www.redcross.tl/ #КрасныйКрест',
    'Красный Крест #Габон: http://croixrouge-gabon.org/ #КрасныйКрест',
    '#Благотворительность для #Гвинея: https://goo.gl/4CQyx8',
    'Красный Крест #Свазиленд: http://redcross.org.sz/ #КрасныйКрест',
    'Красный Полумесяц #Ирак #КрасныйПолумесяц: http://www.ircs.org.iq/',
    'Красный Полумесяц Объединенных Арабских Эмиратов #ОбъединенныеАрабскиеЭмираты #КрасныйПолумесяц: http://www.rcuae.ae/',
    'Красный Крест #Сингапур: https://www.redcross.sg/ #КрасныйКрест',
    'Красный Крест #Кипр: http://www.redcross.org.cy/en/home #КрасныйКрест',
    'Красный Крест Гонконга #Гонконг: http://redcross.org.hk #КрасныйКрест',
    'Красный Крест #Таиланд: https://english.redcross.or.th/ #КрасныйКрест',
    '#Благотворительность для Тринидада и Тобаго #ТринидадИТобаго: https://goo.gl/l57Ue1',
    'Красный Полумесяц #Узбекистан #КрасныйПолумесяц: http://redcrescent.uz/',
    //' Экваториальная Гвинея',
    'Красный Крест Сьерра-Леоне: http://www.sierraleoneredcross.net/ #СьерраЛеоне #КрасныйКрест ',
    'Красный Полумесяц #Кыргызстана #КрасныйПолумесяц: http://www.redcrescent.kg/',
    '#Благотворительность для #Албания: http://www.kksh.org.al/',
    'Красный Крест #Сенегала: http://www.croixrougesenegal.com/ #КрасныйКрест',
    'Красный Крест #Фиджи: http://www.redcross.com.fj/ #КрасныйКрест',
    'Красный Полумесяц #Судан #КрасныйПолумесяц: http://srcs.sd/',
    '#Благотворительность #Черногория: http://www.ckcg.co.me/',
    '#Благотворительность для Кабо-Верде #КабоВерде: https://goo.gl/5DbtM6',
    'Красный Полумесяц #Туркменистан #КрасныйПолумесяц: https://goo.gl/Zhsvsc',
    'Красный Полумесяц #Кувейт #КрасныйПолумесяц: http://krcs.org.kw/',


    // East Timor, Gabon, Guinea, Swaziland, Iraq, United Arab Emirates, Singapore, Cyprus,
    // Hong Kong, Thailand, Trinidad and Tobago, Uzbekistan, Equatorial Guinea, Sierra Leone,
    // Kyrgyzstan, Albania, Senegal, Fiji, Sudan, Montenegro, Cape Verde, Turkmenistan, Kuwait,
    /* Guyana*/ 

'Красный Крест в Гайане: http://guyanaredcross.org.gy/ #Гайана #КрасныйКрест',
    'Красный Полумесяц #Бангладеш #КрасныйПолумесяц: http://www.bdrcs.org/',
    'Красный Крест #Маврикия: http://www.mauritiusredcross.org/ #КрасныйКрест',
    '#Благотворительность для Северной Кореи #СевернаяКорея: http://www.helpinghandskorea.org/',
    'Красный Крест #Мальта: http://www.redcross.org.mt/ #КрасныйКрест',
    'Красный Полумесяц #Иордания #КрасныйПолумесяц: http://www.jnrcs.org/',
    '#Благотворительность для #Алжир: http://www.cra-algerie.org/',
    'Красный Полумесяц #Иран #КрасныйПолумесяц: http://www.rcs.ir/',
    'Красный Крест #Люксембурга: http://www.croix-rouge.lu/en/ #КрасныйКрест',
    'Красный Крест #Мали: http://www.croixrouge-mali.org/ #КрасныйКрест',
    'Красный Полумесяц #Марокко #КрасныйПолумесяц: http://www.croissant-rouge.ma/',
    'Красный Крест #Эстония: http://www.redcross.ee/ #КрасныйКрест',
    'Красный Полумесяц #Азербайджан #КрасныйПолумесяц: http://www.redcrescent.az/',
    'Красный Крест #Исландия: http://www.redcross.is/ #КрасныйКрест',
    'Красный Крест #Багамы #БагамскиеОстрова: http://www.bahamasredcross.com/ #КрасныйКрест',
    'Красный Полумесяц #Непал #КрасныйПолумесяц: http://www.nrcs.org/',
    'Красный Полумесяц #Катар #КрасныйПолумесяц: http://www.qrcs.org.qa/',
    '#Благотворительность #Суринам: https://goo.gl/BPsz9U',
    '#Благотворительность #Белиз: https://goo.gl/ILXLDt',
    '#Благотворительность #Барбадос: http://www.barbadosyp.com/Barbados/Charitable-Organisations',
    'Красный Полумесяц #Бахрейн #КрасныйПолумесяц: http://www.rcsbahrain.org/',
    '#Благотворительность #Оман: https://goo.gl/P9hqeW',
    '#Благотворительность #Ливия: https://www.libyahumanaid.org/',
    '#Благотворительность Гвинеи-Бисау #ГвинеяБисау: https://goo.gl/JrWyk6',
    'Красный Крест #Камбоджа: http://www.redcross.org.kh/index.php?lang=ru Красный Крест',
    'Красный Крест #Лаос: http://www.laoredcross.org.la/ru/ #КрасныйКрест',
    'Красный Полумесяц #Турция #КрасныйПолумесяц: http://www.kizilay.org.tr/',
    'Красный Полумесяц #Таджикистан #КрасныйПолумесяц: http://www.redcrescent.tj/',
    '#Благотворительность #Микронезия: http://www.habele.org/',
    'Красный Крест #Гренада: http://www.grenadaredcross.org/ #КрасныйКрест',
    'Красный Крест #Аруба: http://redcrossaruba.com/ #КрасныйКрест',
    '#Благотворительность #Нигер: https://goo.gl/QNi7hC',
    'Красный Крест #Тонга: http://www.tongaredcross.com/ #КрасныйКрест',
    'Красный Крест #СейшельскиеОострова #Сейшелы: www.seychellesredcross.sc/ #КрасныйКрест',
    'Красный Крест #Андорра: http://www.creuroja.ad/ #КрасныйКрест',
    'Красный Крест Американского Самоа #АмериканскийСаамоа: https://redcross.wordpress.com/tag/american-samoa/ #КрасныйКрест',
    '#Благотворительность для Антигуа и Барбуды #АнтигуаИБарбуда: https://goo.gl/eeNFnN',
    '#Благотворительность для #Доминика: https://goo.gl/yJBRvc',
    'Красный Крест #Монголия: http://www.redcross.mn/ #КрасныйКрест',
    '#Благотворительность #Гренландия: https://goo.gl/J5pnNU',
    'Красный Полумесяц #Джибути #КрасныйПолумесяц: http://www.redcrescent-dj.org/',
    '#Благотворительность #Бруней: https://goo.gl/P7ccRU',
    'Красный Крест #Бермуды #БермудскиеОстрова: www.bermudaredcross.com/ #КрасныйКрест',
    'Красный Крест Каймановых островов #КаймановыОстрова: www.redcross.org.ky/ #КрасныйКрест',


    // 'Here should be charity for Faroe Islands',
    'Красный Крест #Лихтенштейн: http://www.roteskreuz.li/ #КрасныйКрест',
    'Красный Крест #Монако: http://www.croix-rouge.mc/ #КрасныйКрест',
    'Красный Полумесяц #Тунис: http://www.crt.tn/ #КрасныйПолумесяц',
    '#Благотворительность #Йемен: http://www.zakat.org/country/yemen/',
    // '#Благотворительность для #BritishIslands: https://goo.gl/0pRJVN', - часть U.K.
    '#Благотворительность #ОстроваКука: http://cookfoundation.org/',
    '#Благотворительность #Палау: https://goo.gl/Id7lKD',
    // '#Благотворительность для #Ангилья: https://charitylook.org/city/anguilla/', здесь из Миссисипи из США.
    '#Благотворительность #КоморскихОстрова: http://www.comoroscharity.org/',
    '#Благотворительность для #Бутан: https://goo.gl/DRHEHH',
    'Красный Полумесяц #Афганистан #КрасныйПолумесяц: http://www.redcrescent.af/',
    '#Благотворительность #Мавритания: https://goo.gl/XK81gO',
    '#Благотворительность #ФолклендскиеОстрова #: http://www.falklandsconservation.com/',
    '#Благотворительность #Сомали: https://goo.gl/1Bn35T',
    // Ватикан второй в третьем кольце ...
    'Красный Полумесяц #МальдивскиеОстрова #Мальдивы #КрасныйПолумесяц: https://redcrescent.org.mv/'
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

// pt Bibles, cause it is Portuguese Account
var bibles =
[
'#Библия #Россия [#Русский]: http://gold-bible.16mb.com/?language=ru&country=ru',
'#Библия #Украина [#Украинский]: http://gold-bible.16mb.com/?language=uk&country=ua',
'#Библия #Узбекистан  [#Русский]: http://gold-bible.16mb.com/?b_code=russyn&country=Uzbekistan&language=Russian',
'#Библия #Казахстан  [#Русский]: http://gold-bible.16mb.com/?b_code=russyn&country=Kazakhstan&language=Russian',
'#Библия #Грузия  [#Русский]: http://gold-bible.16mb.com/?b_code=russyn&country=Georgia&language=Russian',
'#Библия #Эстония  [#Русский]: http://gold-bible.16mb.com/?b_code=russyn&country=Estonia&language=Russian',
'#Библия #Беларусь  [#Русский]: http://gold-bible.16mb.com/?b_code=russyn&country=Belarus&language=Russian',
'#Библия #Армения  [#Русский]: http://gold-bible.16mb.com/?b_code=russyn&country=Armenia&language=Russian',

];

var bible_index = 0;

var twit = require('twit');

var gbo_pt = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});


function tweet_ring0()
{
                var date = new Date();

                if (ring0_index == ring0.length) ring0_index = 0;

                gbo_pt.post(
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

                gbo_pt.post(
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

                gbo_pt.post(
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

                gbo_pt.post(
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

                gbo_pt.post(
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
                gbo_pt.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  "#Библия со ссылками на #Благотворительность ищет владельца Gold-Bible.16mb.com @" + stars[star_index]+ " @zolotayabibliya\n"
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
        var tweet_text = 'Присоединяйтесь к поддержке #Благотворительности youtu.be/-o5Y3GAN6Es #Библия #КрасныйКрест charity-port.16mb.com [Англ]';
        var date = new Date();

                                gbo_pt.post(
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

        gbo_pt.post(
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


function tweet_donate_blood()
{
  var donation_tweet = "for blood donations... ";
  var date = new Date();
  
                gbo_pt.post(
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
  var tweet_text = "Изучайте язык, читая Библию https://youtu.be/7c9fwykj6EQ https://goo.gl/B3JXnq [Англ]";
  var date = new Date(); var twitters = [daily_biz_news, gbo_pt, 'programming'];
  
                gbo_pt.post(
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
  var tweet = "Цитаты из Библии. #Библия #Псалмы @zolotayabibliya gold-bible.16mb.com/?interface_language=ru";
                gbo_pt.post(
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
//tweet_ring2();
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
        //setInterval(tweet_donation_link, 5 * 60 * 60 * 1000);
        setInterval(tweet_parallel_bibles, 5 * 59 * 60 * 1000);

//        setInterval(tweet_digitalocean, 10 * 59 * 60 * 1000);
//        setInterval(tweet_hostinger, 10 * 58 * 60 * 1000);
        
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
    RU Version

    http://gold-bible.16mb.com/

    @zolotayabibliya


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


