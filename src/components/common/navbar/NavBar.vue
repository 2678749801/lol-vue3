<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center" @click="itemClick"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script >
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "NavBar",
  props: {
    path: String,
  },
  setup() {
    const router = useRouter();
    const itemClick = () => {
      router.push(props.path);
    };
    return {
      itemClick,
    };
  },
});
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 66px;
  height: 66px;
  /* text-align: center; */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left {
  width: 10%;
}
.right {
  width: 33%;
  text-align: center;
}
.center {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>
