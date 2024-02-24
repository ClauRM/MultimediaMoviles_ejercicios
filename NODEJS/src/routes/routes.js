import {Router} from 'express';
const router = Router();
import {home, login, registro, crud, pruebacon} from '../controllers/controllers.js';//importar callback de controller.js

//crear rutas con funcion flecha, utilizando el metodo get
//res.send solo envia texto plano
router.get('/', home)
router.get('/login', login);
router.get('/registro', registro);
router.get('/crud', crud);
//app.get('/',// se llama end point -> hago una llamada
//(req,res) => res.render('home'))// se llama callback -> devuelve un resultado

//Ruta de prueba de conexion
router.get('/pruebacon',pruebacon); //ruta inventada para probar que estamos conectados

export default router;