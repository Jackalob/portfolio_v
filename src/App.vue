<template>
  <div id="app">
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
        <div class="link">     
          <router-link to="/"><div @mouseover="navText.home='回到首頁'" @mouseleave="navText.home='Home'">{{navText.home}}</div></router-link>
          <router-link to="/about"><div @mouseover="navText.about='關於我'" @mouseleave="navText.about='About'">{{navText.about}}</div></router-link>
          <router-link :to="{ name: 'work' }"><div @mouseover="navText.work='作品集'" @mouseleave="navText.work='Work'">{{navText.work}}</div></router-link>
          <router-link :to="{ name: 'contact' }"><div @mouseover="navText.contact='與我聯絡'" @mouseleave="navText.contact='Contact'">{{navText.contact}}</div></router-link>
          <a href="javascript:;" ><div @mouseover="navText.exp='工作經歷'" @mouseleave="navText.exp='Experience'">{{navText.exp}}</div></a>
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

#app {
  width: 100%;
  height: 100%;
  font-family: "Noto Sans" , "Noto Sans TC" , sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: map-get($color, secondary);
  color: map-get($map: $color, $key: primary);
  -webkit-user-drag: none;
}

//utils
.container {
    @include container();
    padding: 0 10px;
    width: 1280px;
}
.flex-space{
  flex-grow: 1;
}

//header
header {
  height: $headerH;
  .container {
    @include flex(none, center);
  }
  .logo {
    height: 100%;
    padding: 15px 0;
  }
  .link {
    height: 100%;
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
      &:hover {
        &::before {
          background-color: map-get($color, hover);
        }
      }
      >div{
        width: 100px;
        line-height: 80px;
        text-align: center;
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
      }
    }
  },
  Mounted(){
  }
}
</script>