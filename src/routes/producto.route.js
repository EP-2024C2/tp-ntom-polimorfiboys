const {Router} = require('express')
const route = Router()
const productoController = require('../controllers/producto.controller')
const controller = require('../controllers/producto.controller')

route.get('/productos',productoController.getAllProductos)

route.get('/productos/:id',productoController.getProductoById)

route.post('/productos', productoController.postProducto)

route.put('/productos/:id')

route.delete('/productos/:id', controller.deleteProducto)

route.get('/productos/:id/fabricantes')

route.post('/productos/:id/fabricantes')

route.get('/productos/:id/componentes')

route.post('/productos/:id/componentes')