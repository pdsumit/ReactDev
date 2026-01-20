import React from "react";
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav>
        <ul className="flex items-center py-5 px-10">
          <li className="text-white me-4 text-xl">
            <Link to="/">TMDB Clone</Link>
          </li>
          <li className="text-white me-4">
            <Link to="/watchlist">WatchList</Link>
          </li>
          <li className="text-white me-4">
            <Link to="/">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header
