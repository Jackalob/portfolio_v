<template>
  <div class="contact" @click="changeHandler(0,0,0,0)">
    <form class="form" action="https://getform.io/f/8fe3c85a-7427-4b9e-a26a-11b04eabb635" method="POST">
      <h1 class="form-title form-grid">Let's get in touch</h1>
      <div class="grid form-grid ">
        <div class="col-12 form-wrap" data='Name' :class="[name || nameStatus ? 'status-on':'', {'selected': nameStatus} ]">
          <input class="form-input" type="text" name='name' required v-model="name" @click.stop="changeHandler(1,0,0,0)" @select="changeHandler(1,0,0,0)">
        </div>
        <div class="col-12 form-wrap" data='Email' :class="[email || emailStatus ? 'status-on':'', {'selected': emailStatus} ]">
          <input class="form-input" type="email" name='email' required v-model="email" @click.stop="changeHandler(0,1,0,0)" @select="changeHandler(0,1,0,0)">
        </div>
      </div>
      <div class="grid form-grid">
        <div class="col-24 form-wrap" data='Subject' :class="[subject || subjectStatus ? 'status-on':'', {'selected': subjectStatus} ]">
          <input class="form-input" type="text" name='subject' required v-model="subject" @click.stop="changeHandler(0,0,1,0)" @select="changeHandler(0,0,1,0)">
        </div>
      </div>
      <div class="grid form-grid">
        <div class="col-24 form-wrap form-wrap-textarea" data='Message' :class="[message || messageStatus ? 'status-on':'', {'selected': messageStatus} ]">
          <textarea class="form-text form-input" name='message' style='resize:none' required v-model="message" @click.stop="changeHandler(0,0,0,1)" @select="changeHandler(1,0,0,0)"></textarea>
        </div>
      </div>
      <div class='form-btn'>
        <button class='form-btn-submit' type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<style lang='scss'>
  .contact{
    width: 100%;
    height: 100%;
    @include flex();
  }
  .form{
    background-color: map-get($color,tertiary);
    width: 700px;
    margin: 0px auto;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(10,10,10,.1);
    &-title{
      text-align: center;
      color: map-get($map: $color, $key: accent2);
      font-family: 'Courgette', "Noto Sans" , "Noto Sans TC" , sans-serif;
      font-size: 40px;
    }
    &-wrap{
      position: relative;
      @include pseudo(before,''){
        content: attr(data);
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 5px;
        padding: 0 5px;
        color: map-get($map: $color, $key: text);
        background-color: map-get($color,tertiary);
        transition: all .15s;
      }
      &-textarea{
        &::before{
          top: 20px;
        }
        >textarea{
          height: 110px;
        }
      }
    }
    &-input{
      width: 100%;
      height: 40px;
      padding: 10px 10px;
      border-radius: 6px;
      border: 1px solid map-get($map: $color, $key: contact_b);
      outline: none;
    }
    &-grid{
      margin-bottom: 35px;
    }
    &-btn{
      text-align: center;
      &-submit{
        color: map-get($map: $color, $key: tertiary);
        background: map-get($map: $color, $key: accent2);
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.16);
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        >div{
          width: 30px;
          height: 30px;
          position: absolute;
          background-color: rgba(#fff,.1);
          border-radius: 50%;
        }
      }
    }
  }
  .status-on::before{
    top: 0;
    font-size: 12px;
  }
  .selected{
    >input{
      border: 2px solid map-get($map: $color, $key: accent2);
    }
    >textarea{
      border: 2px solid map-get($map: $color, $key: accent2);
    }
    &::before{
      color: map-get($map: $color, $key: accent2);
    }
  }
  @keyframes wave{
    0%{
      transform: scale(1);
    }
    55%{
      opacity: 1;
    }
    100%{
      transform: scale(10);
      opacity: 0;
    }
  }
</style>

<script>

export default {
  data(){
    return{
      nameStatus: false,
      emailStatus: false,
      subjectStatus: false,
      messageStatus: false,
      name:'',
      email:'',
      subject:'',
      message:'',
    }
  },
  methods:{
    changeHandler(num1,num2,num3,num4){
      let list = [false,true]
      this.nameStatus =  list[num1]
      this.emailStatus =  list[num2]
      this.subjectStatus =  list[num3]
      this.messageStatus =  list[num4]
    }
  },
  watch:{
    nameStatus(){},
    emailStatus(){},
    subjectStatus(){},
    messageStatus(){},
  },
  mounted(){
    document.querySelector('.form-btn>button').addEventListener('click',function(e){
      let left = e.pageX - this.getClientRects()[0].left + 'px'
      let top = e.pageY - this.getClientRects()[0].top + 'px'
      this.innerHTML += `<div id='wave-effect' style='top:${top};left:${left};animation: wave .8s linear;'></div>`
      setTimeout(() => {
        document.querySelector('#wave-effect').remove();
      }, 700);
      // document.querySelector('#wave-effect').addEventListener('animationend',function(){
      //   this.remove()
      // })
    })
  }
}
</script>