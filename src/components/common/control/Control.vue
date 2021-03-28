<template>
  <div class="control">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Control",
});
</script>

<style scoped>
.control {
  height: 50px;
  line-height: 50px;
  display: flex;
}
.center {
  flex: 1;
  border-bottom: 1px solid #a8a8a8;
}
.left {
  width: 15%;
}
.right {
  width: 10%;
  text-align: right;
  border-bottom: 1.5px solid #a8a8a8;
}
</style>