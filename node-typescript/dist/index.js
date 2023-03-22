"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// get request to display Hello on page on port 2000
app.get("/", (req, res) => {
    res.send("Hello");
});
// app listening at port 2000
app.listen(2000, () => {
    console.log(`Running @ 2000`);
});
