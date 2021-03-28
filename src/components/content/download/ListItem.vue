<template>
  <div class="listitem">
    <slot name="image"></slot>
    <slot name="wenzi"></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ListItem",
});
</script>

<style scoped>
.listitem {
  width: 20%;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  height: 45px;
}
.listitem img {
  width: 25px;
  padding-top: 10px;
}
.listitem div {
  font-size: 10px;
  color: #282828;
  float: right;
  padding-top: 18px;
  padding-right: 10px;
}
.listitem:hover {
  transform: translate(0, -10px);
}
</style>