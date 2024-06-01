import "dotenv/config";

export const MYSQLHOST = process.env.MYSQLHOST;
export const MYSQLUSER = process.env.MYSQLUSER;
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
export const MYSQLPORT = process.env.MYSQLPORT;
export const SECRET_KEY = process.env.SECRET_KEY;
export const PORT = process.env.PORT || 4000;
