<template>
  <div class="head-title">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="head-title-item"
      @click="spanClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
    <!-- <div v-for="item in bigtitles"></div> -->
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "NewsControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props, context) {
    const state = reactive({
      currentIndex: 0,
    });
    const spanClick = (index) => {
      context.emit("tabClick", index);
    };
    return {
      ...toRefs(state),
      spanClick,
    };
  },
});
</script>

<style scoped>
.head-title {
  height: 60px;
  width: 100%;
  display: flex;
  text-align: center;
}
.head-title-item {
  flex: 1;
  margin-left: 40px;
  font-size: 20px;
  color: darkgrey;
}
.active {
  color: #0099ff;
  font-weight: bold;
}
.active span {
  border-bottom: 2px solid #0099ff;
}
</style>