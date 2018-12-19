/*
 * Queues up music
 */
const Discord = require("discord.js");
const YTDL = require("ytdl-core");

var songQueue = [];

module.exports.run = async (bot, message, args) => {
    var song = args.toString();
    songQueue.push(song);
    console.log(songQueue[0]);
};

//Command name
module.exports.help = {
    name: "q"
};

module.exports.songQueue = songQueue;