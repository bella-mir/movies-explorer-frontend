class MainApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}movies`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => {
      return this.checkResponse(res);
    });
  }

  addMovie(movie) {
    return fetch(`${this._baseUrl}movies`, {
      method: "POST",
      headers: { ...this._headers },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => {
      return this.checkResponse(res);
    });
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}movies/${id}`, {
      method: "DELETE",
      headers: { ...this._headers },
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
}

export const mainApi = new MainApi({
  url: "https://api.movies.bellamir.nomoredomains.sbs/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});
