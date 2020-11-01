const { MessageEmbed } = require("discord.js");
const prefix = "pc!";

module.exports = {
  name: "kick",
  category: "Admin",
  description: "Mengeluarkan pengguna/user",
  usage: "<pc!kick>",
  aliases: [],
  run: async (client, message, args) => {
    if (message.content.startsWith(`${prefix}kick`)) {
      if (
        !message.member.hasPermission([
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "ADMINISTRATOR"
        ])
      )
        return message.reply(
          "```You dont have permission to kick member!!!```"
        );

      if (
        !message.guild.me.hasPermission(
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "ADMINISTRATOR"
        )
      )
        return message.channel.send(
          "```I dont have permission to kick members!```"
        );

      let member = message.mentions.members.first();
      if (!member) return message.reply("Mention user to kick!");

      let reason = args.slice(1).join(" ");
      if (!reason) return message.reply("``Mohon berikan penjelasan..!!``");
      member.kick().then(member => {
        let embed = new MessageEmbed()
          .setColor("#d0192c")
          .setFooter(
            `Request ${message.author.username}`,
            client.user.displayAvatarURL()
          )
          .setTimestamp()
          .addField("Kick User", `\`\`\`${member.displayName}\`\`\``)
          .addField("Reason", `\`\`\`${reason}\`\`\``)
          .addField("Kick By", `\`\`\`${message.author.username}\`\`\``);
        message.channel.send(embed);
      });
    }
  }
};
