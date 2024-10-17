# Hemmakväll

## Introduction

#### Project Name:
HemmaKvall

#### Description
A movie browsing platform allowing users to search and mark favorite movies provided by the OMDB-API. 
https://www.omdbapi.com/

#### Built with React, Redux, and Cypress for testing.

#### Main Features:
- Movie search functionality.
- Favorites management (add/remove movies from favorites).
- Modal for detailed movie views.
- Google Analytics
- Google Tag Manager
- Cypress tests for the homepage aka "/".

#### Tech Stack:
- Frontend: React, Tailwind CSS
- State Management: Redux (RTK)
- Testing: Cypress
- Build Tool: Vite

#### Deployment:
- Configurable for various environments.

## Getting Started

#### Installation:

**1. Clone the repository to your local environment:**

```
git clone https://github.com/marwal1987/hemmaKvall.git

```

**2. Navigate to the project directory:**

```
cd hemmaKvall
```

**3. Install dependencies:**

```
npm install
```

**4. Run the Project / start the development server:**

```
npm run dev
```

**5. Open your browser and navigate to http://localhost:5173/**

## Folder Structure

- **/public**: Contains static files such as favicon.ico, sitemap.xml, and robots.txt.
- **/src**: Contains the source code for the application.
- **/components**: Reusable React components like Footer.jsx, Header.jsx, and MovieCard.jsx.
- **/pages**: Page components like HomePage.jsx and FavoritesPage.jsx.
- **/store**: Redux store and slice files, managing movies and favorites.
- **/styles**: Contains the main CSS styles, including Tailwind CSS.
- **/cypress**: Contains Cypress test files, such as homePage.cy.js.

## Key Components

- `main.jsx`: The entry point of the React application where the root component (App.jsx) is rendered into the DOM. It wraps the app with necessary providers like Redux, BrowserRouter and Hemlet provider.
- `App.jsx`: Manages routes and layout, serving as the main hub of the application.
- `Header.jsx` & `Footer.jsx`: Displays the navigation bar and footer respectively.
- `HeroSection.jsx`: Shows welcome message and introductory text.
- `MovieCard.jsx`: Displays individual movie details such as title, image, year, and buttons to add/remove from favorites and view more details.
- `SearchBar.jsx`: Search functionality for querying movies.
- `Modal.jsx`: Displays detailed movie information in a popup.
- `favoritesSlice.js` & `moviesSlice.js`: Redux slices to handle state for favorites and movie data.

## State Management

**Redux Toolkit (RTK):**
The app uses Redux Toolkit to manage global state for movies and favorite movies.

**Slices:**
`moviesSlice.js`: Handles fetching and storing movie data based on user queries.
`favoritesSlice.js`: Manages adding/removing movies from the favorites list.

**Store Configuration:**
The store is created in `store.js` and integrates the above mentioned slices.

## Styles

Tailwind CSS is used for styling, with configurations in `tailwind.config.js` and custom styles in `index.css`.

## SEO Optimization:

The project uses `react-helmet-async` to dynamically manage metadata such as page titles and descriptions for SEO, Open Graph (for social media), and Twitter cards.

**How SEO is Implemented:**

- The `MetaTags.jsx` component is imported and customized on each page to set the correct metadata, improving SEO visibility. Each page is provided with unique titles and descriptions to help search engines and social media platforms display accurate information about the page's content.
- The project also includes a `robots.txt` file and a `sitemap.xml` file. Both can be found in the `/public` directory.
- Responsive design is implemented.

## Conversion Rate Optimization (CRO):

The project uses Google Analytics to track user behavior and Google Tag Manager to manage analytics and other tags dynamically.

**Google Analytics (GA4):**
Google Analytics is integrated using the react-ga4 package to track user interactions and page views throughout the application.

- Initialization in main.jsx: Google Analytics is initialized with the GA4 measurement ID.
  Automatic Page Tracking: ReactGA.send is used to send page view events on every route change.

**Google Tag Manager:**

- Google Tag Manager (GTM) is integrated using the `react-gtm-module` package, allowing for the dynamic injection of tracking scripts.

- Initialization in main.jsx
  Google Tag Manager is initialized using the GTM ID, enabling the addition of future tracking tags without modifying the core application.

## Testing with Cypress:

The project contains an end-to-end (e2e) test located in `/cypress/e2e/homePage.cy.js`.

How to run Cypress Tests:
**Open Cypress UI**

```
npx cypress open
```

**Run tests in headless mode:**

```
npx cypress run
```

## Configuration Files

**package.json**: Manages dependencies and scripts. Key scripts include:

- **npm run dev**: Starts the development server.
- **npm run build**: Builds the production-ready code.

**vite.config.js**: Vite configuration for optimized build and hot module replacement during development.
**tailwind.config.js**: Tailwind CSS configuration.
**eslint.config.js**: ESLint configuration for maintaining code quality.
**cypress.config.js**: Cypress testing configuration.

## Deployment

The project is built using Vite and can be deployed to platforms like Vercel, Netlify, or any server supporting static sites.
To build the project for production:

```bash
npm run build
```

_The output will be in the /dist folder._

## IMPORTANT NOTES!:

- To use the API you will need an API-key. Register your email (FREE, 1000 daily limit) at the following link: https://www.omdbapi.com/

- Google Analytics and Google Tag Manger also uses keys/id's. You will have to create your own account and create your own tags and flows and what not, to make it work.

- Sitemap.xml and robots.txt files URL, is pointing at localhost:5173. Replace this with the actual webbadress for your website before going live.