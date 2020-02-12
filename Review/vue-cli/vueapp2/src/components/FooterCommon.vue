<template>
  <div id="nav">
    <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path">
        {{obj.title}}
    </router-link>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            menu:[
                {
                    title:'电影',
                    path:'/',
                    color:'pink'
                },
                {
                    title:'音乐',
                    path:'/music',
                    color:'pink'
                },
                {
                    title:'书籍',
                    path:'/book',
                    color:'pink'
                },
                {
                    title:'图片',
                    path:'/picture',
                    color:'pink'
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
#nav {
    position: fixed;
    bottom:0;
    width: 100%;
    height: 1rem;
    display: flex;
    a{
        flex:1;
    }
}
</style>