# Руководство по сервисам

Сервисы содержат бизнес-логику приложения. Они отвечают за обработку данных, взаимодействие с базой данных и реализацию бизнес-правил.

## Основные принципы

1. Сервисы содержат всю бизнес-логику
2. Используйте Prisma Client для работы с базой данных
3. Обрабатывайте ошибки на уровне сервиса
4. Следуйте принципам SOLID

## Пример структуры

```typescript
import { PrismaClient } from '@prisma/client'
import { CreateUserDto } from '../dto/create-user.dto'
import { hash } from 'bcrypt'

export class UserService {
	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()
	}

	async createUser(data: CreateUserDto) {
		try {
			// Хеширование пароля
			const hashedPassword = await hash(data.password, 10)

			// Создание пользователя
			const user = await this.prisma.user.create({
				data: {
					...data,
					password: hashedPassword,
				},
			})

			// Удаляем пароль из ответа
			const { password, ...result } = user
			return result
		} catch (error) {
			if (error.code === 'P2002') {
				throw new Error('Пользователь с таким email уже существует')
			}
			throw error
		}
	}

	async findUserByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
		})
	}
}
```

## Работа с Prisma

### Основные операции

```typescript
// Создание
const user = await prisma.user.create({
    data: { ... }
})

// Получение
const user = await prisma.user.findUnique({
    where: { id: 1 }
})

// Обновление
const user = await prisma.user.update({
    where: { id: 1 },
    data: { ... }
})

// Удаление
const user = await prisma.user.delete({
    where: { id: 1 }
})

// Получение списка
const users = await prisma.user.findMany({

    include:    where: { ... }, { ... }
})
```

## Лучшие практики

1. Разделяйте сервисы по функциональности
2. Используйте транзакции для сложных операций
3. Валидируйте данные перед сохранением
4. Обрабатывайте все возможные ошибки
5. Используйте типизацию для всех методов
6. Документируйте сложную логику
7. Следите за производительностью запросов

## Обработка ошибок

```typescript
try {
	// Код сервиса
} catch (error) {
	if (error.code === 'P2002') {
		throw new Error('Запись уже существует')
	}
	if (error.code === 'P2025') {
		throw new Error('Запись не найдена')
	}
	throw error
}
```
