import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { loadEnvConfig } from '@next/env';

loadEnvConfig('./', process.env.NODE_ENV !== 'production');
dotenv.config();

const DBPool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

export default DBPool;
