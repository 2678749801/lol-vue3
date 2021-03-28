<template>
  <div id="lol-video">
    <div class="lol-left-video">
      <video-control :videoHeadTitle="videoHeadTitle" @itemClick="itemClick" />
      <video-list :video="video[currentType]" />
    </div>
    <div class="lol-right-video">
      <img src="~assets/img/lolimg/999.png" alt="" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import VideoControl from "../../../components/content/video/VideoControl";
import VideoList from "../../../components/content/video/VideoList";
export default {
  components: { VideoControl, VideoList },
  name: "LolVideo",
  props: {
    video: {
      type: Object,
      default() {
        return {};
      },
    },
    videoHeadTitle: {
      type: Array,
      default() {
        return [];
      },
    },
    swipe: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props) {
    const state = reactive({
      currentType: "tuijian",
    });
    const methods = {
      itemClick(index) {
        switch (index) {
          case 0:
            state.currentType = "tuijian";
            break;
          case 1:
            state.currentType = "guanfang";
            break;
          case 2:
            state.currentType = "yule";
            break;
          case 3:
            state.currentType = "saishi";
            break;
          case 4:
            state.currentType = "yunding";
            break;
          case 5:
            state.currentType = "jiaoxue";
        }
      },
    };
    return {
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>

<style scoped>
#lol-video {
  /* width: 100%; */
  height: 590px;
  margin-top: 60px;
  color: #787878;
  background-color: #e0e0e0;
}
.lol-left-video {
  width: 60%;
  height: 460px;
  float: left;
  margin-left: 1.5%;
}
.lol-right-video {
  width: 35%;
  height: 300px;
  background-color: #fff;
  float: left;
  margin-left: 3%;
}
.lol-right-video img {
  width: 100%;
}
</style>