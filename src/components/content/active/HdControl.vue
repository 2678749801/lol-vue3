<template>
  <div id="hd-control">
    <control>
      <template v-slot:left>
        <div class="ltitle">热门活动</div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in hdtitle"
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
        <div class="rtitle">
          <a href="https://lol.qq.com/v/v2/index.shtml"><div>更多-></div></a>
        </div>
      </template>
    </control>
  </div>
</template>

<script>
import Control from "../../common/control/Control";
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  components: { Control },
  name: "HdControl",
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

  props: {
    hdtitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<style scoped>
#hd-control {
  color: #282828;
}

.title {
  display: flex;
  height: 50px;
}
.title-item {
  /* flex: 1; */
  text-align: left;
  margin-left: 25px;
  padding-top: 10px;
}
.ltitle {
  font-size: 26px;
  padding-top: 10px;
  margin-left: 10px;
}
.rtitle {
  font-size: 10px;
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