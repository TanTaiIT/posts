<template>
  <div class="Navbar">
    <div class="Navbar__menu">
      <div
        v-for="(link, index) in links"
        :key="index"
        class="Navbar__menu__item"
      >
        <a
          @click="handleCategorySearch(link.display)"
          class="Navbar__menu__item__link"
          >{{ link.display }}</a
        >
        <!-- <div class="Navbar__menu__item__dropdown">
          <div class="Navbar__menu__item__dropdown__item">
            <div class="Navbar__menu__item__dropdown__item__first">
              <h5>ABC News</h5>
            </div>
          </div>
          <div class="Navbar__menu__item__dropdown__item">
            <div class="Navbar__menu__item__dropdown__item__first">
              <h5>ABC News</h5>
            </div>
          </div>
          <div class="Navbar__menu__item__dropdown__item">
            <div class="Navbar__menu__item__dropdown__item__first">
              <h5>ABC News</h5>
            </div>
          </div>
          <div class="Navbar__menu__item__dropdown__item">
            <div class="Navbar__menu__item__dropdown__item__first">
              <h5>ABC News</h5>
            </div>
          </div>
          <div class="Navbar__menu__item__dropdown__item">
            <div class="Navbar__menu__item__dropdown__item__first">
              <h5>ABC News</h5>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="Navbar__search">
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="handleInputSearch"
        @keyup.enter="handleInputSearch"
      >
        <path
          d="M19.728 18.2925L15.8332 14.3977C15.6574 14.2219 15.4191 14.1242 15.1691 14.1242H14.5323C15.6105 12.7452 16.2512 11.0107 16.2512 9.12388C16.2512 4.63528 12.6142 0.998291 8.12559 0.998291C3.63698 0.998291 0 4.63528 0 9.12388C0 13.6125 3.63698 17.2495 8.12559 17.2495C10.0125 17.2495 11.747 16.6088 13.126 15.5306V16.1674C13.126 16.4174 13.2236 16.6557 13.3994 16.8315L17.2942 20.7263C17.6614 21.0935 18.2552 21.0935 18.6185 20.7263L19.7241 19.6207C20.0913 19.2535 20.0913 18.6597 19.728 18.2925ZM8.12559 14.1242C5.36367 14.1242 3.12523 11.8897 3.12523 9.12388C3.12523 6.36196 5.35977 4.12352 8.12559 4.12352C10.8875 4.12352 13.126 6.35806 13.126 9.12388C13.126 11.8858 10.8914 14.1242 8.12559 14.1242Z"
          fill="white"
        />
      </svg>

      <input
        type="text"
        placeholder="Type search posts"
        v-model.trim="inputSearch"
      />
    </div>
  </div>
</template>

<script>
import Link from "../../data/Data.js";
import { mapActions, mapMutations } from "vuex";
import "./Navbar.scss";
export default {
  data() {
    return {
      inputSearch: "",
      links: Link,
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["getPostBySearch"]),
    ...mapActions(["getPostByCategory"]),
    handleInputSearch() {
      this.getPostBySearch(this.inputSearch.toLowerCase());
    },
    handleCategorySearch(item) {
      this.getPostByCategory(item);
    },
  },
};
</script>
