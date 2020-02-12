<template>
  <div id="app">
    <Header-common></Header-common>
    <router-view/>
    <Footer-common></Footer-common>
    
  </div>
</template>

<script>
  import HeaderCommon from './components/HeaderCommon';
  import FooterCommon from './components/FooterCommon';
  export default{
    components:{
      FooterCommon,
      HeaderCommon
    }
  }

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:1rem;
}

</style>
