<div align="center">

# Sheeter Alo (শীতের আলো)

_Winter clothing donation platform focused on Bangladesh’s coldest districts_

[Live demo (Firebase)](https://sheeter-alo.web.app) · [Live demo (Netlify)](https://sheeter-alo.netlify.app/)

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
Sheeter-Alo/
├─ public/                  # Static assets + Netlify redirect rules
├─ src/
│  ├─ assets/               # Hero imagery + misc SVGs
│  ├─ components/
│  │  ├─ cards/             # Atomic cards (campaign, donation, impact)
│  │  ├─ home-components/   # Landing sections composed from cards
│  │  ├─ layout-components/ # Navbar, hero slider, footer, auth banner
│  │  └─ shared-components/ # Reusable UI primitives (buttons, headings)
│  ├─ config/               # Firebase client config
│  ├─ data/                 # Static JSON + copy used by pages
│  ├─ layout/               # Root layout shell
│  ├─ pages/                # Route-level views (Home, Auth, Dashboard, etc.)
│  ├─ provider/             # Auth context provider
│  ├─ routes/               # Router + protected route wrapper
│  ├─ index.css             # Global styles + Tailwind layers
│  └─ main.jsx              # Vite entry point
├─ dist/                    # Production build output (after `npm run build`)
├─ firebase.json            # Firebase hosting configuration
├─ package.json             # Scripts + dependencies
└─ vite.config.js           # Vite + React plugin config
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Minhajh2o/Tango-Time.git
   cd Tango-Time
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Small Tablet:** 640px+ (sm)
- **Tablet:** 768px+ (md)
- **Laptop:** 1024px+ (lg)
- **Desktop:** 1280px+ (xl)

## 📦 Dependencies Snapshot

- React 19 + React Router 7
- Tailwind CSS 4 + DaisyUI
- Firebase (Auth)
- Animate.css
- React Hot Toast

## 📄 License

This project is provided for the Winter Clothing Donation assignment brief. Adapt and deploy on Netlify/Surge/Firebase as needed.
