<template>
    <div class="header" :style="{background:$store.state.color}">
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header{
        background: pink;
        height: 1rem;
        width: 100%;
        position: fixed;
        top:0;
        line-height: 1rem;
    }
</style>