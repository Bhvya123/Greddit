const express = require('express')
const router = express.Router()
const { createsubg, showmygreddits } = require('../controllers/subgredditController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', createsubg);
router.post('/mySubs', showmygreddits);
// router.post('/login', loginUser)
// router.post('/edit', EditUser)

module.exports = router
