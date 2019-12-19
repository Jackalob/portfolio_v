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
          <router-link :to="{ name: 'exp' }"><div @mouseover="navText.exp='工作經歷'" @mouseleave="navText.exp='Experience'">{{navText.exp}}</div></router-link>
          <router-link :to="{ name: 'contact' }"><div @mouseover="navText.contact='聯絡資訊'" @mouseleave="navText.contact='Contact'">{{navText.contact}}</div></router-link>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <router-view />
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
    > a {
      display: inline-block;
      position: relative;
      color: map-get($map: $color, $key: primary);
      z-index: 0;
      font-weight: 700;
      @include pseudo() {
        width: 95%;
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
    padding: 0 10px 40px 10px;
    overflow: hidden;
  }
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