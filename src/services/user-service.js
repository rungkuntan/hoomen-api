const userRepository  = require('../repositories/user-repository')

exports.checkEmailExist = async userEmail => {
  const existUser =  await userRepository.getUserByCheckEmailExist(userEmail)
  return !!existUser;
}

exports.createUser = user => userRepository.createUser(user)


exports.getUserByCheckUserExist = async (userName) => {
  const user = await userRepository.getUserByCheckUserExist(userName)
  return user
}