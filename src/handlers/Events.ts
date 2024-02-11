/**
 * 
 * @author Viltech
 */

import * as fs from 'fs';
import { Client } from 'discord.js';

import EventHandlers from '../events';

class Events {
    public static init(client: Client): Client {
        for (const event of EventHandlers) {
            const name = event.event;
            client.on(name, (interaction) => event.execute(client, interaction));
        }
        return client;
    }
}

export default Events;