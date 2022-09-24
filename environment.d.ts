declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_BOT_TOKEN: string;
      MONGODB_CLUSTER_USER: string;
      MONGODB_CLUSTER_PASS: string;
      GITHUB_TOKEN: string;
    }
  }
}

export {}