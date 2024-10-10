const {Router} = require('express')
const route = Router()
const fabricanteController = require('../controllers/fabricante.controller')
const schemaValidator = require('../middlewares/schema.validator')
const fabricanteSchema = require('../schemas/fabricanta.schema')
const productoSchema = require('../schemas/producto.schema')
const componenteSchema = require('../schemas/componente.schema')

route.get('/fabricantes')

route.get('/fabricantes/:id')

route.post('/fabricantes', schemaValidator(fabricanteSchema))

route.put('/fabricantes/:id')

route.delete('/fabricantes/:id')

route.get('/fabricantes/:id/productos')

