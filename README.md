# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

<div align="center">

# Sheeter Alo (শীতের আলো)

_Winter clothing donation platform focused on Bangladesh’s coldest districts_

[Live demo (coming soon)](#) · [Project brief](Sheeter%20Alo%20project%20details.txt)

</div>

## ✨ Overview

Sheeter Alo is a Vite + React SPA that unites donors, volunteers, and division coordinators so they can deliver warm clothing throughout the Bangladeshi winter. The app highlights donation campaigns per division, guides new helpers, and keeps authenticated users connected through a lightweight Firebase-powered dashboard.

## 🧊 Key Features

- Winter-themed landing page with hero slider, impact metrics, and storytelling sections.
- Campaign directory + detail pages backed by local JSON data (easy to swap for API).
- Protected donation flow with pickup form plus toast confirmation powered by `react-hot-toast`.
- Firebase Authentication (email/password + Google) with register, login, dashboard, profile update, and password reset (redirects to Gmail).
- Responsive layout built with Tailwind CSS v4, DaisyUI, and Animate.css micro-interactions.
- Environment-aware Firebase config loaded from `.env` for safe key management.

## 🧱 Project Structure

```
src/
	components/
		cards/            # Small UI cards combined into larger sections
		layout-components # Navbar, Hero, Footer
		shared-components # Buttons, headings, info chips
	context/            # Firebase Auth provider
	data/               # Static winter campaign JSON
	layout/             # Page shells
	pages/              # Route screens
	routes/             # Router + protected route helper
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill with your Firebase project credentials:

```
cp .env.example .env
# edit .env with your Firebase keys
```

## 🚀 Getting Started

```powershell
npm install
npm run dev
```

Additional scripts:

- `npm run build` – production build via Vite.
- `npm run preview` – preview the production bundle.
- `npm run lint` – ESLint (flat config) validation.

## 📦 Dependencies Snapshot

- React 19 + React Router 7
- Tailwind CSS 4 + DaisyUI
- Firebase (Auth)
- Animate.css
- React Hot Toast

## 📄 License

This project is provided for the Winter Clothing Donation assignment brief. Adapt and deploy on Netlify/Surge/Firebase as needed.
