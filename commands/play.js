const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var songQueueModule = require("./queue.js");
var joinModule = require("./join.js");

var songQueue = songQueueModule.songQueue; 
var connection = joinModule.connection;

function Play(connection){
    console.log(songQueue[0]);
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
    Play(connection);
};

//Command name
module.exports.help = {
    name: "p"
};

