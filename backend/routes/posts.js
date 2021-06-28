const express = require('express')
const router = express.Router()

const controller = require('../controllers/posts')


router.post('/search', controller.search)
router.post('/create', controller.create)
router.delete('/delete/:_id', controller.delete)


module.exports = router
