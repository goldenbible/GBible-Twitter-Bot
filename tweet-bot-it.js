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
  'Israel Gives: http://www.israelgives.org/ #Israel #Charity',
    /* Vatican City  */ 
    'Pope\'s charity [Vatican]: https://goo.gl/K3zVIF http://www.catholicparents.org/ #Vatican #Charity',
    'Charity for Russia: http://www.evansnyc.com/charity/ #Charity #Russia'
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [
        // American
        'Donare alla Croce Rossa Americana [SUA]: https://www.redcross.org/donate/donation #CroceRossa #StatiUniti',
        // British
        'Donare alla Croce Rossa Britannica: http://www.redcross.org.uk/Donate-Now #CroceRossa #RegnoUnito #GranBretagna',
        // MYBlood
        //'PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org #Orlando',
        // Canadian
        'Donare alla Croce Rossa Canadese: http://www.redcross.ca/donate #CroceRossa #Canada',
        // Swiss ICRC
        'Donare alla CICR: https://www.icrc.org/en/donate #CroceRossa #ICRC',
        // IFRC
        'Donare alla IRC: http://www.ifrc.org/ #IRC #MezzalunaRossa #CroceRossa',
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
    'Brazilian Red Cross #RedCross: https://goo.gl/cX7xcr Family Center: http://bit.ly/28VlSrc #Brazil #Charity',
    'Mexican Red Cross: http://cruzrojamexicana.org.mx/ #Mexico #RedCross',
    'Red Cross of Philippines: http://redcross.org.ph/ #Philippines #RedCross',
    'Nigerian Red Cross Society: http://redcrossnigeria.org/ #Nigeria #RedCross',
    'Congo Helping Hands: http://congohelpinghands.org/ #Congo #Charity',
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
    'Donate to Ukrainian Red Cross: http://gold-bible.com/donate-to-ua.html #Ukraine #RedCross',
    'Korean Red Cross: https://www.redcross.or.kr/eng/eng_main/main.do #Korea #RedCross',

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
    'Red Cross in Netherlands: http://www.rodekruis.nl/ #Netherlands #RedCross',
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
    'Red Cross of #Namibia: http://www.redcross.org.na/ #RedCross',
    'Red Cross of #Togo: http://www.croixrouge-togo.org/ #RedCross',
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
    '#Lebanon: http://www.lccm.us/',
    'Red Cross of #Latvia: http://www.redcross.lv/en/ #RedCross',
    'Red Cross of Sri Lanka: http://www.redcross.lk/ #SriLanka #RedCross',
    '#Botswana: http://bocaip.org.bw/',
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
    'Red Cross of Sierra Leone: http://www.sierraleoneredcross.net/ #SierraLeone #RedCross',
    'Red Crescent of #Kyrgyzstan #RedCrescent: http://www.redcrescent.kg/',
    '#Charity for #Albania: http://www.kksh.org.al/',
    'Red Cross of #Senegal: http://www.croixrougesenegal.com/ #RedCross',
    'Red Cross of #Fiji: http://www.redcross.com.fj/ #RedCross',
    'Red Crescent of #Sudan #RedCrescent: http://srcs.sd/',
    '#Charity for #Montenegro: http://www.ckcg.co.me/',
    '#Charity for Cape Verde #CapeVerde: https://goo.gl/5DbtM6',
    'Red Crescent of #Turkmenistan #RedCrescent: https://goo.gl/Zhsvsc',
    'Red Crescent of #Kuwait #RedCrescent: http://krcs.org.kw/',
    // East Timor, Gabon, Guinea, Swaziland, Iraq, United Arab Emirates, Singapore, Cyprus,
    // Hong Kong, Thailand, Trinidad and Tobago, Uzbekistan, Equatorial Guinea, Sierra Leone,
    // Kyrgyzstan, Albania, Senegal, Fiji, Sudan, Montenegro, Cape Verde, Turkmenistan, Kuwait,
    /* Guyana*/ 'Red Cross in Guyana: http://guyanaredcross.org.gy/ #Guyana #RedCross',
    'Red Crescent of #Bangladesh #RedCrescent: http://www.bdrcs.org/',
    'Red Cross of #Mauritius: http://www.mauritiusredcross.org/ #RedCross',
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
