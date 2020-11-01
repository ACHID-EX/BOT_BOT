const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "boobs",
  category: "NSFW",
  description: "menampilkan gambar/gif boobs",
  usage: "<pc!boobs>",
  aliases: [""],
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
        "https://nekos.life/api/v2/img/boobs"
      );

      const embed = new Discord.MessageEmbed()
        .setColor("#d4d3cc")
        .setFooter(`Req ${message.author.tag}`)
        .setDescription(`**Anime boobs**`)
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
