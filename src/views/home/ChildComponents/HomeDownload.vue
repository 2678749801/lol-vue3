<template>
  <div id="xiazai">
    <div class="video">
      <video
        src="http://ossweb-img.qq.com/images/lol/v3/btn-download.mp4"
        type="video/mp4"
      ></video>
      <img class="img1" src="~assets/img/xiazai/新手必备.png" alt="" />
      <img class="img2" src="~assets/img/xiazai/领取中心.png" alt="" />
    </div>
    <xia-list />
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
import XiaList from "../../../components/content/download/XiaList";
export default defineComponent({
  components: { XiaList },
  name: "XiaZai",
});
</script>

<style scoped>
#xiazai {
  position: absolute;
  width: 450px;
  height: 340px;
  color: red;
  left: 880px;
  top: 800px;
}
.video video {
  width: 300px;
  height: 180px;
}
.video .img1 {
  position: absolute;
  margin-top: 20px;
  margin-left: 30px;
  height: 60px;
}
.video .img2 {
  margin-left: 30px;
  padding-bottom: 20px;
  height: 60px;
}
</style>