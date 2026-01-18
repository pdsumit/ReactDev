import React, { createContext, useEffect, useState } from 'react';

const WatchListContext = createContext({
  watchList: [],
  addToWatchList: () => {},
});

export const WatchListContextProvider = (props) => {
  const initialWatchList = JSON.parse(
    window.localStorage.getItem("watchList") || "[]"
  );

  const [watchList, setWatchList] = useState(initialWatchList);

  const addToWatchList = (movie) => {
    // console.log(movie);
    // console.log("Adding to WatchList...");
    setWatchList((prevState) => [...prevState, movie]);
  };

  useEffect(() => {
    window.localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  const context = {
    watchList: watchList,
    addToWatchList: addToWatchList
  };

  return (
    <WatchListContext.Provider value={context}>
      {props.children}
    </WatchListContext.Provider>
  );
};

export default WatchListContext;
