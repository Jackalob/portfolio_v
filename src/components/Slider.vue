<template>
  <div class="slider">
    <!-- slider title -->
    <h2 class="slider-title">Skills & Tools</h2>
    <!-- ----------- -->
    <div class="slider-wrap" :style="{transform: 'translateX(' + (-170*now) +'px)'}">
      <div class="slider-items" v-for="(e,i) in items" :key="e.name" :class="[i===now?'slider-now':'']" :data-lang='e.name' @click='goChange(i)'>
        <div class="slider-items-wrap">
          <img :src="e.url" draggable="false">
        </div>
      </div>
    </div>
    <div class='slider-btn-left' @click="calChange(-1)" v-if="now>0"></div>
    <div class="slider-btn">
      <div class="slider-btn-round" @click='goChange(i)' v-for="(e,i) in items" :key='e.name' :class="[i===now ? 'slider-btn-now':'']">
        <span></span>
      </div>
    </div>
    <div class='slider-btn-right' @click="calChange(1)" v-if='now<items.length-1'></div>
  </div>
</template>

<style lang="scss" scoped>
  .slider{
    background-color: map-get($color,slider);
    text-align: center;
    position: relative;
    @include flex(center,center,col);
    height: 250px;
    overflow: hidden;
    &-title{
      position: absolute;
      top: 10px;
      font-size: 36px;
      color: map-get($map: $color, $key: tertiary);
      font-family: "Courgette", "Noto Sans", "Noto Sans TC", sans-serif;
    }
    &-wrap{
      display: flex;
      position: absolute;
      transition: transform .3s ;
      left: 41.5%;
    }
    &-items{
      width: 130px;
      display: inline-block;
      background-color: rgba(map-get($color,hover),.5);
      margin: 0 20px;
      border-radius: 25px;
      transition: transform .3s ease-in-out;
      cursor: pointer;
      user-select: none;
      position: relative;
      @include pseudo(){
        content: attr(data-lang);
        bottom: -23px;
        left: 50%;
        padding: 2px 5px;
        background-color: rgba(0,0,0,.5);
        color: map-get($map: $color, $key: tertiary);
        border-radius: 4px;
        font-size: 12px;
        transform: translateX(-50%);
        display: none;
      }
      &:hover::before{
        display: block;
      }
      &-wrap{
        width: 80px;
        height: 80px;
        margin: 0 auto;
        padding: 10px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
    }
    &-btn-left,&-btn-right{
      width: 30px;
      height: 30px;
      background-color: rgba(map-get($map: $color, $key: primary),.7);
      position: absolute;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all .3s;
      @include pseudo(){
        width: 15px;
        height: 15px;
        border-top: 2px solid map-get($map: $color, $key: tertiary);
        border-right: 2px solid map-get($map: $color, $key: tertiary);
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-btn-left{
      left: -100px;
      top: 50%;
      &::before{
        transform: translateY(-50%) rotate(-135deg);
        left: 35%;
      }
    }
    &-btn-right{
      right: -100px;
      top: 50%;
      &::before{
        transform: translateY(-50%) rotate(45deg);
        left: 10%;
      }
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
          width: 12px;
          height: 12px;
          background-color: rgba(map-get($color,hover),.5);
          border-radius: 50%;
        }
      }
    }
    &-now{
      transform: scale(1.3);
      background-color: rgba(map-get($map: $color, $key: slider_now),.7);  
    }
    &-btn-now{
      >span{
        background-color: rgba(map-get($map: $color, $key: slider_now),.7); 
      }
    }
    &:hover{
      .slider-btn-left{
        left: 0;
      }
      .slider-btn-right{
        right: 0;
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
