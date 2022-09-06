import "dotenv/config";

import { Client } from "discord.js";

import ready from './listeners/ready'

console.log("Bot is starting...");

const TOKEN = process.env.DISCORD_BOT_TOKEN;

const client = new Client({
	intents: []
});
	client.login(TOKEN);

ready(client)