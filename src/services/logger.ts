import { createLogger, format } from 'winston';

import DailyRotateFile from 'winston-daily-rotate-file';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [
    new DailyRotateFile({
      filename: 'logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true, // to compress old logs
    }),
  ],
});

interface Data {
  level: string;
  user: string;
  url: string;
  message: string;
}

const log = (data: Data) => {
  logger.log(
    data.level,
    `User : ${data.user || ''} | URL : ${data.url || ''} | message : ${data.message || ''}`,
  );
};

export default log;
