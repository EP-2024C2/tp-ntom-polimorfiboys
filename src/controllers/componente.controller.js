const { Model } = require('sequelize')
const { Componente, Fabricante, Producto} = require('../models')
const controller = {}

const getAllComponentes = async(req,res)=>{
    const componentes = await Componente.findAll({})
    res.status(200).json(componentes)
}

controller.getAllComponentes = getAllComponentes

const getComponenteById = async(req,res)=>{
    const id = req.params.id
    const componente = Componente.findByPk(id)
    res.status(200).json(componente)
}

controller.getComponenteById = getComponenteById

const postComponente = async(req,res)=>{
    const {nombre, descripcion} = req.body
    const componenteNuevo = await Componente.create({
        nombre,
        descripcion
    }) 
    res.status(201).json(componenteNuevo)
}
controller.postComponente = postComponente

const deleteComponenteById = async(req,res)=>{
    const idComponente = req.params.id
    const r = await Producto.destroy({ where: { id: idComponente } })
    res.status(204).json({ mensaje: `filas afectados ${r}` })
}


controller.deleteComponenteById = deleteComponenteById

const updateComponente = async (req, res) => {
    const { nombre, descripcion } = req.body
    const id = req.params.id
    const componente = await Componente.findByPk(id)
    componente.nombre = nombre;
    componente.direccion = direccion;
    await componente.save()
    res.status(200).json(componente)
}
controller.updateComponente = updateComponente

const getProductosByComponenteId = async(req, res)=>{
    const componenteId = req.params.id
    const productos = await Producto.findAll({where:{componenteId}})
    res.status(200).json(productos)
}


controller.getProductosByComponenteId = getProductosByComponenteId

module.exports = controller