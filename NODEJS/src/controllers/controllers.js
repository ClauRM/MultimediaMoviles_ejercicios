import { pool } from "../db/db.js";

export const home = (req, res) => res.render('home');
export const login = (req, res) => res.render('login');
export const registro = (req, res) => res.render('registro');
export const crud = (req, res) => res.render('crud');
//exportar todas las constantes utilizando export delante de cada una de ellas

//creamos la conexion y realizo una consulta async-away
export const pruebacon = async (req, res) => {
    const [result] = await pool.query('SELECT 2+2 AS RESULTADO'); //si logra conectarse hace la consulta
    res.json(result);
};