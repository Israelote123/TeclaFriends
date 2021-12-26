const userController = require('../controller/users')
const validate=require('../middlewares/midd.user')
module.exports = (app) => {
   
    app.get('/login', validate.chkLogin,async (req,res)=>{
        let login = req.body
        let result = await userController.accessLogin(login);
        //res.json("Bienvenido "+result[0][0].name)
        res.json(result)
    })

    app.get('/aleatorio', async (req, res) => {
        let tecler = req.body
        let result = await userController.aleatoryTecler(tecler);
        res.json(result)
    })

    app.post('/register', validate.chkRegister,async (req, res) => {
        let register = req.body
        console.log(register)
        let result = await userController.addRegister(register)
        res.json(result)
    })
}