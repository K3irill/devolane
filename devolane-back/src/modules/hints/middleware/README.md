# Руководство по Middleware

Middleware - это промежуточные обработчики, которые выполняются между запросом и ответом. Они используются для аутентификации, логирования, обработки ошибок и других общих задач.

## Основные принципы

1. Middleware должен быть переиспользуемым
2. Следуйте принципу единой ответственности
3. Обрабатывайте ошибки
4. Используйте типизацию

## Примеры middleware

### Аутентификация

```typescript
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization?.split(' ')[1]

		if (!token) {
			return res.status(401).json({
				success: false,
				message: 'Требуется авторизация',
			})
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded

		next()
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: 'Неверный токен',
		})
	}
}
```

### Логирование

```typescript
import { Request, Response, NextFunction } from 'express'

export const loggerMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const start = Date.now()

	res.on('finish', () => {
		const duration = Date.now() - start
		console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}ms`)
	})

	next()
}
```

### Обработка ошибок

```typescript
import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(error)

	res.status(500).json({
		success: false,
		message: 'Внутренняя ошибка сервера',
	})
}
```

### Валидация

```typescript
import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validateRequest = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			errors: errors.array(),
		})
	}

	next()
}
```

## Лучшие практики

1. Создавайте отдельные middleware для разных задач
2. Используйте типизацию для req и res
3. Обрабатывайте все возможные ошибки
4. Документируйте параметры и возвращаемые значения
5. Используйте async/await для асинхронных операций
6. Следите за порядком middleware
7. Тестируйте middleware отдельно

## Порядок middleware

```typescript
// 1. Логирование
app.use(loggerMiddleware)

// 2. Парсинг тела запроса
app.use(express.json())

// 3. CORS
app.use(cors())

// 4. Аутентификация
app.use(authMiddleware)

// 5. Маршруты
app.use('/api', routes)

// 6. Обработка ошибок
app.use(errorHandler)
```

## Расширение типов Express

```typescript
declare global {
	namespace Express {
		interface Request {
			user?: any
		}
	}
}
```
