<!--总组件-->
<template>
  <div id="app">
      <!-- commonHeader组件 -->
      <common-header></common-header>
      <div id="container">
          <router-view></router-view>
      </div>
      <common-footer></common-footer>
  </div>
</template>
<script>
    // 1 commonHeader组件 import 
    // 2 components声明组件
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    export default {
        components:{
           CommonHeader,
           CommonFooter
        }
    }


</script>

<style lang="scss">
#container{
  margin:50px 0;
}
</style>
