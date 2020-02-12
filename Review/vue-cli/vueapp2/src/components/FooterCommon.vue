<template>
    <div class="header" :style="{background:$store.state.color}">
        
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">
            {{obj.title}}
        </router-link> 
        


    </div>
</template>

<script>
import {mapMutations} from 'vuex';
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
                    color:'orange'
                },
                {
                    title:'书籍',
                    path:'/book',
                    color:'gray'
                },
                {
                    title:'图片',
                    path:'/picture',
                    color:'lightblue'
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
};
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    bottom:0;
    width: 100%;
    height: 1rem;
    display: flex;
    a{
        flex:1;
        line-height: 1rem;
        &.router-link-exact-active{
            color:#fff;
        }
    }
}
</style>