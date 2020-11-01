const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "give-roles",
  description: "Memberikan roles",
  usage: "<pc!giveroles>",
  aliases: ["groles", "givers"],
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return message.channel
        .send("Saya tidak memilliki izin !")
        .then(m => m.delete({ timeout: 5000 }));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message
        .reply("Kamu tidak memiliki izin !")
        .then(m => m.delete({ timeout: 5000 }));
    if (!args[0] || !args[1])
      return message
        .reply(
          "Penggunaan salah !, Coba lagi `<username || user id> <role name` || id>"
        )
        .then(m => m.delete({ timeout: 10000 }));

    try {
      const member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      const roleName = message.guild.roles.cache.find(
        r =>
          r.name === args[1].toString() ||
          r.id === args[1].toString().replace(/[^\w\s]/gi, "")
      );

      const alreadyHasRole = member._roles.includes(roleName.id);

      if (alreadyHasRole)
        return message.channel
          .send("User already has that role")
          .then(m => m.delete({ timeout: 5000 }));

      const embed = new MessageEmbed()
        .setTitle(`Role Name: ${roleName.name}`)
        .setDescription(
          `${message.author} has successfully given the role ${roleName} to ${member.user}`
        )
        .setColor("d0192c")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setFooter(new Date().toLocaleString());

      return member.roles.add(roleName).then(() => message.channel.send(embed));
    } catch (e) {
      return message.channel
        .send("Try to give a role that exists next time...")
        .then(m => m.delete({ timeout: 5000 }))
        .then(() => console.log(e));
    }
  }
};
