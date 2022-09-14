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

  if (galleryApiService.searchQuery === '') {
    return Notiflix.Notify.failure('Oops, there is no country with that names');
  }

  galleryApiService.resetPage();

  // loadMoreButton.setAttribute('hidden', true);
  galleryApiService.fetchPictures().then(hits => {
    clearGalleryContainer();
    renderPicturesList(hits);
    loadMoreButton.removeAttribute('hidden');
  });

  //loadMoreButton.removeAttribute('hidden');
}

function onLoadMore() {
  galleryApiService.fetchPictures().then(renderPicturesList);
}
function renderPicturesList(hits) {
  // console.log(hits);
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

  //console.log(list);

  //   let gallery = list.simpleLightbox();

  //   gallery.next(); // Next Image
}

function clearGalleryContainer() {
  galleryContainer.innerHTML = '';
}

// let gallery = `${'.photo-card div'}`.simpleLightbox();

let gallery = new SimpleLightbox('.photo-card a');

gallery.refresh();
// gallery.next(); // Next Image
// new SimpleLightbox('.photo-card a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// function renderPicturesList(hits) {
//   console.log(hits);
//   const list = hits
//     .map(hit => {
//       return `<li>
//           <img class="picture" src="${hit.largeImageURL}" alt="var with alt" >
//                   <h3>${hit.likes}</h3>

//                 </li>
//             `;
//     })
//     .join('');

//   galleryContainer.insertAdjacentHTML('beforeend', list);
// }

// const URL =
//   'https://pixabay.com/api/?key=' +
//   API_KEY +
//   '&q=' +
//   encodeURIComponent('red roses')$.getJSON(URL, function (data) {
// //   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) {
//       console.log(hit.pageURL);
//     });
//   else console.log('No hits');
// });

//fetch('https://pixabay.com/api/');

// const fetchUsersBtn = document.querySelector('.text');
// console.log(fetchUsersBtn);
// //const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('submit', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))

//     .catch(error => console.log(error));

//   console.log(98);
// });

// function fetchUsers() {
//   return fetch('https://restcountries.com/v3.1/name').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
// console.log(999);
// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

//
// };
