import {Router} from 'express';
const router = Router();
import {home, login, registro, crud} from '../controllers/controllers.js';//importar callback de controller.js

//crear rutas con funcion flecha, utilizando el metodo get
//res.send solo envia texto plano
router.get('/', home)
router.get('/login', login);
router.get('/registro', registro);
router.get('/crud', crud);
//app.get('/',// se llama end point -> hago una llamada
//(req,res) => res.render('home'))// se llama callback -> devuelve un resultado

export default router;