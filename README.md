<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer-motion" />
  </div>

  <h1 align="center">ADmyBRAND</h1>
  <h3 align="center">AI-Powered Omni-Channel Advertising Platform</h3>
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Components](#components)
8. [Customization](#customization)

## 🚀 Introduction

ADmyBRAND is a modern SaaS landing page for an AI-driven, omni-channel advertising platform that unifies traditional and digital media planning, booking, and analytics in one powerful solution. The landing page showcases the platform's features, pricing plans, and benefits with a sleek, modern UI/UX design.

This project demonstrates advanced React and Tailwind CSS implementation with smooth animations powered by Framer Motion, interactive pricing calculators, and responsive design principles.

## ⚙️ Tech Stack

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Custom components with Tailwind CSS
- **Smooth Scrolling**: React Scroll
- **Number Animation**: React CountUp

## 🔋 Features

### UI/UX Features

- **Modern Design**: Clean, professional interface with a dark theme and accent colors
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Smooth Animations**: Page transitions and micro-interactions using Framer Motion
- **Gradient Effects**: Beautiful gradient effects using CSS and Tailwind utilities
- **Glassmorphism**: Subtle glass-like effects for UI components

### Functional Features

- **Interactive Pricing Calculator**: Customizable plan builder with real-time price updates
- **Pricing Toggle**: Switch between monthly and annual pricing plans
- **Contact Form**: Form with validation using React Hook Form and Zod
- **Smooth Scrolling**: Section navigation with smooth scrolling
- **Testimonials**: Customer testimonials with animated transitions
- **FAQ Section**: Expandable FAQ items for better information organization
- **Indian Rupee Support**: Pricing displayed in ₹ currency format

## 📁 Project Structure

The project follows a modular structure for better organization and maintainability:

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components
├── constants/        # Data constants and configuration
├── context/          # React context providers
├── sections/         # Main page sections
└── App.jsx           # Main application component
```

## 🛠️ Installation

Follow these steps to set up the project locally on your machine:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd saasLandingPage
```

2. Install dependencies:

```bash
npm install
```

## 🚀 Usage

### Development Server

Start the development server:

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173).

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🧩 Components

The project includes several reusable components:

### Core Components

- **Button**: Customizable button component with icon support
- **TestimonialItem**: Card component for displaying customer testimonials
- **FaqItem**: Expandable component for FAQ questions and answers
- **PricingCalculator**: Interactive component for customizing pricing plans
- **Marker**: Visual marker component used in various sections

### Section Components

- **Header**: Navigation bar with responsive menu
- **Hero**: Main landing section with call-to-action
- **Features**: Showcase of platform features with illustrations
- **Pricing**: Pricing plans with monthly/annual toggle
- **Faq**: Frequently asked questions section
- **Testimonials**: Customer testimonials carousel
- **Download**: Call-to-action section for software download
- **Contact**: Contact form with validation
- **Footer**: Site footer with links and information

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. The main configuration is in `tailwind.config.js`, which includes:

- **Custom Colors**: Primary colors (p1-p5) and secondary colors (s1-s5)
- **Custom Shadows**: Various box-shadow configurations
- **Custom Spacing**: Predefined spacing values
- **Custom Typography**: Font families and line heights

### Content

All content is defined in the `constants/index.jsx` file, making it easy to update:

- **Features**: Update the features displayed in the Features section
- **Plans**: Modify pricing plans, features, and pricing
- **FAQ**: Edit questions and answers
- **Testimonials**: Update customer testimonials

### Components

Components are designed to be modular and reusable. You can customize them by:

1. Modifying props passed to components
2. Updating component styles in their respective files
3. Adding new components as needed

## 📝 Conclusion

This SaaS landing page project demonstrates modern web development practices using React and Tailwind CSS. It showcases how to create a visually appealing, responsive, and interactive user interface for a SaaS product.

The project structure is organized for maintainability and scalability, making it easy to extend with additional features or customize for different SaaS products.

Feel free to use this project as a template for your own SaaS landing page or as a reference for implementing specific UI components and animations.
