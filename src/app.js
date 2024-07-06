const express = require("express")
const app = express()

app.get("/api/products",(req,res)=>{
    res.send("Funciona todo great")
})

app.listen(8080,()=>console.log("escuchando el puerto 8080"))
