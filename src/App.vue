<template>
  <div id="app">
    <header id="nav">
      <div class="container">
        <div class="logo">
          <span class="logo-line"></span>
          <span class="logo-line"></span>
          <span class="logo-line"></span>
          <span class="logo-line"></span>
        </div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="{ name: 'work' }">Work</router-link> |
        <router-link :to="{ name: 'exp' }">Experience</router-link> |
        <router-link :to="{ name: 'contact' }">Contact</router-link> |
      </div>
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

#app {
  width: 100%;
  height: 100vh;
  font-family: sans-serif, "Noto Sans TC", "Noto Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: map-get($color, secondary);
  color: map-get($map: $color, $key: primary);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
</style>
