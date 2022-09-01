import "dotenv/config";

import { Client, ClientOptions } from "discord.js";
import mongoose from "mongoose";

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CLUSTER_PASS = process.env.MONGODB_CLUSTER_PASS;
const CLUSTER_USER = process.env.MONGODB_CLUSTER_USER;

console.log("Bot is starting...");

const client = new Client({
	intents: []
});

client.on('ready', async () => {
	await mongoose.connect(
		`mongodb+srv://${CLUSTER_USER}:${CLUSTER_PASS}@cluster0.fki2tsu.mongodb.net/?retryWrites=true&w=majority`,
		{
			keepAlive: true, 
		}
	)
})
client.login(TOKEN);

console.log(client);