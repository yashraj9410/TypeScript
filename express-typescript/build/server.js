"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./config/config");
const user_route_1 = __importDefault(require("./routes/user-route"));
const app = (0, express_1.default)();
//connecting the database using the config
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => {
    console.log("database connected");
    startServer();
})
    .catch(err => {
    console.log("Database connection failed ");
});
// if mongoose is connected then call this function to start server 
const startServer = () => {
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use("/", user_route_1.default);
    http_1.default.createServer(app).listen(config_1.config.server.port, () => {
        console.log(`server listening at ${config_1.config.server.port}`);
    });
};
