module.exports = {
  name: "anime",
  caetogory: "fun",
  usage: "anime",
  aliases: ["an"],
  run: async (client, message, args) => {
    const { MessageEmbed } = require("discord.js");
    let m = await message.channel.send(
      "Mencari anime...<a:giphy27:758300513791246336>"
    );

    const Discord = require("discord.js");
    const KagApi = require("@kagchi/kag-api");
    const kawai = await KagApi.loli.kawaii();
    const now = Date.now();
    const embed = new Discord.MessageEmbed()

      .setAuthor("Anime", kawai)
      .setImage(kawai)
      .setFooter(`Request ${message.author.username}`)
      .setColor("#d3c9c4")
      .setTimestamp();
    return setTimeout(function() {
      m.edit("Berhasil menemukan anime!!<a:giphy39:758300022965534721>", embed);
    }, 3000);
  }
};
