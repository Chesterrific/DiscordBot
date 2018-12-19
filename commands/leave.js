/*
 * Leaves voice channel
 */

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect();
    }
    else{
        message.channel.send("I'm not in a voice channel.");
    }
};

module.exports.help = {
    name: "leave"
};

