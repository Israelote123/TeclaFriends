//esta api devuelve datos en json

const router=require('express').Router();
const apiUsersRouter=require('./api/users');
router.use('/users',apiUsersRouter);
module.exports=router;
