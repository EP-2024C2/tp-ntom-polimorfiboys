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
const modificarProducto = async(req,res)=>{
    //Hacer
}

const deleteProductoById = async(req,res)=>{
    const idProducto = req.params.id
    const r = await Producto.destroy({ where: { id: idProducto } })
    res.status(204).json({ mensaje: `filas afectados ${r}` })
}


controller.deleteProductoById = deleteProductoById



module.exports = controller