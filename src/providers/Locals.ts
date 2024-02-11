/**
 * 
 * @author Viltech
 */

import * as dotenv from 'dotenv';   
import * as path from 'path';

class Locals {
    /* App configurations */
    public static config(): any {
        dotenv.config({ path: path.join(__dirname, '../../.env') });

        const token = process.env.TOKEN;
        const client_id = process.env.CLIENT_ID || '969451891366952991';
        const guild_id = process.env.GUILD_ID || '932150468925333504';

        const db_port = process.env.DB_PORT || 27017;
        const db_host = process.env.DB_HOST || 'localhost';

        const app_port = process.env.APP_PORT || 3000;
        const app_host = process.env.APP_HOST || 'localhost';
        const app_url = process.env.APP_URL || `http://${app_host}:${app_port}`;

        const app_name = process.env.APP_NAME || 'Viltech';
        const app_version = process.env.APP_VERSION || '1.0.0';
        const production = process.env.NODE_ENV || 'development';

        return {
            discord: {
                token,
                client_id,
                guild_id
            },
            database: {
                port: db_port,
                host: db_host
            },
            app: {
                port: app_port,
                host: app_host,
                url: app_url,
                name: app_name,
                version: app_version
            },
            production
        }
    }
}

export default Locals;