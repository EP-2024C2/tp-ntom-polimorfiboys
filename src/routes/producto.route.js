const {Router} = require('express')
const route = Router()
const productoController = require('../controllers/producto.controller')
const schemaValidator = require('../middlewares/schema.validator')
const productoSchema = require('../schemas/producto.schema')
const productoMiddleware = require('../middlewares/producto.middleware')

route.get('/productos',
    productoController.getAllProductos)

route.get('/productos/:id',
    productoMiddleware.validarProductoId, 
    productoController.getProductoById)

route.post('/productos',
    schemaValidator(productoSchema), 
    productoController.postProducto)

route.put('/productos/:id', 
    productoMiddleware.validarProductoId,)//FALTA

route.delete('/productos/:id', 
    productoMiddleware.validarProductoId,
    productoController.deleteProductoById)

route.get('/productos/:id/fabricantes',
    productoMiddleware.validarProductoId,)//FALTA

route.post('/productos/:id/fabricantes', 
    productoMiddleware.validarProductoId,
    schemaValidator(productoSchema))//FALTA

route.get('/productos/:id/componentes',
    productoMiddleware.validarProductoId)//FALTA

route.post('/productos/:id/componentes', 
    productoMiddleware.validarProductoId,
    schemaValidator(productoSchema), 
    )//FALTA


module.exports = route