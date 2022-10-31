class MoviesApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getAllMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: { ...this._headers },
    }).then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
