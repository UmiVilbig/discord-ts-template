/**
 * 
 * @author Viltech
 */

import { Client } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

import CommandBuilder from '../commands';
import Locals from '../providers/Locals';

class Commands {
    public static async init(client: Client): Promise<Client> {
        const { commands, commandArray } = client;
        for (const command of CommandBuilder) {
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
        }

        const clientId = Locals.config().discord.client_id;
        const guildId = Locals.config().discord.guild_id;

        const rest = new REST({ version: '9' }).setToken(Locals.config().discord.token);
        try {
            console.log('Started refreshing application (/) commands.');
            if (Locals.config().production) {
                await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandArray });
            } else {
                await rest.put(Routes.applicationCommands(clientId), { body: commandArray });
            }
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }

        return client;
    }
}

export default Commands;