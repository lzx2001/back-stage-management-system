<template>
    <div>
        这是HOme
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    name:"Home",
    methods: {
        logout(){
            sessionStorage.clear();
            this.$router.push("/")
        }
    },
}
</script>

<style>

</style>