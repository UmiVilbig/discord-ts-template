/**
 * 
 * @author Viltech
 */

import type { Client } from "discord.js";

class Ready {
    public static event = 'ready';
    public static once = true;
    public static execute(client: Client): void {
        console.log(`${client.user?.tag} is logged in and online!`)
    }
}

export default Ready;