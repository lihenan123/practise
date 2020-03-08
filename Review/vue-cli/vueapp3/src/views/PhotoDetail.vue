<template>
    <router-link to="/photo">
        <v-touch v-on:swipeleft="next()"  v-if="show" class="photo-detail" :style="{'background-image':'url('+$store.state.photoList[index].src+')'}"  >
        <!-- {{$route.query.index}} -->
    </v-touch>
    </router-link>
</template>
<script>
    // 获取到state中的photoList
    // import {mapState} from 'vuex';
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
            return {
                index:this.$route.query.index,
                show:false
            }
        },
        // created(){
        //     // console.log(this.photoList);
        //     console.log(this.$store.state.photoList);
        // },
        // computed:{
        //     ...mapState(['photoList'])
        // },
        beforeMount(){
            if(this.$store.state.photoList.length == 0){
                this.goPhoto();
            }else{
                this.show = true;
            }
        },
        methods:{
            goPhoto(e){
                this.$router.push('/photo');
                console.log(e);
                e.preventDefault();
            },
            next(){
                // 显示下一张图
                this.index++;
                if(this.index == this.$store.state.photoList.length){
                    this.index = 0;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .photo-detail{
        background: #000 url("http://localhost:8080/img/photo/1.jpg") no-repeat center center;
        background-size:contain;
        // width:100%;
        // height:100%;
        position: absolute;
        left:0px;
        top:1rem;
        right:0px;
        bottom:1rem;
        color:#f00;
    }
</style>


