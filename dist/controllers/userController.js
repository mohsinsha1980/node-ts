"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const logger_1 = __importDefault(require("../services/logger"));
const createUser = async (req, res, next) => {
    try {
        const { email, first_name, last_name } = req.body;
        if (!email || !first_name || !last_name) {
            (0, logger_1.default)({
                level: 'error',
                user: 'Unknown User',
                url: req?.method + ': ' + req?.originalUrl,
                message: '*** createUser: Invalid data ***',
            });
        }
        const user = new user_1.default({
            email,
            first_name,
            last_name,
        });
        const newUser = await user.save();
        (0, logger_1.default)({
            level: 'info',
            user: 'Unknown User',
            url: req?.method + ': ' + req?.originalUrl,
            message: '*** createUser: new user created ***',
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
const getUsers = async (req, res, next) => {
    try {
        const users = await user_1.default.find({});
        res.status(201).json(users);
    }
    catch (error) {
        next(error);
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res, next) => {
    const { id } = req.query;
    try {
        const users = await user_1.default.find({ _id: id });
        res.status(201).json(users);
    }
    catch (error) {
        next(error);
    }
};
exports.getUser = getUser;
