// Twitter Retweet Bot
var programmingTwitters = ['ScreepsGame', 'html5', 'engadget', 'nodejs', 'twitterapi','OracleDatabase', 'Oracle' ,'FBI' , 'php_net', 'MIT', 'informatica', 'MSFTnews','PCMag',
			'StackOverflow','JavaScriptDaily', 'codeorg','linuxtoday' ,'CentOS', 'YoYoGames', 'RedHatNews', 'Microsoft', 'linux',
			'digitalocean', 'linuxfoundation', 'java', 'SwiftLang', 'netflix', 'oraclesocial',
			'RedCross', 'BritishRedCross', 'RedCrossCanada', 'RedCrossAU', 'RedCrossEU', 'ICRC', 'ICRC_dc', 'WestEndResNYC', 'CCBplusQ', 'RedNoseDayUS', 'goldenbibleorg', 'my1blood', 'NakedHeartF'];

var goldenbibleorgTwitters = ['GospelDaily', 'RedCross', 'BritishRedCross', 'RedCrossCanada', 'RedCrossAU', 'ICRC', 'ICRC_dc','CEYCnews', 'AmazingiGrace', 'news_va_en', 'CCBplusQ',
						'JesusGraces','Pontifex','OliveTreeBible', 'Saintly_Life', 'Pontifex', 'synod', 'c_of_e', 'NYChurchChrist', 'NYConf', 'MainStCOC',
						'unitedchurch', 'gospelofchrist', 'wellsburgchurch', 'FaithReel', 'Godly_Life', 'crossway', 'YouVersion', 'OliveTreeBible', 'BookOProverbs', 'Bible_Time', 
						'The_Gospels', 'RedNoseDayUS', 'my1blood', 'NakedHeartF'];

var dailybiznewsTwitters = ['GospelDaily', 'RedCross', 'BritishRedCross',
                                'RedCrossCanada', 'RedCrossAU', 'RedCrossEU',
                                'ICRC', 'ICRC_dc', 'Bible_Time',  'The_Gospels',
                                'my1blood',
                                'Entrepreneur', 'businessinsider', 'nytimes',
                                'TheEconomist', 'NYCSmallBizSvcs', 'ChaseforBiz',
                                'IEbusiness', 'HarvardBiz', 'Inc', 'WSJ', 'business',
                                'WestEndResNYC', 'CCBplusQ', 'RedNoseDayUS',
                                'FeedingAmerica', 'HolyApostlesNYC', 'NYCRescue', 'NakedHeartF'];

var twit = require('twit');

var programming = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});
var goldenbibleorg = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});

var daily_biz_news = new twit({
  consumer_key:   	'',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});

function retweet() 
{
	for (var user in programmingTwitters)
	{
		programming.get('search/tweets', {q: "from:" + programmingTwitters[user], 
			language: 'en', result_type: "recent"}, function (err, data,response) 
			{

			//var retweeted = data.statuses[14]['retweeted'] || false;
			//console.log('Retweeted status: ' + retweeted);
			if (!err && data.statuses[0] && data.statuses[0].id_str) 
			{
				//console.log(var_dump(data));
				//console.log('data = ' + JSON.stringify(data));
				var tweet = data.statuses[0].id_str;
				programming.post('statuses/retweet/' + tweet, { }, function (err, response) 
				{
					if (response) 
					{
						console.log('Pro Retweeted: ' + '"' + data.statuses[0].text + '" tweet ID: ' + data.statuses[0].id_str);
					}
					if (err) 
					{
						//console.log('Retweet Error: ', err);
					}
				});
			} else {
				console.log('Error: ' + err);
				console.log('Need connection...');
			}
		});
	}
	for (var user in goldenbibleorgTwitters)
	{
		goldenbibleorg.get('search/tweets', {q: "from:" + goldenbibleorgTwitters[user], 
			language: 'en', result_type: "recent"}, function (err, data,response) 
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

	for (var user in dailybiznewsTwitters)
	{
		daily_biz_news.get('search/tweets', {q: "from:" + dailybiznewsTwitters[user], 
			language: 'en', result_type: "recent"}, function (err, data,response) 
			{
			if (!err && data.statuses[0] && data.statuses[0].id_str) 
			{
				var tweet = data.statuses[0].id_str;
				daily_biz_news.post('statuses/retweet/' + tweet, { }, function (err, response) 
				{
					if (response) 
					{
						console.log('DBN Retweeted: ' + '"' + data.statuses[0].text + '" tweet ID: ' + data.statuses[0].id_str);
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
  		setInterval(retweet,  5 * 60 * 1000);
	} catch (e)
	{
  		console.error(e);
	}
}

