// maybe I should organize these better
const dotenv = require('dotenv'),
	snoowrap = require('snoowrap'),
	snoostorm = require('snoostorm'),
	express = require('express'),
	helmet = require('helmet'),
	app = express();
	fs = require('fs'),
	MongoClient = require('mongodb').MongoClient,
	routes = require('./routes'),
	helpers = require('./helpers');

let apiPort = process.env.API_PORT ? process.env.API_PORT : 8080;
var server = app.listen(apiPort);

/**
 * BACKEND STUFF
**/

dotenv.load();

// get thread history
var threads = [];
helpers.loadThreadList( (err, arr) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	threads = arr.map(d => d._id);
});

// load reddit and subreddit instances
const cred = {
	'userAgent':	process.env.REDDIT_USER_AGENT,
	'clientId':	 process.env.REDDIT_CLIENT_ID,
	'clientSecret': process.env.REDDIT_CLIENT_SECRET,
	'username':	 process.env.REDDIT_USERNAME,
	'password':	 process.env.REDDIT_PASSWORD
};

const reddit = new snoowrap(cred),
	client = new snoostorm(cred),
	anime = reddit.getSubreddit('anime');

reddit.config({
	'requestDelay': 5000,
	'debug': true
});

var commentStream = client.CommentStream({
	'subreddit': 'anime',
	'results': 100,
	'pollTime': 5000
});

var threadStream = client.SubmissionStream({
	'subreddit': 'anime',
	'results': 100,
	'pollTime': 60000
});

/**
 * checks /r/anime thread stream every minute for a new CDF thread
 * and updates the active thread list accordingly
**/
threadStream.on("submission", thread => {
	if (helpers.isNewCDF(thread)) {
		let obj = (helpers.handleThread(thread));
		helpers.store(obj);
		threads.push(obj._id).slice(-3);
	}
});

/**
 * checks /r/anime every minute
 * handles comments posted to active CDF threads
**/
commentStream.on("comment", comment => {
	if (threads.includes(comment.link_id)) {
		let obj = helpers.handleComment(comment); 
		helpers.store(obj);
	}
});

/**
 * RESTful stuff
 * ROUTING WILL LIKELY BE DEPRACATED
**/
app.use(helmet());
app.use((req, res, next) => {
	res.set('X-Clacks-Overhead', 'GNU Terry Pratchet');
	next();
});
app.use( (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
	next();
});
app.use('/', routes);
