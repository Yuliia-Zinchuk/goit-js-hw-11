// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
//     safesearch - фильтр по возрасту.Задай значение true.

import Notiflix from 'notiflix';
import axios from 'axios';
const API_KEY = '29884579-b0e414ddacb31e478cf055115';
const BASE_URL = 'https://pixabay.com/api';
const fieldParams = 'image_type=photo&orientation=horizontal&safesearch=true';
const per_page = 40;
//import loadMoreButton from './index';
//console.log(loadMoreButton);
import { invisibleButton } from './index';
console.log(invisibleButton);
let tothits = 0;
const axios = require('axios');
// const options = {
//     headers: {
//         Authorization: API_KEY ,
//     },

export default class GalleryApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.per_page = 5;
  }

  //   async fetchPictures() {
  //     const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&${fieldParams}&per_page=${per_page}&page=${this.page}`;

  //     const response = await fetch(url);

  //     console.log(response);

  //     const hits = await response.json();
  //     console.log(hits);

  async fetchPictures() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&${fieldParams}&per_page=${per_page}&page=${this.page}`;

    const response = await axios.get(url);

    // console.log(response);
    const hits = response.data;
    // response = await (response => ;
    console.log(hits);

    tothits = hits.totalHits;
    if (tothits === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      //alert('rrr');
    }
    const totalPages = tothits / per_page;
    console.log(totalPages);

    console.log(tothits);
    this.incrementPage();
    console.log(Math.ceil(totalPages));

    if (this.page > Math.ceil(totalPages)) {
      invisibleButton();
      Notiflix.Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      invisibleButton();
    }
    // console.log('gjckt pfghjcf', tothits);

    return hits.hits;
  }

  // console.log(tothits);
  // console.log(hits);

  // const hits1 = ({ hits }) => {
  //   //       //         //console.log(data);
  //   //       this.incrementPage();
  //   return hits;
  // };
  // console.log(hits1);

  // this.incrementPage();
  // }

  //     console.log();

  //     return
  //       .then(response => response.json())
  //       .then(({ hits }) => {
  //         //console.log(data);
  //         this.incrementPage();
  //         // loadMoreButton.setAttribute('hidden', false);
  //         // console.log('после запроса', this);
  //         //loadMoreButton.setAttribute('hidden', true);

  //         return hits;
  //       })
  //       .catch(error => {
  //         console.log('oops');
  //       });
  //   }

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

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response);
  })
  .then(response => {
    console.log(response);
  })
  .then(body => {
    console.log(body);
    console.log(data);
  })
  .catch(error => {
    // Error handling
  });
