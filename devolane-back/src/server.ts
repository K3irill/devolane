import { app } from './app'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const PORT = process.env.PORT || 3333

const start = async () => {
	try {
		await prisma.$connect()
		console.log('☑️ Database connected ☑️')

		app.listen(PORT, () => {
			console.log(`✅ Server running on port ${PORT} ✅`)
		})
	} catch (error) {
		console.error('🛑☠️🛑 Failed to start server 🛑☠️🛑:', error)
		process.exit(1)
	}
}

process.on('SIGINT', async () => {
	await prisma.$disconnect()
	process.exit(0)
})

process.on('SIGTERM', async () => {
	await prisma.$disconnect()
	process.exit(0)
})

start()
