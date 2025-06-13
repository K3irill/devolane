# Руководство по маршрутам (Routes)

Маршруты определяют конечные точки API и связывают HTTP-запросы с соответствующими контроллерами.

## Основные принципы

1. Группируйте маршруты по функциональности
2. Используйте middleware для аутентификации и авторизации
3. Следуйте REST-принципам
4. Документируйте все маршруты

## Пример структуры

```typescript
import { Router } from 'express'
import { AuthController } from '../controller/auth.controller'
import { authMiddleware } from '../middleware/auth.middleware'

const router = Router()
const authController = new AuthController()

// Публичные маршруты
router.post('/register', authController.register)
router.post('/login', authController.login)

// Защищенные маршруты
router.get('/profile', authMiddleware, authController.getProfile)
router.put('/profile', authMiddleware, authController.updateProfile)

export default router
```

## REST-маршруты

### Стандартные маршруты

```typescript
// Получение списка
router.get('/users', userController.findAll)

// Получение одного элемента
router.get('/users/:id', userController.findOne)

// Создание
router.post('/users', userController.create)

// Обновление
router.put('/users/:id', userController.update)
router.patch('/users/:id', userController.partialUpdate)

// Удаление
router.delete('/users/:id', userController.delete)
```

## Middleware

### Примеры использования

```typescript
// Аутентификация
router.use(authMiddleware)

// Валидация
router.post('/users', validateUserDto, userController.create)

// Логирование
router.use(loggerMiddleware)

// Обработка ошибок
router.use(errorHandler)
```

## Лучшие практики

1. Используйте префиксы для версионирования API
2. Группируйте связанные маршруты
3. Используйте middleware для общей логики
4. Следуйте принципам REST
5. Документируйте параметры и ответы
6. Используйте валидацию входных данных
7. Обрабатывайте ошибки на уровне маршрутов

## Пример с валидацией

```typescript
import { Router } from 'express'
import { body } from 'express-validator'

const router = Router()

router.post(
	'/register',
	[
		body('email').isEmail(),
		body('password').isLength({ min: 6 }),
		body('name').notEmpty(),
	],
	authController.register
)
```

## Версионирование API

```typescript
// v1
router.use('/api/v1', v1Router)

// v2
router.use('/api/v2', v2Router)
```
