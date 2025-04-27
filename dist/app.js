"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const body_parser_1 = __importDefault(require("body-parser"));
const consolidate_1 = __importDefault(require("consolidate"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use(config_1.default.public, express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use((0, express_session_1.default)({
    secret: config_1.default.session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    store: connect_mongo_1.default.create({
        mongoUrl: config_1.default.db,
    }),
}));
app.use((0, cors_1.default)({
    origin: config_1.default.allow_origin.split(', '),
    credentials: true, // Allow cookies to be sent with requests
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.engine('html', consolidate_1.default.mustache);
app.set('view engine', 'html');
app.use((0, cookie_parser_1.default)()); // Parses cookies attached to the incoming request
// Routes
app.use('/api/users', userRoutes_1.default);
// Global error handler (should be after routes)
app.use(errorHandler_1.errorHandler);
exports.default = app;
