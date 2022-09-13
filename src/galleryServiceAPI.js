export default class GalleryApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchPictures() {
    console.log(this);
    // const options = {
    //     headers: {
    //         Authorization: '29884579-b0e414ddacb31e478cf055115',
    //     },
    // };
    const API_KEY = '29884579-b0e414ddacb31e478cf055115';

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}`;

    fetch(url)
      .then(r => r.json())
      .then(console.log());
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
