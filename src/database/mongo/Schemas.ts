import { Schema, model } from 'mongoose';

const user = new Schema({
	user: {
		type: String,
		required: true,
		index: true
	},
	channel: {
		type: String,
		required: true,
		default: '0',
		index: true
	},
	threads: {
		type: Number,
		required: true,
		default: 0
	},
	blacklisted: {
		type: Number,
		required: true,
		default: 0
	},
	logs: {
		type: String,
		default: '0'
	}
});

const log = new Schema({
	user: {
		type: String,
		required: true,
		index: true
	},
	channel: {
		type: String,
		required: true
	},
	timestamp: {
		type: Number,
		required: true,
		default: Date.now()
	},
	messages: {
		type: [{
			userID: String,
			location: String,
			content: String,
			date: Date,
			images: [String]
		}],
		required: true
	}
});

const snippet = new Schema({
	name: {
		type: String,
		required: true,
		index: true
	},
	creator: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

const User = model('user', user, 'users');
const Snippet = model('Snippet', snippet, 'snippets');
const Log = model('log', log, 'logs');

export {
	User,
	Snippet,
	Log
};
