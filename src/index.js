import GalleryApiService from './galleryServiceAPI';

const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('[data-action="load-more"]');

const galleryApiService = new GalleryApiService();
console.log(galleryApiService);

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();

  galleryApiService.searchQuery = evt.currentTarget.elements.searchQuery.value;
  galleryApiService.resetPage();
  galleryApiService.fetchPictures().then(hits => console.log(hits));
}

function onLoadMore() {
  galleryApiService.fetchPictures().then(hits => console.log(hits));
}

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
