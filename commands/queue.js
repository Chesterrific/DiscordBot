/*
 * Queues up music
 */
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const Search = require("yt-search");

var songQueue = [];

module.exports.run = async (bot, message, args) => {    
    if (YTDL.validateURL(args.toString())) {
        //converts args (Song name/http to string)
        let url = args.toString();
        let info = await YTDL.getInfo(url);
        
        //Add song to queue
        songQueue.push({
            songURL: url,
            songTitle: info.title,
            requestor: `${message.author.username}`,
            songLength: info.length_seconds
        });

        console.log(songQueue[songQueue.length-1]);
        message.channel.send(`Added "${info.title}" to Queue | From: ${message.author.username}`)
                .then(msg => msg.delete(10000));
    } else {
        Search(args.join(' '), (err, res) => {
            if (err) {
                return message.channel.send("Something went wrong.");
            }
            let video = res.videos[0];  //Gives us video URL
            let url = "https://www.youtube.com" + video.url;
            if (YTDL.validateURL(url)) {
                songQueue.push({
                    songURL: url,
                    songTitle: video.title,
                    requestor: `${message.author.username}`,
                    songLength: video.seconds
                });
                
                console.log(songQueue[songQueue.length-1]);
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