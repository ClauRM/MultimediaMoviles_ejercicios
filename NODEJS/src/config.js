/*Configurar variables de puerto del servidor de forma correcta
puerto: 3000
*/
export const PORT = process.env.PORT || 3000;

/*Configurar variables de entorno de BBDD de forma correcta
host: "localhost", 
database: "userlogin",
user: "root",
password: "",
port: 3306 //puerto por el que este levantando mysql en xampp
*/

export const DB_HOST = process.env.DB_HOST || "localhost"; //si tiene host asignalo sino asigna localhost
export const DB_DATABASE = process.env.B_DATABASE || "userlogin";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_PORT = process.env.DB_PORT || 3306;