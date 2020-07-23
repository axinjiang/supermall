<template>
    <!-- 头部导航栏 -->
    <div class="nav-bar">
        <!-- 左边 -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <!-- 中间 -->
        <div class="center">
            <slot name="center"></slot>
        </div>
        <!-- 右边 -->
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name:'NavBar',
}
</script>
<style scoped>
.nav-bar{
    display:flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 2px 1px rgba(100, 100, 100,.2);
}
.left , .right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>