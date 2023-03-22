"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
// create  a new user 
const create_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    const user = new user_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        age
    });
    return yield user.save()
        .then(user => { res.status(200).send({ user }); })
        .catch(err => {
        res.status(401).send(err);
    });
});
// find user by id 
const read_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    return yield user_1.default.findById(id)
        .then(data => { res.status(200).send({ data }); })
        .catch(err => { res.status(404).json({ err }); });
});
//read all user 
const read_Alluser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req.params.id;
    return yield user_1.default.find()
        .then(data => { res.status(200).send({ data }); })
        .catch(err => { res.status(404).json({ err }); });
});
// update a user by id 
const update_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    return yield user_1.default.findById(id)
        .then(user => {
        if (user) {
            user.set(req.body);
            return user.save()
                .then(user => { res.status(200).json({ user }); })
                .catch(err => { res.status(403).json({ err }); });
        }
        else {
            res.status(500).json({ message: "Not Found" });
        }
    })
        .catch(err => {
        res.status(500).json({ err });
    });
});
const delete_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    return yield user_1.default.findByIdAndDelete(id)
        .then((user) => { user ? res.status(200).json({ message: "User deleted" }) : res.status(401).json({ message: "user not found" }); })
        .catch(err => { res.status(404).json({ message: "Not found" }); });
});
exports.default = { create_user, read_user, update_user, delete_user, read_Alluser };
