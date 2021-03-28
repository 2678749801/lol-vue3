<template>
  <div id="home">
    <home-nav-bar :navbar="navbar" />
    <home-swiper :swiper="swiper" />
    <home-news :news="news" />
    <home-active :huodong="huodong" :hdtitle="hdtitle" />
    <home-download />
    <home-img />
    <home-video :video="video" :videoHeadTitle="videoHeadTitle" />
    <home-create :create="create" />
    <img src="~assets/img/lolimg/bottom.png" alt="" />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { getHomeMultidata } from "network/home";
import HomeNavBar from "./ChildComponents/HomeNavBar";
import HomeSwiper from "./ChildComponents/HomeSwiper.vue";
import HomeNews from "./ChildComponents/HomeNews.vue";
import HomeActive from "./ChildComponents/HomeActive.vue";
import HomeDownload from "./ChildComponents/HomeDownload.vue";
import HomeVideo from "./ChildComponents/HomeVideo.vue";
import HomeImg from "./ChildComponents/HomeImg.vue";
import HomeCreate from "./ChildComponents/HomeCreate.vue";
export default defineComponent({
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeNews,
    HomeActive,
    HomeDownload,
    HomeVideo,
    HomeImg,
    HomeCreate,
  },
  name: "Home",
  setup() {
    const state = reactive({
      navbar: {
        ziliao: [],
        shangcheng: [],
        shequ: [],
        saishi: [],
        zizhu: [],
      },
      swiper: [],
      name: "111",
      news: {
        zonghe: [],
        gonggao: [],
        saishi: [],
        gonglue: [],
        shequ: [],
      },
      huodong: {
        zzjx: [],
        scth: [],
        cqhd: [],
      },
      video: {
        tuijian: [],
        guanfang: [],
        yule: [],
        saishi: [],
        yunding: [],
        jiaoxue: [],
      },
      title: ["综合", "公告", "赛事", "攻略", "社区"],
      currentType: "zonghe",
      currentIndex: 0,
      hdtitle: [],
      videoHeadTitle: [],
      create: [],
    });
    getHomeMultidata().then((res) => {
      state.swiper = res.swiper;
      state.navbar.ziliao.push(...res.navbar.ziliao);
      state.navbar.shangcheng.push(...res.navbar.shangcheng);
      state.navbar.shequ.push(...res.navbar.shequ);
      state.navbar.saishi.push(...res.navbar.saishi);
      state.navbar.zizhu.push(...res.navbar.zizhu);
      state.news.zonghe.push(...res.news.zonghe);
      state.news.gonggao.push(...res.news.gonggao);
      state.news.saishi.push(...res.news.saishi);
      state.news.gonglue.push(...res.news.gonglue);
      state.news.shequ.push(...res.news.shequ);
      state.huodong.zzjx.push(...res.huodong.zzjx);
      state.huodong.scth.push(...res.huodong.scth);
      state.huodong.cqhd.push(...res.huodong.cqhd);
      state.hdtitle = res.huodong.hdtitle;
      state.video.tuijian.push(...res.shipin.tuijian);
      state.video.guanfang.push(...res.shipin.guanfang);
      state.video.yule.push(...res.shipin.yule);
      state.video.saishi.push(...res.shipin.saishi);
      state.video.yunding.push(...res.shipin.yunding);
      state.video.jiaoxue.push(...res.shipin.jiaoxue);
      state.videoHeadTitle = res.shipin.hdtitle;
      state.create = res.create;
      console.log(state.swiper);
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
#home {
  position: relative;
}
</style>
