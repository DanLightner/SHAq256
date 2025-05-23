# SHAq256 Team Showcase

<div align="center">

![SHAq256 Logo](./src/assets/logo.png)

*H4ck3rs Extr40rd1n41re*

A hacker-themed showcase website for the SHAq256 cybersecurity team's CTF achievements.

</div>

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Styling](#styling)
- [State Management](#state-management)
- [Animations](#animations)
- [Routing](#routing)
- [Contributing](#contributing)

## 🔍 Overview

The SHAq256 Team Showcase is a React-based web application designed to display our cybersecurity team's achievements in Capture The Flag (CTF) competitions. The site features a hacker-themed aesthetic with matrix and glitch visual styles that can be toggled by users.

## ✨ Features

- **Hacker-themed UI**: Terminal-style text, matrix background effects, and glitch animations
- **Theme Toggling**: Switch between matrix and glitch visual styles
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Page Transitions**: Smooth animations between pages using Framer Motion
- **Achievement Showcase**: Display of the team's CTF competition achievements

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/) (v6)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (v5)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (v12)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.8)
- **Linting**: [ESLint](https://eslint.org/) (v9)

## 📁 Project Structure

```
src/
├── assets/           # Static assets like images and fonts
├── components/       # Reusable UI components
│   ├── PageTransition.tsx    # Handles page transition animations
│   ├── ThemeProvider.tsx     # Provides theme context to the app
│   └── ThemeToggle.tsx       # Button to toggle between hacker styles
├── layouts/          # Layout components
│   └── MainLayout.tsx        # Main application layout with header and footer
├── pages/            # Page components
│   ├── Achievements.tsx      # Displays team achievements
│   └── Home.tsx              # Landing page with team information
├── store/            # State management
│   └── useThemeStore.ts      # Zustand store for theme state
├── App.css           # Global CSS styles
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/SHAq256.git
cd SHAq256
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173).

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 Styling

The application uses Tailwind CSS for styling with custom CSS classes for the hacker-themed effects.

### CSS Structure

- **App.css**: Contains global styles and hacker-themed CSS classes
  - `.matrix-bg`: Matrix-style background with falling characters
  - `.glitch-text`: Text with glitch effect
  - `.terminal-text`: Terminal-style text with blinking cursor
  - `.cursor-blink`: Blinking cursor animation

### Theme Toggling

The application supports two hacker-themed styles:

1. **Matrix**: Green terminal-style text with falling matrix characters
2. **Glitch**: Cyberpunk-style glitch effects with distorted text

These styles can be toggled using the theme toggle button in the top-right corner of the application.

## 🔄 State Management

State management is handled using Zustand, a lightweight state management library.

### Theme Store

The theme state is managed in `src/store/useThemeStore.ts`:

```typescript
type HackerStyle = 'matrix' | 'glitch';

interface ThemeState {
  hackerStyle: HackerStyle;
  toggleHackerStyle: () => void;
  setHackerStyle: (style: HackerStyle) => void;
}
```

The store provides functions to toggle between matrix and glitch styles.

## 🎬 Animations

Animations are implemented using Framer Motion, a production-ready motion library for React.

### Page Transitions

Page transitions are handled by the `PageTransition` component in `src/components/PageTransition.tsx`, which uses Framer Motion's `AnimatePresence` to animate page changes.

### Element Animations

Various elements throughout the application use Framer Motion for animations:

- Fade-in animations for page content
- Scale animations for interactive elements
- Spring animations for headers and titles

## 🧭 Routing

Routing is handled using React Router v7. The main routes are defined in `src/App.tsx`:

- `/`: Home page with team information
- `/achievements`: Team achievements page

## 🤝 Contributing

1. Create a new branch for your feature or bugfix
2. Make your changes
3. Run linting: `npm run lint`
4. Build the project: `npm run build`
5. Submit a pull request

---

Built with 💚 by the SHAq256 Team | © 2025
