<template>
  <div id="app">
    <common-header></common-header>
    <div id="container">
        <router-view></router-view>
    </div>
    
    <common-footer></common-footer>
  </div>
</template>

<script>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:1rem;
  
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
