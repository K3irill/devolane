# Руководство по контроллерам

Контроллеры обрабатывают HTTP-запросы и ответы. Они должны быть "тонкими" и делегировать бизнес-логику сервисам.

## Лучшие практики

1. Держите контроллеры сфокусированными на HTTP-запросах
2. Используйте внедрение зависимостей для сервисов
3. Правильно обрабатывайте ошибки
4. Используйте DTO для валидации запросов

## Пример структуры

```typescript
import { Request, Response } from 'express'
import { SomeService } from '../service/some.service'
import { SomeDto } from '../dto/some.dto'

export class SomeController {
	constructor(private someService: SomeService) {}

	async create(req: Request, res: Response) {
		try {
			const data: SomeDto = req.body
			const result = await this.someService.create(data)
			res.status(201).json({
				success: true,
				data: result,
			})
		} catch (error) {
			if (error instanceof Error) {
				res.status(400).json({
					success: false,
					message: error.message,
				})
			} else {
				res.status(500).json({
					success: false,
					message: 'Внутренняя ошибка сервера',
				})
			}
		}
	}
}
```

## Типичные методы

- `create`: POST-запросы (создание)
- `findAll`: GET-запросы (получение списка)
- `findOne`: GET-запросы с ID (получение одного элемента)
- `update`: PUT/PATCH-запросы (обновление)
- `delete`: DELETE-запросы (удаление)

## Обработка ошибок

Всегда используйте блоки try-catch и возвращайте соответствующие HTTP-статусы:

- 200: Успешно
- 201: Создано
- 400: Неверный запрос
- 401: Не авторизован
- 403: Доступ запрещен
- 404: Не найдено
- 500: Внутренняя ошибка сервера
