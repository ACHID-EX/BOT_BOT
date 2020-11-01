const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  description: "Menampilkan info command yang tersedia",
  usage: "<pc!help>",
  aliases: ["h"],
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
      .setTitle(":globe_with_meridians: Prime")
      .setDescription(`<a:27:758257361143070760>***Daftar Command***`)
      .addField(
        ":desktop: Prefix: `pc!`",
        "*contoh:* `pc!serverinfo`, `pc!invite` untuk invite bot dan join link server prime"
      )
      .setColor("#d0192c")
      .setThumbnail(
        client.user.displayAvatarURL({ format: "png", dynamic: true }) +
          "?size=2048"
      )
      .addField(
        "**:statue_of_liberty: Admin**",
        "| `ban` | `kick` | `mute` |`purge` | `resetwarns` | `setprefix` | `setwelcome` | `unmute` | `warn` | `warnings` |"
      )
      .addField(
        "**:mag_right: Info**",
        "| `avatar` | `botinfo` | `corona` | `help` | `infouser` | `ping` | `serverinfo` |"
      )
      .addField(
        "**:unicorn: Animal**",
        "| `burung` | `dog` | `koala` | `kucing` | `panda` | `serigala` |"
      )
      .addField(
        "**:jack_o_lantern: Fun**",
        "| `anime` | `kitsune` | `meme` | `meme2` | `nekos` | `urban` | `waifu` |"
      )
      .addField(
        "**:telescope: Other**",
        "| `esay` | `gempa` | `intro` | `invite` | `kalkulator` | `say` | `spotify` | `uptime` | `weather`"
      )
      .addField("**:japanese_ogre: NSFW**", "|| | `anal` | `blowjob` | `boobs` | `feet` | `femdom` | `lewd` | `pussy` | `penis` | ||")
      .setFooter(message.guild.name, client.user.displayAvatarURL())
      .setTimestamp();
    message.author.send(embed);
    
    let wembed = new MessageEmbed()
    .setDescription("Mohon maaf jika anda mendapatkan bug silahkan laporkan bug dengan cara : `<prefix>bug <isi pesan>`")
    .setColor("#d0192c")
    .setTimestamp()
    .setFooter("Message from Dev PRIME bot")
    message.author.send(wembed)
  }
};
