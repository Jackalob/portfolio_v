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
          class="works-card col-6 col-md-8 col-sm-12 col-xs-24"
          v-for="(e, i) in tempData"
          :key="e.name"
          @click="
            cardStatus = true;
            changeShowData(i);
          "
        >
          <div class="card-img">
            <img draggable="false" :src="compilePath(e.img_url)" />
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
    <transition name="bounce">
    <div class="works-bigInfo" v-if="cardStatus">
      <div class="works-bigInfo-container">
        <div class="works-bigInfo-container-wrap">
          <div class="close-btn" @click="cardStatus = false">
            <span></span>
            <span></span>
          </div>
          <div class="works-bigInfo-title">
            <h1>{{ showData.name }}</h1>
            <h2>{{ showData.title}}</h2>
          </div>
          <div class="works-bigInfo-pics col-24">
            <div class="bigInfo-pics-wrap">
              <img :src="compilePath(showData.img_url)" />
            </div>
            <div class="works-bigInfo-pics-tech" v-if='showData.techImg'>
              <div v-for='(e,i) in showData.techImg' :key="e" class="tech-img">
                <img :src="e">
                <p>{{showData.tech[i]}}</p>
              </div>
            </div>
          </div>
          <div class="works-bigInfo-info">
            <div class="works-bigInfo-timeNinfo">
              <p>{{ showData.date }}</p>
              <p>{{ showData.info }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="works-bigInfo-a">
        <div class="works-bigInfo-btn" v-if="showData.demo_url || showData.github_url">
          <a :target="showData.demo_url==='javascript:;'?'':'_blank'" v-if="showData.demo_url" :href="showData.demo_url">Demo</a>
          <a :target="showData.github_url==='javascript:;'?'':'_blank'" v-if="showData.github_url" :href="showData.github_url">Github</a>
        </div>
      </div>
    </div>
    </transition>
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
  @include media(tablet){
    height: calc(100vh - #{$headerHMobile} - 100px);
  }
}
.works-card {
  background-color: map-get($color, tertiary);
  padding: 15px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4) );
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
  width: 100%;
  padding: 7px 0;
  position: relative;
  padding-top: 70%;
  &-tag {
    position: absolute;
    padding: 3px 6px;
    left: 12px;
    top: 14px;
    font-size: 14px;
    border-radius: 3px;
    background: linear-gradient(
      45deg,
      rgba(255, 175, 175, 1) 0%,
      rgba(255, 111, 111, 1) 90%
    );
    color: map-get($map: $color, $key: secondary);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    user-select: none;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
  }
}
.card-title {
  color: map-get($map: $color, $key: primary);
  font-size: 18px;
  padding-left: 1px;
  margin: 5px 0 2px;
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
  background-color: map-get($map: $color, $key: card);
  height: 85%;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid map-get($map: $color, $key: hover);
  @include media(tablet){
    width: 85%;
  }
  @include media(tabletsm){
    width: 90%;
  }
  @include media(mobile){
    height: 90%;
  }
  &-container{
    width: 100%;
    height: calc(100% - 76px);
    padding: 30px 40px;
    @include media(mobile){
      padding: 15px;
    }
    &-wrap{
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .close-btn{
    width: 60px;
    height: 60px;
    padding: 10px;
    @include flex();
    flex-direction: column;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    @include media(mobile){
      display: none;
    }
    >span{
      display: inline-block;
      width: 100%;
      height: 3px;
      background-color: map-get($color,tertiary);
      border-radius: 2px;
      transition: all .3s;
    }
    span:nth-child(1){
      transform: translateY(1.5px) rotate(45deg);
    }
    span:nth-child(2){
      transform: translateY(-1.5px) rotate(-45deg);
    }
    &:hover{
      span:nth-child(1){
        transform: translateY(1.5px) rotate(225deg);
      }
      span:nth-child(2){
        transform: translateY(-1.5px) rotate(-225deg);
      }
    }
  }
  &-title {
    text-align: center;
    color: map-get($map: $color, $key: tertiary);
    padding-bottom: 20px;
    border-bottom: 1px solid map-get($map: $color, $key: hover);
    > h1 {
      font-size: 40px;
      width: 90%;
      margin: 0 auto;
    }
    >h2{
      font-size: 20px;
      font-weight: 400;
      margin-top: 10px;
      @include media(mobile){
        font-size: 16px;
      }
    }
    @include media(mobile){
      padding-bottom: 15px;
      >h1{
        font-size: 1.5rem;
      }
    }
  }
  &-pics {
    padding: 40px 0;
    position: relative;
    @include media(tablet){
      padding: 20px 0;
    }
    @include media(mobile){
      padding: 15px 0;
    }
    @at-root &-tech{
      position: absolute;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      width: 20%;
      height: 100%;
      padding: 40px 0;
      top: 0;
      left: 79%;
      @include media(tablet){
        flex-direction: row;
        position: unset;
        width: 200px;
        justify-content: center;
        margin: 0 auto;
        padding: 15px 0 0;
      }
      .tech-img{
        width: 35px;
        height: 35px;
        position: relative;
        margin: 0 5px 5px 0;
        &:hover{
          >p{
            display: block;
          }
        }
        >img{
          width: 100%;
          height: 100%;
        }
        >p{
          position: absolute;
          left: 50%;
          top: -31px;
          padding: 5px 10px;
          font-size: 14px;
          letter-spacing: 1px;
          transform: translateX(-50%);
          color: map-get($map: $color, $key: tertiary);
          background-color: rgba(0,0,0,.5);
          border-radius: 5px;
          user-select: none;
          display: none;
          @include pseudo(after){
            width: 0;
            height: 0;
            border-width: 12px;
            border-style: solid;
            border-color: rgba(20,20,20,.8) transparent transparent transparent;
            left: 51%;
            bottom: -23px;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
  .bigInfo-pics-wrap{
      width: 500px;
      height: 300px;
      margin: 0 auto;
      @include media(tabletsm){
        width: 100%;
        height: 0;
        padding-top: 60%;
        position: relative;
      }
      > img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        object-fit: cover;
        border-radius: 5px;
        @include media(tabletsm){
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  &-info {
    padding: 25px 0 10px;
    border-top: 1px solid map-get($map: $color, $key: hover);
    color: map-get($map: $color, $key: tertiary);
    @include media(mobile){
      padding:  15px 0 5px;
    }
  }
  &-timeNinfo {
    font-size: 18px;
    p:nth-child(1) {
      font-size: 12px;
      color: map-get($map: $color, $key: hover);
      margin-bottom: 8px;
      text-align: center;
    }
    p:nth-child(2) {
      color: map-get($map: $color, $key: secondary);
      @include media(mobile){
        font-size: 16px;
      }
    }
  }
  &-a{
    @include flex();
    height: 76px;
    background-color: map-get($color,bigInfo_bot);
    border-radius: 0 0 10px 10px;
  }
  &-btn {
    display: flex;
    padding: 4px;
    border-radius: 5px;
    border: 2px solid map-get($map: $color, $key: tertiary);
    > a {
      display: inline-block;
      text-align: center;
      width: 100px;
      padding: 5px 10px;
      font-weight: 700;
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
    },
    compilePath(str){
      return  require(`@/assets/thumbnail/`+str);
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
