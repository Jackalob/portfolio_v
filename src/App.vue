<template>
  <div id="app" @click='burgerStatus = false'>
    <header id="nav">
      <div class="container">
        <a href="" style='display:inline-block'>
          <div class="logo">
            <span class="logo-line"></span>
            <span class="logo-line"></span>
            <span class="logo-line"></span>
            <span class="logo-line"></span>
          </div>
        </a>
        <div class="flex-space"></div>
        <div class="link" :class="{navOn:burgerStatus}">     
          <router-link to="/"><div @mouseover="navText.home='回到首頁'" @mouseleave="navText.home='Home'">{{navText.home}}</div></router-link>
          <router-link to="/about"><div @mouseover="navText.about='關於我'" @mouseleave="navText.about='About'">{{navText.about}}</div></router-link>
          <router-link :to="{ name: 'work' }"><div @mouseover="navText.work='作品集'" @mouseleave="navText.work='Work'">{{navText.work}}</div></router-link>
          <router-link :to="{ name: 'contact' }"><div @mouseover="navText.contact='與我聯絡'" @mouseleave="navText.contact='Contact'">{{navText.contact}}</div></router-link>
          <a href="javascript:;" ><div @mouseover="navText.exp='工作經歷'" @mouseleave="navText.exp='Experience'">{{navText.exp}}</div></a>
        </div>
        <div class="burger" @click.stop="burgerStatus=!burgerStatus">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="container">
      <transition name="zoom" mode="out-in" appear>
          <router-view />
      </transition>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
body{
  background-color: map-get($color, secondary);
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Noto Sans" , "Noto Sans TC" , sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: map-get($map: $color, $key: primary);
  -webkit-user-drag: none;
}

//utils
.container {
  @include container();
  padding: 0 10px;
  width: 1280px;
  @include media(home){
    width: 95%;
  }
  @include media(tablet){
    width: 100%;
  }
}
.flex-space{
  flex-grow: 1;
}

//header


header {
  height: $headerH;
  @include media(tablet){
    height: $headerHMobile;
  }
  .container {
    @include flex(none, center);
  }
  .logo {
    height: 100%;
    padding: 15px 0;
    min-width: 40px;
  }
  .link {
    height: 100%;
    @include media(tablet){
      position: fixed;
      z-index: 10;
      top: 60px;
      right: 10px;
      height: auto;
      box-shadow: -5px 5px 10px rgba(0,0,0,.2);
      transform: scale(0);
      opacity: 0;
      transform-origin: 90% 0%;
      transition: transform .3s ease-in-out , opacity .3s ease-in-out;
      border-radius: 10px;
      >a:first-child(){
        border-radius: 10px 10px 0 0 ;
      }
      >a:last-child(){
        border-radius: 0 0 10px 10px;
      }
    }
    > a{
      display: inline-block;
      position: relative;
      color: map-get($map: $color, $key: primary);
      z-index: 0;
      font-weight: 700;
      @include pseudo() {
        width: 80%;
        height: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        border-radius: 5px;
        transition: background-color .3s;
      }
      @include media(tablet){
        display: block;
        background-color: map-get($map: $color, $key: tertiary);
        color: map-get($map: $color, $key: priamry);
        &::before{
          display: none;
        }
      }
      &:hover {
        &::before {
          background-color: map-get($color, hover);
        }
      }
      >div{
        width: 100px;
        line-height: $headerH;
        text-align: center;
        @include media(tablet){
          width: 150px;
          line-height: $headerHMobile;
        }
      }
    }
    > a:last-child{
      color: map-get($map: $color, $key: tertiary);
      background-color: map-get($color,accent2);
      // overflow: hidden;
      &::before{
        background-color: map-get($color,accent2);
      }
    }
  }
  .burger{
    width: $headerHMobile;
    height: $headerHMobile;
    @include flex(center,center,col);
    padding: 15px;
    cursor: pointer;
    display: none;
    @include media(tablet){
      display: flex;
    }
    >span{
      display: inline-block;
      width: 100%;
      height: 3px;
      background-color: map-get($map: $color, $key: primary);
      margin: 3px 0;
    }
  }
  //status
  .navOn{
    transform: scale(1);
    opacity: 1;
  }
}
#nav a.router-link-exact-active {
  color: map-get($map: $color, $key: accent2);
}

//logo
.logo {
  display: inline-block;
  &-line {
    display: inline-block;
    width: 5px;
    height: 30px;
    background-color: map-get($map: $color, $key: primary);
    border-radius: 10px;
    transform: skew(-20deg);
    margin: 0 2.5px;
  }
  span:nth-child(1) {
    height: 20px;
  }
  span:nth-child(3) {
    transform: skew(-20deg) translate(-1px, 10px);
  }
  span:nth-child(4) {
    height: 20px;
    transform: skew(-20deg) translate(-4px, 0px);
  }
}

//main
.main{
  height: calc(100% - #{$headerH});
  @include media(tablet){
    height: calc(100% - #{$headerHMobile});
  }
  @include media(mobile){
    height: auto;
  }
  .container{
    padding: 10px;
    overflow: hidden;
    @include flex();
  }
}
//transition
.opacity-enter-active, .opacity-leave-active{
  transition: opacity .5s;
}
.opacity-enter, .opacity-leave-to{
  opacity: 0;
}
.opacity-enter-to, .opacity-leave{
  opacity: 1;
}
.bounce-enter-active{
  animation: bounce-in .6s;
}
.bounce-leave-active{
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0%{
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
    transform-origin: top left;
  }
  25%{
    opacity: 1;
  }
  75%{
    transform: scale(1.1) translate(-50%, -50%);
    transform-origin: top left
  }
  100%{
    transform: scale(1) translate(-50%, -50%);
    transform-origin: top left
  }
}
.zoom-enter-active{
  animation: zoomInRight 1s ease-out;
}
.zoom-leave-active{
  animation: zoomOutLeft 1s;
}
@keyframes zoomInRight{
  0%{
    opacity: 0;
    transform: translate3d(1000px, 0, 0) scale3d(0.1, 0.1, 0.1);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60%{
    opacity: 1;
    transform: translate3d(-42px, 0, 0)  scale3d(0.475, 0.475, 0.475);
    // animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    transform-origin: right center;
  }
}
@keyframes zoomOutLeft{
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  } 
  100% {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
}
.ani{
  animation-duration: 10s;
  animation-delay: 0;
}
</style>

<script>
export default {
  data(){
    return {
      navText:{
        home: 'Home',
        about: 'About',
        work: 'Work',
        exp: 'Experience',
        contact: 'Contact'
      },
      burgerStatus: false
    }
  },
  Mounted(){
  },
  watch:{
    burgerStatus(){}
  }
}
</script>