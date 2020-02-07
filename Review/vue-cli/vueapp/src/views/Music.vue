<template>
    <div>
        <ul class="musicList">
            <li v-for="(obj,index) in musicList" :key="index" @click="goDetail(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            axios.get('./data/musiclist.json')
            .then((res)=>{
                
                this.musicList = res.data.albums;
                console.log(this.musicList);
            })
            .catch(()=>{
                alert('服务器错误');
            })
        },
        methods:{
            goDetail(id){
                this.$router.push({
                    path:'/music/musicdetail',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .musicList{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 50%;
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>