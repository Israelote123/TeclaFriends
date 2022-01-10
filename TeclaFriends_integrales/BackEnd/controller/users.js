const userModel = require('../models/users')

module.exports.getInformation = async ()=>{
    let result = await userModel.information()
    return result
}

module.exports.accessLogin = async (login)=>{
    let result = await userModel.login(login)
    return result
}


module.exports.getDatos = async (data)=>{
    let result = await userModel.datos(data)
    return result
}

module.exports.getBusqueda = async (busqueda)=>{
    let result = await userModel.busqueda(busqueda)
    return result
}

module.exports.addRegister = async (register) => {
    let result=await userModel.add(register)
    return result;
}