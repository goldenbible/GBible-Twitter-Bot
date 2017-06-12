// ZH version of Twitter Bot

var stars = ['@eni', '@EnelGroup', '@UniCredit_PR', '@VediamoPositivo', '@IntesaSP_Help', '@TIM_Official']; // with @
// RING 0 - country of origin of the idea - RU - is tweeting almost hourly
// in function tweet_ring0; they do not have English Twitter for auto-retweets


var twit = require('twit');

var gbo_it = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '' // liars go to hell
});

// RING 0
var ring0 = [
    /* Israel */
'Israele dà: http://www.israelgives.org/ #Israel #Carità',
     /* Città del Vaticano */
     'Carità del Papa [Vaticano]: https://goo.gl/K3zVIF http://www.catholicparents.org/ #Vaticano #Carità',
     'Carità per la Russia: http://www.evansnyc.com/charity/ #Charity #Russia'
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [
        // American
        'Donare alla Croce Rossa Americana [#SUA]: https://www.redcross.org/donate/donation #CroceRossa #StatiUniti',
        // British
        'Donare alla Croce Rossa Britannica: http://www.redcross.org.uk/Donate-Now #CroceRossa #RegnoUnito #GranBretagna',
        // MYBlood
        //'PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org #Orlando',
        // Canadian
        'Donare alla Croce Rossa Canadese: http://www.redcross.ca/donate #CroceRossa #Canada',
        // Swiss ICRC
        'Donare alla CICR: https://www.icrc.org/en/donate #CroceRossa #ICRC',
        // IFRC
        'Donare alla IFRC: http://www.ifrc.org/ #IFRC #MezzalunaRossa #CroceRossa',
        // Australian
        'Donare alla Croce Rossa Australiana: http://www.redcross.org.au/donate.aspx #CroceRossa #Australia'
        ];

// tweet char limit - 120 - rest is for datetime stamp
// RING 2 - 
var ring2 = [
    'Croce Rossa della Italia: http://cri.it/ #Italia #CroceRossa',
    'Croce Rossa della Svizzera: http://www.redcross.ch/ #Svizzera #CroceRossa'
  ];

// RING 3 - other countries

var ring3 = [
'CroceRossa brasiliana brasiliana: https://goo.gl/cX7xcr Family Center: http://bit.ly/28VlSrc #Brasile #Carità',
    'Croce Rossa Messicana: http://cruzrojamexicana.org.mx/ #Messico #CroceRossa',
    'Croce Rossa delle Filippine: http://redcross.org.ph/ #Filippine #CroceRossa',
    'Società della Croce Rossa nigeriana: http://redcrossnigeria.org/ #Nigeria #CroceRossa',
    'Congo aiutare le mani: http://congohelpinghands.org/ #Congo #Carità',
    'Società della Croce Rossa etiopica: http://redcrosseth.org/ #Etiopia #CroceRossa',
    'Croce Rossa tedesca: http://www.drk.de/ #Germania #CroceRossa',
    'Croce Rossa colombiana: http://www.cruzrojacolombiana.org/ #Colombia #CroceRossa',
    'Gioventù per Cristo [Sudafrica]: http://yfc.org.za/ #SudAfrica #RepubblicaDelSudAfrica #Carità',
    'Croce Rossa argentina: http://www.cruzroja.org.ar/ #Argentina #CroceRossa',
    'Croce Rossa Francese: http://www.croix-rouge.fr/ #Francia #CroceRossa',
    'Croce Rossa Polacca: http://www.pck.pl/index.php?lang=it #Polonia #CroceRossa',
    'Kenya Cross Society: http://www.kenyaredcross.org/ #Kenia #CroceRossa',
    'Croce Rossa spagnola: http://www.cruzroja.es/ #Spagna #CroceRossa',
    'La società della Croce Rossa della Tanzania: http://www.trcs.or.tz/ #Tanzania #CroceRossa',
    'Croce Rossa della Cina: http://www.redcross.org.cn/ #Cina #CroceRossa',
    'Croce Rossa dell Uganda: http://www.redcrossug.org/ #Uganda #CroceRossa',
    'Croce Rossa Indiana: http://indianredcross.org/ #India #CroceRossa',
    'CroceRossa croce rossa venezuelana: http://www.cruzrojavenezolana.org/ Carità a #Venezuela: http://bit.ly/29ydNLR',
    'Croce Rossa in Perù: http://www.cruzroja.org.pe/ #Perù #CroceRossa',
    'Società croata rossa indonesiana: http://www.pmi.or.id/ #Indonesia #CroceRossa',
    'Croce Rossa del Ghana: http://www.redcrossghana.org/ #Ghana #CroceRossa',
    'Croce Rossa Rumena: http://www.crucearosie.ro/ #Romania #CroceRossa',

    'Angola Croce Rossa: http://www.cruzvermelha.og.ao/ #Angola #CroceRossa',
     'Dona alla Croce Rossa ucraina: http://gold-bible.com/donate-to-ua.html #Ucraina #CroceRossa',
     'Croce Rossa Coreana: https://www.redcross.or.kr/eng/eng_main/main.do #Corea #CroceRossa',


    'Ecuadoriano: http://www.cruzroja.org.ec/ #Ecuador #CroceRossa',
    'Croce Rossa Guatemala: http://www.cruzroja.gt/ #Guatemala #CroceRossa',
    '#Carità per #Camerun: http://www.idealist.org/view/org/8WbKBhBbx874/',
    '#Carità per #Mozambico #https://goo.gl/SqMbSU',
    '#Carità per #Zambia: https://goo.gl/L6mt1K',
    '#Carità per #Malawi: https://goo.gl/ouh5qK',
    '#Carità per #Zimbabwe: https://goo.gl/bmDftq',
    'Croce Rossa ellenica: http://www.redcross.gr/ #Grecia #CroceRossa',
    '#CroceRossa di #Portogallo: http://www.cruzvermelha.pt/',
    '#CroceRossa di #Cile: http://www.cruzroja.cl/',
    '#Carità per la Repubblica Dominicana #RepubblicaDominicana: https://goo.gl/vzjjpR',
    '#Carità per #Bolivia: http://www.ayuda.org/',
    '#CroceRossa di #Ruanda: http://www.rwandaredcross.org/',
    '#CroceRossa di #Haiti: http://www.croixrouge.ht/',
    'Cresent rosso di #Egitto: http://egyptianrc.org/ #MezzalunaRossa',
    '#Carità per #Madagascar: http://helpmg.org/',
    '#CroceRossa di #Burundi: http://www.croixrougeburundi.org/',
    'Croce Rossa di Serbia: http://www.redcross.org.rs/ #CroceRossa',
    '#Carità per Costa d\'Avorio #CostadAvorio: http://www.icmrt.org/',
    '#CroceRossa di #Vietnam: http://redcross.org.vn/',

    '#CroceRossa di #Belgio: http://www.redcross.be/',
    '#Carità per Papua Nuova Guinea #PapuaNewGuinea: https://goo.gl/Gx0a0n',
    '#CroceRossa di #Cuba: http://www.sld.cu/sitios/cruzroja',
    '#CroceRossa di #Honduras: http://www.cruzroja.org.hn/',
    '#CroceRossa di #Bulgaria: http://en.redcross.bg/',
    '#CroceRossa di #Svezia: http://www.redcross.se/',
    'Croce Rossa in #Paraguay: http://www.cruzroja.org.py/ #CroceRossa',
    '#Carità per #Austria: http://www.charity-charities.org/Austria-charities/Vienna.html',
    '#CroceRossa del Sud Sudan #SudanDelSud: http://southsudanredcross.org/',
    'Croce Rossa in Olanda: http://www.rodekruis.nl/ #Paesi Bassi #Olanda #CroceRossa',
    'Croce Rossa di #Lettonia: http://www.redcross.lv/it/ #CroceRossa',
    'Croce Rossa di #Bielorussia: http://redcross.by/ #CroceRossa',
    'Croce Rossa di #Ungheria: http://www.voroskereszt.hu/ #CroceRossa',
    'Croce Rossa di Nicaragua: http://cruzrojanicaraguense.org/ #Nicaragua #CroceRossa',
    'Croce Rossa di El Salvador: http://www.cruzrojasal.org.sv/ #ElSalvador #CroceRossa',
    'Croce Rossa di #Slovacchia: http://www.redcross.sk/ #CroceRossa',
    'Croce Rossa in #Danimarca: http://www.rodekors.dk/ #CroceRossa',
    '#Carità per #Chad: http://www.chadnow.com/chad_links/chad_aid_links.php',
    'Mezzaluna Rossa di #Kazakistan #MezzalunaRossa: http://www.redcrescent.kz/',
    'Croce Rossa di #Finlandia: http://www.redcross.fi/ #CroceRossa',
    'Croce Rossa di #Croazia: http://www.hck.hr/ #CroceRossa',

    //  Switzerland,
    // Belarus, Hungary, Nicaragua, El Salvador, Slovakia, Denmark, Chad, Kazakhstan, Finland, Croatia, 
    //Ireland, Benin, Georgia, Costa Rica, Puerto Rico, Norway, Myanmar, Burkina Faso,
    'Croce Rossa di #Irlanda: http://www.redcross.ie/ #CroceRossa',
     'Croce Rossa di #Benin: http://croixrougebenin.afredis.com/ #CroceRossa',
     'Croce Rossa di #Georgia: http://redcross.ge/ #CroceRossa',
     'Croce Rossa del Costa Rica: http://www.cruzroja.or.cr/ #CostaRica #CroceRossa',
     'Croce Rossa di #Norvegia: http://www.rodekors.no/ #CroceRossa',
     'Croce Rossa di #Myanmar: http://www.redcross.org.mm/ #CroceRossa',
     'Croce Rossa del Burkina Faso #BurkinaFaso: http://www.croixrougebf.org/ #CroceRossa',
     'Croce Rossa di #Moldova: http://redcross.md/ #CroceRossa',

    //'Republic of Congo', // already...
    'Croce Rossa di #Panama: http://www.cruzroja.org.pa/ #CroceRossa',
     'Croce Rossa di #Giappone: http://www.jrc.or.jp/ #CroceRossa',
     'Croce Rossa di #Lituania: http://www.redcross.lt/ #CroceRossa',
     'Croce Rossa di #Armenia: http://redcross.am/ #CroceRossa',
     '#Carità per #Malaysia: http://www.malaysiancare.org/',
     '#Carità per #Pakistan: http://christiandevelopmentpakistan.org/',
     '#Carità per la Repubblica Centrafricana #RepubblicaCentrafricana: https://goo.gl/HucaYG',
     'Croce Rossa di #Namibia: http://www.redcross.org.na/ #CroceRossa',
     '#Carità per #Togo https://goo.gl/hIIrNH',
     'Croce Rossa di #Uruguay: http://www.cruzrojauruguaya.org/ #CroceRossa',
     'Croce Rossa di #Lesotho: http://www.redcross.org.ls/ #CroceRossa',
     'Croce Rossa della Nuova Zelanda #Nuova Zelanda: http://www.redcross.org.nz/ #CroceRossa',
     'Mezzaluna rossa di #Siria #MezzalunaRossa: http://www.sarc.sy/',

    // Moldova, Congo, Republic of [already in ring2], Panama, Japan, Eritrea, Lithuania,
    // Armenia, Malaysia, Pakistan, Central African Republic, Namibia, Togo, Uruguay,
    // Lesotho, New Zealand, Syria, 
    
    'Croce Rossa di #Giamaica: http://jamaicaredcross.org/ #CroceRossa',
     'Croce Rossa della Bosnia-Erzegovina #BosniaErzegovina: http: ///www.rcsbh.org/ #CroceRossa',
     'Croce Rossa di #Slovenia: http://www.rks.si/ #CroceRossa',
     '#Carità per #Lebanon: http://www.lccm.us/',
     'Croce Rossa di #Lettonia: http://www.redcross.lv/it/ #CroceRossa',
     'Croce Rossa dello Sri Lanka: http://www.redcross.lk/ #SriLanka #CroceRossa',
     '#Carità per #Botswana: http://bocaip.org.bw/',
     '#Carità per #Liberia: http://berkleycenter.georgetown.edu/organizations/liberian-council-of-churches',
     'Croce Rossa di #Macedonia: http://www.ckrm.org.mk/ #CroceRossa',

    //Jamaica, Bosnia and Herzegovina, Slovenia, Lebanon,
    // Latvia, Sri Lanka, Saudi Arabia, Botswana, Liberia, Macedonia, Republic of, 
    /*Czech Republic,*/ 
    'Croce Rossa #Ceca: http://www.cervenykriz.eu/ #Repubblica Ceca #CroceRossa',
     'Croce Rossa di Timor Est #TimorEst: http://www.redcross.tl/ #CroceRossa',
     'Croce Rossa di #Gabon: http://croixrouge-gabon.org/ #CroceRossa',
     '#Carità per #Guinea: https://goo.gl/4CQyx8',
     'Croce Rossa di #Swaziland: http://redcross.org.sz/ #CroceRossa',
     'Mezzaluna Rossa di #Iraq #MezzalunaRossa: http://www.ircs.org.iq/',
     'Mezzaluna Rossa degli Emirati Arabi Uniti #EmiratiArabiUniti #MezzalunaRossa: http://www.rcuae.ae/',
     'Croce Rossa di #Singapore: https://www.redcross.sg/ #CroceRossa',
     'Croce Rossa di #Cipro: http://www.redcross.org.cy/it/home #CroceRossa',
     'Croce Rossa di Hong Kong #HongKong: http://redcross.org.hk #CroceRossa',
     'Croce Rossa di #Thailandia: https://english.redcross.or.th/ #CroceRossa',
     '#Carità per Trinidad e Tobago #TrinidadETobago: https://goo.gl/l57Ue1',
     'Mezzaluna Rossa di #Uzbekistan #MezzalunaRossa: http://redcrescent.uz/',

    //' Equatorial Guinea',
    '#Carità per #SierraLeone https://goo.gl/jwwLiY',
     'Mezzaluna Rossa di #Kirghizistan #MezzalunaRossa: http://www.redcrescent.kg/',
     '#Carità per #Albania: http://www.kksh.org.al/',
     'Croce Rossa di #Senegal: http://www.croixrougesenegal.com/ #CroceRossa',
     'Croce Rossa di #Fiji: http://www.redcross.com.fj/ #CroceRossa',
     '#Carità per #Sudan https://goo.gl/9fykQb',
     '#Carità per #Montenegro: http://www.ckcg.co.me/',
     '#Carità per Capo Verde #CapoVerde: https://goo.gl/5DbtM6',
     '#Carità per #Turkmenistan https://goo.gl/Zhsvsc',
     'Mezzaluna Rossa di #Kuwait #MezzalunaRossa: http://krcs.org.kw/',

    // East Timor, Gabon, Guinea, Swaziland, Iraq, United Arab Emirates, Singapore, Cyprus,
    // Hong Kong, Thailand, Trinidad and Tobago, Uzbekistan, Equatorial Guinea, Sierra Leone,
    // Kyrgyzstan, Albania, Senegal, Fiji, Sudan, Montenegro, Cape Verde, Turkmenistan, Kuwait,
    /* Guyana*/ 
    'Croce Rossa di Guyana: http://guyanaredcross.org.gy/ #Guyana #CroceRossa',
    'Mezzaluna Rossa di #Bangladesh #MezzalunaRossa: http://www.bdrcs.org/',
    '#Carità per #Mauritius https://goo.gl/NUpkTd',
    '#Carità per la Corea del Nord #CoreaDelNord: http://www.helpinghandskorea.org/',
    'Croce Rossa di #Malta: http://www.redcross.org.mt/ #CroceRossa',
    'Mezzaluna Rossa di #Giordania #MezzalunaRossa: http://www.jnrcs.org/',
    '#Carità per #Algeria: http://www.cra-algerie.org/',
    'Mezzaluna Rossa di #Iran #MezzalunaRossa: http://www.rcs.ir/',
    'Croce Rossa di #Lussemburgo: http://www.croix-rouge.lu/it/ #CroceRossa',
    'Croce Rossa di #Mali: http://www.croixrouge-mali.org/ #CroceRossa',
    'Mezzaluna rossa di #Marocco #MezzalunaRossa: http://www.croissant-rouge.ma/',
    'Croce Rossa di #Estonia: http://www.redcross.ee/ #CroceRossa',
    'Mezzaluna Rossa di #Azerbaigian #MezzalunaRossa: http://www.redcrescent.az/',
    'Croce Rossa di #Islanda: http://www.redcross.is/ #CroceRossa',
    'Croce Rossa di #Bahamas: http://www.bahamasredcross.com/ #CroceRossa',
    'Mezzaluna Rossa di #Nepal #MezzalunaRossa: http://www.nrcs.org/',
    'Mezzaluna Rossa di #Qatar #MezzalunaRossa: http://www.qrcs.org.qa/',
    '#Carità per #Suriname: https://goo.gl/BPsz9U',
    '#Carità per #Belize: https://goo.gl/ILXLDt',
    '#Carità per #Barbados: http://www.barbadosyp.com/Barbados/Charitable-Organisations',
    'Mezzaluna Rossa di #Bahrain #MezzalunaRossa: http://www.rcsbahrain.org/',
    '#Carità per #Oman: https://goo.gl/P9hqeW',

    '#Carità per #Libia: https://www.libyahumanaid.org/',
    '#Carità per Guinea-Bissau #GuineaBissau: https://goo.gl/JrWyk6',
    'Croce Rossa di #Cambogia: http://www.redcross.org.kh/index.php?lang=it #CroceRossa',
    'Croce Rossa di #Laos: http://www.laoredcross.org.la/en/ #CroceRossa',
    'Mezzaluna rossa di #Turchia #MezzalunaRossa: http://www.kizilay.org.tr/',
    'Mezzaluna rossa di #Tagikistan #MezzalunaRossa: http://www.redcrescent.tj/',
    '#Carità per #Micronesia: http://www.habele.org/',
    'Croce Rossa di #Grenada: http://www.grenadaredcross.org/ #CroceRossa',
    'Croce rossa di #Aruba: http://redcrossaruba.com/ #CroceRossa',
    '#Carità per #Niger: https://goo.gl/QNi7hC',
    'Croce Rossa di #Tonga: http://www.tongaredcross.com/ #CroceRossa',
    'Croce Rossa di #Seychelles: www.seychellesredcross.sc/ #CroceRossa',
    'Croce rossa di #Andorra: http://www.creuroja.ad/ #Croce rossa',
    'Croce Rossa di Samoa Americane #SamoaAmericane: https://redcross.wordpress.com/tag/american-samoa/ #CroceRossa',
    '#Carità per Antigua e Barbuda #AntiguaEBarbuda: https://goo.gl/eeNFnN',
    '#Carità per #Dominica: https://goo.gl/yJBRvc',
    'Croce Rossa di #Mongolia: http://www.redcross.mn/ #CroceRossa',
    '#Carità per #Groenlandia: https://goo.gl/J5pnNU',
    'Mezzaluna Rossa di #Djibouti #MezzalunaRossa: http://www.redcrescent-dj.org/',
    '#Carità per #Brunei: https://goo.gl/P7ccRU',
    'Croce Rossa di #Bermuda: www.bermudaredcross.com/ #CroceRossa',
    'Croce Rossa delle Isole Cayman #IsoleCayman: www.redcross.org.ky/ #CroceRossa',

    // 'Here should be charity for Faroe Islands',
    'Croce Rossa di #Liechtenstein: http://www.roteskreuz.li/ #CroceRossa',
     'Croce Rossa di #Monaco: http://www.croix-rouge.mc/ #CroceRossa',
     'Mezzaluna rossa di #Tunisia #Tunisia: http://www.crt.tn/',
     '#Carità per #Yemen: http://www.zakat.org/country/yemen/',
     '#Carità per le Isole Cook #IsoleCook: http://cookfoundation.org/',
     '#Carità per #Palau: https://goo.gl/Id7lKD',
     '#Carità per #Comore: http://www.comoroscharity.org/',
     '#Carità per #Bhutan: https://goo.gl/DRHEHH',
     'Mezzaluna rossa di #Afghanistan #MezzalunaRossa: http://www.redcrescent.af/',
     '#Carità per #Mauritania: https://goo.gl/XK81gO',
     '#Carità per le Isole Falkland #IsoleFalkland: http://www.falklandsconservation.com/',
     '#Carità per #Somalia: https://goo.gl/1Bn35T',
     'Mezzaluna rossa di #Maldive #MezzalunaRossa: https://redcrescent.org.mv/'

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
'#Bibbia #Vaticano #Italiano: http://gold-bible.16mb.com/?b_code=it-it_http&country=va&language=it',
'#Bibbia #Switzerland #Italiano: http://gold-bible.16mb.com/?b_code=it-it_http&country=Switzerland&language=it',
'#Bibbia #Italy #Italiano: http://gold-bible.16mb.com/?b_code=it-it_http&country=Italy&language=Italian',
];

var quotes = 
[
'Dio infatti ha tanto amato il mondo da dare il suo Figlio unigenito, perché chiunque crede in lui ... #Giovanni 3:16',
'Io, infatti, conosco i progetti che ho fatto a vostro riguardo - dice il Signore - progetti di ... #Geremia 29:11',
'Del resto, noi sappiamo che tutto concorre al bene di coloro che amano Dio, che sono stati chiamati... #Romani 8:28',
'Tutto posso in colui che mi dà la forza. #Filippesi 4:13 #Bibbia',
'In principio Dio creò il cielo e la terra. #Genesi 1:1 #Bibbia',
'Confida nel Signore con tutto il cuore e non appoggiarti sulla tua intelligenza; #Proverbi 3:5 #Bibbia',
'in tutti i tuoi passi pensa a lui ed egli appianerà i tuoi sentieri. #Proverbi 3:6 #Bibbia',
'Non conformatevi alla mentalità di questo secolo, ma trasformatevi rinnovando la vostra mente, per... #Romani 12:2',
'Non angustiatevi per nulla, ma in ogni necessità esponete a Dio le vostre richieste, con preghiere... #Filippesi 4:6',
'Andate dunque e ammaestrate tutte le nazioni, battezzandole nel nome del Padre e del Figlio e... #Matteo 28:19',
'Per questa grazia infatti siete salvi mediante la fede; e ciò non viene da voi, ma è dono di Dio; #Efesini 2:8 #Bibbia',
'Il frutto dello Spirito invece è amore, gioia, pace, pazienza, benevolenza, bontà, fedeltà,.. #Galati 5:22 #Bibbia',
'Vi esorto dunque, fratelli, per la misericordia di Dio, ad offrire i vostri corpi come sacrificio... #Romani 12:1',
'Il ladro non viene se non per rubare, uccidere e distruggere; io sono venuto perché abbiano la vita... #Giovanni 10:10',
'perché io sono con te e nessuno cercherà di farti del male, perché io ho un popolo numeroso... #AttiDegliApostoli 18:10'
];

var quote_index = 0;

var bible_index = 0;


function quote_bible()
{

                var date = new Date();

                if (ring0_index == ring0.length) ring0_index = 0;

                gbo_it.post(
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

                gbo_it.post(
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

                gbo_it.post(
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

                gbo_it.post(
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

                gbo_it.post(
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

                gbo_it.post(
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
                gbo_it.post(
                                                'statuses/update',
                                                {
                                                  status:
                                                  "Il sito della Bibbia sta cercando il proprietario " + stars[star_index]+ "\n"
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
        var tweet_text = 'Unisciti alla comunità di supporto della carità youtu.be/-o5Y3GAN6Es charity-port.16mb.com ';
        var date = new Date();

                                gbo_it.post(
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

        gbo_it.post(
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
  var tweet_text = "#VPS con #SSD @DigitalOcean : https://m.do.co/t/59b1f2d44f9f";
  var date = new Date();

        gbo_it.post(
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
  var tweet_text = "Web Hosting con larghezza di #banda illimitata e spazio su #disco: http://bit.ly/2mdj0dC #WebHosting";
  var date = new Date();
  
        gbo_it.post(
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
  
                gbo_it.post(
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
  var tweet_text = "Come imparare la lingua? gold-bible.16mb.com/?menu=parallelBibles youtu.be/7c9fwykj6EQ goo.gl/B3JXnq";
  var date = new Date();
  
                gbo_it.post(
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
  var tweet = "@BibbiaDorata Citazioni bibliche #CitazioniBibliche, #saggezza, #proverbi. gold-bible.16mb.com";
                gbo_it.post(
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
        setInterval(tweet_star, 60 * 60 * 1000);

        setInterval(tweet_ring0, 0.95 * 3 * 59 * 60 * 1000);
        setInterval(tweet_ring1, 0.93 * 3 * 58 * 60 * 1000);
        setInterval(tweet_ring2, 0.92 * 3 * 57 * 60 * 1000);
        setInterval(tweet_ring3, 0.91 * 3 * 56 * 60 * 1000);

        setInterval(tweet_promo, 5 * 60 * 60 * 1000);
        setInterval(quote_bible, 5 * 60 * 60 * 1000);

        //setInterval(tweet_donation_link, 5 * 60 * 60 * 1000);
        setInterval(tweet_parallel_bibles, 5 * 58 * 60 * 1000);

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
