<template>
  <TabBar>
    <!-- 可动态改变颜色 activeColor=“颜色” -->    
      <TabBarItem path="/home" activeColor="#ff5777"> 
         <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
         <img slot="item-img-act" src="~assets/img/tabbar/home_active.svg" alt="">
         <div slot="item-text">首页</div>         
      </TabBarItem>
      <TabBarItem path="/categroy" activeColor="#ff5777">
        <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-img-act" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div> 
      </TabBarItem>
      <TabBarItem path="/shop" activeColor="#ff5777">
        <img slot="item-img" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-img-act" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div> 
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="#ff5777">
       <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
       <img slot="item-img-act" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar';
import TabBarItem from 'components/common/TabBar/TabBarItem';

export default {
  name:'MainTabBar',
  components: {
      TabBar,TabBarItem
  }
}
</script>
<style scoped>
</style>