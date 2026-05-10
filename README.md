# Manuu Spaces Portfolio: Engineering Manifesto

## Overview
This portfolio is a precision-engineered showcase built for **Manuu Spaces**. It leverages a modern tech stack to deliver a cinematic, dark-luxury experience while maintaining executive software engineering standards.

## 🏗️ Architecture & Patterns

### 1. Composition Over Inheritance
The project strictly follows the **React Composition Pattern**. Instead of complex class hierarchies or prop-drilling, UI elements are built as atomic, composable units. For example, the `ContainerScroll` and `PageTransition` components act as wrappers that inject behavior without polluting the business logic of the children.

### 2. Atomic Design (shadcn/ui style)
Components are organized using **Atomic Design principles**:
- **Atoms:** Basic building blocks like `LucideIcons`, typography tokens, and CSS variables.
- **Molecules/Organisms:** Components like `VentureCard` and `Navbar`, which combine multiple atoms into complex, functional units.
- **Templates:** Persistent layouts (`layout.tsx`) that manage global state and navigation.

### 3. GStack Founder Mode Precision
- **Pretext Layout Precision:** Typography uses mathematical `clamp()` functions to ensure a perfect visual rhythm across all viewports. There is no "AI Slop"—every pixel is a result of calculated intent.
- **Selective Motion:** Framer Motion is used as a **strategic signal**. Animations are reserved for high-value conversion points to guide the user's eye without causing cognitive overload or browser "jank."

## 🚀 Technology Stack

- **Next.js 14+ (App Router):** Leveraging React Server Components for optimal initial page loads and SEO.
- **TypeScript:** Strict type safety across all components and utility functions.
- **Tailwind CSS + CSS Modules:** A hybrid approach. Tailwind is used for structural utility, while Scoped CSS Modules handle complex "Liquid Glass" effects and cinematic lighting.
- **Framer Motion:** Powering the 3D perspective transforms and scroll-driven reveals.

## 🛡️ Security & Reliability (STRIDE)

- **Spoofing/Tampering:** All public inputs in the `Contact` form are treated as untrusted and sanitized.
- **Information Disclosure:** The build system is configured to scrub sensitive metadata and `.env` exposure.
- **Denial of Service:** Scroll-linked animations are optimized with `useScroll` and `useTransform` to avoid main-thread blocking, ensuring a smooth 60fps experience even on mobile devices.

## 📈 SEO & Marketing Strategy
The site is built to be "found." Name consistency for **Manuu Spaces** is strictly maintained across title tags, meta descriptions, and semantic headings (`h1`, `h2`) to dominate local and international search results.

---
*Engineering Lead: Gemini CLI*  
*Rigor Level: Maximum*
