<template>
  <div class="newsItem">
    <div
      v-for="(item, index) in news"
      :key="index"
      class="news-item-item"
      @mouseenter="mouseEnter($event)"
      @mouseleave="mouseLeave($event)"
    >
      <a :href="item.link">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "NewsItem",
  props: {
    news: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props) {
    const mouseEnter = ($event) => {
      $event.currentTarget.className = "isActive";
    };
    const mouseLeave = ($event) => {
      $event.currentTarget.className = "news-item-item";
    };
    return {
      mouseEnter,
      mouseLeave,
    };
  },
});
</script>

<style scoped>
.newsItem {
  height: 250px;
}
.news-item-item {
  height: 35px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  padding-top: 15px;
}
.news-item-item a {
  color: dimgrey;
}
a:link {
  text-decoration: none;
}
.isActive {
  height: 35px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  padding-top: 15px;
}
.isActive a {
  color: #0099ff;
}
</style>