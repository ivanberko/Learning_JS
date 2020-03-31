import axios from 'axios';

const baseUrl = 'http://newsapi.org/v2/everything';
const apiKey = 'c52712e4315549a1bd757edf4040823b';

export default {
  page: 1,
  query: '',

  axiosArticles() {
    const requestParams = `?q=${this.query}&apiKey=${apiKey}&page=${this.page}&pageSize=15`;
    return axios.get(`${baseUrl}${requestParams}`).then((res) => {
      this.incrementPage();
      return res.data.articles;
    });
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage(){
    this.page =1
  }
};
