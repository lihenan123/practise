<template>
  <div id="app">
    <!-- <common-header></common-header> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <!-- <router-link to="/mine">我的 </router-link>| -->
      <!-- params传参 不能使用path直接传 需要使用name -->
      <router-link :to="{name:'mine',params:{id:666,name:'小王'}}">我的params </router-link>|
      <!-- query传参 -->
      <router-link :to="{path:'/mine',query:{id:666,name:'小王'}}">我的query </router-link>|
      <!-- 通过路径传参 -->
      <router-link to="/test/5/lisi">test</router-link> |
      <router-link to="/aaa">跳转aaa</router-link> |
      <router-link to="/c">跳转c </router-link>|

      <button @click="$router.push('/')"> 首页 </button>
       <button @click="$router.go(-1)"> 上一页 </button>
        <button @click="$router.go(1)"> 下一页 </button>
    </div>
    <transition name="fade">
       <router-view/>
    </transition>
  </div>
</template>

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
