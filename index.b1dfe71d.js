const e=document.querySelector(".search-form"),t=document.querySelector(".gallery"),r=document.querySelector('[data-action="load-more"]'),n=new class{fetchPictures(){const e=`https://pixabay.com/api/?key=29884579-b0e414ddacb31e478cf055115&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5&page=${this.page}`;return fetch(e).then((e=>e.json())).then((e=>(this.incrementPage(),console.log("после запроса",this),e.hits)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function c(e){console.log(e);const r=e.map((e=>`<li>\n          <img class="picture" src="${e.largeImageURL}" alt="flag" width="60">\n                  <h3>${e.likes}</h3>\n\n                </li>\n            `)).join("");t.insertAdjacentHTML("beforeend",r)}console.log(n),e.addEventListener("submit",(function(e){e.preventDefault(),n.searchQuery=e.currentTarget.elements.searchQuery.value,n.resetPage(),n.fetchPictures().then(c)})),r.addEventListener("click",(function(){n.fetchPictures().then(c)}));
//# sourceMappingURL=index.b1dfe71d.js.map
