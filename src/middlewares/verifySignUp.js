const {getUserOnDB} = require('../database/userMethods')

const verifySignUp = async(req, res, next) =>{
    try{
        let userDuplicated = await getUserOnDB({userName: req.body.userName}, next)
        console.log(req.body.email)
        let emailDuplicated = await getUserOnDB({email: req.body.email},next)
        if (userDuplicated.length > 0){
            res.status(400).send({message: 'Failed this username is already in use'})
            return;
        }
        if(emailDuplicated.length > 0){
            res.status(400).send({message: 'Failed this email is already in use'})
            return;
        }
        next()
    }catch(err){
        next(err)
    }
}
module.exports= verifySignUp