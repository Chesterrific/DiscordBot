/*
 * Skip current song
 */
const Discord = require("discord.js");
const playModule = require("./play.js");


module.exports.run = async (bot, message, args) => {
    var skip = playModule.Skip();
};

//Command name
module.exports.help = {
    name: "n"
};


