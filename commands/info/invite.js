const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Menampilkan Link DC/invite bot",
  usage: "<pc!invite>",
  aliases: [],
  run: async (client, message, args) => {
    const REBEL = process.env.MASALAH;

    let avatar = client.user.displayAvatarURL({ size: 2048, dynamic: true });

    const embed = new discord.MessageEmbed()
      .setTitle(client.user.username, client.user.avatarURL())
      .setColor("#d0192c")
      .setThumbnail(avatar)
      .setDescription(
        `Dibawah ini adalah link invite BOT dan link join server, Terimakasih :pray:
| [AMBIL UNDANGAN BOT](https://discord.com/api/oauth2/authorize?client_id=${REBEL}&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D755187077896994877%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.com%252Fapi%252Foauth2%252Fauthorize%253Fclient_id%253D755187&scope=bot) |
| [AMBIL TICKET MENUJU PRIMEC SERVER](https://discord.gg/rzERF7j) |`
      );
    message.channel.send(embed);
  }
};
