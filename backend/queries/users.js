const db = require('../database/index')

const createUser = async (req, res, next) => {
    try {
        await db.none(
            "INSERT INTO users (id, email) VALUES($(id), $(email))",
            req.body
        );

        res.json({ message: "NEW USER CREATED!" })
    } catch (err) {
        next(err)
    }
}

const fetchAllUsers = async (req, res, next) => {
    try {
        const users = await db.any('SELECT * FROM users')
        res.json({
            users,
            message: "ALL USERS!"
        })
    } catch (err) {
        next(err)
    }
}



module.exports = { createUser, fetchAllUsers }