<template>
  <div>
    <div class="lolimg">
      <a href="https://lol.qq.com/act/a20201023seraphine/index.html">
        <div
          class="img1"
          @mouseenter="mouseEnter($event)"
          @mouseleave="mouseLeave($event)"
        >
          <img class="img11" src="~assets/img/lolimg/1.png" alt="" />
          <img class="img111" src="~assets/img/lolimg/1.1.png" alt="" />
        </div>
      </a>
      <div @mouseenter="isShow = true" @mouseleave="isShow = false">
        <img class="img2" src="~assets/img/lolimg/2.png" alt="" />
      </div>
      <div>
        <div class="img3"><img src="~assets/img/lolimg/3.png" alt="" /></div>
        <div class="img4"><img src="~assets/img/lolimg/4.png" alt="" /></div>
        <div class="img5"><img src="~assets/img/lolimg/5.png" alt="" /></div>
        <div class="img6"><img src="~assets/img/lolimg/6.png" alt="" /></div>
      </div>
    </div>
    <div
      class="bimg"
      v-show="isShow"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/111.png" alt="" />
      </a>
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/222.png" alt="" />
      </a>
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/333.png" alt="" />
      </a>
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/444.png" alt="" />
      </a>
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/555.png" alt="" />
      </a>
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/666.png" alt="" />
      </a>
      <a
        href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433"
      >
        <img src="~assets/img/lolimg/777.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";
export default defineComponent({
  name: "LolImg",
  setup() {
    const state = reactive({
      isShow: false,
    });
    const methods = {
      mouseEnter($event) {
        $event.currentTarget.className = "active";
      },
      mouseLeave($event) {
        $event.currentTarget.className = ".img1";
      },
    };
    return {
      ...toRefs(state),
      ...methods,
    };
  },
});
</script>

<style scoped>
.lolimg {
  margin-left: 20px;
  /* width: 100%; */
  display: flex;
}

.active .img111 {
  display: inline;
}
.active .img11 {
  display: none;
}
.img111 {
  display: none;
}
.img2 {
  margin-left: 35px;
  height: auto;
}
.img3 {
  margin-left: 50px;
}
.img4 {
  margin-left: 50px;
  margin-top: 10px;
}
.img5 {
  position: absolute;
  right: 5px;
  top: 1165px;
  z-index: 8;
}
.img6 {
  position: absolute;
  right: 5px;
  margin-top: -60px;
}
.bimg {
  height: 200px;
  width: 100%;
  padding-top: 30px;
}
.bimg img {
  margin-left: 15px;
}
</style>