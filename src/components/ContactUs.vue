<template>
  <div class="contact">
    <form class="form" action="https://getform.io/f/8fe3c85a-7427-4b9e-a26a-11b04eabb635" method="POST">
      <div class="grid form-grid ">
        <div class="col-12 form-wrap">
          <input class="form-input" type="text" name='name' placeholder="name" required v-model.trim="name">
        </div>
        <div class="col-12 form-wrap">
          <input class="form-input" type="email" name='email' placeholder="email" required v-model.trim="email">
        </div>
      </div>
      <div class="grid form-grid">
        <div class="col-24 form-wrap">
          <input class="form-input" type="text" name='subject' placeholder="subject" required v-model.trim="subject">
        </div>
      </div>
      <div class="grid form-grid">
        <div class="col-24 form-wrap">
          <textarea class="form-text form-input" name='message' placeholder="message" rows="5" style='resize:none' required v-model.trim="message"></textarea>
        </div>
      </div>
      <div class='form-btn'>
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
</template>

<style lang='scss'>
  .contact{
    padding-top: 200px;
  }
  .form{
    background-color: map-get($color,tertiary);
    width: 60%;
    margin: 0px auto;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(10,10,10,.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    &-input{
      width: 100%;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid map-get($map: $color, $key: primary);
    }
    &-grid{
      margin-bottom: 35px;
    }
    &-wrap{
      position: relative;
    }
    &-btn{
      text-align: center;
      >button{
        background: map-get($map: $color, $key: tertiary);
        border: 1px solid black;
        padding: 5px 10px;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
      }
    }
  }
  
</style>

<script>

export default {
  data(){
    return{
      name:'',
      email:'',
      subject:'',
      message:'',
      sendto: 'nike9712@gmail.com'
    }
  },
  methods:{
    
  }
}
</script>