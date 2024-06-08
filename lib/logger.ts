import pino from "pino";

const logger = pino({
    level: process.env.LOG_LEVEL || process.env.NEXT_PUBLIC_LOG_LEVEL,
});

export default logger;
