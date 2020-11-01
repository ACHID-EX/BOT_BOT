const Discord = require("discord.js");
const perfix = "pc!";
module.exports = {
  name: "serverinfo",
  alias: "si",
  run: async (client, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.guild.name}`,
      message.guild.iconURL({ format: "png", dynamic: true })
    )
    .setColor("#d0192c")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField("• <a:36:759020852825554945> Owner", message.guild.owner.user)
    .addField("• :globe_with_meridians: Wilayah server", message.guild.region)
    .addField(
      "• :calendar_spiral: Tanggal dibuat",
      message.guild.createdAt.toDateString()
    )
    .addField(
      "• :inbox_tray: Bergabung pada",
      message.member.joinedAt.toDateString()
    )
    .addField("• :label: Roles", message.guild.roles.cache.size)
    .addField("• :clipboard: Channels", message.guild.channels.cache.size)
    .addField("• :bar_chart: Total Member", message.guild.memberCount)
    .setFooter(message.guild.name, client.user.displayAvatarURL())
    .setTimestamp();
  message.channel.send(serverembed);
}
}