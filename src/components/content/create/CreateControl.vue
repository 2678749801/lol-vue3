<template>
  <div class="control">
    <div class="left-title">FANART创作馆</div>
    <div class="right-title">
      <a href="https://tr.lol.qq.com/index.html"><p>更多-></p></a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
import Control from "../../common/control/Control.vue";
export default defineComponent({
  name: "CreateControl",
  components: {
    Control,
  },
});
</script>

    
<style scoped>
.control {
  height: 120px;
}
.left-title {
  font-size: 25px;
  padding-top: 60px;
  float: left;
  padding-left: 20px;
}
.right-title a {
  text-decoration: none;
  color: #808080;
  font-size: 8px;
  float: right;
  padding-top: 60px;
}
</style>