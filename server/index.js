require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


//Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        console.log('DB Config:', {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen (PORT, () => console.log('Server started on port ${PORT}'))
    } catch (e) {
        console.log(e)
    }
}


start()