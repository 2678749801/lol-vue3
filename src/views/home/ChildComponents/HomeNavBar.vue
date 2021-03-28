<template>
  <div id="lolnavbar">
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <img
          class="lolimg"
          src="http://game.gtimg.cn/images/lol/v3/logo-public.png"
          alt=""
        />
      </template>
      <template v-slot:center>
        <div
          class="title"
          @mouseenter="issShow = true"
          @mouseleave="issShow = false"
        >
          <div v-for="item in titles" class="title-item">
            {{ item.btitle }}
            <div class="titlt-item-div">{{ item.wenzi }}</div>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div class="right-nav">
          <img src="~assets/img/lolnavbar/sousuo.png" alt="" />
          <img
            class="phone"
            src="~assets/img/lolnavbar/shouji.png"
            alt=""
            @mouseenter="isShow = true"
            @mouseleave="isShow = false"
          />
          <img src="~assets/img/lolnavbar/denglu.png" alt="" />
          <p>亲爱的召唤师，欢迎登录</p>
        </div>
      </template>
    </nav-bar>
    <div class="erweima" v-show="isShow">
      <img src="~assets/img/lolnavbar/shoujierweima.png" alt="" />
    </div>
    <select1
      :navbar="navbar"
      v-show="issShow"
      @mouseenter.native="issShow = true"
      @mouseleave.native="issShow = false"
    />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
import NavBar from "../../../components/common/navbar/NavBar.vue";
import Select1 from "../../../components/common/select/Select1.vue";
export default defineComponent({
  components: { NavBar, Select1 },
  props: {
    navbar: {
      type: Object,
      default: {},
    },
  },
  setup() {
    const state = reactive({
      titles: [
        {
          btitle: "游戏资料",
          wenzi: "GAME INFO",
        },
        {
          btitle: "商城/合作",
          wenzi: "STORE",
        },
        {
          btitle: "社区互动",
          wenzi: "COMMUNITY",
        },
        {
          btitle: "赛事官网",
          wenzi: "ESPORTS",
        },
        {
          btitle: "自助社区",
          wenzi: "SYSTEM",
        },
      ],
      isShow: false,
      issShow: false,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style  scoped>
#lolnavbar {
  height: 360px;
  background-image: url(http://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_86cdf7f4bf5c9ac8eabdceb85c97bab8/0);
  background-repeat: no-repeat;
  color: #fff;
  background-position: 50% 0px;
  width: 100%;
}
.nav-bar {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgb(14, 13, 13)),
    to(#9e8e8e)
  ); /*谷歌*/
  opacity: 0.8;
}
.lolimg {
  padding-top: 10px;
}
.title {
  display: flex;
  height: 66px;
  font-size: 18px;
}
.title-item {
  flex: 1;
  color: #f8f8f8;
}
.titlt-item-div {
  line-height: 10px;
  font-size: 15px;
  color: #e8e8e8;
}
.right-nav {
  display: flex;
  margin-top: -3px;
}
.right-nav img {
  width: 30px;
  height: 30px;
  padding: 25px;
}
.right-nav .phone {
  width: 20px;
  height: 30px;
}
.right-nav p {
  margin-top: 5px;
}
.erweima {
  position: absolute;
  top: 66px;
  left: 970px;
}
.erweima img {
  border-radius: 15px;
}
</style>