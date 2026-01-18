import React, { useContext } from "react";
import WatchListContext from "../Store/WatchList-Context";

const Movie = (props) => {
  const context = useContext(WatchListContext);
  // console.log(context);

  const addToWatchListHandler = () => {
    const movie = {
      title: props.title,
      posterPath : props.posterPath,
      releaseDate: props.releaseDate
    }
    context.addToWatchList(movie);
  }

  return (
    <figure className='w-2xs'>
      <img
        className="w-2xs rounded-lg"
        src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`}
        alt=""
      />
      <figcaption>
        <h3 className="font-bold">{props.title}</h3>
        <h4>{props.releaseDate}</h4>
      </figcaption>
      <button onClick={addToWatchListHandler} className='underline hover:cursor-pointer'>Add To WatchList</button>
    </figure>
  );
};

export default Movie;
