const fs = require("fs")
const filePath = "products.json"

const creatFile = ()=>{
    if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,JSON.stringify([]))
    }
}
const loadProducts = ()=>{
    const file = fs.readFileSync(filePath,"utf-8")
    return JSON.parse(file)
}
const saveProducts=(products)=>{
    fs.writeFileSync(filePath,JSON.stringify(products, null, 2))
}

creatFile()
let listProducts = loadProducts()
console.log(listProducts)
const dataSet = [
    {id : 1, name : "camera", price : 120000},
    {id : 2, name : "mouse", price : 20000},
    {id : 3, name : "keyboard", price : 30000},
    {id : 4, name : "headset", price: 70000}
]

// listProducts.push(newProduct)
saveProducts(listProducts)
