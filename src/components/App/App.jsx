import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/userContext";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Profile } from "../Profile";
import { Login } from "../Auth/Login/Login";
import { Register } from "../Auth/Register/Register";
import { NotFound } from "../NotFound";
import { moviesApi } from "../../utils/MoviesApi";
import { register, authorize, checkToken } from "../../utils/Auth";
import styles from "./app.module.scss";

export const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState({});
  const [includeShort, setIncludeShort] = useState(false);

  useEffect(() => {
    tokenCheck();
    handleGetMovies();
  }, []);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((data) => {
          if (data) {
            // setEmail(data.data.email);
            // setIsLoggedIn(true);
            console.log(data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleLogin = (email, password) => {
    authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
        // setEmail(email);
        // setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((data) => {
        // setRegisterInfo(true);
        navigate("/sign-in");
      })
      .catch((err) => {
        // setRegisterInfo(false);
        console.error(err);
      })
      .finally(() => {
        // openRegisterInfo(true);
      });
  };

  const handleGetMovies = () => {
    moviesApi
      .getAllMovies()
      .then((result) => {
        console.log(result);
        setAllMovies(result);
      })
      .catch(console.error);
  };

  return (
    <div className={styles.page}>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <Movies
                  allMovies={allMovies}
                  includeShort={includeShort}
                  setIncludeShort={setIncludeShort}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <Movies
                  allMovies={allMovies}
                  includeShort={includeShort}
                  setIncludeShort={setIncludeShort}
                  savedMode={true}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
