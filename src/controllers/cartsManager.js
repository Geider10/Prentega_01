const FsManager = require("./fsManager")
const fs = new FsManager("./src/models/carts.json")
const ProductManager = require("./productManager")
const pm = new ProductManager()

class CartsManager{
    constructor(){
        this.contId = 0
    }
    addCart(cart){
        const carts = fs.loadProducts()
        const id = this.contId++
        const newCart = {id : id,...cart}
        carts.push(newCart)
        fs.saveProducts(carts)
    }
    getCartProducts(id){
        const carts = fs.loadProducts()
        return carts.find(c => c.id == id)
    }
    addProductCart(cartId,productId){
        const carts = fs.loadProducts()
        const cart = this.getCartProducts(cartId)
        if(cart){
            const productJson = pm.getProductById(productId)
            const cartsFilter = carts.filter(c => c.id !== cartId)
            const newProducts = [ ...cartsFilter,{id: cartId,products: [{id:productJson.id, quantity: 1}]}]
            return newProducts
            // cart.products.push(newProduct)
            // fs.saveProducts(carts)
        }
        else{
            return {error : "not such carrito"}
        }
    }
}
module.exports = CartsManager