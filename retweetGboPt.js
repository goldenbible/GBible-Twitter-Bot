// Twitter Retweet Bot for PT
var goldenbibleorgTwitters = ['versiculodabib', 'bibliaonline', 
'cruzvermelhasp', 'cvborgaocentral', 'cvbceara', 'CICV_br'];



var twit = require('twit');

var goldenbibleorg = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});


function retweet() 
{

	for (var user in goldenbibleorgTwitters)
	{
		goldenbibleorg.get('search/tweets', {q: "from:" + goldenbibleorgTwitters[user], 
			language: 'pt', result_type: "recent"}, function (err, data,response) 
			{
			if (!err && data.statuses[0] && data.statuses[0].id_str) 
			{
				var tweet = data.statuses[0].id_str;
				goldenbibleorg.post('statuses/retweet/' + tweet, { }, function (err, response) 
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

