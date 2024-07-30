export const LOGO =
  "https://imgs.search.brave.com/vq4rM2jnG_LzMeZHGVj-BEoZt4Dh_sgI32r0Q2xK5bw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/97592722?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU2OGE5MzdmNzA5YzQ3ZDkwZDU4ZWQzODhjNWU0OCIsIm5iZiI6MTcyMjA4MzM2My45OTQwODEsInN1YiI6IjY2YTRlM2UyMWY0M2Q1NmU0ZWM2MzBjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhIN_FzzN5c2lB-S5fikqP5QD0qDXj_LEoKRxhO5V6M",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const OPENAI_KEY = "AIzaSyBODPD0qgF01nIW_XT4qcOUdSn3eQV1JAs_KEY";

export const SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie?query=";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
