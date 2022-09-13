// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
//     safesearch - фильтр по возрасту.Задай значение true.

const fieldParams = 'image_type=photo&orientation=horizontal&safesearch=true';

export default class GalleryApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPictures() {
    //console.log('до запроса', this);
    // const options = {
    //     headers: {
    //         Authorization: '29884579-b0e414ddacb31e478cf055115',
    //     },
    // };
    const API_KEY = '29884579-b0e414ddacb31e478cf055115';

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&${fieldParams}&per_page=5&page=${this.page}`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        //console.log(data);
        this.incrementPage();
        console.log('после запроса', this);

        return data.hits;
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
