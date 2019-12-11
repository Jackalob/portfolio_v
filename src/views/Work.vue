<template>
  <div class="work">
    <div class="work-btns">
      <button @click="changeComp('WorkBook')">書本</button>
      <button @click="changeComp('WorkList')">圖列</button>
    </div>
    <component :is="nowComponent" :data='works'></component>
  </div>
</template>

<style lang="scss"></style>

<script>
import WorkBook from "@/components/WorkBook.vue";
import WorkList from "@/components/WorkList.vue";
import axios from 'axios';

export default {
  data() {
    return {
      nowComponent: "WorkBook",
      works: null,
    };
  },
  methods: {
    changeComp(name){
      this.nowComponent = name
    },
    getWorks(){
      axios.get('/data.json')
      .then(res=>{
        this.works = res.data.work
      })
      .catch(err=>{
        alert(err)
      })
    }
  },
  beforeMount(){
    this.getWorks()
  },
  components: {
    WorkBook,
    WorkList
  }
};
</script>
