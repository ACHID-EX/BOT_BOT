const math = require("mathjs");

const Discord = require("discord.js");

module.exports = {
  name: "kalkulator",
  description: "Menjawab perhitungan matematika",
  usage: "<pc!kalkulator>",
  aliases: ["kk"],
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("Please provide a question");

    let resp;

    try {
      resp = math.evaluate(args.join(" "));
    } catch (e) {
      return message.channel.send("Please provide a **valid** question");
    }

    const embed = new Discord.MessageEmbed()
      .setColor("#d0192c")
      .setTitle("Calculator")
      .setFooter(message.guild.name, client.user.displayAvatarURL())
      .addField("Question", `\`\`\`css\n${args.join(" ")}\`\`\``)
      .addField("Answer", `\`\`\`css\n${resp}\`\`\``);

    message.channel.send(embed);
  }
};
