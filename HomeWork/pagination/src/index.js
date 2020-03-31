import './style.css';
import axios from 'axios';
import newsService from './utils/news-service';
import articleListItemTemp from './templates/article-list-item.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('#article-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearList();

  newsService.resetPage();
  newsService.searchQuery = input.value;

  axiosArticles();

  input.value = '';
}

function loadMoreBtnHandler() {
  axiosArticles();
}

function axiosArticles() {
  newsService
    .axiosArticles()
    .then(isertListItem)
    .catch((error) => console.warn(error));
}

function isertListItem(item) {
  const markup = articleListItemTemp(item);
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

function clearList() {
  refs.articleList.innerHTML = '';
}
