"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
const DB = process.env.DB || '';
function connectDB() {
    try {
        mongoose_1.default.set('strictQuery', false);
        mongoose_1.default.connect(DB);
        console.log('DB connected');
    }
    catch (e) {
        console.log(`Error connecting to DB ${e}`);
    }
}
