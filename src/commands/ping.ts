import { SlashCommandBuilder, type CacheType } from "discord.js";
import { Client, CommandInteraction } from "discord.js";

class Ping {
    public data: SlashCommandBuilder;

    constructor() {
        
    }

    public async execute(client: Client, interaction: CommandInteraction) {
        
    }
}

export default new Ping();