import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  // Fetch trailer
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch trailer video:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);

  return (
    <div>
      {trailerVideo ? (
        <iframe
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${trailerVideo.key}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoBackground;
