const casesData = [
	{
		id: 1,
		title: "Маркетплейс для ритейла",
		category: "web",
		client: "Сеть супермаркетов «FreshMart»",
		task: "Создание многофункциональной платформы для онлайн-продаж продуктов питания",
		stack: ["React", "Node.js", "MongoDB", "AWS", "Stripe API"],
		stats: { sales: "+120%", speed: "1.2с" },
		stages: [
			{
				title: "Аналитика",
				desc: "Провели исследование ЦА, проанализировали конкурентов и сформировали CJM",
				img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
			},
			{
				title: "Проектирование",
				desc: "Создали интерактивный прототип с основными пользовательскими сценариями",
				img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
			},
			{
				title: "Дизайн",
				desc: "Разработали современный UI-кит с адаптивными шаблонами для всех устройств",
				img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
			},
			{
				title: "Разработка",
				desc: "Реализовали сложную логику корзины и интеграции с платежными системами",
				img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
			}
		]
	},
	{
		id: 2,
		title: "Корпоративный портал",
		category: "web",
		client: "Транспортная компания «LogiTrans»",
		task: "Разработка системы управления логистическими цепочками",
		stack: ["Angular", "NestJS", "PostgreSQL", "Docker", "Redis"],
		stats: { efficiency: "+75%", users: "2000+" },
		stages: [
			{
				title: "Аналитика",
				desc: "Анализ бизнес-процессов и интеграция с ERP-системой",
				img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
			},
			{
				title: "Проектирование",
				desc: "Разработка архитектуры микросервисов",
				img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
			},
			{
				title: "Дизайн",
				desc: "Создание dashboard для операционного управления",
				img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
			},
			{
				title: "Разработка",
				desc: "Внедрение real-time трекинга грузов",
				img: "https://images.unsplash.com/photo-1591696205602-2f950c417791"
			}
		]
	},
	{
		id: 3,
		title: "Образовательная платформа",
		category: "web",
		client: "Онлайн-университет «EdSpace»",
		task: "Создание LMS системы с видеокурсами",
		stack: ["Next.js", "Django", "WebRTC", "FFmpeg", "AWS S3"],
		stats: { students: "50K+", courses: "300+" },
		stages: [
			{
				title: "Аналитика",
				desc: "Исследование потребностей преподавателей и студентов",
				img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
			},
			{
				title: "Проектирование",
				desc: "Проектирование системы проверки домашних заданий",
				img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
			},
			{
				title: "Дизайн",
				desc: "Дизайн интерактивного видеоплеера с заметками",
				img: "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9"
			},
			{
				title: "Разработка",
				desc: "Интеграция системы видеовещания",
				img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931"
			}
		]
	},
	{
		id: 4,
		title: "Фитнес-трекер",
		category: "mobile",
		client: "Сеть фитнес-клубов «ActiveLife»",
		task: "Кроссплатформенное приложение с AI-тренером",
		stack: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"],
		stats: { installs: "500K+", rating: "4.8" },
		stages: [
			{
				title: "Аналитика",
				desc: "Анализ популярных тренировочных программ",
				img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
			},
			{
				title: "Проектирование",
				desc: "Разработка алгоритма персональных рекомендаций",
				img: "https://images.unsplash.com/photo-1552674605-8b0cb0a702a5"
			},
			{
				title: "Дизайн",
				desc: "Создание анимированных тренировочных карт",
				img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
			},
			{
				title: "Разработка",
				desc: "Интеграция с умными часами и фитнес-браслетами",
				img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c"
			}
		]
	},
	{
		id: 5,
		title: "Приложение для доставки",
		category: "mobile",
		client: "Сервис «QuickEats»",
		task: "Разработка системы трекинга курьеров в реальном времени",
		stack: ["React Native", "Google Maps API", "WebSockets", "Node.js"],
		stats: { orders: "1M+", speed: "<25min" },
		stages: [
			{
				title: "Аналитика",
				desc: "Исследование пиковых нагрузок и оптимальных маршрутов",
				img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
			},
			{
				title: "Проектирование",
				desc: "Создание алгоритма динамического ценообразования",
				img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
			},
			{
				title: "Дизайн",
				desc: "Дизайн интерфейса трекера с анимациями",
				img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
			},
			{
				title: "Разработка",
				desc: "Реализация чата между клиентом и курьером",
				img: "https://images.unsplash.com/photo-1599658880436-c61792e70672"
			}
		]
	},
	{
		id: 6,
		title: "Банковское приложение",
		category: "mobile",
		client: "Финтех-компания «FinSecure»",
		task: "Разработка безопасного мобильного банкинга",
		stack: ["Kotlin", "Swift", "Biometric Auth", "Blockchain"],
		stats: { transactions: "5M+", security: "99.99%" },
		stages: [
			{
				title: "Аналитика",
				desc: "Анализ требований PCI DSS и GDPR",
				img: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8"
			},
			{
				title: "Проектирование",
				desc: "Архитектура двухфакторной аутентификации",
				img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07"
			},
			{
				title: "Дизайн",
				desc: "Создание системы защиты от мошенничества",
				img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
			},
			{
				title: "Разработка",
				desc: "Интеграция с банковскими API и криптокошельками",
				img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
			}
		]
	},
	{
		id: 7,
		title: "Редизайн медиаплатформы",
		category: "design",
		client: "Видеосервис «StreamFlow»",
		task: "Обновление пользовательского опыта и интерфейса",
		stack: ["Figma", "After Effects", "UserTesting", "Design System"],
		stats: { retention: "+55%", engagement: "3.2x" },
		stages: [
			{
				title: "Аналитика",
				desc: "Проведение юзабилити-тестов текущего интерфейса",
				img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931"
			},
			{
				title: "Проектирование",
				desc: "Создание интерактивных wireframes",
				img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
			},
			{
				title: "Дизайн",
				desc: "Разработка анимированных микровзаимодействий",
				img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
			},
			{
				title: "Разработка",
				desc: "Передача дизайн-системы разработчикам",
				img: "https://images.unsplash.com/photo-1591696205602-2f950c417791"
			}
		]
	},
	{
		id: 8,
		title: "Мобильное приложение для путешествий",
		category: "design",
		client: "Турагентство «WorldExplorer»",
		task: "Создание интуитивного интерфейса планирования поездок",
		stack: ["Sketch", "Principle", "Lottie", "User Personas"],
		stats: { bookings: "+200%", rating: "4.9" },
		stages: [
			{
				title: "Аналитика",
				desc: "Исследование поведения путешественников",
				img: "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f"
			},
			{
				title: "Проектирование",
				desc: "Разработка карты путешествия с точками интереса",
				img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
			},
			{
				title: "Дизайн",
				desc: "Визуализация интерактивного маршрута",
				img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b"
			},
			{
				title: "Разработка",
				desc: "Адаптация дизайна под iOS и Android",
				img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
			}
		]
	},
	{
		id: 9,
		title: "Система управления задачами",
		category: "design",
		client: "IT-компания «DevFlow»",
		task: "Дизайн корпоративного инструмента для Agile-команд",
		stack: ["Adobe XD", "Zeplin", "Design Tokens", "Accessibility"],
		stats: { productivity: "+40%", teams: "150+" },
		stages: [
			{
				title: "Аналитика",
				desc: "Интервью с менеджерами проектов",
				img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
			},
			{
				title: "Проектирование",
				desc: "Создание компонентной библиотеки",
				img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
			},
			{
				title: "Дизайн",
				desc: "Реализация темной темы и цветовых схем",
				img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
			},
			{
				title: "Разработка",
				desc: "Интеграция с Jira и Slack",
				img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
			}
		]
	}
];