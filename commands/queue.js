/*
 * Queues up music
 */
const Discord = require("discord.js");
const YTDL = require("ytdl-core");

var songQueue = [];

module.exports.run = async (bot, message, args) => {
    //converts args (Song name/http to string)
    var song = args.toString();
    songQueue.push(song);
    console.log(songQueue[0]);
    
    let info = await YTDL.getInfo(songQueue[0]);
    message.channel.send(`Added "${info.title}" to Queue | From: ${message.author.username}`)
};

//Command name
module.exports.help = {
    name: "q"
};

module.exports.songQueue = songQueue;