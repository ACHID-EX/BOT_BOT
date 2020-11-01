const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "femdom",
  category: "NSFW",
  description: "Menampilkan gambar/gif femdom",
  usage: "<pc!femdom>",
  aliases: [],
  run: async (client, message, args) => {
    if (!message.channel.nsfw)
      return message.reply(
        "This channel does not have `NSFW` permissions"
      );
    let m = await message.channel.send(
      "*Sedang mencari...*<a:giphy27:758300513791246336>"
    );
    try {
      const { body } = await superagent.get(
        "https://nekos.life/api/v2/img/femdom"
      );

      const embed = new Discord.MessageEmbed()
        .setColor("#d4d3cc")
        .setFooter(`Req ${message.author.tag}`)
        .setDescription(`**Anime femdom**`)
        .setTimestamp()
        .setImage(body.url);
      return setTimeout(function() {
        m.edit("*Berhasil didapatkan!!.*<a:giphy39:758300022965534721>", embed);
      }, 3000);
    } catch (e) {
      message.channel.send("Sedang Maintenace Oni-Chann!!");
    }
  }
};
