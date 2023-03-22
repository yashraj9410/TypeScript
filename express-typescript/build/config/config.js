"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = 2200;
const mongo_url = 'mongodb+srv://yash:1234@cluster0.3iqbpit.mongodb.net/?retryWrites=true&w=majority';
exports.config = {
    mongo: {
        url: mongo_url
    },
    server: {
        port: PORT
    }
};
