import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/userContext";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Profile } from "../Profile";
import { Login } from "../Auth/Login/Login";
import { Register } from "../Auth/Register/Register";
import { NotFound } from "../NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { register, authorize, checkToken, getUserInfo } from "../../utils/Auth";
import styles from "./app.module.scss";

export const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState({});
  const [includeShort, setIncludeShort] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    tokenCheck();
    handleGetMovies();
    handleGetSavedMovies();
  }, [isLoggedIn]);

  useEffect(() => {
    getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(`Can't get user's data ${err}`);
      });
  }, [isLoggedIn]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
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
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  const handleGetMovies = () => {
    moviesApi
      .getAllMovies()
      .then((result) => {
        setAllMovies(result);
      })
      .catch(console.error);
  };

  const handleGetSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((result) => {
        setSavedMovies(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles.page}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    allMovies={allMovies}
                    includeShort={includeShort}
                    setIncludeShort={setIncludeShort}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    allMovies={allMovies}
                    includeShort={includeShort}
                    setIncludeShort={setIncludeShort}
                    savedMode={true}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile handleLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login handleLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Register handleRegister={handleRegister} />
                )
              }
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
