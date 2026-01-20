import React, { createContext, useEffect, useState } from "react";
import genreMapList from "../Utils/genreMapList";
const WatchListContext = createContext({
  watchList: [],
  addToWatchList: () => {},
  sortAscByRating: () => {},
  sortDescByrating: () => {},
  genreList: [],
});

export const WatchListContextProvider = (props) => {
  const initialWatchList = JSON.parse(
    window.localStorage.getItem("watchList") || "[]"
  );

  const [watchList, setWatchList] = useState(initialWatchList);
  const [genreList, setGenreList] = useState(
    JSON.parse(
      window.localStorage.getItem("genreList") || JSON.stringify(["All Genre"])
    )
  );

  const addToWatchList = (movie) => {
    // console.log(movie);
    // console.log("Adding to WatchList...");
    setWatchList((prevState) => [...prevState, movie]);
    // const genreid = movie.genreId;
    const genre = genreMapList.find((m) => m.id === movie.genreId);
    const uniqueGenreSet = new Set([...genreList, genre.name]);
    setGenreList(() => [...uniqueGenreSet]);
  };

  const sortAscByRating = () => {
    setWatchList((prevState) =>
      prevState.toSorted((m1, m2) => m1.rating - m2.rating)
    );
  };

  const sortDescByrating = () => {
    setWatchList((prevState) =>
      prevState.toSorted((m1, m2) => m2.rating - m1.rating)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    window.localStorage.setItem("genreList", JSON.stringify(genreList));
  }, [genreList]);

  const context = {
    watchList: watchList,
    addToWatchList: addToWatchList,
    sortAscByRating: sortAscByRating,
    sortDescByrating: sortDescByrating,
    genreList: genreList,
  };

  return (
    <WatchListContext.Provider value={context}>
      {props.children}
    </WatchListContext.Provider>
  );
};

export default WatchListContext;
