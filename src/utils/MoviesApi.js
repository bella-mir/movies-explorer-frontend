class MoviesApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  //приватная функция проверки ответа
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  //получаем карточки с сервера (GET)
  getAllMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: { ...this._headers },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default moviesApi;
