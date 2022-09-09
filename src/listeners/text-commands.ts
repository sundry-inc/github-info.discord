import { Client } from "discord.js";

import text_commands from "src/types/listeners";

export default (client: Client, commands: text_commands) => {
  client.on('messageCreate', (message) => {
    if (message.author.bot || !message.content.startsWith('+')) return;

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift()!.toLowerCase();

    if (!commands[commandName]) {
      return;
    }

    try {
      commands[commandName].callback(message, ...args);
    } catch (error) {
      throw new Error(`${error}`);
    }       
  }) 
}