import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import helmet from 'helmet';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import bodyParser from 'body-parser';
import engines from 'consolidate';
import cookieParser from 'cookie-parser';
import config from './config/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(config.public, express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    store: MongoStore.create({
      mongoUrl: config.db,
    }),
  }),
);

app.use(
  cors({
    origin: config.allow_origin.split(', '),
    credentials: true, // Allow cookies to be sent with requests
  }),
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(cookieParser()); // Parses cookies attached to the incoming request

// Routes
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
