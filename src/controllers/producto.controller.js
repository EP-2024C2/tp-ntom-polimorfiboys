const { Model } = require('sequelize')
const { Componente, Fabricante, Producto} = require('../models')
const controller = {}


const getAllProductos = async(req,res)=>{
    const productos = await Producto.findAll({})
    res.status(200).json(productos)
}

controller.getAllProductos = getAllProductos


const getProductoById = async(req,res)=>{
    const id = req.params.id
    const producto = Producto.findByPk(id)
    res.status(200).json(producto)
}

controller.getProductoById = getProductoById

const postProducto = async(req,res)=>{
    const {nombre, descripcion, precio, pathImg} = req.body
    const productoNuevo = await Producto.create({
        nombre,
        descripcion,
        precio,
        pathImg
    }) 
    res.status(201).json(productoNuevo)
}
controller.postProducto = postProducto
const updateProducto = async (req, res) => {
    const { nombre, descripcion, precio, pathImg  } = req.body
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    producto.nombre = nombre;
    producto.direccion = direccion;
    await producto.save()
    res.status(200).json(producto)
}
controller.updateProducto = updateProducto

const deleteProductoById = async(req,res)=>{
    const idProducto = req.params.id
    const r = await Producto.destroy({ where: { id: idProducto } })
    res.status(204).json({ mensaje: `filas afectados ${r}` })
}

controller.deleteProductoById = deleteProductoById

const getFabricanteByProductoId = async(req, res)=>{
    const productoId = req.params.id
    const fabricantes = await Fabricante.findAll({where:{productoId}})
    res.status(200).json(fabricantes)
}

controller.getFabricanteByProductoId = getFabricanteByProductoId

const getComponenteByProductoId = async(req, res)=>{
    const productoId = req.params.id
    const componentes = await Componente.findAll({where:{productoId}})
    res.status(200).json(componentes)
}

controller.getComponenteByProductoId = getComponenteByProductoId

const createFabricanteByProductoId = async(req, res)=>{
    const productoId= req.params.id
}

module.exports = controller