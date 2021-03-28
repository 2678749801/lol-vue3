<template>
  <div class="select-list-item">
    <a href="">
      <ul>
        <li v-for="item in navbarItem">{{ item }}</li>
      </ul>
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SelectItem",
  props: {
    navbarItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<style scoped>
.select-list-item {
  width: 100%;
  opacity: 0.8;
  background-color: #202020;
  padding-left: 20px;
}
.select-list-item a {
  /* 超链接下划线取消 并且重新弄颜色 */
  text-decoration: none;
  color: #fff;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  line-height: 40px;
  font-size: 12px;
  text-align: left;
}
</style>