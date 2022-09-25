import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies}  from "../Movies";
import { Routes, Route } from "react-router-dom";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
