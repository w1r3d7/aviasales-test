
const PATH = {
  SEARCH_ID: 'search',
  TICKETS: 'tickets?searchId='
}

class Api {
  _baseUrl = 'https://front-test.beta.aviasales.ru/';

  getData = (path, id = '') => {
    return fetch(`${this._baseUrl}${path}${id}`)
        .then((data) => data.json());
  }

  getSearchId = () => {
    return this.getData(PATH.SEARCH_ID);
  }

  getTickets = () => {
    return this.getSearchId()
        .then(({searchId}) => {
          return this.getData(PATH.TICKETS, searchId);
        })
  }
}


export default Api;
