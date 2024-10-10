const {Router} = require('express')
const route = Router()
const productoController = require('../controllers/producto.controller')
const schemaValidator = require('../middlewares/schema.validator')
const fabricanteSchema = require('../schemas/fabricanta.schema')
const productoSchema = require('../schemas/producto.schema')
const componenteSchema = require('../schemas/componente.schema')


route.get('/productos',productoController.getAllProductos)

route.get('/productos/:id',productoController.getProductoById)

route.post('/productos',schemaValidator(productoSchema), productoController.postProducto)

route.put('/productos/:id')

route.delete('/productos/:id', productoController.deleteProducto)

route.get('/productos/:id/fabricantes')

route.post('/productos/:id/fabricantes', schemaValidator(productoSchema))

route.get('/productos/:id/componentes')

route.post('/productos/:id/componentes', schemaValidator(productoSchema))