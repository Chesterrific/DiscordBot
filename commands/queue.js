/*
 * Queues up music
 */
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const Search = require("yt-search");

var songQueue = [];
var songOwner = [];

module.exports.run = async (bot, message, args) => {
    if (YTDL.validateURL(args.toString())) {
        //converts args (Song name/http to string)
        let song = args.toString();
        //Add song to queue
        songQueue.push(song);
        //Companion queue to track who added the song
        songOwner.push(`${message.author.username}`);
        console.log(songQueue[0]);
        let info = await YTDL.getInfo(songQueue[0]);
        message.channel.send(`Added "${info.title}" to Queue | From: ${message.author.username}`)
                .then(msg => msg.delete(10000));
    } else {
        Search(args.join(' '), (err, res) => {
            if (err) {
                return message.channel.send("Something went wrong.");
            }
            let video = res.videos[0];
            let url = "https://www.youtube.com" + video.url;
            if (YTDL.validateURL(url)) {
                songQueue.push(url);
                songOwner.push(`${message.author.username}`);
                console.log(songQueue[0]);
                message.channel.send(`Added "${video.title}" to Queue | From: ${message.author.username}`)
                        .then(msg => msg.delete(10000));
            } else {
                message.channel.send("Something went wrong when trying to add your song, try again.");
            }
        });
    }
};

//Command name
module.exports.help = {
    name: "q"
};

module.exports.songQueue = songQueue;
module.exports.songOwner = songOwner;