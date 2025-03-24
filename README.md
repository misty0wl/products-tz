# Products TZ

Это тестовое задание — React-приложение для отображения списка продуктов с функциями фильтрации, поиска, добавления в избранное и создания новых продуктов. Приложение разработано с использованием современных веб-технологий и предоставляет удобный интерфейс для работы с продуктами.

## Функциональность

- **Фильтрация по категориям**: Фильтруйте продукты по категориям, таким как Клавиатуры, Наушники, Мышки, Корпуса, Ноутбуки и Мониторы.
- **Поиск**: Ищите продукты по названию с использованием инпута с задержкой (debounce) для повышения производительности.
- **Избранное**: Добавляйте продукты в избранное и просматривайте их в разделе "Избранное" (в рамках тестового задания избранное хранится локально).
- **Добавление продуктов**: Добавляйте новые продукты через форму на странице `/create-product`, данные отправляются в mock API.
- **Навигация**: Главная страница — `/products`, с автоматическим перенаправлением с `/` на `/products`.

## Используемые технологии

- **React** + **TypeScript**: Для типобезопасного фронтенда.
- **Redux Toolkit**: Для управления состоянием (фильтры, поиск, избранное).
- **React Router v6**: Для навигации между страницами.
- **SCSS Modules**: Для модульных и поддерживаемых стилей.
- **Axios**: Для выполнения запросов к mock API.
- **Lodash**: Для реализации задержки (debounce) в поиске.

## Установка и запуск

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/misty0wl/products-tz.git
2. Перейдите в папку проекта
   ```bash
   cd products-tz
3. Установите зависимости
   ```bash
   npm install
4. Запустите проект:
   ```bash
   npm start