<template>
  <div class="home">
    <p class="home-name">Jake Tsao</p>
    <p class="home-class">Front-End Engineer</p>
    <p class="home-motto">Stay Hungry, Stay Foolish.</p>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  &-name {
    position: absolute;
    bottom: 140px;
    font-size: 24px;
    opacity: 0;
    animation: enter 1s both;
  }
  &-class {
    position: absolute;
    bottom: 100px;
    font-size: 24px;
    animation: enter .8s 1s both;
    opacity: 0;
  }
  &-motto {
    position: absolute;
    bottom: 60px;
    font-size: 24px;
    animation: enter .8s 1.8s both;
    opacity: 0;
  }
}

@keyframes enter {
  0% {
    left: 500px;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
</script>
