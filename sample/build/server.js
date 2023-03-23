"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/", route_1.default);
mongoose_1.default
    .connect("mongodb+srv://yashraj7011:1234@cluster0.clmqdv7.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("connected"))
    .catch(err => console.log(err));
server.listen(3000, () => console.log("Server Runnning"));
