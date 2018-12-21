/*
 * Lists Queue
 */
const Discord = require("discord.js");
const songQueueModule = require("./queue.js");

var songQueue = songQueueModule.songQueue;

module.exports.run = async (bot, message, args) => {
    console.log("\nQueue List")
    for(var i = 0; i < songQueue.length; i++){
        console.log(songQueue[i]);
    }
};

//Command name
module.exports.help = {
    name: "ls"
};
