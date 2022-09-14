import Notiflix from 'notiflix';
import axios from 'axios';
const API_KEY = '29884579-b0e414ddacb31e478cf055115';
const BASE_URL = 'https://pixabay.com/api';
const fieldParams = 'image_type=photo&orientation=horizontal&safesearch=true';
export const per_page = 40;

import { invisibleButton } from './index';

let tothits = 0;
const axios = require('axios');

export class GalleryApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.per_page = 5;
  }

  async fetchPictures() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&${fieldParams}&per_page=${per_page}&page=${this.page}`;
    const response = await axios.get(url);
    const hits = response.data;

    tothits = hits.totalHits;
    if (hits === []) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    const totalPages = tothits / per_page;

    this.incrementPage();

    if (this.page > Math.ceil(totalPages)) {
      invisibleButton();
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      // invisibleButton();
    }

    return hits.hits;
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
