<template>
  <div class="about">
    <h1 class="about-title">Skills & Tools</h1>
    <div class="about-wrap">
      <slider :items='items' :now='now' @runChange='changeHandler'></slider>
    </div>
    <div class="about-info grid">
      <div class="col-6 about-profile">
        <div class="about-mypic">
          <img src="https://i.imgur.com/I11QRsY.jpg">
        </div>
        <p class="about-myName">曹上傑</p>
      </div>
      <div class="about-self col-18">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus numquam est ipsum ad praesentium eligendi at esse consequatur earum ratione fugiat rem exercitationem adipisci, temporibus iusto! Eaque nostrum doloremque, vitae magnam at ab, dolore voluptate temporibus enim debitis quidem modi tempore repellendus atque laudantium veniam beatae quasi suscipit adipisci officia libero! Ipsam numquam eius odit animi eveniet, rerum consequuntur.
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
  .about{
    width: 80%;
    margin:  0 auto;
    background-color: map-get($color,tertiary);
    border-radius: 30px;
    box-shadow: 5px 5px 10px rgba(#000,.1);
    &-title{
      text-align: center;
      padding: 20px 0;
      font-family: "Courgette", "Noto Sans", "Noto Sans TC", sans-serif;
      font-size: 48px;
    }
    &-info{
      margin-top: 20px;
    }
    &-profile{
      text-align: center;
    }
    &-mypic{
      width: 200px;
      height: 200px; 
      margin: 0 auto;
      >img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &-myName{
      margin-top: 20px;
      font-size: 20px;
    }
  }
  .slider{
    box-shadow: 0px 5px 5px rgba(#000,.1);
  }
</style>

<script>
import slider from '@/components/Slider.vue';

export default {
  data(){
    return{
      items:[
        {name:'HTML',url:'https://img.icons8.com/color/256/000000/html-5.png'},
        {name:'Scss',url:'https://miro.medium.com/max/4000/1*H-9KGBGNHfvkd4F4MOY__g.png'},
        {name:'JavaScript',url:'https://img.icons8.com/color/256/000000/javascript.png'},
        {name:'jQuery',url:'https://i.imgur.com/lgAWIAL.png'},
        {name:'Vue',url:'https://i.imgur.com/7kQRg6J.png'},
        {name:'Git',url:'https://i.imgur.com/l5YHzCx.png'},
        {name:'GitHub',url:'https://i.imgur.com/2fb2xJB.png'},
        {name:'Sourcetree',url:'https://www.minicreo.com/mac-uninstaller/img/sourcetree-mac-catalina.png'},
      ],
      now: 2
    }
  },
  components:{
    slider
  },
  methods:{
    changeHandler(x){
      this.now = x;
    }
  }
}
</script>