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
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── SecondaryContainer.js
│   │   └── VideoBackground.js
|   |   |__VideoTitle.js
│   ├── hooks/
│   │   └── useNowPlayingMovies.js
|   |   |__useMovieTrailer.js
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── firebase.js
│   │   ├── userSlice.js
│   │   ├── validate.js
│   │   ├── constants.js
│   │   └── moviesSlice.js
│   ├── App.js
│   ├── index.js
│   ├── tailwind.config.js
│   └── ...
├── package.json
````

```

```
