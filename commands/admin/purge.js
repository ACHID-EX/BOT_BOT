module.exports = {
  name: "purge",
  category: "moderation",
  usage: "purge",
  description: "menhapus pesan sekaligus",
  aliases: ["clear", "prune"],
  run: async (client, message, args) => {
    message.delete()
    
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Saya tidak memiliki izin !").then(m => m.delete({ timeout: 5000 }))
     if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Kamu tidak memiliki izin !").then(m => m.delete({ timeout: 5000 }))
     if (!args[0])
      return message.channel.send(`Please enter a amount 1 to 100`).then(m => m.delete({ timeout: 5000 }))

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    await message.channel.bulkDelete(deleteAmount, true);
  }
};
