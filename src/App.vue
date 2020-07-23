<template>
  <div id="app">
    <router-view></router-view>

    <MainTabBar></MainTabBar>
    

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
export default{
  name:'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
 @import "assets/css/base.css";
</style>
