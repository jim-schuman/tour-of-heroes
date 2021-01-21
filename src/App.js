import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import About from "./About";
import Heroes from "./heroes/Heroes";
import Villians from "./villians/Villians";
import ErrorPage from "./ErrorPage";
import './styles.scss';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <HeaderBar />
        <div className="container">
        <main>
          <Routes>
            <Route exact path="/" element={<Heroes />} />
            <Route exact path="/heroes" element={<Heroes />} />
            <Route exact path="/villians" element={<Villians />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*"element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
