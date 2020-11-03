const subscriber = require('express').Router();
const { createSubscriber, fetchAllSubscribers } = require('../queries/subscribers')
const { checkFirebaseToken } = require('../middleware/auth')

subscriber.post('/', createSubscriber)
subscriber.get('/', fetchAllSubscribers)
// users.get('/', checkFirebaseToken, fetchAllUsers)

module.exports = subscriber