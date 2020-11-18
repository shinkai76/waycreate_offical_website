<template>
    <div id="app">
        <router-view v-if="$route.name === 'apply'" />
        <div v-else id="wrap">
            <MyNav></MyNav>
            <Login></Login>
            <div class="container">
                <BackToTop></BackToTop>
                <transition name="fade">
                    <keep-alive>
                        <router-view />
                    </keep-alive>
                </transition>
            </div>
            <Chat></Chat>
            <MyFooter></MyFooter>
        </div>
    </div>
</template>

<style lang="less">
    #app {
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        width: 100%;
        height: 100%;

        #wrap {
            width: 100%;
            max-width: 1920px;
            height: 100%;
            margin: 0 auto;
        }

        & > .container {
            width: 100%;
            height: 100%;
            margin-top: 60px;
        }

        .el-input.el-input--small .el-input__inner {
            padding: 0 5px;
        }
    }
</style>
<script>
    import MyNav from "./components/MyNav"
    import MyFooter from "./components/MyFooter"
    import BackToTop from "./components/BackToTop"
    import Login from "./components/Login"
    import Chat from "./components/Chat"
    export default {
        watch: {
            '$route': function (to, from) { // 路由跳转后滚动条回到顶部
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        },
        components: { MyNav, MyFooter, BackToTop, Login, Chat }
    }
</script>
<style>
    #apply {
        z-index: 2000000020;
        position: absolute;
    }
</style>
