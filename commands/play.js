/*
 * Plays music added from queue
 */
const botconfig = require("../botconfig.json"); //Contains Volume
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const songQueueModule = require("./queue.js");
const leaveModule = require("./leave.js");

var songQueue = songQueueModule.songQueue;
var songOptions = {quality: "highestaudio", filter: "audioonly"};
var alreadyPlaying = false; //bool to check if song is already playing.
var dispatcher;

async function Play(connection, message) {
    dispatcher = await connection.playStream(YTDL(songQueue[0].songURL, songOptions), botconfig);
    let info = await YTDL.getInfo(songQueue[0].songURL);
    message.channel.send(`Now Playing: ${songQueue[0].songTitle} | From: ${songQueue[0].requestor}`)
            .then(msg => msg.delete(info.length_seconds * 1000)); //convert video length to milliseconds and delete message after duration/video length.
    songQueue.shift();
    dispatcher.on("end", function () {
        if (songQueue[0]) {
            Play(connection, message);
        } else {
            console.log("End of Queue.");
            alreadyPlaying = false;
            return;
        }
    });
}

module.exports.run = async (bot, message, args) => {
    if (alreadyPlaying === true) {
        return message.channel.send("I'm already playing a song!");
    } else if (!songQueue[0]) {
        return message.channel.send("Queue is empty!");
    } else if (!message.member.voiceChannel) {
        message.channel.send("You must be in a voice channel.");
    } else {
        //If the bot isn't already playing music, and the queue isn't empty, and the caller is in a voice channel.
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

module.exports.alreadyPlaying = alreadyPlaying;

module.exports.Skip = function(){
    if(dispatcher){
        dispatcher.end();
    }
};
