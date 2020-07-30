const Discord = require('discord.js');

module.exports = class cmds {
    constructor() {
        this.name = 'cmds',
        this.alias = ['cmd', 'commands', 'help'],
        this.usage = 'cmds'
    }

    run(bot, message, args) {

        let embed = new Discord.RichEmbed();

        embed.setAuthor('Suggestion Bot Commands')
        embed.setColor("F08080")
        embed.setDescription('Here are the current commands that we have added to the bot!')
        embed.addField('Commands:',
        '`+su <suggestion>`, `+br <bug>`')
        embed.setTimestamp()
        embed.setFooter(`Requested by ${message.author.tag}`)
        embed.setThumbnail(`${message.author.avatarURL}`)

        message.channel.send(embed);
        message.delete();
    }
}