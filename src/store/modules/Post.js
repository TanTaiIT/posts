import axios from "@/api/server";
import { API_KEY } from "@/constant/constant";
const TodoModule = {
  state: {
    postList: [],
    loading: false,
  },
  mutations: {
    allPost(state, payload) {
      state.postList = payload;
    },
    getPostBySearch(state, payload) {
      const list = state.postList.filter((item) =>
        item.title.toLowerCase().includes(payload)
      );
      state.postList = list;
    },
    getPostCategory(state, payload) {
      state.postList = payload;
    },
  },
  getters: {
    allPosts: (state) => state.postList,
  },
  actions: {
    async getAllProduct({ commit }) {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-10-10&sortBy=popularity&apiKey=${API_KEY}`
      );
      commit("allPost", response.data.articles);
    },
    async getPostByCategory({ commit }, category) {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a7cb2d7d7fb945bba65cf5871d5a6303`
      );
      commit("getPostCategory", response.data.articles);
    },
  },
};

export default TodoModule;
