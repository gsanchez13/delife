require('dotenv').config()
const pgp = require('pg-promise')({})
const db = pgp('postgres://localhost:5432/vidaveloz');

module.exports = db