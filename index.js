const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`البوت شغال وجاهز باسم: ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === 'مياو') {
        message.channel.send('سيرفر بشر مو حيوانات');
    }
});

client.login(process.env.DISCORD_TOKEN);
