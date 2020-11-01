const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  aliases: ["sp", "setpref"],
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix")
    }
    
    if(!args[0]) {
      return message.channel.send("Mohon masukan prefix yang ingin anda setel")
    } 
    
    if(args[1]) {
      return message.channel.send("Anda tidak dapat menyetel prefix sebagai argumen ganda")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("Anda tidak dapat mengirim prefix lebih dari 3 karakter")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)
    
  }
}
