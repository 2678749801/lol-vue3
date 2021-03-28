<template>
  <div id="hd">
    <div class="left-hd">
    <hd-control :hdtitle="hdtitle" @itemClick="itemClick" />
    <hd-list :huodong="huodong[currentType]"/>
    </div>
    <div class="right-hd">

    </div>
  </div>
</template>

<script>
import HdControl from './HdControl.vue'
import HdList from './HdList.vue'
export default {
  components: { HdControl, HdList },
  name:'Hd',
  props:{
    huodong:{
      type:Object,
      default(){
        return{}
      }
    },
    hdtitle:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {
      currentType:'zzjx'
    }
  },
  methods: {
    itemClick(index){
      switch (index) {
        case 0:
          this.currentType='zzjx'
          break
        case 1:
          this.currentType='scth'
          break
        case 2:
          this.currentType='cqhd'
          
      }
    },
    
  },
}
</script>

<style scoped>
#hd{
  margin-top: 50px;
  height: 350px;
  width: 60%;
  margin-left: 20px;
}
</style>