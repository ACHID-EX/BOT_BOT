const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bird",
  category: "animals",
  description: "menampilkan gambar burung",
  usage: "<pc!burung>",
  aliases: [],
  run: async (client, message, args) => {
    const url = "https://some-random-api.ml/img/birb";

    let image, response;
    let fact, responses;
    try {
      response = await axios.get(url);
      image = response.data;

    } catch (e) {
      return message.channel.send(`An error occured, please try again!`);
    }

    const embed = new MessageEmbed()
      .setTitle(`Random Bird Image and Fact`)
      .setColor(`#f3f3f3`)
      .setImage(image.link);

    message.channel.send(embed);
  }
};
