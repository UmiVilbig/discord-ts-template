/**
 * 
 * @author Viltech
 */

import { Client, Collection, IntentsBitField } from 'discord.js';

import { Events, Commands } from '../handlers';
import Locals from './Locals';

class Discord {
    private client: Client;

    constructor() {
        this.client = new Client({
            intents: [
                IntentsBitField.Flags.DirectMessages,
                IntentsBitField.Flags.Guilds,
            ]
        });
        this.mountEvents();
        this.mountCommands();
        this.launch();
    }

    /* Mount event listeners */
    private mountEvents() {
        this.client = Events.init(this.client);
    }

    /* Mount commands */
    private async mountCommands() {
        this.client.commands = new Collection();
        this.client.commandArray = [];
        this.client = await Commands.init(this.client);
    }

    /* launch the bot */
    private launch() {
        this.client.login(Locals.config().discord.token);
    }
}

export default Discord;