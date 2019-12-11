<template>
  <div class="work">
    <div class="work-btns">
      <button @click="changeComp('WorkBook')">書本</button>
      <button @click="changeComp('WorkList')">圖列</button>
    </div>
    <component :is='nowComponent'></component>
  </div>
</template>

<style lang="scss"></style>

<script>
import WorkBook from "@/components/WorkBook.vue";
import WorkList from "@/components/WorkList.vue";

export default {
  data() {
    return {
      nowComponent: "WorkBook"
    };
  },
  methods: {
    changeComp(name){
      this.nowComponent = name
    }
  },
  components: {
    WorkBook,
    WorkList
  }
};
</script>
