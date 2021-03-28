<template>
  <div id="lol-news">
    <news-control :title="title" @tabClick="tablClick" ref="newsControl" />
    <news-item :news="news[currentType]" />
  </div>
</template>

<script>
import NewsControl from "components/content/news/NewsControl";
import NewsItem from "components/content/news/NewsItem";
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "LolNews",
  components: {
    NewsControl,
    NewsItem,
  },
  props: {
    news: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const state = reactive({
      title: ["综合", "公告", "赛事", "攻略", "社区"],
      currentType: "zonghe",
      currentIndex: 0,
    });
    const newsControl = ref("");
    const tablClick = (index) => {
      switch (index) {
        case 0:
          state.currentType = "zonghe";
          break;
        case 1:
          state.currentType = "gonggao";
          break;
        case 2:
          state.currentType = "saishi";
          break;
        case 3:
          state.currentType = "gonglue";
          break;
        case 4:
          state.currentType = "shequ";
      }
      newsControl.value.currentIndex = index;
    };
    return {
      ...toRefs(state),
      tablClick,
      newsControl,
    };
  },
});
</script>

<style scoped>
#lol-news {
  /* position: absolute;
  width: 40%;
  height: 640px;
  color: red;
  left: 40%;
  top: 40%; */
  position: absolute;
  width: 450px;
  /* width: 40%; */
  height: 340px;
  color: red;
  left: 880px;
  top: 380px;
}
</style>