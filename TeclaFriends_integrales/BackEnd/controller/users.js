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
//obtener todos los cursos
module.exports.getCourse = async (data)=>{
    let result = await userModel.courseDo(data)
    return result
}
//obtener todos los cursos
module.exports.getAbility = async (data)=>{
    let result = await userModel.Ability(data)
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

//insertar nuevos cursos
module.exports.addCourse = async (course) => {
    let result=await userModel.cours(course)
    return result;
}

//insertar nuevas habilidades
module.exports.addAbility = async (habilidad) => {
    let result=await userModel.Abilities(habilidad)
    return result;
}

//insertar nuevas petciciones de ayuda
module.exports.addHelp = async (help) => {
    let result=await userModel.help(help)
    return result;
}