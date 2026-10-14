# THE BRAND — React (финальный проект)

Перевод вёрстки [HTML/CSS магазина](https://deligtfullady.github.io/HTML_CSS/index.html) на **React**.

Курс: **Фреймворк React JS · Урок 8. Работа с API / Итоговый проект**

---

## Цель

Применить знания курса: JSX, компоненты, Props, State, Hooks, Routing, Redux, Redux Persist, композиция.

### Обязательный функционал

| № | Требование | Реализация |
|---|------------|------------|
| 1 | Все товары — компоненты | `ProductCard`, `ProductList` |
| 2 | Разбиение на компоненты | Header, Footer, Benefits, Subscribe, CartItem, SizeFilter, страницы |
| 3 | Сортировка/фильтр по размеру XS, S, M, L | `SizeFilter` + `useMemo` в Catalog |
| 4 | Routing | React Router: `/`, `/catalog`, `/product/:id`, `/cart` |
| 5 | Корзина: GRAND TOTAL + изменение количества | Redux slice, `CartItem` (+/− и input) |

### Дополнительно из курса

- **Redux Toolkit** — store, actions, selectors  
- **Redux Persist** — корзина в `localStorage`  
- **Hooks** — `useState`, `useMemo`, `useSelector`, `useDispatch`  
- Исходные изображения с GitHub Pages вёрстки  

---

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:5173`.

```bash
npm run build    # production-сборка
npm run preview  # просмотр сборки
```

---

## Структура

```
the-brand-react/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx              # Provider + PersistGate + Router
    ├── App.jsx               # Routes
    ├── index.css             # стили по макету THE BRAND
    ├── data/products.js      # товары + категории
    ├── store/
    │   ├── index.js          # configureStore + redux-persist
    │   └── cartSlice.js      # корзина + селекторы (GRAND TOTAL)
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductList.jsx
    │   ├── SizeFilter.jsx
    │   ├── CartItem.jsx
    │   ├── Benefits.jsx
    │   └── Subscribe.jsx
    └── pages/
        ├── Home.jsx
        ├── Catalog.jsx
        ├── ProductPage.jsx
        └── Cart.jsx
```

---

## Страницы

| URL | Описание |
|-----|----------|
| `/` | Главная: hero, категории, featured, benefits, subscribe |
| `/catalog` | Каталог + фильтр по размеру |
| `/product/:id` | Карточка товара, выбор размера, Add to Cart |
| `/cart` | Корзина, quantity, **GRAND TOTAL** |

---

## Корзина (Redux)

- `addToCart` / `removeFromCart`
- `increaseQuantity` / `decreaseQuantity` / `setQuantity`
- `selectCartTotal` → **Grand total**
- Persist: данные не сбрасываются после F5

---

## Оригинал вёрстки

https://deligtfullady.github.io/HTML_CSS/index.html  

Изображения: `raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img/`
