# TalentDash

TalentDash is a modern salary intelligence and company insights platform built with Next.js 16, TypeScript, and Tailwind CSS.

The platform helps users explore engineering salaries, workplace insights, compensation benchmarks, and company comparisons through a recruiter-grade frontend experience inspired by platforms like Levels.fyi, Glassdoor, and AmbitionBox.

The project focuses on scalable frontend architecture, polished product UX, SEO best practices, and URL-driven application state.

---

# Live Demo

Live Application:
https://talentdash-trial-rose.vercel.app/

GitHub Repository:
https://github.com/Glencode-334/talentdash-trial

---

# Features

## Salary Intelligence

* Filterable salary intelligence table
* Debounced company and role search
* URL-synced filters and sorting
* Pagination with shareable URLs
* Currency toggle (INR ↔ USD)
* Experience-level compensation insights
* Empty-state handling
* Active filter chips and clear-all workflow

---

## Company Profiles

* Dynamic company pages using App Router
* Static generation with `generateStaticParams`
* Compensation overview sections
* Workplace and hiring insights
* Work policy information
* Compare CTA integration
* Loading and not-found states

---

## Company Comparison System

* Side-by-side company comparison
* Compare compensation and workplace policies
* Persistent compare flow using localStorage
* Floating compare widget
* Compare limit handling
* Clear/remove compare actions

---

## Product Experience

* Responsive mobile-first layouts
* Sticky navigation system
* Marketplace-style company cards
* SaaS-inspired UI design
* Smooth filtering interactions
* Product-style dashboard layouts
* Reusable loading skeletons
* Persistent URL state management

---

# SEO & Performance

* App Router architecture
* Static Site Generation (SSG)
* Open Graph metadata
* Canonical URLs
* JSON-LD structured data
* Production-optimized build
* Type-safe scalable architecture

---

# Tech Stack

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* React 19
* ESLint
* LocalStorage state persistence

---

# Architecture Highlights

## Reusable UI System

Reusable components were created for:

* Cards
* Containers
* Section Headers
* Stats Grids
* Filters
* Floating Compare
* Company Grid
* Navigation System

---

## Centralized Data Layer

Project data is organized into:

* `data/companies.ts`
* `data/salaries.ts`

---

## Shared Type Models

Reusable TypeScript models:

* `types/company.ts`
* `types/salary.ts`

---

## Shared Utilities

Utility helpers:

* `lib/cn.ts`
* `lib/formatCurrency.ts`

---

# Project Structure

```bash
app/
components/
  features/
  ui/
config/
data/
lib/
types/
```

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

## Create production build

```bash
npm run build
```

## Start production server

```bash
npm run start
```

---

# Architecture & Product Goals

TalentDash was designed to:

* simulate a modern salary intelligence platform
* demonstrate scalable frontend architecture
* showcase recruiter-grade product UX
* implement SEO-first App Router patterns
* prioritize reusable and maintainable systems
* reflect real-world frontend engineering practices

---

# Performance

* Static optimization enabled
* Production build verified
* Responsive across device sizes
* Optimized App Router rendering
* Lightweight scalable architecture

---

# Future Improvements

* Authentication system
* Real backend integration
* Salary trend analytics
* Interactive charts
* Job listings
* User-generated reviews
* Saved comparisons
* Advanced search capabilities

---

# Author

Built as part of the TalentDash UI/UX engineering challenge using modern frontend architecture, scalable product systems, and recruiter-oriented frontend engineering practices.
