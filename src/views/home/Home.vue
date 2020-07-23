<template>
  <div id='home'>
      <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
      <HomeSwpier :banners="banners"></HomeSwpier>      
      <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar';
import HomeSwpier from './childComps/HomeSwiper';
import {getHomeMultidata} from 'network/home';
import RecommendView from './childComps/RecommendView';

export default {
  name:'Home',
  components:{
    NavBar,HomeSwpier,RecommendView
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created () {
    getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners);
    })
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>