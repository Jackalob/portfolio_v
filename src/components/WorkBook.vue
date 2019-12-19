<template>
  <div class="work-book">
    <div id="flipbook">
      <div class="hard">
        <div class="book-container">
          <div class="book-name">
            <h1 class="book-h1">PORTFOLIO</h1>
          </div>
          <div class="book-tuna">
            <img draggable="false" src="@/assets/tuna.png" />
          </div>
        </div>
      </div>
      <div v-for="(e, i) in reArrangeData" :key="e.name">
        <div class="book-container">
          <h1 class="book-title">
            {{ e.name }}
            <div class="book-hot" v-if="e.importance > 0">推薦</div>
          </h1>
          <div class="book-img">
            <img :src="e.img_url" />
          </div>
          <p class="book-info">{{ e.info }}</p>
          <div class="book-more">
            <a
              href="javascript:;"
              @click="
                cardStatus = true;
                changeShowData(i);
              "
              >More</a
            >
          </div>
          <span class="book-page">{{ i + 1 }}</span>
        </div>
      </div>
      <div v-if="reArrangeData % 2 !== 0">
        <div class="book-container"></div>
      </div>
      <div class="hard">
        <div class="book-container">
          <div class="book-end"></div>
        </div>
      </div>
    </div>
    <div class="works-mask" v-if="cardStatus" @click="cardStatus = false"></div>
    <div class="works-bigInfo" v-if="cardStatus">
      <div class="close-btn" @click="cardStatus = false">
        <span></span>
        <span></span>
      </div>
      <div class="works-bigInfo-title">
        <h1>{{ showData.name }}</h1>
        <h2>{{ showData.title }}</h2>
      </div>
      <div class="works-bigInfo-pics col-24">
        <img :src="showData.img_url" />
        <div class="works-bigInfo-pics-tech" v-if="showData.techImg">
          <div v-for="(e, i) in showData.techImg" :key="e" class="tech-img">
            <img :src="e" />
            <p>{{ showData.tech[i] }}</p>
          </div>
        </div>
      </div>
      <div class="works-bigInfo-info">
        <div class="works-bigInfo-timeNinfo">
          <p>{{ showData.date }}</p>
          <p>{{ showData.info }}</p>
        </div>
      </div>
      <div
        class="works-bigInfo-btn"
        v-if="showData.demo_url || showData.github_url"
      >
        <a
          :target="showData.demo_url === 'javascript:;' ? '' : '_blank'"
          v-if="showData.demo_url"
          :href="showData.demo_url"
          >Demo</a
        >
        <a
          :target="showData.github_url === 'javascript:;' ? '' : '_blank'"
          v-if="showData.github_url"
          :href="showData.github_url"
          >Github</a
        >
      </div>
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
    return {
      showData: null,
      cardStatus: false,
      lang: {
        javascript: "https://img.icons8.com/color/48/000000/javascript.png",
        html: "https://img.icons8.com/color/48/000000/html-5.png",
        css: "https://img.icons8.com/color/48/000000/css3.png",
        vue: "https://img.icons8.com/color/48/000000/vue-js.png",
        react: "https://img.icons8.com/color/48/000000/react-native.png",
        angular: "https://img.icons8.com/color/48/000000/angularjs.png",
        jquery: "https://i.imgur.com/YY7DOKz.png"
      }
    };
  },
  methods: {
    changeShowData(index) {
      console.log("start-----");
      let temp = this.reArrangeData[index];
      temp.techImg = [];
      temp.tech.forEach(e => {
        if (this.lang[e.toLowerCase()]) {
          temp.techImg.push(this.lang[e.toLowerCase()]);
        }
      });
      this.showData = temp;
      console.log("-----finish");
    }
  },
  watch: {
    showData() {}
  },
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
  width: 90%;
  height: 650px;
}
#flipbook .page {
  background-color: white;
}
#flipbook .page-wrapper {
  perspective: 3000px;
}
#flipbook .hard {
  color: #333;
  font-weight: bold;
  .book-container {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      45deg,
      #5eb0fe 0%,
      #0a8de8 100%
    );
    user-select: none;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 55%;
      width: 500%;
      height: 430%;
      border-radius: 45%;
      background-color: #fff;
      transform: translateX(-50%); // 居中
      animation: rotate 15s linear infinite both;
      background-color: map-get($map: $color, $key: tertiary);
    }
    &::before {
      bottom: 50%;
      border-radius: 47%;
      opacity: 0.5;
    }
  }
  .book-name {
    position: absolute;
    font-size: 36px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    text-align: center;
    .book-h1 {
      padding: 0px 15px;
      position: relative;
      background-color: #893933;
      border-radius: 5px;
      color: map-get($map: $color, $key: tertiary);
      font-family: 'Courgette', cursive;
      @include pseudo{
        width: 100%;
        height: 10px;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #893933;
        border-radius: 5px;
      }
      @include pseudo(after){
        width: 100%;
        height: 10px;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #893933;
        border-radius: 5px;
      }
    }
  }
  .book-tuna {
    width: 50%;
    position: absolute;
    bottom: 10%;
    right: 20px;
    z-index: 2;
    animation: fishMove 5s ease-in-out infinite both;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .book-end{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 35px solid #893933;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
@keyframes rotate {
  0% {
    transform: translateX(-50%) rotateZ(0deg);
  }
  100% {
    transform: translateX(-50%) rotateZ(360deg);
  }
}
@keyframes fishMove{
  0%{
    transform: rotate(10deg);
    bottom: 20%;
  }
  25%{
    transform: rotate(-50deg);
  }
  50%{
    bottom: 8%;
  }
  100%{
    transform: rotate(10deg);
    bottom: 20%;
  }
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
#flipbook.shadow {
  -webkit-box-shadow: 0 4px 10px #666;
  -moz-box-shadow: 0 4px 10px #666;
  -ms-box-shadow: 0 4px 10px #666;
  -o-box-shadow: 0 4px 10px #666;
  box-shadow: 0 4px 10px #666;
}
.book-container {
  width: 100%;
  height: 100%;
  padding: 30px;
  position: relative;
}
.book-title {
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 30px;
  background-color: map-get($map: $color, $key: bookbg);
  padding: 5px 10px;
  border-radius: 5px;
  .book-hot {
    position: absolute;
    font-size: 14px;
    font-weight: 400;
    padding: 5px 10px;
    border-radius: 5px;
    background: linear-gradient(45deg, #ffafaf 0%, #ff6f6f 90%);
    color: map-get($map: $color, $key: tertiary);
    top: 17px;
    right: 40px;
    user-select: none;
  }
}
.book-img {
  margin: 25px 0;
  height: 40%;
  background-color: map-get($color, bookbg);
  border-radius: 5px;
  > img {
    width: 100%;
    height: 100%;
  }
}
.book-info {
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
.book-more {
  text-align: center;
  background-color: map-get($color, bookbg);
  padding: 5px 0;
  border-radius: 5px;
  > a {
    padding: 5px 10px;
    color: map-get($map: $color, $key: primary);
    border: 2px solid map-get($map: $color, $key: primary);
    background-color: map-get($color, tertiary);
    border-radius: 5px;
    transition: all 0.3s;
    &:hover {
      background-color: map-get($map: $color, $key: primary);
      color: map-get($map: $color, $key: tertiary);
    }
  }
}
.book-page {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translate(-50%);
  font-size: 12px;
  color: map-get($map: $color, $key: text);
}
</style>
