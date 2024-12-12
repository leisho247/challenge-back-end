import { Router } from 'express'
import adminController from '../controllers/adminController.js'

const adminRouter = Router()

adminRouter.get('/admins', adminController.getAdmins)

export default adminRouter