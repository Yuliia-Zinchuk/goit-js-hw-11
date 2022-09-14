// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
//     safesearch - фильтр по возрасту.Задай значение true.

const API_KEY = '29884579-b0e414ddacb31e478cf055115';
const BASE_URL = 'https://pixabay.com/api';
const fieldParams = 'image_type=photo&orientation=horizontal&safesearch=true';
import loadMoreButton from './index';
// const options = {
//     headers: {
//         Authorization: API_KEY ,
//     },

export default class GalleryApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPictures() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&${fieldParams}&per_page=5&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        //console.log(data);
        this.incrementPage();
        // loadMoreButton.setAttribute('hidden', false);
        // console.log('после запроса', this);
        //loadMoreButton.setAttribute('hidden', true);

        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
