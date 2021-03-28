<template>
  <div class="list-item">
    <a :href="videoItem.link">
      <img :src="videoItem.image" alt="" />
      <div class="video-time">{{ videoItem.videoTime }}</div>
      <div class="video-title">{{ videoItem.title }}</div>
      <div class="video-bfcount">{{ videoItem.bfcount }}</div>
      <div class="video-date">{{ videoItem.date }}</div>
    </a>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "VideoListItem",
  props: {
    videoItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
</script>

<style scoped>
.list-item {
  width: 23%;
  position: relative;
  color: #282828;
  margin-top: 20px;
  background-color: #e8e8e8;
}
.list-item a {
  text-decoration: none;
}
.list-item img {
  width: 100%;
  height: 60%;
  border-radius: 1px;
}
.video-time {
  position: relative;
  text-align: right;
  bottom: 20px;
  z-index: 9;
  color: #fff;
  font-size: 10px;
}
.video-title {
  color: #282828;
  font-size: 13px;
  overflow: hidden;
  height: 50px;
}
.video-bfcount {
  float: left;
  text-align: left;
  color: #707070;
  font-size: 10px;
  padding-bottom: 11px;
}
.video-date {
  float: right;

  color: #707070;
  padding-left: 10px;
  font-size: 10px;
}
</style>