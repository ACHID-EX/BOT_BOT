const { MessageEmbed } = require("discord.js");
const { platform, arch, cpus } = require("os");

module.exports = {
  name: "bot info",
  category: "info",
  description: "menampilkan bot info",
  usage: "<pc!botinfo>",
  aliases: ["bi"],
  run: async (client, message, args) => {
    const model = cpus()[0].model + " " + arch();
    const tanggalBuat = client.user.createdAt;

    const embed = new MessageEmbed()
      .setColor("#d0192c")
      .setTitle("<a:23:757900881449582613>Bot Statistics")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Developer", `||<a:giphy2:759003128527323167>>A EX Rouwett||`)
      .addField(
        "<a:35:759014937904939008>Bot",
        `
Username: ${client.user.username}
Tanggal Dibuat: ${tanggalBuat}`
      )
      .addField(
        "<a:34:759011328333185024>System",
        `
CPU: ${model}
Platform: ${platform}
Websocket: ${client.ws.ping}ms(miliseconds)`
      )
      .addField(
        ":scroll: **Invite link**",
        `[invite](https://discordapp.com/api/oauth2/authorize?client_id=755187077896994877&permissions=8&scope=bot)`
      )
      .setFooter(message.guild.name, client.user.displayAvatarURL())
      .setTimestamp();

    message.channel.send(embed);
  }
};
