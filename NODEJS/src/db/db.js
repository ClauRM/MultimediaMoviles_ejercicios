//crea un pool de conexion para trabajar de forma sincrona y con promesas
import { createPool } from 'mysql2/promise';
import { PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } from '../config.js'

export const pool = createPool({ //almaceno el metodo en una constante
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
});