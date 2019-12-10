<template>
  <div class="home">
    <div class="home-wrap">
      <p class="name">Jake Tsao</p>
      <p class="class">Front-End Engineer</p>
      <p class="motto">Stay Hungry, Stay Foolish.</p>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  &-wrap{
    position: absolute;
    left: 0;
    bottom: 100px;
  }
}
.name {
  font-size: 24px;
}
.class {
  font-size: 24px;
}
.motto {
  font-size: 24px;
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
