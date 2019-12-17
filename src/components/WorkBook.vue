<template>
  <div class="work-book">
    <div id="flipbook">
      <div class="hard">Turn.js</div>
      <div v-for="e in reArrangeData" :key="e.name">
        <div class="book-container">
          <h1 class="book-name">{{ e.name }}</h1>
          <div class="book-img">
            <img :src="e.img_url">
          </div>
          <p class="book-info">{{ e.info }}</p>
        </div>
      </div>
      <div v-if="reArrangeData % 2 !== 0">
        <div class="book-container"></div>
      </div>
      <div class="hard"></div>
    </div>
  </div>
</template>

<script>
import turn from "@/plugins/turn.min.js";
export default {
  props: {
    reArrangeData: {
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $("#flipbook").turn({
      autoCenter: true,
      display: "double",
      duration: 1000
    });
  }
};
</script>

<style lang="scss">
.work-book {
  width: 100%;
  height: calc(100% - 60px);
  margin: 0 auto;
  @include flex();
  overflow: hidden;
}
#flipbook {
  width: 80%;
  height: 600px;
}
#flipbook .page {
  background-color: white;
}
#flipbook .page-wrapper {
  perspective: 2200px;
}
#flipbook .hard {
  background: #ccc !important;
  color: #333;
  font-weight: bold;
}
#flipbook .odd {
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(0.95, #fff),
    color-stop(1, #dadada)
  );
  background-image: -webkit-linear-gradient(right, #fff 95%, #c4c4c4 100%);
  background-image: -moz-linear-gradient(right, #fff 95%, #c4c4c4 100%);
  background-image: -ms-linear-gradient(right, #fff 95%, #c4c4c4 100%);
  background-image: -o-linear-gradient(right, #fff 95%, #c4c4c4 100%);
  background-image: linear-gradient(right, #fff 95%, #c4c4c4 100%);
  box-shadow: inset 0 0 5px #666;
}
#flipbook .even {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.95, #fff),
    color-stop(1, #dadada)
  );
  background-image: -webkit-linear-gradient(left, #fff 95%, #dadada 100%);
  background-image: -moz-linear-gradient(left, #fff 95%, #dadada 100%);
  background-image: -ms-linear-gradient(left, #fff 95%, #dadada 100%);
  background-image: -o-linear-gradient(left, #fff 95%, #dadada 100%);
  background-image: linear-gradient(left, #fff 95%, #dadada 100%);
  box-shadow: inset 0 0 5px #666;
}
#flipbook .shadow,
#flipbook.shadow{
  -webkit-box-shadow: 0 4px 10px #666;
  -moz-box-shadow: 0 4px 10px #666;
  -ms-box-shadow: 0 4px 10px #666;
  -o-box-shadow: 0 4px 10px #666;
  box-shadow: 0 4px 10px #666;
}
.book-container{
  width: 100%;
  height: 100%;
  padding: 30px;
}
.book-name{

}
.book-img{
  height: 40%;
  >img{
    width:100%;
    height: 100%;
  }
}
.book-info{

}
</style>
