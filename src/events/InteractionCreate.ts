/**
 * 
 * @author Viltech
 */

import { Client, CommandInteraction } from 'discord.js';

class InteractionCreate {
    public static event = 'interactionCreate';
    public static async execute(client: Client, interaction: CommandInteraction): Promise<void> {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if(!command) return;

            try {
                await command.execute(client, interaction);
            } catch(e) {
                console.error(e);
                await interaction.reply({ 
                    content: 'There was an error while executing this command!',
                    ephemeral: true 
                });
            }
        } // add button interaction later
    }
}

export default InteractionCreate;