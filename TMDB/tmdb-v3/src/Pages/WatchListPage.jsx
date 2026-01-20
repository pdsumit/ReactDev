import { useContext, useState } from "react";
import WatchListContext from "../Store/WatchList-Context";
import WatchListItem from "../Components/WatchListItem";
import { getGenreById } from "../Utils/genreMapList";
const WatchListPage = () => {
  const { watchList, sortAscByRating, sortDescByrating, genreList } =
    useContext(WatchListContext);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genre");
  //   console.log(searchKeyword);
  const inputChangeHandler = (event) => {
    // put debounce here
    setSearchKeyword(event.target.value);
  };

  // console.log(getGenreById(53));

  const genreClickHandler = (genre) => {
    setSelectedGenre(() => genre);
  };

  return (
    <div className="my-10 w-[60vw] mx-auto">
      <section>
        {genreList.map((g, idx) => {
          return (
            <button
              onClick={() => genreClickHandler(g)}
              className="border border-gray-400 rounded-lg px-1 py-0.5 me-1 hover:cursor-pointer"
              key={idx}
            >
              {g}
            </button>
          );
        })}
      </section>
      <section>
        <h2>Sort:Rating</h2>
        <button
          className="m-3 hover:cursor-pointer"
          onClick={() => sortAscByRating()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="hover:cursor-pointer"
          onClick={() => sortDescByrating()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </section>

      <section>
        <input
          onChange={inputChangeHandler}
          className="w-full p-3 rounded-3xl my-3 outline-none bg-gray-100"
          type="text"
          placeholder="Search Movies"
        />
      </section>
      {watchList
        .filter((m) => {
          if (selectedGenre === "All Genre") {
            return true;
          }
          return getGenreById(m.genreId).name === selectedGenre;
        })
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
        )
        .map((item, idx) => {
          return <WatchListItem key={idx} movie={item} />;
        })}
    </div>
  );
};

export default WatchListPage;
