const Discord = require('discord.js');

module.exports = class suggestion {
    constructor(){
        this.name = 'suggestion',
        this.alias = ['suggest', 'su'],
        this.usage = 'suggestion'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()

        var command = args[0];
        var suggestion = args.slice(1).join(" ");

        embed.setTitle('Upvote | Downvote')
        embed.setColor("F08080")
        embed.setDescription('Suggest features to our discord server with `;;su <suggestion>`')
        embed.setThumbnail(`${message.author.avatarURL}`)
        embed.addBlankField(true)
        embed.addField('Suggestion',
        `${suggestion}`)
        embed.addField('Suggestion By',
        `<@${message.author.id}>`)

        if (message.guild.id === 'GuildID')
        bot.channels.get('ChannelID').send(embed).then(x=> x.react('👍').then(x.react('👎')))
        message.delete()
    }
}