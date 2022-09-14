import SimpleLightbox from 'simplelightbox';
import Notiflix from 'notiflix';
import GalleryApiService from './galleryServiceAPI';

// Описан в документации
//import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
export const loadMoreButton = document.querySelector('.load-more');

//loadMoreButton.removeAttribute('hidden', true);
loadMoreButton.setAttribute('hidden', true);

//style="display: none;
const galleryApiService = new GalleryApiService();
console.log(galleryApiService);

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

// btnStop.setAttribute('disabled', true);

function onSearch(evt) {
  evt.preventDefault();
  loadMoreButton.setAttribute('hidden', true);
  galleryApiService.searchQuery = evt.currentTarget.elements.searchQuery.value;

  //   if (galleryApiService.searchQuery === '') {
  //     return Notiflix.Notify.failure('Oops, there is no country with that names');
  //   }

  galleryApiService.resetPage();
  //galleryApiService.message1();

  // loadMoreButton.setAttribute('hidden', true);
  galleryApiService.fetchPictures().then(hits => {
    clearGalleryContainer();
    renderPicturesList(hits);
    loadMoreButton.removeAttribute('hidden');

    // message(hits);

    // console.log(hits);
    // if (hits === []) {
    //   console.log(900);
    //   //   return Notiflix.Notify.failure(
    //   //     'Oops, there is no country with that names'
    //   //   );
    // }
  });

  // .catch(error =>
  //   Notiflix.Notify.failure('Oops, there is no country with that names')
  // );

  //   if (hits === []) {
  //     return Notiflix.Notify.failure('Oops, there is no country with that names');
  //   }
  //loadMoreButton.removeAttribute('hidden');
}

function onLoadMore() {
  galleryApiService.fetchPictures().then(renderPicturesList);
  // alert(`${tothits}`);
}
//console.log(galleryApiService.fetchPictures(tothits));
function renderPicturesList(hits) {
  console.log(hits);
  const list = hits
    .map(hit => {
      return `<div class="photo-card">
  <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" width="340px"/>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${hit.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${hit.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${hit.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${hit.downloads}</b>
    </p>
  </div>
</div>
            `;
    })
    .join(''); //

  galleryContainer.insertAdjacentHTML('beforeend', list);

  // console.log(list);

  //   let gallery = list.simpleLightbox();

  //   gallery.next(); // Next Image
}

function clearGalleryContainer() {
  galleryContainer.innerHTML = '';
}

// let gallery = `${'.photo-card div'}`.simpleLightbox();

let gallery = new SimpleLightbox('.gallery a');

gallery.refresh();
// gallery.next(); // Next Image
// new SimpleLightbox('.photo-card a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

//  getNews(query) {
//     if (query === undefined) query = this.config.data.q;
//     else this.config.data.q = query;

//     let serchParams = new URLSearchParams(this.config.data);
//     return fetch(`${this.config.baseURL}?${serchParams}`, this.config)
//       .then((resp) => resp.json())
//       .then((data) => {
//         this.totalPage = data.total_pages;
//         return data;
//       });
//   }

//   setPage(page) {
//     this.config.data.page = page;
//   }
// }
