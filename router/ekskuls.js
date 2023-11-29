const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/ekskul')

router.get('/ekskul', usercontroller.index)

router.get('/ekskul/:id', usercontroller.show)

  router.post('/ekskul', usercontroller.store)

  router.put('/ekskul/:id', usercontroller.update)

  router.delete('/ekskul/:id', usercontroller.delete)

  module.exports = router