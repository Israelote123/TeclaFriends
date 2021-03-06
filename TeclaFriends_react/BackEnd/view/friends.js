const friendsController = require('../controller/friends')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

    //mandar solicitud de amistad
    app.post('/request', auth.authenticate, async (req, res) => {
        let friend = req.body
        let result = await friendsController.sendRequest(friend)
        res.json(result)
    })

    //obtener todas las solicitudes de amistad
    app.get('/request/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await friendsController.getRequest(data)
        res.json(result[0])
    })

    //Actualizar stattus 
    app.post('/request/update', auth.authenticate, async (req, res) => {
        let actualizar = req.body
        let result = await friendsController.updateRequest(actualizar)
        res.json(result)
    })

    //obtener personas que mandaron solicitud de amistad   
    app.get('/amistad/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await friendsController.getAmistad(data)
        res.json(result[0])
    })

    //obtener amigos   
    app.get('/amigos/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await friendsController.getFriends(data)
        res.json(result[0])
    })
    
    //obtener no amigos para descubrir  
    app.get('/noamigos/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await friendsController.getNoFriends(data)
        res.json(result[0])
    })
    
}