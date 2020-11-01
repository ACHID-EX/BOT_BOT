const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "Setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Mengatur channel welcome",
  aliases: ["sw", "setw", "swelcome"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("```You are not allowed for set welcome channel!!```")
    }
    
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Harap mention channel terlebih dahulu!.");
    }

    // Sekarang kita akan menggunakan quick.db

    db.set(`welchannel_${message.guild.id}`, channel.id);

    message.channel.send(`Welcome Channel is seted as ${channel}`);
  }
};
