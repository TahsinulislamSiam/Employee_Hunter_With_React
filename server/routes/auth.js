import express, { Router } from 'express'
import { login } from '../controller/authController.js'

const router = express.Router()
router.post('/login',login)

export default router;