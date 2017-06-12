// "stars" array of Twitter Accounts for Bible Site Presentation
var stars = [
            '@BillGates', '@WarrenBuffett', '@JeffBezos', '@MarkZuckerbergF', '@carlosslim', '@larryellison', '@CKinstitute', '@kochie_online', 
            '@MikeBloomberg', '@JustinbArnault', '@SBrinhpttt', '@Mrs_Bettencourt', '@wangijangly', '@steven_ballmer', '@lemannoficial', '@georgesoros', '@SchaefflerGeorg', '@josephsafra', '@MichaelDell', '@laurenepowell', '@PaulGAllen', '@LeonidMikhelson', '@LenBlav',
            '@finkd', 
              '@NikeUnleash', '@Carl_C_Icahn',
              '@fauxRayDalio', '@elonmusk', '@RepCohen', 
              '@ericschmidt', '@moskov', '@meijer', '@MickyArison', 
              '@jamesagoodnight', '@Stanley_Kroenke', '@UnreasonableEli', '@CharlesSchwab', 
              '@RalphLauren', '@Gordonmoore', '@travisk', '@DavidAllenGreen', '@JohnASobrato', 
              '@BobKraft', '@IraRennert', '@PaulTudorJones1', '@ResnickLynda', '@johndoerr', 
              '@ReinholdSchmied', '@jeffskoll', '@brianacton', '@JeremyJacobs', '@JimJannard', '@WSJ',
            '@McConaughey', '@CalvinHarris', '@Pink', '@BenAffleck', '@MatthewPerry', '@LisaKudrow', '@anistonjennifer', '@RealHughJackman', '@EdwardNorton', '@IanMcKellen', '@SamuelLJackson', '@BiIIMurray', '@modernwest', '@iWillSmith', '@TomCruise', '@JimCarrey', '@TheEllenShow', '@LeoDiCaprio', '@RobertDowneyJr', '@gracehelbig', '@ijustine', '@mariashriver', '@taylorswift13', '@businessinsider', '@business', '@Inc', '@mametown', '@harto'];

// RING 0 - country of origin of the idea - RU - is tweeting almost hourly
// in function tweet_ring0; they do not have English Twitter for auto-retweets

// RING 0
var ring0 = [
    /* Israel */
  'Israel Gives: http://www.israelgives.org/ #Israel #Charity',
    /* Vatican City  */ 
    'Pope\'s charity [Vatican]: https://goo.gl/K3zVIF http://www.catholicparents.org/ #Vatican #Charity',
    'Charity for Russia: http://www.evansnyc.com/charity/ #Charity #Russia'
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [
        // American
        'Donate to American Red Cross [#USA]: https://www.redcross.org/donate/donation #RedCross #UnitedStates',
        // British
        'Donate to British Red Cross: http://www.redcross.org.uk/Donate-Now #RedCross #UnitedKingdom #GreatBritain',
        // MYBlood
        //'PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org #Orlando',
        // Canadian
        'Donate to Canadian Red Cross: http://www.redcross.ca/donate #RedCross #Canada',
        // Swiss ICRC
        'Donate to ICRC: https://www.icrc.org/en/donate #RedCross #ICRC',
        // IFRC
        'Donate to IFRC: http://www.ifrc.org/ #Charity #IFRC #RedCrescent #RedCross',
        // Australian
        'Donate to Australian Red Cross: http://www.redcross.org.au/donate.aspx #RedCross #Australia',
        // WER NY
//        'Donate to West Residences: https://donatenow.networkforgood.org/westendnyc
        ];

// tweet char limit - 120 - rest is for datetime stamp
// RING 2 - countries with many Christians
var ring2 = [
    


    'Brazilian Red Cross #RedCross: http://cruzvermelha.org.br Family Center: http://bit.ly/28VlSrc #Brazil #Charity',
    'Mexican Red Cross: http://cruzrojamexicana.org.mx/ #Mexico #RedCross',
    'Red Cross of Philippines: http://redcross.org.ph/ #Philippines #RedCross',
    'Nigerian Red Cross Society: http://redcrossnigeria.org/ #Nigeria #RedCross',
    'Congo Helping Hands: http://congohelpinghands.org/ #Congo #Charity',
    'Italian Red Cross: http://cri.it/ #Italy #RedCross',
    'Ethiopian Red Cross Society: http://redcrosseth.org/ #Ethiopia #RedCross',
    'German Red Cross: http://www.drk.de/ #Germany #RedCross',
    'Colombian Red Cross: http://www.cruzrojacolombiana.org/ #Colombia #RedCross',
    'Youth For Christ [South Africa]: http://yfc.org.za/ #SouthAfrica #RepublicOfSouthAfrica #Charity',
    'Argentine Red Cross: http://www.cruzroja.org.ar/ #Argentina #RedCross',
    'French Red Cross: http://www.croix-rouge.fr/ #France #RedCross',
    'Polish Red Cross: http://www.pck.pl/index.php?lang=en #Poland #RedCross',
    'Kenya Red Cross Society: http://www.kenyaredcross.org/ #Kenya #RedCross',
    'Spanish Red Cross: http://www.cruzroja.es/ #Spain #RedCross',
    'Tanzania Red Cross Society: http://www.trcs.or.tz/ #Tanzania #RedCross',
    'Red Cross of China: http://www.redcross.org.cn/ #China #RedCross',
    'Red Cross of Uganda: http://www.redcrossug.org/ #Uganda #RedCross',
    'Indian Red Cross: http://indianredcross.org/ #India #RedCross',
    'Venezuelan Red Cross #RedCross: http://www.cruzrojavenezolana.org/ Charity in #Venezuela: http://bit.ly/29ydNLR',
    'Red Cross in Peru: http://www.cruzroja.org.pe/ #Peru #RedCross',
    'Indonesian Red Cross Society: http://www.pmi.or.id/ #Indonesia #RedCross',
    'Red Cross of Ghana: http://www.redcrossghana.org/ #Ghana #RedCross',
    'Romanian Red Cross: http://www.crucearosie.ro/ #Romania #RedCross',
    'Angola Red Cross: http://www.cruzvermelha.og.ao/ #Angola #RedCross',
    'Donate to Ukrainian Red Cross: https://goo.gl/niAr27 #Ukraine #RedCross',
    'Korean Red Cross: https://www.redcross.or.kr/eng/eng_main/main.do #Korea #RedCross'
  ];

// RING 3 - other countries

var ring3 = [
    'Ecuadorian: http://www.cruzroja.org.ec/ #Ecuador #RedCross',
    'Guatemalan Red Cross: http://www.cruzroja.gt/ #Guatemala #RedCross',
    '#Charity for #Cameroon: http://www.idealist.org/view/org/8WbKBhBbx874/',
    '#Charity for  #Mozambique #https://goo.gl/SqMbSU',
    '#Charity for #Zambia: https://goo.gl/L6mt1K',
    '#Charity for #Malawi: https://goo.gl/ouh5qK',
    '#Charity for #Zimbabwe: https://goo.gl/bmDftq',
    'Hellenic Red Cross: http://www.redcross.gr/ #Greece #RedCross',
    '#RedCross of #Portugal: http://www.cruzvermelha.pt/',
    '#RedCross of #Chile: http://www.cruzroja.cl/',
    '#Charity for Dominican Republic #DominicanRepublic: https://goo.gl/vzjjpR',
    '#Charity for #Bolivia: http://www.ayuda.org/',
    '#RedCross of #Rwanda: http://www.rwandaredcross.org/',
    '#RedCross of #Haiti: http://www.croixrouge.ht/',
    'Red Cresent of #Egypt: http://egyptianrc.org/ #RedCrescent',
    '#Charity for #Madagascar: http://helpmg.org/',
    '#RedCross of #Burundi: http://www.croixrougeburundi.org/',
    'Red Cross of #Serbia: http://www.redcross.org.rs/ #RedCross',
    '#Charity for Cote d\'Ivoire #CoteDIvoire: http://www.icmrt.org/',
    '#RedCross of #Vietnam: http://redcross.org.vn/',
    '#RedCross of #Belgium: http://www.redcross.be/',
    '#Charity for Papua New Guinea #PapuaNewGuinea: https://goo.gl/Gx0a0n',
    '#RedCross of #Cuba: http://www.sld.cu/sitios/cruzroja',
    '#RedCross of #Honduras: http://www.cruzroja.org.hn/',
    '#RedCross of #Bulgaria: http://en.redcross.bg/',
    '#RedCross of #Sweden: http://www.redcross.se/',
    'Red Cross in #Paraguay: http://www.cruzroja.org.py/ #RedCross',
    '#Charity for #Austria: http://www.charity-charities.org/Austria-charities/Vienna.html',
    '#RedCross of South Sudan #SouthSudan: http://southsudanredcross.org/',
    'Red Cross in Netherlands: http://www.rodekruis.nl/ #Netherlands #Holland #RedCross',
    'Swiss Red Cross: http://www.redcross.ch/ #Switzerland #RedCross',
    'Red Cross of #Latvia: http://www.redcross.lv/en/ #RedCross',
    'Red Cross of #Belarus: http://redcross.by/ #RedCross',
    'Red Cross of #Hungary: http://www.voroskereszt.hu/ #RedCross',
    'Red Cross of #Nicaragua: http://cruzrojanicaraguense.org/ #RedCross',
    'Red Cross of El Salvador: http://www.cruzrojasal.org.sv/ #ElSalvador #RedCross',
    'Red Cross of #Slovakia: http://www.redcross.sk/ #RedCross',
    'Red Cross in #Denmark: http://www.rodekors.dk/ #RedCross',
    '#Charity for #Chad: http://www.chadnow.com/chad_links/chad_aid_links.php',
    'Red Crescent of #Kazakhstan #RedCrescent: http://www.redcrescent.kz/',
    'Red Cross of #Finland: http://www.redcross.fi/ #RedCross',
    'Red Cross of #Croatia: http://www.hck.hr/ #RedCross',
    //  Switzerland,
    // Belarus, Hungary, Nicaragua, El Salvador, Slovakia, Denmark, Chad, Kazakhstan, Finland, Croatia, 
    //Ireland, Benin, Georgia, Costa Rica, Puerto Rico, Norway, Myanmar, Burkina Faso,
    'Red Cross of #Ireland: http://www.redcross.ie/ #RedCross',
    'Red Cross of #Benin: http://croixrougebenin.afredis.com/ #RedCross',
    'Red Cross of #Georgia: http://redcross.ge/ #RedCross',
    'Red Cross of Costa Rica: http://www.cruzroja.or.cr/ #CostaRica #RedCross',
    'Red Cross of #Norway: http://www.rodekors.no/ #RedCross',
    'Red Cross of #Myanmar: http://www.redcross.org.mm/ #RedCross',
    'Red Cross of Burkina Faso #BurkinaFaso: http://www.croixrougebf.org/ #RedCross',
    'Red Cross of #Moldova: http://redcross.md/ #RedCross',
    //'Republic of Congo', // already...
    'Red Cross of #Panama: http://www.cruzroja.org.pa/ #RedCross',
    'Red Cross of #Japan: http://www.jrc.or.jp/ #RedCross',
    'Red Cross of #Lithuania: http://www.redcross.lt/ #RedCross',
    'Red Cross of #Armenia: http://redcross.am/ #RedCross',
    '#Charity for #Malaysia: http://www.malaysiancare.org/',
    '#Charity for #Pakistan: http://christiandevelopmentpakistan.org/',
    '#Charity for Central African Republic #CentralAfricanRepublic: https://goo.gl/HucaYG',
    'Red Cross of #Namibi: http://www.redcross.org.na/ #RedCross',
    '#Charity for #Togo: https://goo.gl/hIIrNH',
    'Red Cross of #Uruguay: http://www.cruzrojauruguaya.org/ #RedCross',
    'Red Cross of #Lesotho: http://www.redcross.org.ls/ #RedCross',
    'Red Cross of New Zealand #NewZealand: http://www.redcross.org.nz/ #RedCross',
    'Red Crescent of #Syria #RedCrescent: http://www.sarc.sy/',
    // Moldova, Congo, Republic of [already in ring2], Panama, Japan, Eritrea, Lithuania,
    // Armenia, Malaysia, Pakistan, Central African Republic, Namibia, Togo, Uruguay,
    // Lesotho, New Zealand, Syria, 
    
    'Red Cross of #Jamaica: http://jamaicaredcross.org/ #RedCross',
    'Red Cross of Bosnia and Herzegovina #BosniaAndHerzegovina: http:///www.rcsbh.org/ #RedCross',
    'Red Cross of #Slovenia: http://www.rks.si/ #RedCross',
    '#Charity for #Lebanon: http://www.lccm.us/',
    'Red Cross of #Latvia: http://www.redcross.lv/en/ #RedCross',
    'Red Cross of Sri Lanka: http://www.redcross.lk/ #SriLanka #RedCross',
    '#Charity for #Botswana: http://bocaip.org.bw/',
    '#Charity for #Liberia: http://berkleycenter.georgetown.edu/organizations/liberian-council-of-churches',
    'Red Cross of #Macedonia: http://www.ckrm.org.mk/ #RedCross',
    //Jamaica, Bosnia and Herzegovina, Slovenia, Lebanon,
    // Latvia, Sri Lanka, Saudi Arabia, Botswana, Liberia, Macedonia, Republic of, 
    /*Czech Republic,*/ 
    'Czech Red Cross: http://www.cervenykriz.eu/ #CzechRepublic #RedCross',
    'Red Cross of East Timor #EastTimor: http://www.redcross.tl/ #RedCross',
    'Red Cross of #Gabon: http://croixrouge-gabon.org/ #RedCross',
    '#Charity for #Guinea: https://goo.gl/4CQyx8',
    'Red Cross of #Swaziland: http://redcross.org.sz/ #RedCross',
    'Red Crescent of #Iraq #RedCrescent: http://www.ircs.org.iq/',
    'Red Crescent of  United Arab Emirates #UnitedArabEmirates #RedCrescent: http://www.rcuae.ae/',
    'Red Cross of #Singapore: https://www.redcross.sg/ #RedCross',
    'Red Cross of #Cyprus: http://www.redcross.org.cy/en/home #RedCross',
    'Red Cross of Hong Kong #HongKong: http://redcross.org.hk #RedCross',
    'Red Cross of #Thailand: https://english.redcross.or.th/ #RedCross',
    '#Charity for Trinidad and Tobago #TrinidadAndTobago: https://goo.gl/l57Ue1',
    'Red Crescent of #Uzbekistan #RedCrescent: http://redcrescent.uz/',
    //' Equatorial Guinea',
    '#Charity for #SierraLeone https://goo.gl/jwwLiY',
    'Red Crescent of #Kyrgyzstan #RedCrescent: http://www.redcrescent.kg/',
    '#Charity for #Albania: http://www.kksh.org.al/',
    'Red Cross of #Senegal: http://www.croixrougesenegal.com/ #RedCross',
    'Red Cross of #Fiji: http://www.redcross.com.fj/ #RedCross',
    '#Charity for #Sudan https://goo.gl/9fykQb',
    '#Charity for #Montenegro: http://www.ckcg.co.me/',
    '#Charity for Cape Verde #CapeVerde: https://goo.gl/5DbtM6',
    '#Charity for #Turkmenistan https://goo.gl/Zhsvsc',
    'Red Crescent of #Kuwait #RedCrescent: http://krcs.org.kw/',
    // East Timor, Gabon, Guinea, Swaziland, Iraq, United Arab Emirates, Singapore, Cyprus,
    // Hong Kong, Thailand, Trinidad and Tobago, Uzbekistan, Equatorial Guinea, Sierra Leone,
    // Kyrgyzstan, Albania, Senegal, Fiji, Sudan, Montenegro, Cape Verde, Turkmenistan, Kuwait,
    /* Guyana*/ 'Red Cross in Guyana: http://guyanaredcross.org.gy/ #Guyana #RedCross',
    'Red Crescent of #Bangladesh #RedCrescent: http://www.bdrcs.org/',
    '#Charity for #Mauritius https://goo.gl/NUpkTd',
    '#Charity for North Korea #NorthKorea: http://www.helpinghandskorea.org/',
    'Red Cross of #Malta: http://www.redcross.org.mt/ #RedCross',
    'Red Crescent of #Jordan #RedCrescent: http://www.jnrcs.org/',
    '#Charity for #Algeria: http://www.cra-algerie.org/',
    'Red Crescent of #Iran #RedCrescent: http://www.rcs.ir/',
    'Red Cross of #Luxembourg: http://www.croix-rouge.lu/en/ #RedCross',
    'Red Cross of #Mali: http://www.croixrouge-mali.org/ #RedCross',
    'Red Crescent of #Morocco #RedCrescent: http://www.croissant-rouge.ma/',
    'Red Cross of #Estonia: http://www.redcross.ee/ #RedCross',
    'Red Crescent of #Azerbaijan #RedCrescent: http://www.redcrescent.az/',
    'Red Cross of #Iceland: http://www.redcross.is/ #RedCross',
    'Red Cross of #Bahamas: http://www.bahamasredcross.com/ #RedCross',
    'Red Crescent of #Nepal #RedCrescent: http://www.nrcs.org/',
    'Red Crescent of #Qatar #RedCrescent: http://www.qrcs.org.qa/',
    '#Charity for #Suriname: https://goo.gl/BPsz9U',
    '#Charity for #Belize: https://goo.gl/ILXLDt',
    '#Charity for #Barbados: http://www.barbadosyp.com/Barbados/Charitable-Organisations',
    'Red Crescent of #Bahrain #RedCrescent: http://www.rcsbahrain.org/',
    '#Charity for #Oman: https://goo.gl/P9hqeW',
    '#Charity for #Libya: https://www.libyahumanaid.org/',
    '#Charity for Guinea-Bissau #GuineaBissau: https://goo.gl/JrWyk6',
    'Red Cross of #Cambodia: http://www.redcross.org.kh/index.php?lang=en #RedCross',
    'Red Cross of #Laos: http://www.laoredcross.org.la/en/ #RedCross',
    'Red Crescent of #Turkey #RedCrescent: http://www.kizilay.org.tr/',
    'Red Crescent of #Tajikistan #RedCrescent: http://www.redcrescent.tj/',
    '#Charity for #Micronesia: http://www.habele.org/',
    'Red Cross of #Grenada: http://www.grenadaredcross.org/ #RedCross',
    'Red Cross of #Aruba: http://redcrossaruba.com/ #RedCross',
    '#Charity for #Niger: https://goo.gl/QNi7hC',
    'Red Cross of #Tonga: http://www.tongaredcross.com/ #RedCross',
    'Red Cross of #Seychelles: www.seychellesredcross.sc/ #RedCross',
    'Red Cross of #Andorra: http://www.creuroja.ad/ #Red Cross',
    'Red Cross of American Samoa #AmericanSamoa: https://redcross.wordpress.com/tag/american-samoa/ #RedCross',
    '#Charity for Antigua and Barbuda #AntiguaAndBarbuda: https://goo.gl/eeNFnN',
    '#Charity for #Dominica: https://goo.gl/yJBRvc',
    'Red Cross of #Mongolia: http://www.redcross.mn/ #RedCross',
    '#Charity for #Greenland: https://goo.gl/J5pnNU',
    'Red Crescent of #Djibouti #RedCrescent: http://www.redcrescent-dj.org/',
    '#Charity for #Brunei: https://goo.gl/P7ccRU',
    'Red Cross of #Bermuda: www.bermudaredcross.com/ #RedCross',
    'Red Cross of Cayman Islands #CaymanIslands: www.redcross.org.ky/ #RedCross',
    // 'Here should be charity for Faroe Islands',
    'Red Cross of #Liechtenstein: http://www.roteskreuz.li/ #RedCross',
    'Red Cross of #Monaco: http://www.croix-rouge.mc/ #RedCross',
    'Red Crescent of #Tunisia #Tunisia: http://www.crt.tn/',
    '#Charity for #Yemen: http://www.zakat.org/country/yemen/',
    //'#Charity for #BritishIslands: https://goo.gl/0pRJVN', - part of U.K.
    '#Charity for Cook Islands #CookIslands: http://cookfoundation.org/',
    '#Charity for #Palau: https://goo.gl/Id7lKD',
    //'#Charity for #Anguilla: https://charitylook.org/city/anguilla/', here is from Mississippi of U.S.
    '#Charity for #Comoros: http://www.comoroscharity.org/',
    '#Charity for #Bhutan: https://goo.gl/DRHEHH',
    'Red Crescent of #Afghanistan #RedCrescent: http://www.redcrescent.af/',
    '#Charity for #Mauritania: https://goo.gl/XK81gO',
    '#Charity for Falkland Islands #FalklandIsalands: http://www.falklandsconservation.com/',
    '#Charity for #Somalia: https://goo.gl/1Bn35T',
    // Vatican second in third ring...
    'Red Crescent of #Maldives #RedCrescent: https://redcrescent.org.mv/'
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
'#Bible for #Zimbabwe in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Zimbabwe&language=English',
'#Bible for #Zimbabwe in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Zimbabwe&language=English',
'#Bible for #Zimbabwe in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Zimbabwe&language=English',
'#Bible for #Zimbabwe in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Zimbabwe&language=English',
'#Bible for #Zimbabwe in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Zimbabwe&language=English',
'#Bible for #Zambia in #Portuguese: http://gold-bible.16mb.com/?b_code=pt_bliv&country=Zambia&language=Portuguese',
'#Bible for #Yemen in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Yemen&language=Arabic',
'#Bible for #Vietnam in #Vietnamese: http://gold-bible.16mb.com/?b_code=vi-vn_http&country=vn&language=vi',
'#Bible for #Venezuela in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Venezuela&language=Spanish',
'#Bible for #VaticanCity in #Italian: http://gold-bible.16mb.com/?b_code=it-it_http&country=va&language=it',
'#Bible for #VaticanCity in #Latin: http://gold-bible.16mb.com/?b_code=la-va_http&country=va&language=la',
'#Bible for #Uzbekistan in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Uzbekistan&language=Russian',
'#Bible for #Uruguay in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Uruguay&language=Spanish',
'#Bible for #UnitedStates in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=United%20States&language=en',
'#Bible for #UnitedStates in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=us&language=en',
'#Bible for #UnitedStates in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=United%20States&language=en',
'#Bible for #UnitedStates in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=us&language=en',
'#Bible for #UnitedStates in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=United%20States&language=en',
'#Bible for #UnitedKingdom in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=United%20Kingdom&language=en',
'#Bible for #UnitedKingdom in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=uk&language=en',
'#Bible for #UnitedKingdom in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=uk&language=en',
'#Bible for #UnitedKingdom in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=uk&language=en',
'#Bible for #UnitedKingdom in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=uk&language=en',
'#Bible for #UnitedArabEmirates in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=ae&language=ar',
'#Bible for #Ukraine in #Ukrainian: http://gold-bible.16mb.com/?b_code=ua-ua_http&country=Ukraine&language=Ukrainian',
'#Bible for #Uganda in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Uganda&language=English',
'#Bible for #Uganda in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Uganda&language=English',
'#Bible for #Uganda in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Uganda&language=English',
'#Bible for #Uganda in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Uganda&language=English',
'#Bible for #Uganda in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Uganda&language=English',
'#Bible for #Tunisia in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Tunisia&language=Arabic',
'#Bible for #TrinidadandTobago in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=tt&language=en',
'#Bible for #TrinidadandTobago in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=tt&language=en',
'#Bible for #TrinidadandTobago in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=tt&language=en',
'#Bible for #TrinidadandTobago in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=tt&language=en',
'#Bible for #TrinidadandTobago in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=tt&language=en',
'#Bible for #Tonga in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Tonga&language=English',
'#Bible for #Tonga in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Tonga&language=English',
'#Bible for #Tonga in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Tonga&language=English',
'#Bible for #Tonga in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Tonga&language=English',
'#Bible for #Tonga in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Tonga&language=English',
'#Bible for #Togo in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Togo&language=French',
'#Bible for #Togo in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Togo&language=French',
'#Bible for #TheNetherlands in #Dutch: http://gold-bible.16mb.com/?b_code=nl-nl_http&country=nl&language=nl',
'#Bible for #Tanzania in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Tanzania&language=English',
'#Bible for #Tanzania in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Tanzania&language=English',
'#Bible for #Tanzania in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Tanzania&language=English',
'#Bible for #Tanzania in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Tanzania&language=English',
'#Bible for #Tanzania in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Tanzania&language=English',
'#Bible for #Taiwan in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Taiwan&language=Chinese',
'#Bible for #Taiwan in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Taiwan&language=Chinese',
'#Bible for #Syria in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Syria&language=Arabic',
'#Bible for #Switzerland in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Switzerland&language=French',
'#Bible for #Switzerland in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Switzerland&language=French',
'#Bible for #Switzerland in #German: http://gold-bible.16mb.com/?b_code=deu1912&country=Switzerland&language=German',
'#Bible for #Switzerland in #Italian: http://gold-bible.16mb.com/?b_code=it-it_http&country=Switzerland&language=it',
'#Bible for #Sweden in #Swedish: http://gold-bible.16mb.com/?b_code=sv-se_http&country=Sweden&language=Swedish',
'#Bible for #Swaziland in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Swaziland&language=English',
'#Bible for #Swaziland in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Swaziland&language=English',
'#Bible for #Swaziland in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Swaziland&language=English',
'#Bible for #Swaziland in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Swaziland&language=English',
'#Bible for #Swaziland in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Swaziland&language=English',
'#Bible for #Suriname in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Suriname&language=English',
'#Bible for #Suriname in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Suriname&language=English',
'#Bible for #Suriname in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Suriname&language=English',
'#Bible for #Suriname in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Suriname&language=English',
'#Bible for #Suriname in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Suriname&language=English',
'#Bible for #Sudan in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Sudan&language=Arabic',
'#Bible for #Sudan in #Uduk: http://gold-bible.16mb.com/?b_code=udu&country=Sudan&language=Uduk',
'#Bible for #SriLanka in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Sri%20Lanka&language=English',
'#Bible for #SriLanka in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Sri%20Lanka&language=English',
'#Bible for #SriLanka in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Sri%20Lanka&language=English',
'#Bible for #SriLanka in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Sri%20Lanka&language=English',
'#Bible for #SriLanka in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Sri%20Lanka&language=English',
'#Bible for #Spain in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Spain&language=Spanish',
'#Bible for #SouthSudan in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=South%20Sudan&language=English',
'#Bible for #SouthSudan in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=South%20Sudan&language=en',
'#Bible for #SouthSudan in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=South%20Sudan&language=English',
'#Bible for #SouthSudan in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=South%20Sudan&language=en',
'#Bible for #SouthSudan in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=South%20Sudan&language=English',
'#Bible for #SouthKorea in #Korean: http://gold-bible.16mb.com/?b_code=ko-kr_http&country=South%20Korea&language=ko',
'#Bible for #SouthAfrica in #Afrikaans: http://gold-bible.16mb.com/?b_code=af-za_http&country=za&language=af',
'#Bible for #SouthAfrica in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=South%20Africa&language=en',
'#Bible for #SouthAfrica in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=za&language=en',
'#Bible for #SouthAfrica in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=South%20Africa&language=en',
'#Bible for #SouthAfrica in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=za&language=en',
'#Bible for #SouthAfrica in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=South%20Africa&language=en',
'#Bible for #Somalia in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Somalia&language=Arabic',
'#Bible for #Singapore in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Singapore&language=Chinese',
'#Bible for #Singapore in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Singapore&language=Chinese',
'#Bible for #Singapore in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Singapore&language=English',
'#Bible for #Singapore in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Singapore&language=English',
'#Bible for #Singapore in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Singapore&language=English',
'#Bible for #Singapore in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Singapore&language=English',
'#Bible for #Singapore in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Singapore&language=English',
'#Bible for #SierraLeone in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Sierra%20Leone&language=en',
'#Bible for #SierraLeone in #English: gold-bible.16mb.com/?b_code=eng-Brenton&country=Sierra%20Leone&language=en',
'#Bible for #SierraLeone in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Sierra%20Leone&language=en',
'#Bible for #SierraLeone in #English: gold-bible.16mb.com/?b_code=eng-kjv2006&country=Sierra%20Leone&language=en',
'#Bible for #SierraLeone in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Sierra%20Leone&language=en',
'#Bible for #Seychelles in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Seychelles&language=English',
'#Bible for #Seychelles in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Seychelles&language=en',
'#Bible for #Seychelles in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Seychelles&language=English',
'#Bible for #Seychelles in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Seychelles&language=en',
'#Bible for #Seychelles in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Seychelles&language=English',
'#Bible for #Senegal in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Senegal&language=French',
'#Bible for #Senegal in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Senegal&language=French',
'#Bible for #SaudiArabia in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Saudi%20Arabia&language=Arabic',
'#Bible for #SaintLucia in #CreoleFrench: gold-bible.16mb.com/?b_code=acfNT&country=Saint%20Lucia&language=Creole%20French',
'#Bible for #Rwanda in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Rwanda&language=English',
'#Bible for #Rwanda in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Rwanda&language=English',
'#Bible for #Rwanda in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Rwanda&language=English',
'#Bible for #Rwanda in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Rwanda&language=English',
'#Bible for #Rwanda in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Rwanda&language=English',
'#Bible for #Russia in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Russia&language=Russian',
'#Bible for #Romania in #Romanian: http://gold-bible.16mb.com/?b_code=ro-ro_http&country=Romania&language=Romanian',
'#Bible for #Qatar in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Qatar&language=Arabic',
'#Bible for #Qatar in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Qatar&language=English',
'#Bible for #Qatar in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Qatar&language=English',
'#Bible for #Qatar in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Qatar&language=English',
'#Bible for #Qatar in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Qatar&language=English',
'#Bible for #Qatar in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Qatar&language=English',
'#Bible for #PuertoRico in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Puerto%20Rico&language=es',
'#Bible for #Portugal in #Portuguese: http://gold-bible.16mb.com/?b_code=pt_bliv&country=Portugal&language=Portuguese',
'#Bible for #Philippines in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Philippines&language=English',
'#Bible for #Philippines in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Philippines&language=en',
'#Bible for #Philippines in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Philippines&language=English',
'#Bible for #Philippines in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Philippines&language=en',
'#Bible for #Philippines in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Philippines&language=English',
'#Bible for #Peru in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Peru&language=Spanish',
'#Bible for #Paraguay in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Paraguay&language=Spanish',
'#Bible for #PapuaNewGuinea in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=pg&language=en',
'#Bible for #PapuaNewGuinea in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=pg&language=en',
'#Bible for #PapuaNewGuinea in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=pg&language=en',
'#Bible for #PapuaNewGuinea in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=pg&language=en',
'#Bible for #PapuaNewGuinea in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=pg&language=en',
'#Bible for #PapuaNewGuinea in #HiriMotu: http://gold-bible.16mb.com/?b_code=hmo&country=pg&language=HiriMotu',
'#Bible for #PapuaNewGuinea in #TokPisin: http://gold-bible.16mb.com/?b_code=tpi&country=pg&language=TokPisin',
'#Bible for #PapuaNewGuinea in #TokPisin: http://gold-bible.16mb.com/?b_code=tpiOTNT&country=pg&language=TokPisin',
'#Bible for #Panama in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Panama&language=Spanish',
'#Bible for #Palau in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Palau&language=English',
'#Bible for #Palau in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Palau&language=English',
'#Bible for #Palau in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Palau&language=English',
'#Bible for #Palau in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Palau&language=English',
'#Bible for #Palau in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Palau&language=English',
'#Bible for #Oman in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Oman&language=Arabic',
'#Bible for #Norway in #Norwegian: http://gold-bible.16mb.com/?b_code=no-no_http&country=Norway&language=Norwegian',
'#Bible for #NorthKorea in #Korean: http://gold-bible.16mb.com/?b_code=ko-kr_http&country=North%20Korea&language=ko',
'#Bible for #Nigeria in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Nigeria&language=English',
'#Bible for #Nigeria in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Nigeria&language=English',
'#Bible for #Nigeria in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Nigeria&language=English',
'#Bible for #Nigeria in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Nigeria&language=English',
'#Bible for #Nigeria in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Nigeria&language=English',
'#Bible for #Niger in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Niger&language=French',
'#Bible for #Niger in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Niger&language=French',
'#Bible for #Nicaragua in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Nicaragua&language=Spanish',
'#Bible for #NewZealand in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=New%20Zealand&language=en',
'#Bible for #NewZealand in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=New%20Zealand&language=en',
'#Bible for #NewZealand in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=New%20Zealand&language=en',
'#Bible for #NewZealand in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=New%20Zealand&language=en',
'#Bible for #NewZealand in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=New%20Zealand&language=English',
'#Bible for #Netherlands in #Dutch: http://gold-bible.16mb.com/?b_code=nl-nl_http&country=Netherlands&language=Dutch',
'#Bible for #Namibia in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Namibia&language=English',
'#Bible for #Namibia in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Namibia&language=English',
'#Bible for #Namibia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Namibia&language=English',
'#Bible for #Namibia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Namibia&language=English',
'#Bible for #Namibia in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Namibia&language=English',
'#Bible for #Myanmar[Burma] in #Chin: gold-bible.16mb.com/?b_code=zypNT&country=Myanmar%20[Burma]&language=Chin',
'#Bible for #Mozambique in #Portuguese: http://gold-bible.16mb.com/?b_code=pt_bliv&country=Mozambique&language=pt',
'#Bible for #Morocco in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Morocco&language=Arabic',
'#Bible for #Morocco in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Morocco&language=French',
'#Bible for #Morocco in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Morocco&language=French',
'#Bible for #Montenegro in #Albanian: gold-bible.16mb.com/?b_code=sq-al_http&country=Montenegro&language=Albanian',
'#Bible for #Monaco in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Monaco&language=French',
'#Bible for #Monaco in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Monaco&language=French',
'#Bible for #Moldova in #Romanian: http://gold-bible.16mb.com/?b_code=ro-ro_http&country=Moldova&language=Romanian',
'#Bible for #Micronesia in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=fm&language=English',
'#Bible for #Micronesia in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=fm&language=English',
'#Bible for #Micronesia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=fm&language=English',
'#Bible for #Micronesia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=fm&language=English',
'#Bible for #Micronesia in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=fm&language=English',
'#Bible for #Mexico in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Mexico&language=Spanish',
'#Bible for #Mauritius in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Mauritius&language=English',
'#Bible for #Mauritius in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Mauritius&language=English',
'#Bible for #Mauritius in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Mauritius&language=English',
'#Bible for #Mauritius in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Mauritius&language=English',
'#Bible for #Mauritius in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Mauritius&language=English',
'#Bible for #Mauritius in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Mauritius&language=French',
'#Bible for #Mauritius in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Mauritius&language=French',
'#Bible for #Mauritania in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Mauritania&language=Arabic',
'#Bible for #Malta in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Malta&language=English',
'#Bible for #Malta in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Malta&language=English',
'#Bible for #Malta in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Malta&language=English',
'#Bible for #Malta in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Malta&language=English',
'#Bible for #Malta in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Malta&language=English',
'#Bible for #Mali in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Mali&language=French',
'#Bible for #Mali in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Mali&language=French',
'#Bible for #Malaysia in #BahasaMalaysia: gold-bible.16mb.com/?b_code=zlmKSZI&country=Malaysia&language=BahasaMalaysia',
'#Bible for #Malaysia in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Malaysia&language=English',
'#Bible for #Malaysia in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Malaysia&language=English',
'#Bible for #Malaysia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Malaysia&language=English',
'#Bible for #Malaysia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Malaysia&language=English',
'#Bible for #Malaysia in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Malaysia&language=English',
'#Bible for #Malawi in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Malawi&language=English',
'#Bible for #Malawi in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Malawi&language=English',
'#Bible for #Malawi in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Malawi&language=English',
'#Bible for #Malawi in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Malawi&language=English',
'#Bible for #Malawi in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Malawi&language=English',
'#Bible for #Madagascar in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Madagascar&language=French',
'#Bible for #Madagascar in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Madagascar&language=French',
'#Bible for #MacauSAR in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Macau%20SAR&language=Chinese',
'#Bible for #MacauSAR in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Macau%20SAR&language=Chinese',
'#Bible for #Luxembourg in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Luxembourg&language=French',
'#Bible for #Luxembourg in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Luxembourg&language=French',
'#Bible for #Luxembourg in #German: http://gold-bible.16mb.com/?b_code=deu1912&country=Luxembourg&language=German',
'#Bible for #Liechtenstein in #German: gold-bible.16mb.com/?b_code=deu1912&country=Liechtenstein&language=German',
'#Bible for #Libya in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Libya&language=Arabic',
'#Bible for #Liberia in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Liberia&language=English',
'#Bible for #Liberia in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Liberia&language=English',
'#Bible for #Liberia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Liberia&language=English',
'#Bible for #Liberia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Liberia&language=English',
'#Bible for #Liberia in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Liberia&language=English',
'#Bible for #Lesotho in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Lesotho&language=English',
'#Bible for #Lesotho in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Lesotho&language=English',
'#Bible for #Lesotho in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Lesotho&language=English',
'#Bible for #Lesotho in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Lesotho&language=English',
'#Bible for #Lesotho in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Lesotho&language=English',
'#Bible for #Lebanon in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Lebanon&language=Arabic',
'#Bible for #Latvia in #Latvian: http://gold-bible.16mb.com/?b_code=lv-lv_http&country=Latvia&language=Latvian',
'#Bible for #Kuwait in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Kuwait&language=Arabic',
'#Bible for #Korea in #Korean: http://gold-bible.16mb.com/?b_code=ko-kr_http&country=Korea&language=Korean',
'#Bible for #Kenya in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Kenya&language=English',
'#Bible for #Kenya in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Kenya&language=English',
'#Bible for #Kenya in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Kenya&language=English',
'#Bible for #Kenya in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Kenya&language=English',
'#Bible for #Kenya in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Kenya&language=English',
'#Bible for #Kenya in #Swahili: http://gold-bible.16mb.com/?b_code=sw-ke_http&country=Kenya&language=Swahili',
'#Bible for #Kazakhstan in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Kazakhstan&language=Russian',
'#Bible for #Jordan in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Jordan&language=Arabic',
'#Bible for #Japan in #Japanese: http://gold-bible.16mb.com/?b_code=jpn1965&country=Japan&language=Japanese',
'#Bible for #Jamaica in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Jamaica&language=English',
'#Bible for #Jamaica in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Jamaica&language=English',
'#Bible for #Jamaica in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Jamaica&language=English',
'#Bible for #Jamaica in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Jamaica&language=English',
'#Bible for #Jamaica in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Jamaica&language=English',
'#Bible for #IvoryCoast in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Ivory%20Coast&language=French',
'#Bible for #IvoryCoast in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Ivory%20Coast&language=French',
'#Bible for #Italy in #Italian: http://gold-bible.16mb.com/?b_code=it-it_http&country=Italy&language=Italian',
'#Bible for #Israel in #Hebrew: http://gold-bible.16mb.com/?b_code=he-il_http&country=Israel&language=Hebrew',
'#Bible for #Ireland in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Ireland&language=English',
'#Bible for #Ireland in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Ireland&language=English',
'#Bible for #Ireland in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Ireland&language=English',
'#Bible for #Ireland in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Ireland&language=English',
'#Bible for #Ireland in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Ireland&language=English',
'#Bible for #Iraq in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Iraq&language=Arabic',
'#Bible for #India in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=India&language=English',
'#Bible for #India in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=India&language=English',
'#Bible for #India in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=India&language=English',
'#Bible for #India in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=India&language=English',
'#Bible for #India in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=India&language=English',
'#Bible for #Hungary in #Hungarian: http://gold-bible.16mb.com/?b_code=hu-hu_http&country=Hungary&language=Hungarian',
'#Bible for #Hungaria in #Hungarian: http://gold-bible.16mb.com/?b_code=hu-hu_http&country=Hungaria&language=hu',
'#Bible for #HongKongSAR in #Chinese: gold-bible.16mb.com/?b_code=cmn-cu89s&country=Hong%20Kong%20SAR&language=zh',
'#Bible for #HongKongSAR in #Chinese: gold-bible.16mb.com/?b_code=cmn-cu89t&country=Hong%20Kong%20SAR&language=zh',
'#Bible for #HongKong in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=Hong%20Kong&language=Chinese',
'#Bible for #HongKong in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=Hong%20Kong&language=Chinese',
'#Bible for #Honduras in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Honduras&language=Spanish',
'#Bible for #Haiti in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Haiti&language=French',
'#Bible for #Haiti in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Haiti&language=French',
'#Bible for #Haiti in #HaitianCreole: gold-bible.16mb.com/?b_code=ht-ht_http&country=Haiti&language=HaitianCreole',
'#Bible for #Guyana in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Guyana&language=English',
'#Bible for #Guyana in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Guyana&language=English',
'#Bible for #Guyana in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Guyana&language=English',
'#Bible for #Guyana in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Guyana&language=English',
'#Bible for #Guyana in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Guyana&language=English',
'#Bible for #Guinea-Bissau in #Portuguese: gold-bible.16mb.com/?b_code=pt_bliv&country=Guinea-Bissau&language=pt',
'#Bible for #Guinea in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Guinea&language=French',
'#Bible for #Guinea in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Guinea&language=French',
'#Bible for #Guatemala in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Guatemala&language=Spanish',
'#Bible for #Grenada in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Grenada&language=English',
'#Bible for #Grenada in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Grenada&language=English',
'#Bible for #Grenada in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Grenada&language=English',
'#Bible for #Grenada in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Grenada&language=English',
'#Bible for #Grenada in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Grenada&language=English',
'#Bible for #Greenland in #Danish: http://gold-bible.16mb.com/?b_code=da-dk_http&country=Greenland&language=Danish',
'#Bible for #Greece in #Greek: http://gold-bible.16mb.com/?b_code=el-gr_http&country=Greece&language=Greek',
'#Bible for #Greece in #Greek: http://gold-bible.16mb.com/?b_code=grc-tisch&country=Greece&language=Greek',
'#Bible for #Ghana in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Ghana&language=English',
'#Bible for #Ghana in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Ghana&language=English',
'#Bible for #Ghana in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Ghana&language=English',
'#Bible for #Ghana in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Ghana&language=English',
'#Bible for #Ghana in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Ghana&language=English',
'#Bible for #Germany in #German: http://gold-bible.16mb.com/?b_code=deu1912&country=Germany&language=German',
'#Bible for #Georgia in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Georgia&language=Russian',
'#Bible for #Gambia in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Gambia&language=English',
'#Bible for #Gambia in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Gambia&language=English',
'#Bible for #Gambia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Gambia&language=English',
'#Bible for #Gambia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Gambia&language=English',
'#Bible for #Gambia in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Gambia&language=English',
'#Bible for #Gabon in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Gabon&language=French',
'#Bible for #Gabon in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Gabon&language=French',
'#Bible for #France in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=France&language=French',
'#Bible for #France in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=France&language=French',
'#Bible for #Finland in #Finnish: http://gold-bible.16mb.com/?b_code=fi-fi_http&country=Finland&language=Finnish',
'#Bible for #Finland in #Swedish: http://gold-bible.16mb.com/?b_code=sv-se_http&country=Finland&language=Swedish',
'#Bible for #Fiji in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Fiji&language=English',
'#Bible for #Fiji in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Fiji&language=English',
'#Bible for #Fiji in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Fiji&language=English',
'#Bible for #Fiji in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Fiji&language=English',
'#Bible for #Fiji in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Fiji&language=English',
'#Bible for #FaroeIslands in #Danish: http://gold-bible.16mb.com/?b_code=da-dk_http&country=Faroe%20Islands&language=Danish',
'#Bible for #Estonia in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Estonia&language=Russian',
'#Bible for #EquatorialGuinea in #French: gold-bible.16mb.com/?b_code=fra_fob&country=Equatorial%20Guinea&language=fr',
'#Bible for #EquatorialGuinea in #French: gold-bible.16mb.com/?b_code=fraLSG&country=Equatorial%20Guinea&language=fr',
'#Bible for #ElSalvador in #Spanish: gold-bible.16mb.com/?b_code=spaRV1909&country=El%20Salvador&language=es',
'#Bible for #Egypt in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Egypt&language=Arabic',
'#Bible for #Egypt in #Coptic: http://gold-bible.16mb.com/?b_code=copbhc&country=Egypt&language=Coptic',
'#Bible for #Egypt in #Coptic: http://gold-bible.16mb.com/?b_code=copcnt&country=Egypt&language=Coptic',
'#Bible for #Ecuador in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Ecuador&language=Spanish',
'#Bible for #EastTimor in #Portuguese: gold-bible.16mb.com/?b_code=pt_bliv&country=East%20Timor&language=pt',
'#Bible for #EastTimor in #TetunDili: http://gold-bible.16mb.com/?b_code=tdt&country=East%20Timor&language=TetunDili',
'#Bible for #DominicanRepublic in #Spanish: gold-bible.16mb.com/?b_code=spaRV1909&country=do&language=es',
'#Bible for #Dominica in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Dominica&language=English',
'#Bible for #Dominica in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Dominica&language=English',
'#Bible for #Dominica in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Dominica&language=English',
'#Bible for #Dominica in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Dominica&language=English',
'#Bible for #Dominica in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Dominica&language=English',
'#Bible for #Djibouti in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Djibouti&language=Arabic',
'#Bible for #Djibouti in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Djibouti&language=French',
'#Bible for #Djibouti in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Djibouti&language=French',
'#Bible for #Denmark in #Danish: http://gold-bible.16mb.com/?b_code=da-dk_http&country=Denmark&language=Danish',
'#Bible for #CzechRepublic in #Czech: gold-bible.16mb.com/?b_code=ceskms&country=Czech%20Republic&language=Czech',
'#Bible for #CzechRepublic in #Czech: gold-bible.16mb.com/?b_code=cesnkb&country=Czech%20Republic&language=Czech',
'#Bible for #Cyprus in #Greek: http://gold-bible.16mb.com/?b_code=el-gr_http&country=Cyprus&language=Greek',
'#Bible for #Cyprus in #Greek: http://gold-bible.16mb.com/?b_code=grc-tisch&country=Cyprus&language=Greek',
'#Bible for #Cuba in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Cuba&language=Spanish',
'#Bible for #Croatia in #CroatianBible: gold-bible.16mb.com/?b_code=hr-hr_http&country=Croatia&language=CroatianBible',
'#Bible for #CostaRica in #Spanish: gold-bible.16mb.com/?b_code=spaRV1909&country=Costa%20Rica&language=Spanish',
'#Bible for #CookIslands in #English: gold-bible.16mb.com/?b_code=eng-asv&country=Cook%20Islands&language=English',
'#Bible for #CookIslands in #English: gold-bible.16mb.com/?b_code=eng-Brenton&country=Cook%20Islands&language=English',
'#Bible for #CookIslands in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Cook%20Islands&language=English',
'#Bible for #CookIslands in #English: gold-bible.16mb.com/?b_code=eng-kjv2006&country=Cook%20Islands&language=English',
'#Bible for #CookIslands in #English: gold-bible.16mb.com/?b_code=engBBE&country=Cook%20Islands&language=English',
'#Bible for #Congo in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Congo&language=French',
'#Bible for #Congo in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Congo&language=French',
'#Bible for #Comoros in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Comoros&language=Arabic',
'#Bible for #Comoros in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Comoros&language=French',
'#Bible for #Comoros in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Comoros&language=French',
'#Bible for #Colombia in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Colombia&language=Spanish',
'#Bible for #China in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89s&country=China&language=Chinese',
'#Bible for #China in #Chinese: http://gold-bible.16mb.com/?b_code=cmn-cu89t&country=China&language=Chinese',
'#Bible for #Chile in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Chile&language=Spanish',
'#Bible for #Chad in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Chad&language=French',
'#Bible for #Chad in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Chad&language=French',
'#Bible for #CentralAfricanRepublic in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=cf&language=fr',
'#Bible for #CentralAfricanRepublic in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=cf&language=fr',
'#Bible for #CaymanIslands in #English: gold-bible.16mb.com/?b_code=eng-asv&country=Cayman%20Islands&language=English',
'#Bible for #CaymanIslands in #English: gold-bible.16mb.com/?b_code=eng-Brenton&country=Cayman%20Islands&language=en',
'#Bible for #CaymanIslands in #English: gold-bible.16mb.com/?b_code=eng-kjv&country=Cayman%20Islands&language=English',
'#Bible for #CaymanIslands in #English: gold-bible.16mb.com/?b_code=eng-kjv2006&country=Cayman%20Islands&language=en',
'#Bible for #CaymanIslands in #English: gold-bible.16mb.com/?b_code=engBBE&country=Cayman%20Islands&language=English',
'#Bible for #Caribbean in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Caribbean&language=English',
'#Bible for #Caribbean in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Caribbean&language=English',
'#Bible for #Caribbean in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Caribbean&language=English',
'#Bible for #Caribbean in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Caribbean&language=English',
'#Bible for #Caribbean in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Caribbean&language=English',
'#Bible for #CapeVerde in #Portuguese: gold-bible.16mb.com/?b_code=pt_bliv&country=Cape%20Verde&language=Portuguese',
'#Bible for #Canada in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Canada&language=English',
'#Bible for #Canada in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Canada&language=English',
'#Bible for #Canada in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Canada&language=English',
'#Bible for #Canada in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Canada&language=English',
'#Bible for #Canada in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Canada&language=English',
'#Bible for #Canada in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Canada&language=French',
'#Bible for #Canada in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Canada&language=French',
'#Bible for #Cameroon in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Cameroon&language=French',
'#Bible for #Cameroon in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Cameroon&language=French',
'#Bible for #Burundi in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Burundi&language=French',
'#Bible for #Burundi in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Burundi&language=French',
'#Bible for #BurkinaFaso in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Burkina%20Faso&language=fr',
'#Bible for #BurkinaFaso in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Burkina%20Faso&language=French',
'#Bible for #Bulgaria in #Bulgarian: gold-bible.16mb.com/?b_code=bg-bg_http&country=Bulgaria&language=Bulgarian',
'#Bible for #Brunei in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Brunei&language=English',
'#Bible for #Brunei in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Brunei&language=English',
'#Bible for #Brunei in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Brunei&language=English',
'#Bible for #Brunei in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Brunei&language=English',
'#Bible for #Brunei in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Brunei&language=English',
'#Bible for #Brazil in #Portuguese: http://gold-bible.16mb.com/?b_code=pt_bliv&country=Brazil&language=Portuguese',
'#Bible for #Botswana in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Botswana&language=English',
'#Bible for #Botswana in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Botswana&language=English',
'#Bible for #Botswana in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Botswana&language=English',
'#Bible for #Botswana in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Botswana&language=English',
'#Bible for #Botswana in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Botswana&language=English',
'#Bible for #Bolivia in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Bolivia&language=Spanish',
'#Bible for #Bermuda in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Bermuda&language=English',
'#Bible for #Bermuda in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Bermuda&language=English',
'#Bible for #Bermuda in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Bermuda&language=English',
'#Bible for #Bermuda in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Bermuda&language=English',
'#Bible for #Bermuda in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Bermuda&language=English',
'#Bible for #Benin in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Benin&language=French',
'#Bible for #Benin in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Benin&language=French',
'#Bible for #Belize in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Belize&language=English',
'#Bible for #Belize in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Belize&language=English',
'#Bible for #Belize in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Belize&language=English',
'#Bible for #Belize in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Belize&language=English',
'#Bible for #Belize in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Belize&language=English',
'#Bible for #Belgium in #Dutch: http://gold-bible.16mb.com/?b_code=nl-nl_http&country=Belgium&language=Dutch',
'#Bible for #Belgium in #French: http://gold-bible.16mb.com/?b_code=fra_fob&country=Belgium&language=French',
'#Bible for #Belgium in #French: http://gold-bible.16mb.com/?b_code=fraLSG&country=Belgium&language=French',
'#Bible for #Belarus in #Belarusian: http://gold-bible.16mb.com/?b_code=bel&country=Belarus&language=Belarusian',
'#Bible for #Belarus in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Belarus&language=Russian',
'#Bible for #Barbados in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Barbados&language=English',
'#Bible for #Barbados in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Barbados&language=English',
'#Bible for #Barbados in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Barbados&language=English',
'#Bible for #Barbados in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Barbados&language=English',
'#Bible for #Barbados in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Barbados&language=English',
'#Bible for #Bangladesh in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Bangladesh&language=English',
'#Bible for #Bangladesh in #English: gold-bible.16mb.com/?b_code=eng-Brenton&country=Bangladesh&language=English',
'#Bible for #Bangladesh in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Bangladesh&language=English',
'#Bible for #Bangladesh in #English: gold-bible.16mb.com/?b_code=eng-kjv2006&country=Bangladesh&language=English',
'#Bible for #Bangladesh in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Bangladesh&language=English',
'#Bible for #Bahrain in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Bahrain&language=Arabic',
'#Bible for #Bahamas in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Bahamas&language=English',
'#Bible for #Bahamas in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Bahamas&language=English',
'#Bible for #Bahamas in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Bahamas&language=English',
'#Bible for #Bahamas in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Bahamas&language=English',
'#Bible for #Bahamas in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Bahamas&language=English',
'#Bible for #Austria in #German: http://gold-bible.16mb.com/?b_code=deu1912&country=Austria&language=German',
'#Bible for #Australia in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Australia&language=English',
'#Bible for #Australia in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Australia&language=English',
'#Bible for #Australia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Australia&language=English',
'#Bible for #Australia in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Australia&language=English',
'#Bible for #Australia in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Australia&language=English',
'#Bible for #Aruba in #Dutch: http://gold-bible.16mb.com/?b_code=nl-nl_http&country=Aruba&language=Dutch',
'#Bible for #Armenia in #Russian: http://gold-bible.16mb.com/?b_code=russyn&country=Armenia&language=Russian',
'#Bible for #Argentina in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Argentina&language=Spanish',
'#Bible for #Anguilla in #English: http://gold-bible.16mb.com/?b_code=eng-asv&country=Anguilla&language=English',
'#Bible for #Anguilla in #English: http://gold-bible.16mb.com/?b_code=eng-Brenton&country=Anguilla&language=English',
'#Bible for #Anguilla in #English: http://gold-bible.16mb.com/?b_code=eng-kjv&country=Anguilla&language=English',
'#Bible for #Anguilla in #English: http://gold-bible.16mb.com/?b_code=eng-kjv2006&country=Anguilla&language=English',
'#Bible for #Anguilla in #English: http://gold-bible.16mb.com/?b_code=engBBE&country=Anguilla&language=English',
'#Bible for #Angola in #Portuguese: http://gold-bible.16mb.com/?b_code=pt_bliv&country=Angola&language=Portuguese',
'#Bible for #Andorra in #Spanish: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Andorra&language=Spanish',
'#Bible for #AmericanSamoa in #English: gold-bible.16mb.com/?b_code=eng-asv&country=American%20Samoa&language=English',
'#Bible for #AmericanSamoa in #English: gold-bible.16mb.com/?b_code=eng-Brenton&country=American%20Samoa&language=en',
'#Bible for #AmericanSamoa in #English: gold-bible.16mb.com/?b_code=eng-kjv&country=American%20Samoa&language=English',
'#Bible for #AmericanSamoa in #English: gold-bible.16mb.com/?b_code=eng-kjv2006&country=American%20Samoa&language=en',
'#Bible for #AmericanSamoa in #English: gold-bible.16mb.com/?b_code=engBBE&country=American%20Samoa&language=English',
'#Bible for #Algeria in #Arabic: http://gold-bible.16mb.com/?b_code=arb-vd&country=Algeria&language=Arabic',
'#Bible for #Albania in #Albanian: http://gold-bible.16mb.com/?b_code=sq-al_http&country=Albania&language=Albanian'

];

var bible_index = 0;

var twit = require('twit');

var programming = new twit({
  consumer_key:         'htC9tOwYuE88UwqIwi39WTtPg',
  consumer_secret:  'sDHwA7IyuS2DltBfsBOLAnnYq82p6RNaIu7YzuUFNDkzyjIyBM',
  access_token:         '713642228124663809-216D6cXbmukkeZSf1GFv2DqO9MN4FzA',
  access_token_secret:  'GHD11IzjEBplwTBnew8Mm3vrQHNWxYRlWIJVbVkp4WX9T'
});

var goldenbibleorg = new twit({
  consumer_key:         'VJR4i0AZWjCrHGbLleWOcsISp',
  consumer_secret:  '3J7tU6ZoWSGj1WK5R3gewaYHVK27tdTFDToi0b0ToKB3yZwiNG',
  access_token:         '825694517655437312-v7JnhGXRj5ghOzQOwiGV4AIiQ6XWe9c',
  access_token_secret:  'xC5mrbYOiGXsQ3afHoqzgS5dclKWN0RtRDsaC4WEg549q'
});

var daily_biz_news = new twit({
  consumer_key:         'ANffNlpoCN8MnNplRlwZJRSOX',
  consumer_secret:  'VlWDuxpNKj8ekBvMyJxFoXmx7L4LZSi2c0boetDBK3LJnLuCss',
  access_token:         '853719629465866240-yWNMaF5jMHom8zmu8rH7Qqs0oqGCJxK',
  access_token_secret:  'IrgdFVhxgVg2IyzBDqA6djTZirEo575g2UjrRbhJP9n8D'
});

function tweet_ring0()
{
                var date = new Date();

                if (ring0_index == ring0.length) ring0_index = 0;

                goldenbibleorg.post(
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

                programming.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring0[ring0_index] + " \n"
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
                daily_biz_news.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring0[ring0_index] + " \n"
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

                goldenbibleorg.post(
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

                programming.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring1[ring1_index] + " \n"
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
                daily_biz_news.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring1[ring1_index] + " \n"
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

                goldenbibleorg.post(
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
                  programming.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring2[ring2_index] + " \n"
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

                daily_biz_news.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring2[ring2_index] + " \n"
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

                goldenbibleorg.post(
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
                  programming.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring3[ring3_index] + " \n"
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

                daily_biz_news.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  ring3[ring3_index] + " \n"
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

                goldenbibleorg.post(
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

                programming.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  bibles[bible_index] + " \n"
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
                daily_biz_news.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  bibles[bible_index] + " \n"
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
                goldenbibleorg.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  "Please the God - install Bible Site with Charity Links; Presentation: https://goo.gl/GaVd8M " + stars[star_index]+ "\n"
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
        var tweet_text = 'Join Charity Support Community PoRT http://youtu.be/-o5Y3GAN6Es #Charity #Bible #RedCross http://charity-port.16mb.com/';
        var date = new Date();

                                programming.post(
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

                                goldenbibleorg.post(
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
        var tweet_text = "#Charity #Bible #HolyBible";
        var date = new Date();

                                programming.post(
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


function tweet_ban_ar15()
{
  var tweet_text = "Ban AR-15: bit.ly/1ZPjPYj #Orlando";
  var date = new Date();

  daily_biz_news.post(
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

        programming.post(
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

function tweet_justice()
{
  var tweet_text = "Beware of unfair freelancers: @booninfotech. http://gold-bible.com/blacklist.html";
  var date = new Date();

  daily_biz_news.post(
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

        programming.post(
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


function tweet_digitalocean()
{
  var tweet_text = "#VPS with #SSD on @DigitalOcean [55sec]. Sign up using my link and receive $10 in credit: https://m.do.co/t/59b1f2d44f9f";
  var date = new Date();

        programming.post(
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
  var tweet_text = "#WebHosting with #Unlimited #Bandwidth, #DiscSpace, and E-Mail accounts on paid accounts: http://bit.ly/2mdj0dC";
  var date = new Date();
  
        programming.post(
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
  var donation_tweet = "PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org #Orlando";
  var date = new Date(); var twitters = [daily_biz_news, goldenbibleorg, 'programming'];
  
                goldenbibleorg.post(
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
                programming.post(
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

                    daily_biz_news.post(
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
  var tweet_text = "How to Learn Language? #LearnLanguage https://youtu.be/7c9fwykj6EQ https://goo.gl/B3JXnq";
  var date = new Date(); var twitters = [daily_biz_news, goldenbibleorg, 'programming'];
  
                goldenbibleorg.post(
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
                programming.post(
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
  var tweet = "Bible quotes, proverbs, wisdom. #Bible #HolyBible #Wisdom #Proverbs Follow @goldenbible_org gold-bible.16mb.com";
                goldenbibleorg.post(
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

        date = new Date();
                tweet = "Well tailored programming and geek news - follow @ihaveabiblesite to be in trend =] #Programming";
                programming.post(
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
     tweet = "Well tailored business news - follow @daily_biz_news_ to be in trend =] #business #biz #news";    
                daily_biz_news.post(
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
tweet_ring0();
//tweet_ring1();

//tweet_bible();

if (process.argv.length == 2) // && process.argv[2] == 'stop')
{
        try
        {   // Timers setting...

            // 60 * 60 * 1000 - hourly

            // 5 * 60 * 60 * 1000 - every five hours

        //setInterval(tweet_donate_blood, 55 * 60 * 1000);
        setInterval(tweet_star, 5 * 60 * 60 * 1000);

        setInterval(tweet_ring0, 0.95 * 3 * 59 * 60 * 1000);
        setInterval(tweet_ring1, 0.93 * 3 * 58 * 60 * 1000);
        setInterval(tweet_ring2, 0.92 * 3 * 57 * 60 * 1000);
        setInterval(tweet_ring3, 0.91 * 3 * 56 * 60 * 1000);

        setInterval(tweet_promo, 5 * 60 * 60 * 1000);
        //setInterval(tweet_donation_link, 5 * 60 * 60 * 1000);
        setInterval(tweet_ban_ar15, 5 * 59 * 60 * 1000);
        setInterval(tweet_parallel_bibles, 5 * 59 * 60 * 1000);

        setInterval(tweet_justice, 20 * 59 * 60 * 1000);
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

    http://gold-bible.16mb.com/
    http://golden-bible.org/

    @GoldenBible_org
    @ihaveabiblesite
    @dailybiz_news_

    This is automated script for tweeting links of
    Charity organizations, Bibles and some other good stuff.

    It includes charity for around one hundred ninety countries.

    You're very welcome... 
    [if it is unregular restart comment lines of tweeting on start, 
    it will start tweeting on timers, otherwise accounts can be banned 
    for 'too many tweets per hour']
    before `shutdown -r now` check the script by `node index.js`
    and renew script in services by `source register.sh`
*/



