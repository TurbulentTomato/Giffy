const img = document.querySelector('img');
const randomCatBtn = document.querySelector('#random-cat-btn');
const searchBtn = document.querySelector('#search-btn');
const searchEle = document.querySelector('#search-ele');

randomCatBtn.addEventListener('click', randomCat);
searchBtn.addEventListener('click', () => {
  search(searchEle.value);
});

function search(query) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EUuKkAYPJ03I7R9yJuh8hmlpjXLSIQwq&s=${query}`, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}
function randomCat() {
  search('cats');
}

randomCat();
