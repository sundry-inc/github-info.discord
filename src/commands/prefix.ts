import discord, { Message } from "discord.js";

import Prefix from "../schemas/PrefixSchema";

export default {
  callback: async (message: Message, ...args: string[]) => {
    const prefix = args[0]

    const newPrefix = new Prefix({
      prefix
    });
    
    const sevedPrefix = await newPrefix.save();
    
    message.reply('Prefix updated');
  }
}