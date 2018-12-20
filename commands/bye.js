/*
 * Bot goes offline
 */
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("Bot going offline.");
    message.channel.send("Till next time!")
            .then(() => bot.destroy());
};

//Command name
module.exports.help = {
    name: "bye"
};


