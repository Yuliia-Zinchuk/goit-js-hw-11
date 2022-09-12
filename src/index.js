const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const loadMoreButton = Document.querySelector('[data-action="load-more"]');

searchForm.addEventListener('submit', onSearch);
searchForm.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();

  const API_KEY = '29884579-b0e414ddacb31e478cf055115';

  const searchQuery = evt.currentTarget.elements.searchQuery.value;

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}`;

  fetch(url)
    .then(r => r.json())
    .then(console.log());
}

function onLoadMore() {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}`;

  fetch(url)
    .then(r => r.json())
    .then(console.log());
}

// const options = {
//     headers: {
//         Authorization: '29884579-b0e414ddacb31e478cf055115',
//     },
// };

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
