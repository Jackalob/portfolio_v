<template>
  <div class="work-book">
    <div id="flipbook">
      <div class="hard">Turn.js</div>
      <div v-for="e in reArrangeData" :key="e.name">
        <div class="book-container">
          <h1 class="book-name">{{ e.name }}
            <div class="book-hot" v-if="e.importance > 0">推薦</div>
          </h1>
          <div class="book-img">
            <img :src="e.img_url">
          </div>
          <p class="book-info">{{ e.info }}</p>
          <div class="book-more"><a href="javascript:;">More</a></div>
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
  position: relative;
}
.book-name{
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 40px;
  background-color: map-get($map: $color, $key: bookbg);
  padding: 5px 10px;
  border-radius: 5px;
  .book-hot{
    position: absolute;
    font-size: 14px;
    font-weight: 400;
    padding: 5px 10px;
    border-radius: 5px;
    background: linear-gradient(45deg, #ffafaf 0%, #ff6f6f 90%);
    color: map-get($map: $color, $key: tertiary);
    top: 25px;
    right: 40px;
  }
}
.book-img{
  margin: 25px 0;
  height: 40%;
  background-color: map-get($color,bookbg);
  border-radius: 5px;
  >img{
    width:100%;
    height: 100%;
  }
}
.book-info{
  height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  margin-bottom: 20px;
  background-color: map-get($map: $color, $key: bookbg);
  padding: 5px 10px;
  border-radius: 5px;
}
.book-more{
  text-align: center;
  background-color: map-get($color,bookbg);
  padding: 5px 0;
  border-radius: 5px;
  >a{
    padding: 5px 10px;
    color: map-get($map: $color, $key: primary);
    border: 2px solid map-get($map: $color, $key: primary);
    background-color: map-get($color,tertiary);
    border-radius: 5px;
    transition: all .3s;
    &:hover{
      background-color: map-get($map: $color, $key: primary);
      color: map-get($map: $color, $key: tertiary);
    }
  }
}
</style>
