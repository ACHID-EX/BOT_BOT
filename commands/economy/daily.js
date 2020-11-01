const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");

module.exports = {
  name: "daily",
  category: "economy",
  description: "mendapatkan bonus harian",
  usage: "<pc!daily>",
  aliases: [],
  run: async (client, message, args) => {
    let pad_zero = num => (num < 10 ? "0" : "") + num;
    let cooldown = 1.8e7; // 24 jam dalam ms.
    let amount = 500; // Berapa banyak pengguna yang akan mendapatkannya di harian mereka.

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    try {
      if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        let hours = pad_zero(timeObj.hours).padStart(2, "0"),
          mins = pad_zero(timeObj.minutes).padStart(2, "0"),
          secs = pad_zero(timeObj.seconds).padStart(2, "0");

        let finalTime = `**${hours}:${mins}:${secs}**`;
        return message.channel.send(
          `Sorry, you cannot collect your dailies too early. Please wait until ${finalTime}.`
        );
      } else {
        db.set(`lastDaily.${message.author.id}`, Date.now());
        db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(
          `Great **${message.author.tag}!** You've been received 500 dollars!`
        );
      }
    } catch (error) {
      console.log(error);
      return message.channel.send(`Oopsie, unknown error I guess: ${error}`);
    }
  }
};
