import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Routes, Route } from "react-router-dom";

import styles from "./app.module.scss";

function App() {
  const [windowPath, setWindowPath] = useState(window.location.pathname);
  useEffect(() => {
    setWindowPath(window.location.pathname);
  }, []);

  return (
    <div className={styles.page}>
      {windowPath === "/" ? <Header backgroundColor={"#dddee3"} /> : <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<Movies />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
