<template>
   <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>
<style scoped>
#tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff; 
    box-shadow: 0 -2px 4px   rgba(255, 87,199, 0.5);   
}
</style>