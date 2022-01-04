const searchButton = document.querySelector('.hotel-search__button');
const searchForm = document.querySelector('.search-form');

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-form--opened');
})


