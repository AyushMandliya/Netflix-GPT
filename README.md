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
- Implement SignIn user APL
- created Redux Store with UserSlice
- Implemented Signout Feature
- Update Profile API call

- Fetch Movies From TMDB

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

```plaintext
Netflix-GPT/
├── public/
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├──
│   │   ├──
│   │   └──
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── firebase.js
│   │   ├── userSlice.js
│   │   └── validate.js
│   ├── App.js
│   ├── index.js
│   ├── tailwind.config.js
│   └── ...
├── package.json
└── README.md
```
