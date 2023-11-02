const mongoose= require("mongoose")


//funcion de conexion
async function conectDB() {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log('conectado a la db'.bgBlue.white)
}

module.exports = conectDB

