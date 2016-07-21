var ntwitter = require('ntwitter'),

    // please note that './' requests node to look at the current dir
    // without it, the 'node_modules' will be searched instead
    credentials = require('./credentials.json'),

    // initialise twitter object to allow streaming
    twitter = ntwitter(credentials),

    // an object to keep track of all the filtered words
    // this hardcoded approach is not the best way to do this,
    // however for the purpose of demonstration, it suffices 
    count = {
        'awesome': 0
    };


// define the stream
// param 1 - type of stream
// param 2 - filter rules (i.e. by words, by location etc)
// param 3 - callback for whenever relevant tweet comes through
twitter.stream(
    'statuses/filter',

    { 'track': ['awesome'] },

    function (stream) {
        stream.on('data', function (tweet) {
            if (tweet.text.indexOf('awesome') > -1) {
                count.awesome += 1;
            }
        });
    }
);


// export this obect into a module so that it can be easily reused
module.exports = count;