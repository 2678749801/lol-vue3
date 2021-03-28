<template>
  <div class="hd-item">
    <a :href="huodongitem.link">
     <img :src="huodongitem.image" alt="">
      <div class="hd-info">
      <div class="title">{{huodongitem.title}}</div>
      <div class="overtime">{{huodongitem.overtime}}</div>
      </div>
    </a>
  </div>
 
</template>

<script>
export default {
  name:'HdListItem',
  props:{
    huodongitem:{
      type:Object,
      default(){
        return{}
      }
    },
  }
}
</script>

<style scoped>
.hd-item{
  width: 25%;
  position: relative;
  background-color: #fff;
  text-align: center;
  margin-left: 1%;
  margin-right: 1%;
  
}
.hd-item:hover{
   transform:translate(0,-10px);
}
.hd-item img{
  width: 100%;
  text-align: center;
}
.title{
  margin-left: 5px;
  margin-top: 5px;
  text-align: left;
  color:#282828;
  font-size: 13px;
}
.overtime{
  margin-top: 30px;
  text-align: left;
  margin-left: 5px;
  color: #0099FF;
  font-size: 10px;
  margin-bottom: 5px;
}
a:link { 
text-decoration: none;

}

</style>