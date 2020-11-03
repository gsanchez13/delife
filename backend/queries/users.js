const db = require('../database/index')

const createUser = async (req, res, next) => {
    try {
        const { email } = req.body
        let user = await db.one(
            "INSERT INTO subscribers(email) VALUES ($1) RETURNING *",
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

const fetchAllSubscribers = async (req, res, next) => {
    try {
        const subscribers = await db.any('SELECT * FROM subscribers')
        res.status(200).json({
            status: "Success",
            message: "All Subscribers",
            payload: subscribers

        })
    } catch (err) {
        res.json({
            status: "Error",
            message: "Failed to retrieve all users."
        })
        next(err);
    }
}



module.exports = { createUser, fetchAllSubscribers }