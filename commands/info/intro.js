const Discord = require("discord.js");

module.exports = {
  name: "intro",
  category: "info",
  description: "Isi biodata",
  usage: "intro",
  aliases: [],
  run: async (client, message, args) => {
    message.delete();

    let intro = `➢〔:bust_in_silhouette:〕Nama : ${args[0]
      .split("_")
      .join(" ")}\n➢〔:birthday:〕Umur : ${args[1]
      .split("_")
      .join(" ")}\n➢〔:globe_with_meridians:〕Asal : ${args[2]
      .split("_")
      .join(" ")}\n➢〔:couple:〕Gender : ${args[3]
      .split("_")
      .join(" ")}\n➢〔:person_juggling:〕Hobby : ${args[4]
      .split("_")
      .join(" ")}`;

    let embed = new Discord.MessageEmbed()
      .setTitle(
        "༺ •『 :clipboard: Introduction :clipboard: 』• ༻",
        message.author.avatarURL()
      )
      .setDescription(intro)
      .setColor("#d0192c")
      .setThumbnail(message.author.displayAvatarURL())
      .setFooter(client.user.username, client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
