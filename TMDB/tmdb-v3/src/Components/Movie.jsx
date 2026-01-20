import React, { useContext } from "react";
import WatchListContext from "../Store/WatchList-Context";
import genreMapList from "../Utils/genreMapList";

const Movie = (props) => {
  const context = useContext(WatchListContext);
  // console.log(context);

  const addToWatchListHandler = () => {
    const movie = {
      title: props.title,
      posterPath: props.posterPath,
      releaseDate: props.releaseDate,
      rating: props.rating,
      genreId: props.genreId,
    };
    context.addToWatchList(movie);
  };

  const genre = genreMapList.find((m) => m.id === props.genreId);
  console.log(genre);

  return (
    <figure className="w-2xs">
      <img
        className="w-2xs rounded-lg"
        src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`}
        alt=""
      />
      <figcaption>
        <h3 className="font-bold">{props.title}</h3>
        <h4>{props.releaseDate}</h4>
        <h4>{ genre.name }</h4>
        <button
          onClick={addToWatchListHandler}
          className="underline hover:cursor-pointer"
        >
          Add To WatchList
        </button>
      </figcaption>
    </figure>
  );
};

export default Movie;
