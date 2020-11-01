module.exports = {
  name: "ghost",
  category: "hidden",
  description: "Membuat message ghost",
  usage: "<pc!ghost>",
  aliases: [],
  run: async (client, message, args) => {
    let say = args.join(" ");
    message.delete();
    message.channel.send(say);
  }
};
