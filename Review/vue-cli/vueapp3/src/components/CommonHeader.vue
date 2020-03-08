<template>
    <div class="header" :style="{background:$store.state.color}" >
        <button @click="goHome()">首页
        </button>
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        methods:{
            goHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 50px;
        background: red;
        position: fixed;
        top:0px;
        width:100%;
    }
</style>