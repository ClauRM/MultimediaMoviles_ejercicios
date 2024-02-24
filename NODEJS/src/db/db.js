import { createPool } from 'mysql2/promise';

export const pool = createPool({ //almaceno el metodo en una constante
    DB_HOST: 'localhost',
    DB_DATABASE: 'userlogin',
    DB_USER: 'root',
    DB_PASSWORD: '',
    DB_PORT: 3306 //puerto por el que este levantando mysql en xampp
});