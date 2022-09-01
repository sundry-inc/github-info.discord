import { Client, ClientOptions } from "discord.js";
import dotenv from "dotenv";

dotenv.config()
const TOKEN = process.env.DISCORD_BOT_TOKEN || ''//'MTAxNDA2NzM3MTM1NjQ1OTAzOQ.GmqibZ.JnelKY_DXxZ1ulsQIhwxhVoCpILawHSojrDQUo';

console.log("Bot is starting...")

const client = new Client({
    intents: []
});
client.login(TOKEN);

console.log(client);