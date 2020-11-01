const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bug",
  category: "info",
  usage: "bug",
  descrition: "Mengirimkan laporan bug",
  aliases: ["?"],
  run: async (client, message, args) => {
    const response = args.join(" ");
    const embed = new MessageEmbed()

      .setAuthor("Laporan BUG", client.user.displayAvatarURL({ format: "png" }))
      .setDescription("Laporan bug sudah diterima...")
      .addField(
        "Prime_BOT",
        `<:32:758277315590750208>*Bug : ${response}*
:postbox:*Dari : ${message.author.tag}*`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.guild.name)
      .setColor(`#d0192c`);
    embed.setTimestamp();

    client.users.cache.get('739317981821141062').send(`BUG : ${response}
Dari : ${message.author.tag}`);

    message.channel.send(embed);
  } 
};
