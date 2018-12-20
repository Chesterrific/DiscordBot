/*
 * Returns Bot Info
 */
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
       
       let botembed = new Discord.RichEmbed()
               .setDescription("All Might's Info")
               .setColor("#ff0000")
               .setThumbnail(botIcon)
               .addField("Bot Name:",bot.user.username)
               .addField("Created On:", bot.user.createdAt);
       
       return message.channel.send(botembed);
};

//Command name
module.exports.help = {
    name: "botinfo"
};