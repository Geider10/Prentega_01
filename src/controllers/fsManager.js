const fs = require("fs")

class FsManager {
    constructor(filePath){
        this.filePath = filePath
    }
    creatFile(){
        if(!fs.existsSync(this.filePath)){
            fs.writeFileSync(this.filePath,JSON.stringify([]))
        }
    }
    loadProducts(){
        const file = fs.readFileSync(this.filePath,"utf-8")
        return JSON.parse(file)
    }
    saveProducts(products){
        fs.writeFileSync(this.filePath,JSON.stringify(products, null, 2))
    }
}

module.exports = FsManager