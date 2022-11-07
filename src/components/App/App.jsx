import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [includeShort, setIncludeShort] = useState(false);
  const [includeShortSaved, setIncludeShortSaved] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedSearchMovies, setSearchSavedMovies] = useState([]);
  const [isRegisterError, setRegisterError] = useState(false);
  const [isLoginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayMovies, setDisplayMovies] = useState({});
  const [shortMovies, setShortMovies] = useState({});
  const [shortSavedMovies, setShortSavedMovies] = useState({});
  const [nothingFoundAll, setNothingFoundAll] = useState(false);
  const [nothingFoundSaved, setNothingFoundSaved] = useState(false);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error(`Can't get user's data ${err}`);
        });

      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data.data);
          setSearchSavedMovies(data.data);
          setShortSavedMovies(() => findShortMovies(data.data));
        })
        .catch((err) => {
          console.log(err);
        });

      if (JSON.parse(localStorage.getItem("filteredMovies"))) {
        setDisplayMovies(JSON.parse(localStorage.getItem("filteredMovies")));
        setIncludeShort(JSON.parse(localStorage.getItem("checkbox")));
        setShortMovies(JSON.parse(localStorage.getItem("filteredSavedMovies")));
      }
    }
  }, [isLoggedIn, navigate]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            navigate(location.pathname);
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
        navigate("/movies");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        setLoginError(true);
      });
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        console.error(err);
        setRegisterError(true);
      })
      .finally(() => {});
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setDisplayMovies();

    setCurrentUser({});
    navigate("/");
  };

  const searchMovies = (movies, name) => {
    if (!movies || !name) {
      return "";
    }
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  const findShortMovies = (movies) => {
    if (!movies) {
      return "";
    }
    return movies.filter((movie) => movie.duration <= 40);
  };

  const handleGetMovies = (searchName) => {
    if (!JSON.parse(localStorage.getItem("allMovies"))) {
      moviesApi
        .getAllMovies()
        .then((result) => {
          localStorage.setItem("allMovies", JSON.stringify(result));
        })
        .then(() => {
          setIsLoading(true);
          const searchResult = searchMovies(
            JSON.parse(localStorage.getItem("allMovies")),
            searchName
          );
          const shortMovies = findShortMovies(searchResult);
          setShortMovies(shortMovies);
          setDisplayMovies(() => searchResult);
          localStorage.setItem("filteredMovies", JSON.stringify(searchResult));
          localStorage.setItem("filteredSavedMovies", JSON.stringify(shortMovies));
          localStorage.setItem("searchKeyword", searchName);
          localStorage.setItem("checkbox", includeShort);
          setTimeout(() => setIsLoading(false), 1500);

          if (searchResult.length < 1) {
            setNothingFoundAll(() => true);
          }
        })
        .catch((err) => {
          setNothingFoundAll(() => true);
          console.log(err);
        });
    } else {
      setIsLoading(true);
      const searchResult = searchMovies(
        JSON.parse(localStorage.getItem("allMovies")),
        searchName
      );
      const shortMovies = findShortMovies(searchResult);
      setShortMovies(shortMovies);
      setDisplayMovies(() => searchResult);
      if (searchResult.length < 1) {
        setNothingFoundAll(() => true);
      }
      localStorage.setItem("filteredMovies", JSON.stringify(searchResult));
      localStorage.setItem("filteredSavedMovies", JSON.stringify(shortMovies));
      localStorage.setItem("searchKeyword", searchName);
      localStorage.setItem("checkbox", includeShort);
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  const handleGetSavedMovies = (searchName) => {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((result) => {
        setSavedMovies(result.data);
        setShortSavedMovies(() => findShortMovies(result.data));
        const searchResult = searchMovies(result.data, searchName);
        setSearchSavedMovies(searchResult);
        setTimeout(() => setIsLoading(false), 1500);
        if (searchResult.length < 1) {
          setNothingFoundSaved(() => true);
        }
      })
      .catch((err) => {
        setNothingFoundSaved(() => true);
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
                    onSubmit={handleGetMovies}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    displayMovies={displayMovies}
                    includeShort={includeShort}
                    setIncludeShort={setIncludeShort}
                    includeShortSaved={includeShortSaved}
                    setIncludeShortSaved={setIncludeShortSaved}
                    isLoading={isLoading}
                    savedMode={false}
                    searchName={localStorage.getItem("searchKeyword")}
                    shortMovies={shortMovies}
                    shortSavedMovies={shortSavedMovies}
                    nothingFoundAll={nothingFoundAll}
                    nothingFoundSaved={nothingFoundSaved}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    onSubmit={handleGetSavedMovies}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    savedSearchMovies={savedSearchMovies}
                    includeShort={includeShort}
                    setIncludeShort={setIncludeShort}
                    includeShortSaved={includeShortSaved}
                    setIncludeShortSaved={setIncludeShortSaved}
                    savedMode={true}
                    isLoading={isLoading}
                    displayMovies={displayMovies}
                    shortMovies={shortMovies}
                    shortSavedMovies={shortSavedMovies}
                    nothingFoundAll={nothingFoundAll}
                    nothingFoundSaved={nothingFoundSaved}
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
                  <Navigate to="/movies" />
                ) : (
                  <Login
                    handleLogin={handleLogin}
                    isError={isLoginError}
                    setError={setLoginError}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Register
                    handleRegister={handleRegister}
                    isError={isRegisterError}
                    setError={setRegisterError}
                  />
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
