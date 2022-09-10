const express = require('express')
const {authUser, registerUser, getUserProfile} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/', registerUser)
router.get('/', protect, getUserProfile)
router.post('/login', authUser)


module.exports = router