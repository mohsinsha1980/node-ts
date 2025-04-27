import dotenv from 'dotenv';
dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  secret: string;
  session_secret: string;
  db: string;
  public: string;
  allow_origin: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  secret:
    process.env.SECRET ||
    'DrF+Fw{LR<qb%x]4F5Nb4A!Kv:d:th=|y6r@V(hUnTYd4rwy~52Y:T^wUMPiM7+',
  session_secret:
    process.env.SESSION_SECRET ||
    'Oa-IT+UD@dm:PZWc&`eXD^C@@aDFo3)b/&@^k}gOrBEZS{U.v8)Vy`)#+;t?;HH',
  db: process.env.DB || 'mongodb://127.0.0.1:27017/node-ts',
  public: process.env.BACKEND_PUBLIC_FOLDER || '/public',
  allow_origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3010',
};

export default config;
