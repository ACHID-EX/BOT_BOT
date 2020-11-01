const { MessageEmbed } = require("discord.js");
const prefix = "pc!";

module.exports = {
  name: "banned",
  category: "admin",
  description: "blokir user",
  usage: "<pc!ban",
  aliases: ["ban", "banned"],
  run: async (client, message, args) => {
    if (message.content.startsWith(`${prefix}ban`)) {
      if (
        !message.member.hasPermission([
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "ADMINISTRATOR"
        ])
      )
        return message.reply("```You dont have permission to ban members!!```");

      if (
        !message.guild.me.hasPermission(
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "ADMINISTRATOR"
        )
      )
        return message.channel.send(
          "```I dont have permission to ban members!```"
        );

      let member = message.mentions.members.first();
      if (!member) return message.channel.send("``Mention user to ban!``");

      let reason = args.slice(1).join(" ");
      if (!reason)
        return message.channel.send("``Please give the reason..!!``");
      member.ban().then(member => {
        let embed = new MessageEmbed()
          .setColor("#d0192c")
          .addField("Banned User", `\`\`\`${member.displayName}\`\`\``)
          .addField("Reason", `\`\`\`${reason}\`\`\``)
          .addField("Banned By", `\`\`\`${message.author.username}\`\`\``)
          .setFooter(
            `Request ${message.author.username}`,
            client.user.displayAvatarURL()
          )
          .setTimestamp();
        message.channel.send(embed);
      });
    }
  }
};
