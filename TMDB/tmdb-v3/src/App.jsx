import React from "react";
import Layout from "./Components/Layout";
import { Routes, Route } from 'react-router';
import HomePage from "./Pages/HomePage";
import WatchListPage from "./Pages/WatchListPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path = '/' element = {<HomePage />}/>
        <Route path = '/watchlist' element = {<WatchListPage />}/>
      </Routes>
      </Layout>
  );
};

export default App;
