/**
 * 
 * @author Vitlech
 */

import { type Application } from "express";
import Locals from "../providers/Locals";

import apiRouter from "./routes/Api";

class Routes {
    public mountApi(_express: Application): Application {
        
    }
}

export default new Routes;