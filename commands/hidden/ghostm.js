module.exports = {
  name: "ghostm",
  category: "hidden",
  description: "Ghost ping",
  usage: "<pc!ghostm> <@user/@here>",
  aliases: "",
  run: async (client, message, args) => {
    let rMember =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    const response = args.join(" ");
    message.delete();
    message.rMember.send(response);
  }
};
