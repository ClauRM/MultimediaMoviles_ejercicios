import { createPool } from 'mysql2/promise';

export const pool = createPool({ //almaceno el metodo en una constante
    host: "localhost",
    database: "userlogin",
    user: "root",
    password: "",
    port: 3306 //puerto por el que este levantando mysql en xampp
});