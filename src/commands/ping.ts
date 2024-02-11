import { SlashCommandBuilder, type CacheType } from "discord.js";
import { Client, CommandInteraction } from "discord.js";

class Ping {
    public data: SlashCommandBuilder;

    constructor() {
        this.data = new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with Pong!')
    }

    public async execute(client: Client, interaction: CommandInteraction) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API latency: ${client.ws.ping}\nClient Ping ${message.createdTimestamp - interaction.createdTimestamp}ms`;
        await interaction.editReply({
            content: newMessage
        })
    }
}

export default new Ping();