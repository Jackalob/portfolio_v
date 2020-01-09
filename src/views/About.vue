<template>
  <div class="about">
    <h1 class="about-title">Skills & Tools</h1>
    <div class="about-wrap">
      <slider :items="items" :now="now" @runChange="changeHandler"></slider>
    </div>
    <div class="about-info grid">
      <div class="about-profile col-6 col-xs-16">
        <div class="about-mypic">
          <img src="@/assets/42420454_1958937480794420_3465320150037692416_n.jpg" draggable="false" />
        </div>
      </div>
      <div class="about-self col-18 col-xs-24">
        <p class="about-myName">曹上傑</p>
        <p class="about-subTitle">淡江大學資管系畢業</p>
        <div>
          <p class="about-content">
            我對前端有極大的興趣及熱忱，透過瀏覽風格迥異的網站來啟發自身對於網站樣式的意識及想法，嘗試理解並吸收學習，加深能力且轉換思維。<br>
            也曾參加人才培訓計畫，加強對於網頁的理解及技術上的應用，再透過各種管道來學習現今主要的趨勢，時時更新自己的能力。
          </p>
        </div>
        <!-- 我是曹上傑，西元 1996 年生，應屆畢業於 國立台灣大學 經濟學系。
        個性積極開朗，好奇且樂於學習，時時更新自己的能力。
        大三暑假進入企業以正職網頁美術設計工作 1 年半， 累積 B2B
        工作經驗、作品以及專業設計流程、技術。
        有別於一般設計人才，結合前端開發經驗，以及在學時金融分析訓練， 語言能力
        多益 890 分，我是個 跨領域且善於溝通的人才。
        出社會後嘗試各個領域挑戰自己，累積實力 -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  width: 1000px;
  margin-bottom: 30px;
  background-color: map-get($color, tertiary);
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(#000, 0.1);
  @include media(mobile) {
    width: 100%;
    height: calc(100vh - 80px);
    margin-bottom: 0;
    overflow-y: scroll;
  }
  &-title {
    text-align: center;
    padding: 20px 0;
    font-family: "Courgette", "Noto Sans", "Noto Sans TC", sans-serif;
    font-size: 48px;
  }
  &-info {
    margin: 20px 0;
    justify-content: center;
    @include media(mobile) {
      margin: 0;
      padding: 15px;
    }
  }
  &-profile {
    text-align: center;
  }
  &-mypic {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
    }
  }
  &-self{
    @include flex(center,none,col);
  }
  &-myName {
    font-size: 24px;
    margin-bottom: 5px;
    @include media(mobile){
      text-align: center;
    }
  }
  &-subTitle{
    font-size: 18px;
    color: map-get($map: $color, $key: accent2);
    margin-bottom: 10px;
    @include media(mobile){
      text-align: center;
    }
  }
  &-content{
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
}
.slider {
  box-shadow: 0px 5px 5px rgba(#000, 0.1);
}
</style>

<script>
import slider from "@/components/Slider.vue";

export default {
  data() {
    return {
      items: [
        {
          name: "HTML",
          url: "https://img.icons8.com/color/256/000000/html-5.png"
        },
        {
          name: "Scss",
          url: "https://miro.medium.com/max/4000/1*H-9KGBGNHfvkd4F4MOY__g.png"
        },
        {
          name: "JavaScript",
          url: "https://img.icons8.com/color/256/000000/javascript.png"
        },
        { name: "jQuery", url: "https://i.imgur.com/lgAWIAL.png" },
        { name: "Vue", url: "https://i.imgur.com/7kQRg6J.png" },
        { name: "Git", url: "https://i.imgur.com/l5YHzCx.png" },
        { name: "GitHub", url: "https://i.imgur.com/2fb2xJB.png" },
        {
          name: "Sourcetree",
          url:
            "https://www.minicreo.com/mac-uninstaller/img/sourcetree-mac-catalina.png"
        }
      ],
      now: 2
    };
  },
  components: {
    slider
  },
  methods: {
    changeHandler(x) {
      this.now = x;
    }
  }
};
</script>
