const db = require('../database/index')

const createSubscriber = async (req, res, next) => {
    try {
        const { email } = req.body
        let subscriber = await db.one(
            "INSERT INTO subscribers(email) VALUES ($1) RETURNING *",
            [email]
        );
        res.status(200).json({
            status: "Success",
            message: "Subscriber Created",
            payload: subscriber

        })
    } catch (err) {
        res.status(403)
            .json({
                status: "Error",
                message: "Subscriber Already Exists"
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



module.exports = { createSubscriber, fetchAllSubscribers }