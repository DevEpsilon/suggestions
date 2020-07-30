const Discord = require("discord.js");

module.exports = class brformat {
    constructor(){
        this.name = 'brformat',
        this.alias = ['brf'],
        this.usage = 'brformat'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    if (message.author.id === 'YourID')
    embed.setAuthor('-=[Bug Report Information]=-')
    embed.setDescription('How to make a bug report:\n \nType ;;br <bug> in <#738206355294257202> to make your report!\n \n__Only type bug reports in <738206355294257202>.')

    message.channel.send(embed) 
    message.delete();
    }
}