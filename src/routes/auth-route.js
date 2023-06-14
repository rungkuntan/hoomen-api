const express = require ('express')
const authController = require('../controllers/auth-controller')
const authMiddleware = require ('../middlewares/authenticate')


const router = express.Router();

router.post('/register', authController.register)
router.post('/login',authController.login)
router.post('/form',authMiddleware,authController.form)
router.get('/me', authMiddleware,authController.getMe)
router.get('/getform',authMiddleware,authController.getFormByUserId)
router.delete('/delete/:id',authMiddleware,authController.deleteFormByUserId)
module.exports = router 