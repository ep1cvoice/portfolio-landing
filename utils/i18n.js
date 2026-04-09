import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'app_language';

function getSavedLanguage() {
	return localStorage.getItem(STORAGE_KEY);
}

function saveLanguage(lang) {
	localStorage.setItem(STORAGE_KEY, lang);
}
// Post-USSR locales → show Russian UI
const POST_USSR = ['uk', 'ru', 'be', 'kk', 'ky', 'uz', 'tg', 'az', 'hy', 'ka', 'lv', 'lt', 'et', 'tk', 'mo'];

function detectLanguage() {
	const saved = getSavedLanguage();
	if (saved) return saved;

	const lang = (navigator.language || navigator.languages?.[0] || 'en').toLowerCase().split('-')[0];

	if (POST_USSR.includes(lang)) return 'ru';
	if (lang === 'pl') return 'pl';
	return 'en';
}

function changeLanguage(lang) {
	i18n.changeLanguage(lang);
	saveLanguage(lang);
}

const resources = {
	en: {
		translation: {
			nav: {
				home: 'Home',
				about: 'About',
				projects: 'Projects',
				services: 'Services',
				skills: 'Skills',
				contact: 'Contact',
			},
			header: {
				downloadCV: 'Download CV',
				cv: 'CV',
			},
			hero: {
				greeting: "Hi, my name's ",
				name: 'Pavel',
				phrase1: "I'm a frontend developer",
				phrase2: 'I build fast and user-friendly web apps',
				phrase3: 'I create interfaces that drive real results for your business.',
				description: 'Building modern, responsive web applications and landing pages.',
				viewProjects: 'View Projects',
				contactMe: 'Contact Me',
				scrollDown: 'Scroll down',
			},
			about: {
				title: 'About Me',
				p1: "I'm Pavel — a frontend developer focused on building clean, modern, and intuitive web experiences. I primarily work with React and the modern JavaScript ecosystem.",
				p2: 'I turn complex problems into simple and intuitive interfaces, with a strong focus on performance, accessibility, and smooth user interactions.',
				p3: "I've built several real-world projects — from landing pages to interactive web applications — paying close attention to detail, responsiveness, and UX.",
				p4: "Currently, I'm deepening my knowledge in TypeScript and Next.js, while exploring the world of full-stack development with Node.js. I believe in continuous learning and staying curious about new technologies.",
				p5: 'Outside of coding, I actively follow UI/UX trends, experiment with animations and micro-interactions, and continuously improve my skills through hands-on projects.',
				stats: {
					role: 'Web Developer',
					roleDesc: 'Focused on React & modern UI',
					projectsDesc: 'Projects completed',
					stack: 'Modern Stack',
					stackDesc: 'React, TypeScript, Next.js',
					perf: 'Performance',
					perfDesc: 'Fast, responsive & optimized UX',
				},
			},
			projects: {
				label: 'PORTFOLIO',
				title: 'Featured Projects',
				desc: 'Here are some of my recent projects showcasing my skills in web development',
				all: 'All',
				preview: 'Preview',
				liveDemo: 'Live Demo',
				items: {
					xdetalz: {
						desc: 'Premium automotive detailing landing page with service showcase, gallery, and contact form. Dark gold design built for conversion.',
					},
					formafit: {
						desc: 'Fitness gym website featuring training programs, trainer profiles, client testimonials, and subscription pricing plans.',
					},
					swiftrate: {
						desc: 'Real-time currency converter supporting 160+ currencies with live exchange rates, instant conversion, and a clean modern purple UI.',
					},
					nexttodo: {
						descPre:
							'Full-featured task manager with active/completed views, deadlines, pomodoro timer and user authentication built with React and Fastify — in collaboration with ',
					},
					checkycards: {
						desc: 'Flashcard-style web dev theory trainer. Browse Q&A cards with markdown-rendered answers, syntax-highlighted code snippets, dark/light theme, and auth-protected question management.',
					},
				},
			},
			services: {
				label: 'SERVICES',
				title: 'What I Can Do',
				desc: 'Helping businesses launch and improve their web presence.',
				landing: {
					title: 'Landing Pages',
					desc: 'High-converting landing pages designed to turn visitors into customers.',
				},
				corporate: {
					title: 'Corporate Websites',
					desc: 'Scalable business websites with clear structure and strong digital presence.',
				},
				ecommerce: {
					title: 'E-commerce',
					desc: 'Online shop solutions with seamless shopping experience, payments, and integrations.',
				},
				webapps: {
					title: 'Web Applications',
					desc: 'Complex web applications such as dashboards, CRM systems, and SaaS platforms.',
				},
				api: {
					title: 'API Integration',
					desc: 'Seamless connection with backend services, authentication, and data flow.',
				},
				perf: {
					title: 'Performance Optimization',
					desc: 'Faster websites with better SEO and smoother UX.',
				},
				ui: {
					title: 'UI Development',
					desc: 'Clean and responsive interfaces built from Figma with attention to detail.',
				},
				support: { title: 'Support', desc: 'Continuous updates, improvements, and support for your projects.' },
			},
			process: {
				label: 'PROCESS',
				title: 'How I Work',
				desc: 'A structured approach that keeps every project on track — from first brief to final launch.',
				step1: {
					title: 'Discovery',
					desc: 'Understanding your goals, audience, and requirements. We align on scope and define what success looks like.',
				},
				step2: {
					title: 'Design',
					desc: 'Wireframes, layouts, and visual direction. Every element is crafted to be both beautiful and functional.',
				},
				step3: {
					title: 'Develop',
					desc: 'Clean, scalable code built with React and best practices. Performant, accessible, and easy to maintain.',
				},
				step4: {
					title: 'Deploy',
					desc: 'Thorough testing, optimization, and launch. Ongoing support to keep everything running smoothly.',
				},
			},
			skills: {
				title: 'Tech Stack',
				subtitle: 'Technologies I use to build fast and scalable web applications.',
			},
			contact: {
				label: 'CONTACT',
				title: 'Get In Touch',
				desc: 'Have a project in mind or want to collaborate? Let’s talk.',
				formTitle: 'Send a message',
				name: 'Name',
				email: 'Email',
				subject: 'Subject',
				message: 'Message',
				namePlaceholder: 'Your name',
				emailPlaceholder: 'your@email.com',
				subjectPlaceholder: 'Project inquiry',
				msgPlaceholder: 'Tell me about your project...',
				send: 'Send Message',
				sending: 'Sending…',
				successTitle: 'Message sent!',
				successDesc: "Thanks for reaching out — I'll get back to you soon.",
			},
			footer: {
				startOver: 'Start over',
				copy: '© 2026 Pavel. All rights reserved.',
			},
		},
	},

	pl: {
		translation: {
			nav: {
				home: 'Start',
				about: 'O mnie',
				projects: 'Projekty',
				services: 'Usługi',
				skills: 'Umiejętności',
				contact: 'Kontakt',
			},
			header: {
				downloadCV: 'Pobierz CV',
				cv: 'CV',
			},
			hero: {
				greeting: 'Cześć, jestem ',
				name: 'Pavel',
				phrase1: 'Frontend Developer',
				phrase2: 'Buduję szybkie i intuicyjne aplikacje webowe',
				phrase3: 'Tworzę strony, które pracują na Twój biznes.',
				description: 'Buduję nowoczesne, responsywne aplikacje webowe oraz skuteczne landing page’e.',
				viewProjects: 'Portfolio',
				contactMe: 'Kontakt',
				scrollDown: 'Przewiń niżej',
			},
			about: {
				title: 'O mnie',

				p1: 'Jestem Pavel — frontend developer tworzący nowoczesne, przejrzyste i intuicyjne doświadczenia. Na co dzień pracuję z Reactem i nowoczesnym ekosystemem JavaScript.',

				p2: 'Zamieniam złożone problemy w proste i intuicyjne  użytkowe, dbając o wydajność, dostępność i płynne działanie aplikacji.',

				p3: 'Zrealizowałem kilka projektów — od landing page’y po interaktywne aplikacje — zawsze z dużą dbałością o detale, responsywność i UX.',

				p4: 'Obecnie rozwijam się w TypeScript i Next.js, a także poszerzam wiedzę w kierunku backendu (Node.js). Stawiam na ciągły rozwój i śledzenie nowych technologii.',

				p5: 'Poza kodowaniem śledzę trendy UI/UX, eksperymentuję z animacjami i mikrointerakcjami oraz rozwijam swoje umiejętności poprzez realizację własnych projektów.',

				stats: {
					role: 'Frontend Developer',
					roleDesc: 'React i nowoczesne UI',
					projectsDesc: 'Zrealizowane projekty',
					stack: 'Nowoczesny stack',
					stackDesc: 'React, TypeScript, Next.js',
					perf: 'Wydajność',
					perfDesc: 'Szybkie i zoptymalizowane aplikacje',
				},
			},
			projects: {
				label: 'PORTFOLIO',
				title: 'Wybrane projekty',
				desc: 'Kilka projektów, które pokazują moje podejście do tworzenia aplikacji i interfejsów.',
				all: 'Wszystkie',
				preview: 'Podgląd',
				liveDemo: 'Zobacz na żywo',
				items: {
					xdetalz: {
						desc: 'Landing page dla studia auto detailingu — prezentacja usług, galeria i formularz kontaktowy. Ciemna, elegancka stylistyka nastawiona na konwersję.',
					},

					formafit: {
						desc: 'Strona dla siłowni z ofertą treningów, profilami trenerów, opiniami klientów oraz planami abonamentowymi.',
					},

					swiftrate: {
						desc: 'Konwerter walut w czasie rzeczywistym obsługujący ponad 160 walut — aktualne kursy, szybkie przeliczanie i nowoczesny interfejs.',
					},

					nexttodo: {
						descPre:
							'Rozbudowany manager zadań z podziałem na aktywne i ukończone, terminami, timerem Pomodoro oraz autoryzacją użytkownika — projekt realizowany we współpracy z ',
					},

					checkycards: {
						desc: 'Aplikacja do nauki web developmentu w formie fiszek — przeglądanie pytań i odpowiedzi, kod z podświetlaniem składni, tryb jasny/ciemny oraz zarządzanie treścią po zalogowaniu.',
					},
				},
			},
			services: {
				label: 'USŁUGI',
				title: 'Jak mogę pomóc',
				desc: 'Pomagam firmom budować i rozwijać ich obecność w internecie.',

				landing: {
					title: 'Landing page’e',
					desc: 'Strony zaprojektowane tak, aby przyciągać uwagę i skutecznie zamieniać odwiedzających w klientów.',
				},

				corporate: {
					title: 'Strony firmowe',
					desc: 'Nowoczesne i skalowalne strony z przejrzystą strukturą i silną obecnością online.',
				},

				ecommerce: {
					title: 'E-commerce',
					desc: 'Sklepy internetowe z wygodnym procesem zakupowym, płatnościami i integracjami.',
				},

				webapps: {
					title: 'Aplikacje webowe',
					desc: 'Zaawansowane aplikacje — dashboardy, systemy CRM i platformy SaaS.',
				},

				api: {
					title: 'Integracje API',
					desc: 'Integracje z backendem, systemami autoryzacji oraz sprawnym przepływem danych.',
				},

				perf: {
					title: 'Optymalizacja',
					desc: 'Lepsza wydajność, szybsze ładowanie i płynne działanie aplikacji.',
				},

				ui: {
					title: 'Tworzenie interfejsów UI',
					desc: 'Nowoczesne i responsywne interfejsy odwzorowane z Figma z dbałością o detale.',
				},

				support: {
					title: 'Wsparcie',
					desc: 'Stałe wsparcie, rozwój i aktualizacje projektu.',
				},
			},
			process: {
				label: 'PROCES',
				title: 'Jak pracuję',
				desc: 'Sprawdzone podejście, które pozwala prowadzić projekt sprawnie i przewidywalnie — od pierwszej rozmowy aż po wdrożenie.',

				step1: {
					title: 'Analiza',
					desc: 'Poznaję Twoje cele, potrzeby i grupę docelową. Ustalamy zakres projektu i definiujemy, co oznacza sukces.',
				},

				step2: {
					title: 'Projekt',
					desc: 'Tworzę strukturę, makiety i kierunek wizualny. Każdy element ma być zarówno estetyczny, jak i funkcjonalny.',
				},

				step3: {
					title: 'Development',
					desc: 'Buduję aplikację w oparciu o nowoczesne standardy. Dbam o wydajność, dostępność i skalowalność.',
				},

				step4: {
					title: 'Wdrożenie',
					desc: 'Testy, optymalizacja i uruchomienie projektu. W razie potrzeby zapewniam dalsze wsparcie.',
				},
			},
			skills: {
				title: 'Stack technologiczny',
				subtitle: 'Technologie, których używam do tworzenia szybkich i skalowalnych aplikacji.',
			},
			contact: {
				label: 'KONTAKT',
				title: 'Skontaktuj się',
				desc: 'Masz pomysł na projekt albo chcesz nawiązać współpracę? Napisz — chętnie porozmawiam o szczegółach.',
				formTitle: 'Napisz do mnie',
				name: 'Imię',
				email: 'E-mail',
				subject: 'Temat',
				message: 'Wiadomość',
				namePlaceholder: 'Twoje imię',
				emailPlaceholder: 'twoj@email.com',
				subjectPlaceholder: 'Zapytanie o projekt',
				msgPlaceholder: 'Opisz krótko swój projekt...',
				send: 'Wyślij wiadomość',
				sending: 'Wysyłanie…',
				successTitle: 'Wiadomość wysłana!',
				successDesc: 'Dzięki za kontakt — odezwę się wkrótce.',
			},
			footer: {
				startOver: 'Na górę',
				copy: '© 2026 Pavel. Wszelkie prawa zastrzeżone.',
			},
		},
	},

	ru: {
		translation: {
			nav: {
				home: 'Главная',
				about: 'Обо мне',
				projects: 'Проекты',
				services: 'Услуги',
				skills: 'Навыки',
				contact: 'Контакты',
			},
			header: {
				downloadCV: 'Скачать CV',
				cv: 'CV',
			},
			hero: {
				greeting: 'Привет, меня зовут ',
				name: 'Павел',
				phrase1: 'Я frontend-разработчик',
				phrase2: 'Я делаю быстрые и удобные веб-приложения',
				phrase3: 'Я создаю веб-продукты, которые работают на ваш бизнес.',
				description: 'Создаю современные, адаптивные веб-приложения и лендинги.',
				viewProjects: 'Проекты',
				contactMe: 'Контакт',
				scrollDown: 'Листайте вниз',
			},
			about: {
				title: 'Обо мне',
				p1: 'Я Павел — frontend-разработчик, создающий современные, чистые и удобные интерфейсы. Основной стек — React и современная JavaScript-экосистема.',
				p2: 'Превращаю сложные задачи в простые и интуитивные пользовательские интерфейсы, уделяя внимание производительности, доступности и плавности взаимодействия.',
				p3: 'Реализовал несколько проектов — от лендингов до интерактивных веб-приложений — с фокусом на UX, адаптивность и внимание к деталям.',
				p4: 'Сейчас углубляю знания в TypeScript и Next.js, а также развиваюсь в направлении full-stack разработки с Node.js.',
				p5: 'Вне работы слежу за трендами UI/UX, экспериментирую с анимациями и микро-взаимодействиями и постоянно развиваю навыки через практические проекты.',
				stats: {
					role: 'Веб-разработчик',
					roleDesc: 'Специализация: React и современный UI',
					projectsDesc: 'Реализованные проекты',
					stack: 'Современный стек',
					stackDesc: 'React, TypeScript, Next.js',
					perf: 'Оптимизация',
					perfDesc: 'Быстрые, адаптивные и оптимизированные интерфейсы',
				},
			},
			projects: {
				label: 'ПОРТФОЛИО',
				title: 'Избранные проекты',
				desc: 'Несколько последних проектов, которые демонстрируют мои навыки в веб-разработке',
				all: 'Все',
				preview: 'Превью',
				liveDemo: 'Демо',
				items: {
					xdetalz: {
						desc: 'Лендинг для детейлинга с услугами, галереей и формой заявки. Тёмный дизайн с акцентом на конверсию.',
					},
					formafit: {
						desc: 'Сайт фитнес-клуба с программами тренировок, профилями тренеров, отзывами клиентов и тарифами.',
					},
					swiftrate: {
						desc: 'Конвертер валют в реальном времени с поддержкой 160+ валют, актуальными курсами и быстрым пересчётом.',
					},
					nexttodo: {
						descPre:
							'Полнофункциональный менеджер задач с разделением на активные и выполненные, дедлайнами, Pomodoro-таймером и авторизацией. Разработан на React и Fastify в сотрудничестве с ',
					},
					checkycards: {
						desc: 'Тренажёр по веб-разработке в формате карточек: вопросы и ответы, подсветка кода, тёмная и светлая тема, управление контентом с авторизацией.',
					},
				},
			},
			services: {
				label: 'УСЛУГИ',
				title: 'Что я делаю',
				desc: 'Помогаю бизнесу запускать и развивать своё онлайн-присутствие.',
				landing: {
					title: 'Лендинги',
					desc: 'Лендинги с акцентом на конверсию, которые превращают посетителей в клиентов.',
				},
				corporate: {
					title: 'Корпоративные сайты',
					desc: 'Масштабируемые сайты с понятной структурой и сильным онлайн-присутствием.',
				},
				ecommerce: {
					title: 'Интернет-магазины',
					desc: 'Онлайн-магазины с удобным и понятным пользовательским опытом',
				},
				webapps: {
					title: 'Веб-приложения',
					desc: 'Сложные веб-приложения: дашборды, CRM-системы и SaaS-платформы.',
				},
				api: {
					title: 'Интеграция API',
					desc: 'Бесшовная интеграция с бэкенд-сервисами, системами авторизации и потоками данных.',
				},
				perf: {
					title: 'Оптимизация производительности',
					desc: 'Ускорение загрузки, улучшение SEO и более плавный пользовательский опыт.',
				},
				ui: {
					title: 'UI-разработка',
					desc: 'Чистые и адаптивные интерфейсы по макетам из Figma с вниманием к деталям.',
				},
				support: {
					title: 'Поддержка',
					desc: 'Регулярные обновления, улучшения и поддержка ваших проектов.',
				},
			},
			process: {
				label: 'ПРОЦЕСС',
				title: 'Как я работаю',
				desc: 'Структурированный подход, который помогает держать проект под контролем — от первого брифа до финального запуска.',
				step1: {
					title: 'Анализ',
					desc: 'Погружаюсь в ваши цели, аудиторию и задачи. Согласовываем объём работ и определяем направление.',
				},
				step2: {
					title: 'Дизайн',
					desc: 'Макеты и визуальное направление. Каждый элемент продуман и сочетает эстетику с функциональностью.',
				},
				step3: {
					title: 'Разработка',
					desc: 'Чистый и современный код на React с соблюдением лучших практик. Быстро, доступно и удобно в поддержке.',
				},
				step4: {
					title: 'Запуск',
					desc: 'Тщательное тестирование, оптимизация и запуск проекта. Поддержка и сопровождение после релиза.',
				},
			},
			skills: {
				title: 'Технологии, с которыми я работаю',
				subtitle: 'Технологии, которые я использую для разработки быстрых и масштабируемых веб-приложений.',
			},
			contact: {
				label: 'КОНТАКТЫ',
				title: 'Связаться со мной',
				desc: 'Есть идея или проект? Давайте обсудим.',
				formTitle: 'Напишите мне',
				name: 'Имя',
				email: 'E-mail',
				subject: 'Тема',
				message: 'Сообщение',
				namePlaceholder: 'Ваше имя',
				emailPlaceholder: 'your@email.com',
				subjectPlaceholder: 'Обсуждение проекта',
				msgPlaceholder: 'Расскажите о вашем проекте...',
				send: 'Отправить сообщение',
				sending: 'Отправка…',
				successTitle: 'Сообщение отправлено!',
				successDesc: 'Спасибо за сообщение — скоро свяжусь с вами.',
			},
			footer: {
				startOver: 'Наверх',
				copy: '© 2026 Pavel. Все права защищены.',
			},
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: detectLanguage(),
	fallbackLng: 'en',
	interpolation: { escapeValue: false },
});

export { changeLanguage };
export default i18n;
