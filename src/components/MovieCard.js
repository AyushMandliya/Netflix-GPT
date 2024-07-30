import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  return (
    <div className='w-48 pr-4'>
      <Link to={`/browse/${id}`}>
        <img alt='Movie Card' src={IMG_CDN_URL + posterPath} />
      </Link>
    </div>
  );
};
export default MovieCard;
