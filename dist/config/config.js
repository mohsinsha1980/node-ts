"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    secret: process.env.SECRET ||
        'DrF+Fw{LR<qb%x]4F5Nb4A!Kv:d:th=|y6r@V(hUnTYd4rwy~52Y:T^wUMPiM7+',
    session_secret: process.env.SESSION_SECRET ||
        'Oa-IT+UD@dm:PZWc&`eXD^C@@aDFo3)b/&@^k}gOrBEZS{U.v8)Vy`)#+;t?;HH',
    db: process.env.DB || 'mongodb://127.0.0.1:27017/node-ts',
    public: process.env.BACKEND_PUBLIC_FOLDER || '/public',
    allow_origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3010',
};
exports.default = config;
