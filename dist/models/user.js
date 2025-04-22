"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const User = new Schema({
    email: {
        type: String,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
}, {
    collection: 'User',
    timestamps: true,
});
const UserModel = mongoose_1.default.model('User', User);
exports.default = UserModel;
