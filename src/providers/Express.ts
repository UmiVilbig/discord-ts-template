/**
 * 
 * @author Viltech
 */

import express from 'express';

import Locals from './Locals';
import Routes from '../server/Routes';

class Express {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.mountRoutes();
        this.init();
    }

    private mountRoutes() {
        this.express = Routes.mountApi(this.express);
    }

    public init() {
        const port: number = Locals.config().app.port;
        const host: string = Locals.config().app.host;
        this.express.listen(port, host, () => {
            console.log(`EXPRESS:: Server started at http://${host}:${port}`);
        })
    }
}

export default new Express;