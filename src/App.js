import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Movie-Watchlist/Watchlist";
import Watched from "./components/Movie-Watchlist/Watched";
import Add from "./components/Movie-Watchlist/Add";
import Header from "./components/Movie-Watchlist/Header";
import GlobalProvider from "./components/Movie-Watchlist/context/GlobalState";
import "./components/Movie-Watchlist/App.css";
const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
