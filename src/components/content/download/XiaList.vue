<template>
  <div class="list">
    <div class="listitem">
      <img src="~assets/img/xiazai/客服.png" alt="" />
      <div>客服中心</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/lol宇宙.png" alt="" />
      <div>lol宇宙</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/绑定微信.png" alt="" />
      <div>绑定微信</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/峡谷之巅.png" alt="" />
      <div>峡谷之巅</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/游戏资料.png" alt="" />
      <div>游戏资料</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/云顶之弈.png" alt="" />
      <div>云顶之弈</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/秩序殿堂.png" alt="" />
      <div>秩序殿堂</div>
    </div>
    <div class="listitem">
      <img src="~assets/img/xiazai/资料中心.png" alt="" />
      <div>资料中心</div>
    </div>
  </div>
</template>
<script>
import ListItem from "../../../components/content/download/ListItem";
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  components: { ListItem },
  name: "XiaList",
});
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
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