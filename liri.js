var fs = require('fs');
var tweetKeys = require('./keys.js');

function TwitterSummon(){
  var twitter = require('twitter');
  var client = new twitter({
    consumer_key: tweetKeys.twitterKeys.consumer_key,
    consumer_secret: tweetKeys.twitterKeys.consumer_secret,
    access_token_key: tweetKeys.twitterKeys.access_token_key,
    access_token_secret: tweetKeys.twitterKeys.access_token_secret
  });

  var link  = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  var params = 'winniemlau';
  client.get(link, params, function(error, tweets, response){
    if (error){
      console.log(error);
    }
    for (var i=0;i<tweets.length;i++){
      console.log(tweets[i].text);
    }
});
  };

if (process.argv[2]==="my-tweets"){
	TwitterSummon();
};

  
function SpotifySummon() {
  var spotify = require('spotify');
  if (process.argv[3] === undefined) {
    process.argv[3] = "what/'s my age again";
  }else {
   process.argv[3]===process.argv[3];
  }
  spotify.search({ type: 'track', query: process.argv[3], limit:1 },
  function(error, data) {
    if ( error ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("Song Title: " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].preview_url);
  });
}

if (process.argv[2]==="spotify-this-song") {
	SpotifySummon();
};

function  MovieSummon(){
	var request = require('request');
  if (process.argv[3] === undefined) {
    process.argv[3]= 'Mr. Nobody';
  }else {
    process.argv[3] = process.argv[3];
  }

  request('http://www.omdbapi.com/?t='+process.argv[3]+'&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      JsonBody = JSON.parse(body);
      console.log(JsonBody.Title);
      console.log(JsonBody.Year);
      console.log(JsonBody.imdbRating);
      console.log(JsonBody.Country);
      console.log(JsonBody.Language);
      console.log(JsonBody.Plot);
      console.log(JsonBody.Actors);
      console.log(JsonBody.tomatoRating);
      console.log(JsonBody.tomatoURL);
    }
  })
}

if (process.argv[2]==='movie-this'){
	MovieSummon();
};

function WhatitSaysSummon() {
	var fs = require('fs');
	var readIt = './random.txt';
	var random = fs.readFileSync(readIt, 'utf8');
	var spotify = random.slice(0,17);
	var song = random.slice(18,38);

	process.argv[2] = spotify;
	process.argv[3] = song;
	};

	if (process.argv[2]==="do-what-it-says"){
	  WhatitSaysSummon();
	  SpotifySummon();
	}











