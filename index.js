import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import HTTP_STATUS from './src/helpers/httpStatus.js'
import { adminRouter } from './src/routes/adminController.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(HTTP_STATUS.OK).json({
        message: 'Hello World!'
    })
})

app.use('/api', adminRouter)

// app.get('/api/users', (req, res) => {
//     res.status(HTTP_STATUS.OK).json({
//         message: 'Hello World!'
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})