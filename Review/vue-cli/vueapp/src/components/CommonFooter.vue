<template>
    <div class="header" :style="{background:$store.state.color}">
        
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">
            {{obj.title}}
        </router-link> 
        


    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return{
                menu:[
                {
                    title:'电影',
                    path:'/',
                    color:'pink'
                },
                {
                    title:'音乐',
                    path:'/music',
                    color:'rgb(238, 167, 238)'
                },
                {
                    title:'书籍',
                    path:'/book',
                    color:'rgb(229, 248, 144)'
                },
                {
                    title:'图片',
                    path:'/picture',
                    color:'rgb(144, 210, 248)'
                }
            ]
            }
            
        },
        methods:mapMutations(['change']),
        created(){
            this.menu.forEach((obj)=>{
                if(obj.title == this.$route.path){
                    this.change({title:obj.title,color:obj.color});
                }
            });
        }
        
    }
</script>

<style lang="scss" scoped>
    .header{
        background: pink;
        height: 1rem;
        width: 100%;
        position: fixed;
        bottom:0;
        display:flex;
        a{
            flex:1;
            text-align: center;
            line-height: 1rem;
            &.router-link-exact-active:hover{
            color:#fff;
            
        }
        }
        
    }
</style>