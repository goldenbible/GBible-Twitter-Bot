// Twitter Retweet Bot for ES
var gbo_es_Twitters = ['Pontifex_es', 'santabibliaok', 'TextoDeLaBiblia', 
						'LaSantaBiblia', 'DiosNosHabla', 'citasdebiblia', 
						'vivelabiblia', 'IFRC_es', 'CICR_es', 'CruzRojaProvTfe', 
						'cruzrojacol', 'cruzrojaecuador', 'CruzRojaCRC', 
						'CruzRojaSal', 'CruzRojaBizkaia', 'waltercotte', 
						'CruzRoja_MX', 'CruzRojaNavarra', 'CruzRojaPanama',
                        'CruzRojaLA', 'CruzRojaInforma', 'cruzrojabogota‏',
                        'CruzRojaEsp', 'CruzRojaMadrid', 'CruzRojaArg'
];

var twit = require('twit');

var gbo_es = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});


// Twitter Retweet Bot for ZH
var gbo_zh_Twitters = ['SGRedCross'];

var gbo_zh = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});



function retweet() 
{
	for (var user in gbo_es_Twitters)
	{
		gbo_es.get('search/tweets', {q: "from:" + gbo_es_Twitters[user], 
			language: 'es', result_type: "recent"}, function (err, data,response) 
			{
			if (!err && data.statuses[0] && data.statuses[0].id_str) 
			{
				var tweet = data.statuses[0].id_str;
				gbo_es.post('statuses/retweet/' + tweet, { }, function (err, response) 
				{
					if (response) 
					{
						console.log('GBO Retweeted: ' + '"' + data.statuses[0].text + '" tweet ID: ' + data.statuses[0].id_str);
					}
					if (err) 
					{
						//console.log('Retweet Error: ', err);
					}
				});
			} else {
				console.log('Error: ' + err);
				//console.log('Need connection');
			}
		});
	}

for (var user in gbo_zh_Twitters)
	{
		gbo_zh.get('search/tweets', {q: "from:" + gbo_zh_Twitters[user], 
			language: 'zh', result_type: "recent"}, function (err, data,response) 
			{
			if (!err && data.statuses[0] && data.statuses[0].id_str) 
			{
				var tweet = data.statuses[0].id_str;
				gbo_zh.post('statuses/retweet/' + tweet, { }, function (err, response) 
				{
					if (response) 
					{
						console.log('GBO Retweeted: ' + '"' + data.statuses[0].text + '" tweet ID: ' + data.statuses[0].id_str);
					}
					if (err) 
					{
						//console.log('Retweet Error: ', err);
					}
				});
			} else {
				console.log('Error: ' + err);
				//console.log('Need connection');
			}
		});
	}	
}

retweet();

if (process.argv.length == 2) // && process.argv[2] == 'stop')
{
	try
	{
		// 5 * 60 * 1000 - five minutes ;]
  		setInterval(retweet,  5 * 60 * 1000);
	} catch (e)
	{
  		console.error(e);
	}
}

