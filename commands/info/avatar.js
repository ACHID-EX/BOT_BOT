const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "info",
  description: "menampilkan pp",
  usage: "pc!<avatar>/<@user>",
  aliases: [],
  run: async (client, message, args) => {
    let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }

    let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
    // 4096 adalah ukuran avatar terbesar yang baru.
    // Mengaktifkan dinamika, ketika avatar pengguna dianimasikan / GIF, itu akan menghasilkan format GIF atau gambar beregerak.
    // Jika tidak dianimasikan, ini akan menghasilkan format gambar normal.

    const embed = new Discord.MessageEmbed()
      .setTitle(`Menampilkan avatar`)
      .setDescription(`[Avatar URL of **${user.toString()}**](${avatar})`)
      .setColor("#d0192c")
      .setFooter(
        `Request by ${message.author.username}`,
        client.user.displayAvatarURL()
      )
      .setImage(avatar);

    return message.channel.send(embed);
  }
};
