/*
 * Leaves voice channel
 */
const Discord = require("discord.js");
const songQueueModule = require("./queue.js");

var songQueue = songQueueModule.songQueue;
var songOwner = songQueueModule.songOwner;

module.exports.run = async (bot, message, args) => {
    if(message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect();
        songQueue.length = 0; //clears songQueue
        songOwner.length = 0; //clears songOwner
    }
    else{
        message.channel.send("I'm not in a voice channel.");
    }
};

//Command name
module.exports.help = {
    name: "leave"
};

