import { React, Fragment } from "react";
import { Link } from 'react-router'

const Layout = (props) => {
  return (
    <Fragment>
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
              <Link to="#">People</Link>
            </li>
            <li className="text-white me-4">
              <Link to="#">More</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer className="bg-blue-500 text-center p-10 text-white">
        <p>All rights reserved &copy;</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
