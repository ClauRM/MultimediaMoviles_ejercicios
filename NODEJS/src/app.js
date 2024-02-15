/* TUTORIAL
1.Crear package.json con comando> npm init -yes
2.Instalar modulos>     npm i "nombre del modulo" (modulos en produccion)
                        npm i "nombre del modulo" -D (modulos en desarrollo)

                        express (modulo en produccion)
                        nodemon (modulo en desarrollo)
3.Aniadir al package.sjon, el script "start" nodemon + ruta del app.js
4.Arrancar el proyecto con: npm run start
5.Para usar import debemos aniadir "type":module en el package.json
6.Si nos llevamos el proyecto a otro equipo, instalar todas las dependencias: npm install
7.npm remove nombredelmodulo, borrar el modulo
8.npx nombredelmodulo, no lo descarga en local
//"start": "nodemon src/app.js"
*/

//Importar los modulos que vamos a requerir (necesitar)
//const express = required('express'); //opcion1 old Javascript
import express from 'express'; //opcion2 new Typescript
import ejs from 'ejs'; //este motor de plantilla no es necesario importarlo porque se incluye en express

//mostrar la ruta absoluta en la que me encuentro
import {dirname, join} from 'path'; //con llaves podemos traer solo el modulo que necesitamos
import {fileURLToPath} from 'url';

//importar enrutamiento, cuando es un modulo propio poner la EXTENSION
import indexRoutes from './routes/routes.js'; //el nombre es por configuracion universal

const __dirname = dirname(fileURLToPath(import.meta.url)); //__valor privado
console.log(__dirname); //muestra la ruta absoluta donde me encuentro

//llamar a express y almacenarlo en una constante
const app = express();

//iniciar un servidor
const port = 3000;
app.listen(port);
console.log ('El servidor está escuchando por el puerto ', port); 

//configurar motor de plantillas
app.set('view engine', 'ejs');
app.set('views',join(__dirname,'views'));//ruta relativa de views
console.log(join(__dirname,'views'));//de esta forma no hace falta utilizar la contrabarra 

//utilizar enrutador
app.use(indexRoutes);
