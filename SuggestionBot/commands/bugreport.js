const Discord = require("discord.js");

module.exports = class bugreport {
    constructor(){
        this.name = 'bugreport',
        this.alias = ['br', 'report'],
        this.usage = 'bugreport'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()

        var command = args[0];
        var Bug = args.slice(1).join(" ")

         embed.setTitle(`New Bug Report`)
         embed.setColor(0xF08080)
         embed.setDescription('New Bug Report;')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Bug**',
         `${Bug}`)
         embed.addField('Bug Report by:',
         `<@${message.author.id}>`)

         if (message.guild.id === 'GuildID')

         bot.channels.get("ChannelID").send(embed);

         message.delete();

         message.author.send(`<@${message.author.id}>, Thanks for your report!`)
         }
    }