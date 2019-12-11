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
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link :to="{ name: 'work' }">Work</router-link>
          <router-link :to="{ name: 'exp' }">Experience</router-link>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
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
  height: 100vh;
  font-family: sans-serif, "Noto Sans TC", "Noto Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: map-get($color, secondary);
  color: map-get($map: $color, $key: primary);
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
  height: 80px;
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
      line-height: 80px;
      padding: 0px 20px;
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
      }
      &:hover {
        &::before {
          background-color: map-get($color, hover);
        }
      }
    }
  }
}
#nav a.router-link-exact-active {
  color: #42b983;
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
  height: calc(100% - 80px);
  .container{
    padding: 0 10px 40px 10px;
  }
}
</style>
