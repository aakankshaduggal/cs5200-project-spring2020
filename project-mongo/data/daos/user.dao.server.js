const userModel= require('../models/users/user.model.server')

const createuser =(user) =>
    userModel.create(user);

module.exports={
    createuser
}