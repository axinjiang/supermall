<template>
  <div class="tab-bar-item" @click="router">
    <div v-if="isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-act"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot> 
    </div>                                         
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    // 动态绑定颜色
    activeColor:{
      type:String,
      default:'#6f6f6f'
    }
  },
  data(){
    return{
      // isActive:false
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      return this.isActive ? {} : {color:this.activeColor}
    }   
  },
  methods: {
    router(){
      this.$router.push(this.path);
    }
  }
}
</script>
<style scoped>
.tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color: #a5a5a5;
  }
  .tab-bar-item img{
    margin-bottom: 2px; 
    width: 38px;
    height: 24px;  
    margin-top: 3px;
    vertical-align: middle;
  }
</style>