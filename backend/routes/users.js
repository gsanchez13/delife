const users = require('express').Router();
const { createUser, fetchAllSubscribers } = require('../queries/users')
const { checkFirebaseToken } = require('../middleware/auth')

users.post('/', createUser)
users.get('/', fetchAllSubscribers)
// users.get('/', checkFirebaseToken, fetchAllUsers)

module.exports = users