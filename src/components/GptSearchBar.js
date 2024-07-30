import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import genAI from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { SEARCH_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import Spinner from "./Spinner";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [isLoading, setIsLoading] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMovieSearchRecommendations = async (movieName) => {
    const movieData = await fetch(SEARCH_MOVIES + movieName, API_OPTIONS);
    const json = await movieData.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current || !searchText.current.value) {
      console.error("Search text is empty or undefined");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const gptQuery =
      "Act as a movie recommendation system and suggest movies for the query : " +
      searchText.current.value +
      ". Only give me names for 5 movies, comma separated like the example result given ahead. Example Result: Shiddat, 12th Fail, Mr. Robot, The Shawshank Redemption, Spirited Away";

    const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response.text();

    const gptMovies = response.split(",");

    const movieData = gptMovies.map((movie) =>
      getMovieSearchRecommendations(movie.trim())
    );
    const searchResults = await Promise.all(movieData);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: searchResults })
    );

    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleGptSearchClick();
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form
        className='w-1/2 bg-gradient-to-r from-black grid grid-cols-12'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className='col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white'
          onClick={handleGptSearchClick}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
