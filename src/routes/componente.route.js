const {Router} = require('express')
const route = Router()


route.get('/componentes')

route.get('/componentes/:id')

route.post('/componentes')

route.put('/componentes/:id')

route.delete('/componentes/:id')

route.get('/componentes/:id/productos')
