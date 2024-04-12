import { SlashCommandBuilder, type CacheType } from "discord.js";
import { Client, CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";

class Query {
    public data: SlashCommandBuilder;

    constructor() {
        this.data = new SlashCommandBuilder()
                .setName('query')
                .setDescription("Example query into the database")
    }

    public async execute(client: Client, interaction: CommandInteraction) {
        const prisma = new PrismaClient();
        
        const message = await interaction.deferReply({
            fetchReply: true
        });

        await prisma.query.create({
            data: {
                entry: new Date()
            }
        })
        
        const entries = await prisma.query.count()
        console.log(entries)
        await interaction.editReply({
            content: `there are ${entries} in the database`
        })
    }
}

export default new Query();