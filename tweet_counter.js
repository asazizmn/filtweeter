var ntwitter = require('ntwitter'),

    // please note that './' requests node to look at the current dir
    // without it, the 'node_modules' will be searched instead
    credentials = require('./credentials.json'),

    // initialise twitter object to allow streaming
    twitter = ntwitter(credentials);


// define the stream
// param 1 - type of stream
// param 2 - filter rules (i.e. by words, by location etc)
// param 3 - callback for whenever relevant tweet comes through
twitter.stream(
    'statuses/filter',

    { 'track': ['awesome', 'cool', 'rad', 'gnarly', 'groovy'] },

    function (stream) {
        stream.on('data', function (tweet) {
            console.log(tweet.text);
        });
    }
);