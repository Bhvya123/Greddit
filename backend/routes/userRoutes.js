const express = require('express')
const router = express.Router()
const {registerUser, getMe, loginUser, EditUser} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.get('/me', protect, getMe)
router.post('/login', loginUser)
router.post('/edit', protect, EditUser)

module.exports = router