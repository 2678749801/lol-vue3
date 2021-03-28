<template>
  <div id="select1">
    <div class="select1">
      <select-item
        v-for="(item, index) in navbar"
        :key="index"
        :navbar-item="item"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SelectItem from "./SelectItem.vue";
export default defineComponent({
  components: { SelectItem },
  name: "Select1",
  props: {
    navbar: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
</script>

<style scoped>
#select1 {
  width: 100%;
  opacity: 0.75;
  background-color: #202020;
}
.select1 {
  display: flex;
  margin-left: 160px;
  width: 57%;
}
</style>