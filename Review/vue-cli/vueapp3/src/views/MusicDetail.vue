<template>
    <div>
        <aplayer autoplay
            :music="musicData[0]"
            :list="musicData"
            :showLrc="true"
            v-if="show"
/>
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer'

    export default {
        data(){
            return {
                musicData:[],
                show:false
            }
        },
        created(){
            axios.get('./../data/musicdata.json?id='+this.$route.query.id).then((res)=>{
                
                // 循环接口返回的音乐数组  处理成播放器需要的格式
                res.data.musicData.forEach((obj)=>{
                    let music = {
                        src:obj.src,
                        title:obj.title,
                        artist:obj.author,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc
                    }
                    this.musicData.push(music);
                });

                this.show = true;

                
            }).catch(()=>{

            })
            // console.log(this.$route.query.id)
        },
        components:{
            Aplayer
        }
    }
</script>

<style lang="scss" scoped>

</style>