<template>
  <v-touch class="slider" v-on:swipeleft="calChange(1)" v-on:swiperight="calChange(-1)">
    <!-- <h2 class="slider-title">Skills & Tools</h2> -->
    <div class="slider-wrap" :style="{transform: 'translate(' + (-170*now) +'px,-50%)'}">
      <div class="slider-items" v-for="(e,i) in items" :key="e.name" :class="[i===now?'slider-now':'']" :data-lang='e.name' @click='goChange(i)'>
        <div class="slider-items-wrap">
          <img :src="e.url" draggable="false">
        </div>
      </div>
    </div>
    <transition name="goleft">
    <div class='slider-btn-left' @click="calChange(-1)" v-if="now>0"></div>
    </transition>
    <div class="slider-btn">
      <div class="slider-btn-round" @click='goChange(i)' v-for="(e,i) in items" :key='e.name' :class="[i===now ? 'slider-btn-now':'']">
        <span></span>
      </div>
    </div>
    <transition name='goright'>
    <div class='slider-btn-right' @click="calChange(1)" v-if='now<items.length-1'></div>
    </transition>
    <ul class="bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </v-touch>
</template>

<style lang="scss" scoped>
  .slider{
    // background-color: map-get($color,slider);
    background: linear-gradient(45deg, map-get($color,slider),map-get($color,accent2));
    text-align: center;
    position: relative;
    /* @include flex(center,center,col); */
    height: 180px;
    overflow: hidden;
    @include media(tablet){
      height: 140px;
    }
    // &-title{
    //   position: absolute;
    //   top: 10px;
    //   font-size: 36px;
    //   color: map-get($map: $color, $key: tertiary);
    //   font-family: "Courgette", "Noto Sans", "Noto Sans TC", sans-serif;
    // }
    &-wrap{
      display: flex;
      position: absolute;
      transition: transform .3s ;
      //50% 扣掉一格的(寬度+margin)/2
      left: calc(50% - 85px);
      top:50%;
      z-index: 1;
      @include media(tablet){
        top:45%;
      }
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
        top:  -25px;
        left: 50%;
        padding: 2px 5px;
        background-color: rgba(0,0,0,.5);
        color: map-get($map: $color, $key: tertiary);
        border-radius: 4px;
        font-size: 12px;
        transform: translateX(-50%);
        display: none;
        @include media(tablet){
          top: -10px;
        }
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
      z-index: 1;
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
        left: 20%;
      }
    }
    &-btn{
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 4px;
      z-index: 1;
      @include media(tablet){
        bottom: 0;
      }
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
      @include media(tablet){
        transform:scale(1.15);
      }  
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
    @at-root .bubbles{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      transform: translateZ(0);
      >li{
        position: absolute;
        display: block;
        background-color: rgba(255,255,255,.2);
        bottom: -100px;
        animation: bubblego 10s linear infinite;
        border-radius: 100%;
        @include pseudo(){
          left: 20%;
          top: 21%;
          width: 25%;
          height: 25%;
          background-color: rgba(255,255,255,.2);
          border-radius: 100%;
        }
      }
      li:nth-child(1){
        width:20px;
        height:20px;
        left:15%;
      }
      li:nth-child(2){
        width:40px;
        height:40px;
        left:40%;
        animation-delay:2s;
      }
      li:nth-child(3){
        width:25px;
        height:25px;
        left:30%;
        animation-duration:9s;
        animation-delay:3.5s;
      }
      li:nth-child(4){
        width:60px;
        height:60px;
        left:55%;
        animation-delay:2s;
        animation-duration:15s;
      }
      li:nth-child(5){
        width:20px;
        height:20px;
        left:35%;
        animation-duration:11s;
        animation-delay:1.5s;
      }
      li:nth-child(6){
        width:25px;
        height:25px;
        left:20%;
        animation-delay:3.5s;
      }
      li:nth-child(7){
        width:25px;
        height:25px;
        left:15%;
        animation-delay:5s;
      }
      li:nth-child(8){
        width:20px;
        height:20px;
        left:75%;
        animation-delay:3.5s;
        animation-duration:8s;
      }
      li:nth-child(9){
        width:25px;
        height:25px;
        left:95%;
      }
      li:nth-child(10){
        width:60px;
        height:60px;
        left:85%;
        animation-delay:3s;
        animation-duration:13s;
      }
      li:nth-child(11){
        width:20px;
        height:20px;
        left:65%;
        animation-delay:3s;
        animation-duration:8s;
      }
      li:nth-child(12){
        width:30px;
        height:30px;
        left:70%;
        animation-delay:2s;
        animation-duration:7s;
      }
      li:nth-child(13){
        width:20px;
        height:20px;
        left:80%;
        animation-delay:6s;
        animation-duration:12s;
      }
      li:nth-child(14){
        width:25px;
        height:25px;
        left:85%;
        animation-delay:2.5s;
        animation-duration:8s;
      }
      li:nth-child(15){
        width:30px;
        height:30px;
        left:95%;
        animation-delay:3s;
        animation-duration:12s;
      }
      li:nth-child(16){
        width:60px;
        height:60px;
        left:5%;
        animation-delay:6s;
        animation-duration:15s;
      }
    }
  }
  //transition
  .goleft-enter-active{
    animation: goLeftLeave .3s reverse;
  }
  .goleft-leave-active{
    animation: goLeftLeave .3s;
  }
  .goright-enter-active{
    animation: goRightLeave .3s reverse;
  }
  .goright-leave-active{
    animation: goRightLeave .3s;
  }
  @keyframes bubblego {
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(-1080px);
    }
  }
  @keyframes goLeftLeave{
    0%{
      left: 0;
    }
    100%{
      left: -100px;
    }
  }
  @keyframes goRightLeave{
    0%{
      right: 0;
    }
    100%{
      right: -100px;
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
      if(x+this.now>=0 && x+this.now<this.items.length){
        x += this.now;
        this.goChange(x);
      }
    },
    goChange(x){
      this.$emit("runChange",x)
    }
  }
};
</script>
