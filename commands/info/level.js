const db = require('quick.db')
const discord = require('discord.js')
const { getInfo } = require("../../handlers/xp.js")
module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  usage: "level <user>",
  aliases: ["rank", "lvl"],
  category: "info",
  run: (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | Saya berada di level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot tidak punya level")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** keluar dari xp`)
    
    let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("#d3c9c4")
    .setThumbnail(user.avatarURL())
    .setDescription(`**LEVEL** - ${level}
**XP** - ${remxp}/${levelxp}`)
    
 message.channel.send(embed)   
    
    
    
    
  }
}
