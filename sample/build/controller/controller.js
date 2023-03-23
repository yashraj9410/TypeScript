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
exports.findUsers = exports.createUser = void 0;
//controller methods 
const model_1 = __importDefault(require("../model/model"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new model_1.default({
        name: "yash",
        age: 12
    });
    yield user.save()
        .then(user => res.send({ user }))
        .catch(err => console.log(err));
});
exports.createUser = createUser;
//get all users
const findUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield model_1.default.find()
        .then(data => res.send({ data }))
        .catch(err => res.send({ err }));
});
exports.findUsers = findUsers;
