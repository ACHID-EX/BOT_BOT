const discord = require("discord.js");

module.exports = {
  name: "support",
  category: "info",
  description: "Menampilkan lick akun ig primec",
  usage: "<pc!support>",
  aliases: [],
  run: async (client, message, args) => {

    let avatar = client.user.displayAvatarURL({ size: 2048, dynamic: true });

    const embed = new discord.MessageEmbed()
      .setTitle(client.user.username, client.user.avatarURL())
      .setColor("#d0192c")
      .setThumbnail(avatar)
      .setDescription(`Follow ig primecity
[Click Here](https://instagram.com/primec.community?igshid=12gh9bm9snqkw)`)

    message.channel.send(embed);
  }
};
