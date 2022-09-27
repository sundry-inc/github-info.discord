import "dotenv/config";

import { Client, GatewayIntentBits } from "discord.js";

import ready from './listeners/ready'

console.log("Bot is starting...");
const TOKEN = process.env.DISCORD_BOT_TOKEN;

const client: Client = new Client({

	intents: [
		GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
	]
});
	client.login(TOKEN);

ready(client);