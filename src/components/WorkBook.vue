<template>
  <div class="work-book">
    <ul class="pages">
      <li class="paper" data-left>
        <div class="page page-1-back">
          <img src="https://picsum.photos/id/237/200/300" alt />
        </div>
        <div class="page page-1">
          <img src="https://picsum.photos/id/238/200/300" alt />
        </div>
      </li>
      <li class="paper" data-right>
        <div class="page page-2">
          <img src="https://picsum.photos/id/239/200/300" alt />
        </div>
        <div class="page page-2-back">
          <img src="https://picsum.photos/id/240/200/300" alt />
        </div>
      </li>
      <li class="paper">
        <div class="page page-3">
          <img src="https://picsum.photos/id/241/200/300" alt />
        </div>
        <div class="page page-3-back">
          <img src="https://picsum.photos/id/242/200/300" alt />
        </div>
      </li>
      <li class="paper">
        <div class="page page-4">
          <img src="https://picsum.photos/id/243/200/300" alt />
        </div>
        <div class="page page-4-back">
          <img src="https://picsum.photos/id/244/200/300" alt />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    reArrangeData: {
      required: true
    }
  },
  methods: {},
  Mounted() {}
};
</script>

<style lang="scss">
.pages {
  width: 400px;
  height: 300px;
  position: relative;
}
.paper {
  width: 50%;
  height: 100%;
  display: none;
  position: absolute;
  right: 0;
  transform-style: preserve-3d;
}
.page {
  width: 200px;
  height: 300px;
}
.page-1,
.page-2 {
  z-index: 1;
  transform: translateZ(1px);
}
.page-1,
.page-1-back {
  position: absolute;
  top: 0;
  left: 0;
}
.page-2,
.page-2-back {
  position: absolute;
  top: 0;
  right: 0;
}
.page-3,
.page-3-back {
  position: absolute;
  top: 0;
  right: 0;
}
.paper[data-left] {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  z-index: 1;
  right: auto;
}
.paper[data-right] {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  z-index: 1;
  transform-origin: left center;
  animation: flip-to-left 2s ease-in-out forwards;
}

.paper[data-right] + .paper {
  display: block;
}

@keyframes flip-to-left {
  0% {
    transform: perspective(900px) rotateY(0deg);
  }
  100% {
    transform: perspective(900px) rotateY(-180deg);
  }
}
</style>
