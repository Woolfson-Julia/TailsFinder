# 🐾 TailsFinder

**TailsFinder** — веб-додаток, який допомагає людям знаходити загублених або знайдених тварин.
Мета проєкту — об'єднати власників, волонтерів та небайдужих людей, щоб швидше повертати улюбленців додому.

---

## 🚀 Основний функціонал (MVP)

* Розміщення оголошень про **загублену тварину**.
* Розміщення оголошень про **знайдену тварину**.
* Перегляд стрічки оголошень (з пошуком/фільтрацією).
* Push-нотифікація при збігах (коли хтось знаходить схожу тварину)
* Зручна мобільна версія (**PWA** — можна встановити як застосунок на телефон).

---

## 🛠️ Стек технологій

* **Фронтенд**: React + React Router + Redux Toolkit
* **Стилизация**: CSS Modules
* **Бекенд**: Node.js (Express) + MongoDB (Mongoose)
* **Авторизаці**: JWT (JSON Web Token)
* **PWA**: Service Worker, Web Push, Manifest.json
* **Інші інструменти**: Git, npm, ESLint/Prettier

---

## 📂 Структура проєкту (попередня)

```
TailsFinder/
├── client/               # фронтенд (React)
│   ├── public/           # статичні файли, manifest.json
│   └── src/
│       ├── components/   # UI-компоненти
│       ├── pages/        # сторінки (Home, Lost, Found, AddPet, Auth)
│       ├── store/        # Redux store
│       ├── services/     # API-запити
│       └── App.jsx
│
├── server/               # бекенд (Express)
    ├── constants/        # Константи (enum'и, статуси, повідомлення про помилки)
    ├── controllers/      # Логіка обробки HTTP-запитів (advertsController, userController тощо)
    ├── db/               # Підключення до бази даних (MongoDB, Mongoose)
    ├── middlewares/      # Middleware (авторизація, обробка помилок, валідація токенів)
    ├── models/           # Mongoose-схеми (User, Advert, Notification)
    ├── routers/          # REST API маршрути (advertsRouter, authRouter)
    ├── services/         # Бізнес-логіка (робота з БД, фільтрами, пошуком)
    ├── utils/            # Допоміжні функції (форматування, генерація токенів тощо)
    ├── validation/       # Joi / Yup схеми для валідації запитів
    │
    ├── index.js          # Точка входу (імпорт серверного застосунку)
    └── server.js         # Ініціалізація Express-застосунку
│
├── README.md
└── package.json
```

---

## ⚙️ Інструкція для запуску

### 1. Клонування репозиторію

```bash
git clone https://github.com/Woolfson-Julia/TailsFinder.git
cd TailsFinder
```

### 2. Встановлення залежностей

Фронтенд:

```bash
cd client
npm install
```

Бекенд:

```bash
cd server
npm install
```

### 3. Запуск у режимі розробки

Фронтенд:

```bash
npm start
```

Бекенд:

```bash
npm run dev
```

---

## 🔮 Подальші плани

* Інтеграція AI («Shazam для тварин» 🐶)

---

