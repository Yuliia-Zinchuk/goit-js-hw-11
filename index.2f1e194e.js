!function(){var e=document.querySelector(".search-form");document.querySelector(".gallery"),Document.querySelector('[data-action="load-more"]');e.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.searchQuery.value,n="https://pixabay.com/api/?key=".concat("29884579-b0e414ddacb31e478cf055115","&q=").concat(t);fetch(n).then((function(e){return e.json()})).then(console.log())})),e.addEventListener("click",(function(){var e="https://pixabay.com/api/?key=".concat(API_KEY,"&q=").concat(searchQuery);fetch(e).then((function(e){return e.json()})).then(console.log())}))}();
//# sourceMappingURL=index.2f1e194e.js.map