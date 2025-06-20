import { Router, Request } from 'express'
import { UserController } from '../controller/user.controller'
import { UserService } from '../service/user.service'
import { authMiddleware } from '../../auth/middleware/auth.middleware'

const router = Router()
const userService = new UserService()
const userController = new UserController(userService)
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: function (req: Request, file: any, cb: any) {
		cb(null, 'uploads/users')
	},
	filename: function (req: Request, file: any, cb: any) {
		const ext = path.extname(file.originalname)
		const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext
		cb(null, uniqueName)
	},
})
const upload = multer({ storage })

router.post(
	'/get-user',
	authMiddleware,
	userController.getUserByUsername.bind(userController)
)

router.patch(
	'/update-user-data',
	upload.single('photo'),
	async (req: Request & { file?: Express.Multer.File }, res) => {
		try {
			const data = {
				...req.body,
				photo: req.file ? req.file.filename : undefined,
			}
			const updatedUser = await userService.updateUserData(data)
			res.json(updatedUser)
		} catch (err: any) {
			res.status(400).json({ error: err.message })
		}
	}
)

export { router as userRouter }
