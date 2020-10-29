const db = require('../database/index')

const createUser = async (req, res, next) => {
    try {
        const { email } = req.body
        let user = await db.one(
            "INSERT INTO users(email) VALUES ($1) RETURNING *",
            [email]
        );
        res.status(200).json({
            status: "Success",
            message: "User Created",
            payload: user

        })
    } catch (err) {
        res.status(403)
            .json({
            status: "Error",
            message: "User Already Exists"
        })
        next(err);

    }
}

const fetchAllUsers = async (req, res, next) => {
    try {
        const users = await db.any('SELECT * FROM users')
        res.status(200).json({
            status: "Success",
            message: "All Users",
            payload: users

        })
    } catch (err) {
        res.json({
            status: "error",
            message: "Failed to retrieve all users"
        })
        next(err);
    }
}



module.exports = { createUser, fetchAllUsers }