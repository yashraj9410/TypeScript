"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controller/user-controller"));
const router = express_1.default.Router();
router.get("/", user_controller_1.default.read_Alluser);
router.get("/:id", user_controller_1.default.read_user);
router.post("/", user_controller_1.default.create_user);
router.put("/:id", user_controller_1.default.update_user);
router.delete("/:id", user_controller_1.default.delete_user);
module.exports = router;
