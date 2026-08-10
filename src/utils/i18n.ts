import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'app_language';

function getSavedLanguage(): string | null {
	return localStorage.getItem(STORAGE_KEY);
}

function saveLanguage(lang: string): void {
	localStorage.setItem(STORAGE_KEY, lang);
}

const POST_USSR = ['uk', 'ru', 'be', 'kk', 'ky', 'uz', 'tg', 'az', 'hy', 'ka', 'lv', 'lt', 'et', 'tk', 'mo'];

function detectLanguage(): string {
	const saved = getSavedLanguage();
	if (saved) return saved;

	const lang = (navigator.language || navigator.languages?.[0] || 'en').toLowerCase().split('-')[0];

	if (POST_USSR.includes(lang)) return 'ru';
	if (lang === 'pl') return 'pl';
	return 'en';
}

function changeLanguage(lang: string): void {
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
				phrase1: "I'm a frontend / full-stack developer",
				phrase2: 'I ship product flows — auth, data, and checkout',
				phrase3: 'I build web products that work for your business.',
				description:
					'React · TypeScript · Next.js — storefronts, apps, and landing pages. Open to full-time roles and freelance projects.',
				viewProjects: 'View Projects',
				contactMe: 'Contact Me',
				scrollDown: 'Scroll down',
			},
			about: {
				title: 'About Me',
				p1: "I'm Pavel — a frontend / full-stack developer based in Katowice. I came to web development from industrial operations, which taught me to think in systems, communicate across teams, and care about what actually gets shipped.",
				p2: "Recent work includes DROPX — a Next.js sneaker storefront with real Postgres inventory, orders, and checkout — and FlowTodo, a cross-platform Expo + Supabase app with auth and RLS. Alongside that: conversion-focused landing pages, a flashcard SPA on Supabase, and other production-style builds. React, TypeScript, and Next.js are my daily tools.",
				p3: "I'm open to engineering roles and freelance collaborations. If you need someone who writes clean code, takes ownership, and ships — let's talk.",
				facts: {
					projects: '12 Projects Shipped',
					projectsSub: 'storefront · apps · landing pages',
					availability: 'Available for Hire',
					availabilitySub: 'Katowice / Remote · Full-time or Freelance',
					stack: 'React · TypeScript · Next.js',
					stackSub: 'Web + mobile · Prisma · Supabase · Expo',
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
					dropx: {
						desc: 'Full sneaker storefront with catalog filters, live search, Auth.js accounts, cart/wishlist, and checkout — Next.js, Prisma, and PostgreSQL, deployed on Vercel.',
					},
					glossandmuse: {
						desc: 'Beauty salon landing page in Warsaw city center with online reservations and specialist selection.',
					},
					emile: {
						desc: 'Elegant Parisian restaurant landing page presenting refined French cuisine in an premium dining atmosphere.',
					},
					xdetalz: {
						desc: 'Premium automotive detailing landing page with service showcase, gallery, and contact form. Dark gold design built for conversion.',
					},
					formafit: {
						desc: 'Fitness gym web app with user login/registration, membership passes, private and group class bookings — plus training programs, trainer profiles, and client reviews.',
					},
					swiftrate: {
						desc: 'Currency converter using live ECB rates via Frankfurter API — 31 currencies, real-time rate preview, 10-conversion session history, and popular pair shortcuts.',
					},
					nexttodo: {
						descPre:
							'Full-stack task manager with Pomodoro timer, deadline scheduling with visual badges, and JWT-protected user accounts — React SPA + Fastify REST API + SQLite, built in collaboration with ',
					},
					flowtodo: {
						descPre:
							'Cross-platform todo app (iOS, Android, web) — Expo + React Native, Supabase Auth, tasks/categories/tags with RLS, Pomodoro, and Ocean Flow UI. Port of NextTodo, built in collaboration with ',
					},
					streamix: {
						desc: 'Netflix-style streaming catalog powered by the TMDB API — full-viewport rotating hero, horizontal genre rows, live trailer modal, favorites with localStorage, and debounced search.',
					},
					checkycards: {
						desc: '~600 web dev flashcards across React, JS, TypeScript, CSS, Git and more — per-user decks with completion tracking, syntax-highlighted answers, full-text search, and Supabase backend.',
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
				subtitle: 'React, TypeScript, Next.js — plus the data and auth layer behind real product flows.',
			},
			contact: {
				label: 'CONTACT',
				title: 'Get In Touch',
				desc: "Hiring, freelance, or a project idea? Let's talk.",
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
				phoneLabel: 'Phone',
				telegramLabel: 'Telegram',
				acceptPre: 'I accept the',
				acceptPolicy: 'Privacy Policy',
			},
			footer: {
				startOver: 'Start over',
				copy: '© 2026 pavelcode.dev',
				rights: 'All rights reserved.',
				privacy: 'Privacy Policy',
				techStack: 'Page built with:',
			},
			privacy: {
				title: 'Privacy Policy',
				updated: 'Last updated: April 2026',
				intro:
					'This Privacy Policy explains how I collect and use personal information when you use the contact form on this website.',

				collectTitle: 'Information I collect',
				collect:
					'When you submit the contact form, I collect your name, email address, and the content of your message.',

				useTitle: 'How I use your information',
				use: 'Your personal data is used solely to respond to your inquiry. I do not sell or share your personal data with third parties.',

				storageTitle: 'Data processing and storage',
				storage:
					'Form submissions are processed and stored by Formspree in accordance with their Privacy Policy. I do not maintain a separate database of your personal data.',

				rightsTitle: 'Your rights',
				rights:
					'You may request the deletion of your personal data by contacting me. I will make reasonable efforts to delete your data from my records. Please note that data submitted through the contact form is processed by Formspree and is subject to their data retention policies. I process your data based on your consent.',

				contact: 'For any privacy-related questions, contact me at: pavelkovalchuk0510@gmail.com.',
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
				phrase1: 'Frontend / Full-Stack Developer',
				phrase2: 'Dowożę pełne flow — auth, dane i checkout',
				phrase3: 'Tworzę produkty webowe, które pracują na Twój biznes.',
				description:
					'React · TypeScript · Next.js — sklepy, aplikacje i landing page’e. Otwarty na etat i projekty freelance.',
				viewProjects: 'Portfolio',
				contactMe: 'Kontakt',
				scrollDown: 'Przewiń niżej',
			},
			about: {
				title: 'O mnie',

				p1: 'Jestem Pavel — frontend / full-stack developerem z Katowic. Do web developmentu trafiłem z branży przemysłowej, co nauczyło mnie myślenia systemowego, komunikacji między zespołami i skupienia na tym, co realnie zostaje dowiezione.',

				p2: 'Ostatnio: DROPX — sklep sneakerowy na Next.js z prawdziwym Postgres (magazyn, zamówienia, checkout) oraz FlowTodo — cross-platformowa aplikacja Expo + Supabase z auth i RLS. Obok tego landing page’e pod konwersję, SPA z fiszkami na Supabase i inne projekty produkcyjne. Na co dzień: React, TypeScript i Next.js.',

				p3: 'Jestem otwarty na role inżynierskie i współpracę freelance. Jeśli szukasz osoby, która pisze czysty kod, bierze ownership i dowozi — chętnie porozmawiam.',

				facts: {
					projects: '12 projektów',
					projectsSub: "sklep · aplikacje · landing page'e",
					availability: 'Otwarty na współpracę',
					availabilitySub: 'Katowice / Zdalnie · Etat lub Freelance',
					stack: 'React · TypeScript · Next.js',
					stackSub: 'Web + mobile · Prisma · Supabase · Expo',
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
					dropx: {
						desc: 'Pełny sklep z sneakerami — filtry katalogu, live search, konta Auth.js, koszyk/wishlist i checkout. Next.js, Prisma i PostgreSQL, wdrożony na Vercel.',
					},
					glossandmuse: {
						desc: 'Landing page salonu beauty w centrum Warszawy z rezerwacją online i wyborem specjalisty.',
					},
					emile: {
						desc: 'Elegancka strona paryskiej restauracji prezentująca wykwintną kuchnię francuską w premium klimacie.',
					},
					xdetalz: {
						desc: 'Landing page studia auto detailingu — prezentacja usług, galeria i formularz kontaktowy. Ciemna stylistyka ze złotymi akcentami.',
					},

					formafit: {
						desc: 'Aplikacja dla siłowni z logowaniem i rejestracją, karnetami oraz rezerwacjami zajęć prywatnych i grupowych — a także programami treningów, profilami trenerów i opiniami klientów.',
					},

					swiftrate: {
						desc: 'Konwerter walut oparty na kursach EBC pobieranych przez Frankfurter API — 31 walut, podgląd kursu w czasie rzeczywistym, historia 10 konwersji i skróty popularnych par.',
					},

					nexttodo: {
						descPre:
							'Manager zadań z timerem Pomodoro, harmonogramem terminów z wizualnymi oznaczeniami i kontami JWT — React SPA + Fastify REST API + SQLite, realizowany we współpracy z ',
					},

					flowtodo: {
						descPre:
							'Aplikacja todo na iOS, Androida i web — Expo + React Native, Supabase Auth, zadania/kategorie/tagi z RLS, Pomodoro i UI Ocean Flow. Port NextTodo, realizowany we współpracy z ',
					},

					streamix: {
						desc: 'Katalog streamingowy w stylu Netfliksa oparty na API TMDB — pełnoekranowy hero z automatyczną rotacją, poziome rzędy kategorii, modal z odtwarzanym na żywo trailerem, ulubione zapisywane w localStorage oraz wyszukiwanie z debounce’em.',
					},

					checkycards: {
						desc: 'Ponad 600 fiszek z web developmentu — React, JS, TypeScript, CSS, Git i więcej — z osobistymi talami, śledzeniem postępów, podświetlaniem kodu i wyszukiwaniem pełnotekstowym. Backend: Supabase.',
					},
				},
			},
			services: {
				label: 'USŁUGI',
				title: 'Jak mogę pomóc',
				desc: 'Pomagam firmom budować i rozwijać ich obecność w internecie.',

				landing: {
					title: "Landing page'e",
					desc: 'Strony, które jasno przekazują ofertę i zachęcają odwiedzających do kontaktu.',
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
				subtitle: 'React, TypeScript, Next.js — oraz warstwa danych i auth za realnymi product flow.',
			},
			contact: {
				label: 'KONTAKT',
				title: 'Skontaktuj się',
				desc: 'Rekrutacja, freelance albo pomysł na projekt? Napisz — chętnie porozmawiam.',
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
				phoneLabel: 'Telefon',
				telegramLabel: 'Telegram',
				acceptPre: 'Akceptuję',
				acceptPolicy: 'Politykę prywatności',
			},
			footer: {
				startOver: 'Na górę',
				copy: '© 2026 pavelcode.dev',
				rights: 'Wszelkie prawa zastrzeżone.',
				privacy: 'Polityka prywatności',
				techStack: 'Strona stworzona przy użyciu:',
			},
			privacy: {
				title: 'Polityka prywatności',
				updated: 'Ostatnia aktualizacja: kwiecień 2026',

				intro:
					'Niniejsza Polityka prywatności wyjaśnia, w jaki sposób zbieram i wykorzystuję dane osobowe przekazywane za pośrednictwem formularza kontaktowego na tej stronie.',

				collectTitle: 'Jakie dane zbieram',
				collect:
					'Podczas korzystania z formularza kontaktowego zbieram Twoje imię, adres e-mail oraz treść wiadomości.',

				useTitle: 'W jaki sposób wykorzystuję dane',
				use: 'Twoje dane osobowe są wykorzystywane wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie. Nie sprzedaję ani nie udostępniam Twoich danych osobowych osobom trzecim.',

				storageTitle: 'Przetwarzanie i przechowywanie danych',
				storage:
					'Wiadomości są przetwarzane i przechowywane przez serwis Formspree zgodnie z ich Polityką prywatności. Nie prowadzę własnej bazy danych Twoich danych osobowych.',

				rightsTitle: 'Twoje prawa',
				rights:
					'Możesz w każdej chwili zażądać usunięcia swoich danych, kontaktując się ze mną. Dołożę wszelkich starań, aby usunąć Twoje dane z moich zasobów. Należy jednak pamiętać, że dane przesyłane za pośrednictwem formularza są przetwarzane przez Formspree i podlegają ich zasadom przechowywania danych. Przetwarzam Twoje dane na podstawie Twojej zgody.',

				contact: 'W sprawach dotyczących prywatności skontaktuj się ze mną pod adresem: pavelkovalchuk0510@gmail.com.',
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
				phrase1: 'Я frontend / full-stack разработчик',
				phrase2: 'Доставляю продуктовые флоу — auth, данные и checkout',
				phrase3: 'Создаю веб-продукты, которые работают на ваш бизнес.',
				description:
					'React · TypeScript · Next.js — магазины, приложения и лендинги. Открыт к full-time и freelance.',
				viewProjects: 'Проекты',
				contactMe: 'Контакт',
				scrollDown: 'Листайте вниз',
			},
			about: {
				title: 'Обо мне',
				p1: 'Я Павел — frontend / full-stack разработчик из Катовице. В веб я пришёл из промышленной сферы: системное мышление, кросс-командная коммуникация и фокус на том, что реально уходит в прод.',
				p2: 'Недавние проекты: DROPX — sneaker-storefront на Next.js с реальным Postgres (склад, заказы, checkout) и FlowTodo — кроссплатформенное приложение на Expo + Supabase с auth и RLS. Плюс лендинги под конверсию, SPA с карточками на Supabase и другие production-style сборки. В ежедневной работе — React, TypeScript и Next.js.',
				p3: 'Открыт к инженерным ролям и freelance-сотрудничеству. Если нужен разработчик, который пишет чистый код, берёт ownership и доводит до релиза — давайте поговорим.',
				facts: {
					projects: '12 проектов',
					projectsSub: 'магазин · приложения · лендинги',
					availability: 'Открыт к работе',
					availabilitySub: 'Катовице / Удалённо · Full-time или Freelance',
					stack: 'React · TypeScript · Next.js',
					stackSub: 'Web + mobile · Prisma · Supabase · Expo',
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
					dropx: {
						desc: 'Полноценный магазин кроссовок с фильтрами каталога, live-поиском, аккаунтами Auth.js, корзиной/wishlist и checkout — Next.js, Prisma и PostgreSQL, деплой на Vercel.',
					},
					glossandmuse: {
						desc: 'Лендинг салона красоты в центре Варшавы с онлайн-записью и выбором специалиста.',
					},
					emile: {
						desc: 'Элегантный лендинг парижского ресторана французской кухни в премиальной атмосфере.',
					},
					xdetalz: {
						desc: 'Лендинг для студии автодетейлинга — услуги, галерея и форма заявки. Тёмный стиль с золотыми акцентами.',
					},
					formafit: {
						desc: 'Приложение для фитнес-клуба с регистрацией и входом в аккаунт, карнетами и записью на индивидуальные и групповые занятия — а также программами тренировок, профилями тренеров и отзывами.',
					},
					swiftrate: {
						desc: 'Конвертер валют на официальных курсах ЕЦБ через Frankfurter API — 31 валюта, подгляд курса в реальном времени, история 10 конвертаций и быстрые ссылки на популярные пары.',
					},
					nexttodo: {
						descPre:
							'Менеджер задач с Pomodoro-таймером, планированием дедлайнов с визуальными метками и JWT-авторизацией — React SPA + Fastify REST API + SQLite, разработан в сотрудничестве с ',
					},
					flowtodo: {
						descPre:
							'Кроссплатформенный todo (iOS, Android, web) — Expo + React Native, Supabase Auth, задачи/категории/теги с RLS, Pomodoro и UI Ocean Flow. Порт NextTodo, разработан в сотрудничестве с ',
					},
					streamix: {
						desc: 'Каталог фильмов и сериалов в стиле Netflix на базе TMDB API — полноэкранный hero-блок с автоматической сменой контента, горизонтальные ряды по жанрам, модальное окно с трейлером в реальном времени, избранное с сохранением в localStorage и поиск с debounce.',
					},
					checkycards: {
						desc: 'Более 600 карточек по веб-разработке — React, JS, TypeScript, CSS, Git и другое — с личными колодами, отслеживанием прогресса, подсветкой кода и полнотекстовым поиском. Бэкенд: Supabase.',
					},
				},
			},
			services: {
				label: 'УСЛУГИ',
				title: 'Что я делаю',
				desc: 'Помогаю бизнесу запускать и развивать своё онлайн-присутствие.',
				landing: {
					title: 'Лендинги',
					desc: 'Лендинги, которые чётко доносят суть ваших услуг и побуждают посетителей связаться с вами.',
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
				subtitle: 'React, TypeScript, Next.js — плюс слой данных и auth за реальными product flow.',
			},
			contact: {
				label: 'КОНТАКТЫ',
				title: 'Связаться со мной',
				desc: 'Найм, freelance или идея проекта? Давайте поговорим.',
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
				phoneLabel: 'Телефон',
				telegramLabel: 'Telegram',
				acceptPre: 'Я принимаю',
				acceptPolicy: 'Политику конфиденциальности',
			},
			footer: {
				startOver: 'Наверх',
				copy: '© 2026 pavelcode.dev',
				rights: 'Все права защищены.',
				privacy: 'Политика конфиденциальности',
				techStack: 'Сделано с помощью:',
			},
			privacy: {
				title: 'Политика конфиденциальности',
				updated: 'Последнее обновление: апрель 2026',

				intro:
					'Настоящая Политика конфиденциальности объясняет, как я собираю и использую персональные данные, передаваемые через контактную форму на этом сайте.',

				collectTitle: 'Какие данные я собираю',
				collect:
					'При использовании контактной формы я получаю ваше имя, адрес электронной почты и содержание сообщения.',

				useTitle: 'Как я использую данные',
				use: 'Ваши персональные данные используются исключительно для ответа на ваш запрос. Я не продаю и не передаю ваши данные третьим лицам.',

				storageTitle: 'Обработка и хранение данных',
				storage:
					'Сообщения обрабатываются и хранятся сервисом Formspree в соответствии с их политикой конфиденциальности. Я не веду собственной базы данных с вашими персональными данными.',

				rightsTitle: 'Ваши права',
				rights:
					'Вы можете запросить удаление своих данных, связавшись со мной. Я предприму разумные меры для удаления ваших данных из своих записей. Обратите внимание, что данные, отправленные через форму, обрабатываются сервисом Formspree и регулируются их политикой хранения данных. Обработка ваших данных осуществляется на основании вашего согласия.',

				contact: 'По вопросам конфиденциальности вы можете связаться со мной по адресу: pavelkovalchuk0510@gmail.com.',
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
