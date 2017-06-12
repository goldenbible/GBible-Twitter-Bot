// Spanish version of Twitter Bot

var stars = ['OreiroNatalia', 'telefonica', 'movistar', 'femsa', 'iberdrola', 'GNF_es', 'GNF_mx', 'GNF_pa',
                'inditexcareers']; // for now it is empty set...
                // pt and ru are happy... they are first in that "run"...
// RING 0 - country of origin of the idea - RU - is tweeting almost hourly
// in function tweet_ring0; they do not have English Twitter for auto-retweets

// RING 0
var ring0 = [
/* Israel */
   'Israel da: http://www.israelgives.org/ #Israel #Caridad',
     /* Vatican */
     'La caridad del Papa [Vaticano]: https://goo.gl/K3zVIF http://www.catholicparents.org/ #Vaticano # Caridad',
        // Russia
     'Caridad para Rusia: http://www.evansnyc.com/charity/ #Caridad #Rusia'
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [
        // American
        'Donación a la Cruz Roja Americana [#EUA]: https://www.redcross.org/donate/donation #CruzRoja #EstadosUnidos',
        // British
        'Donación a la Cruz Roja Británica: http://www.redcross.org.uk/Donate-Now #CruzRoja #GranBretaña #ReinoUnido',
        // MYBlood
        //'PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org #Orlando',
        // Canadian
        'Donación a la Cruz Roja Canadiense: http://www.redcross.ca/donate #CruzRoja #Canadá',
        // Swiss ICRC
        'Donaciones al CICR: https://www.icrc.org/en/donate #CruzRoja #CICR',
        // IFRC
        'Donar a IFRC: http://www.ifrc.org/ #Caridade #IFRC #CruzRoja #CrecienteRojo',
        // Australian
        'Donación a la Cruz Roja Australiana: http://www.redcross.org.au/donate.aspx #CruzRoja #Australia'
        // WER NY
//        'Donate to West Residences: https://donatenow.networkforgood.org/westendnyc
        ];

// tweet char limit - 120 - rest is for datetime stamp
// RING 2 - 
var ring2 = [
    'Cruz Roja Mexicana: http://cruzrojamexicana.org.mx/ #México #CruzRoja',
    'Cruz Roja Venezolana #CruzRoja: http://www.cruzrojavenezolana.org/ Caridad en #Venezuela: http://bit.ly/29ydNLR',
    'Cruz Roja Colombiana: http://www.cruzrojacolombiana.org/ #Colombia #CruzRoja',
    'Cruz Roja Española: http://www.cruzroja.es/ #España #CruzRoja',
    'Cruz Roja Argentina: http://www.cruzroja.org.ar/ #Argentina #CruzRoja',
    'Cruz Roja en Perú: http://www.cruzroja.org.pe/ #Perú #CruzRoja',
    'Cruz Roja en #Paraguay: http://www.cruzroja.org.py/ #CruzRoja',
    'Cruz Roja de #Uruguay: http://www.cruzrojauruguaya.org/ #CruzRoja',
    'Cruz Roja de #Panamá: http://www.cruzroja.org.pa/ #CruzRoja',
    'Cruz Roja de #Nicaragua: http://cruzrojanicaraguense.org/ #CruzRoja',
    'Cruz Roja de El Salvador: http://www.cruzrojasal.org.sv/ #ElSalvador #CruzRoja',
    '#CruzRoja de #Honduras: http://www.cruzroja.org.hn/',
    '#CruzRoja de #Chile: http://www.cruzroja.cl/',
    'Cruz Roja Guatemalteca: http://www.cruzroja.gt/ #Guatemala #CruzRoja',
    'Ecuatoriano: http://www.cruzroja.org.ec/ #Ecuador #CruzRoja',
    '#Caridad para República Dominicana #RepúblicaDominicana: https://goo.gl/vzjjpR',
    '#CruzRoja de #Cuba: http://www.sld.cu/sitios/cruzroja',
    'Cruz Roja de Costa Rica: http://www.cruzroja.or.cr/ #CostaRica #CruzRoja',
    '#Caridad para #Bolivia: http://www.ayuda.org/',
    'Cruz Roja de #Andorra: http://www.creuroja.ad/ #CruzRoja'
  ];

// RING 3 - other countries

var ring3 = [

    'Cruz Roja Brasileña #CruzRoja: http://cruzvermelha.org.br Centro Familiar: http://bit.ly/28VlSrc #Brasil #Caridad',
    'Cruz Roja de Filipinas: http://redcross.org.ph/ #Filipinas #CruzRoja',
    'Sociedad de la Cruz Roja Nigeriana: http://redcrossnigeria.org/ #Nigeria #CruzRoja',
    'Congo Helping Hands: http://congohelpinghands.org/ #Congo #Caridad',
    'Cruz Roja Italiana: http://cri.it/ #Italia #CruzRoja',
    'Cruz Roja Etíope: http://redcrosseth.org/ #Etiopía #CruzRoja',
    'Cruz Roja Alemana: http://www.drk.de/ #Alemania #CruzRoja',
    'Juventud para Cristo [Sudáfrica]: http://yfc.org.za/ #Sudáfrica #RepublicaDeSudafrica #Caridad',
    'Cruz Roja Francesa: http://www.croix-rouge.fr/ #Francia #CruzRoja',
    'Cruz Roja Polaca: http://www.pck.pl/index.php?lang=en #Polonia #CruzRoja',
    'Cruz Roja de Kenia: http://www.kenyaredcross.org/ #Kenia #CruzRoja',
    'Cruz Roja de Tanzania: http://www.trcs.or.tz/ #Tanzania #CruzRoja',
    'Cruz Roja de China: http://www.redcross.org.cn/ #China #CruzRoja',
    'Cruz Roja de Uganda: http://www.redcrossug.org/ #Uganda #CruzRoja',
    'Cruz Roja India: http://indianredcross.org/ #India #CruzRoja',
    'Sociedad de la Cruz Roja Indonesia: http://www.pmi.or.id/ #Indonesia #CruzRoja',
    'Cruz Roja de Ghana: http://www.redcrossghana.org/ #Ghana #CruzRoja',
    'Cruz Roja Rumana: http://www.crucearosie.ro/ #Rumania #CruzRoja',
    'Cruz Roja de Angola: http://www.cruzvermelha.og.ao/ #Angola #CruzRoja',
    'Donar a Cruz Roja de #Ucrania: Ucrania https://goo.gl/niAr27 #CruzRoja',
    'Cruz Roja Coreana: https://www.redcross.or.kr/esp/eng_main/main.do #Corea #CruzRoja',

    '#Caridad de #Camerún: http://www.idealist.org/view/org/8WbKBhBbx874/',
    '#Caridad para #Mozambique #https://goo.gl/SqMbSU',
    '#Caridad para #Zambia: https://goo.gl/L6mt1K',
    '#Caridad para #Malawi: https://goo.gl/ouh5qK',
    '#Caridad para #Zimbabwe: https://goo.gl/bmDftq',
    'Cruz Roja #Helénica: http://www.redcross.gr/ #Grecia #CruzRoja',
    '#CruzRoja de #Portugal: http://www.cruzvermelha.pt/',
    '#CruzRoja de #Ruanda: http://www.rwandaredcross.org/',
    '#CruzRoja de #Haití: http://www.croixrouge.ht/',
    'Cresta Roja de #Egipto: http://egyptianrc.org/ #CrecienteRoja',
    '#Caridad para #Madagascar: http://helpmg.org/',
    '#CruzRoja de #Burundi: http://www.croixrougeburundi.org/',
    'Cruz Roja de #Serbia: http://www.redcross.org.rs/ #CruzRoja',
    '#Caridad para Cote d\'Ivoire #CoteDIvoire: http://www.icmrt.org/',
    '#CruzRoja de #Vietnam: http://redcross.org.vn/',
    '#CruzRoja de #Bélgica: http://www.redcross.be/',
    '#Caridad para Papua Nueva Guinea #PapúaNuevaGuinea: https://goo.gl/Gx0a0n',
    '#CruzRoja de #Bulgaria: http://es.redcross.bg/',
    '#CruzRoja de #Suecia: http://www.redcross.se/',
    '#Caridad de #Austria: http://www.charity-charities.org/Austria-charities/Vienna.html',
    '#CruzRoja del Sur de Sudán #SudánDelSur: http://southsudanredcross.org/',
    'Cruz Roja en Países Bajos: http://www.rodekruis.nl/ #PaísesBajos #CruzRoja',
    'Cruz Roja #Suiza: http://www.redcross.ch/ #Suiza #CruzRoja',
    'Cruz Roja de #Letonia: http://www.redcross.lv/es/ #CruzRoja',
    'Cruz Roja de #Belarús: http://redcross.by/ #CruzRoja',
    'Cruz Roja de #Hungría: http://www.voroskereszt.hu/ #CruzRoja',
    'Cruz Roja de #Eslovaquia: http://www.redcross.sk/ #CruzRoja',
    'Cruz Roja en #Dinamarca: http://www.rodekors.dk/ #CruzRoja',
    '#Caridad para #Chad: http://www.chadnow.com/chad_links/chad_aid_links.php',
    'Creciente Roja de #Kazajstán #CrecienteRoja: http://www.redcrescent.kz/',
    'Cruz Roja de #Finlandia: http://www.redcross.fi/ #CruzRoja',
    'Cruz Roja de #Croacia: http://www.hck.hr/ #CruzRoja',


    //  Switzerland,
    // Belarus, Hungary, Nicaragua, El Salvador, Slovakia, Denmark, Chad, Kazakhstan, Finland, Croatia, 
    //Ireland, Benin, Georgia, Costa Rica, Puerto Rico, Norway, Myanmar, Burkina Faso,

    'Cruz Roja de #Irlanda : http://www.redcross.ie/ #CruzRoja',
    'Cruz Roja de #Benin: http://croixrougebenin.afredis.com/ #CruzRoja',
    'Cruz Roja de #Georgia: http://redcross.ge/ #CruzRoja',
    'Cruz Roja de #Noruega: http://www.rodekors.no/ #CruzRoja',
    'Cruz Roja de #Myanmar: http://www.redcross.org.mm/ #CruzRoja',
    'Cruz Roja de Burkina Faso #BurkinaFaso: http://www.croixrougebf.org/ #CruzRoja',
    'Cruz Roja de #Moldavia: http://redcross.md/ #CruzRoja',
    // 'República del Congo', // ya ...
    'Cruz Roja de #Japón: http://www.jrc.or.jp/ #CruzRoja',
    'Cruz Roja de #Lituania: http://www.redcross.lt/ #CruzRoja',
    'Cruz Roja de #Armenia: http://redcross.am/ #CruzRoja',
    '#Caridad para #Malasia: http://www.malaysiancare.org/',
    '#Caridad para #Pakistán: http://christiandevelopmentpakistan.org/',
    '#Caridad para la República Centroafricana #RepúblicaCentroafricana: https://goo.gl/HucaYG',
    'Cruz Roja de #Namibi: http://www.redcross.org.na/ #CruzRoja',
    '#Caridad para #Togo: https://goo.gl/hIIrNH',
    'Cruz Roja de #Lesotho: http://www.redcross.org.ls/ #CruzRoja',
    'Cruz Roja de Nueva Zelanda #NuevaZelanda: http://www.redcross.org.nz/ #CruzRoja',
    'Creciente Roja de #Siria #CrecienteRoja: http://www.sarc.sy/',
    // Moldova, Congo, Republic of [already in ring2], Panama, Japan, Eritrea, Lithuania,
    // Armenia, Malaysia, Pakistan, Central African Republic, Namibia, Togo, Uruguay,
    // Lesotho, New Zealand, Syria, 
    
    'Cruz Roja de #Jamaica: http://jamaicaredcross.org/ #CruzRoja',
     'Cruz Roja de Bosnia y Herzegovina #BosniaHerezegovina: http: ///www.rcsbh.org/ #CruzRoja',
     'Cruz Roja de #Eslovenia: http://www.rks.si/ #CruzRoja',
     '#Caridad para la #Líbano: http://www.lccm.us/',
     'Cruz Roja de #Letonia: http://www.redcross.lv/es/ #CruzRoja',
     'Cruz Roja de Sri Lanka: http://www.redcross.lk/ #SriLanka #CruzRoja',
     '#Caridad para la #Botswana: http://bocaip.org.bw/',
     '#Caridad para #Liberia: http://berkleycenter.georgetown.edu/organizations/liberian-council-of-churches',
     'Cruz Roja de #Macedonia: http://www.ckrm.org.mk/ #CruzRoja',

    //Jamaica, Bosnia and Herzegovina, Slovenia, Lebanon,
    // Latvia, Sri Lanka, Saudi Arabia, Botswana, Liberia, Macedonia, Republic of, 
    /*Czech Republic,*/ 
    'Cruz Roja Checa: http://www.cervenykriz.eu/ #RepúblicaCheca #CruzRoja',
    'Cruz Roja de Timor Oriental #TimorOriental: http://www.redcross.tl/ #CruzRoja',
    'Cruz Roja de #Gabón: http://croixrouge-gabon.org/ #CruzRoja',
    '#Caridad para #Guinea: https://goo.gl/4CQyx8',
    'Cruz Roja de #Swazilandia: http://redcross.org.sz/ #CruzRoja',
    'Creciente Roja de #Iraq #CrecienteRoja: http://www.ircs.org.iq/',
    'Creciente Roja de los Emiratos Arabes Unidos #EmiratosÁrabesUnidos #CrecienteRoja: http://www.rcuae.ae/',
    'Cruz Roja de #Singapur: https://www.redcross.sg/ #CruzRoja',
    'Cruz Roja de #Chipre: http://www.redcross.org.cy/en/home #CruzRoja',
    'Cruz Roja de Hong Kong #HongKong: http://redcross.org.hk #CruzRoja',
    'Cruz Roja de #Tailandia: https://english.redcross.or.th/ #CruzRoja',
    '#Caridad para Trinidad y Tobago #TrinidadYTobago: https://goo.gl/l57Ue1',
    'Creciente Roja de #Uzbekistán #CrecienteRoja: http://redcrescent.uz/',
    //' Guinea Ecuatorial',
    '#Caridad para #SierraLeona https://goo.gl/jwwLiY',
    'Creciente Roja de #Kirguistán #CrecienteRoja: http://www.redcrescent.kg/',
    '#Caridad para #Albania: http://www.kksh.org.al/',
    'Cruz Roja de #Senegal: http://www.croixrougesenegal.com/ #CruzRoja',
    'Cruz Roja de #Fiji: http://www.redcross.com.fj/ #CruzRoja',
    '#Caridad para #Sudán https://goo.gl/9fykQb',
    '#Caridad para #Montenegro: http://www.ckcg.co.me/',
    '#Caridad para Cabo Verde #CapeVerde: https://goo.gl/5DbtM6',
    '#Caridad para #Turkmenistán https://goo.gl/Zhsvsc',
    'Creciente Roja de #Kuwait #CrecienteRoja: http://krcs.org.kw/',

    // East Timor, Gabon, Guinea, Swaziland, Iraq, United Arab Emirates, Singapore, Cyprus,
    // Hong Kong, Thailand, Trinidad and Tobago, Uzbekistan, Equatorial Guinea, Sierra Leone,
    // Kyrgyzstan, Albania, Senegal, Fiji, Sudan, Montenegro, Cape Verde, Turkmenistan, Kuwait,
    /* Guyana*/ 
    'Cruz Roja en Guyana: http://guyanaredcross.org.gy/ #Guyana #CruzRoja',
    'Creciente Roja de #Bangladesh #CrecienteRoja: http://www.bdrcs.org/',
    '#Caridad para #Mauricio https://goo.gl/NUpkTd',
    '#Caridad para Corea del Norte #CoreaDelNorte: http://www.helpinghandskorea.org/',
    'Cruz Roja de #Malta: http://www.redcross.org.mt/ #CruzRoja',
    'Creciente Roja de #Jordania #CrecienteRoja: http://www.jnrcs.org/',
    '#Caridad para #Argelia: http://www.cra-algerie.org/',
    'Creciente Roja de #Irán #CrecienteRoja: http://www.rcs.ir/',
    'Cruz Roja de #Luxemburgo: http://www.croix-rouge.lu/en/ #CruzRoja',
    'Cruz Roja de #Malí: http://www.croixrouge-mali.org/ #CruzRoja',
    'Creciente Roja de #Marruecos #CrecienteRoja: http://www.croissant-rouge.ma/',
    'Cruz Roja de #Estonia: http://www.redcross.ee/ #CruzRoja',
    'Creciente Roja de #Azerbaiyán #CrecienteRoja: http://www.redcrescent.az/',
    'Cruz Roja de #Islandia: http://www.redcross.is/ #CruzRoja',
    'Cruz Roja de #Bahamas: http://www.bahamasredcross.com/ #CruzRoja',
    'Creciente Roja de #Nepal #CrecienteRoja: http://www.nrcs.org/',
    'Creciente Roja de #Qatar #CrecienteRoja: http://www.qrcs.org.qa/',
    '#Caridad para #Suriname: https://goo.gl/BPsz9U',
    '#Caridad para #Belice: https://goo.gl/ILXLDt',
    '#Caridad para #Barbados: http://www.barbadosyp.com/Barbados/Charitable-Organisations',
    'Creciente Roja de #Bahrein #CrecienteRoja: http://www.rcsbahrain.org/',
    '#Caridad para #Omán: https://goo.gl/P9hqeW',
    '#Caridad para #Libia: https://www.libyahumanaid.org/',
    '#Caridad para Guinea-Bissau #GuineaBissau: https://goo.gl/JrWyk6',
    'Cruz Roja de #Camboya: http://www.redcross.org.kh/index.php?lang=es #CruzRoja',
    'Cruz Roja de #Laos: http://www.laoredcross.org.la/en/ #CruzRoja',
    'Creciente Roja de #Turquía #CrecienteRoja: http://www.kizilay.org.tr/',
    'Creciente Roja de #Tayikistán #CrecienteRoja: http://www.redcrescent.tj/',
    '#Caridad para #Micronesia: http://www.habele.org/',
    'Cruz Roja de #Granada: http://www.grenadaredcross.org/ #CruzRoja',
    'Cruz Roja de #Aruba: http://redcrossaruba.com/ #CruzRoja',
    '#Caridad para #Níger: https://goo.gl/QNi7hC',
    'Cruz Roja de #Tonga: http://www.tongaredcross.com/ #CruzRoja',
    'Cruz Roja de #Seychelles: www.seychellesredcross.sc/ #CruzRoja',
    'Cruz Roja de Samoa Americana #SamoaAmericana: https://redcross.wordpress.com/tag/american-samoa/ #CruzRoja',
    '#Caridad para Antigua y Barbuda #AntiguaYBarbuda: https://goo.gl/eeNFnN',
    '#Caridad para #Dominica: https://goo.gl/yJBRvc',
    'Cruz Roja de #Mongolia: http://www.redcross.mn/ #CruzRoja',
    '#Caridad para #Groenlandia: https://goo.gl/J5pnNU',
    'Creciente Roja de #Djibouti #CrecienteRoja: http://www.redcrescent-dj.org/',
    '#Caridad para #Brunei: https://goo.gl/P7ccRU',
    'Cruz Roja de #Bermuda: www.bermudaredcross.com/ #CruzRoja',
    'Cruz Roja de las Islas Caimán #IslasCaimán: www.redcross.org.ky/ #CruzRoja',

    // 'Here should be charity for Faroe Islands',
    'Cruz Roja de #Liechtenstein: http://www.roteskreuz.li/ #CruzRoja',
    'Cruz Roja de #Mónaco: http://www.croix-rouge.mc/ #CruzRoja',
    'Creciente Roja de #Túnez: http://www.crt.tn/',
    '#Caridad para #Yemen: http://www.zakat.org/country/yemen/',
    // '#Caridad para #BritishIslands: https://goo.gl/0pRJVN', - parte de U.K.
    '#Caridad para Islas Cook #Islas Cook: http://cookfoundation.org/',
    '#Caridad para #Palau: https://goo.gl/Id7lKD',
    // '#Caridad para #Anguilla: https://charitylook.org/city/anguilla/', aquí es de Mississippi de los EE.UU.
    '#Caridad para #Comoros: http://www.comoroscharity.org/',
    '#Caridad para #Bhután: https://goo.gl/DRHEHH',
    'Creciente Roja de #Afganistán #CrecienteRoja: http://www.redcrescent.af/',
    '#Caridad para #Mauritania: https://goo.gl/XK81gO',
    '#Caridad para Islas Falkland #IslasFalkland: http://www.falklandsconservation.com/',
    '#Caridad para #Somalia: https://goo.gl/1Bn35T',
    'Creciente Roja de #Maldivas #CrecienteRoja: https://redcrescent.org.mv/'
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

'#Bible para #Mexico en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Mexico&language=Spanish',
'#Biblia para #Venezuela en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Venezuela&language=Spanish',
'#Biblia para #Argentina en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Argentina&language=Spanish',
'#Biblia para #Uruguay en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Uruguay&language=Spanish',
'#Biblia para #España en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Spain&language=Spanish',
'#Biblia para #PuertoRico en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Puerto%20Rico&language=es',
'#Biblia para #Perú en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Peru&language=Spanish',
'#Biblia para #Paraguay en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Paraguay&language=Spanish',
'#Biblia para #Panamá en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Panama&language=Spanish',
'#Biblia para #Nicaragua en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Nicaragua&language=Spanish',
'#Bible para #Honduras en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Honduras&language=Spanish',
'#Bible para #Guatemala en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Guatemala&language=Spanish',
'#Biblia para #ElSalvador en #Español: gold-bible.16mb.com/?b_code=spaRV1909&country=El%20Salvador&language=es',
'#Bible para #Ecuador en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Ecuador&language=Spanish',
'#Biblia para #RepúblicaDominicana en #Español: gold-bible.16mb.com/?b_code=spaRV1909&country=do&language=es',
'#Biblia para #Cuba en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Cuba&language=Spanish',
'#Biblia para #CostaRica en #Español: gold-bible.16mb.com/?b_code=spaRV1909&country=Costa%20Rica&language=Spanish',
'#Biblia para #Colombia en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Colombia&language=Spanish',
'#Biblia para #Chile en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Chile&language=Spanish',
'#Biblia para #Bolivia en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Bolivia&language=Spanish',
'#Biblia para #Andorra en #Español: http://gold-bible.16mb.com/?b_code=spaRV1909&country=Andorra&language=Spanish'
];

var bible_index = 0;

var twit = require('twit');

var gbo_es = new twit({
  consumer_key:         '6meOI28FiDcTXUuDyyNFJEsJl',
  consumer_secret:      '9hIJnHMkTpO7V3Mds3yXRZyI4AeHPvIDPN16oEfGcvixpYmZI7',
  access_token:         '854762332383309825-G5E2D8z6MfZZd7UasbPuNn8WNmeLiai',
  access_token_secret:  'q6AfiMwAlxMVBmP3JV05LgRvcF8MhKp9Rg8EJ5K06xksu'
});


function tweet_ring0()
{
                var date = new Date();

                if (ring0_index == ring0.length) ring0_index = 0;

                gbo_es.post(
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

                gbo_es.post(
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

                gbo_es.post(
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

                gbo_es.post(
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

                gbo_es.post(
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
                gbo_es.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  "@Biblia_de_Oro con vínculos de caridad está buscando un propietario. Gold-Bible.16mb.com @" + stars[star_index]+ "\n"
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
        var tweet_text = 'Únete a la comunidad de apoyo caritativo PoRT youtu.be/-o5Y3GAN6Es #Biblia #CruzRoja charity-port.16mb.com [Inglés]';
        var date = new Date();

                                gbo_es.post(
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

        gbo_es.post(
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
  var tweet_text = "#VPS #SSD @DigitalOcean. USD 10: https://m.do.co/t/59b1f2d44f9f";
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
  var tweet_text = "#WebHosting : http://bit.ly/2mdj0dC";
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
  var donation_tweet = "for blood donations... ";
  var date = new Date();
  
                gbo_es.post(
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
  var tweet_text = "¿Quieres aprender el idioma? #AprenderElIdioma https://youtu.be/7c9fwykj6EQ https://goo.gl/B3JXnq [Inglés]";
  var date = new Date();
  
                gbo_es.post(
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
  var tweet = "Citas de la Biblia, Salmos, proverbios. #Biblia #SantaBiblia  #Proverbios @Biblia_de_Oro gold-bible.16mb.com";
                gbo_es.post(
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
        setInterval(tweet_star, 60 * 60 * 1000 * 5 - 10000);

        setInterval(tweet_ring0, 0.95 * 3 * 59 * 60 * 1000);
        setInterval(tweet_ring1, 0.93 * 3 * 58 * 60 * 1000);
        setInterval(tweet_ring2, 0.92 * 3 * 57 * 60 * 1000);
        setInterval(tweet_ring3, 0.91 * 3 * 56 * 60 * 1000);

        setInterval(tweet_promo, 5 * 60 * 60 * 1000);
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
    ES Version

    http://gold-bible.16mb.com/

    @Biblia_de_Oro


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



