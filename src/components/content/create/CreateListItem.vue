<template>
  <div
    class="create-list-item"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <a :href="createItem.link">
      <img :src="createItem.image" :alt="createItem.title" />
    </a>
    <div class="titlt-count" v-show="isShow">
      <div class="title">{{ createItem.title }}</div>
      <div class="count">喜欢{{ createItem.count }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "CreateListItem",
  props: {
    createItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const state = reactive({
      isShow: false,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
.create-list-item {
  width: 23%;
  margin-top: 10px;
  position: relative;
}
.create-list-item:hover {
  transform: scale(1.1);
}
.create-list-item img {
  width: 100%;
}
.zan img {
  width: 30px;
  height: 30px;
}
.titlt-count {
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 0px;
  background-color: black;
  opacity: 0.7;
  color: #fff;
  font-size: 13px;
}
.titlt-count .count {
  float: right;
  padding-top: 40px;
  font-size: 10px;
}
</style>