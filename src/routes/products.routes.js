const express = require("express")
const router = express.Router()
const ProductManager = require("../controllers/productManager")
const pm = new ProductManager()
const products = [
    {id : 1, name : "camera", description:"", code : "0001", price : 120000, status : true, stock: 10, category: "computación"},
    {id : 2, name : "mouse", description:"", code : "0002", price : 20000, status : true, stock: 10, category: "computación"},
    {id : 3, name : "jeans", description:"", code : "0003", price : 30000, status : true, stock: 10, category: "indumentaria"},
    {id : 4, name : "camisa", description:"", code : "0004", price: 70000, status : true, stock: 10, category: "indumentaria"}
]

router.get("/api/products",(req,res)=>{
    res.json(pm.getProducts())
})
router.get("/api/products/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const product = pm.getProductById(id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({error : "there is not product"})
    }
})
router.post("/api/products",(req,res)=>{
    pm.addProduct(req.body)
    res.status(201).json({succes: "post"})
})
router.put("/api/products/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    pm.updateProduct(req.body,id)
    res.status(200).json({succes: "put"})
})
router.delete("/api/products/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    pm.deleteProduct(id)
    res.status(200).json({succes: "delete"})
})
    
module.exports = router
