const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Mengubah status bot",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    // COMMAND KHUSUS OWNER
    if(!message.author.id === "739317981821141062") {
      return message.channel.send("Command ini hanya bisa digunakan oleh owner")
    }
    //ARGUMEN
    if(!args.length) {
      return message.channel.send("Harap masukan status message ")
    }
    
    db.set(`status`, args.join(" "))
    await message.channel.send("Status bot berhasil di update")
    return process.exit(1);
  }
}