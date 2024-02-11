/**
 * 
 * @author Vitlech
 */

import { type Application } from "express";
import Locals from "../providers/Locals";

import apiRouter from "./routes/Api";

class Routes {
    public mountApi(_express: Application): Application {
        const apiPrefix = Locals.config().app.prefix;
        console.log("EXPRESS:: Initializing Routes.");
        return _express.use(`/${apiPrefix}`, apiRouter);
    }
}

export default new Routes;