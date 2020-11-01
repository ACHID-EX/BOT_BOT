//UPTIME MUNGKIN
const http = require("http");
const express = require("express");
const app = express();

var server = require("http").createServer(app);
app.get("/", (request, response) => {
  console.log(`Ping Received`);
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get('https://organized-ea.glitch.me/');
}, 604800000);
//_______________________________________________________________________________________________________________________________
//PACKAGE REQUIRE
const discord = require("discord.js");
const { TOKEN,DEFAULT_PREFIX } = require("./config.json");
const db = require("quick.db");
const { addexp } = require("./handlers/xp.js"); //Tambahan handler xp -1
const client = new discord.Client({
  disableEveryone: true
});
//_____________________________________________________________________________________________________________________________
//BOT STATUS
client.on("ready", () => {
  client.user.setStatus("idle")
  client.user.setActivity(db.get(`status`), {
    type: "STREAMING"
  })
                          
  console.log(`Hi, ${client.user.username} is now online!`);
})

//________________________________________________________________________________________________________________________________
//DUKUNGAN SNIPE
client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
  
  client.snipes.set(message.channel.id, {
    conetnt:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })

})


//________________________________________________________________________________________________________________________________
//KOLEKSI
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
  let prefix = await db.get(`prefix_${message.guild.id}`);
   if (prefix === null) prefix = DEFAULT_PREFIX;
  
  let blacklist = await db.fetch(`blacklist_${message.author.id}`);

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (blacklist === "Blacklisted")
    return message.reply("You are blacklisted from the bot!");

  // Jika message.member tidak di-cache, simpan dalam cache.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Dapatkan perintahnya
  let command = client.commands.get(cmd);
  // Jika tidak ada yang ditemukan, coba cari dengan alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // Jika perintah akhirnya ditemukan, jalankan perintah
  if (command) command.run(client, message, args);
  
  console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`);
  
  //Tambahan handler xp -2
  return addexp(message); 
  
});

//_____________________________________________Welcome channel_____________________________________________________________________
client.on("guildMemberAdd", member => { //<<< EVENT DISINI
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let wembed = new discord.MessageEmbed() 
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#d3c9c4")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`Wellcome ${member}`);

  client.channels.cache.get(chx).send(wembed);
  
});

//____________________________________________Goodbye channel______________________________________________________________________
client.on("guildMemberRemove", member => {
 let chx = db.get(`leavchannel_${member.guild.id}`);
  
  if (chx === null) {
    return;
  }
  
  let wembed = new discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#d3c9c4")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`Goodbye ${member}`);
})
//_________________________________________________________________________________________________________________________________
//Dukungan database
client.models = { user: require("./database/models/user.js") };
require("./database/connect.js");

client.login(TOKEN);
 