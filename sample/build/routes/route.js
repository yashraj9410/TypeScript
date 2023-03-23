"use strict";
// setting routes 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = require("../controller/controller");
router.get("/", controller_1.findUsers);
router.post("/", controller_1.createUser);
exports.default = router;
