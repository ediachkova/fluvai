// Translations for Fluvai — RU / EN / ES
window.FLUVAI_I18N = {
  ru: {
    nav: { about: "О нас", projects: "Проекты", cases: "Кейсы", how: "Как мы работаем", pricing: "Тарифы", why: "Почему Fluvai", contact: "Связаться" },
    cta: { primary: "Заказать агента", secondary: "Посмотреть сценарии", contact: "Написать нам" },
    hero: {
      eyebrow: "Агентная автоматизация для любого масштаба",
      title: "ИИ-агенты\nпод ключ",
      sub: "Проектируем и разворачиваем персональных AI-агентов для частных лиц, предпринимателей и команд. Без кода, без интеграций, без головной боли.",
      stat1: ["7 дней", "от идеи до запуска"],
      stat2: ["24/7", "агенты работают всегда"],
      stat3: ["3 языка", "RU · EN · ES"]
    },
    about: {
      eyebrow: "О Fluvai",
      title: "Мы превращаем рутину\nв автономных агентов.",
      body: "Fluvai — студия, которая собирает AI-агентов под конкретные задачи. Анализируем ваши процессы, обучаем агента на ваших данных и подключаем к нужным сервисам — почте, мессенджерам, CRM, календарю.",
      pillars: [
        { k: "01", t: "Под задачу", d: "Не универсальный чат-бот, а агент с конкретной ролью и метриками." },
        { k: "02", t: "На ваших данных", d: "Подключаем документы, базы и API — агент работает в вашем контексте." },
        { k: "03", t: "С контролем", d: "Логи, права доступа, человеческое подтверждение для важных действий." }
      ]
    },
    projects: {
      eyebrow: "Наши проекты",
      title: "Что мы уже сделали",
      sub: "Несколько живых продуктов, которые мы спроектировали и запустили.",
      items: [
        { tag: "Образование", t: "Verbolandia", d: "Бот для изучения глаголов на испанском.", meta: "Telegram-бот" },
        { tag: "Быт", t: "Mercadona-планировщик", d: "Приложение, которое подбирает продуктовую корзину и рецепты на неделю в Mercadona по КБЖУ семьи.", meta: "iOS / Web" },
        { tag: "DGT", t: "Señales DGT", d: "Приложение для изучения дорожных знаков Испании с учётом требований DGT.", meta: "iOS / Web" }
      ]
    },
    cases: {
      eyebrow: "Сценарии",
      title: "Что мы уже автоматизировали",
      items: [
        { tag: "Личный", t: "Личный ассистент", d: "Разбирает почту, готовит ответы, ведёт календарь и напоминает о делах." },
        { tag: "Продажи", t: "Менеджер первой линии", d: "Отвечает в WhatsApp и Telegram, квалифицирует лидов, передаёт в CRM." },
        { tag: "Контент", t: "Редакция-агент", d: "Превращает заметки в посты, статьи и рассылки в едином тоне голоса." },
        { tag: "Поддержка", t: "Саппорт-агент", d: "Отвечает по базе знаний, открывает тикеты, эскалирует сложные случаи." },
        { tag: "Финансы", t: "Финансовый помощник", d: "Собирает чеки, размечает траты, формирует отчёты по запросу." },
        { tag: "Ресёрч", t: "Аналитик-агент", d: "Ищет источники, делает сводки и сравнения, отдаёт результат в нужном формате." }
      ]
    },
    how: {
      eyebrow: "Как это работает",
      title: "Четыре шага до рабочего агента",
      steps: [
        { n: "01", t: "Брифинг", d: "30-минутный звонок: задача, окружение, метрики успеха." },
        { n: "02", t: "Прототип", d: "За 3–5 дней собираем рабочий MVP агента и показываем вживую." },
        { n: "03", t: "Подключение", d: "Интегрируем с вашими сервисами, настраиваем права и логи." },
        { n: "04", t: "Сопровождение", d: "Дообучаем, расширяем сценарии, следим за качеством." }
      ]
    },
    pricing: {
      eyebrow: "Тарифы",
      title: "Прозрачная стоимость",
      sub: "Платите за результат, а не за токены. Все тарифы включают разработку, развёртывание и месяц поддержки.",
      plans: [
        {
          name: "Консультация",
          price: "€50",
          unit: "разово",
          for: "Разберём задачу и предложим решение",
          features: ["30-минутный звонок", "Аудит процесса", "Карта возможных агентов", "Оценка сроков и стоимости", "Резюме письмом"]
        },
        {
          name: "1 агент",
          price: "€150",
          unit: "разово",
          badge: "Популярный",
          for: "Один агент под одну задачу",
          features: ["1 агент", "До 2 интеграций", "Базовая аналитика", "Email-поддержка", "30 дней сопровождения"]
        },
        {
          name: "Под ключ",
          price: "по запросу",
          unit: "",
          for: "Сложные процессы и SLA",
          features: ["Безлимит агентов", "Любые интеграции", "Роли и права", "Выделенный менеджер", "SLA 99.9%", "On-prem по запросу"]
        }
      ]
    },
    why: {
      eyebrow: "Почему Fluvai",
      title: "Не очередной AI-стартап",
      points: [
        { t: "Под ключ", d: "Берём задачу целиком: от формулировки до поддержки." },
        { t: "Без вендор-лока", d: "Используем модели, которые подходят задаче — OpenAI, Anthropic, локальные." },
        { t: "Прозрачно", d: "Видите каждый шаг агента — логи, стоимость, качество." },
        { t: "По-человечески", d: "Объясняем без жаргона, отвечаем в тот же день." }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы",
      items: [
        { q: "Нужно ли мне разбираться в AI?", a: "Нет. Мы говорим на языке вашей задачи и берём всю техническую часть на себя." },
        { q: "Где живут мои данные?", a: "По умолчанию — в EU. По запросу разворачиваем on-prem или в вашем облаке." },
        { q: "Что, если агент ошибётся?", a: "Для важных действий настраиваем подтверждение человеком. Все шаги логируются." },
        { q: "Можно ли поменять модель?", a: "Да. Архитектура позволяет переключать LLM без переписывания агента." },
        { q: "Сколько занимает запуск?", a: "От 7 до 21 дня в зависимости от сложности и числа интеграций." }
      ]
    },
    contact: {
      eyebrow: "Связаться",
      title: "Расскажите задачу —\nответим в течение дня.",
      sub: "Опишите, что хотелось бы автоматизировать. Если идея ещё сырая — тоже пишите, поможем сформулировать.",
      email: "hello@fluvai.net",
      cta: "Написать на email"
    },
    footer: { tagline: "AI-агенты под ключ", rights: "Все права защищены" }
  },
  en: {
    nav: { about: "About", projects: "Projects", cases: "Use cases", how: "How it works", pricing: "Pricing", why: "Why Fluvai", contact: "Contact" },
    cta: { primary: "Order an agent", secondary: "See use cases", contact: "Get in touch" },
    hero: {
      eyebrow: "Agentic automation at any scale",
      title: "Turnkey\nAI agents",
      sub: "We design and ship personal AI agents for individuals, founders and small teams. No code, no integrations, no headache.",
      stat1: ["7 days", "idea to live agent"],
      stat2: ["24/7", "always-on by default"],
      stat3: ["3 languages", "EN · RU · ES"]
    },
    about: {
      eyebrow: "About Fluvai",
      title: "We turn routine\ninto autonomous agents.",
      body: "Fluvai is a studio that builds AI agents for specific tasks. We map your process, train the agent on your data and connect it to the tools you already use — email, messengers, CRM, calendar.",
      pillars: [
        { k: "01", t: "Task-shaped", d: "Not a generic chatbot — an agent with a clear role and metrics." },
        { k: "02", t: "Your context", d: "Connected to your docs, databases and APIs from day one." },
        { k: "03", t: "Under control", d: "Full logs, granular permissions, human approval for sensitive steps." }
      ]
    },
    projects: {
      eyebrow: "Our projects",
      title: "What we've already shipped",
      sub: "A few live products we designed and launched.",
      items: [
        { tag: "Education", t: "Verbolandia", d: "A bot for learning Spanish verbs.", meta: "Telegram bot" },
        { tag: "Everyday", t: "Mercadona planner", d: "An app that builds a weekly grocery basket and recipes at Mercadona based on your family's macros.", meta: "iOS / Web" },
        { tag: "DGT", t: "Señales DGT", d: "An app for learning Spanish road signs aligned with DGT requirements.", meta: "iOS / Web" }
      ]
    },
    cases: {
      eyebrow: "Use cases",
      title: "What we've automated",
      items: [
        { tag: "Personal", t: "Personal assistant", d: "Triages email, drafts replies, runs your calendar, nudges you on what matters." },
        { tag: "Sales", t: "First-line SDR", d: "Replies on WhatsApp and Telegram, qualifies leads, hands them to CRM." },
        { tag: "Content", t: "Editorial agent", d: "Turns rough notes into posts, articles and newsletters in one voice." },
        { tag: "Support", t: "Support agent", d: "Answers from your knowledge base, opens tickets, escalates the hard ones." },
        { tag: "Finance", t: "Money helper", d: "Collects receipts, tags spend, builds reports on demand." },
        { tag: "Research", t: "Research agent", d: "Finds sources, summarises and compares — delivers in your format." }
      ]
    },
    how: {
      eyebrow: "How it works",
      title: "Four steps to a working agent",
      steps: [
        { n: "01", t: "Brief", d: "A 30-minute call: the task, the tools, the metric." },
        { n: "02", t: "Prototype", d: "In 3–5 days we ship a working MVP and show it live." },
        { n: "03", t: "Connect", d: "We hook it into your services, set up permissions and logging." },
        { n: "04", t: "Operate", d: "We keep training it, expand scenarios and watch quality." }
      ]
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing",
      sub: "Pay for outcomes, not tokens. Every plan includes design, deployment and one month of support.",
      plans: [
        {
          name: "Consultation",
          price: "€50",
          unit: "one-time",
          for: "We'll review the task and propose a solution",
          features: ["30-minute call", "Process audit", "Map of possible agents", "Timeline & cost estimate", "Written summary"]
        },
        {
          name: "1 agent",
          price: "€150",
          unit: "one-time",
          badge: "Popular",
          for: "One agent for one task",
          features: ["1 agent", "Up to 2 integrations", "Basic analytics", "Email support", "30 days of care"]
        },
        {
          name: "Turnkey",
          price: "on request",
          unit: "",
          for: "Complex processes & SLA",
          features: ["Unlimited agents", "Any integrations", "Roles & permissions", "Dedicated PM", "99.9% SLA", "On-prem on request"]
        }
      ]
    },
    why: {
      eyebrow: "Why Fluvai",
      title: "Not just another AI startup",
      points: [
        { t: "Turnkey", d: "We own the whole thing — from problem framing to ongoing care." },
        { t: "No vendor lock", d: "We pick the right model per task — OpenAI, Anthropic, local." },
        { t: "Transparent", d: "You see every step the agent takes — logs, cost, quality." },
        { t: "Human", d: "No jargon, same-day replies, real people on the other end." }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked",
      items: [
        { q: "Do I need to know AI?", a: "No. We speak the language of your task and own the technical side." },
        { q: "Where does my data live?", a: "EU by default. On request we deploy on-prem or in your own cloud." },
        { q: "What if the agent makes a mistake?", a: "Sensitive actions require human approval. Every step is logged." },
        { q: "Can I switch the model later?", a: "Yes. The architecture lets us swap LLMs without rewriting the agent." },
        { q: "How long does launch take?", a: "Between 7 and 21 days depending on complexity and integrations." }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us the task —\nwe'll reply within a day.",
      sub: "Describe what you'd like to automate. If the idea is still rough, write anyway — we'll help shape it.",
      email: "hello@fluvai.net",
      cta: "Email us"
    },
    footer: { tagline: "Turnkey AI agents", rights: "All rights reserved" }
  },
  es: {
    nav: { about: "Sobre", projects: "Proyectos", cases: "Casos", how: "Cómo funciona", pricing: "Precios", why: "Por qué Fluvai", contact: "Contacto" },
    cta: { primary: "Pedir un agente", secondary: "Ver casos", contact: "Escríbenos" },
    hero: {
      eyebrow: "Automatización agéntica a cualquier escala",
      title: "Agentes de IA\nllave en mano",
      sub: "Diseñamos y desplegamos agentes de IA personales para particulares, emprendedores y equipos. Sin código, sin integraciones, sin dolores de cabeza.",
      stat1: ["7 días", "de la idea al lanzamiento"],
      stat2: ["24/7", "siempre activos"],
      stat3: ["3 idiomas", "ES · EN · RU"]
    },
    about: {
      eyebrow: "Sobre Fluvai",
      title: "Convertimos la rutina\nen agentes autónomos.",
      body: "Fluvai es un estudio que construye agentes de IA para tareas concretas. Mapeamos tu proceso, entrenamos al agente con tus datos y lo conectamos a las herramientas que ya usas — email, mensajería, CRM, calendario.",
      pillars: [
        { k: "01", t: "A medida", d: "No un chatbot genérico — un agente con un rol y métricas claras." },
        { k: "02", t: "Tu contexto", d: "Conectado a tus documentos, bases y APIs desde el día uno." },
        { k: "03", t: "Bajo control", d: "Logs completos, permisos granulares, aprobación humana en pasos sensibles." }
      ]
    },
    projects: {
      eyebrow: "Nuestros proyectos",
      title: "Lo que ya hemos lanzado",
      sub: "Algunos productos vivos que hemos diseñado y puesto en marcha.",
      items: [
        { tag: "Educación", t: "Verbolandia", d: "Un bot para aprender verbos en español.", meta: "Bot de Telegram" },
        { tag: "Día a día", t: "Planificador Mercadona", d: "Una app que arma la cesta semanal y recetas en Mercadona según los macros de tu familia.", meta: "iOS / Web" },
        { tag: "DGT", t: "Señales DGT", d: "App para aprender las señales de tráfico de España según los requisitos de la DGT.", meta: "iOS / Web" }
      ]
    },
    cases: {
      eyebrow: "Casos",
      title: "Lo que ya hemos automatizado",
      items: [
        { tag: "Personal", t: "Asistente personal", d: "Filtra el correo, redacta respuestas, gestiona tu calendario y te recuerda lo importante." },
        { tag: "Ventas", t: "SDR de primera línea", d: "Responde en WhatsApp y Telegram, cualifica leads y los pasa al CRM." },
        { tag: "Contenido", t: "Agente editorial", d: "Convierte notas sueltas en posts, artículos y newsletters con una sola voz." },
        { tag: "Soporte", t: "Agente de soporte", d: "Responde desde tu base de conocimiento, abre tickets y escala los casos difíciles." },
        { tag: "Finanzas", t: "Asistente financiero", d: "Recopila tickets, etiqueta gastos y prepara informes a demanda." },
        { tag: "Research", t: "Agente de research", d: "Encuentra fuentes, resume y compara — entrega en el formato que pidas." }
      ]
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Cuatro pasos hasta un agente operativo",
      steps: [
        { n: "01", t: "Briefing", d: "Una llamada de 30 min: la tarea, las herramientas, la métrica." },
        { n: "02", t: "Prototipo", d: "En 3–5 días entregamos un MVP funcional y lo mostramos en vivo." },
        { n: "03", t: "Conexión", d: "Lo integramos con tus servicios, configuramos permisos y logging." },
        { n: "04", t: "Operación", d: "Seguimos entrenándolo, ampliamos escenarios y vigilamos la calidad." }
      ]
    },
    pricing: {
      eyebrow: "Precios",
      title: "Precios transparentes",
      sub: "Pagas por resultados, no por tokens. Todos los planes incluyen diseño, despliegue y un mes de soporte.",
      plans: [
        {
          name: "Consulta",
          price: "€50",
          unit: "pago único",
          for: "Revisamos la tarea y proponemos una solución",
          features: ["Llamada de 30 min", "Auditoría del proceso", "Mapa de agentes posibles", "Estimación de plazos y coste", "Resumen por escrito"]
        },
        {
          name: "1 agente",
          price: "€150",
          unit: "pago único",
          badge: "Popular",
          for: "Un agente para una tarea",
          features: ["1 agente", "Hasta 2 integraciones", "Analítica básica", "Soporte por email", "30 días de cuidado"]
        },
        {
          name: "Llave en mano",
          price: "a consultar",
          unit: "",
          for: "Procesos complejos y SLA",
          features: ["Agentes ilimitados", "Cualquier integración", "Roles y permisos", "PM dedicado", "SLA 99.9%", "On-prem bajo petición"]
        }
      ]
    },
    why: {
      eyebrow: "Por qué Fluvai",
      title: "No es otra startup de IA",
      points: [
        { t: "Llave en mano", d: "Nos hacemos cargo de todo — del planteo al mantenimiento." },
        { t: "Sin vendor lock", d: "Elegimos el modelo adecuado para cada tarea — OpenAI, Anthropic, local." },
        { t: "Transparente", d: "Ves cada paso del agente — logs, coste, calidad." },
        { t: "Humano", d: "Sin jerga, respuestas el mismo día, personas reales al otro lado." }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Necesito saber de IA?", a: "No. Hablamos el idioma de tu tarea y nos encargamos de la parte técnica." },
        { q: "¿Dónde viven mis datos?", a: "En la UE por defecto. Bajo petición desplegamos on-prem o en tu propia nube." },
        { q: "¿Y si el agente se equivoca?", a: "Las acciones sensibles requieren aprobación humana. Todo queda en log." },
        { q: "¿Puedo cambiar el modelo después?", a: "Sí. La arquitectura permite cambiar de LLM sin reescribir el agente." },
        { q: "¿Cuánto tarda el lanzamiento?", a: "Entre 7 y 21 días según la complejidad y el número de integraciones." }
      ]
    },
    contact: {
      eyebrow: "Contacto",
      title: "Cuéntanos la tarea —\nrespondemos en el día.",
      sub: "Describe qué te gustaría automatizar. Si la idea aún es difusa, escribe igual — te ayudamos a darle forma.",
      email: "hello@fluvai.net",
      cta: "Escribir un email"
    },
    footer: { tagline: "Agentes de IA llave en mano", rights: "Todos los derechos reservados" }
  }
};
