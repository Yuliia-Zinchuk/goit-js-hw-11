!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fetchPictures",value:function(){var e=this,t="https://pixabay.com/api/?key=".concat("29884579-b0e414ddacb31e478cf055115","&q=").concat(this.searchQuery,"&").concat("image_type=photo&orientation=horizontal&safesearch=true","&per_page=5&page=").concat(this.page);return fetch(t).then((function(e){return e.json()})).then((function(t){return e.incrementPage(),console.log("после запроса",e),t.hits}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),r}(),c=document.querySelector(".search-form"),o=document.querySelector(".gallery"),u=document.querySelector('[data-action="load-more"]'),i=new a;function s(e){console.log(e);var t=e.map((function(e){return'<li>\n          <img class="picture" src="'.concat(e.largeImageURL,'" alt="flag" width="60">\n                  <h3>').concat(e.likes,"</h3>\n\n                </li>\n            ")})).join("");o.insertAdjacentHTML("beforeend",t)}console.log(i),c.addEventListener("submit",(function(e){e.preventDefault(),i.searchQuery=e.currentTarget.elements.searchQuery.value,i.resetPage(),i.fetchPictures().then(s)})),u.addEventListener("click",(function(){i.fetchPictures().then(s)}))}();
//# sourceMappingURL=index.547b866e.js.map
