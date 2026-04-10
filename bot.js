const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

const CHANNEL_ID = "1491756606772215808";
const TOKEN = "MTQ5MTc3MjEzMDg0NzYyNTMxMA.GhlTVL.mMQ7dWPV6TGlmflFFggj0Y0LPMAYb1uCGIlcVA";

client.once('ready', () => {
  console.log("البوت اشتغل ✅");
});

client.on('voiceStateUpdate', (oldState, newState) => {
  if (!oldState.channel && newState.channel) {
    const user = newState.member.user.username;
    const channel = newState.channel.name;

    const textChannel = client.channels.cache.get(CHANNEL_ID);
    if (textChannel && textChannel.isTextBased()) {
    textChannel.send({ content: `🎧 ${user} دخل ${channel}` });
}
  }
});

client.login(TOKEN);