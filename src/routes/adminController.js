import { Router } from 'express'
import adminController from '../controllers/adminController.js'

export const adminRouter = Router()

adminRouter.get('/admins', adminController.getAdmins)

