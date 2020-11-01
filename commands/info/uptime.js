const { MessageEmbed } = require("discord.js");
const uptime = require("moment");

module.exports = {
  name: "uptime",
  alias: ["up"],
  description: "Uptime Bot",
  run: async (client, message) => {
    const uptime = require("pretty-ms")(client.uptime, {verbose: true});

    const embed = new MessageEmbed()
      .setTitle(`${client.user.username} Uptime`)
      .setFooter(message.guild.name)
      .setColor("#d0192c")
      .addField("Uptime :satellite:", uptime, true)
      .setTimestamp();
    return message.channel.send(embed).catch(console.error);
  }
};
