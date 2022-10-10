<template>
  <div class="postList">
    <div class="postList__contain" @click="handleClick">
      <h1 v-if="allPosts.length === 0">...loading</h1>
      <post-item
        v-else
        v-for="(item, index) in allPosts"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import "./PostList.scss";
import PostItem from "./Post-item/PostItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    PostItem,
  },

  data() {
    return {};
  },

  computed: {
    ...mapActions(["getAllProduct"]),
    ...mapGetters(["allPosts"]),
  },

  methods: {
    handleClick() {},
  },

  created() {
    this.getAllProduct;
  },
};
</script>
