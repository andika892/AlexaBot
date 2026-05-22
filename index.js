const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once("ready", () => {
    console.log(`Bot online: ${client.user.tag}`);
});

client.login("MTUwNzM0MTk2NTMyNTUwMDUyOA.GcNATr._g0_pXY29rMyFuz19POZ0Y-BBCrH0TQvh3RO3Y");
