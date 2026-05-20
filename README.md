# ShoppingHome 🛍️

A modern shopping UI project built using **React**, **Tailwind CSS**, and **Vite**.

> ⚠️ This project is currently **in progress**.
> Right now it mainly focuses on the **frontend UI/design**.
> Features like backend integration, authentication, database, and full eCommerce functionality will be added step by step.

---

## 🚀 Tech Stack

- React.js
- Tailwind CSS
- Vite
- JavaScript (ES6)

---

## 📂 Project Structure

```bash id="bhb24l"
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SearchOverlay.jsx
│   ├── CartDrawer.jsx
│   └── MobileMenu.jsx
│
├── data/
│   └── data.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚡ Current Features

- Responsive Navbar
- Mobile Menu
- Search Overlay
- Cart Drawer UI
- Modern Footer
- Glassmorphism Design
- Responsive Layout
- Tailwind CSS Styling
- Reusable Components

---

## 📦 Installation

Clone the repository:

```bash id="guksz6"
git clone <....Progress>
```

Move into the project folder:

```bash id="2d67f2"
cd ShoppingHome
```

Install dependencies:

```bash id="r7i4mf"
npm install
```

Run development server:

```bash id="cxd8pi"
npm run dev
```

---

## 🎨 Tailwind Setup

Install Tailwind CSS:

```bash id="3zj5nq"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js id="bo0f93"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🔮 Planned Features

- Product Pages
- Authentication System
- Wishlist Functionality
- Redux State Management
- Checkout Flow
- Backend Integration
- Payment Gateway
- Admin Dashboard
- API Integration

---

## 👨‍💻 Author

Made with ❤️ by Ammar

---

## 📄 License

This project is open source and available under the MIT License.
