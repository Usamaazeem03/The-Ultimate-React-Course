# WorldWise

WorldWise is a React app for tracking cities you have visited on an interactive map. It was built as a course project for the Ultimate React Course (React Router section) and showcases routing, data fetching, and map interactions.

## Features
- Interactive map with markers for visited cities (Leaflet + OpenStreetMap tiles)
- Add a city by clicking on the map (lat/lng passed via the URL)
- Reverse geocoding to prefill city and country (BigDataCloud API)
- Trip details with date and notes (React Datepicker)
- City detail view with formatted date and Wikipedia link
- Countries list generated from stored cities
- Geolocation button to center the map on your current position
- Protected app area with a simple fake-auth flow
- Lazy-loaded routes with a full-page loading spinner

## Tech Stack
- React 18
- React Router 6
- Vite
- Leaflet + React-Leaflet
- JSON Server (local API)
- React Datepicker
- ESLint

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Start the local API
```bash
npm run server
```
This starts JSON Server at `http://localhost:8000` and serves data from `data/cities.json`.

### 3) Start the dev server
```bash
npm run dev
```
Vite will print the local URL in the terminal.

## Available Scripts
- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm run server` - Start JSON Server on port 8000

## Login (Fake Auth)
Use the following credentials on the login screen:
- Email: `jack@example.com`
- Password: `qwerty`

## Project Structure (High Level)
```
src/
  components/
  contexts/
  hooks/
  pages/
  App.jsx
  main.jsx

data/
  cities.json
```

## Notes
- The app does not use a real backend. JSON Server writes changes directly to `data/cities.json`.
- Reverse geocoding uses the BigDataCloud public endpoint and requires an internet connection.
- Map tiles are provided by OpenStreetMap (Humanitarian style).

## Credits
Built as part of the Ultimate React Course (React Router section).
