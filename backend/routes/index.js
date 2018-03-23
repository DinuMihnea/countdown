const parser = require('body-parser')
const router = require('express').Router()
const subscriberRoutes = require('./subscriber-routes')

// Router configurations
router.use(parser.json())
router.use(parser.urlencoded({extended: true}))
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

// Routes
router.route('/subscribers').post(subscriberRoutes)

module.exports = router
