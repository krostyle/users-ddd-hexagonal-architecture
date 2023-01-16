import 'dotenv/config';

export const DATA_BASE_CONFIG = {
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING as string,
};
