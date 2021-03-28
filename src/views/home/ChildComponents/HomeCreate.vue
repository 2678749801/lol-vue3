<template>
  <div id="create">
    <div class="create-left">
      <create-control />
      <create-list :create="create" />
    </div>
    <div class="create-right">
      <create-right />
    </div>
  </div>
</template>

<script>
import CreateControl from "../../../components/content/create/CreateControl";
import CreateList from "../../../components/content/create/CreateList";
import CreateRight from "../../../components/content/create/CreateRight";
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  components: { CreateList, CreateControl, CreateRight },
  name: "LolCreate",
  props: {
    create: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<style scoped>
#create {
  width: 100%;
  height: 700px;
}
.create-left {
  width: 60%;
  float: left;
  height: 300px;
}
.create-right {
  width: 36%;

  float: left;
  height: 500px;
  margin-left: 3%;
  margin-top: 115px;
}
</style>