const {validateRegister,validateLogin, validateForm,} = require('../validators/auth-validator')
const userService = require('../services/user-service')
const createError = require('../utils/create-error')
const bcryptService = require('../services/bcrypt-service')
const tokenService = require('../services/token-service')
const {Form,User} = require('../models/')
exports.register = async (req,res,next) => {
  try {
    const value = validateRegister(req.body);
   const isUserExist = await userService.checkEmailExist(value.userEmail)
     
    
 
   if (isUserExist) {
    createError('email address or mobile number already in use',400)
   }
   
   value.password = await bcryptService.hash(value.password);

  const user = await userService.createUser(value)

  
const accessToken = tokenService.sign({id:user.id})
res.status(200).json({accessToken});

  } catch (err) {
     next(err)
  }
}

exports.login = async(req,res,next) => {

  try {
   const value = validateLogin(req.body)
   const user = await userService.getUserByCheckUserExist(value.userName)
   if (!user) {
    createError('Invalid username',400)
   }

    const isCorrect = await bcryptService.compare(
      value.password,
      user.password 
      )
      if(!isCorrect) {
        createError('Invalid username',400)
      }

      const accessToken = tokenService.sign({id:user.id})
      res.status(200).json({accessToken});

  } catch (err) {
    next(err)
  }
}


exports.form = async (req,res,next) => {
  try {
  
  const value =validateForm(req.body) 
 value.userId =  req.user.id
 
  const form = await userService.createForm(value)
  console.log(value)
  res.status(200).json(form);
  
} catch (err) {
  next(err)
}

}


exports.getMe = (req,res,next) => {
   res.status(200).json({user: req.user})
}


exports.getFormByUserId = async (req, res, next) => {
  try {

    const userId = req.user.id;
     
    const submitFormItems = await Form.findAll({
      where: { userId: userId },
      include: [{ model: User }],
    });

    res.json(submitFormItems);
  } catch (err) {
    next(err);
  }
};


exports.deleteFormByUserId = async (req,res,next) => {
 
  try {
    const {id} = req.params
    const result = await userService.deleteFormByUserId(id)
   if (result === 0) {
    createError("no appointment found",400)
   } else {
    res.json({message:'delete success'})
   }
  
  }catch (err) {
    next(err)
  }
}