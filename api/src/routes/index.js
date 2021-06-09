const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getData = require('./getData');
const addData = require('./addData');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/getdata', getData);
router.post('/adddata', addData);


module.exports = router;
