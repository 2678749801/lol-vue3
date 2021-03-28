<template>
  <control>
    <template v-slot:left>
      <div class="left-title">最新视频</div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in videoHeadTitle"
          :key="index"
          class="title-item"
          @mouseenter="mouseEnter($event, index)"
          @mouseleave="mouseLeave($event)"
        >
          {{ item }}
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="right-title">
        <a href="https://lol.qq.com/v/v2/index.shtml">
          <div>更多视频-></div>
        </a>
      </div>
    </template>
  </control>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
import Control from "../../common/control/Control.vue";
export default defineComponent({
  components: { Control },
  name: "VideoControl",
  props: {
    videoHeadTitle: {
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
    const methods = {
      mouseEnter($event, index) {
        $event.currentTarget.className = "active";
        context.emit("itemClick", index);
      },
      mouseLeave($event) {
        $event.currentTarget.className = "title-item";
      },
    };
    return {
      ...toRefs(state),
      ...methods,
    };
  },
});
</script>

<style scoped>
.title {
  display: flex;
  height: 50px;
}
.left-title {
  font-size: 26px;
  padding-top: 10px;
  margin-left: 10px;
}
.right-title {
  font-size: 10px;
  padding-top: 10px;
}
.right-title a {
  text-decoration: none;
}
.title-item {
  text-align: left;
  margin-left: 25px;
  padding-top: 10px;
}
.active {
  border-bottom: 2px solid #0099ff;
  text-align: left;
  margin-left: 25px;
  padding-top: 10px;
  color: #0099ff;
}
</style>