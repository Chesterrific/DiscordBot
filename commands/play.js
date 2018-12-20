/*
 * Plays music added from queue
 */
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const songQueueModule = require("./queue.js");

var songQueue = songQueueModule.songQueue;
var songOptions = {quality: "highestaudio", filter: "audioonly"};
var streamOptions = {volume: 0.1};
var alreadyPlaying = false; //bool to check if song is already playing.

async function Play(connection, message) {
    let dispatcher = await connection.playStream(YTDL(songQueue[0], songOptions), streamOptions);
    let info = await YTDL.getInfo(songQueue[0]);
    message.channel.send(`Now Playing: ${info.title}`);
    songQueue.shift();

    dispatcher.on("end", function () {
        if (songQueue[0]) {
            Play(connection, message);
        } else {
            console.log("End of Queue.");
            alreadyPlaying = false;
        }
    });
}

module.exports.run = async (bot, message, args) => {
    if (alreadyPlaying === true) {
        return message.channel.send("I'm already playing a song!");
    } else if (!songQueue[0]) {
        return message.channel.send("Queue is empty!");
    } else { 
        //if there bot is not already playing a song and if there are songs left in the queue.
        let connection = await message.member.voiceChannel.join();
        
        //set playing to true right before  we call the function
        alreadyPlaying = true;  
        Play(connection, message);
    }
};
//Command name
module.exports.help = {
    name: "play"
};

