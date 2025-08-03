import { IDirectionData } from '@/types/directions/directions'

export const directionData: Record<string, IDirectionData> = {
	frontend: {
		title: 'Frontend Development',
		description:
			'Создание пользовательских интерфейсов и интерактивных веб-приложений',
		topics: [
			{
				title: 'HTML',
				description:
					'Язык гипертекстовой разметки для создания структуры веб-страниц',

				level: 'Базовый',
				elements: [
					{
						title: 'Документация',
						link: 'https://html.spec.whatwg.org/',
					},
					{
						title: 'Курс',
						link: 'https://htmlacademy.ru/courses/basic-html',
					},
				],
			},

			{
				title: 'CSS & Styling',
				description: 'Стилизация и анимации для веб-интерфейсов',
				elements: [
					{
						id: 1,
						title: 'Чистый CSS',
						description: 'Стандартные каскадные таблицы стилей',
						link: 'https://developer.mozilla.org/ru/docs/Web/CSS',
					},
					{
						id: 2,
						title: 'SCSS/SASS',
						description: 'CSS-препроцессор с расширенным синтаксисом',
						link: 'https://sass-lang.com/',
					},
					{
						id: 3,
						title: 'LESS',
						description: 'Динамический препроцессор CSS',
						link: 'https://lesscss.org/',
					},
					{
						id: 4,
						title: 'Styled-components',
						description: 'CSS-in-JS решение для React',
						link: 'https://styled-components.com/',
					},
					{
						id: 5,
						title: 'Tailwind CSS',
						description: 'Utility-first CSS фреймворк',
						link: 'https://tailwindcss.com/',
					},
					{
						id: 6,
						title: 'CSS Modules',
						description: 'Локальная область видимости для CSS классов',
						link: 'https://github.com/css-modules/css-modules',
					},
				],
			},
			{
				title: 'GIT',
				description:
					'Система контроля версий для отслеживания изменений в коде',
				link: 'https://git-scm.com/',
				level: 'Базовый',
			},
			{
				title: 'JavaScript',
				description:
					'Язык программирования для создания интерактивных веб-приложений',

				level: 'Базовый',
				elements: [
					{
						title: 'Современный учебник',
						link: 'https://learn.javascript.ru/',
					},
					{
						title: 'Практика',
						link: 'https://codewars.com/',
					},
				],
			},

			{
				title: 'React',
				description: 'Библиотека для создания пользовательских интерфейсов',
				link: 'https://react.dev/',
			},
			{
				title: 'Vue.js',
				description: 'Прогрессивный JavaScript фреймворк',
				link: 'https://vuejs.org/',
			},
			{
				title: 'Angular',
				description:
					'Платформа для создания мобильных и десктопных веб-приложений',
				link: 'https://angular.dev/',
			},
			{
				title: 'TypeScript',
				description: 'Типизированный JavaScript для масштабируемых приложений',
				link: 'https://www.typescriptlang.org/',
			},
			{
				title: 'State Management',
				description: 'Управление состоянием в приложениях',
				elements: [
					{
						id: 1,
						title: 'Redux',
						description:
							'Предсказуемый контейнер состояния для JavaScript-приложений',
						link: 'https://redux.js.org/',
					},
					{
						id: 2,
						title: 'MobX',
						description:
							'Простое, масштабируемое и производительное управление состоянием',
						link: 'https://mobx.js.org/',
					},
					{
						id: 3,
						title: 'Zustand',
						description: 'Минималистичный стейт-менеджер для React',
						link: 'https://github.com/pmndrs/zustand',
					},
					{
						id: 4,
						title: 'Jotai',
						description: 'Примитивный и гибкий стейт-менеджер для React',
						link: 'https://jotai.org/',
					},
					{
						id: 5,
						title: 'Recoil',
						description: 'Экспериментальный стейт-менеджер от Facebook',
						link: 'https://recoiljs.org/',
					},
					{
						id: 6,
						title: 'XState',
						description: 'Библиотека конечных автоматов и statecharts',
						link: 'https://xstate.js.org/',
					},
					{
						id: 7,
						title: 'Vuex (для Vue)',
						description: 'Централизованное управление состоянием для Vue.js',
						link: 'https://vuex.vuejs.org/',
					},
					{
						id: 8,
						title: 'Pinia (для Vue)',
						description: 'Intuitive store для Vue 2 и 3',
						link: 'https://pinia.vuejs.org/',
					},
					{
						id: 9,
						title: 'NgRx (для Angular)',
						description: 'Реактивное управление состоянием для Angular',
						link: 'https://ngrx.io/',
					},
				],
			},
			{
				title: 'Сборщики',
				description: 'Инструменты для автоматизации сборки фронтенд-приложений',
				elements: [
					{
						id: 1,
						title: 'Webpack',
						description: 'Мощный модульный сборщик для JavaScript-приложений',
						link: 'https://webpack.js.org/',
					},
					{
						id: 2,
						title: 'Vite',
						description: 'Современный быстрый инструмент для сборки',
						link: 'https://vitejs.dev/',
					},
					{
						id: 3,
						title: 'Parcel',
						description: 'Сборщик с нулевой конфигурацией',
						link: 'https://parceljs.org/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Что такое Virtual DOM?',
				description:
					'Объяснение концепции Virtual DOM в React и его преимущества перед прямыми манипуляциями с DOM',
				elements: [
					{
						title: 'Junior',
						description:
							'Virtual DOM — это абстракция реального DOM. React сначала обновляет состояние в Virtual DOM, затем сравнивает старый и новый Virtual DOM (diff‑алгоритм) и применяет минимальные изменения к реальному DOM.',
					},
					{
						title: 'Middle',
						description:
							'Помимо базового понятия, Middle должен уметь описать reconciliation‑алгоритм React, batching обновлений, ключи (key) при повторяющихся элементах, и объяснить преимущества Virtual DOM в производительности.',
					},
					{
						title: 'Senior',
						description:
							'Senior разработчик должен понимать внутреннюю архитектуру Virtual DOM, Fiber архитектуру, управление асинхронными обновлениями, SSR и Hydration, а также метрики производительности (FPS, Time to Interactive).',
					},
				],
			},
			{
				title: 'Разница между React и Vue',
				description:
					'Сравнение подходов, производительности и экосистем этих фреймворков',
				elements: [
					{
						title: 'Junior',
						description:
							'React — библиотека, JSX, виртуальный DOM; Vue — фреймворк с декларативной привязкой, шаблонами и реактивной системой.',
					},
					{
						title: 'Middle',
						description:
							'Middle разбирается в различиях реактивности (Vue reactivity vs React state/hooks), подходов к компонентам, lifecycle hooks, tooling (CLI, ecosystem), а также bundle size и рендеринга.',
					},
					{
						title: 'Senior',
						description:
							'Senior способен сравнить архитектурные решения, серверный рендеринг, оптимизацию, large‑scale паттерны и Upgrade-механизмы',
					},
				],
			},
			{
				title: 'Зачем нужен TypeScript?',
				description:
					'Преимущества типизации в больших проектах и основные фичи TypeScript',
				elements: [
					{
						title: 'Junior',
						description:
							'TypeScript обеспечивает статическую типизацию, автодополнение, раннее обнаружение ошибок и улучшает документацию кода.',
					},
					{
						title: 'Middle',
						description:
							'Middle знает, как работать с интерфейсами, generics, utility types, declaration files, и интегрировать TS в React/Vue проекты.',
					},
					{
						title: 'Senior',
						description:
							'Senior умеет строить масштабируемую архитектуру с TS, миграции legacy‑кода, monorepo (например, с Lerna/ Nx), strict mode, eslint+type checking интеграцию.',
					},
				],
			},
			{
				title: 'CSS-in-JS vs CSS-модули',
				description:
					'Сравнение подходов к стилизации в современных приложениях',
				elements: [
					{
						title: 'Junior',
						description:
							'CSS Modules изолирует стили на уровне компонента; CSS‑in‑JS (например styled-components) позволяет писать стили прямо в JS.',
					},
					{
						title: 'Middle',
						description:
							'Middle оценивает производительность, нагрузку на bundle, динамические стили, theming, server-side styling.',
					},
					{
						title: 'Senior',
						description:
							'Senior выбирает архитектуру с учётом scale‑up, SSR, component libraries, runtime cost, style extraction и caching.',
					},
				],
			},
			{
				title: 'Оптимизация производительности',
				description: 'Методы оптимизации загрузки и рендеринга веб-приложений',
				elements: [
					{
						title: 'Junior',
						description:
							'Minification, изображения в webp, lazy‑loading, basic code-splitting.',
					},
					{
						title: 'Middle',
						description:
							'Middle применяет tree-shaking, dynamic imports, оптимизацию рендеринга (React.memo, useMemo), prefetch/push, Lighthouse.',
					},
					{
						title: 'Senior',
						description:
							'Senior знает Webpack bundle analysis, критический рендер path, HTTP/2, SSR, hydration, profiling, web vitals и CI/CD оптимизацию.',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на Junior Frontend Developer',
				description:
					'Типичные вопросы на собеседовании: JavaScript, React, алгоритмы',
				elements: [
					{
						title:
							'Публичное собеседование Junior Frontend Developer — Хекслет',
						url: 'https://youtu.be/-HfKMcP_yt4',
					},
					{
						title: 'Как пройти Junior фронтенд собеседование? Советы и примеры',
						url: 'https://youtu.be/I6Jl7mtMTRk',
					},
					{
						title: 'Тренинг собеседования с техническим директором',
						url: 'https://saintcode.ru/training_interview_frontend',
					},
				],
			},
			{
				title: 'Системный дизайн для фронтенда',
				description:
					'Как проектировать архитектуру крупных фронтенд-приложений',
				elements: [
					{
						title: 'Frontend Architecture — Лекция от Otus',
						url: 'https://youtu.be/jCXc-wp-FZI',
					},
					{
						title: 'Системный дизайн для фронтенда — обзор и примеры',
						url: 'https://youtu.be/BWhq1_p4d7g',
					},
				],
			},
			{
				title: 'Практические задачи',
				description:
					'Примеры реальных задач, которые дают на технических собеседованиях',
				elements: [
					{
						title: 'Задачи с собеседований на JavaScript / Frontend',
						url: 'https://rutube.ru/video/d9e669f075e826ca86f68297cb37a897/',
					},
					{
						title: 'Тестовое задание для Junior Frontend Developer',
						url: 'https://12n.ru/video/30686-j-testovoe-zadanie-dlja-novichka-junior-frontend-developer-video.html',
					},
				],
			},
		],

		useful_features: [
			{
				title: 'Сжатие изображений',
				description:
					'Ресурсы для сжатия и оптимизации изображений перед загрузкой в веб',
				elements: [
					{
						title: 'TinyPNG',
						description:
							'Онлайн-инструмент для сжатия PNG и JPEG без потери качества',
						link: 'https://tinypng.com/',
					},
					{
						title: 'ImageOptim',
						description:
							'Локальное приложение для Mac для оптимизации изображений',
						link: 'https://imageoptim.com/mac',
					},
					{
						title: 'Squoosh',
						description:
							'Web-инструмент от Google для сравнения и сжатия форматов изображений',
						link: 'https://squoosh.app/',
					},
				],
			},
			{
				title: 'Типограф',
				description:
					'Инструменты для автоматической типографики и очистки текста',
				elements: [
					{
						title: 'Типограф от Artlebedev',
						description:
							'Онлайн-типограф от студии Лебедева для форматирования текста',
						link: 'https://www.artlebedev.ru/typograf/',
					},
					{
						title: 'Typograf.ru',
						description:
							'Простой инструмент для автоматического приведения текста к типографским нормам',
						link: 'https://www.typograf.ru/',
					},
				],
			},
			{
				title: 'Can I Use',
				description:
					'Проверка поддержки HTML, CSS и JS-функций в разных браузерах',
				elements: [
					{
						title: 'caniuse.com',
						description:
							'Обширная база данных по поддержке браузерами фич HTML5, CSS3 и API',
						link: 'https://caniuse.com/',
					},
					{
						title: 'MDN Compatibility Tables',
						description: 'Таблицы совместимости на Mozilla Developer Network',
						link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element#browser_compatibility',
					},
				],
			},
			{
				title: 'Онлайн песочницы',
				description:
					'Платформы для быстрого прототипирования и тестирования кода',
				elements: [
					{
						title: 'CodeSandbox',
						description: 'Онлайн редактор для React, Vue, Angular и других',
						link: 'https://codesandbox.io/',
					},
					{
						title: 'CodePen',
						description:
							'Песочница для фронтенд-разработки с поддержкой HTML, CSS и JS',
						link: 'https://codepen.io/',
					},
					{
						title: 'JSFiddle',
						description:
							'Простая и быстрая среда для тестирования фрагментов кода',
						link: 'https://jsfiddle.net/',
					},
				],
			},
			{
				title: 'Иконки',
				description: 'Библиотеки и генераторы иконок для веб-проектов',
				elements: [
					{
						title: 'Font Awesome',
						description: 'Одна из самых популярных коллекций векторных иконок',
						link: 'https://fontawesome.com/',
					},
					{
						title: 'Heroicons',
						description:
							'Современные SVG иконки, разработанные для Tailwind CSS',
						link: 'https://heroicons.com/',
					},
					{
						title: 'Iconmonstr',
						description: 'Большая коллекция бесплатных иконок для любых задач',
						link: 'https://iconmonstr.com/',
					},
				],
			},
			{
				title: 'Генераторы цвета',
				description:
					'Инструменты для создания цветовых палитр и подборки сочетаний',
				elements: [
					{
						title: 'Coolors',
						description:
							'Быстрый генератор цветовых схем с возможностью кастомизации',
						link: 'https://coolors.co/',
					},
					{
						title: 'Adobe Color',
						description:
							'Палитры от Adobe с возможностью анализа гармоний цвета',
						link: 'https://color.adobe.com/',
					},
					{
						title: 'Color Hunt',
						description: 'Коллекция тщательно подобранных цветовых палитр',
						link: 'https://colorhunt.co/',
					},
				],
			},
			{
				title: 'Анализ и оптимизация производительности',
				description:
					'Инструменты для проверки скорости загрузки и оптимизации сайта',
				elements: [
					{
						title: 'Google Lighthouse',
						description: 'Автоматический аудит производительности и SEO',
						link: 'https://developers.google.com/web/tools/lighthouse',
					},
					{
						title: 'PageSpeed Insights',
						description:
							'Сервис Google для оценки скорости и рекомендаций по улучшению',
						link: 'https://developers.google.com/speed/pagespeed/insights/',
					},
					{
						title: 'WebPageTest',
						description:
							'Детальный тест производительности с множеством настроек',
						link: 'https://www.webpagetest.org/',
					},
				],
			},
			{
				title: 'Генераторы шрифтов',
				description:
					'Создание и подключение веб-шрифтов и кастомных наборов символов',
				elements: [
					{
						title: 'Google Fonts',
						description:
							'Бесплатная библиотека веб-шрифтов с легкой интеграцией',
						link: 'https://fonts.google.com/',
					},
					{
						title: 'Font Squirrel',
						description:
							'Коллекция бесплатных шрифтов с генератором @font-face',
						link: 'https://www.fontsquirrel.com/',
					},
					{
						title: 'Glyphhanger',
						description: 'Инструмент для создания кастомных наборов шрифтов',
						link: 'https://github.com/filamentgroup/glyphhanger',
					},
				],
			},
			{
				title: 'SVG иконки и графика',
				description: 'Ресурсы для создания и оптимизации SVG-графики',
				elements: [
					{
						title: 'SVGOMG',
						description: 'Онлайн-оптимизатор SVG-файлов',
						link: 'https://jakearchibald.github.io/svgomg/',
					},
					{
						title: 'Hero Patterns',
						description: 'Коллекция SVG паттернов для фонов',
						link: 'https://www.heropatterns.com/',
					},
					{
						title: 'SVG Repo',
						description: 'Бесплатные SVG-иконки и иллюстрации',
						link: 'https://www.svgrepo.com/',
					},
				],
			},
			{
				title: 'Документация и учебные ресурсы',
				description:
					'Полезные сайты для изучения фронтенда и поиска информации',
				elements: [
					{
						title: 'MDN Web Docs',
						description:
							'Официальная документация по веб-технологиям от Mozilla',
						link: 'https://developer.mozilla.org/ru/',
					},
					{
						title: 'Frontend Mentor',
						description: 'Практические задачи для фронтенд разработчиков',
						link: 'https://www.frontendmentor.io/',
					},
					{
						title: 'JavaScript Info',
						description: 'Современный учебник по JavaScript',
						link: 'https://learn.javascript.ru/',
					},
				],
			},
		],
	},
	backend: {
		title: 'Backend Development',
		description: 'Разработка серверной части приложений и API',
		topics: [
			{
				title: 'Node.js',
				description: 'JavaScript runtime для серверной разработки',
				elements: [
					{
						title: 'Официальный сайт',
						link: 'https://nodejs.org/',
					},
					{
						title: 'Express.js',
						description: 'Минималистичный web‑фреймворк для Node.js',
						link: 'https://expressjs.com/',
					},
					{
						title: 'NestJS',
						description: 'Прогрессивный Node.js фреймворк на базе TypeScript',
						link: 'https://nestjs.com/',
					},
				],
			},
			{
				title: 'Python',
				description: 'Универсальный язык программирования',
				elements: [
					{
						title: 'Python.org',
						link: 'https://www.python.org/',
					},
					{
						title: 'Django',
						description:
							'Высокоуровневый Python-фреймворк для быстрого развития',
						link: 'https://www.djangoproject.com/',
					},
					{
						title: 'Flask',
						description: 'Лёгкий web‑фреймворк на Python',
						link: 'https://flask.palletsprojects.com/',
					},
				],
			},
			{
				title: 'Java',
				description: 'Объектно‑ориентированный язык программирования',
				elements: [
					{
						title: 'Oracle Java',
						link: 'https://www.oracle.com/java/',
					},
					{
						title: 'Spring Boot',
						description:
							'Фреймворк для создания автономных продакшн‑ готовых приложений',
						link: 'https://spring.io/projects/spring-boot',
					},
					{
						title: 'Micronaut',
						description: 'Современный JVM‑фреймворк для микросервисов',
						link: 'https://micronaut.io/',
					},
				],
			},
			{
				title: 'Go',
				description: 'Язык программирования от Google',
				elements: [
					{
						title: 'Go.dev',
						link: 'https://go.dev/',
					},
					{
						title: 'Gin',
						description: 'Высокопроизводительный web‑фреймворк для Go',
						link: 'https://gin-gonic.com/',
					},
					{
						title: 'Echo',
						description: 'Минималистичный и быстрый web‑фреймворк',
						link: 'https://echo.labstack.com/',
					},
				],
			},
			{
				title: 'Databases',
				description: 'Работа с базами данных SQL и NoSQL',
				elements: [
					{
						title: 'PostgreSQL',
						description: 'Реляционная база данных открытого кода',
						link: 'https://www.postgresql.org/',
					},
					{
						title: 'MySQL',
						description: 'Популярная реляционная база данных',
						link: 'https://www.mysql.com/',
					},
					{
						title: 'MongoDB',
						description: 'Документо-ориентированная NoSQL база данных',
						link: 'https://www.mongodb.com/',
					},
					{
						title: 'Redis',
						description:
							'In-memory key‑value store, часто используется для кэширования',
						link: 'https://redis.io/',
					},
				],
			},
			{
				title: 'API Design',
				description: 'Проектирование RESTful и GraphQL API',
				elements: [
					{
						title: 'REST API Guide',
						link: 'https://restfulapi.net/',
					},
					{
						title: 'GraphQL',
						description: 'Query language для API и runtime',
						link: 'https://graphql.org/',
					},
					{
						title: 'OpenAPI / Swagger',
						description: 'Стандарты документирования REST API',
						link: 'https://swagger.io/',
					},
				],
			},
		],
		questions: [
			{
				title: 'REST vs GraphQL',
				description: 'Сравнение подходов к проектированию API',
				elements: [
					{
						title: 'Junior',
						description:
							'REST использует фиксированные endpoints (GET/POST и т.д.). GraphQL — один endpoint и запрос нужных полей.',
					},
					{
						title: 'Middle',
						description:
							'Middle поясняет гибкость GraphQL, типизацию запросов, N+1 проблему и пагинацию; REST — кэшируемость, версии API.',
					},
					{
						title: 'Senior',
						description:
							'Senior описывает схемы, federation, batching, subscriptions, complexity limits, apollo federation, schema stitching, миграции REST→GraphQL.',
					},
				],
			},
			{
				title: 'Аутентификация и авторизация',
				description: 'JWT, OAuth, сессии - методы обеспечения безопасности',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает разницу между аутентификацией и авторизацией; знает JWT и базовые сессии.',
					},
					{
						title: 'Middle',
						description:
							'Middle знает OAuth2 flows, refresh токены, безопасность XSS/CSRF, хранение паролей (bcrypt), RBAC.',
					},
					{
						title: 'Senior',
						description:
							'Senior строит безопасные мульти‑tenant системы, SSO, OpenID Connect, audit log, threat modeling и secure by design.',
					},
				],
			},
			{
				title: 'Оптимизация запросов к БД',
				description: 'Индексы, денормализация, кэширование',
				elements: [
					{
						title: 'Junior',
						description:
							'Знает что такое индекс, простая денормализация, basic SELECT queries.',
					},
					{
						title: 'Middle',
						description:
							'Middle применяет индексирование, кэширование (Redis), денормализация для чтения, explain планы, connection pooling.',
					},
					{
						title: 'Senior',
						description:
							'Senior проектирует sharding, replication, read replicas, CQRS, event sourcing, materialized views, high availability.',
					},
				],
			},
			{
				title: 'Микросервисы vs Монолит',
				description: 'Плюсы и минусы разных архитектурных подходов',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает, что такое монолит и микросервисы, основные различия.',
					},
					{
						title: 'Middle',
						description:
							'Middle знает inter-service communication (REST/gRPC), контейнеризацию (Docker), orchestration (Kubernetes), CI/CD.',
					},
					{
						title: 'Senior',
						description:
							'Senior проектирует event-driven системы, saga, monitoring, observability (Prometheus, tracing), deploy strategies, service mesh.',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на Backend Developer',
				description:
					'Вопросы по языкам программирования, базам данных и системному дизайну',
			},
			{
				title: 'Проектирование масштабируемых систем',
				description:
					'Как проектировать backend для высоконагруженных приложений',
			},
		],
	},
	mobile: {
		title: 'Mobile Development',
		description: 'Создание мобильных приложений для iOS и Android',
		topics: [
			{
				title: 'React Native',
				description: 'Кроссплатформенная разработка на React',
				elements: [
					{
						title: 'React Native Docs',
						link: 'https://reactnative.dev/',
					},
					{
						title: 'Expo',
						description: 'Фреймворк и платформа для React Native',
						link: 'https://expo.dev/',
					},
				],
			},
			{
				title: 'Flutter',
				description: 'UI toolkit от Google для кроссплатформенной разработки',
				elements: [
					{
						title: 'Flutter.dev',
						link: 'https://flutter.dev/',
					},
					{
						title: 'Dart language',
						description: 'Язык программирования для Flutter',
						link: 'https://dart.dev/',
					},
				],
			},
			{
				title: 'Swift',
				description: 'Язык программирования для iOS разработки',
				elements: [
					{
						title: 'Swift.org',
						link: 'https://swift.org/',
					},
					{
						title: 'UIKit / SwiftUI',
						description: 'Фреймворки для создания UI на iOS',
						link: 'https://developer.apple.com/',
					},
				],
			},
			{
				title: 'Kotlin',
				description: 'Современный язык для Android разработки',
				elements: [
					{
						title: 'Kotlinlang',
						link: 'https://kotlinlang.org/',
					},
					{
						title: 'Android SDK',
						description: 'Официальный набор SDK для Android',
						link: 'https://developer.android.com/',
					},
				],
			},
			{
				title: 'Mobile CI/CD',
				description: 'Инструменты автоматизации сборки и доставки',
				elements: [
					{
						title: 'Fastlane',
						description: 'Автоматизация сборки и релизов iOS/Android',
						link: 'https://fastlane.tools/',
					},
					{
						title: 'Bitrise',
						description: 'CI/CD для мобильных приложений',
						link: 'https://bitrise.io/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Нативные vs кроссплатформенные приложения',
				description: 'Сравнение подходов к мобильной разработке',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает, что iOS/Android нативное приложение написано на Swift/Kotlin, React Native/Flutter — кроссплатформенные.',
					},
					{
						title: 'Middle',
						description:
							'Middle сравнивает производительность, native UI integrаtion, Hot reload, native modules, доступ к API устройства.',
					},
					{
						title: 'Senior',
						description:
							'Senior оценивает trade‑offs в производительности, maintainability, CI/CD pipeline, release channels, scalability, large code base.',
					},
				],
			},
			{
				title: 'Оптимизация производительности',
				description: 'Методы улучшения скорости работы мобильных приложений',
				elements: [
					{
						title: 'Junior',
						description:
							'Минимизировать количество ререндеров, использовать flat lists, basic profiling.',
					},
					{
						title: 'Middle',
						description:
							'Middle применяет lazy-loading компонентов, производительность анимаций, memory leaks detection, улучшения startup time.',
					},
					{
						title: 'Senior',
						description:
							'Senior знает native profiling tools (Android Profiler, Instruments), multithreading, performance budgeting и CI performance integration.',
					},
				],
			},
		],
	},
	devops: {
		title: 'DevOps & Infrastructure',
		description:
			'Инструменты и практики для автоматизации, доставки, мониторинга и управления инфраструктурой',
		topics: [
			{
				title: 'CI/CD',
				description: 'Непрерывная интеграция и доставка',
				elements: [
					{
						title: 'Jenkins',
						description: 'Автоматизация сборки и деплоя',
						link: 'https://www.jenkins.io/',
					},
					{
						title: 'GitHub Actions',
						description: 'CI/CD встроенный в GitHub',
						link: 'https://github.com/features/actions',
					},
					{
						title: 'GitLab CI/CD',
						description: 'Пайплайны и автоматизация в GitLab',
						link: 'https://docs.gitlab.com/ee/ci/',
					},
				],
			},
			{
				title: 'Контейнеризация и оркестрация',
				description:
					'Docker, Kubernetes и управление контейнерной инфраструктурой',
				elements: [
					{
						title: 'Docker',
						description: 'Платформа контейнеризации',
						link: 'https://www.docker.com/',
					},
					{
						title: 'Kubernetes',
						description: 'Открытая система оркестрации контейнеров',
						link: 'https://kubernetes.io/',
					},
					{
						title: 'Helm',
						description: 'Пакетный менеджер для Kubernetes',
						link: 'https://helm.sh/',
					},
				],
			},
			{
				title: 'IaC (Infrastructure as Code)',
				description: 'Определение инфраструктуры как кода',
				elements: [
					{
						title: 'Terraform',
						description: 'Управление облачной инфраструктурой',
						link: 'https://www.terraform.io/',
					},
					{
						title: 'Ansible',
						description: 'Автоматизация конфигураций',
						link: 'https://www.ansible.com/',
					},
					{
						title: 'Pulumi',
						description: 'IaC с использованием языков программирования',
						link: 'https://www.pulumi.com/',
					},
				],
			},
			{
				title: 'Мониторинг и логирование',
				description: 'Слежение за состоянием и сбор метрик',
				elements: [
					{
						title: 'Prometheus',
						description: 'Система мониторинга и оповещений',
						link: 'https://prometheus.io/',
					},
					{
						title: 'Grafana',
						description: 'Панели и визуализация метрик',
						link: 'https://grafana.com/',
					},
					{
						title: 'ELK Stack (Elasticsearch, Logstash, Kibana)',
						description: 'Сбор и анализ логов',
						link: 'https://www.elastic.co/elk-stack',
					},
				],
			},
			{
				title: 'Cloud Providers',
				description: 'Облачные платформы и сервисы',
				elements: [
					{
						title: 'AWS',
						description: 'Amazon Web Services',
						link: 'https://aws.amazon.com/',
					},
					{
						title: 'Microsoft Azure',
						description: 'Облачные сервисы от Microsoft',
						link: 'https://azure.microsoft.com/',
					},
					{
						title: 'Google Cloud Platform',
						description: 'Облачная платформа от Google',
						link: 'https://cloud.google.com/',
					},
				],
			},
			{
				title: 'Infrastructure Monitoring / Security',
				description: 'Обеспечение безопасности и устойчивости систем',
				elements: [
					{
						title: 'Vault (HashiCorp)',
						description: 'Управление секретами и секретным доступом',
						link: 'https://www.vaultproject.io/',
					},
					{
						title: 'Istio / Service Mesh',
						description: 'Управление сервис-коммуникациями в Kubernetes',
						link: 'https://istio.io/',
					},
					{
						title: 'Chaos Engineering (e.g. Chaos Monkey)',
						description: 'Методики тестирования отказоустойчивости систем',
						link: 'https://principlesofchaos.org/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Что такое Infrastructure as Code (IaC)?',
				description: 'Практика управления инфраструктурой с помощью кода',
				elements: [
					{
						title: 'Junior',
						description:
							'IaC позволяет описывать серверы, сети и сервисы в виде конфигурационных файлов (например, Terraform/HCL).',
					},
					{
						title: 'Middle',
						description:
							'Middle объясняет benefits: versioning, reproducibility, drift detection. Умеет писать Terraform модули, Ansible playbooks.',
					},
					{
						title: 'Senior',
						description:
							'Senior проектирует multi‑account terraform architecture, модули, CI для IaC, state management (backend state, remote storage), policy as code, drift remediation.',
					},
				],
			},
			{
				title: 'CI/CD best practices',
				description: 'Лучшие практики непрерывной интеграции и доставки',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает зачем нужны тесты, автоматизация сборки и деплой через простые pipeline.',
					},
					{
						title: 'Middle',
						description:
							'Middle пишет pipeline с stages: build → test → deploy, параллельные job' +
							', автоматические rollback, ветвление release flows.',
					},
					{
						title: 'Senior',
						description:
							'Senior оптимизирует пайплайн, blue/green deploy, canary, security scans, secret management, audit and rollback strategies.',
					},
				],
			},
			{
				title: 'Мониторинг и observability',
				description: 'Как обеспечить полную видимость состояния системы',
				elements: [
					{
						title: 'Junior',
						description:
							'Знает мониторинг CPU/memory, базовые дашборды в Grafana или Prometheus.',
					},
					{
						title: 'Middle',
						description:
							'Middle внедряет alerting, SLIs/SLOs/SLAs, tracing (Jaeger), лог-аналитику (ELK).',
					},
					{
						title: 'Senior',
						description:
							'Senior строит distributed tracing, full-stack observability, auto-remediation, chaos testing, incident response playbooks.',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на DevOps Engineer',
				description:
					'Вопросы по CI/CD, контейнеризации, IaC, мониторингу и security',
			},
			{
				title: 'Проектирование устойчивых инфраструктур',
				description:
					'ARR/HA архитектуры, кластеры, disaster recovery и масштабирование',
			},
		],
	},
	ai: {
		title: 'AI / ML Development',
		description:
			'Разработка моделей искусственного интеллекта и машинного обучения: от данных до продакшн‑решений',
		topics: [
			{
				title: 'Основные фреймворки',
				description: 'TensorFlow, PyTorch, scikit-learn, Keras и другие',
				elements: [
					{
						title: 'TensorFlow',
						description: 'Фреймворк от Google для обучения и инференса',
						link: 'https://www.tensorflow.org/',
					},
					{
						title: 'PyTorch',
						description: 'Интуитивный DL‑фреймворк от Meta AI',
						link: 'https://pytorch.org/',
					},
					{
						title: 'scikit‑learn',
						description: 'Классические ML‑алгоритмы для Python',
						link: 'https://scikit-learn.org/',
					},
					{
						title: 'XGBoost / LightGBM / CatBoost',
						description: 'Градиентный бустинг для табличных данных',
						link: 'https://xgboost.readthedocs.io/',
					},
				],
			},
			{
				title: 'Инструменты MLOps и управление экспериментами',
				description: 'MLflow, Kubeflow, Optuna и другие',
				elements: [
					{
						title: 'MLflow',
						description: 'Трекинг экспериментов, model registry',
						link: 'https://mlflow.org/',
					},
					{
						title: 'Kubeflow',
						description: 'Пайплайны ML на Kubernetes',
						link: 'https://kubeflow.org/',
					},
					{
						title: 'Optuna',
						description: 'Автоматическая оптимизация гиперпараметров',
						link: 'https://optuna.org/',
					},
				],
			},
			{
				title: 'NLP и LLM',
				description:
					'Обработка естественного языка, трансформеры и генеративные модели',
				elements: [
					{
						title: 'Hugging Face',
						description: 'Трансформеры и LLM для NLP‑задач',
						link: 'https://huggingface.co/',
					},
					{
						title: 'OpenAI API',
						description: 'Генеративные модели (GPT‑4 и др.)',
						link: 'https://openai.com/',
					},
				],
			},
			{
				title: 'Computer Vision',
				description: 'Сверточные нейронные сети для задач CV',
				elements: [
					{
						title: 'OpenCV',
						description: 'Библиотека для обработки изображений',
						link: 'https://opencv.org/',
					},
					{
						title: 'TensorFlow / PyTorch CV models',
						description:
							'Предобученные модели для классификации, detection и segmentation',
						link: 'https://www.tensorflow.org/hub',
					},
				],
			},
			{
				title: 'Обработка данных и хранение',
				description: 'ETL, хранение признаков, работу с данными',
				elements: [
					{
						title: 'Pandas / NumPy',
						description: 'Библиотеки для работы с данными в Python',
						link: 'https://pandas.pydata.org/',
					},
					{
						title: 'Feature Store',
						description: 'Хранилище признаков (например Feast)',
						link: 'https://feast.dev/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Что такое разница между AI и ML?',
				description:
					'Основное различие между искусственным интеллектом и машинным обучением',
				elements: [
					{
						title: 'Junior',
						description:
							'AI — общее понятие о системах, которые имитируют человеческий интеллект; ML — подмножество AI, где модель обучается на данных.' +
							' :contentReference[oaicite:1]{index=1}',
					},
					{
						title: 'Middle',
						description:
							'Middle объяснит примеры supervised, unsupervised и reinforcement learning, а также объяснит transfer learning и self‑supervised релевантность.' +
							' :contentReference[oaicite:2]{index=2}',
					},
					{
						title: 'Senior',
						description:
							'Senior сможет спроектировать гибридную систему: rule‑based + ML система, self‑supervised pipelines и объяснить governance LLM.' +
							' :contentReference[oaicite:3]{index=3}',
					},
				],
			},
			{
				title: 'Что такое overfitting и как его предотвращать?',
				description: 'Проблема переобучения и способы борьбы',
				elements: [
					{
						title: 'Junior',
						description:
							'Overfitting — модель слишком точно подгоняется под обучающие данные и плохо работает на новых.' +
							' Способы: регуляризация, больше данных.' +
							' :contentReference[oaicite:4]{index=4}',
					},
					{
						title: 'Middle',
						description:
							'Middle использует cross‑validation, регуляризацию L1/L2, dropout, pruning и мониторит performance на валидации.' +
							' :contentReference[oaicite:5]{index=5}',
					},
					{
						title: 'Senior',
						description:
							'Senior внедряет monitoring generalization gap, early stopping, ensemble, meta‑learning подходы и отчётность для drift detection.' +
							' :contentReference[oaicite:6]{index=6}',
					},
				],
			},
			{
				title: 'Как справиться с несбалансированным датасетом?',
				description: 'Imbalanced classes: методы и метрики',
				elements: [
					{
						title: 'Junior',
						description:
							'Знает о SMOTE, undersampling/oversampling, использует метрики precision, recall, F1 вместо точности.' +
							' :contentReference[oaicite:7]{index=7}',
					},
					{
						title: 'Middle',
						description:
							'Описание class_weights, stratified sampling, bootstrapping, threshold tuning, подбор метрик по бизнес-цели.' +
							' :contentReference[oaicite:8]{index=8}',
					},
					{
						title: 'Senior',
						description:
							'Senior строит pipelines с продвинутым resampling, cost‑sensitive learning, continuous monitoring метрик и AUC/ROC‑based thresholding.' +
							' :contentReference[oaicite:9]{index=9}',
					},
				],
			},
			{
				title: 'Что такое transfer learning и fine‑tuning?',
				description: 'Применение готовых моделей для новых задач',
				elements: [
					{
						title: 'Junior',
						description:
							'Использует предобученную модель и дообучает последний слой на новой задаче.',
					},
					{
						title: 'Middle',
						description:
							'Middle умеет замораживать слои, разогревать learning rate, управлять feature extractor и fine‑tune несколько слоёв.',
					},
					{
						title: 'Senior',
						description:
							'Senior строит multi-task fine‑tuning, adapter based методы, low‑rank adaptation, efficient fine-tuning для production.' +
							' :contentReference[oaicite:10]{index=10}',
					},
				],
			},
			{
				title: 'Оптимизация гиперпараметров',
				description: 'Hyperparameter tuning методы',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает необходимость гипертюнинга, grid search или random search.',
					},
					{
						title: 'Middle',
						description:
							'Middle применяет Bayesian optimization, Optuna для hyperparameter tuning.' +
							' :contentReference[oaicite:11]{index=11}',
					},
					{
						title: 'Senior',
						description:
							'Senior производит автоматизированные CI pipelines с Optuna, multi-objective optimization и reuse поиска.' +
							' :contentReference[oaicite:12]{index=12}',
					},
				],
			},
			{
				title: 'Что такое interpretability и почему она важна?',
				description: 'Интерпретируемость моделей и её значение',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает, что explainability важно для доверия и audit, например feature importance.',
					},
					{
						title: 'Middle',
						description:
							'Middle применяет SHAP/LIME, interpretable surrogate models и визуализацию объяснений.',
					},
					{
						title: 'Senior',
						description:
							'Senior выбирает interpretable models в критичных системах, causal inference, constrained models.' +
							' :contentReference[oaicite:13]{index=13}',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на AI / ML Engineer',
				description:
					'Вопросы по ML‑алгоритмам, deep learning, data pipelines, hyperparameter tuning и deployment',
			},
			{
				title: 'Проектирование AI систем',
				description:
					'Data collection, data governance, ethical AI, interpretability, scale, drift и инфраструктура моделей',
			},
		],
	},
	qa: {
		title: 'Quality Assurance (QA)',
		description:
			'Обеспечение качества ПО: тестирование, автоматизация, процессы и best practices',
		topics: [
			{
				title: 'Manual Testing',
				description: 'Ручное тестирование: методики и инструменты',
				elements: [
					{
						title: 'ISTQB Foundation',
						description: 'Базовая сертификация и методология тестирования',
						link: 'https://www.istqb.org/',
					},
					{
						title: 'Test documentation',
						description: 'Тест-кейсы, чек-листы, баг-репорты',
						link: 'https://www.guru99.com/software-testing.html',
					},
					{
						title: 'Exploratory Testing',
						description: 'Исследовательское тестирование, сессии, chartering',
						link: 'https://exploratorytesting.com/',
					},
				],
			},
			{
				title: 'Test Automation',
				description: 'Автоматизация тестирования — инструменты и frameworks',
				elements: [
					{
						title: 'Selenium WebDriver',
						description: 'Авто UI-тестирование для веб',
						link: 'https://www.selenium.dev/',
					},
					{
						title: 'Cypress',
						description: 'Современный инструмент для E2E тестов',
						link: 'https://www.cypress.io/',
					},
					{
						title: 'Playwright',
						description: 'E2E фреймворк от Microsoft',
						link: 'https://playwright.dev/',
					},
				],
			},
			{
				title: 'API Testing',
				description: 'Тестирование backend API и HTTP интерфейсов',
				elements: [
					{
						title: 'Postman',
						description:
							'Инструмент для тестирования API вручную и автоматизации',
						link: 'https://www.postman.com/',
					},
					{
						title: 'REST Assured',
						description: 'Java библиотека для тестирования REST API',
						link: 'https://rest-assured.io/',
					},
					{
						title: 'SoapUI / Postman',
						description: 'Инструменты для SOAP и REST тестирования',
						link: 'https://www.soapui.org/',
					},
				],
			},
			{
				title: 'Performance Testing',
				description: 'Нагрузочное и стресс-тестирование',
				elements: [
					{
						title: 'JMeter',
						description: 'Инструмент для performance/load тестов',
						link: 'https://jmeter.apache.org/',
					},
					{
						title: 'Gatling',
						description: 'Scala-based нагрузочное тестирование',
						link: 'https://gatling.io/',
					},
					{
						title: 'k6',
						description: 'Modern load testing tool',
						link: 'https://k6.io/',
					},
				],
			},
			{
				title: 'CI / QA интеграция',
				description: 'Пайплайны, отчёты и quality gates',
				elements: [
					{
						title: 'Jenkins / GitHub Actions',
						description: 'Интеграция автотестов в CI',
						link: 'https://www.jenkins.io/',
					},
					{
						title: 'SonarQube',
						description: 'Анализ качества кода и code smells',
						link: 'https://www.sonarqube.org/',
					},
					{
						title: 'Allure Reports',
						description: 'Кастомные отчёты тестирования',
						link: 'https://docs.qameta.io/allure/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Что такое тест-план и тест-кейсы?',
				description:
					'Разница между тестовой документацией и её влияние на качество',
				elements: [
					{
						title: 'Junior',
						description:
							'Тест-план описывает цели и объём тестирования, тест-кейсы — конкретные шаги, ожидаемые результаты и предусловия.',
					},
					{
						title: 'Middle',
						description:
							'Middle умеет организовать тест-план по областям (smoke, regression), покрытие, traceability matrix, risk-based testing.',
					},
					{
						title: 'Senior',
						description:
							'Senior формирует QA-стратегию, coverage criteria, exit/entry criteria, test metrics (pass rate, defect density), QA governance.',
					},
				],
			},
			{
				title: 'Automated vs Manual Testing',
				description: 'Когда автоматизировать, а когда проверять вручную',
				elements: [
					{
						title: 'Junior',
						description:
							'Manual лучше для UX, exploratory; automation — для повторяющихся сценариев.',
					},
					{
						title: 'Middle',
						description:
							'Middle решает ROI автоматизации, выбирает подходящие сценарии (smoke, regression, API), писcть data‑driven тесты.',
					},
					{
						title: 'Senior',
						description:
							'Senior выстраивает autotest strategy, TDD/BDD pipelines, runs cost-benefit analysis, maintains test infrastructure.',
					},
				],
			},
			{
				title: 'API тестирование: что и как проверять?',
				description: 'Тестирование REST/GraphQL API: подходы и инструменты',
				elements: [
					{
						title: 'Junior',
						description:
							'Проверяет статус-коды, payload, schema, basic error handling и response timings.',
					},
					{
						title: 'Middle',
						description:
							'Middle добавляет contract testing, mocks, data validation, security тесты (auth/authz), boundary cases.',
					},
					{
						title: 'Senior',
						description:
							'Senior внедряет contract-first design, OpenAPI validation, versioning tests, and test suites in pipelines.',
					},
				],
			},
			{
				title: 'Нагрузочное тестирование: виды и критерии успеха',
				description: 'Как определять SLA и критерии при performance testing',
				elements: [
					{
						title: 'Junior',
						description:
							'Запускает simple load test, проверяет response time, hits per second, basic thresholds.',
					},
					{
						title: 'Middle',
						description:
							'Middle конфигурирует ramp-up/ramp-down, stress, soak тесты; анализ результатов, error rate и throughput.',
					},
					{
						title: 'Senior',
						description:
							'Senior проектирует realistic load scenarios, continuous performance testing, auto scaling triggers, SLA violations alerting.',
					},
				],
			},
			{
				title: 'CI/CD и QA: как строить пайплайн тестирования',
				description: 'Интеграция автоматизированных тестов в CI/CD',
				elements: [
					{
						title: 'Junior',
						description:
							'Добавляет тесты в CI пайплайн, получает базовые отчёты после сборки.',
					},
					{
						title: 'Middle',
						description:
							'Middle настраивает параллельный запуск тестов, артифакты, branching policies (pull request triggers).',
					},
					{
						title: 'Senior',
						description:
							'Senior внедряет quality gates (coverage thresholds), auto‑rollback, security scans, audit trails и metric dashboards.',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на QA Engineer',
				description:
					'Вопросы по тестированию (manual, automation, API, performance), процессам и подходам',
			},
			{
				title: 'Проектирование QA процесса',
				description:
					'Как строить QA strategy, governance, quality metrics и continuous improvement',
			},
		],
	},
	pm: {
		title: 'Product / Project Management',
		description:
			'Управление продуктом и проектами: от идей до delivery, коммуникации с командами и стейкхолдерами',
		topics: [
			{
				title: 'Методологии и фреймворки',
				description: 'Agile, Scrum, Kanban, Waterfall и гибридные подходы',
				elements: [
					{
						title: 'Scrum Guide',
						description: 'Официальное руководство Scrum',
						link: 'https://scrumguides.org/',
					},
					{
						title: 'Kanban Methodology',
						description: 'Система визуализации потока работы',
						link: 'https://kanbanize.com/kanban-resources/getting-started/what-is-kanban',
					},
					{
						title: 'PMBoK',
						description: 'Стандарт управления проектами от PMI',
						link: 'https://www.pmi.org/pmbok-guide-standards',
					},
				],
			},
			{
				title: 'Управление продуктом',
				description:
					'Roadmaps, product discovery, user research, backlog grooming',
				elements: [
					{
						title: 'ProductPlan Blog',
						description: 'Инструменты и статьи по продуктовой стратегии',
						link: 'https://www.productplan.com/blog/',
					},
					{
						title: 'Mind the Product',
						description: 'Сообщество и публикации PM',
						link: 'https://www.mindtheproduct.com/',
					},
					{
						title: 'Jobs to Be Done',
						description: 'Методология пользовательских потребностей',
						link: 'https://jobs-to-be-done.com/',
					},
				],
			},
			{
				title: 'Инструменты и коммуникации',
				description:
					'JIRA, Trello, Confluence, Miro и другие средства сотрудничества',
				elements: [
					{
						title: 'JIRA Software',
						description: 'Популярный трекер задач и agile board',
						link: 'https://www.atlassian.com/software/jira',
					},
					{
						title: 'Confluence',
						description: 'Knowledge-base и документация продукта',
						link: 'https://www.atlassian.com/software/confluence',
					},
					{
						title: 'Miro',
						description: 'Интерактивные доски для совместной работы',
						link: 'https://miro.com/',
					},
				],
			},
			{
				title: 'Метрики и аналитика',
				description: 'KPI, OKR, метрики продукта и возврата инвестиций',
				elements: [
					{
						title: 'Measure What Matters',
						description: 'Книга про OKR от John Doerr',
						link: 'https://measurewhatmatters.com/',
					},
					{
						title: 'Lean Analytics',
						description: 'Метрики и гипотезы для запуска стартапов',
						link: 'https://leananalyticsbook.com/',
					},
					{
						title: 'Aha! Blog',
						description: 'Блог и ресурсы по управлению продуктом',
						link: 'https://www.aha.io/blog',
					},
				],
			},
			{
				title: 'User Research и UX',
				description:
					'Интервью с пользователями, тестирование гипотез, prototyping',
				elements: [
					{
						title: 'NN/g UX Articles',
						description: 'Исследования и паттерны UX от Nielsen Norman Group',
						link: 'https://www.nngroup.com/articles/',
					},
					{
						title: 'UX Research Methods',
						description: 'Методологии интервью, тестирование, survey',
						link: 'https://www.usability.gov/how-to-and-tools/methods/index.html',
					},
					{
						title: 'Figma',
						description: 'Инструмент для прототипирования и совместной работы',
						link: 'https://www.figma.com/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Что такое roadmap и чем он полезен?',
				description: 'Зачем нужен дорожный план и как правильно его строить',
				elements: [
					{
						title: 'Junior',
						description:
							'Роадмап показывает ключевые релизы и важные milestones, помогает команде видеть общую картину.',
					},
					{
						title: 'Middle',
						description:
							'Middle создает roadmap с приоритизацией (MoSCoW, RICE), связывает roadmap с OKR и выводит dependency между фичами.',
					},
					{
						title: 'Senior',
						description:
							'Senior строит multi-year roadmap, учитывает риски, budget, конкурентные факторы, внешние dependencies и стратегические цели.',
					},
				],
			},
			{
				title: 'Как проводить user research?',
				description:
					'Методики и подходы к сбору обратной связи от пользователей',
				elements: [
					{
						title: 'Junior',
						description:
							'Проводит базовые интервью и surveys, собирает feedback, делает простую сегментацию пользователей.',
					},
					{
						title: 'Middle',
						description:
							'Middle подготавливает user personas, проводит usability‑тестирование, анализирует qualitative и quantitative данные.',
					},
					{
						title: 'Senior',
						description:
							'Senior внедряет continuous discovery, квазикогортный анализ, метрики AARRR, JTBD подходы и stakeholder workshops.',
					},
				],
			},
			{
				title: 'В чём разница между Agile и Waterfall?',
				description:
					'Сравнение гибких и классических подходов к управлению проектами',
				elements: [
					{
						title: 'Junior',
						description:
							'Junior понимает, что Agile — это итерации, Scrum/Kanban; Waterfall — поэтапная линейная модель.',
					},
					{
						title: 'Middle',
						description:
							'Middle оценивает trade‑offs: predictability vs flexibility, overhead, feedback loops, lifecycle cost.',
					},
					{
						title: 'Senior',
						description:
							'Senior проектирует гибридные модели, масштабирует Agile на enterprise (SAFe), делает continuous improvement и Lean принципы.',
					},
				],
			},
			{
				title: 'Как управлять stakeholder expectations?',
				description:
					'Коммуникация и управление рисками заинтересованных сторон',
				elements: [
					{
						title: 'Junior',
						description:
							'Junior поддерживает прозрачность, делится статусом, собирает feedback от ключевых участников.',
					},
					{
						title: 'Middle',
						description:
							'Middle создает RACI матрицы, планирует регулярные чек‑ины, управляет change requests и expectation management.',
					},
					{
						title: 'Senior',
						description:
							'Senior строит stakeholder governance, crisis communication plan, escalation paths и прозрачную отчетность.',
					},
				],
			},
			{
				title: 'OKR vs KPI: зачем они и как связаны?',
				description:
					'Отличия и применение метрик в стратегическом управлении продуктом',
				elements: [
					{
						title: 'Junior',
						description:
							'Junior понимает, что KPI — это метрики результата, OKR — цели с результатами (objectives & key results).',
					},
					{
						title: 'Middle',
						description:
							'Middle связывает OKR с roadmap, tracks objetivos, recalibrates based on metrics trends.',
					},
					{
						title: 'Senior',
						description:
							'Senior формирует enterprise OKR framework, alignment с business strategy, evaluates initiative ROI и impact.',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на Product Manager',
				description:
					'Вопросы по продуктовой стратегии, user research, roadmap, метрикам и Agile практикам',
			},
			{
				title: 'Собеседование на Project Manager',
				description:
					'Вопросы по управлению проектом, коммуникации, risk management и delivery',
			},
		],
	},
	analyst: {
		title: 'Data / Business Analyst',
		description:
			'Анализ данных и бизнес-процессов: сбор, визуализация, интерпретация и принятие решений',
		topics: [
			{
				title: 'Инструменты визуализации',
				description: 'BI-платформы и инструменты отчётности',
				elements: [
					{
						title: 'Tableau',
						description: 'Популярный BI-инструмент для визуализации данных',
						link: 'https://www.tableau.com/',
					},
					{
						title: 'Power BI',
						description: 'BI-платформа от Microsoft',
						link: 'https://powerbi.microsoft.com/',
					},
					{
						title: 'Looker / LookML',
						description: 'Инструмент аналитической BI-платформы от Google',
						link: 'https://looker.com/',
					},
				],
			},
			{
				title: 'Работа с данными и SQL',
				description: 'Запросы, трансформация и моделирование данных',
				elements: [
					{
						title: 'SQLZOO',
						description: 'Практика SQL-запросов и задач',
						link: 'https://sqlzoo.net/',
					},
					{
						title: 'Mode Analytics / SQL Guide',
						description: 'Руководства и упражнения по SQL для аналитиков',
						link: 'https://mode.com/sql-tutorial/',
					},
					{
						title: 'dbt',
						description:
							'Инструмент для трансформации данных внутри аналитического стекa',
						link: 'https://www.getdbt.com/',
					},
				],
			},
			{
				title: 'Анализ и статистика',
				description: 'Методы описательной и диагностической аналитики',
				elements: [
					{
						title: 'Khan Academy Statistics',
						description: 'Введение в статистику и вероятности',
						link: 'https://www.khanacademy.org/math/statistics-probability',
					},
					{
						title: 'Towards Data Science (Medium)',
						description: 'Статьи и кейсы по аналитике',
						link: 'https://towardsdatascience.com/',
					},
					{
						title: 'Coursera / edX курсы по статистике',
						description: 'Онлайн‑курсы по статистике и аналитике',
						link: 'https://www.coursera.org/',
					},
				],
			},
			{
				title: 'Инструменты для питона и дашбордов',
				description: 'Python-аналитика и dashboarding',
				elements: [
					{
						title: 'Pandas / NumPy',
						description: 'Библиотеки для анализа и обработки данных',
						link: 'https://pandas.pydata.org/',
					},
					{
						title: 'Plotly / Dash',
						description: 'Интерактивные дашборды на Python',
						link: 'https://plotly.com/',
					},
					{
						title: 'Jupyter Notebook / JupyterLab',
						description: 'Среда для анализа и визуализации данных',
						link: 'https://jupyter.org/',
					},
				],
			},
			{
				title: 'Метрики и BI процессы',
				description: 'KPI, OKR, бизнес-отчётность и дэшбординг',
				elements: [
					{
						title: 'The KPI Institute',
						description: 'Ресурсы и best practices по KPI',
						link: 'https://kpiinstitute.org/',
					},
					{
						title: 'OKR в аналитике',
						description: 'Применение OKR для data teams',
						link: 'https://measurewhatmatters.com/',
					},
					{
						title: 'Looker Analytics Guides',
						description: 'Практика data modeling и exploration',
						link: 'https://looker.com/',
					},
				],
			},
		],
		questions: [
			{
				title: 'Что такое KPI и как выбирать метрики?',
				description: 'Отличие KPI от vanity metrics и бизнес-целей',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает, что KPI — metrics aligned with business goals, vanity metrics — красивые, но не показывают value.',
					},
					{
						title: 'Middle',
						description:
							'Middle связывает KPI с OKR, строит dashboards для tracking, сегментацию пользователей и funnel analysis.',
					},
					{
						title: 'Senior',
						description:
							'Senior формирует KPI strategy, defines leading vs lagging indicators, sets alerts, evaluates ROI и impact metrics.',
					},
				],
			},
			{
				title: 'SQL: JOINы, window-функции и агрегаты',
				description: 'Продвинутое владение SQL для аналитики',
				elements: [
					{
						title: 'Junior',
						description: 'Пишет простые SELECT, WHERE, JOINы и basic GROUP BY.',
					},
					{
						title: 'Middle',
						description:
							'Middle использует window functions (ROW_NUMBER, PARTITION BY), CTE, subqueries, агрегаты.',
					},
					{
						title: 'Senior',
						description:
							'Senior оптимизирует запросы, строит материализованные представления, агрегирует большие dataset‑ы, работает с query performance.',
					},
				],
			},
			{
				title: 'A/B тестирование: design и analysis',
				description: 'Как организовать и оценить результаты эксперимента',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает что такое контрольная и тестовая группы, basic statistical significance.',
					},
					{
						title: 'Middle',
						description:
							'Middle рассчитывает p-value, confidence intervals, power analysis, handles multiple testing corrections.',
					},
					{
						title: 'Senior',
						description:
							'Senior управляет full experiement pipeline: sequential testing, Bayesian approaches, result validation, business impact.',
					},
				],
			},
			{
				title: 'Data storytelling и visualization',
				description: 'Как донести аналитику до стейкхолдеров',
				elements: [
					{
						title: 'Junior',
						description:
							'Создаёт диаграммы и отчёты в Power BI / Tableau, простые визуализации.',
					},
					{
						title: 'Middle',
						description:
							'Middle делает dashboards с story flow, annotations, drill-down анализ и actionable insights.',
					},
					{
						title: 'Senior',
						description:
							'Senior строит data storytelling frameworks, Does stakeholder presentations, trains teams и развивает data culture.',
					},
				],
			},
			{
				title: 'Работа с неструктурированными данными',
				description: 'Текст, логи, JSON‑данные',
				elements: [
					{
						title: 'Junior',
						description:
							'Понимает, как извлекать данные из CSV, JSON, простых текстовых логов.',
					},
					{
						title: 'Middle',
						description:
							'Middle использует регулярные выражения, parsing JSON, простые ETL-пайплайны, basic NLP.',
					},
					{
						title: 'Senior',
						description:
							'Senior строит ETL pipelines для логов, пишет parsing frameworks, разрабатывает feature extraction и semantic analysis.',
					},
				],
			},
		],
		interviews: [
			{
				title: 'Собеседование на Data Analyst',
				description:
					'Вопросы по BI‑инструментам, SQL, статистике, A/B тестам и dashboarding',
			},
			{
				title: 'Собеседование на Business Analyst',
				description:
					'Вопросы по бизнес-требованиям, KPI, data storytelling и процессам отчетности',
			},
		],
	},
} as const

export type DirectionSlug = keyof typeof directionData
