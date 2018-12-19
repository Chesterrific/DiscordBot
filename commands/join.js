/*
 * Joins voice channel
 */

const Discord = require("discord.js");
const YTDL = require("ytdl-core");

var songQueue = [];

function Play(connection) {
    dispatcher = connection.playStream(YTDL(songQueue[0], {filter: "audioonly"}));
    songQueue.shift();
    dispatcher.on("end", function () {
        if (songQueue[0]) {
            Play(connection);
        } else {
            connection.disconnect();
        }
    });
}
module.exports.run = async (bot, message, args) => {
    if (message.member.voiceChannel) {
        if (!message.guild.voiceConnection) {
            message.member.voiceChannel.join()
                    .then(connection => {
                        message.channel.send("I AM HERE!");
                        //var song = args.toString();
                        //songQueue.push(song);
                        //Play(connection);
                        module.exports.connection;
                    });
        }
    } else {
        message.channel.send("You must be in a voice channel.")
    }
};

//Command name
module.exports.help = {
    name: "join"
};