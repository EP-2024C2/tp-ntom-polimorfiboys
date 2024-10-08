const {Router} = require('express')
const route = Router()


route.get('/fabricantes')

route.get('/fabricantes/:id')

route.post('/fabricantes')

route.put('/fabricantes/:id')

route.delete('/fabricantes/:id')

route.get('/fabricantes/:id/productos')

