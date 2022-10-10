<template>
  <div class="postList__contain__item">
    <div class="postList__contain__item--img">
      <a :href="item.url" target="_blank"
        ><img :src="item.urlToImage" :alt="item.title"
      /></a>
    </div>
    <div class="postList__contain__item__content">
      <p>
        publish at: <span class="time">{{ item.publishedAt }}</span>
      </p>
      <h5>{{ item.title }}</h5>
      <p class="description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import "./PostItem.scss";
export default {
  props: {
    item: [],
  },
};
</script>
