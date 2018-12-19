/*
 * Joins voice channel
 */

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.voiceChannel) {
        if (!message.guild.voiceConnection) {
            message.member.voiceChannel.join()
                    .then(connection => {
                        message.channel.send("I AM HERE!");
            });
        }
    }
    else{
        message.channel.send("You must be in a voice channel.")
    }
};

module.exports.help = {
    name: "join"
};

