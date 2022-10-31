class MainApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, { method: "GET" }).then((res) => {
      return this.checkResponse(res);
    });
  }

  addMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      body: JSON.stringify({ ...movie }),
    }).then((res) => {
      return this.checkResponse(res);
    });
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
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
