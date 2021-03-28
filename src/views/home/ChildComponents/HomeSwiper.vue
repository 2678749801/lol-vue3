<template>
  <div id="lol-swiper">
    <div class="carousel">
      <!-- 要轮播的内容 -->
      <div
        class="item"
        v-for="(item, inx) in swiper"
        :key="inx"
        v-show="inx === active"
      >
        <div class="item-content">
          <img :src="item.image" alt="" />
        </div>
        <!-- 轮播控件 左右轮播 -->
        <span class="item-left" @click.stop="goLeft(inx)">←</span>
        <span class="item-right" @click.stop="goRight(inx)">→</span>
        <!-- 轮播控件 小圆点 -->
        <div class="item-control">
          <div
            class="item-inx"
            v-for="(v, i) in swiper.length"
            :key="i"
            :style="active === i ? 'background:#222;' : ''"
            @click="changeInx(i)"
          ></div>
        </div>
      </div>
    </div>
    <div class="swiper-title">
      <div
        v-for="(item, index) in swiper"
        :key="index"
        class="swiper-title-item"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "HomeSwiper",
  props: {
    swiper: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props) {
    const data = reactive({
      items: ["轮播1", "轮播2", "轮播3"],
      active: 0,
      // 左切换
      goLeft: (inx) => {
        data.active = inx > 0 ? --inx : props.swiper.length - 1;
      },
      // 右切换
      goRight: (inx) => {
        data.active = inx < props.swiper.length - 1 ? ++inx : 0;
      },
      // 小圆点切换
      changeInx: (i) => {
        data.active = i;
      },
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped >
#lol-swiper {
  width: 60%;
  margin-top: 30px;
  margin-left: 20px;
}
.item {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: both;
  width: 100%;
  height: 100%;
  position: relative;
}
.item-inx {
  cursor: pointer;
  width: 16px;
  height: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin: 0 4px;
}
.item-content {
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}
span {
  padding: 4px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  top: 46%;
  cursor: pointer;
  z-index: 99;
}
.item-left {
  position: absolute;
  left: 10px;
}
.item-right {
  position: absolute;
  right: 10px;
}
.item-control {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
}
.swiper-title {
  height: 30px;
  font-size: 13px;
  /* width: 60%; */
  display: flex;
  background-color: #e6e6fa;
  margin-left: 20px;
}

.swiper-title-item {
  margin-left: 20px;
  flex: 1;
  text-align: center;
  margin-top: 10px;
  color: #696969;
}
</style>