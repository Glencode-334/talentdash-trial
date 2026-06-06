# TalentDash

TalentDash is a modern career intelligence platform built with Next.js 16, TypeScript, and Tailwind CSS.

The platform helps users explore:

* engineering salaries
* company reviews
* workplace insights
* compensation benchmarks
* company comparisons

Inspired by modern product ecosystems like Glassdoor, Levels.fyi, and AmbitionBox, TalentDash focuses on polished UI/UX, scalable architecture, and responsive product design.

---

# Live Demo

Deploy Link:
https://talentdash-trial-rose.vercel.app/

GitHub Repository:
https://github.com/Glencode-334/talentdash-trial

---

# Features

## Explore Companies

* Browse top engineering companies
* Company overview pages
* Workplace insights
* Salary ranges
* Engineering culture information

## Salary Intelligence

* Compensation benchmarks
* Salary comparison tables
* Popular engineering roles
* Experience-based salary insights

## Company Reviews

* Employee review sections
* Workplace culture highlights
* Work-life balance insights
* Career growth analysis

## Compare Companies

* Side-by-side company comparison
* Compare compensation
* Compare work policies
* Compare ratings and company insights
* Persistent compare flow using localStorage

## Responsive Product Experience

* Mobile responsive layouts
* Sticky navigation
* Floating compare workflow
* Loading skeletons
* Smooth interactions and transitions

---

# Tech Stack

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* React 19
* LocalStorage state persistence
* Responsive UI architecture

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

## Centralized Data Layer

Project data is organized into:

* `data/companies.ts`
* `data/salaries.ts`

## Centralized Types

Reusable TypeScript models:

* `types/company.ts`
* `types/salary.ts`

## Shared Utilities

Utility helpers:

* `lib/cn.ts`
* `lib/formatCurrency.ts`

---

# Project Structure

```bash
app/
components/
config/
data/
lib/
types/
```

---

# Key UI/UX Improvements

* Recruiter-aligned homepage redesign
* Marketplace-style company cards
* Premium gradients and glass effects
* Improved responsive behavior
* Consistent spacing and typography system
* Enhanced compare workflow
* Reusable loading skeletons
* Product-style dashboard experience

---

# Performance

* Static generation enabled
* Optimized production build
* Type-safe architecture
* Responsive across devices
* Modular scalable component structure

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

## Production build

```bash
npm run build
```

---

# Future Improvements

* Authentication
* Real backend integration
* Search functionality
* Dynamic filtering
* Charts and analytics
* Job listings
* Community discussions

---

# Author

Built as part of the TalentDash UI/UX engineering challenge using modern frontend architecture and scalable product design principles.
