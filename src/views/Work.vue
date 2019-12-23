<template>
  <div class="work">
    <div class="work-sort">
      <div class="work-sort-warp">
        <div class="svg" :class="{svg_choosed:sortIsBook}" @click="sortIsBook = true;changeComp('WorkBook')">
          <svg class='svg-fill' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 32 32"><path d="M 9 4 C 7.355469 4 6 5.355469 6 7 L 6 25 C 6 26.644531 7.355469 28 9 28 L 26 28 L 26 4 Z M 9 6 L 24 6 L 24 22 L 9 22 C 8.648438 22 8.316406 22.074219 8 22.1875 L 8 7 C 8 6.433594 8.433594 6 9 6 Z M 11 9 L 11 11 L 22 11 L 22 9 Z M 9 24 L 24 24 L 24 26 L 9 26 C 8.433594 26 8 25.566406 8 25 C 8 24.433594 8.433594 24 9 24 Z"></path></svg>
        </div>
        <div class="svg" :class="{svg_choosed:!sortIsBook}" @click="sortIsBook = false;changeComp('WorkList')">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="32" height="32"
          viewBox="0 0 172 172"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><g class='svg-fill'><path d="M21.5,32.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75zM57.33333,35.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h93.16667c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,75.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75zM57.33333,78.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h93.16667c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,118.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75zM57.33333,121.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h93.16667c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376z"></path></g></g></g></svg>
        </div>
      </div>
    </div>
    <transition name="opacity"  mode="out-in">
    <component v-if='reArrangeData'  :is="nowComponent" :reArrangeData='reArrangeData'></component>
    </transition>
  </div>
</template>

<style lang="scss">
  .work{
    height: 100%;
  }
  .work-sort{
    @include flex(end,none);
    &-warp{
      display: flex;
      border: 3px solid map-get($map: $color, $key: primary);
      border-radius: 5px;
    }
  }
  .svg{
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 2px solid map-get($map: $color, $key: secondary);
    border-radius: 5px;
    @include flex();
    &-fill{
      display: block;
      fill:map-get($map: $color, $key: primary);
    }
  }
.svg_choosed{
  background-color: map-get($color,primary);
  .svg-fill{
    fill: map-get($map: $color, $key: tertiary);
  }
}
</style>
  
<script>
import WorkBook from "@/components/WorkBook.vue";
import WorkList from "@/components/WorkList.vue";
import axios from 'axios';

export default {
  data() {
    return {
      nowComponent: "WorkBook",
      data: null,
      sortIsBook: true,
      reArrangeData: null
    };
  },
  methods: {
    dataSort(list) {
      list.sort(function(a, b) {
        if (a.date > b.date) return -1;
        else if (a.date < b.date) return 1;
        else return 0;
      });
      list.sort(function(a, b) {
        if (a.importance > b.importance) return -1;
        else if (a.importance < b.importance) return 1;
        else return 0;
      });
    },
    getReArrangeData() {
      //先按照重要度排列再照日期排列
      let array = [];
      let temp = this.data.map((e, i) => {
        return {
          index: i,
          date: new Date(e.date.slice(0, 4), e.date.slice(5) - 1),
          importance: e.importance ? e.importance : 0
        };
      });
      this.dataSort(temp);
      temp.forEach(e => {
        array.push(this.data[e.index]);
      });
      return array;
    },
    changeComp(name){
      this.nowComponent = name
    },
    getData(){
      axios.get('/data.json')
      .then(res=>{
        this.data = res.data.work
        this.reArrangeData = this.getReArrangeData()
      })
      .catch(err=>{
        alert(err)
      })
    }
  },
  beforeMount(){
    this.getData()
  },
  components: {
    WorkBook,
    WorkList
  }
};
</script>
