import { Client } from "discord.js";

import text_commands_type from "src/types/listeners";

export default (client: Client, commands: text_commands_type) => {
  client.on('messageCreate', (message) => {
    if (message.author.bot || !message.content.startsWith('+')) return;

    const args: string[] = message.content.slice(1).split(/ +/);
    const commandName: string = args.shift()!.toLowerCase();

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