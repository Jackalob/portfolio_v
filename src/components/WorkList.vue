<template v-for="(e, i) in data">
  <div class="works">
    <div class="works-classify">
      <a
        href="javascript:;"
        class="works-classify-option"
        @click="
          workSort = 0;
          getAllData();
        "
        >All</a
      >
      <a
        href="javascript:;"
        class="works-classify-option"
        @click="
          workSort = 100;
          getLandingData();
        "
        >Landing</a
      >
      <a
        href="javascript:;"
        class="works-classify-option"
        @click="
          workSort = 200;
          getSideData();
        "
        >SideProject</a
      >
      <div class="works-classify-line" :style="{ left: workSort + 'px' }"></div>
    </div>
    <div class="works-empty"></div>
    <div class="works-space">
      <div class="grid">
        <div
          class="works-card col-6"
          v-for="(e, i) in tempData"
          :key="e.name"
          @click="
            cardStatus = true;
            changeShowData(i);
          "
        >
          <div class="card-img">
            <img :src="e.img_url" />
            <div class="card-img-tag" v-if="e.importance > 0">推薦</div>
          </div>
          <div class="card-title">{{ e.name }}</div>
          <div class="card-top">
            <span class="card-top-sort">{{ e.sort }}</span>
            <span class="card-top-time">{{ e.date }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="works-mask" v-if="cardStatus" @click="cardStatus = false"></div>
    <div class="works-bigInfo" v-if="cardStatus">
      <div class="works-bigInfo-title">
        <h1>{{ showData.name }}</h1>
      </div>
      <div class="works-bigInfo-pics col-24">
        <img :src="showData.img_url" />
        <div class="works-bigInfo-pics-tech"></div>
      </div>
      <div class="works-bigInfo-info">
        <div class="works-bigInfo-timeNinfo">
          <p>{{ showData.date }}</p>
          <p>{{ showData.info }}</p>
        </div>
      </div>
      <div class="works-bigInfo-btn" v-if="showData.demo_url || showData.github_url">
        <a :target="showData.demo_url==='javascript:;'?'':'_blank'" v-if="showData.demo_url" :href="showData.demo_url">Demo</a>
        <a :target="showData.github_url==='javascript:;'?'':'_blank'" v-if="showData.github_url" :href="showData.github_url">Github</a>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
//classify
.works-classify {
  border-bottom: 1px solid map-get($map: $color, $key: hover);
  position: relative;
  &-option {
    width: 100px;
    text-align: center;
    color: map-get($map: $color, $key: primary);
    display: inline-block;
    padding: 10px 0;
    font-weight: 700;
  }
  &-line {
    width: 100px;
    height: 2px;
    background-color: map-get($map: $color, $key: accent1);
    position: absolute;
    bottom: -1px;
    transition: all 0.3s;
  }
}
//empty
.works-empty {
  height: 20px;
}
//space
.works-space {
  height: calc(100vh - #{$headerH} - 150px);
  border: 1px solid map-get($color, hover);
  border-radius: 5px;
  overflow-y: scroll;
  padding: 0.5%;
}
.works-card {
  background-color: map-get($color, tertiary);
  padding: 10px 15px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
  }
}
.card-top {
  @extend %clearfix;
  color: map-get($map: $color, $key: text);
  font-size: 14px;
  &-sort {
    float: left;
  }
  &-time {
    float: right;
  }
}
.card-img {
  padding: 7px 0;
  position: relative;
  &-tag {
    position: absolute;
    padding: 3px 6px;
    left: 8px;
    top: 16px;
    font-size: 14px;
    border-radius: 3px;
    background: linear-gradient(
      45deg,
      rgba(255, 175, 175, 1) 0%,
      rgba(255, 111, 111, 1) 90%
    );
    color: map-get($map: $color, $key: secondary);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
  > img {
    width: 100%;
    height: 100%;
  }
}
.card-title {
  color: map-get($map: $color, $key: primary);
  font-size: 18px;
  padding-left: 1px;
}
//mask
.works-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.4);
}
//bigInfo
.works-bigInfo {
  width: 990px;
  background-color: map-get($map: $color, $key: primary);
  height: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 30px 40px 80px;
  &-title {
    text-align: center;
    color: map-get($map: $color, $key: tertiary);
    padding-bottom: 20px;
    border-bottom: 1px solid map-get($map: $color, $key: hover);
    > h1 {
      font-size: 40 px;
    }
  }
  &-pics {
    padding: 40px 0;
    margin: 0 auto;
    > img {
      width: 500px;
      height: 300px;
      margin: 0 auto;
    }
  }
  &-info {
    padding-top: 40px;
    border-top: 1px solid map-get($map: $color, $key: hover);
    color: map-get($map: $color, $key: tertiary);
  }
  &-timeNinfo {
    font-size: 18px;
    p:nth-child(1) {
      font-size: 14px;
      color: map-get($map: $color, $key: hover);
      margin-bottom: 8px;
    }
  }
  &-btn {
    display: inline-block;
    position: absolute;
    left: 50%;
    bottom: 35px;
    transform: translateX(-50%);
    padding: 4px;
    border-radius: 5px;
    border: 2px solid map-get($map: $color, $key: tertiary);
    > a {
      display: inline-block;
      text-align: center;
      width: 100px;
      padding: 5px 10px;
      font-weight: 700;
      background-color: map-get($color,primary);
      color: map-get($map: $color, $key: tertiary);
      transition: all .3s;
      &:hover{
        color: map-get($map: $color, $key: primary);
        background-color: map-get($color, tertiary);
      }
    }
    a:nth-child(1){    
      border-radius: 12px 0 0 12px;
    }
    a:nth-child(2){
      border-radius: 0 12px 12px 0;
      border-left: 2px solid map-get($map: $color, $key: tertiary);
    }
  }
}
</style>

<script>
export default {
  props: {
    reArrangeData: {
      required: true
    }
  },
  data() {
    return {
      workSort: 0,
      tempData: [],
      cardStatus: false,
      showData: null,
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
      let temp = this.tempData[index];
      temp.techImg = [];
      temp.tech.forEach(e => {
        if (this.lang[e.toLowerCase()]) {
          temp.techImg.push(this.lang[e.toLowerCase()]);
        }
      });
      this.showData = temp;
    },
    getAllData() {
      this.tempData = JSON.parse(JSON.stringify(this.reArrangeData));
    },
    getLandingData() {
      let temp = [];
      this.reArrangeData.forEach(e => {
        if (e.sort === "landing") {
          temp.push(e);
        }
      });
      this.tempData = temp;
    },
    getSideData() {
      let temp = [];
      this.reArrangeData.forEach(e => {
        if (e.sort === "side") {
          temp.push(e);
        }
      });
      this.tempData = temp;
    }
  },
  watch: {
    workSort() {}
  },
  beforeMount() {
    this.getAllData();
  }
};
</script>
