# Руководство по стратегиям аутентификации

Стратегии аутентификации определяют способы проверки подлинности пользователей. В этом проекте используется JWT (JSON Web Tokens) для аутентификации.

## Основные принципы

1. Используйте безопасное хранение паролей
2. Реализуйте механизм обновления токенов
3. Обрабатывайте истечение срока действия токенов
4. Используйте безопасные заголовки

## JWT Аутентификация

### Создание токена

```typescript
import jwt from 'jsonwebtoken'

export const generateToken = (payload: any) => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
}
```

### Проверка токена

```typescript
import jwt from 'jsonwebtoken'

export const verifyToken = (token: string) => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET)
	} catch (error) {
		throw new Error('Неверный токен')
	}
}
```

## Стратегия аутентификации

```typescript
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const jwtStrategy = new JwtStrategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.JWT_SECRET,
	},
	async (payload, done) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: payload.id },
			})

			if (user) {
				return done(null, user)
			}

			return done(null, false)
		} catch (error) {
			return done(error, false)
		}
	}
)
```

## Обновление токена

```typescript
import jwt from 'jsonwebtoken'

export const refreshToken = async (req: Request, res: Response) => {
	try {
		const refreshToken = req.body.refreshToken

		const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)

		const newToken = generateToken({ id: decoded.id })

		res.json({
			success: true,
			token: newToken,
		})
	} catch (error) {
		res.status(401).json({
			success: false,
			message: 'Неверный refresh token',
		})
	}
}
```

## Лучшие практики

1. Используйте разные секреты для access и refresh токенов
2. Устанавливайте разумное время жизни токенов
3. Храните refresh токены в базе данных
4. Реализуйте механизм отзыва токенов
5. Используйте HTTPS
6. Добавляйте fingerprint для токенов
7. Реализуйте механизм блокировки аккаунта

## Пример использования в сервисе

```typescript
export class AuthService {
	async login(email: string, password: string) {
		const user = await this.prisma.user.findUnique({
			where: { email },
		})

		if (!user) {
			throw new Error('Пользователь не найден')
		}

		const isValid = await compare(password, user.password)
		if (!isValid) {
			throw new Error('Неверный пароль')
		}

		const token = generateToken({ id: user.id })
		const refreshToken = generateRefreshToken({ id: user.id })

		return {
			user,
			token,
			refreshToken,
		}
	}
}
```

## Безопасность

1. Используйте bcrypt для хеширования паролей
2. Добавляйте соль к паролям
3. Используйте безопасные заголовки
4. Реализуйте rate limiting
5. Добавляйте CSRF защиту
6. Используйте secure и httpOnly флаги для куки
7. Реализуйте механизм блокировки после неудачных попыток
