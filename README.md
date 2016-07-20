# Synopsis
A mini Node.js application that connects to the Twitter API, and displays tweets on the console, depending on the filters provided.

# Motivation
To experiment with connecting to a social API like Twitter, from Node.js.

# Installation

1. Provided that you have already signed up with Twitter, log on to https://apps.twitter.com/ and 'Create New App'
2. Fill in the application details (ignore 'Callback URL') and then 'Create your Twitter Application'
3. Click on the 'Keys and Access Tokens' tab
4. Scroll down to the section that allows you to 'Create my access token'
5. Copy the 'API Key', 'API Secret', 'Access Token', and 'Access Token Secret' values into the 'credentials.json' file
6. Modify the 'filtweeter.js' filters (line 18, i.e. 'track': ['your', 'desired', 'foo', 'filters'])
7. Now, provided that you already have node.js installed on your system, run the application with the command 'node filtweeter.js'
8. Press Ctrl-C to stop the stream!
