var ntwitter = require('ntwitter'),

    // please note that './' requests node to look at the current dir
    // without it, the 'node_modules' will be searched instead
    credentials = require('./credentials.json'),

    // initialise twitter object to allow streaming
    twitter = ntwitter(credentials),

    // function that will setup the user-defined words to track
    // and return the number of times each word is tweeted
    countWords = function (words) {

        // word filters and an object to keep count of all the words
        var trackedWords = words,
            counts = {};

        // please note that in js ...
        // 'counts.awesome = 0' can also be accessed with
        // 'counts[awesome] = 0'. It's generally recommended to ...
        // ... stick to the dot notation format. However, in this particular circumstance
        // it is advisable to take advantage of latter method to allow for other than hard coding!
        trackedWords.forEach(function (word) {
            counts[word] = 0;
        });

        // define the stream
        // param 1 - type of stream
        // param 2 - filter rules (i.e. by words, by location etc)
        // param 3 - callback for whenever relevant tweet comes through
        twitter.stream(
            'statuses/filter',

            { 'track': trackedWords },

            function (stream) {
                stream.on('data', function (tweet) {
                    trackedWords.forEach(function (word) {
                        if (tweet.text.indexOf(word) > -1) {
                            counts[word] += 1;
                        }
                    });
                });
            }
        );


        return counts;
    };


// exporting the function into a module (instead of the counts) so that it can be easily reused
module.exports = countWords;