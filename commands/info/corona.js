const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "info",
    description: "menampilkan info kasus corona",
    usage: "<pc!corona> <country/city>",
    aliases: ["covid", "covid19"],
    run: async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Corona Cases World Wide')
            .setColor('#d0192c')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: 'Total Kasus:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Kematian:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Pulih:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Kasus Aktif:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Kasus Kritis:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Pemulihan Hari Ini:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Kematian Hari Ini:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.channel.send(embed)
    }
};