This file will basically tell you how to set up the bot.

I don't know how this works on Linux/Mac so I'll tell you how to do it through Windows

Install Node.js on your computer.

Open the folder where this is located in Command Prompt, type "npm install discord.js --save", "npm install djs-commands --save" this basically gives
the bot all the neccesary files that it would need to run anything, without these two the bot would not work.


1. Setup an application on https://discordapp.com/developers/applications & turn it into a bot application, this shouldn't need explaining

2. Go into the config.json, change the "token" to your application's token, do not tell or show this token to anyone.
(You can change the prefix if you want, its up to you.)

3. Change the embeds to whatever you wish it to be, we recommend the example, I mostly recommend changing the formats.
The IDs will need to be changed, Where it says "YourID" you will need to change it to your user id, Enable Developer mode on discord, right click your
profile & copy ID to find this.

Where it says something like "<#546874704850321409>" you will need to change to the channel you wish to mention in the Embed. Find this out by typing
\#**channel-name** Example: \#general and copy the id it sends.

Places where it says "bot.channels.get('ChannelID')" change the ChannelID inside the '' to your channel id, find this out by coping the id
from the channel, this is either done by taking the number you got from the \*channel-name* or right clicking a channel & copying the ID

Where it says stuff like "if (message.guild.id === 'GuildID')" change the GuildID in the '' to your discord server ID.
Get this by right clicking your guild icon on the side of your screen & copying the ID.

After you have configured this bot correctly:
You can load it up in command prompt with "node index.js"

Note: The bot will only be online while the command prompt is open, You can buy bot hosting on websites like sparkedhosting, I only recommend
doing this if you're planning to have the bot online all the time & you have some knowledge on JavaScript/Discord.js.
