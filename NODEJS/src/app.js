/* TUTORIAL
1.Crear package.json con comando> npm init -yes
2.Instalar modulos>     npm i "nombre del modulo" (modulos en produccion)
                        npm i "nombre del modulo" -D (modulos en desarrollo)

                        express (modulo en produccion)
                        nodemon (modulo en desarrollo)
3.Aniadir al package.sjon, el script "start" nodemon + ruta del app.js
4.Arrancar el proyecto con: npm run start
5.Para usar import debemos aniadir "type":module en el package.json
*/

//Importar los modulos que vamos a requerir (necesitar)
//const express = required('express'); //opcion1 old Javascript
import express from 'express'; //opcion2 new Typescript

//llamar a express y almacenarlo en una constante
const app = express();

//iniciar un servidor
app.listen(3000);
console.log ('El servidor está escuchando por el puerto ', 3000); 

//crear rutas con funcion flecha, utilizando el metodo get
app.get('/',(req,res) => res.send('Estás en el home'));
app.get('/login',(req,res) => res.send('Estás en el login'));
app.get('/contactar',(req,res) => res.send('Estás en el contactar'));