import Vue from "vue";
import Vuex from "vuex";
import Post from "./modules/Post.js";
Vue.use(Vuex);

const storeData = {
  modules: {
    Post,
  },
};

const store = new Vuex.Store(storeData);

export default store;
