import "dotenv/config";

import { Client } from "discord.js";
import mongoose from "mongoose";

const CLUSTER_PASS = process.env.MONGODB_CLUSTER_PASS;
const CLUSTER_USER = process.env.MONGODB_CLUSTER_USER;

export default (client: Client): void => {
  client.on('ready', async () => {
    await mongoose.connect(
      `mongodb+srv://${CLUSTER_USER}:${CLUSTER_PASS}@cluster0.fki2tsu.mongodb.net/?retryWrites=true&w=majority`,
      {
        keepAlive: true, 
      }
    );
    
    if(!client.user || !client.application) console.error('Oops, client or application error...');    
    console.log('Success!');
  })
}