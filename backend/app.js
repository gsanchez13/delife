const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const subscriberRouter = require('./routes/subscribers')

require("dotenv").config()

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/subscribers/', subscriberRouter)

app.use((err, req, res, next) => {
    console.log(err);
    if (err.status) {
        res.status(err.status).json(err)
    } else {
        res.status(500).json(err)
    }
})

app.listen(PORT, () => {
    console.log('listening on port, ', PORT)
})