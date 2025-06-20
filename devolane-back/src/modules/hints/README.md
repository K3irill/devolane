# Структура проекта Express.js + TypeScript + Prisma + PostgreSQL

Эта директория содержит руководства и лучшие практики для работы с различными компонентами проекта.

## Обзор структуры проекта

```
src/
├── modules/
│   ├── [название-модуля]/
│   │   ├── controller/     # Обработчики запросов
│   │   ├── service/        # Бизнес-логика
│   │   ├── dto/           # Объекты передачи данных
│   │   ├── routes/        # Определения маршрутов
│   │   ├── strategies/    # Стратегии аутентификации
│   │   └── middleware/    # Пользовательские промежуточные обработчики
├── config/                # Файлы конфигурации
├── prisma/               # Схема Prisma и миграции
└── utils/               # Вспомогательные функции
```

## Основные технологии

- **Express.js**: Веб-фреймворк
- **TypeScript**: Язык программирования
- **Prisma**: ORM для работы с базой данных
- **PostgreSQL**: База данных
- **JWT**: Аутентификация
- **bcrypt**: Хеширование паролей

## Начало работы

1. Установка зависимостей: `npm install`
2. Настройка переменных окружения в `.env`
3. Запуск миграций Prisma: `npx prisma migrate dev`
4. Запуск сервера: `npm run dev`
