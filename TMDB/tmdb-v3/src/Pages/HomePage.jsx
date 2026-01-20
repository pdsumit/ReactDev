import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Components/Movie";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWJiNzNiMzcwNzllOTk5YjU5MmVmMDc2YTRlZmE2MiIsIm5iZiI6MTc2ODMwOTUyNS42NDcsInN1YiI6IjY5NjY0MzE1YWE0MzQxZjJkZDM2ZGVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-K3ItvDNy6Cvyn1NCVcnRrJQSH9-OOTmJOOSRiEpEo",
        },
      })
      .then((response) => {
        // console.log(response);
        setMovies(() => response.data.results);
      });
  }, [pageNo]);

  const prevPageClickHandler = () => {
    if (pageNo <= 1) {
      return;
    }
    setPageNo((pageNo) => pageNo - 1);
  };

  const nextPageClickHandler = () => {
    if (pageNo >= 10000) {
      return;
    }
    setPageNo((pageNo) => pageNo + 1);
  };
  return (
    <section>
      <h1 className="text-2xl w-[70vw] mx-auto my-10">Popular Movies</h1>
      <section className="w-[70vw] mx-auto flex flex-wrap gap-5">
        {movies.map((movie) => {
          return <Movie  
              key = {movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              rating = {movie.vote_average}
              genreId = {movie.genre_ids[0]}
            />
        })}
      </section>
      <section className='flex justify-center my-5 gap-10'>
                <button onClick={prevPageClickHandler} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Prev</button>
                Page {pageNo}
                <button onClick={nextPageClickHandler} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Next</button>
            </section>
        </section>
  );
};

export default HomePage;
