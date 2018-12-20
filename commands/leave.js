/*
 * Leaves voice channel
 */
const Discord = require("discord.js");
const songQueueModule = require("./queue.js");

var songQueue = songQueueModule.songQueue;

module.exports.run = async (bot, message, args) => {
    if(message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect();
        songQueue.length = 0; //clears songQueue
    }
    else{
        message.channel.send("I'm not in a voice channel.");
    }
};

//Command name
module.exports.help = {
    name: "leave"
};

