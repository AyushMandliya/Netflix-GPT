# Netflix-GPT

Netflix-GPT is a React application styled with TailwindCSS, inspired by Netflix's UI, and augmented with GPT capabilities for enhanced movie suggestions.

## Getting Started

- Create react app
- Configure TailwindCSS
- Header
- Routing
- Login form
- sign up form and Form validations (useRef Hooks)
- Firebase Set Up
- Deploying App to Production
- Create SignUp user Acc. in Firebase
- Implement SignIn user API
- created Redux Store with UserSlice
- Implemented Signout Feature
- Update Profile API call
- BugFix: SignUp user display Name and Profile Picture Update and redirecting/browse to login and vice versa
- Unsubscribe to be onAuthChanged callback
- Add hardcoded values in constant files
- Register on TMDB and create an App and get access token
- Get data from tmdb and now playing movies list API
- Fetch Movies From TMDB
- Custom Hooks for now playing Movies
- Create MovieSlice
- Update Stores with movie data
- Planning for Main and Secondary container
- Fetch data for trailer video
- Update Store with trailer video data
- Embeded the yt video and make it autoplay and muted
- Includes TailwindCSS classes for main container
- Build Secondary Container
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT search Page
- GPT Search Bar
- MultiLingual Feature
- Completion of GEMINI AI

## Features

### Login & Sign Up Page

- **Sign In / Sign Up Form**
- **Redirect to Browse Page**

### Browse Page (After Authentication)

- **Header**
- **Main Movie**
  - **Trailer in Background**
  - **Title & Description**
- **Movie Suggestions**:
  - **MoviesList\*N**

### NetflixGPT Page

- **Search Bar**
- **Movie Suggestions**

## Project Structure

````plaintext
```plaintext
Netflix-GPT/

├── public/
│   └── (public assets, if any)
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GptMovieSuggestions.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieDetails.js
│   │   ├── MovieList.js
│   │   ├── MoviePage.js
│   │   ├── MovieTrailer.js
│   │   ├── SecondaryContainer.js
│   │   ├── Spinner.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│   ├── hooks/
│   │   ├── useMovieDetails.js
│   │   ├── useMovieTrailer.js
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   └── useUpcomingMovies.js
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── configSlice.js
│   │   ├── constants.js
│   │   ├── firebase.js
│   │   ├── geminiAI.js
│   │   ├── gptSlice.js
│   │   ├── languageConstants.js
│   │   ├── moviesSlice.js
│   │   ├── userSlice.js
│   │   └── validate.js
├── .firebaserc
├── .gitignore
├── firebase.json
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
├── .env
````

```

```
