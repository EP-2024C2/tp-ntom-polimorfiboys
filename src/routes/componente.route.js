const {Router} = require('express')
const route = Router()
const componenteController = require('../controllers/componente.controller')
const schemaValidator = require('../middlewares/schema.validator')
const fabricanteSchema = require('../schemas/fabricanta.schema')
const productoSchema = require('../schemas/producto.schema')
const componenteSchema = require('../schemas/componente.schema')

route.get('/componentes')

route.get('/componentes/:id')

route.post('/componentes', schemaValidator(componenteSchema))

route.put('/componentes/:id')

route.delete('/componentes/:id')

route.get('/componentes/:id/productos')
