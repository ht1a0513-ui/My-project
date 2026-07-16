# Event Registration System

A responsive React + Vite event management app with persistent authentication, theme preferences, session storage, and complete CRUD support for event records.

## Features
- Local storage for login persistence and saved event records
- Session storage for the current search term and category filter
- Light/dark theme persistence across reloads
- Create, edit, and delete events with instant UI updates
- Responsive dashboard-style interface with confirmation dialogs and status messages

## Storage Mechanisms
- Local Storage: stores authentication state, theme preference, and event list data
- Session Storage: stores the current search keyword and active filter during the active browser tab session

## Learning Outcomes
- Implemented client-side persistence without a backend
- Managed state across page refreshes using browser storage APIs
- Built a full CRUD workflow in React with validation and feedback

## Run Locally
```bash
npm install
npm run dev
```

## Build Verification
```bash
npm run build
```
