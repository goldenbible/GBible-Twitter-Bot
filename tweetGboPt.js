// Portuguese version of Twitter Bot

var stars = ['LucianoHuck', 'Petrobras', 'itauunibanco_ri', 'BancodoBrasil', 'valenobrasil', 'PortugalTelecom'];
// RING 0 - country of origin of the idea - RU - is tweeting almost hourly
// in function tweet_ring0; they do not have English Twitter for auto-retweets

// RING 0
var ring0 = [
    /* Israel */
'Israel Dá: http://www.israelgives.org/ #Israel #Caridade',
     /* Cidade do Vaticano */
     'Caridade do Papa [Vaticano]: https://goo.gl/K3zVIF http://www.catholicparents.org/ #Vaticano #Caridade',
     'Caridade para a Rússia: http://www.evansnyc.com/charity/ #Caridade #Rússia'
];


// RING 1 - countries which Red Cross organizations are supporting many other countries
var ring1 = [
        // American
        'Doar para a Cruz Vermelha Americana [EUA]: https://www.redcross.org/donate/donation #CruzVermelha #EstadosUnidos',
        // British
        'Doar para Cruz Vermelha Britânica: http://www.redcross.org.uk/Donate-Now #CruzVermelha #ReinoUnido, #GrãBretanha',
        // MYBlood
        //'PLEASE SHARE: Please make an appointment to donate this week. 1.888.936.6283. www.oneblood.org #Orlando',
        // Canadian
        'Doar para Cruz Vermelha Canadiana: http://www.redcross.ca/donate #CruzVermelha #Canadá',
        // Swiss ICRC
        'Doar ao CICV: https://www.icrc.org/en/donate #CruzVermelha #CICV',
        // IFRC
        'Doar para IFRC: http://www.ifrc.org/ #Caridade #IFRC #CruzVermelha #CrescenteVermelho',
        // Australian
        'Doar para a Cruz Vermelha Australiana: http://www.redcross.org.au/donate.aspx #CruzVermelha #Austrália'
        // WER NY
//        'Donate to West Residences: https://donatenow.networkforgood.org/westendnyc
        ];

// tweet char limit - 120 - rest is for datetime stamp
// RING 2 - 
var ring2 = [
    'Cruz Vermelha Brasileira #CruzVermelha: http://cruzvermelha.org.br Centro Familiar: http://bit.ly/28VlSrc #Brasil #Caridade',
    'Cruz Vermelha de #Angola: http://www.cruzvermelha.og.ao/ #Angola #CruzVermelha',
    '#Caridade por #Moçambique https://goo.gl/SqMbSU',
    '#Caridade por #Zâmbia: https://goo.gl/L6mt1K',
    'Cruz Vermelha de #Portugal: http://www.cruzvermelha.pt/ #CruzVermelha',
    'Cruz Vermelha de Timor-Leste #TimorLeste: http://www.redcross.tl/ #CruzVermelha',
    '#Caridade por Cabo Verde #CaboVerde: https://goo.gl/5DbtM6',
    '#Caridade por Guiné-Bissau #GuinéBissau: https://goo.gl/JrWyk6'
  ];

// RING 3 - other countries

var ring3 = [
	"Cruz Vermelha Mexicana: http://cruzrojamexicana.org.mx/ #México #CruzVermelha",
    'Cruz Vermelha das Filipinas: http://redcross.org.ph/ #Filipinas #CruzVermelha',
    'Sociedade da Cruz Vermelha da Nigéria: http://redcrossnigeria.org/ #Nigéria #CruzVermelha',
    'Congo Helping Hands: http://congohelpinghands.org/ #Congo #Caridade',
    'Cruz Vermelha Italiana: http://cri.it/ #Italy #CruzVermelha',
    'Sociedade da Cruz Vermelha etíope: http://redcrosseth.org/ #Etiópia #CruzVermelha',
    'Cruz Vermelha Alemã: http://www.drk.de/ #Germany #CruzVermelha',
    'Cruz Vermelha da Colômbia: http://www.cruzrojacolombiana.org/ #Colômbia #CruzVermelha',
    'Youth For Christ [África do Sul]: http://yfc.org.za/ #ÁfricaDoSul #RepúblicaDaÁfricaDoSul #Charity',
    'Cruz Vermelha Argentina: http://www.cruzroja.org.ar/ #Argentina #CruzVermelha',
    "Cruz Vermelha Francesa: http://www.croix-rouge.fr/ #França #CruzVermelha",
    'Cruz Vermelha Polaca: http://www.pck.pl/index.php?lang=pt #Poland #CruzVermelha',
    "Sociedade da Cruz Vermelha do Quênia: http://www.kenyaredcross.org/ #Kenya #CruzVermelha ",
    'Cruz Vermelha Espanhola: http://www.cruzroja.es/ #Espanha #CruzVermelha',
    'Tanzania Red Cross Society: http://www.trcs.or.tz/ #Tanzânia #CruzVermelha',
    "Cruz Vermelha da China: http://www.redcross.org.cn/ #China #CruzVermelha",
    "Cruz Vermelha do Uganda: http://www.redcrossug.org/ #Uganda #CruzVermelha",
    'Cruz Vermelha Indiana: http://indianredcross.org/ #Índia #CruzVermelha',
    'Cruz Vermelha Venezuelana #CruzVermelha: http://www.cruzrojavenezolana.org/ Caridade em #Venezuela: http://bit.ly/29ydNLR',
    'Cruz Vermelha no Peru: http://www.cruzroja.org.pe/ #Peru #CruzVermelha',
    "Sociedade da Cruz Vermelha da Indonésia: http://www.pmi.or.id/ #Indonésia #CruzVermelha",
    'Cruz Vermelha de Gana: http://www.redcrossghana.org/ #Ghana #CruzVermelha',
    'Cruz Vermelha Romena: http://www.crucearosie.ro/ #Roménia #CruzVermelha',


    "Doe à Cruz Vermelha da Ucrânia: https://goo.gl/niAr27 #Ucrânia #CruzVermelha",
    'Cruz Vermelha Coreana: https://www.redcross.or.kr/eng/eng_main/main.do #Korea #CruzVermelha',

    'Equatoriano: http://www.cruzroja.org.ec/ #Equador #CruzVermelha',
    'Cruz Vermelha da Guatemala: http://www.cruzroja.gt/ #Guatemala #CruzVermelha',
    '#Caridade para #Camarões: http://www.idealist.org/view/org/8WbKBhBbx874/',

    '#Caridade para #Malawi: https://goo.gl/ouh5qK',
    '#Caridade para #Zimbabwe: https://goo.gl/bmDftq',
    'Cruz Vermelha Helênica: http://www.redcross.gr/ #Greece #CruzVermelha',

    '#CruzVermelha de #Chile: http://www.cruzroja.cl/',
    '#Caridade para República Dominicana #República Dominicana: https://goo.gl/vzjjpR',
    '#Caridade para #Bolívia: http://www.ayuda.org/',
    '#CruzVermelha de #Ruanda: http://www.rwandaredcross.org/',
    '#CruzVermelha de #Haiti: http://www.croixrouge.ht/',
    'Crescente Vermelho de #Egito: http://egyptianrc.org/ #CrescenteVermelho',
    '#Caridade para #Madagascar: http://helpmg.org/',
    '#CruzVermelha de #Burundi: http://www.croixrougeburundi.org/',
    'Cruz Vermelha de #Sérvia: http://www.redcross.org.rs/ #CruzVermelha',
    '#Caridade para Cote d\'Ivoire #CoteDIvoire: http://www.icmrt.org/ ',
    '#CruzVermelha de #Vietnam: http://redcross.org.vn/',
    '#CruzVermelha de #Bélgica: http://www.redcross.be/',
    '#Caridade para Papua Nova Guiné #PapuaNewGuinea: https://goo.gl/Gx0a0n',
    '#CruzVermelha de #Cuba: http://www.sld.cu/sitios/cruzroja',
    '#CruzVermelha de #Honduras: http://www.cruzroja.org.hn/',
    '#CruzVermelha de #Bulgária: http://en.redcross.bg/',
    '#CruzVermelha de #Suécia: http://www.redcross.se/',
    'Cruz Vermelha em #Paraguai: http://www.cruzroja.org.py/ #CruzVermelha',
    '#Caridade para #Áustria: http://www.charity-charities.org/Austria-charities/Vienna.html',
    '#CruzVermelha do Sudão do Sul #SouthSudan: http://southsudanredcross.org/',


	'Cruz Vermelha na Holanda: http://www.rodekruis.nl/ #Holanda #CruzVermelha',
    'Cruz Vermelha Suíça: http://www.redcross.ch/ #Suíça #CruzVermelha',
    'Cruz Vermelha de #Letónia: http://www.redcross.lv/pt/ #CruzVermelha',
    'Cruz Vermelha de #Belarus: http://redcross.by/ #CruzVermelha',
    'Cruz Vermelha de #Hungria: http://www.voroskereszt.hu/ #CruzVermelha',
    'Cruz Vermelha de #Nicarágua: http://cruzrojanicaraguense.org/ #CruzVermelha',
    'Cruz Vermelha de El Salvador: http://www.cruzrojasal.org.sv/ #ElSalvador #CruzVermelha',
    'Cruz Vermelha de #Eslováquia: http://www.redcross.sk/ #CruzVermelha',
    'Cruz Vermelha em #Dinamarca: http://www.rodekors.dk/ #CruzVermelha',
    '#Caridade para #Chad: http://www.chadnow.com/chad_links/chad_aid_links.php',
    'Red Crescent of #Kazakhstan #CrescenteVermelho: http://www.redcrescent.kz/',
    'Cruz Vermelha de #Finlândia: http://www.redcross.fi/ #CruzVermelha',
    'Cruz Vermelha de #Croácia: http://www.hck.hr/ #CruzVermelha',
    'Cruz Vermelha de #Ireland: http://www.redcross.ie/ #CruzVermelha',
    'Cruz Vermelha de #Benin: http://croixrougebenin.afredis.com/ #CruzVermelha',
    'Cruz Vermelha de Geórgia: http://redcross.ge/ #CruzVermelha',
    'Cruz Vermelha da Costa Rica: http://www.cruzroja.or.cr/ #CostaRica #CruzVermelha',
    'Cruz Vermelha de #Noruega: http://www.rodekors.no/ #CruzVermelha',
    'Cruz Vermelha de #Myanmar: http://www.redcross.org.mm/ #CruzVermelha',
    'Cruz Vermelha de Burkina Faso #BurkinaFaso: http://www.croixroub.org/ #CruzVermelha',
    'Cruz Vermelha de #Moldova: http://redcross.md/ #CruzVermelha',

    //'Republic of Congo', // already...
    'Cruz Vermelha de #Panamá: http://www.cruzroja.org.pa/ #CruzVermelha',
    'Cruz Vermelha de #Japão: http://www.jrc.or.jp/ #CruzVermelha',
    'Cruz Vermelha de #Lituânia: http://www.redcross.lt/ #CruzVermelha',
    'Cruz Vermelha de #Armenia: http://redcross.am/ #CruzVermelha',
    '#Caridade para #Malásia: http://www.malaysiancare.org/',
    '#Caridade para #Paquistão: http://christiandevelopmentpakistan.org/',
    '#Caridade para a República Centro-Africana #CentralAfricanRepublic: https://goo.gl/HucaYG',
    'Cruz Vermelha de #Namibi: http://www.redcross.org.na/ #CruzVermelha',
    'Cruz Vermelha de #Togo: http://www.croixrouge-togo.org/ #CruzVermelha',
    'Cruz Vermelha de #Uruguai: http://www.cruzrojauruguaya.org/ #CruzVermelha',
    'Cruz Vermelha de #Lesotho: http://www.redcross.org.ls/ #CruzVermelha',
    'Cruz Vermelha da Nova Zelândia #Nova Zelândia: http://www.redcross.org.nz/ #CruzVermelha',
    'Red Crescent of #Syria #CrescenteVermelho: http://www.sarc.sy/',
    // Moldova, Congo, República de [já no ring2], Panamá, Japão, Eritréia, Lituânia,
    // Arménia, Malásia, Paquistão, República Centro-Africana, Namíbia, Togo, Uruguai,
    // Lesoto, Nova Zelândia, Síria,
    
    'Cruz Vermelha de #Jamaica: http://jamaicaredcross.org/ #CruzVermelha',
    'Cruz Vermelha da Bósnia e Herzegovina #Bósnia e Herzegovina: http: ///www.rcsbh.org/ #CruzVermelha',
    'Cruz Vermelha de #Eslovênia: http://www.rks.si/ #CruzVermelha',
    '#Líbano: http://www.lccm.us/',
    'Cruz Vermelha de #Letónia: http://www.redcross.lv/pt/ #CruzVermelha',
    'Cruz Vermelha do Sri Lanka: http://www.redcross.lk/ #SriLanka #CruzVermelha',
    '#Botswana: http://bocaip.org.bw/',
    '#Caridade para #Liberia: http://berkleycenter.georgetown.edu/organizations/liberian-council-of-churches',
    'Cruz Vermelha de #Macedonia: http://www.ckrm.org.mk/ #CruzVermelha',
    // Jamaica, Bósnia e Herzegovina, Eslovênia, Líbano,
    // Letónia, Sri Lanka, Arábia Saudita, Botsuana, Libéria, Macedónia, República da,
    /*República Checa,*/
    'Cruz Vermelha Checa: http://www.cervenykriz.eu/ #RepúblicaTcheca #CruzVermelha',

'Cruz Vermelha de #Gabão: http://croixrouge-gabon.org/ #CruzVermelha',
    '#Caridade para #Guiné: https://goo.gl/4CQyx8',
    'Cruz Vermelha de #Swazilândia: http://redcross.org.sz/ #CruzVermelha',
    'Red Crescent of #Iraq #CrescenteVermelho: http://www.ircs.org.iq/',
    'Crescente Vermelho dos Emirados Árabes Unidos #UnitedArabEmirates #CrescenteVermelho: http://www.rcuae.ae/',
    'Cruz Vermelha de #Singapura: https://www.redcross.sg/ #CruzVermelha',
    'Cruz Vermelha de #Chipre: http://www.redcross.org.cy/en/home #CruzVermelha',
    'Cruz Vermelha de Hong Kong #Hong Kong: http://redcross.org.hk #CruzVermelha',
    'Cruz Vermelha de #Tailândia: https://english.redcross.or.th/ #CruzVermelha',
    '#Caridade para Trinidad e Tobago #TrinidadAndTobago: https://goo.gl/l57Ue1',
    'Red Crescent of #Uzbekistan #CrescenteVermelho: http://redcrescent.uz/',
    //' Guiné Equatorial',
    'Cruz Vermelha da Serra Leoa: http://www.sierraleoneredcross.net/ #SierraLeone #CruzVermelha',
    'Crescente Vermelho de #Quirguistão #CrescenteVermelho: http://www.redcrescent.kg/',
    '#Caridade para #Albânia: http://www.kksh.org.al/',
    'Cruz Vermelha de #Senegal: http://www.croixrougesenegal.com/ #CruzVermelha',
    'Cruz Vermelha de #Fiji: http://www.redcross.com.fj/ #CruzVermelha',
    'Red Crescent of #Sudan #CrescenteVermelho: http://srcs.sd/',
    '#Caridade para #Montenegro: http://www.ckcg.co.me/',
// '#Caridade para Cabo Verde #CapeVerde: https://goo.gl/5DbtM6',
    'Crescente Vermelho de #Turcomenistão #CrescenteVermelho: https://goo.gl/Zhsvsc',
    'Crescente Vermelho de #Kuwait #CrescenteVermelho: http://krcs.org.kw/',
    // Timor Leste, Gabão, Guiné, Suazilândia, Iraque, Emirados Árabes Unidos, Cingapura, Chipre,
    // Hong Kong, Tailândia, Trinidad e Tobago, Uzbequistão, Guiné Equatorial, Serra Leoa,
    // Quirguistão, Albânia, Senegal, Fiji, Sudão, Montenegro, Cabo Verde, Turcomenistão, Kuwait,
    /* Guiana */ 
    'Cruz Vermelha na Guiana: http://guyanaredcross.org.gy/ #Guiana #CruzVermelha',
    'Crescente Vermelho de #Bangladesh #CrescenteVermelho: http://www.bdrcs.org/',
    'Cruz Vermelha de #Maurícia: http://www.mauritiusredcross.org/ #CruzVermelha',
    '#Caridade para a Coréia do Norte #NorthKorea: http://www.helpinghandskorea.org/',
    'Cruz Vermelha de #Malta: http://www.redcross.org.mt/ #CruzVermelha',
    'Red Crescent of #Jordan #CrescenteVermelho: http://www.jnrcs.org/',
    '#Caridade para #Argélia: http://www.cra-algerie.org/',
    'Red Crescent of #Iran #CrescenteVermelho: http://www.rcs.ir/',
    'Cruz Vermelha de #Luxemburgo: http://www.croix-rouge.lu/en/ #CruzVermelha',
    'Cruz Vermelha de #Mali: http://www.croixrouge-mali.org/ #CruzVermelha',
    'Crescente Vermelho de #Marrocos #CrescenteVermelho: http://www.croissant-rouge.ma/',
    'Cruz Vermelha de #Estônia: http://www.redcross.ee/ #CruzVermelha',
    'Crescente Vermelho de #Azerbaijão #CrescenteVermelho: http://www.redcrescent.az/',
    'Cruz Vermelha de #Islândia: http://www.redcross.is/ #CruzVermelha',
    'Cruz Vermelha de #Bahamas: http://www.bahamasredcross.com/ #CruzVermelha',
    'Crescente Vermelho de #Nepal #CrescenteVermelho: http://www.nrcs.org/',
    'Crescente Vermelho de #Qatar #CrescenteVermelho: http://www.qrcs.org.qa/',
    '#Caridade para #Suriname: https://goo.gl/BPsz9U',
    '#Caridade para #Belize: https://goo.gl/ILXLDt',
    '#Caridade para #Barbados: http://www.barbadosyp.com/Barbados/Charitable-Organisations',
    'Red Crescent of #Bahrain #CrescenteVermelho: http://www.rcsbahrain.org/',
    '#Caridade para #Omã: https://goo.gl/P9hqeW',
    '#Caridade para #Líbia: https://www.libyahumanaid.org/',

// '#Caridade para a Guiné-Bissau #GuineaBissau: https://goo.gl/JrWyk6',
    'Cruz Vermelha de #Cambodia: http://www.redcross.org.kh/index.php?lang=pt #CruzVermelha',
    'Cruz Vermelha de #Laos: http://www.laoredcross.org.la/en/ #CruzVermelha',
    'Red Crescent of #Turkey #CrescenteVermelho: http://www.kizilay.org.tr/',
    'Crescente Vermelho de #Tajiquistão #CrescenteVermelho: http://www.redcrescent.tj/',
    '#Caridade para #Micronésia: http://www.habele.org/',
    'Cruz Vermelha de #Grenada: http://www.grenadaredcross.org/ #CruzVermelha',
    'Cruz Vermelha de #Aruba: http://redcrossaruba.com/ #CruzVermelha',
    '#Caridade para #Niger: https://goo.gl/QNi7hC',
    'Cruz Vermelha de #Tonga: http://www.tongaredcross.com/ #CruzVermelha',
    "Cruz Vermelha de #Seychelles: www.seychellesredcross.sc/ #CruzVermelha",
    'Cruz Vermelha de #Andorra: http://www.creuroja.ad/ #CruzVermelha',
    'Cruz Vermelha de Samoa Americana #AmericanSamoa: https://redcross.wordpress.com/tag/american-samoa/ #CruzVermelha',
    '#Caridade para Antigua e Barbuda #AntiguaAndBarbuda: https://goo.gl/eeNFnN',
    '#Caridade para #Dominica: https://goo.gl/yJBRvc',
    'Cruz Vermelha de #Mongólia: http://www.redcross.mn/ #CruzVermelha',
    '#Caridade para #Groenlândia: https://goo.gl/J5pnNU',
    'Red Crescent of #Djibouti #CrescenteVermelho: http://www.redcrescent-dj.org/',
    '#Caridade para #Brunei: https://goo.gl/P7ccRU',
    'Cruz Vermelha de #Bermuda: www.bermudaredcross.com/ #CruzVermelha',
    'Cruz Vermelha das Ilhas Cayman #CaymanIslands: www.redcross.org.ky/ #CruzVermelha',
    // 'Aqui deve ser uma instituição de caridade para Faroe Islands',
    'Cruz Vermelha de #Liechtenstein: http://www.roteskreuz.li/ #CruzVermelha',
    'Cruz Vermelha de #Monaco: http://www.croix-rouge.mc/ #CruzVermelha',
    'Crescente Vermelho de #Tunísia #Tunísia: http://www.crt.tn/',
    '#Caridade para #Iêmen: http://www.zakat.org/country/yemen/',
    // '#Caridade para #BritishIslands: https://goo.gl/0pRJVN', - parte da U.K.
    '#Caridade para Ilhas Cook #CookIslands: http://cookfoundation.org/',
    '#Caridade para #Palau: https://goo.gl/Id7lKD',
    // '#Caridade para #Anguilla: https://charitylook.org/city/anguilla/', aqui é do Mississippi dos EUA
    '#Caridade para #Comores: http://www.comoroscharity.org/',
    '#Caridade para #Bhutan: https://goo.gl/DRHEHH',
    'Red Crescent of #Afghanistan #CrescenteVermelho: http://www.redcrescent.af/',
    '#Caridade para #Mauritânia: https://goo.gl/XK81gO',
    '#Caridade para Ilhas Falkland #FalklandIsalands: http://www.falklandsconservation.com/',
    '#Caridade para #Somália: https://goo.gl/1Bn35T',
    // Vaticano segundo no terceiro anel ...
    'Crescente Vermelho de #Maldivas #CrescenteVermelho: https://redcrescent.org.mv/'
    // Bangladesh, Maurício, Coreia do Norte, Malta, Jordânia, Argélia, Irã,
    // Luxemburgo, Mali, Marrocos, Estónia, Azerbaijão, Islândia,
    // Bahamas, Nepal, Israel [lidera RING 3], Catar, Suriname, Belize, Barbados, Bahrein, Omã, Líbia,
    // Guiné-Bissau, Camboja, Laos, Turquia, Tajiquistão, Micronésia, Estados Federados de,
    // Grenada, Aruba, Níger, Tonga, Seychelles, Gambia, Andorra, Samoa Americana, Antígua e Barbuda,
    // Dominica, Mongólia, Gronelândia, Djibouti, Brunei, Bermudas, Ilhas Cayman, Ilhas Faroé,
    // São Marinho, Liechtenstein, Mônaco, Tunísia, Iémen,
    // Ilhas Virgens Britânicas, Ilhas Cook, Palau, Anguilla, Comores, Butão, Afeganistão, Mauritânia,
    // Ilhas Falkland, Somália,
    // Cidade do Vaticano [segundo elemento em RING 3], Maldivas, Sahara Ocidental, Ilhas Pitcairn,
    
  ];

var star_index = 0;
var ring0_index = 0;
var ring1_index = 0;
var ring2_index = 0;
var ring3_index = 0;

// pt Bibles, cause it is Portuguese Account
var bibles =
[
'#Bíblia por #Brasil [#Português]: http://gold-bible.16mb.com/?language=pt&country=br',
'#Bíblia por #Angola [#Português]: http://gold-bible.com/?language=pt&country=ao',
'#Bíblia por #Mozambique [#Português]: http://gold-bible.16mb.com/?language=pt&country=mz',
'#Bíblia por #Zambia [#Português]: http://gold-bible.16mb.com/?language=pt&country=zm',
'#Bíblia por #Portugal [#Português]: http://gold-bible.16mb.com/?language=pt&country=pt',
'#Bíblia por #EastTimor [#Português]: http://gold-bible.16mb.com/?language=pt&country=tl',
'#Bíblia por #CapeVerde [#Português]: http://gold-bible.16mb.com/?language=pt&country=cv',
'#Bíblia por #Guinea-Bissau [#Português]: http://gold-bible.16mb.com/?language=pt&country=gw'
];

var bible_index = 0;

var twit = require('twit');

var gbo_pt = new twit({
  consumer_key:         '',
  consumer_secret:  '',
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
                                                  "@BibliaDourada está à procura de proprietário. O projeto apoia Cruz Vermelha e Caridade. Gold-Bible.16mb.com @" + stars[star_index]+ "\n"
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
        var tweet_text = 'Junte-se à #caridade Comunidade PoRT youtu.be/-o5Y3GAN6Es #Bíblia #CruzVermelha http://charity-port.16mb.com/ [Inglês]';
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




function tweet_digitalocean()
{
  var tweet_text = "#VPS com #SSD em @DigitalOcean. Inscreva-se usando meu link e receba US$ 10 em crédito: https://m.do.co/t/59b1f2d44f9f";
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
  var tweet_text = "#WebHosting com #Ilimitado #LarguraDeBanda, #EspaçoEmDisco e contas de e-mail em contas pagas: http://bit.ly/2mdj0dC";
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
  var tweet_text = "Como aprender a língua? #AprenderLíngua https://youtu.be/7c9fwykj6EQ https://goo.gl/B3JXnq [Inglês]";
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
  var tweet = "Citações da Bíblia, provérbios, sabedoria. #Bíblia #BíbliaSagrada #Sabedoria #Provérbios Siga @BibliaDourada gold-bible.16mb.com";
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
        setInterval(tweet_star, 5 * 60 * 60 * 1000 - 50);

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
    Portuguese Version

    http://gold-bible.16mb.com/

    @BibliaDourada

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


