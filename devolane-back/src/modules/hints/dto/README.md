# Руководство по DTO (Data Transfer Objects)

DTO (Объекты передачи данных) используются для валидации и типизации данных, передаваемых между клиентом и сервером.

## Основные принципы

1. Каждый DTO должен быть интерфейсом или классом
2. Используйте декораторы для валидации
3. Документируйте все поля
4. Следуйте принципу единой ответственности

## Пример структуры

```typescript
import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator'

export class CreateUserDto {
	@IsString()
	@MinLength(2)
	firstName: string

	@IsString()
	@MinLength(2)
	lastName: string

	@IsEmail()
	email: string

	@IsString()
	@MinLength(6)
	password: string

	@IsOptional()
	@IsString()
	phone?: string
}
```

## Популярные декораторы для валидации

- `@IsString()` - проверка на строку
- `@IsNumber()` - проверка на число
- `@IsEmail()` - проверка на email
- `@IsBoolean()` - проверка на булево значение
- `@IsDate()` - проверка на дату
- `@IsOptional()` - поле необязательное
- `@MinLength()` - минимальная длина
- `@MaxLength()` - максимальная длина
- `@IsArray()` - проверка на массив
- `@IsObject()` - проверка на объект

## Использование в контроллерах

```typescript
import { validate } from 'class-validator'

async create(req: Request, res: Response) {
    const dto = new CreateUserDto()
    Object.assign(dto, req.body)

    const errors = await validate(dto)
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors: errors
        })
    }

    // Продолжение обработки...
}
```

## Лучшие практики

1. Создавайте отдельные DTO для создания и обновления
2. Используйте наследование для общих полей
3. Добавляйте JSDoc комментарии для документации
4. Группируйте связанные поля в отдельные DTO
5. Используйте строгую типизацию
