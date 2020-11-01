const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping1",
  category: "info",
  usage: "ping1",
  description: "Returns latency and API ping",
  aliases: ["p1"],
  run: async (client, message, args) => {
    let random = Math.floor(Math.random() * 100 + 1);
    let qandom = Math.floor(Math.random() * 100 + 1);
    let hehe = Math.floor(Math.random() * 60 + 1);
    let m = await message.channel.send(
      "*Sedang mencari info...*<a:giphy27:758300513791246336>"
    );
    let embed = new MessageEmbed()
      .addField(":mag: • Ping", `*${client.ws.ping}ms*`, true)
      .addField(":satellite_orbital: • Latency", `*${random}ms*`, true)
      .addField(":orange_heart: • API", `*${qandom}ms*`, true)
      .setColor("#d0192c")
      .setFooter(message.guild.name, client.user.displayAvatarURL());
    return setTimeout(function() {
      m.edit(
        "*Berhasil mengumpulkan info!!!*<a:giphy39:758300022965534721>",
        embed
      );
    }, 3000);
  }
};
