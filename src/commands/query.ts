import { SlashCommandBuilder, type CacheType } from "discord.js";
import { Client, CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";

class Query {
    public data: SlashCommandBuilder;

    constructor() {
        
    }

    public async execute(client: Client, interaction: CommandInteraction) {
        
    }
}

export default new Query();