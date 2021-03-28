<template>
  <div class="create-right-img">
    <div class="img1">
      <a href="https://lol.qq.com/v/v2/detail.shtml?docid=7041049256726734165"
        ><img src="~assets/img/lolimg/111111.png" alt=""
      /></a>
    </div>
    <div class="img2">
      <a href="https://lol.qq.com/act/a20160407ymy/index.htm?iSurveyId=1"
        ><img src="~assets/img/lolimg/222222.png" alt=""
      /></a>
    </div>
    <div class="img3">
      <a href="https://lol.qq.com/act/a20160407ymy/index.htm?iSurveyId=1"
        ><img src="~assets/img/lolimg/333333.png" alt=""
      /></a>
    </div>
    <div class="img4">
      <a href="https://lol.qq.com/act/a20160407ymy/index.htm?iSurveyId=1"
        ><img src="~assets/img/lolimg/444444.png" alt=""
      /></a>
    </div>
    <div class="img5" @mouseenter="isShow = true" @mouseleave="isShow = false">
      <img src="~assets/img/lolimg/555555.png" alt="" />
    </div>
    <div
      class="box"
      v-show="isShow"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
      <ul>
        <a href="http://lol.replays.net/"><li>龙珠</li></a>
        <a href="http://lol.replays.net/"><li>lol控</li></a>
        <a href="http://lol.replays.net/"><li>wegame</li></a>
        <a href="http://lol.replays.net/"><li>bilibili</li></a>
        <a href="http://lol.replays.net/"><li>腾讯视频</li></a>
        <a href="http://lol.replays.net/"> <li>爱奇艺</li></a>
        <a href="http://lol.replays.net/"><li>合作媒体</li></a>
        <a href="http://lol.replays.net/"> <li>掌上英雄联盟</li></a>
        <a href="http://lol.replays.net/"><li>cctv1</li></a>
        <a href="http://lol.replays.net/"><li>微信</li></a>
        <a href="http://lol.replays.net/"><li>腾讯</li></a>
        <a href="http://lol.replays.net/"><li>嘤嘤嘤</li></a>
        <a href="http://lol.replays.net/"><li>掌游宝</li></a>
        <a href="http://lol.replays.net/"><li>马化腾</li></a>
        <a href="http://lol.replays.net/"><li>虎牙</li></a>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "CreateRight",
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
.create-right-img {
  position: relative;
}
.img1:hover {
  transform: translate(0, -15px);
}
.img2 {
  position: absolute;
  left: 250px;
  top: 30px;
}
.img3 {
  position: absolute;
  left: 250px;
  top: 130px;
}
.img4 {
  position: absolute;
  left: 250px;
  top: 230px;
}
.img5 {
  position: absolute;
  left: 250px;
  top: 330px;
}
.box {
  width: 227px;
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #fff;
  position: absolute;
  left: 250px;
  top: 380px;
  font-size: 14px;
  color: #989898;
}
.box a {
  text-decoration: none;
  color: #989898;
}
ul {
  margin: 10px;
  padding: 0;
}

li {
  list-style: none;
  line-height: 30px;
}
::-webkit-scrollbar {
  width: 16px;
  background: #fff;
  height: 14px;
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  width: 20px;
  border: 5px solid transparent;
}
/* ::-webkit-scrollbar-track {
  box-shadow: 1px 1px 5px #191a37 inset;
} */
::-webkit-scrollbar-thumb {
  width: 20px;
  min-height: 20px;
  background-clip: content-box;
  box-shadow: 0 0 0 5px #d8d8d8 inset;
}
/* ::-webkit-scrollbar-corner {
   background: #191a37;
} */
</style>