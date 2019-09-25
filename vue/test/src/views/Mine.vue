<template>
    <div>
        <router-view></router-view>
        我的页面
        {{msg}}
        <!-- {{$route.params.id}}
        {{$route.params.name}} -->

        {{$route.query.id}}
        {{$route.query.name}}
        <router-link to="/mine/test1">子路由1</router-link>
        <router-link to="/mine/test2">子路由2</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>