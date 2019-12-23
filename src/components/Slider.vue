<template>
  <div class="slider">
    <!-- slider title -->
    <h2 class="slider-title">Skills & Tools</h2>
    <!-- ----------- -->
    <div class="slider-wrap">
      <div class="slider-items" v-for="e in items" :key="e.name">
        <div class="slider-items-wrap">
          <img :src="e.url">
        </div>
      </div>
    </div>
    <div class='slider-btn-left' @click="calChange(-1)" v-if="now>0"><</div>
    <div class="slider-btn">
      <div class="slider-btn-round" @click='goChange(i)' v-for="(e,i) in items" :key='e.name'>
        <span></span>
      </div>
    </div>
    <div class='slider-btn-right' @click="calChange(1)" v-if='now<items.length-1'>></div>
  </div>
</template>

<style lang="scss" scoped>
  .slider{
    background-color: map-get($color,slider);
    text-align: center;
    position: relative;
    @include flex(center,center,col);
    height: 250px;
    &-title{
      position: absolute;
      top: 20px;
    }
    &-wrap{
      display: flex;
    }
    &-items{
      padding: 10px 20px;
      display: inline-block;
      background-color: rgba(map-get($color,hover),.5);
      margin: 0 20px;
      &-wrap{
        width: 80px;
        height: 80px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
    }
    &-btn-left,&-btn-right{
        width: 30px;
        height: 30px;
        background-color: #fff;
        position: absolute;
        transform: translateY(-50%);
        cursor: pointer;
    }
    &-btn-left{
      left: 0;
      top: 50%;
    }
    &-btn-right{
      right: 0;
      top: 50%;
    }
    &-btn{
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 10px;
      &-round{
        padding: 5px;
        display: inline-block;
        cursor: pointer;
        >span{
          display: inline-block;
          width: 15px;
          height: 15px;
          background-color: rgba(map-get($color,hover),.5);
          border-radius: 50%;
        }
      }
    }
  }
</style>

<script>
export default {
  props:{
    items:{
      required: true
    },
    now:{
      required: true
    }
  },
  data(){
    return{
    }
  },
  methods:{
    calChange(x){
      x += this.now;
      this.goChange(x);
    },
    goChange(x){
      this.$emit("runChange",x)
    }
  }
};
</script>
