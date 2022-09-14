import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { GalleryApiService } from './galleryServiceAPI';
import { per_page } from './galleryServiceAPI';
const searchForm = document.querySelector('.search-form');

const galleryContainer = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

export function invisibleButton() {
  return loadMoreButton.setAttribute('hidden', true);
}
invisibleButton();

const galleryApiService = new GalleryApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();
  const searchBoxValue = document.getElementsByName('searchQuery')[0].value;
  if (searchBoxValue === '') {
    Notiflix.Notify.failure('Please, input your query.');
    return;
  }
  invisibleButton();
  //loadMoreButton.setAttribute('hidden', true);
  galleryApiService.searchQuery = evt.currentTarget.elements.searchQuery.value;

  galleryApiService.resetPage();

  galleryApiService.fetchPictures().then(hits => {
    clearGalleryContainer();
    renderPicturesList(hits);
    console.log(hits.length);
    if (hits.length >= per_page) {
      loadMoreButton.removeAttribute('hidden');
    }
  });
}

function onLoadMore() {
  galleryApiService.fetchPictures().then(renderPicturesList);
}

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

let gallery = new SimpleLightbox('.gallery a');

gallery.refresh();
