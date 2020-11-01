const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  category: "economy",
  description: "menampilkan jumlah isi dompet",
  usage: "<pc!balance>",
  aliases: ["bal", "cash"],
  run: async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }

    if (user.bot || user === client.user) {
        return message.channel.send("This user is a bot.");
        // Jika pengguna adalah bot, abaikan.
    }

    let balance = db.get(`account.${user.id}.balance`);
    if (!balance) balance = 0;
    else balance = balance;

    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTitle(`Balance of ${user.tag}`)
    .addField("Balance", `$${(balance).toLocaleString()}`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    .setTimestamp(new Date) // Optional :)
    return message.channel.send(embed);
}
}
