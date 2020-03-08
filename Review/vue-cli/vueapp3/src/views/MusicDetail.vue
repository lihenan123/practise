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
                /*[{
                    author: "老狼"
                    lrc: "lrc/我要你.lrc"
                    musicImgSrc: "http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg"
                    src: "http://up.mcyt.net/down/43422.mp3"
                    title: "我要你"
                    }]
                [{
                    src	必需	音频文件的 URL
                    title	'Untitled'	歌曲名称
                    artist	'Unknown'	演唱者
                    pic	none	封面图片 URL
                    lrc	none	LRC 歌词或者歌词文件的 URL
                }]
                */
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