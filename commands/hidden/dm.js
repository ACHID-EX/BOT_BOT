const Discord = require("discord.js");

module.exports = {
  name: "dm",
  category: "hidden",
  description: "dm message",
  usage: "<prefix/dm> <pesan>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed to use this command");
    }
    await message.delete();
    let say = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    let user = message.mentions.members.first();
    if (!say)
      return message.reply("**Mohon masukan pesan** ``<prefix>dm <pesan>``")

    const embed = new Discord.MessageEmbed()
      .setColor("#d0192c")
      .setDescription(`${say}`)
      .setFooter("Send By: Undefined");
    user.user.send(embed);
  }
};
