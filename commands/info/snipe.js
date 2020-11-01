const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "snipe",
  aliases: ["ms", "messagesnipe"],
  usage: "(pc!)snipe",
  description: "get deleted messages",
  run: async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`);

    const msg = client.snipes.get(message.channel.id);
    if (!msg)
      return message.channel.send(
        "Tidak ada pesan yang dihapus dalam channel ini!"
      );
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#d0192c")
      .setTimestamp()
      .setDescription(`\`\`\`${message.content}\`\`\``);
    if (msg.image) embed.setImage(msg.image);

    message.channel.send(embed);
  }
};
