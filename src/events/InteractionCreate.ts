/**
 * 
 * @author Viltech
 */

import { Client, CommandInteraction } from 'discord.js';

class InteractionCreate {
    public static event = 'interactionCreate';
    public static async execute(client: Client, interaction: CommandInteraction): Promise<void> {

    }
}

export default InteractionCreate;