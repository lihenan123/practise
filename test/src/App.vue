<template>
  <div id="app">
   
   <rouetr-link to="/">首页</rouetr-link> |
   <rouetr-link to="/mine">我的</rouetr-link> 
   <rouetr-view/>
   <common-header></common-header>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader';
export default {
  components:{
    CommonHeader
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
