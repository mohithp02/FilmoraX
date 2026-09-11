# MovieScan

MovieScan is a React + Vite movie search web application that lets users search for movies using the OMDb API, view matching results on the landing page, and open a selected movie to see its detailed information.

## Features

- Search movies by title
- Display search results immediately on the landing page
- Smooth scroll to the results section after a successful search
- Open a movie card to view full movie details
- Responsive and modern UI with a cinematic landing-page design

## Tech Stack

- React
- Vite
- React Router
- OMDb API
- Bootstrap utility classes for layout

## Project Structure

- `src/App.jsx` - application routing setup
- `src/pages/Landing.jsx` - landing page with search input and result rendering
- `src/pages/Movieview.jsx` - movie result cards
- `src/pages/Movie.jsx` - detailed movie information page
- `src/components/Header.jsx` - reusable top navigation header
- `src/App.css` - main styling and layout
- `src/index.css` - base global styling

## Getting Started

1. Clone the project
2. Open the project folder
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local Vite URL shown in the terminal

## Build

To create a production build:

```bash
npm run build
```

## API Note

This project uses the OMDb API with a predefined API key in the fetch requests. If you want to use your own key, update the `apikey` value in the fetch URLs in the relevant pages.

## Screens

- Landing page with movie search
- Results section below the hero area
- Movie detail page with full movie metadata

## Author

MovieScan is a small React project created for movie search and learning UI/UX styling.
