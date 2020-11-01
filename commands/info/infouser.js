const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "infouser",
  category: "info",
  description: "Menampilkan info pengguna",
  usage: "<pc!infouser>",
  aliases: ["ui", "iu"],
  run: async (client, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(userArgs[0]) ||
      message.guild.members.cache.find(
        x =>
          x.user.username.toLowerCase() === userArgs.slice(0).join(" ") ||
          x.user.username === userArgs[0]
      ) ||
      message.member;

    if (member.presence.status === "dnd")
      member.presence.status = "Do Not Disturb";
    if (member.presence.status === "online") member.presence.status = "Online";
    if (member.presence.status === "idle") member.presence.status = "Idle";
    if (member.presence.status === "offline")
      member.presence.status = "offline";

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment
      .utc(member.joinedAt)
      .format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTimestamp()
      .setColor("#d0192c")
      .setFooter(message.guild.name, client.user.displayAvatarURL())
      .setImage(member.user.displayAvatarURL({ size: 4096, dynamic: true }))
      .addField(":chart_with_downwards_trend: • Id Pengguna:", member.id, true)
      .addField(":bookmark: • Roles:", `<@&${member._roles.join("> <@&")}>`, true)
      .addField(
        ":envelope_with_arrow: • Akun Dibuat:",
        ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`,
        true
      )
      .addField(
        ":bust_in_silhouette: • Mulai Bergabung Ke Server:",
        `${joineddate} \n ${joined} day(S) Ago`
      )
      .addField(":fire: • Status:", status);

    message.channel.send(userEmbed);
  }
};
