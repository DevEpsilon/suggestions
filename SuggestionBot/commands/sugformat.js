const Discord = require("discord.js");

module.exports = class sugformat {
    constructor(){
        this.name = 'sugformat',
        this.alias = ['sugf'],
        this.usage = 'sugformat'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    if (message.author.id === 'YourID')
    embed.setAuthor('-=[Suggest Features Information]=-')
    embed.setTitle('Suggest Features')
    embed.setDescription('How to make a new Suggestion:\n \nType **+su <suggestion>** in <#546874704850321409> to make a suggestion, These will be put to poll in the channel for the server to vote.\n \nSpamming this feature will result in privilage to speak revoked\nDo __NOT__ use this command for anything other than Suggestions, Only type the command in Bot Commands. Discuss the suggestion in <#546847417782370304>\n \n__Only type Suggestions in <#546874704850321409>__.')

    message.channel.send(embed) 
    message.delete();
    }
}