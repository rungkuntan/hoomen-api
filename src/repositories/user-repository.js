const {User,Form} = require('../models/')
exports.getUserByCheckEmailExist =  userEmail => {
     return User.findOne({where: {userEmail:userEmail}})
}

exports.createUser = user => User.create(user)


exports.getUserByCheckUserExist =  userName => {
     return User.findOne({where: {userName:userName}})
}

exports.createForm = form => Form.create(form)