const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { CommandHandler } = require ('djs-commands');
const CH = new CommandHandler ({
    folder: __dirname + "/commands/",
    prefix: [";;"]
});

bot.on('ready', () => {
    console.log(`${bot.user.tag} is now online!`)
});

bot.on('message', (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(/ +/g);
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(bot, message, args);
    } catch(e){
        console.log(e)
    }
});

bot.on('ready', () => {
    bot.user.setActivity('Suggestions!', { type: 'WATCHING'})
});
bot.login(config.token)