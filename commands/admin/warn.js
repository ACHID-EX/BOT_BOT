const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You should have admin perms to use this command!"
      );
    }

    const user = message.mentions.users.first();

    if (!user) {
      return message.reply(
        "⚠Please Mention the person to who you want to warn, ***pc!warn*** ``@user`` ***<reason>***``"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.reply("❌```You can not warn bots```");
    }

    if (message.author.id === user.id) {
      return message.reply("``You can not warn yourself``");
    }

    if (user.id === message.guild.owner.id) {
      return message.reply("``You jerk, how you can warn server owner``😑");
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.reply(
        "⚠Please provide reason to warn, ***pc!warn @user*** ``<reason>``"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === 3) {
      return message.channel.send(`${user} ⚠Already reached his/her limit with ***3 warnings***`)
    }

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
    } else if (warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
    }
    let embed = new MessageEmbed()
      .setColor("#d0192c")
      .addField("You warned", `\`\`\`${user.displayName}\`\`\``)
      .addField("For Reason", `\`\`\`${reason}\`\`\``)
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp();
    await message.channel.send(embed).cath(console.error);
  }
};
