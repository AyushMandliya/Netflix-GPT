# Netflix-GPT

Netflix-GPT is a React application styled with TailwindCSS, inspired by Netflix's UI, and augmented with GPT capabilities for enhanced movie suggestions.

## Getting Started

- Create react app
- Configure TailwindCSS
- Header
- Routing
- Login form
- sign up form and Form validations (useRef Hooks)

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
│   │   ├── SignUpForm.js
│   │   ├── SearchBar.js
│   │   └── NetflixGPT.js
│   ├── utils/
│   │   ├── validate.js
│   │   ├── firebase.js
│   │   ├── BrowsePage.js
│   │   └── NetflixGPTPage.js
│   ├── App.js
│   ├── index.js
│   ├── tailwind.config.js
│   └── ...
├── package.json
└── README.md
```
