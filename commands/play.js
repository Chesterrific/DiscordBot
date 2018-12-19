/*
 * Plays music added from queue
 */
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var songQueueModule = require("./queue.js");

var songQueue = songQueueModule.songQueue;

async function Play(connection, message) {
    let dispatcher = await connection.playStream(YTDL(songQueue[0], {filter: "audioonly"}));
    
    let info = await YTDL.getInfo(songQueue[0]);
    message.channel.send(`Now Playing: ${info.title}`);
    
    songQueue.shift();  
    
    dispatcher.on("end", function(){
       if(songQueue[0]){
           Play(connection, message);
       }
       else{
           console.log("Queue is empty!");
       }
    });
}

module.exports.run = async (bot, message, args) => {
    if (!message.member.voiceChannel)
        return message.channel.send("Please connect me to a voice channel.");
    
    if (!songQueue[0])
        return message.channel.send("Queue is empty!");

    let connection = await message.member.voiceChannel.join();

    Play(connection, message);
};
//Command name
module.exports.help = {
    name: "p"
};

