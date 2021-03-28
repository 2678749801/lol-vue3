<template>
  <div id="hd">
    <div class="left-hd">
      <hd-control :hdtitle="hdtitle" @itemClick="itemClick" />
      <hd-list :huodong="huodong[currentType]" />
    </div>
    <div class="right-hd"></div>
  </div>
</template>

<script>
import HdControl from "../../../components/content/active/HdControl";
import HdList from "../../../components/content/active/HdList";
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  components: { HdControl, HdList },
  name: "HomeActive",
  props: {
    huodong: {
      type: Object,
      default() {
        return {};
      },
    },
    hdtitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    const state = reactive({
      currentType: "zzjx",
    });
    const methods = {
      itemClick(index) {
        switch (index) {
          case 0:
            state.currentType = "zzjx";
            break;
          case 1:
            state.currentType = "scth";
            break;
          case 2:
            state.currentType = "cqhd";
        }
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
#hd {
  margin-top: 50px;
  height: 350px;
  width: 60%;
  margin-left: 20px;
}
</style>